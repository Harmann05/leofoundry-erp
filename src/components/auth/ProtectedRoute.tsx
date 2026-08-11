import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "@/hooks/AuthContext"
import type { UserRole } from "@/types/auth"

interface ProtectedRouteProps {
  allowedRoles?: UserRole[]
}

export default function ProtectedRoute({
  allowedRoles,
}: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-sm text-slate-500">
          Loading Leofoundry ERP...
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}