import React from "react";
import { connect } from "react-redux";
import Task from "@components/Task";
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => (
  <div>
    {tasks.length === 0 &&
      <p>No tasks yet</p>
    }
    {tasks.map((task, i) => (
      <Task task={task} key={i} />
    ))}
  </div>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    isDone: PropTypes.bool,
  }))
}

TaskList.defaultProps = {
  tasks: []
}

const mapStateToProps = ({ todo: { tasks } }) => ({
  tasks,
})

export default connect(mapStateToProps)(TaskList)