import { Group, Stack, Title, Text, TextInput } from '@mantine/core'
import { Button, Card } from '../ui/components'
import Layout from '../ui/layouts/Layout'

export default function Dashboard() {
  return (
    <Layout>
      {/* Start workout */}
      <Stack gap="xl">
        <Card withBorder>
          <Stack gap="md">
            <Title order={2}>Start Your Workout</Title>
            <TextInput label="Workout Name" placeholder="Enter workout name" />
            <Group>
              <Button variant="filled">New Workout</Button>
              <Button variant="light">View Templates</Button>
            </Group>
          </Stack>
        </Card>

        {/* Quick actions */}
        <Group grow>
          <Card withBorder>
            <Stack gap="sm">
              <Title order={4}>Recent Workouts</Title>
              <Text size="sm">Continue where you left off</Text>
              <Button variant="light" fullWidth>
                View History
              </Button>
            </Stack>
          </Card>

          <Card withBorder>
            <Stack gap="sm">
              <Title order={4}>Progress Stats</Title>
              <Text size="sm">Track your improvements</Text>
              <Button variant="light" fullWidth>
                View Stats
              </Button>
            </Stack>
          </Card>
        </Group>
      </Stack>
    </Layout>
  )
}
