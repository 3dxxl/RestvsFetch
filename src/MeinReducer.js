import { initialState } from "./MeinStore";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "farbewechselt":
      return {
        color: "green"
        //Item:payload,
      };

    default:
      return state;
  }
};
