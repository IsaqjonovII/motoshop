import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import type { RootState, AppDispatch } from "store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState<boolean>(defaultValue);

  function toggleValue(value: boolean) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
