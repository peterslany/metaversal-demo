import React, { ReactNode } from "react";

type ButtonProps = {
  variant: "filled" | "outlined";
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ variant = "filled", children, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        variant === "filled"
          ? "primary-gradient text-white hover:secondary-gradient font-bold"
          : "border border-primary text-primary hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
      } rounded-full px-4 py-1`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
