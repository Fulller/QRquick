export enum languageEnum {
  VI = "vi",
  EN = "en",
}

export interface initStateInterface {
  language: languageEnum;
}

export const settingInitState: initStateInterface = {
  language: languageEnum.EN,
};
