import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): ReactNode {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900">{children}</main>
      <Footer />
    </>
  );
}
