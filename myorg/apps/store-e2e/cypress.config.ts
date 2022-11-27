// Roughly based off of https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md

import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

const baseCypressConfig = {
  ...nxE2EPreset(__dirname),
  specPattern: "**/*.feature",
  setupNodeEvents
}

export default defineConfig({
  e2e: {
    ...baseCypressConfig
  }
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor",
  webpack({
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js", ".mjs"]
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [{
              loader: "ts-loader"
            }]
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config
              }
            ]
          }
        ]
      }
    }
  }))
  return config;
}

