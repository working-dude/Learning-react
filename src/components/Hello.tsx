import { ReactNode } from "react";
interface ButtonsProps {
  children: ReactNode;
}
// Passing props to the component
const Buttons = ({ children }: ButtonsProps) => {
  return <div>{children}</div>;
};

export default Buttons;
