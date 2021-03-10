const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const { execFileSync } = require("child_process");

const BASE_DIR = path.join(__dirname, "..");
const TMP_DIR = path.join(BASE_DIR, "tmp") + path.sep;
const DEBUG = process.env.DEBUG === "true";
const PATH = path.join(process.cwd(), "node_modules", ".bin") + path.delimiter + process.env.PATH;

const log = (msg) => {
  if (DEBUG) {
    process.stdout.write(`${msg}${EOL}`);
  }
};

const $ = (cmd, ...args) => {
  const cmdArgs = args.filter((arg) => typeof arg === "string");
  const options = args.find((arg) => typeof arg === "object" && arg !== null) || {};
  log(`> ${cmd} '${cmdArgs.join("' '")}'`);
  const stdout = execFileSync(cmd, cmdArgs, {
    ...options,
    encoding: "utf8",
    env: { ...process.env, ...options.env, PATH },
  }).trim();
  const maxLines = 20;
  const lines = stdout.split(EOL);
  if (lines.length < maxLines) {
    log(stdout);
    return stdout;
  }
  const trimmed = lines.slice(0, maxLines).join(EOL);
  log(`${trimmed + EOL}(...)${EOL}`);
  return stdout;
};

const sandbox = (callback) => {
  if (!fs.existsSync(TMP_DIR)) {
    fs.mkdirSync(TMP_DIR);
  }

  const workDir = fs.mkdtempSync(TMP_DIR);
  try {
    process.chdir(workDir);
    return callback(workDir);
  } catch (err) {
    const { stdout, stderr } = err;
    if (typeof stdout === "string" && stdout !== "") {
      process.stdout.write(`> STDOUT =========================================${EOL}`);
      process.stdout.write(`${stdout}${EOL}`);
      process.stdout.write(`< STDOUT =========================================${EOL}`);
    }
    if (typeof stderr === "string" && stderr !== "") {
      process.stderr.write(`> STDERR =========================================${EOL}`);
      process.stderr.write(`${stderr}${EOL}`);
      process.stderr.write(`< STDERR =========================================${EOL}`);
    }
    throw err;
  } finally {
    process.chdir(BASE_DIR);
    $("rm", "-rf", TMP_DIR);
  }
};

module.exports = { $, sandbox };
