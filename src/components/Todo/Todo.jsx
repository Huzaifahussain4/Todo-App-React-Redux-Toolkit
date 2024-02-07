import React, { useState } from "react";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import './todo.css' 
import { Input, Button, Select, Space } from "antd";
import {
  GlobalStatesData,
  todoListReducer,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../TodoList/TodoList";

function Todo() {
  const globalState = useSelector(GlobalStatesData);
  const todoList = globalState?.globalStatesSlice?.todoList;
  const dispatch = useDispatch();

  const [todoData, setTodoData] = useState('');

  const todoSubmitHandle = (e) => {
    setTodoData('')
    e.preventDefault();

    
    const todoContent = {
        todoData,
      };
      console.log(todoData);
      let updatedTodoList = [...todoList, todoContent]
      dispatch(todoListReducer(updatedTodoList));
  };

  return (
    <div className="containerTodo">
      <div className="todoInputField"> 
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Add you task"
            value={todoData}
            onChange={(e) => {
              setTodoData(e.target.value);
            }}
          />
          <Button className="submitBtn" onClick={todoSubmitHandle} disabled={!todoData} type="primary">
            Submit
          </Button>
        </Space.Compact>
      </div>

      <TodoList todoData={todoData}/>
      <LogoutBtn />
    </div>
  );
}

export default Todo;
