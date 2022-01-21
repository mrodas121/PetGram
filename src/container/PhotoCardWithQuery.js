import React from 'react';
import { PhotoCardComponent } from '../components/PhotoCard/PhotoCardComponent'
import { useGetSinglePhoto } from '../Hooks/useGetPhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, data, error } = useGetSinglePhoto(id)

  if (loading) return null
  if (error) return <h1>Error</h1>

  const { photo = {} } = data

  return <PhotoCardComponent {...photo} />
}