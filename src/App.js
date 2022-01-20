import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/index'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery'

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log(detailId)
    return (
        <>
            <GlobalStyle />
            <Logo />
            {
                detailId
                ?
                    <PhotoCardWithQuery id={detailId} />
                :
                <> 
                    <ListOfCategories />
                    <ListOfPhotoCards categoryId={1}/>
                </>
            }
        </>)
}
export default App