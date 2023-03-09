import React from "react";

const Todo = ({ todo, handleDelete, handleComplete }) => {
  const Content = ({ description, showDoneButton = false }) => (
    <>
      <span>{description}</span>
      <span>
        <button onClick={handleDelete()}>Delete</button>
        {showDoneButton && (
          <button onClick={handleComplete()}>Set as done</button>
        )}
      </span>
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? (
        <Content description="This todo is done" />
      ) : (
        <Content description="This todo is not done" showDoneButton />
      )}
    </div>
  );
};

export default Todo;
