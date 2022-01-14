import React from 'react'
import { Anchor, Image } from './styles'

export const Category = ({ Category }) => (
  <Anchor href={Category.path}>
    <Image src={Category.cover} />
    {Category.emoji}
  </Anchor>
)
