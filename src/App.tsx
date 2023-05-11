import { Box, Divider, Heading } from '@chakra-ui/react'
import './App.css'
import TodoAdd from './components/TodoAdd'

import TodoList from './components/TodoList'
import TopBar from './components/TopBar'

function App() {
  return (
    <>
      <Box maxWidth='8xl' margin='auto' p={5}>
        <Heading mb={6}>MobX Todo List</Heading>
        <TopBar />
        <TodoAdd />
        <Divider mt={8} mb={4} />
        <TodoList />
      </Box>
    </>
  )
}

export default App
