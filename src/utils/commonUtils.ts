export const getArtistImageUrl = (artistImage: ArtistImage | undefined) => {
  //workaround to get the correct image url which comes under #text
  //@ts-ignore
  return artistImage?.["#text"] ?? "";
};

export enum SortBy {
  ascending = 1,
  descending = 2,
  none = 3,
}
