import React from "react";
import List from "../components/List";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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

describe("Testing list component", () => {
  test("renders lists", () => {
    render(
      <Provider store={createStore(reducer)}>
        <DragDropContext>
          <Droppable droppableId={String(mockList.id)}>
            {(provided) =>
              mockList.map((list) => (
                <div ref={provided.innerRef} key={list.id}>
                  <List title={list.title} cards={list.cards} />
                  {provided.placeholder}
                </div>
              ))
            }
          </Droppable>
        </DragDropContext>
      </Provider>
    );

    const getList = screen.getAllByText("List", { exact: false });
    expect(getList.length).toBe(2);
    expect(getList[0].textContent).toBe("List 1");
    expect(getList[1].textContent).toBe("List 2");
    
    const getCard = screen.getAllByText("Card", { exact: false });
  });
});
