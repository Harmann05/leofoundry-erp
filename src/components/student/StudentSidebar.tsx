import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  Home,
  IndianRupee,
  Settings,
  Trophy,
  X,
} from "lucide-react"
import { NavLink } from "react-router-dom"

interface StudentSidebarProps {
  mobileOpen?: boolean
  onClose?: () => void
}

const navigation = [
  {
    label: "Overview",
    path: "/student/dashboard",
    icon: Home,
  },
  {
    label: "Attendance",
    path: "/student/attendance",
    icon: ClipboardCheck,
  },
  {
    label: "Timetable",
    path: "/student/timetable",
    icon: CalendarDays,
  },
  {
    label: "Subjects",
    path: "/student/subjects",
    icon: BookOpen,
  },
  {
    label: "Examinations",
    path: "/student/examinations",
    icon: GraduationCap,
  },
  {
    label: "Results",
    path: "/student/results",
    icon: Trophy,
  },
  {
    label: "Fees",
    path: "/student/fees",
    icon: IndianRupee,
  },
]

export default function StudentSidebar({
  mobileOpen = false,
  onClose,
}: StudentSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-64 flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-200
          lg:static lg:z-auto lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-sm">
              L
            </div>

            <div>
              <p className="text-base font-semibold tracking-tight text-slate-900">
                Leofoundry
              </p>

              <p className="text-[11px] font-medium text-slate-400">
                School ERP
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Student profile */}
        <div className="mx-4 mt-5 rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              S
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                Student
              </p>

              <p className="truncate text-xs text-slate-500">
                Student Portal
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Academic
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`h-[18px] w-[18px] shrink-0 ${
                          isActive
                            ? "text-indigo-600"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />

                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              )
            })}
          </div>

          <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Account
          </p>

          <NavLink
            to="/student/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Settings
                  className={`h-[18px] w-[18px] ${
                    isActive
                      ? "text-indigo-600"
                      : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />

                <span>Settings</span>
              </>
            )}
          </NavLink>
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-400">
            <BarChart3 className="h-4 w-4" />
            <span>Student Portal</span>
          </div>
        </div>
      </aside>
    </>
  )
}