import { Input, InputGroup } from "@chakra-ui/react"
import { Search } from "lucide-react";


const SearchInput = () => {
  return (
    <InputGroup startElement={<Search/>}>
      <Input
      borderRadius={20}
      placeholder="Search item..."
      variant='outline'
      borderColor='blue'
      colorPalette='blue'
      />
    </InputGroup>
  )
}

export default SearchInput
