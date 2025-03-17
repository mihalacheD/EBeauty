import { createContext } from "react";


interface SearchContextType {
  searchText: string;
  setSearchText: (text: string) => void;
}


const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export default SearchContext;

