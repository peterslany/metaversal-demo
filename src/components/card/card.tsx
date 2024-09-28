import React, { ReactNode } from "react";
import { Spinner } from "../spinner";

type CardProps = {
  children: ReactNode;
  footer?: ReactNode;
};

const Card = ({ children, footer }: CardProps) => {
  return (
    <div className="bg-background shadow rounded-2xl">
      <div className="p-4">{children}</div>
      {footer && <div className="px-4 py-2 border-t border-gray-300">{footer}</div>}
    </div>
  );
};

export default Card;
