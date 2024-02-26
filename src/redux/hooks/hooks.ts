import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "../store/store";

export const useDispath: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
