import _ from "lodash";

export const standardForAPI_old = (obj: any, keyMappings: any) => {
  return _.mapKeys(obj, (value, key) => keyMappings[key] || key);
};
export function standardForAPI(object: any, keyMap: any) {
  return _.reduce(
    object,
    (result: any, value, key) => {
      const keys = keyMap[key] ? keyMap[key].split(".") : [key];

      let nestedObj = result;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!nestedObj[keys[i]]) {
          nestedObj[keys[i]] = {};
        }
        nestedObj = nestedObj[keys[i]];
      }

      nestedObj[keys[keys.length - 1]] = value;

      return result;
    },
    {}
  );
}
