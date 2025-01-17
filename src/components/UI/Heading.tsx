import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  isWhite?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ children, className = "", isWhite = false }) => {
  return (
    <h2 className={`text-heading font-bold ${isWhite ? "text-white" : "text-primary"} ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
