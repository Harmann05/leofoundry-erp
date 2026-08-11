import { CalendarDays } from "lucide-react"

export default function Timetable() {
  return (
    <PagePlaceholder
      icon={<CalendarDays className="h-6 w-6" />}
      title="Timetable"
      description="View your daily and weekly class schedule."
    />
  )
}

function PagePlaceholder({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium text-indigo-600">Academics</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>

      <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            {icon}
          </div>

          <h2 className="mt-4 font-semibold text-slate-900">
            {title} page
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            This section is being built.
          </p>
        </div>
      </div>
    </div>
  )
}