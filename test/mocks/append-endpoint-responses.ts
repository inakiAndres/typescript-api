export const RESPONSE_APPEND = ["hello", "simple", "array", "bye"];
export const ERROR_START = {
  errors: [
    { msg: "Invalid value", param: "start", location: "query" },
    { msg: "Start param is required", param: "start", location: "query" },
  ],
};
export const ERROR_END = {
  errors: [
    { msg: "Invalid value", param: "end", location: "query" },
    { msg: "End param is required", param: "end", location: "query" },
  ],
};
