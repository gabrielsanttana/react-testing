import {call, put} from "redux-saga/effects";
import {getTechsSuccess, getTechsFailure} from "./actions";
import api from "../../../services/api";

export function* getTechs() {
  try {
    const response = yield call(api.get, "techs");

    yield put(getTechsSuccess(response.data));
  } catch(err) {
    yield put(getTechsFailure());
  } 
}