"use client";
import { useLocale, useTranslations } from "next-intl";
import SelectLanguage from "./SelectLanguage";
import { routing } from "@/i18n/routing";

function LangugaeSwitcher() {
  const currentLocale = useLocale();

  const t = useTranslations("LocaleSwitcher");

  return (
    <div>
      <SelectLanguage label={currentLocale} defaultValue={currentLocale}>
        {routing.locales.map((loc: string) => (
          <option value={loc} key={loc}>
            {t("locale", { locale: loc })}
          </option>
        ))}
      </SelectLanguage>
    </div>
  );
}

export default LangugaeSwitcher;
