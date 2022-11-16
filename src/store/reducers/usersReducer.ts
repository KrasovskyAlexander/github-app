import { UserAction, UserActionType, UserState } from '../../types/userTypes';

const initionState: UserState = {
  users: [],
  loading: false
};

export const usersReducer = (state = initionState, action: UserAction): UserState => {
  switch (action.type) {
  case UserActionType.SET_USER:
    return {users: action.payload, loading: false};
  case UserActionType.FETCH_USER:
    return {...state, loading: true};
  default:
    return state;
  }
};
