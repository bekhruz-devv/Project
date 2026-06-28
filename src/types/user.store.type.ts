export interface IUserStore {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
  setUser: (user: {
    firstName: string;
    lastName: string;
    email: string;
  }) => void;
  logout: () => void;
}
