import { User } from 'src/typings/user.typings';

interface ServiceImplementations {
  getUserById(id: number): { user: User };
  registerUser(user: Partial<User>): { user: User };
  loginUser(user: Partial<User>): { token: string };
}

export const serviceImplementations: ServiceImplementations = {
  getUserById: () => {
    return '' as any;
  },
  loginUser: () => {
    return '' as any;
  },
  registerUser: () => {
    return '' as any;
  },
};
