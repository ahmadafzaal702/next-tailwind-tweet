import { FC } from "react";

const Span: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-gray-500 mr-1">{children}</span>;
};

export default Span;
