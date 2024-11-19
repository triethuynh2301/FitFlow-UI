import { useState } from 'react'
import { Workout } from '../../api/workout.types'
import { WorkoutFormProps } from '.'
import { useCreateWorkout } from '../../api/workout.hooks'
import dayjs from 'dayjs'

export default function useWorkoutForm(props: WorkoutFormProps) {
  const createWorkoutFn = useCreateWorkout()

  const [formData, setFormData] = useState<Partial<Workout>>(
    props.type === 'create'
      ? {
          name: `${dayjs().format('MMM D')} Workout`,
          startTime: new Date(),
          endTime: undefined,
          status: 'planned',
          exercises: [],
          notes: '',
        }
      : {
          name: props.workout.name,
          startTime: props.workout.startTime,
          endTime: props.workout.endTime,
          status: props.workout.status,
          exercises: props.workout.exercises,
          notes: props.workout.notes,
        }
  )

  const onChange = (value: Partial<Workout>) =>
    setFormData({ ...formData, ...value })

  const onSubmit = () => {
    if (props.type === 'create') {
      createWorkoutFn.mutate({
        name: formData.name ?? '',
        startTime: formData.startTime ?? new Date(),
        endTime: formData.endTime ?? undefined,
        notes: formData.notes ?? '',
      })
    } else {
      // TODO: Update workout
    }
  }

  return { formData, onChange, onSubmit }
}
