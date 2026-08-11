import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  XCircle,
} from "lucide-react"
import { useState } from "react"

interface SubjectAttendance {
  id: string
  subject: string
  code: string
  present: number | null
  total: number | null
  percentage: number | null
}

interface AttendanceRecord {
  id: string
  date: string
  subject: string
  status: "PRESENT" | "ABSENT" | "LATE"
  period: string
}

interface AttendanceData {
  overall: {
    present: number | null
    absent: number | null
    total: number | null
    percentage: number | null
  }
  subjects: SubjectAttendance[]
  history: AttendanceRecord[]
}

const attendanceData: AttendanceData = {
  overall: {
    present: null,
    absent: null,
    total: null,
    percentage: null,
  },
  subjects: [],
  history: [],
}

function EmptyValue() {
  return <span className="text-slate-300">—</span>
}

function getAttendanceStatus(
  percentage: number | null
) {
  if (percentage === null) {
    return {
      label: "No data",
      className: "bg-slate-100 text-slate-500",
    }
  }

  if (percentage >= 75) {
    return {
      label: "Good",
      className: "bg-emerald-50 text-emerald-700",
    }
  }

  if (percentage >= 65) {
    return {
      label: "Needs Attention",
      className: "bg-amber-50 text-amber-700",
    }
  }

  return {
    label: "Low Attendance",
    className: "bg-red-50 text-red-700",
  }
}

function ProgressBar({
  percentage,
}: {
  percentage: number | null
}) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      {percentage !== null && (
        <div
          className={`h-full rounded-full ${
            percentage >= 75
              ? "bg-emerald-500"
              : percentage >= 65
                ? "bg-amber-500"
                : "bg-red-500"
          }`}
          style={{
            width: `${Math.min(Math.max(percentage, 0), 100)}%`,
          }}
        />
      )}
    </div>
  )
}

export default function StudentAttendance() {
  const [month, setMonth] = useState("all")

  const data = attendanceData
  const status = getAttendanceStatus(
    data.overall.percentage
  )

  const attendanceRate =
    data.overall.percentage !== null
      ? `${data.overall.percentage}%`
      : null

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-slate-500">
            Track your class attendance and attendance history.
          </p>
        </div>

        <div className="relative">
          <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <select
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className="h-10 appearance-none rounded-lg border border-slate-200 bg-white pl-9 pr-9 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
          >
            <option value="all">All months</option>
            <option value="june">June 2026</option>
            <option value="july">July 2026</option>
            <option value="august">August 2026</option>
          </select>

          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Overall Attendance
              </p>

              <p className="mt-3 text-3xl font-semibold text-slate-900">
                {attendanceRate ?? <EmptyValue />}
              </p>

              <span
                className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
              >
                {status.label}
              </span>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <ClipboardCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Present
          </p>

          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {data.overall.present ?? <EmptyValue />}
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Classes attended
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Absent
          </p>

          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {data.overall.absent ?? <EmptyValue />}
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Classes missed
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Classes
          </p>

          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {data.overall.total ?? <EmptyValue />}
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Classes conducted
          </p>
        </div>
      </div>

      {/* Attendance overview */}
      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Attendance Rate
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Overall attendance
              </p>
            </div>

            <CheckCircle2 className="h-5 w-5 text-slate-300" />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[14px] border-slate-100">
              <div className="text-center">
                <p className="text-4xl font-semibold text-slate-900">
                  {attendanceRate ?? <EmptyValue />}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Overall
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-4">
            <p className="text-xs leading-5 text-slate-500">
              A minimum attendance percentage may be required
              to appear for examinations. Your institution's
              attendance policy will apply.
            </p>
          </div>
        </div>

        {/* Subject attendance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Subject-wise Attendance
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Attendance by subject
              </p>
            </div>
          </div>

          {data.subjects.length === 0 ? (
            <div className="mt-6 flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-200">
              <div className="text-center">
                <ClipboardCheck className="mx-auto h-8 w-8 text-slate-300" />

                <p className="mt-3 text-sm font-medium text-slate-500">
                  No attendance data available
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Subject attendance will appear here once
                  your school data is connected.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {data.subjects.map((subject) => (
                <div key={subject.id}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">
                        {subject.subject}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {subject.code}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-slate-900">
                      {subject.percentage === null
                        ? "—"
                        : `${subject.percentage}%`}
                    </p>
                  </div>

                  <ProgressBar
                    percentage={subject.percentage}
                  />

                  <p className="mt-1.5 text-xs text-slate-400">
                    {subject.present ?? "—"} present out of{" "}
                    {subject.total ?? "—"} classes
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* History */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-semibold text-slate-900">
              Attendance History
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Recent attendance records
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Present
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              Absent
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Late
            </span>
          </div>
        </div>

        {data.history.length === 0 ? (
          <div className="flex min-h-52 items-center justify-center p-6">
            <div className="text-center">
              <Clock3 className="mx-auto h-8 w-8 text-slate-300" />

              <p className="mt-3 text-sm font-medium text-slate-500">
                No attendance history
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Attendance records will appear here once
                they are available.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/60 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-slate-400">
                    Date
                  </th>

                  <th className="px-6 py-3 text-xs font-medium text-slate-400">
                    Subject
                  </th>

                  <th className="px-6 py-3 text-xs font-medium text-slate-400">
                    Period
                  </th>

                  <th className="px-6 py-3 text-xs font-medium text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.history.map((record) => {
                  const statusStyles = {
                    PRESENT:
                      "bg-emerald-50 text-emerald-700",
                    ABSENT:
                      "bg-red-50 text-red-700",
                    LATE:
                      "bg-amber-50 text-amber-700",
                  }

                  const StatusIcon =
                    record.status === "PRESENT"
                      ? CheckCircle2
                      : record.status === "ABSENT"
                        ? XCircle
                        : Clock3

                  return (
                    <tr
                      key={record.id}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {record.date}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        {record.subject}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-500">
                        {record.period}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[record.status]}`}
                        >
                          <StatusIcon className="h-3.5 w-3.5" />
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Policy */}
      <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
        <p className="text-xs leading-5 text-amber-800">
          <span className="font-semibold">Note:</span>{" "}
          Attendance percentages shown in the ERP are based on
          records maintained by the school. If you notice an
          incorrect entry, please contact the concerned
          teacher or school administration.
        </p>
      </div>
    </div>
  )
}