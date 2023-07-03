import { User } from '../types.common';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
}
