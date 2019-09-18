import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import { i18n, withNamespaces } from "../i18n";

const LanguageSwitch = ({ router }) => (
  <ul>
    <li>
      <Link href={`${router.pathname}?en`}>
        <a
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
          }
        >
          en
        </a>
      </Link>
    </li>
    <li>
      <Link href={`${router.pathname}?ru`}>
        <a
          onClick={() =>
            i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
          }
        >
          ru
        </a>
      </Link>
    </li>
  </ul>
);

export default withRouter(LanguageSwitch);
