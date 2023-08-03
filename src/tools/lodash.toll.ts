import _ from "lodash";

export const standardForAPI = (obj: any, keyMappings: any) => {
  return _.mapKeys(obj, (value, key) => keyMappings[key] || key);
};
