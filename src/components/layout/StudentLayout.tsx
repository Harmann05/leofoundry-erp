import { Outlet, useLocation } from "react-router-dom"
import { useState } from "react"

import StudentSidebar from "@/components/student/StudentSidebar"
import StudentTopbar from "@/components/student/StudentTopbar"

const pageTitles: Record<string, string> = {
  "/student/dashboard": "Dashboard",
  "/student/attendance": "Attendance",
  "/student/timetable": "Timetable",
  "/student/subjects": "Subjects",
  "/student/examinations": "Examinations",
  "/student/results": "Results",
  "/student/fees": "Fees",
  "/student/settings": "Settings",
}

export default function StudentLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const pageTitle =
    pageTitles[location.pathname] ?? "Student Portal"

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <StudentSidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <StudentTopbar
            onMenuClick={() => setMobileOpen(true)}
          />

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-[1600px]">
              <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {pageTitle}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Manage and view your academic information.
                </p>
              </div>

              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}