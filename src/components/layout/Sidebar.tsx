import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Users,
  Wallet,
} from "lucide-react"
import { NavLink } from "react-router-dom"

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
      { name: "Attendance", icon: ClipboardCheck, path: "/attendance" },
      { name: "Timetable", icon: CalendarDays, path: "/timetable" },
    ],
  },
  {
    title: "Academics",
    items: [
      { name: "Subjects", icon: BookOpen, path: "/subjects" },
      { name: "Examinations", icon: GraduationCap, path: "/examinations" },
      { name: "Results", icon: BarChart3, path: "/results" },
    ],
  },
  {
    title: "Finance",
    items: [
      { name: "Fees", icon: Wallet, path: "/fees" },
    ],
  },
  {
    title: "Management",
    items: [
      { name: "Students", icon: Users, path: "/students" },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-[15px] font-bold tracking-tight text-slate-900">
              Leofoundry
            </h1>
            <p className="text-[11px] text-slate-500">
              Education ERP
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-7">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon

               return (
                 <NavLink
                   key={item.name}
                   to={item.path}
                   className={({ isActive }) =>
                     `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                       isActive
                         ? "bg-indigo-50 font-medium text-indigo-600"
                         : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                     }`
                   }
                 >
                   <Icon className="h-[18px] w-[18px]" />
                   <span>{item.name}</span>
                 </NavLink>
               )
             })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-100 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
              isActive
                ? "bg-indigo-50 font-medium text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          <Settings className="h-[18px] w-[18px]" />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}