import { Group, Stack, ActionIcon, Text, Paper } from '@mantine/core'
import { Home, Dumbbell, LineChart } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Dumbbell, label: 'Workouts', path: '/workouts' },
  { icon: LineChart, label: 'Progress', path: '/progress' },
]

export default function BottomNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Paper
      shadow="sm"
      p="md"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: '1px solid var(--mantine-color-gray-7)',
      }}
    >
      <Group justify="space-around">
        {NAV_ITEMS.map(({ icon: Icon, label, path }) => (
          <Stack
            key={path}
            align="center"
            gap={4}
            onClick={() => navigate(path)}
            style={{ cursor: 'pointer' }}
          >
            <ActionIcon
              variant={location.pathname === path ? 'filled' : 'subtle'}
              size="lg"
              radius="md"
              aria-label={label}
            >
              <Icon size={20} />
            </ActionIcon>
            <Text size="xs">{label}</Text>
          </Stack>
        ))}
      </Group>
    </Paper>
  )
}
