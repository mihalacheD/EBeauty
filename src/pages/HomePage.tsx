import { GridItem , Grid} from "@chakra-ui/react"
import Products from "./Products"

const HomePage = () => {
  return (
    <Grid templateAreas={{
      base: `"main"`
    }}>
      <GridItem area='main'>
        <Products/>
      </GridItem>
    </Grid>
  )
}

export default HomePage
