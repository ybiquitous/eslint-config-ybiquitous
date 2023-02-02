import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { EOL } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const BASE_DIR = path.join(__dirname, "..");
const TMP_DIR = path.join(BASE_DIR, "tmp") + path.sep;
const DEBUG = process.env.DEBUG === "true";
const PATH = path.join(process.cwd(), "node_modules", ".bin") + path.delimiter + process.env.PATH;

/**
 * @param {string} msg
 */
const log = (msg) => {
  if (DEBUG) {
    process.stdout.write(`${msg}${EOL}`);
  }
};

/**
 * @param {string} cmd
 * @param {string[]} args
 * @param {import("child_process").ExecFileSyncOptions} options
 */
export const $ = (cmd, args = [], options = {}) => {
  log(`> ${cmd} '${args.join("' '")}'`);
  const stdout = execFileSync(cmd, args, {
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

/**
 * @param {(workDir: string) => void} callback
 */
export const sandbox = (callback) => {
  mkdirSync(TMP_DIR, { recursive: true });

  const workDir = mkdtempSync(TMP_DIR);
  try {
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
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
};
