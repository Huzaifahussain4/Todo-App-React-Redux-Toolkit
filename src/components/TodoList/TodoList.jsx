import React from "react";
import "./todoList.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";
import {
  GlobalStatesData,
  todoListReducer,
  deleteTask,
  editTask,
} from "../../ReduxToolkit/slice/globalStatesSlice";

function TodoList({ todoData }) {
  const globalState = useSelector(GlobalStatesData);
  const todoList = globalState?.globalStatesSlice?.todoList;
  const dispatch = useDispatch();
  // console.log({ todoList });

  const deleteBtn = (index) => {
    dispatch(deleteTask(index));
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const [editTaskIndex, setEditedTaskIndex] = useState(null);

  const handleToggleEdit = (index) => {
    setIsEditing(!isEditing);
    setEditedTaskIndex(index);
  };

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSubmit = (index) => {
    dispatch(editTask({ index, editedTask }));
    setEditedTask("");
    setEditedTaskIndex(null);
    setIsEditing(false);
  };

  return (
    <div className="todoContainer">
      {todoList.map((item, index) => (
        <div className="todoContenDiv">
          <div className="todoConatiner">
            <div className="taskTextDiv">{item.todoData}</div>
            <div className="buttonsDiv">
              <div>
                {isEditing && editTaskIndex == index ? (
                  <>
                    <Space.Compact style={{ width: "100%" }}>
                      <Input value={editedTask} onChange={handleInputChange} />
                      <Button
                        onClick={() => handleSubmit(index)}
                        type="primary"
                        // shape="circle"
                        icon={<CheckOutlined />}
                        className="editBtn"
                        disabled={!editedTask.trim()}
                      />
                    </Space.Compact>
                  </>
                ) : (
                  <>
                    {/* <span>{todoData}</span> */}
                    <Button
                      onClick={() => handleToggleEdit(index)}
                      type="primary"
                      shape="circle"
                      icon={<EditOutlined />}
                      className="editBtn"
                    />
                  </>
                )}
              </div>

              <Button onClick={() => deleteBtn(index)} type="primary" danger>
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
