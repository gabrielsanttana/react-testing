import {runSaga} from "redux-saga";
import MockAdapter from "axios-mock-adapter";
import {getTechs} from "./sagas";
import { getTechsSuccess, getTechsFailure } from "./actions";
import api from "../../../services/api";

const apiMock = new MockAdapter(api);

describe('The techs saga', () => {
  it("fetches techs from API", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("techs").reply(200, ["React"]);

    await runSaga({dispatch}, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(["React"]));
  });

  it("fails when can't call API", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("techs").reply(400);

    await runSaga({dispatch}, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure());
  });
});