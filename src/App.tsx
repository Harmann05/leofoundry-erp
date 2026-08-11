import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { AuthProvider } from "@/hooks/AuthContext"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import DashboardLayout from "@/components/layout/DashboardLayout"
import StudentDashboard from "@/pages/student/StudentDashboard"
import ParentDashboard from "@/pages/parent/ParentDashboard"
import PrincipalDashboard from "@/pages/principal/PrincipalDashboard"
import AdminDashboard from "@/pages/admin/AdminDashboard"
import Login from "@/pages/auth/Login"
import StudentLayout from "@/layouts/StudentLayout"
import StudentAttendance from "@/pages/student/StudentAttendance"
import DevLogin from "@/dev/DevLogin"
import Dashboard from "@/pages/Dashboard"
import Attendance from "@/pages/Attendance"
import Timetable from "@/pages/Timetable"
import Subjects from "@/pages/Subjects"
import Examinations from "@/pages/Examinations"
import Results from "@/pages/Results"
import Fees from "@/pages/Fees"
import Students from "@/pages/Students"
import Settings from "@/pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* ==================== PUBLIC ==================== */}

          <Route
            path="/login"
            element={<Login />}
          />

          {import.meta.env.DEV && (
            <Route
              path="/dev-login"
              element={<DevLogin />}
            />
          )}

          {/* ================= AUTHENTICATED ================= */}

          <Route element={<ProtectedRoute />}>

            <Route element={<DashboardLayout />}>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/attendance"
                element={<Attendance />}
              />

              <Route
                path="/timetable"
                element={<Timetable />}
              />

              <Route
                path="/subjects"
                element={<Subjects />}
              />

              <Route
                path="/examinations"
                element={<Examinations />}
              />

              <Route
                path="/results"
                element={<Results />}
              />

              <Route
                path="/fees"
                element={<Fees />}
              />

              <Route
                path="/students"
                element={<Students />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />

            </Route>

          </Route>
          <Route
            element={<ProtectedRoute allowedRoles={["STUDENT"]} />}
          >
            <Route element={<StudentLayout />}>
              <Route
                path="/student/dashboard"
                element={<StudentDashboard />}
              />
            </Route>
          </Route>

<Route
  element={<ProtectedRoute allowedRoles={["PARENT"]} />}
>
  <Route element={<DashboardLayout />}>
    <Route
      path="/parent/dashboard"
      element={<ParentDashboard />}
    />
  </Route>
</Route>

<Route
  element={<ProtectedRoute allowedRoles={["PRINCIPAL"]} />}
>
  <Route element={<DashboardLayout />}>
    <Route
      path="/principal/dashboard"
      element={<PrincipalDashboard />}
    />
  </Route>
</Route>

<Route
  element={<ProtectedRoute allowedRoles={["ADMIN"]} />}
>
  <Route element={<DashboardLayout />}>
    <Route
      path="/admin/dashboard"
      element={<AdminDashboard />}
    />
  </Route>
</Route>

<Route
  path="/student/attendance"
  element={<StudentAttendance />}
/>

          {/* ==================== DEFAULT ==================== */}

          <Route
            path="/"
            element={<Navigate to="/student/dashboard" replace />}
          />

          <Route
            path="*"
            element={<Navigate to="/student/dashboard" replace />}
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App