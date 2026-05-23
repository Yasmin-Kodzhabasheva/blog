import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Blog from './Blog.jsx'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
    </QueryClientProvider>
  )
}
