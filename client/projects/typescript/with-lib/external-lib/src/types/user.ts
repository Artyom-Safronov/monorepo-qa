// enum возможен здесь благодаря отсутствию erasableSyntaxOnly.
// В with-lib (erasableSyntaxOnly: true) объявление такого enum было бы ошибкой.
export enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserProfile = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UserSummary = Pick<User, "id" | "name" | "email">;
