import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCardComponent } from '../PhotoCard/PhotoCardComponent'
import { withPhotos } from '../../hoc/withPhotos'


export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(withPhotos, { variables: { categoryId: categoryId } })
  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCardComponent key={photo.id} {...photo} />)}
    </ul>
  )
}