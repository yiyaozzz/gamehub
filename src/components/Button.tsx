import React from "react";
interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "warning";
}

const Button = ({ children, onClick, color = "warning" }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
