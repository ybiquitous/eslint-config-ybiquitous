import { defineConfig } from "vitest/config"; // eslint-disable-line import/no-unresolved

export default defineConfig({
  server: {
    watch: { ignored: ["**/tmp/**"] },
  },
  test: {
    testTimeout: 30_000 /* ms */,
  },
});
