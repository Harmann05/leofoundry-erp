export type UserRole =
  | "STUDENT"
  | "PARENT"
  | "PRINCIPAL"
  | "ADMIN"

export interface User {
  id: string
  loginId: string
  name: string
  role: UserRole
}