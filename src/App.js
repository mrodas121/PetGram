import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import Home from './pages/home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <Router>
                 <Home path='/'/>
                 <Home path='/pet/:categoryId'/>
                 <Detail path='/detail/:detailId' />
            </Router>
            <NavBar/>
        </>)
}
export default App