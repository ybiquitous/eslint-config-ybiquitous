import { defineConfig } from "vitest/config"; // eslint-disable-line import/no-unresolved, node/no-missing-import

export default defineConfig({
  test: {
    watchExclude: ["**/tmp/**"],
  },
});
