import React from "react";
import AddButton from "../components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";





describe("Testing Add Button Component", () => {
  test("Add button renders and has correct initial text", async () => {
    render(
      <Provider store={createStore(reducer)}>
        <AddButton />
      </Provider>
    );
    const buttonText = screen.getByText("Add another list");
    expect(buttonText).toBeInTheDocument();
  });

  test("Testing add list/card title event", () => {
    render(
      <Provider store={createStore(reducer)}>
        <AddButton />
      </Provider>
    );
    const buttonElement = screen.getByText("Add another list");
    fireEvent.click(buttonElement);
    const textAreaElement = screen.getByPlaceholderText("Enter list title...");
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement).toHaveStyle({ backgroundColor: "white" });
    const addButtonElement = screen.getByText("Add List");
    expect(addButtonElement).toBeInTheDocument();
    expect(addButtonElement).toHaveStyle({
      backgroundColor: "#0079bf",
      color: "white",
    });
  });

  test("Testing event handlers and state changes", () => {
    render(
      <Provider store={createStore(reducer)}>
        <AddButton />
      </Provider>
    );
    
  });
});
