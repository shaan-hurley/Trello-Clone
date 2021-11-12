export const CONSTANTS = {
  ADD_CARD: "ADD_CARD",
  ADD_LIST: "ADD_LIST",
  DELETE_CARD: "DELETE_CARD",
  DELETE_LIST: "DELETE_LIST",
};

//List actions to add and delete lists
export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

export const deleteList = (listId) => {
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: listId,
  };
};

//Card actions to add and delete cards
export const addCard = (text, listId) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listId },
  };
};

export const deleteCard = (listId, cardId) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { listId, cardId },
  };
};
