import { Input, InputGroup } from "@chakra-ui/react"
import { Search } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {

  const ref = useRef<HTMLInputElement>(null)
  const navigate = useNavigate(); // redirecționeaza

  return (
  <form onSubmit={(e) => {
    e.preventDefault()
    if (ref.current) {
      const searchText = ref.current.value;
      onSearch(searchText)
      ref.current.value = ""
      navigate(`/search-results?q=${searchText}`); // Schimbă URL-ul și navighează
    }
  }}>
    <InputGroup startElement={<Search/>}>
      <Input
      ref={ref}
      borderRadius={20}
      placeholder="Search item..."
      variant='outline'
      borderColor='blue'
      colorPalette='blue'
      />
    </InputGroup>
  </form>
  )
}

export default SearchInput
