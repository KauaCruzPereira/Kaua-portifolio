import { useContext } from "react";
import { NavigationContext } from "../contexts/navigationContext";

export const useNavigation = () => useContext(NavigationContext);
