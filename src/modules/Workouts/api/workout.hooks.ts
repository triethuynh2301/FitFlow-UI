import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createWorkout, getWorkoutSummaries } from './workouts.apis'
import { Workout } from './workout.types'

const queryKeys = {
  getWorkoutSummaries: ['workout-summaries'] as const,
  createWorkout: ['create-workout'] as const,
}

/**
 * @returns A query hook for getting workouts
 */
export const useGetWorkoutSummaries = () =>
  useQuery({
    queryKey: queryKeys.getWorkoutSummaries,
    queryFn: getWorkoutSummaries,
  })

/**
 * @returns A mutation hook for creating a workout
 */
export const useCreateWorkout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: queryKeys.createWorkout,
    mutationFn: ({
      name,
      startTime,
      endTime,
      notes,
    }: Omit<Workout, 'id' | 'status' | 'exercises'>) =>
      createWorkout({ name, startTime, endTime, notes }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.getWorkoutSummaries,
      }),
  })
}
