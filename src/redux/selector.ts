import _ from "lodash";

export const user = (state: any) => state.user;
export const language = (state: any): string =>
  _.get(state, "setting.language", "en");
