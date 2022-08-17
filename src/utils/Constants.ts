export const Errors = {
  //Ideally these must be in a translation file
  artistNotFound: "Artist not found",
  errorLoadingArtist: "Problem loading artist, please try again",
  errorLoadingAlbums: "Problem loading albums, please try again",
  errorLoadingAlbum: "Problem loading album, please try again",
};

export const Info = {
  searchArtist: "Search for an artist",
  search: "Search",
  title: "FIND AN ARTIST",
  publishedOn: "Published on:",
  albumTitle:(artist:string)=>{return `Top ${artist}'s Albums`},
};
