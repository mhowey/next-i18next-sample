import React from "react";
import Button from "@material-ui/core/Button";
import { i18n, withNamespaces } from "../i18n";

class Index extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <text>
          <h1>{i18n.t("nextdata:info")}</h1>
        </text>
        <br />
        <br />
        <br />
        <Button
          variant="outlined"
          color="inherit"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
          }
        >
          {i18n.t("logout")}
        </Button>
      </div>
    );
  }
}

export default withNamespaces(["nextdata"])(Index);
