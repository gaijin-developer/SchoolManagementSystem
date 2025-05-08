"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";
import { useParams } from "next/navigation";
import React, { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  label: string;
  defaultValue: string;
};

function SelectLanguage({ children, label, defaultValue }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      //@ts-expect-error the syntax is not familiar to typescript
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  };
  return (
    <label
      className={clsx(
        "relative  mt-2",
        isPending && " transition-opacity [&:disabled]:opacity-80"
      )}
    >
      <p className="sr-only ">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-2 pl-2 pr-6 focus:outline-none rounded border-b-2"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleLanguageChange}
      >
        {children}
      </select>
    </label>
  );
}

export default SelectLanguage;
