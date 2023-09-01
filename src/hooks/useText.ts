import text from "../configs/language.json";
import { useSelector } from "react-redux";
import * as selector from "../redux/selector";
import _ from "lodash";
import { languageEnum } from "../constans/setting.init.const";

type LanguageKeys = keyof (typeof text)[languageEnum.EN];

export function useText(): any {
  const language = useSelector(selector.language);
  return (key: LanguageKeys) => _.get(text, `[${language}][${key}]`) || "";
}
