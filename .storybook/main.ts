import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // allowSyntheticDefaultImports: false, // speeds up storybook build time
      // esModuleInterop: false, // speeds up storybook build time
      shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
      shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};
export default config;
