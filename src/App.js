import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery'
import Home from './pages/home'
import { Router } from '@reach/router'
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
                <Router>
                     <Home path='/'/>
                     <Home path='/pet/:categoryId'/>
                </Router>
            }
        </>)
}
export default App