export interface AttendanceSubject {
  code: string
  name: string
  attended: number
  total: number
  percentage: number
}

export interface AttendanceData {
  overallPercentage: number
  totalClasses: number
  attendedClasses: number
  missedClasses: number
  requiredPercentage: number
  subjects: AttendanceSubject[]
}