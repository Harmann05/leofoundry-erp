import {
  GraduationCap,
  ShieldCheck,
  Users,
  UserRound,
} from "lucide-react"

import { useAuth } from "@/hooks/AuthContext"
import { useNavigate } from "react-router-dom"
import type { UserRole } from "@/types/auth"

const demoAccounts: {
  role: UserRole
  name: string
  loginId: string
  description: string
  icon: typeof GraduationCap
}[] = [
  {
    role: "STUDENT",
    name: "Demo Student",
    loginId: "DEV-STUDENT",
    description: "Preview the student portal",
    icon: GraduationCap,
  },
  {
    role: "PARENT",
    name: "Demo Parent",
    loginId: "DEV-PARENT",
    description: "Preview the parent portal",
    icon: Users,
  },
  {
    role: "PRINCIPAL",
    name: "Demo Principal",
    loginId: "DEV-PRINCIPAL",
    description: "Preview the principal portal",
    icon: ShieldCheck,
  },
  {
    role: "ADMIN",
    name: "Demo Admin",
    loginId: "DEV-ADMIN",
    description: "Preview the admin portal",
    icon: UserRound,
  },
]

export default function DevLogin() {
  const { loginAsDemo } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="mb-4 inline-flex rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700">
            DEVELOPMENT ONLY
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Leofoundry ERP
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Choose a role to preview its portal without
            connecting the Spring Boot backend.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {demoAccounts.map((account) => {
            const Icon = account.icon

            return (
              <button
                key={account.role}
                type="button"
                onClick={() => {
  loginAsDemo(account)
  navigate(`/${account.role.toLowerCase()}/dashboard`)
}}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-medium text-slate-400">
                    {account.role}
                  </span>
                </div>

                <h2 className="mt-5 text-base font-semibold text-slate-900">
                  {account.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {account.description}
                </p>

                <p className="mt-4 text-xs font-medium text-indigo-600">
                  Login ID: {account.loginId}
                </p>
                
              </button>
              
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          This page is for frontend development and testing only.
        </p>
      </div>
    </div>
  )
}