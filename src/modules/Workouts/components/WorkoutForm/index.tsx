import { Workout } from '../../api/workout.types'
import {
  Modal,
  Stack,
  TextInput,
  Textarea,
  Button,
  Group,
  Title,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { DateTimePicker } from '@mantine/dates'
import { Clock } from 'lucide-react'
import useWorkoutForm from './use-workout-form'

type CreateWorkoutFormProps = {
  type: 'create'
  opened: boolean
  onClose: () => void
}

type EditWorkoutFormProps = {
  type: 'edit'
  workout: Workout
  opened: boolean
  onClose: () => void
}

export type WorkoutFormProps = CreateWorkoutFormProps | EditWorkoutFormProps

export default function WorkoutForm(props: WorkoutFormProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const { formData, onChange, onSubmit } = useWorkoutForm(props)

  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      centered
      fullScreen={isMobile}
      size="lg"
    >
      <Stack gap="md">
        <Title order={2} style={{ textAlign: 'center' }}>
          {props.type === 'edit' ? 'Edit Workout' : 'New Workout'}
        </Title>

        <TextInput
          label="Name"
          value={formData.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Enter workout name"
          required
        />

        <DateTimePicker
          label="Start Time"
          value={formData.startTime}
          onChange={(e) => onChange({ startTime: e ?? undefined })}
          rightSection={<Clock size={16} />}
          required
        />

        <DateTimePicker
          label="End Time"
          value={formData.endTime}
          onChange={(e) => onChange({ endTime: e ?? undefined })}
          required
        />

        <Textarea
          label="Notes"
          value={formData.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          placeholder="Add any notes about this workout"
        />

        <Group justify="flex-end">
          <Button variant="outline" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="filled" onClick={onSubmit}>
            Save
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}
