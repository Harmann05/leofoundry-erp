import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  TrendingUp,
  XCircle,
} from "lucide-react"

const subjects = [
  {
    code: "CSE301",
    name: "Database Management Systems",
    attended: 38,
    total: 42,
    percentage: 90.5,
  },
  {
    code: "CSE302",
    name: "Computer Networks",
    attended: 34,
    total: 40,
    percentage: 85,
  },
  {
    code: "CSE303",
    name: "Operating Systems",
    attended: 31,
    total: 38,
    percentage: 81.6,
  },
  {
    code: "CSE304",
    name: "Software Engineering",
    attended: 29,
    total: 37,
    percentage: 78.4,
  },
  {
    code: "CSE305",
    name: "Artificial Intelligence",
    attended: 32,
    total: 40,
    percentage: 80,
  },
  {
    code: "CSE306",
    name: "Web Technologies",
    attended: 36,
    total: 39,
    percentage: 92.3,
  },
]

const recentAttendance = [
  {
    date: "08 Aug 2026",
    subject: "Database Management Systems",
    status: "Present",
    time: "09:00 AM",
  },
  {
    date: "08 Aug 2026",
    subject: "Computer Networks",
    status: "Present",
    time: "11:00 AM",
  },
  {
    date: "07 Aug 2026",
    subject: "Operating Systems",
    status: "Absent",
    time: "10:00 AM",
  },
  {
    date: "07 Aug 2026",
    subject: "Software Engineering",
    status: "Present",
    time: "01:00 PM",
  },
  {
    date: "06 Aug 2026",
    subject: "Artificial Intelligence",
    status: "Present",
    time: "09:00 AM",
  },
]

export default function Attendance() {
  const totalAttended = subjects.reduce(
    (sum, subject) => sum + subject.attended,
    0
  )

  const totalClasses = subjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  )

  const overallPercentage = ((totalAttended / totalClasses) * 100).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-medium text-indigo-600">Academics</p>

        <div className="mt-1 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Attendance
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track your attendance across all subjects and classes.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
            <CalendarDays className="h-4 w-4" />
            Academic Year 2026–27
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Overall Attendance"
          value={`${overallPercentage}%`}
          subtitle="Current semester"
          icon={<TrendingUp className="h-5 w-5" />}
        />

        <SummaryCard
          title="Classes Attended"
          value={totalAttended.toString()}
          subtitle={`Out of ${totalClasses} classes`}
          icon={<CheckCircle2 className="h-5 w-5" />}
        />

        <SummaryCard
          title="Classes Missed"
          value={(totalClasses - totalAttended).toString()}
          subtitle="This semester"
          icon={<XCircle className="h-5 w-5" />}
        />

        <SummaryCard
          title="Required Attendance"
          value="75%"
          subtitle="Minimum requirement"
          icon={<Clock3 className="h-5 w-5" />}
        />
      </div>

      {/* Attendance Status */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold text-slate-900">
              Attendance Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your attendance is currently above the minimum requirement.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Good Standing
          </span>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-500">Overall attendance</span>
            <span className="font-semibold text-slate-900">
              {overallPercentage}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>

          <div className="mt-3 flex justify-between text-xs text-slate-400">
            <span>0%</span>
            <span>Minimum: 75%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Subject Attendance */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="font-semibold text-slate-900">
            Subject-wise Attendance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Attendance percentage for each enrolled subject.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {subjects.map((subject) => (
            <div
              key={subject.code}
              className="px-6 py-5 transition hover:bg-slate-50/70"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0 md:w-72">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">
                      {subject.code}
                    </span>

                    <h3 className="truncate text-sm font-medium text-slate-900">
                      {subject.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {subject.attended} attended ·{" "}
                    {subject.total - subject.attended} absent
                  </p>
                </div>

                <div className="flex-1 md:max-w-md">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Attendance
                    </span>

                    <span
                      className={`text-sm font-semibold ${
                        subject.percentage >= 75
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {subject.percentage}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        subject.percentage >= 75
                          ? "bg-emerald-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${subject.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Attendance */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="font-semibold text-slate-900">
            Recent Attendance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest attendance records.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentAttendance.map((record, index) => (
                <tr
                  key={index}
                  className="text-sm transition hover:bg-slate-50/60"
                >
                  <td className="px-6 py-4 text-slate-600">
                    {record.date}
                  </td>

                  <td className="px-6 py-4 font-medium text-slate-900">
                    {record.subject}
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {record.time}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                        record.status === "Present"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string
  value: string
  subtitle: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {icon}
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-500">{title}</p>

      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
    </div>
  )
}