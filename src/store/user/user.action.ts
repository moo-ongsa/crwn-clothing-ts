import { USER_ACTIONS_TYPES } from "./user.types";
import {
  createAction,
  withMather,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { UserData, AddtionData } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_ACTIONS_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<
  USER_ACTIONS_TYPES.SET_CURRENT_USER,
  UserData
>;

export type GoogleSignInStart = Action<USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_IN_FAILURE,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_SUCCESS,
  { user: User; addtionalData: AddtionData }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_FAILURE,
  Error
>;

export type SignOutStart = Action<USER_ACTIONS_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_OUT_FAILURE,
  Error
>;

export const setCurrentUser = withMather(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
);

export const checkUserSession = withMather(
  (): CheckUserSession => createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMather(
  (): GoogleSignInStart => createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMather(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMather(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMather(
  (error: Error): SignInFailed =>
    createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILURE, error)
);

export const signUpStart = withMather(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMather(
  (user: User, addtionalData: AddtionData): SignUpSuccess =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, addtionalData })
);

export const signUpFailed = withMather(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILURE, error)
);

export const signOutStart = withMather(
  (): SignOutStart => createAction(USER_ACTIONS_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMather(
  (): SignOutSuccess => createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMather(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILURE, error)
);
