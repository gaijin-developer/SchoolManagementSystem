import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="grid place-items-center border-2 min-h-screen">
      <div className="flex flex-col text-center">
        <p> You Seem to be lost </p>
        <Link href="/" className="pt-4">
          <Button className="border-2 rounded-md px-4 py-2">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
