import { IState, IAction } from "../interfaces";

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
};

export default reducer;
