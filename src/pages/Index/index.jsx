import React from "react";
import Input from "@components/Input"
import TaskList from "@components/TaskList"

const wrapper = {
  maxWidth: "500px",
  width: "100%"
}

const IndexPage = () => (
  <div>
    <h3>Your tasks on today</h3>
    <div style={wrapper}>
      <TaskList />
      <Input />
    </div>
  </div>
)

export default IndexPage;