import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import SearchContext from "../state-managment/SearchContext"
import { useState } from "react";


const Layout = () => {

  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <NavBar/>
      <Outlet/>
    </SearchContext.Provider>
  )
}

export default Layout
