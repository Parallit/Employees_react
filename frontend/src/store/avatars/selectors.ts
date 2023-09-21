import { RootState } from 'src/store';

export const selectAvatars = (state: RootState) => state.avatars.avatars;
export const selectLoadingAvatars = (state: RootState) => state.avatars.isLoadingAvatars