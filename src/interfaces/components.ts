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
}