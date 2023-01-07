export const syncLS = (store) => {
  return function (next) {
    return function (action) {
      if (action.type === "ADD_LOGS" || action.type === "CLEAR_LOGS") {
        const result = next(action);
        localStorage.setItem("ls_logs", JSON.stringify(store.getState().logs));
        return result;
      }
      return next(action);
    };
  };
};

export const getLogsFromLs = (key) => {
  const lsProducts = localStorage.getItem(key);
  if (!lsProducts) return [];
  try {
    const value = JSON.parse(lsProducts);
    return value;
  } catch (e) {
    return [];
  }
};
