import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  fetchModuleData,
  fetchModuleDataSuccess,
  fetchModuleDataFail,
} from "./moduleSlice";

export const moduleEpic = (action$) =>
  action$.pipe(
    ofType(fetchModuleData.type),
    mergeMap((action) => {
      //    const { data } = action.payload;
      return ajax({
        url: `https://`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "rxjs-custom-header": "Rxjs",
        },
      }).pipe(
        map((response) => fetchModuleDataSuccess(response.response)),
        catchError((error) => {
          return fetchModuleDataFail(error);
        })
      );
    })
  );
