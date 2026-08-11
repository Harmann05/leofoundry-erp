import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  IndianRupee,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react"

const subjects = [
  {
    name: "Computer Science",
    code: "CS301",
    percentage: 91,
  },
  {
    name: "Database Management",
    code: "CS302",
    percentage: 84,
  },
  {
    name: "Computer Networks",
    code: "CS303",
    percentage: 78,
  },
  {
    name: "Software Engineering",
    code: "CS304",
    percentage: 88,
  },
]

const schedule = [
  {
    time: "09:00 AM",
    subject: "Computer Networks",
    room: "Room 204",
    type: "Lecture",
  },
  {
    time: "11:00 AM",
    subject: "Database Management",
    room: "Lab 2",
    type: "Practical",
  },
  {
    time: "02:00 PM",
    subject: "Software Engineering",
    room: "Room 108",
    type: "Lecture",
  },
]

const announcements = [
  {
    title: "Mid-term examination schedule released",
    date: "Today",
  },
  {
    title: "Assignment submission deadline extended",
    date: "Yesterday",
  },
  {
    title: "Annual sports meet registrations are open",
    date: "2 days ago",
  },
]

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconClass,
  trend,
}: {
  title: string
  value: string
  subtitle: string
  icon: typeof BookOpen
  iconClass: string
  trend?: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        {trend && (
          <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
            <TrendingUp className="h-3 w-3" />
            {trend}
          </div>
        )}
      </div>

      <div className="mt-5">
        <p className="text-sm text-slate-500">{title}</p>

        <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
          {value}
        </p>

        <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-indigo-600">Overview</p>

          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
            Good evening, Harman 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening with your academics today.
          </p>
        </div>

        <button className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
          <CalendarDays className="h-4 w-4" />
          August 10, 2026
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Overall Attendance"
          value="87.4%"
          subtitle="4.2% higher than last month"
          trend="+4.2%"
          icon={CheckCircle2}
          iconClass="bg-indigo-50 text-indigo-600"
        />

        <StatCard
          title="Current Percentage"
          value="82.6%"
          subtitle="Based on latest results"
          trend="+2.8%"
          icon={TrendingUp}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Classes Today"
          value="3"
          subtitle="2 lectures · 1 practical"
          icon={BookOpen}
          iconClass="bg-violet-50 text-violet-600"
        />

        <StatCard
          title="Pending Fees"
          value="₹12,500"
          subtitle="Due on August 20, 2026"
          icon={IndianRupee}
          iconClass="bg-amber-50 text-amber-600"
        />
      </div>

      {/* Main grid */}
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* Attendance analytics */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                Attendance Analytics
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Attendance percentage over the last 6 months
              </p>
            </div>

            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-semibold text-slate-900">
                  87.4%
                </p>

                <p className="mt-1 text-xs text-emerald-600">
                  ↑ 4.2% from previous month
                </p>
              </div>

              <div className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600">
                Monthly
              </div>
            </div>

            {/* Chart */}
            <div className="relative mt-8 h-56">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[100, 75, 50, 25, 0].map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3"
                  >
                    <span className="w-8 text-[10px] text-slate-400">
                      {value}%
                    </span>

                    <div className="h-px flex-1 bg-slate-100" />
                  </div>
                ))}
              </div>

              <svg
                viewBox="0 0 600 220"
                preserveAspectRatio="none"
                className="absolute left-11 right-0 top-0 h-full w-[calc(100%-44px)] overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="attendanceGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(99 102 241)"
                      stopOpacity="0.20"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(99 102 241)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 85 C50 100 70 72 110 78 C150 84 165 105 210 87 C255 69 275 82 310 65 C350 45 375 65 405 55 C450 40 470 45 505 35 C540 25 565 30 600 18 L600 220 L0 220 Z"
                  fill="url(#attendanceGradient)"
                />

                <path
                  d="M0 85 C50 100 70 72 110 78 C150 84 165 105 210 87 C255 69 275 82 310 65 C350 45 375 65 405 55 C450 40 470 45 505 35 C540 25 565 30 600 18"
                  fill="none"
                  stroke="rgb(99 102 241)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute bottom-[-22px] left-11 right-0 flex justify-between text-[10px] text-slate-400">
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>
            </div>
          </div>
        </div>

        {/* Today's schedule */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                Today's Schedule
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Monday, August 10
              </p>
            </div>

            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              View all
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {schedule.map((item, index) => (
              <div
                key={item.time}
                className="flex gap-4"
              >
                <div className="w-[68px] shrink-0 pt-1">
                  <p className="text-xs font-medium text-slate-700">
                    {item.time}
                  </p>
                </div>

                <div className="relative flex-1 border-l border-slate-200 pl-5">
                  {index === 0 && (
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />
                  )}

                  <div className="rounded-xl bg-slate-50 p-3.5">
                    <p className="text-sm font-medium text-slate-900">
                      {item.subject}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                      <span>{item.room}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        {/* Subject performance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                Subject Performance
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Current academic performance
              </p>
            </div>

            <button className="flex items-center gap-1 text-xs font-medium text-indigo-600">
              View details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {subjects.map((subject) => (
              <div key={subject.code}>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {subject.name}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      {subject.code}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    {subject.percentage}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all"
                    style={{ width: `${subject.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                Recent Announcements
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Latest updates from your institution
              </p>
            </div>

            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              View all
            </button>
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            {announcements.map((announcement) => (
              <div
                key={announcement.title}
                className="flex gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Clock3 className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium leading-5 text-slate-800">
                    {announcement.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {announcement.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fee summary */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <IndianRupee className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Fee Summary
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Current academic year · 2026–27
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="text-xs text-slate-400">Total Fees</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                ₹85,000
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Paid</p>
              <p className="mt-1 text-lg font-semibold text-emerald-600">
                ₹72,500
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Pending</p>
              <p className="mt-1 text-lg font-semibold text-amber-600">
                ₹12,500
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700">
              View fees
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}