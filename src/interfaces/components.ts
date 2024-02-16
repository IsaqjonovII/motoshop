/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioChangeEvent } from "antd";
import type { BaseOptionType, DefaultOptionType } from "antd/es/select";
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
  options?: (BaseOptionType | DefaultOptionType)[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
}
export interface IButton {
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  children: (string | JSX.Element)[] | string | JSX.Element;
  disabled?: boolean;
}
export interface IText {
  children: (string | JSX.Element)[] | string | JSX.Element | any;
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  bold: number;
}
export interface IRadioBtn {
  btnStyle?: "solid" | null;
  chilren: {
    value: string;
    label: string;
  }[];
  onChange: (e: RadioChangeEvent) => void;
}
export interface IModal {
  close: () => void;
  open: () => void;
  isOpen: boolean;
  isLoading?: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
}