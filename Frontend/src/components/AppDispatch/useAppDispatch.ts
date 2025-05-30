import { useDispatch } from "react-redux";
import { AppDispatch } from "../../pages/store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
