import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      include: [
        "src/**/*.{test,spec}.{ts,tsx}",
        "src/**/__tests__/**/*.unit.{test,spec}.ts",
      ],
      name: "unit",
      environment: "node",
    },
  },
  {
    test: {
      include: [
        "src/**/browser/**/*.{test,spec}.{ts,tsx}",
        "src/**/__tests__/**/*.browser.{test,spec}.ts",
      ],
      name: "browser",
      browser: {
        enabled: true,
        name: "chrome",
      },
    },
  },
]);
