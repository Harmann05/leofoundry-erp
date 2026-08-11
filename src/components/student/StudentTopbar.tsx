import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  UserRound,
} from "lucide-react"
import { useState } from "react"

import { useAuth } from "@/hooks/AuthContext"

interface StudentTopbarProps {
  onMenuClick?: () => void
}

export default function StudentTopbar({
  onMenuClick,
}: StudentTopbarProps) {
  const { user, logout } = useAuth()
  const [profileOpen, setProfileOpen] = useState(false)

  async function handleLogout() {
    await logout()
  }

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden sm:block">
          <p className="text-xs font-medium text-slate-400">
            Student Portal
          </p>

          <p className="text-sm font-semibold text-slate-900">
            Academic Session 2026–27
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-indigo-600" />
        </button>

        <div className="h-7 w-px bg-slate-200" />

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((open) => !open)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              {user?.name?.charAt(0).toUpperCase() || "S"}
            </div>

            <div className="hidden text-left md:block">
              <p className="max-w-32 truncate text-sm font-medium text-slate-900">
                {user?.name || "Student"}
              </p>

              <p className="text-[11px] text-slate-400">
                Student
              </p>
            </div>

            <ChevronDown
              className={`hidden h-4 w-4 text-slate-400 transition md:block ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/5">
              <div className="border-b border-slate-100 px-3 py-3">
                <p className="truncate text-sm font-medium text-slate-900">
                  {user?.name || "Student"}
                </p>

                <p className="mt-0.5 truncate text-xs text-slate-400">
                  {user?.loginId || "Login ID"}
                </p>
              </div>

              <button
                type="button"
                className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <UserRound className="h-4 w-4" />
                Profile
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}