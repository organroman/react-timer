export const addToLogs = (log) => {
  return {
    type: "ADD_LOGS",
    payload: log,
  };
};

export const clearLogs = () => {
  return {
    type: "CLEAR_LOGS",
  };
};
