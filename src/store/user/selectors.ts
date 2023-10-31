import { RootState } from 'src/store';

export const selectUser = (state: RootState) => state.user.currentUser;
export const selectIsLoadingUser = (state: RootState) =>
  state.user.isLoadingUser;
export const selectUserReqErr = (state: RootState) => state.user.errors;
