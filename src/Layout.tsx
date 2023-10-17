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
      <main className="bg-gray-900">{children}</main>
      <Footer />
    </>
  );
}