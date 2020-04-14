const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const execa = require("execa");
const pkg = require("../package.json");

const baseDir = path.join(__dirname, "..");
const tmpDir = path.join(baseDir, "tmp") + path.sep;
const debug = process.env.DEBUG === "true";
const log = (msg) => {
  if (debug) {
    process.stdout.write(`${msg}${EOL}`);
  }
};

// eslint-disable-next-line max-statements
const $ = (cmd, ...args) => {
  const cmdArgs = args.filter((arg) => typeof arg === "string");
  const options = args.find((arg) => typeof arg === "object" && arg !== null) || {};
  log(`> ${cmd} '${cmdArgs.join("' '")}'`);
  const { stdout } = execa.sync(cmd, cmdArgs, options);
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

// eslint-disable-next-line max-statements
const sandbox = (callback) => {
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }

  const workDir = fs.mkdtempSync(tmpDir);
  try {
    process.chdir(workDir);
    return callback(workDir);
  } catch (err) {
    const { stdout, stderr } = err;
    if (typeof stdout === "string" && stdout !== "") {
      process.stdout.write(`==================================================${EOL}`);
      process.stdout.write(`${stdout}${EOL}`);
      process.stdout.write(`==================================================${EOL}`);
    }
    if (typeof stderr === "string" && stderr !== "") {
      process.stderr.write(`==================================================${EOL}`);
      process.stderr.write(`${stderr}${EOL}`);
      process.stderr.write(`==================================================${EOL}`);
    }
    throw err;
  } finally {
    process.chdir(baseDir);
    $("rm", "-rf", tmpDir);
  }
};

const isJs = (name) => name.endsWith(".js");
const lintConfigFiles = [pkg.main, ...pkg.files.filter(isJs)];

module.exports = { $, sandbox, lintConfigFiles };
