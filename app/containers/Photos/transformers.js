import { groupBy, prop } from 'ramda';

export const transformPhotosToAlbumsWithPhotos = (photos) => {
  const albums = groupBy(prop('albumId'), photos);

  return albums;
};
