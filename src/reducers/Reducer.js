import { CONSTANTS } from "../actions";

let listId = 2;
let cardId = 2;

const initialState = [
  {
    id: 0,
    title: "Card 1",
    cards: [
      {
        id: 0,
        text: "Card 1.1",
      },
      {
        id: 1,
        text: "Card 1.2",
      },
    ],
  },
  {
    id: 1,
    title: "Card 2",
    cards: [
      {
        id: 0,
        text: "Card 2.1",
      },
      {
        id: 1,
        text: "Card 2.2",
      },
    ],
  },
];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        id: listId,
        title: action.payload,
        cards: [],
      };
      listId++;
      console.log("Checking add list reducer", newList);
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        id: cardId,
        text: action.payload.text,
      };
      cardId++;
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;

    case CONSTANTS.DELETE_CARD:
      const newStateDelete = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: list.cards.filter(
              (card) => card.id !== action.payload.cardId
            ),
          };
        } else {
          return list;
        }
      });
      return newStateDelete;
    case CONSTANTS.DELETE_LIST:
      const listCards = state.reduce((list, acc = []) => {
        if (list.id === action.payload) {
          acc = list.cards;
        }
        return acc;
      });
      let newStateDeleteList = state
        .filter((list) => list.id !== action.payload)
        .map((list) => {
          if (list.id === action.payload - 1) {
            const newCards = listCards.cards.map((card) => {
              card.id = card.id + list.cards.length;
              return card;
            });
            list.cards = [...list.cards, ...newCards];
          }
          return list;
        });
      listId--;
      return newStateDeleteList;

    default:
      return state;
  }
};

export default Reducer;
