import { Eye, EyeOff, LockKeyhole, LogIn, UserRound } from "lucide-react"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "@/hooks/AuthContext"

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [loginId, setLoginId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!loginId.trim() || !password) {
      setError("Please enter your Login ID and password.")
      return
    }

    setError("")
    setLoading(true)

    try {
      await login(loginId.trim(), password)

      // Temporary until backend role routing is finalized.
      navigate("/dashboard")
    } catch {
      setError("Invalid Login ID or password.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left branding panel */}
        <div className="relative hidden overflow-hidden bg-indigo-600 lg:flex">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />
          <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-white/10" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-indigo-600">
                  L
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    Leofoundry
                  </p>
                  <p className="text-xs text-indigo-100">
                    School ERP
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-lg">
              <p className="text-sm font-medium text-indigo-100">
                SMARTER SCHOOL MANAGEMENT
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white xl:text-5xl">
                Everything your school needs,
                <span className="text-indigo-200"> in one place.</span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-6 text-indigo-100">
                Manage academics, attendance, examinations, fees,
                communication and more through one unified platform.
              </p>
            </div>

            <p className="text-xs text-indigo-200">
              © 2026 Leofoundry. All rights reserved.
            </p>
          </div>
        </div>

        {/* Login */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                  L
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Leofoundry
                  </p>
                  <p className="text-xs text-slate-500">
                    School ERP
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-indigo-600">
                Welcome back
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Enter your Login ID to access the Leofoundry ERP.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Login ID */}
              <div>
                <label
                  htmlFor="loginId"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Login ID
                </label>

                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="loginId"
                    type="text"
                    value={loginId}
                    onChange={(event) => setLoginId(event.target.value)}
                    placeholder="Enter your Login ID"
                    autoComplete="username"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(event.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  <span className="text-sm text-slate-600">
                    Remember me
                  </span>
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              Your account access and permissions are managed by
              your institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}