export interface loginRequest {
  email: string;
  password: string;
}

export interface signupRequest {
  username: string;
  fullName: string;
  password: string;
  email: string;
}
export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  connectCode: string;
}
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}
export interface AuthChildProps {
  onSwitch: () => void;
}
