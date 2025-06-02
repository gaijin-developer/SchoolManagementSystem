import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function NotFound() {
  const t = useTranslations("Errors");
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col text-center">
        <p> {t("notfound")} </p>
        <Link href="/" className="pt-4">
          <Button className="border-2 rounded-md px-4 py-2">
            {t("gohome")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
