import { Settings as SettingsIcon } from "lucide-react"

export default function Settings() {
  return (
    <Page
      title="Settings"
      description="Manage your account and application preferences."
    >
      <SettingsIcon className="h-6 w-6" />
    </Page>
  )
}

function Page({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-sm font-medium text-indigo-600">System</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{description}</p>

      <div className="mt-8 flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
        <div className="text-indigo-600">{children}</div>
      </div>
    </div>
  )
}