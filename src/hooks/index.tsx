import { IAdHelmetAndGear, IAdMoto, IMotoAd } from "interfaces/responses";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import type { RootState, AppDispatch } from "store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppDispatch: any = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function usePaginate(data: IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<IAdMoto[] | IAdHelmetAndGear[] | IMotoAd[]>([]);

  function handlePagination(pageNum: number) {
    setCurrentPage(pageNum);
    const startInx: number = (pageNum - 1) * 8;
    const endInx: number = startInx + 8;
    const slicedData = data.slice(startInx, endInx);

    setCurrentData(slicedData);
  }

  return { handlePagination, currentData, currentPage, setCurrentData };
}
