import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './NavBar'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`
    }}>
      <GridItem area='nav' margin={2}>
        <NavBar/>
      </GridItem>
      <GridItem area='main'>Main</GridItem>
    </Grid>
  )
}

export default App
