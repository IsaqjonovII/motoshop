/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEventHandler } from "react";

export interface IInput {
  id: string;
  type?: string;
  className?: string;
  isPassword?: boolean;
  minLength?: string | number;
  maxLength?: string | number;
  name: string;
  label?: string;
  placeholder?: string;
  value: string | number | any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IButton {
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick: () => void;
  children: (string | JSX.Element)[] | string | JSX.Element;
}
export interface IText {
  children: (string | JSX.Element)[] | string | JSX.Element;
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  bold: number;
}
