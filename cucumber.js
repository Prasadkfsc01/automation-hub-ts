module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],

    requireModule: ["ts-node/register"],

    require: [
      "src/support/**/*.ts",
      "src/hooks/**/*.ts",
      "src/step-definitions/**/*.ts",
    ],

    format: ["progress", "html:reports/cucumber-report.html"],
  },
};
