import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type { User, UserRole } from "@/types/auth"
import {
  getCurrentUser,
  login as loginRequest,
  logout as logoutRequest,
} from "@/services/authService"

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>

  loginAsDemo: (account: {
  role: UserRole
  name: string
  loginId: string
}) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function restoreSession() {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    restoreSession()
  }, [])

  async function login(loginId: string, password: string) {
    const response = await loginRequest({
      loginId,
      password,
    })

    setUser(response.user)
  }

  async function logout() {
    try {
      await logoutRequest()
    } finally {
      setUser(null)
    }
  }

  function loginAsDemo(account: {
    role: UserRole
    name: string
    loginId: string
  }) {
    const demoUser: User = {
      id: `dev-${account.role.toLowerCase()}`,
      loginId: account.loginId,
      name: account.name,
      role: account.role,
    }

    setUser(demoUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        loginAsDemo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}