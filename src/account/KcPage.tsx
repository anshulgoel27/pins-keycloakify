import { lazy } from "react";
import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
import type { KcContext } from "./KcContext";

import "./main.css";

const KcAccountUi = lazy(() => import("./KcAccountUi"));

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;

  return <KcAccountUiLoader kcContext={kcContext} KcAccountUi={KcAccountUi} content={
    [
      {
        "label": "personalInfo",
        "path": ""
      },
      {
        "label": "accountSecurity",
        "children": [
          {
            "label": "signingIn",
            "path": "account-security/signing-in"
          },
          {
            "label": "deviceActivity",
            "path": "account-security/device-activity"
          },
        ]
      },
      {
        "label": "applications",
        "path": "applications"
      },
    ]
  } />;
}
