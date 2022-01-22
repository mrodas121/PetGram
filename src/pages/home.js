import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCard/index'

const Home = ({categoryId})=>{
    return (
        <> 
            <ListOfCategories />
            <ListOfPhotoCards categoryId={categoryId}/>
        </>
    )
}

export default Home;