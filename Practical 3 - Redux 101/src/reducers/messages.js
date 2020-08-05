import {ADD_MESSAGE, DELETE_MESSAGE} from "../constants/messages";

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          user: action.userName,
          date: action.date
        }
      ];
    case DELETE_MESSAGE:
      return state.filter(message => message.id !== action.id);
    default:
      return state;
  }
};

export default messages;