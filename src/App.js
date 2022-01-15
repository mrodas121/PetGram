import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
const App = () => {
    return(
        <>
            <Logo />
            <GlobalStyle />
            <ListOfCategories/>    
            <ListOfPhotoCards />    
        </>
    )
}
export default App