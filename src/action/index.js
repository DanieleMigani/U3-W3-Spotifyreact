export const VIEW_ARTIST = "VIEW_ARTIST";
export const VIEW_ALBUM = "VIEW_ALBUM";

export const viewArtistAction = (props) => ({
  type: VIEW_ARTIST,
  payload: props.obj,
});

export const viewAlbumAction = (props) => ({
  type: VIEW_ALBUM,
  payload: props.obj,
});
