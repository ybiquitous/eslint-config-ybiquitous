const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const execa = require("execa");
const pkg = require("../package.json");

const baseDir = path.join(__dirname, "..");
const tmpDir = path.join(baseDir, "tmp") + path.sep;

const $ = (cmd, ...args) => {
  process.stdout.write(`> ${[cmd, ...args].join(" ")}${EOL}`);
  const { stdout } = execa.sync(cmd, args, { shell: true });
  const maxLines = 20;
  const lines = stdout.split(EOL);
  if (lines.length < maxLines) {
    process.stdout.write(`${stdout}${EOL}`);
    return stdout;
  }
  const trimmed = lines.slice(0, maxLines).join(EOL);
  process.stdout.write(`${trimmed + EOL}(...)${EOL}${EOL}`);
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
    $("rm", "-rf", workDir);
  }
};

const isJs = name => name.endsWith(".js");
const lintConfigFiles = [pkg.main, ...pkg.files.filter(isJs)];

module.exports = { $, sandbox, lintConfigFiles };
