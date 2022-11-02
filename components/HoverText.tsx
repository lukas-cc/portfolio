import React from "react";

export const HoverText = ({ text }: { text: string[] }) => {
  return (
    <div className="flex gap-2">
      {text.map((elem) => (
        <p
          key={elem}
          className="text-2xl transition ease-in-out delay-50 hover:text-yellow-200"
        >
          {elem}
        </p>
      ))}
    </div>
  );
};
