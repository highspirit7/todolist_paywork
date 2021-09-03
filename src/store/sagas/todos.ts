import {
  createTodoSuccess,
  createTodoFailure,
  getTodosSuccess,
  getTodosFailure,
  removeTodoSuccess,
  removeTodoFailure,
  toggleTodoSuccess,
  toggleTodoFailure,
} from "store/actions/todos";

import * as api from "api";
import { takeEvery, put, takeLatest, call } from "redux-saga/effects";
import { ITodoList } from "types";

import {
  CreateTodoRequestAction,
  GetTodosRequestAction,
  RemoveTodoRequestAction,
  ToggleTodoRequestAction,
} from "store/actions/todos";
import {
  CREATE_TODO_REQUEST,
  GET_TODOS_REQUEST,
  REMOVE_TODO_REQUEST,
  TOGGLE_TODO_REQUEST,
} from "store/types";

export function* createTodo(action: CreateTodoRequestAction) {
  try {
    const { msg, todoItem } = yield call(
      api.createTodoItem,
      action.payload.data,
    );

    yield put(createTodoSuccess({ msg, todoItem }));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

export function* createTodoSaga() {
  yield takeLatest(CREATE_TODO_REQUEST, createTodo);
}

export function* getTodos(action: GetTodosRequestAction) {
  try {
    const { todoList }: ITodoList = yield call(api.getTodos);

    yield put(getTodosSuccess(todoList));
  } catch (error) {
    yield put(getTodosFailure(error));
  }
}

export function* getTodosSaga() {
  yield takeEvery(GET_TODOS_REQUEST, getTodos);
}

export function* removeTodo(action: RemoveTodoRequestAction) {
  try {
    const { msg, removalId } = yield call(
      api.removeTodoItem,
      action.payload.data,
    );

    yield put(removeTodoSuccess({ msg, todoId: removalId }));
  } catch (error) {
    yield put(removeTodoFailure(error));
  }
}

export function* removeTodoSaga() {
  yield takeLatest(REMOVE_TODO_REQUEST, removeTodo);
}

export function* toggleTodo(action: ToggleTodoRequestAction) {
  try {
    const { msg, toggleId } = yield call(
      api.toggleTodoItem,
      action.payload.data,
    );

    yield put(toggleTodoSuccess({ msg, todoId: toggleId }));
  } catch (error) {
    yield put(toggleTodoFailure(error));
  }
}

export function* toggleTodoSaga() {
  yield takeLatest(TOGGLE_TODO_REQUEST, toggleTodo);
}
