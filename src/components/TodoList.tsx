import { Button, Checkbox, Flex, Input } from '@chakra-ui/react'

import { observer } from 'mobx-react'
import store, { Todo } from '../store/store'

const TodoListItems = () => {
  return (
    <>
      {store.todos.length === 0 && <p>No todos</p>}
      {/* {[].map((todo: { id: number | string; text: string }) => ( */}
      {store.todos.map((todo: Todo) => (
        <Flex key={todo.id} pt={2}>
          <Checkbox onClick={() => (todo.completed = !todo.completed)} />
          <Input
            value={todo.text}
            mx={2}
            onChange={(event) => (todo.text = event.target.value)}
          />
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  )
}

const TodoListItemsObserver = observer(TodoListItems)

const TodoList = () => {
  return (
    <>
      <TodoListItemsObserver />
    </>
  )
}

export default TodoList
