import {
  Stack,
  Group,
  Text,
  Badge,
  ActionIcon,
  Menu,
  Title,
} from '@mantine/core'
import { MoreVertical, Edit, Trash, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button, Card } from '../../../ui/components'
import { Workout, WorkoutStatus } from '../api/workout.types'
import WorkoutForm from './WorkoutForm'

// Demo data
const DEMO_WORKOUTS: Workout[] = [
  {
    id: '1',
    name: 'Morning Push Session',
    startTime: new Date('2024-03-20T08:00'),
    endTime: new Date('2024-03-20T09:00'),
    status: 'completed',
    exercises: [
      { id: '1', name: 'Bench Press', sets: 4, reps: 10, weight: 80 },
      { id: '2', name: 'Shoulder Press', sets: 3, reps: 12, weight: 25 },
    ],
    notes: 'Feeling strong today!',
  },
  {
    id: '2',
    name: 'Leg Day',
    startTime: new Date('2024-03-21T08:00'),
    endTime: new Date('2024-03-21T09:00'),
    status: 'planned',
    exercises: [
      { id: '3', name: 'Squats', sets: 5, reps: 5, weight: 100 },
      { id: '4', name: 'Leg Press', sets: 3, reps: 12, weight: 150 },
    ],
  },
]

const STATUS_COLORS: Record<WorkoutStatus, string> = {
  completed: 'teal.8',
  in_progress: 'blue.8',
  planned: 'yellow.8',
}

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState<Workout[]>(DEMO_WORKOUTS)
  const [formState, setFormState] = useState<
    | { type: 'create' }
    | {
        type: 'edit'
        workout: Workout
      }
    | { type: 'idle' }
  >({ type: 'idle' })

  const onDeleteWorkout = (id: string) =>
    setWorkouts((prev) => prev.filter((workout) => workout.id !== id))

  return (
    <>
      <Stack gap="lg">
        <Group justify="space-between">
          <Title order={2}>Your Workouts</Title>
          <Button
            leftSection={<Plus size={16} />}
            variant="filled"
            onClick={() => setFormState({ type: 'create' })}
          >
            New Workout
          </Button>
        </Group>

        <Stack gap="md">
          {workouts.map((workout) => (
            <Card key={workout.id} withBorder>
              <Group justify="space-between" mb="xs">
                <Group>
                  <Title order={4}>{workout.name}</Title>
                  <Badge color={STATUS_COLORS[workout.status]} size="md">
                    {workout.status.replace('_', ' ')}
                  </Badge>
                </Group>
                <Menu shadow="md" position="bottom-end">
                  <Menu.Target>
                    <ActionIcon
                      variant="subtle"
                      aria-label="More options"
                      radius="md"
                    >
                      <MoreVertical size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      leftSection={<Edit size={16} />}
                      onClick={() => setFormState({ type: 'edit', workout })}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<Trash size={16} />}
                      color="red"
                      onClick={() => onDeleteWorkout(workout.id)}
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {workout.startTime?.toLocaleDateString()}
              </Text>

              <Stack gap="xs">
                {workout.exercises.map((exercise) => (
                  <Card key={exercise.id} withBorder padding="xs" radius="md">
                    <Group justify="space-between">
                      <Text fw={500}>{exercise.name}</Text>
                      <Text size="sm">
                        {exercise.sets} × {exercise.reps} @ {exercise.weight}kg
                      </Text>
                    </Group>
                  </Card>
                ))}
              </Stack>

              {workout.notes && (
                <Text size="sm" mt="md" c="dimmed">
                  {workout.notes}
                </Text>
              )}
            </Card>
          ))}
        </Stack>
      </Stack>

      {formState.type === 'create' && (
        <WorkoutForm
          type="create"
          opened
          onClose={() => setFormState({ type: 'idle' })}
        />
      )}

      {formState.type === 'edit' && formState.workout && (
        <WorkoutForm
          type="edit"
          workout={formState.workout}
          opened
          onClose={() => setFormState({ type: 'idle' })}
        />
      )}
    </>
  )
}
