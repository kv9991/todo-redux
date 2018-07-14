import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  removeTask,
  updateTask
} from "@actions/todo";

const wrapper = {
  display: "flex",
  justifyContent: "space-between",
}

const content = {
  fontSize: "16px"
}

const bar = {
  display: "flex",
  justifyContent: "flex-start"
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      isEditing: false,
      temporaryValue: null,
    }
  }

  handleRemove() {
    const { 
      removeTask,
      task
    } = this.props;

    removeTask(task.id);
  }

  handleEdit(isEditing) {
    this.setState({ isEditing })
  }

  handleChange({ target: { value } }) {
    this.setState({ temporaryValue: value });
  }

  handleCancelEdit() {
    this.setState({
      temporaryValue: null,
      isEditing: false,
    })
  }

  handleSave() {
    const {
      task,
      updateTask
    } = this.props;

    const { temporaryValue } = this.state;


    this.setState({
      isEditing: false,
    }, () => {
      updateTask(task._id, {
        content: temporaryValue
      })
    })
   }

  render() {
    const { task } = this.props;
    const { isEditing, temporaryValue } = this.state;

    return (
      <div style={wrapper}>
        {isEditing ?
          <input 
            type="text" 
            onChange={this.handleChange} 
            value={temporaryValue || task.content} 
          />
          :
          <p style={content}>
            {task.content}
          </p>
        }
        <div style={bar}>
          {!isEditing ?
            <a onClick={this.handleRemove}>Удалить</a>
            :
            <a onClick={this.handleSave}>Сохранить</a>
          }
          {!isEditing ?
            <a onClick={this.handleEdit.bind(this, true)}>
              Изменить
            </a>
            :
            <a onClick={this.handleCancelEdit}>
              Отмена
            </a>
          }
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  updateTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  updateTask: (id, task) => dispatch(updateTask(id, task)),
  removeTask: (id) => dispatch(removeTask(id)),
})

export default connect(null, mapDispatchToProps)(Task);