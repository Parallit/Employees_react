import { RootState } from '..';

export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectAuth = (state: RootState) => state.auth.isAuth;
