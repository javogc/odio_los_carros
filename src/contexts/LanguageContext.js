import { createContext } from "react";
import { translations } from "../utils/translations";

export const LanguageContext = createContext(translations.english);
