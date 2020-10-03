import types from "./types";
import searchActions from "./actions";
import "rxjs";
import { switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs/observable/of";
import { combineEpics } from "redux-observable";
import data from "../../utils/data";

const newSearchEpic = (action$) => {
  return action$.pipe(
    ofType(types.EPIC_NEW_SEARCH),
    switchMap((action) => {
      console.log("hey");
      const searchData = data.filter((item) =>
        item.name.toLowerCase().includes(action.keyword.toLowerCase())
      );
      console.log(searchData);
      return of(searchActions.addResults(searchData));
    })
  );
};

export default combineEpics(newSearchEpic);
