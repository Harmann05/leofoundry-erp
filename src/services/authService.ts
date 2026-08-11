import { api } from "./api"
import type { User } from "@/types/auth"

export interface LoginRequest {
  loginId: string
  password: string
}

export interface LoginResponse {
  user: User
  token?: string
}

export async function login(
  credentials: LoginRequest
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    credentials
  )

  return response.data
}

export async function getCurrentUser(): Promise<User> {
  const response = await api.get<User>("/auth/me")

  return response.data
}

export async function logout(): Promise<void> {
  await api.post("/auth/logout")
}