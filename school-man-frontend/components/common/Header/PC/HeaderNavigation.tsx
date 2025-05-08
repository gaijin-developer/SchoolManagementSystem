import { Link } from "@/i18n/navigation";
import classes from "./headerNav.module.css";
import { useTranslations } from "next-intl";

function HeaderNavigation() {
  const t = useTranslations("HomePage");

  return (
    <nav className={classes.name}>
      <Link href="/features">{t("header.features")}</Link>
      <Link href="/pricing">{t("header.pricing")}</Link>
    </nav>
  );
}

export default HeaderNavigation;
