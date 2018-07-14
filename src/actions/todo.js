import {
  TODO_ADD_TASK,
  TODO_REMOVE_TASK,
  TODO_UPDATE_TASK
} from "@consts/todo";

export const addTask = (taskData) => ({
  type: TODO_ADD_TASK,
  payload: taskData,
})

export const removeTask = (id) => ({
  type: TODO_REMOVE_TASK,
  payload: id,
})

export const updateTask = (id, newTaskData) => ({
  type: TODO_UPDATE_TASK,
  payload: {
    id,
    newTaskData
  }
})