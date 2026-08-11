import { Outlet } from "react-router-dom"

import Header from "./Header"
import Sidebar from "./Sidebar"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="lg:pl-64">
        <Header />

        <main className="p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}