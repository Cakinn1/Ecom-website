import React from "react";
import { MainIdeasImagesProps } from "../../../types/Types";

export default function MainIdeasImages({ src }: MainIdeasImagesProps) {
  return (
    <img src={src} className="object-cover w-full h-full rounded-3xl" alt="" />
  );
}
