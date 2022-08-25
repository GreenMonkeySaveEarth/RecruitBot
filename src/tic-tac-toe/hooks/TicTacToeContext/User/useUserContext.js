import { useContext } from "react";
import { UserContext } from "./userContext";

export const useUserContext = () => {
    const context = useContext(UserContext)
    return context
}