import { Bell, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-6 backdrop-blur">
      {/* Search */}
      <div className="hidden items-center gap-3 md:flex">
        <Search className="h-4 w-4 text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-64 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-4">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
          <Bell className="h-5 w-5" />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-200" />

        {/* User */}
        <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
            HS
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-slate-900">
              Harman Singh
            </p>
            <p className="text-xs text-slate-500">
              Student
            </p>
          </div>
        </button>
      </div>
    </header>
  )
}