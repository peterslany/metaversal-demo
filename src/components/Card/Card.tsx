import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="bg-background p-4 shadow rounded-2xl">{children}</div>;
};

export default Card;
