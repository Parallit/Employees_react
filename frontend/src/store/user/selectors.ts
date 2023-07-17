import { RootState } from 'src/store';

export const selectUser = (state: RootState) => state.user.currentUser;
