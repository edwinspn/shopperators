import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface Props {
  children: JSX.Element;
}

const items = [{ name: "Groceries", path: "/groceries" }];

export default function Layout({ children }: Props): ReactNode {
  return (
    <>
      <Navbar items={items} />
      <main className="bg-slate-900 text-white">{children}</main>
      <Footer />
    </>
  );
}