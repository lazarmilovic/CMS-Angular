export interface IUsers {
  id: number;
  name: string;
  website: string;
  username: string;
  phone: number;
  company: {
    name: string;
  };
  email: string;
}
