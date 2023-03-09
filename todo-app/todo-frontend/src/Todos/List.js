import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            handleDelete={() => onClickDelete(todo)}
            handleComplete={() => onClickComplete(todo)}
          />
        ))
        .reduce(
          (acc, cur) => [...acc, <hr key={cur.props.todo._id} />, cur],
          []
        )}
    </>
  );
};

export default TodoList;
