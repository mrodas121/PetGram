import React from 'react'
import { Link, Image } from './styles'

export const Category = ({ Category, path }) => (
  <Link to={path}>
    <Image src={Category.cover} />
    {Category.emoji}
  </Link>
)
