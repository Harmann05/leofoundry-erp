import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ClipboardCheck,
  GraduationCap,
  IndianRupee,
  Megaphone,
} from "lucide-react"

interface StudentDashboardData {
  attendance: {
    percentage: number | null
    present: number | null
    total: number | null
  }
  academics: {
    subjects: number | null
    average: number | null
  }
  examinations: {
    upcoming: number | null
  }
  fees: {
    pending: number | null
  }
}

const dashboardData: StudentDashboardData = {
  attendance: {
    percentage: null,
    present: null,
    total: null,
  },
  academics: {
    subjects: null,
    average: null,
  },
  examinations: {
    upcoming: null,
  },
  fees: {
    pending: null,
  },
}

function EmptyValue() {
  return <span className="text-slate-300">—</span>
}

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: {
  title: string
  value: string | number | null
  subtitle: string
  icon: typeof ClipboardCheck
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
            {value === null ? <EmptyValue /> : value}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  const data = dashboardData

  return (
    <div className="space-y-6">

      {/* Welcome */}
      <section className="overflow-hidden rounded-2xl bg-indigo-600 p-6 shadow-sm sm:p-7">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-indigo-100">
              Good to see you
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              Welcome back!
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-indigo-100">
              Keep track of your attendance, academics,
              examinations and important school updates.
            </p>
          </div>

          <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex">
            <GraduationCap className="h-10 w-10 text-white/90" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Attendance"
          value={
            data.attendance.percentage === null
              ? null
              : `${data.attendance.percentage}%`
          }
          subtitle="Overall attendance"
          icon={ClipboardCheck}
        />

        <StatCard
          title="Subjects"
          value={data.academics.subjects}
          subtitle="Currently enrolled"
          icon={BookOpen}
        />

        <StatCard
          title="Upcoming Exams"
          value={data.examinations.upcoming}
          subtitle="Scheduled examinations"
          icon={CalendarDays}
        />

        <StatCard
          title="Pending Fees"
          value={
            data.fees.pending === null
              ? null
              : `₹${data.fees.pending.toLocaleString("en-IN")}`
          }
          subtitle="Outstanding amount"
          icon={IndianRupee}
        />
      </section>

      {/* Main grid */}
      <section className="grid gap-6 xl:grid-cols-3">

        {/* Attendance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Attendance Overview
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Your attendance summary
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700"
            >
              View details
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center py-6 sm:flex-row sm:gap-12">
            {/* Empty progress circle */}
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-slate-100">
              <div className="text-center">
                <p className="text-3xl font-semibold text-slate-900">
                  <EmptyValue />
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Attendance
                </p>
              </div>
            </div>

            <div className="mt-7 w-full max-w-xs space-y-4 sm:mt-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Present
                </span>

                <span className="text-sm font-medium text-slate-900">
                  {data.attendance.present ?? "—"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  Absent
                </span>

                <span className="text-sm font-medium text-slate-900">
                  {data.attendance.total !== null &&
                  data.attendance.present !== null
                    ? data.attendance.total -
                      data.attendance.present
                    : "—"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  Total classes
                </span>

                <span className="text-sm font-medium text-slate-900">
                  {data.attendance.total ?? "—"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic performance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Academic Performance
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Current academic standing
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <GraduationCap className="h-4 w-4" />
            </div>
          </div>

          <div className="mt-7 rounded-xl bg-slate-50 p-5">
            <p className="text-xs font-medium text-slate-400">
              Average Score
            </p>

            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {data.academics.average === null ? (
                <EmptyValue />
              ) : (
                `${data.academics.average}%`
              )}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm text-slate-500">
              Subjects
            </span>

            <span className="text-sm font-medium text-slate-900">
              {data.academics.subjects ?? "—"}
            </span>
          </div>
        </div>
      </section>

      {/* Bottom grid */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* Today's schedule */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Today&apos;s Schedule
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Your classes for today
              </p>
            </div>

            <Clock3 className="h-5 w-5 text-slate-300" />
          </div>

          <div className="mt-6 flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <div className="text-center">
              <CalendarDays className="mx-auto h-7 w-7 text-slate-300" />

              <p className="mt-2 text-sm font-medium text-slate-500">
                No schedule available
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Your timetable will appear here.
              </p>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Announcements
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Latest school updates
              </p>
            </div>

            <Megaphone className="h-5 w-5 text-slate-300" />
          </div>

          <div className="mt-6 flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <div className="text-center">
              <Megaphone className="mx-auto h-7 w-7 text-slate-300" />

              <p className="mt-2 text-sm font-medium text-slate-500">
                No announcements
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Important updates will appear here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h3 className="font-semibold text-slate-900">
            Quick Access
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Frequently used student services
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "View Attendance",
              icon: ClipboardCheck,
            },
            {
              title: "View Timetable",
              icon: CalendarDays,
            },
            {
              title: "Check Results",
              icon: GraduationCap,
            },
            {
              title: "View Fees",
              icon: IndianRupee,
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.title}
                type="button"
                className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition group-hover:bg-indigo-100 group-hover:text-indigo-600">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item.title}
                  </span>
                </div>

                <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-indigo-500" />
              </button>
            )
          })}
        </div>
      </section>

      {/* Data state note */}
      <div className="flex items-start gap-3 rounded-xl border border-dashed border-slate-200 bg-white p-4">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />

        <p className="text-xs leading-5 text-slate-400">
          Dashboard information will appear automatically once
          your school data is connected.
        </p>
      </div>
    </div>
  )
}