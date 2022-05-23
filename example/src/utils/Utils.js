export const initBehaviorSubjectState = (value) => {
  if (typeof value === "function") {
    return value.call();
  }
  return value;
};

export const onCheckKeyIfPresent = (key) => {
  if (!key || key === "") {
    throw new Error("Key Parameter is required");
  }
  return key;
};
