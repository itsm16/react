import React, { useState } from "react";
import { TodoContext, useTodo } from "./TodoContext";

export const TodoContextProvider = ({children}) => {
  const {todos} = useTodo();

    return (
      <TodoContext.Provider value={todos}>
        {children}
      </TodoContext.Provider>
    );
  };

