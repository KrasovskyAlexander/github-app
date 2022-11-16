import { IUser } from './UserModel';

 /* eslint-disable */
export enum UserActionType {
    SET_USER = 'SET_USER',
    FETCH_USER = 'FETCH_USER'
}

export type SetUserPayload = IUser[];

export interface UserState {
    users: SetUserPayload,
    loading: boolean
}

export interface SetUserAction {
    type: UserActionType.SET_USER,
    payload: SetUserPayload
}

export interface FetchUserAction {
    type: UserActionType.FETCH_USER
}


export type UserAction = FetchUserAction | SetUserAction;
