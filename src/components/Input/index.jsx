import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "@actions/todo";

const wrapper = {
  display: "flex",
  justifyContent :"flex-start",
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: "",
    }
  }

  handleChange({ target: { value } }) {
    this.setState({ value })
  }

  handleSubmit() {
    const { value } = this.state;
    const { addTask, nextIndex } = this.props;

    const newTask = {
      id: nextIndex,
      content: value,
      isDone: false,
    }

    addTask(newTask);

    this.setState({
      value: ""
    })
  }
  
  render() {
    const { value, } = this.state;

    return (
      <div style={wrapper}>
        <input
          type="text"
          onChange={this.handleChange}
          value={value}
          placeholder="Введите новое задание"
        />
        <button onClick={this.handleSubmit}>
          Добавить
        </button>
      </div>
    )
  }
}

Input.propTypes = {
  addTask: PropTypes.func.isRequired,
  nextIndex: PropTypes.number,
}

const mapStateToProps = ({ todo }) => ({
  nextIndex: todo.tasks.length,
})

const mapDispatchToProps = dispatch => ({
  addTask: (task) => dispatch(addTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);