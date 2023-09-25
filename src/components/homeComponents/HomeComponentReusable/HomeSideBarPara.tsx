import React from "react";
import { HomeSideBarParaProps } from "../../../types/Types";

export default function HomeSideBarPara({
  setText,
  value,
  title,
}: HomeSideBarParaProps) {
  return (
    <p className="cursor-pointer" onClick={() => setText(value)}>
      {title}
    </p>
  );
}
