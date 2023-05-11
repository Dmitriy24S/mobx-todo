import { makeAutoObservable } from 'mobx'

export interface Todo {
  id: number | string
  text: string
  completed: boolean
}

// export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     text: todo.id === id ? text : todo.text,
//   }))

// export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     completed: todo.id === id ? !todo.completed : todo.completed,
//   }))

// export const removeTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.filter((todo) => todo.id !== id)

// export const addTodo = (todos: Todo[], text: string): Todo[] => [
//   ...todos,
//   {
//     id: crypto.randomUUID(),
//     text,
//     completed: false,
//   },
// ]

const removeTodo = (todos: Todo[], id: number | string): Todo[] =>
  todos.filter((todo) => todo.id !== id)

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: crypto.randomUUID(),
    text,
    completed: false,
  },
]

// MobX implementation
class Store {
  todos: Todo[] = []
  newTodo = ''

  constructor() {
    makeAutoObservable(this)
  }

  load(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.todos = data
      })
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo)
    this.newTodo = ''
  }

  removeTodo(id: number | string) {
    this.todos = removeTodo(this.todos, id)
  }
}

const store = new Store()
export default store
