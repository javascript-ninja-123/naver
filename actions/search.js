import {SearchType} from './type';


export const fetchSearchResult = searchText => {
  return {
    type:SearchType.SEARCH,
    payload:searchText
  }
}

export const fetchSearchResultFufilled = payload => {
  return   {
      type:SearchType.SEARCH_FUFILLED,
      payload
    }
}

export const fetchSearchResultFailed = err => (
  {
    type:SearchType.SEARCH_FAILED,
    payload:err
  }
)

export const removeSearchData = () => (
  {
    type:SearchType.CLEAR_SEARCH
  }
)
