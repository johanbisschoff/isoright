export interface Task {
  description: string
  daysRemaining: number
  dueDate: string
  complete: number
  responsible: string[]
  notes: string
  completionNote: string
}
