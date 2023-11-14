import { ReactNode } from "react";

interface Props {
  children?: JSX.Element;
  text: string;
}
export default function Button({ children, text }: Props): ReactNode {
  return (
    <button className="bg-purple-500 w-24 border-2 border-double border-purple-600 rounded-xl hover:bg-purple-950 p-1">
      {text}
      {children}
    </button>
  );
}
