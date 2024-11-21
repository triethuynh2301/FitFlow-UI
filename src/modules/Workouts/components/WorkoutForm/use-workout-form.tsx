import { Workout } from '../../api/workout.types'
import { WorkoutFormProps } from '.'
import { useCreateWorkout } from '../../api/workout.hooks'
import dayjs from 'dayjs'
import { useForm } from '@mantine/form'

export default function useWorkoutForm(props: WorkoutFormProps) {
  const createWorkoutFn = useCreateWorkout()

  const form = useForm<Partial<Workout>>({
    initialValues:
      props.type === 'create'
        ? {
            name: `${dayjs().format('MMM D')} Workout`,
            startTime: new Date(),
            endTime: undefined,
            status: 'planned',
            exercises: [],
            notes: '',
          }
        : props.workout,
  })

  const onChange = (value: Partial<Workout>) =>
    form.setValues({ ...form.values, ...value })

  const onSubmit = () => {
    if (props.type === 'create') {
      createWorkoutFn.mutate({
        name: form.values.name ?? '',
        startTime: form.values.startTime ?? new Date(),
        endTime: form.values.endTime ?? undefined,
        notes: form.values.notes ?? '',
      })
    } else {
      // TODO: Update workout
    }
  }

  return { form, onChange, onSubmit }
}
