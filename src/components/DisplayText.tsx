import React from "react";

interface DisplayTextProps {
  text: string;
}

const DisplayText: React.FC<DisplayTextProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default DisplayText;
