export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: object;
  isAuth: boolean;
  isLoading: boolean;
}
