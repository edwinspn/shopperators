import { ReactNode } from "react";

export default function Footer(): ReactNode {
  return (
    <footer className="bg-gray-800 pt-8 pb-6 w-full">
      <p className="text-sm text-center text-neutral-500 font-semibold py-1">
        Copyright © <span id="get-current-year">{(new Date()).getFullYear()}</span> Shopperators
      </p>
    </footer>
  );
}
