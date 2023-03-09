import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("render component with correct text", () => {
  const todoData = {
    text: "Todo test",
    done: false,
  };

  const view = render(
    <Todo todo={todoData} handleDelete={() => {}} handleComplete={() => {}} />
  );

  expect(view.container).toHaveTextContent(todoData.text);
});
