const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const execa = require("execa");
const pkg = require("../package.json");

const baseDir = path.join(__dirname, "..");
const tmpDir = path.join(baseDir, "tmp") + path.sep;
const debug = process.env.DEBUG === "true";
const log = msg => {
  if (debug) {
    process.stdout.write(`${msg}${EOL}`);
  }
};

const $ = (cmd, ...args) => {
  log(`> ${cmd} '${args.join("' '")}'`);
  const { stdout } = execa.sync(cmd, args);
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

const sandbox = callback => {
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }

  const workDir = fs.mkdtempSync(tmpDir);
  try {
    process.chdir(workDir);
    return callback(workDir);
  } finally {
    process.chdir(baseDir);
    $("rm", "-rf", tmpDir);
  }
};

const isJs = name => name.endsWith(".js");
const lintConfigFiles = [pkg.main, ...pkg.files.filter(isJs)];

module.exports = { $, sandbox, lintConfigFiles };
