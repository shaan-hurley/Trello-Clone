import React from "react";
import CardItem from "../components/CardItem";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { render, screen } from "@testing-library/react";

const mockList = [
  {
    id: 0,
    title: "List 1",
    cards: [
      {
        id: 0,
        title: "Card 1",
      },
      {
        id: 1,
        title: "Card 2",
      },
    ],
  },
  {
    id: 1,
    title: "List 2",
    cards: [
      {
        id: 0,
        title: "Card 1",
      },
      {
        id: 1,
        title: "Card 2",
      },
    ],
  },
];

describe("Testing Cards Component", () => {
  test("Cards component renders", () => {
    const store = createStore(reducer);
    console.log("Checking mockList", mockList[0].id);
    render(
      <Provider store={store}>
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId={String(mockList[0].id)}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                key={mockList.id}>
                <CardItem lists={mockList} />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Provider>
    );
  });
});
