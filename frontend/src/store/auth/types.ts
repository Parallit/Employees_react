export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  department: string;
  telephone: string;
  about: string;
  employees: [];
}

export interface AuthState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
}
