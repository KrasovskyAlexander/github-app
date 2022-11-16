import { FetchUserAction, SetUserAction, SetUserPayload, UserActionType } from '../../types/userTypes';

export const setUser = (payload: SetUserPayload): SetUserAction => ({type: UserActionType.SET_USER, payload});

export const fetchUser = (): FetchUserAction => ({type: UserActionType.FETCH_USER});
