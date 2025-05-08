import React from "react";
import classes from "./authbuttons.module.css";
import { useTranslations } from "next-intl";

function AuthButtons() {
  const t = useTranslations("HomePage");
  return (
    <div className={classes.authButtonsContainer}>
      <button className="">{t("header.signin")}</button>
      <button>{t("header.signout")}</button>
    </div>
  );
}

export default AuthButtons;
