export const getArtistImageUrl = (artistImage: ArtistImage | undefined) => {
  //workaround to get the correct image url which comes under #text
  //@ts-ignore
  return artistImage["#text"];
};
