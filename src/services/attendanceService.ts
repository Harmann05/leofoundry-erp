import { api } from "./api"
import type { AttendanceData } from "@/types/attendance"

export async function getStudentAttendance(): Promise<AttendanceData> {
  const response = await api.get<AttendanceData>("/student/attendance")

  return response.data
}