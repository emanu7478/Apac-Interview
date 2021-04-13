import {FETCH_ALL_TRIPS} from './tripTypes';

const initialState = {
  isLoading: true,
  trips: [],
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case FETCH_ALL_TRIPS:
      return Object.assign({
        ...state,
        trips: action.payload,
        isLoading: false,
      });
  }
  return newState;
};
export default reducer;
