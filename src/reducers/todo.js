import {
  TODO_ADD_TASK,
  TODO_REMOVE_TASK,
  TODO_UPDATE_TASK
} from "@consts/todo";

const initialState = {
  /**
   * array of tasks with keys: { id, content, isDone }
   */
  tasks: [],
  filter: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case TODO_ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          /**
           * Task object with keys: { id, content, isDone }
           */
          action.payload,
        ]
      }

    case TODO_REMOVE_TASK:
      return {
        ...state,
        /**
         * Action.payload - identifier that should be removed
         */
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    case TODO_UPDATE_TASK:
      return {
        ...state,
        /**
         * action.payload.id - identifier of task that should be updated
         * action.payload.newTaskData - new data of task
         */
        tasks: state.tasks.map((task) => {
          if (task._id == action.payload.id) {
            return {
              ...task,
              ...action.payload.newTaskData,
            }
          } 

          return task;
        })
      }

      default:
        return state;
    }
  }