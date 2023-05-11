import { Button, Grid } from '@chakra-ui/react'

import store from '../store/store'
import ThemeSwitcher from './ThemeSwitcher'

const TopBar = () => {
  const handleLoad = () => {
    // fetch(
    //   'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
    // )
    //   .then((resp) => resp.json())
    //   .then((data) => (store.todos = data))
    store.load(
      'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
    )
  }

  return (
    <Grid pt={2} templateColumns='1fr 1fr' columnGap={3}>
      <ThemeSwitcher />
      <Button mb={8} onClick={handleLoad}>
        Load Data
      </Button>
    </Grid>
  )
}

export default TopBar
