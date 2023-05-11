import { Button, Grid, Input } from '@chakra-ui/react'

import { observer } from 'mobx-react'
import store from '../store/store'

const TodoAdd = () => {
  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap={3}>
      <Input
        placeholder='New todo'
        value={store.newTodo}
        onChange={(event) => (store.newTodo = event.target.value)}
      />
      <Button onClick={() => store.addTodo()}>Add</Button>
    </Grid>
  )
}

export default observer(TodoAdd)
// ! Fast refresh can't handle anonymous component. Add a name to your export.eslint(react-refresh/only-export-components)
