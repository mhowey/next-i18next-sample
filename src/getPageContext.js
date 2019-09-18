/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from "jss";
import {
  createGenerateClassName,
  createMuiTheme
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    error: red
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },

  appBar: {
    top: 0,
    bottom: "auto"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
