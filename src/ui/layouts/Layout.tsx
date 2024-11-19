import { AppShell, useMantineColorScheme, Container } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import TopNavigation from '../components/TopNavigation'
import BottomNavigation from '../components/BottomNavigation'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { colorScheme } = useMantineColorScheme()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isDark = colorScheme === 'dark'

  return (
    <AppShell
      header={{ height: isMobile ? 0 : 60 }}
      padding="md"
      styles={(theme) => ({
        main: {
          background: isDark
            ? theme.other.colors.background.dark
            : theme.other.colors.background.light,
          paddingBottom: isMobile ? '80px' : undefined,
        },
      })}
    >
      {!isMobile && (
        <AppShell.Header>
          <Container size="lg" h="100%">
            <TopNavigation />
          </Container>
        </AppShell.Header>
      )}

      <AppShell.Main>
        <Container size="lg" py="xl">
          {children}
        </Container>
      </AppShell.Main>

      {isMobile && <BottomNavigation />}
    </AppShell>
  )
}
