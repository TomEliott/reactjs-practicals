import data from "./fixtures";

let state = data;

export const getState = () => state;
export const setState = (newState) => (state = newState);