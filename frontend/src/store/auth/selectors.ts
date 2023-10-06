import { RootState } from 'src/store';

export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthUser = (state: RootState) => state.auth.AuthUser;
export const selectReqErr = (state: RootState) => state.auth.errors;
