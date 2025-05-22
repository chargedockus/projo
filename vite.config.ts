export default {
  // Target environment
  target: "es2022",
  lib: ["es2023"],

  // Module settings
  module: "esnext",
  moduleResolution: "bundler",

  // Linting and strictness
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noFallthroughCasesInSwitch: true,

  // Other settings
  skipLibCheck: true,
  isolatedModules: true,
  moduleDetection: "force",
};