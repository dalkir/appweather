import WeatherPage from './pages/WeatherPage'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-blue-400">
        <span className="text-2xl font-bold p-4 mt-2 mb-2 text-white">Simple Weather</span>
        <WeatherPage />
      </div>
    </QueryClientProvider>
  )
}

export default App
