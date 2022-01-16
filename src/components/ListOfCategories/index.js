import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import db from '../../../api/db.json'
import { render } from 'react-dom'

export const ListOfCategories = (fixed) => {
    const [ categories, setCategories ] = useState(db.categories)

    useEffect(function () {
        const onScroll = e => {
          const newShowFixed = window.scrollY > 200
          showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
    
        document.addEventListener('scroll', onScroll)
    
        return () => document.removeEventListener('scroll', onScroll)
      }, [showFixed])
    const [showFixed, setShowFixed] = useState(false)
    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category=> <Item key={category.id}><Category Category= {category}/></Item>)
            }
        </List>
    )
    return(
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}