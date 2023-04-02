import { FC } from "react";

const IconDiv: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex items-center text-gray-600">{children}</div>;
};

export default IconDiv;
