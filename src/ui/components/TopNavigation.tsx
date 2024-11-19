import {
  ActionIcon,
  Title,
  Button,
  Group,
  useMantineColorScheme,
} from '@mantine/core'
import { Dumbbell, Sun, Moon } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function TopNavigation() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Group h="100%" justify="space-between">
      <Group gap="xs">
        <ActionIcon variant="filled" size="lg" radius="md">
          <Dumbbell size={24} />
        </ActionIcon>
        <Title order={3}>FitFlow</Title>
      </Group>

      <Group>
        <Button
          variant={location.pathname === '/' ? 'filled' : 'light'}
          onClick={() => navigate('/')}
        >
          Dashboard
        </Button>
        <Button
          variant={location.pathname === '/workouts' ? 'filled' : 'light'}
          onClick={() => navigate('/workouts')}
        >
          Workouts
        </Button>
        <Button
          variant={location.pathname === '/progress' ? 'filled' : 'light'}
          onClick={() => navigate('/progress')}
        >
          Progress
        </Button>
        <ActionIcon
          onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
          variant="outline"
          size="lg"
          radius="md"
          aria-label="Toggle color scheme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </ActionIcon>
      </Group>
    </Group>
  )
}
