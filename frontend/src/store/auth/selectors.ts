import { RootState } from 'src/store';

export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthUser = (state: RootState) => state.auth.AuthUser;
