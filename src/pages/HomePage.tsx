import { GridItem , Grid} from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Grid templateAreas={{
      base: `"main"`
    }}>
      <GridItem area='main'>
        Main
      </GridItem>
    </Grid>
  )
}

export default HomePage
