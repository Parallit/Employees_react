import { RootState } from '..';

export const selectLoading = (state: RootState) => state.auth.isLoading;
