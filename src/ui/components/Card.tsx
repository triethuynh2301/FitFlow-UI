import {
  Card as MantineCard,
  CardProps,
  useMantineColorScheme,
} from '@mantine/core'
import { theme } from '../../lib/mantine.theme'

export default function Card(props: CardProps) {
  const { colorScheme } = useMantineColorScheme()

  return (
    <MantineCard
      radius="md"
      styles={{
        root: {
          background:
            colorScheme === 'dark'
              ? theme.colors?.dark?.[8]
              : theme.colors?.light?.[3],
        },
      }}
      {...props}
    />
  )
}
