import { MantineProvider } from '@mantine/core'
import Dashboard from './pages/Dashboard'
import { theme } from './lib/mantine.theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Workouts from './pages/Workouts'
import ErrorPage from './pages/ErrorPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  { path: '/', element: <Dashboard />, errorElement: <ErrorPage /> },
  { path: '/workouts', element: <Workouts /> },
])

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
