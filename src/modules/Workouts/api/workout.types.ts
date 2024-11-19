export type WorkoutStatus = 'completed' | 'in_progress' | 'planned'

export type Exercise = {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
}

export type Workout = {
  id: string
  name: string
  startTime?: Date
  endTime?: Date
  status: WorkoutStatus
  exercises: Exercise[]
  notes?: string
}
