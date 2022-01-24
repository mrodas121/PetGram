import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import Home from './pages/home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const UserLogged = ({children})=>{
    return children({isAuth:true})
}

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
            <UserLogged>
                {
                    ({isAuth}) => isAuth ?
                        <Router>
                            <Favs path='/favs'/>
                            <User path='/user'/>
                        </Router>
                    :
                        <Router>
                            <NotRegisteredUser path='/favs'/>
                            <NotRegisteredUser path='/user'/>                            
                        </Router>
                }
            </UserLogged>
            <NavBar/>
        </>)
}
export default App