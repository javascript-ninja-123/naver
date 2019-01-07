import { combineEpics, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import {
  SearchType,
  fetchSearchResultFufilled,
  fetchSearchResultFailed,
} from '../actions';
import { of } from 'rxjs';

const fetchSearhDataEpic = action$ =>
  action$.pipe(
    ofType(SearchType.SEARCH),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(({ payload }) =>
      ajax({
        url: '/search',
        method: 'POST',
        body: { searchText: payload },
        headers: {
          contentType: 'application/json; charset=utf-8',
        },
      })
    ),
    map(({ response }) => {
      console.log(response);
      if (Array.isArray(response)) {
        return fetchSearchResultFufilled(response);
      }
      return fetchSearchResultFailed(response);
    })
  );

const searchEpics = combineEpics(fetchSearhDataEpic);
export default searchEpics;
