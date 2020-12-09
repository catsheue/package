import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../app/store/account/actions";
import * as actionTypes from "../app/store/account/actionTypes";
// import * as actions from "app/store/account/actions";
import fetchMock from "fetch-mock-jest";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  it("create GET_ACCOUNT_IMAGE when fetching images has been done", () => {
    // fetchMock.get("https://aws.random.cat/meow", 200);
    const expectedActions = [
      { type: actionTypes.START_FETCH_ACCOUNT_IMAGE },
      { type: actionTypes.GET_ACCOUNT_IMAGE },
    ];

    const store = mockStore({});
    return store
      .dispatch(actions.getAccountImage("https://aws.random.cat/meow"))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
