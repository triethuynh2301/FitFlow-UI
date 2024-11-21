import { Workout } from '../../api/workout.types'
import {
  Modal,
  Stack,
  TextInput,
  Textarea,
  Button,
  Group,
  Title,
  Text,
  Grid,
  Flex,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { DateTimePicker } from '@mantine/dates'
import { Clock, Plus } from 'lucide-react'
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

  const { form, onChange, onSubmit } = useWorkoutForm(props)

  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      centered
      fullScreen={isMobile}
      size="lg"
    >
      <Stack gap="lg">
        {/* SECTION - workout info */}
        <Stack gap="xs">
          <Title order={2} style={{ textAlign: 'center' }}>
            {props.type === 'edit' ? props.workout.name : 'New Workout'}
          </Title>

          <Grid gutter="xs" justify="center" align="center">
            <Grid.Col span={1.5}>
              <Text size="sm" c="dimmed">
                Name
              </Text>
            </Grid.Col>
            <Grid.Col span={10.5}>
              <TextInput
                value={form.values.name}
                onChange={(e) => onChange({ name: e.target.value })}
                required
              />
            </Grid.Col>
          </Grid>

          <Grid gutter="xs" justify="center" align="center">
            <Grid.Col span={1.5}>
              <Text size="sm" c="dimmed">
                Start
              </Text>
            </Grid.Col>
            <Grid.Col span={10.5}>
              <DateTimePicker
                value={
                  form.values.startTime
                    ? new Date(form.values.startTime)
                    : undefined
                }
                onChange={(e) => onChange({ startTime: e ?? undefined })}
                rightSection={<Clock size={16} />}
                required
              />
            </Grid.Col>
          </Grid>

          <Grid gutter="xs" justify="center" align="center">
            <Grid.Col span={1.5}>
              <Text size="sm" c="dimmed">
                End
              </Text>
            </Grid.Col>
            <Grid.Col span={10.5}>
              <DateTimePicker
                value={
                  form.values.endTime
                    ? new Date(form.values.endTime)
                    : undefined
                }
                onChange={(e) => onChange({ endTime: e ?? undefined })}
                required
                rightSection={<Clock size={16} />}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter="xs" justify="center" align="center">
            <Grid.Col span={1.5}>
              <Text size="sm" c="dimmed">
                Notes
              </Text>
            </Grid.Col>
            <Grid.Col span={10.5}>
              <Textarea
                value={form.values.notes}
                onChange={(e) => onChange({ notes: e.target.value })}
                placeholder="Add any notes about this workout"
              />
            </Grid.Col>
          </Grid>
        </Stack>

        {/* SECTION - exercises */}
        {/* <Stack gap="xs">
          
        </Stack> */}
        <Flex justify="center">
          <Button leftSection={<Plus />}>Add Exercise</Button>
        </Flex>

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
