import { SearchType } from '../actions/type';

const InitialState = {
  searchData: [],
  error: null,
};

export default (state = InitialState, { type, payload }) => {
  switch (type) {
    case SearchType.SEARCH_FUFILLED:
      return { ...state, searchData: payload || [], error: null };
    case SearchType.SEARCH_FAILED:
      return { ...state, searchData: [], error: payload };
    case SearchType.CLEAR_SEARCH:
      return { ...state, searchData: [], error: null };
    default:
      return state;
  }
};
