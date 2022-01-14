import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/'
import { GlobalStyle } from './GlobalStyles'
const App = () => {
    return(
        <>
            <GlobalStyle />
            <ListOfCategories/>    
            <ListOfPhotoCards />    
        </>
    )
}
export default App