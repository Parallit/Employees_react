import { RootState } from 'src/store';

export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthUser = (state: RootState) => state.auth.AuthUser;
export const selectReqErr = (state: RootState) => state.auth.errors;
export const selectIsAuthChecking = (state: RootState) => state.auth.isAuthChecking;
export const selectIsUserChecked = (state: RootState) => state.auth.isUserChecked;