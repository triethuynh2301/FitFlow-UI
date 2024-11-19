import axios from 'axios'
import { Workout } from './workout.types'

const baseUrl = 'https://localhost:7249'

const urls = {
  getWorkouts: `${baseUrl}/workouts`,
}

/**
 * @returns A list of workouts
 */
export const getWorkouts = async (): Promise<Workout[]> => {
  const response = await axios.get<Workout[]>(urls.getWorkouts)

  return response.data
}

/**
 * @param workout - The workout to create
 * @returns The created workout
 */
export const createWorkout = async (
  workout: Omit<Workout, 'id' | 'status' | 'exercises'>
): Promise<Workout> => {
  const response = await axios.post<Workout>(urls.getWorkouts, workout)

  return response.data
}
