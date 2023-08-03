function setLS(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  } catch (error) {
    console.error(`Error setting localStorage key '${key}':`, error);
    return value;
  }
}

function getLS(key: string, defaultValue: any) {
  try {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(`Error getting localStorage key '${key}':`, error);
    return defaultValue;
  }
}

export { getLS, setLS };
