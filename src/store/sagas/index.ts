import { all } from "redux-saga/effects";

import {
  createTodoSaga,
  getTodosSaga,
  removeTodoSaga,
  toggleTodoSaga,
} from "./todos";

export default function* rootSaga() {
  yield all([
    createTodoSaga(),
    getTodosSaga(),
    removeTodoSaga(),
    toggleTodoSaga(),
  ]);
}
