import { displayLoader } from "../slices/loaderSlice";
import { baseApi } from "./baseApiSlice";

const apiKey = process.env.REACT_APP_API_KEY;
export const artistsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loadNextArtists: builder.query<ArtistMatches[], SearchQuery>({
      query: ({ searchTerm }) => {
        return {
          url: `?method=artist.search&artist=${searchTerm}&api_key=${apiKey}&format=json`,
        };
      },
      providesTags: ["artists"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(displayLoader(true));
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(displayLoader(false));
        } catch (err) {
          // `onError` side-effect
        }
      },
      transformResponse: (response: any) => {
        return response.results.artistmatches.artist;
      },
    }),
    loadTopAlbums: builder.query<Album[], SearchArtist>({
      query: ({ artistName }) => {
        return {
          url: `?method=artist.gettopalbums&artist=${artistName}&api_key=${apiKey}&format=json`,
        };
      },
      providesTags: ["albums"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(displayLoader(true));
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(displayLoader(false));
        } catch (err) {}
      },
      transformResponse: (response: any) => {
        return response.topalbums.album;
      },
    }),
    loadAlbum: builder.query<AlbumTrackInfo, SearchAlbum>({
      query: ({ artistName, albumName }) => {
        return {
          url: `?method=album.getInfo&artist=${artistName}&album=${albumName}&api_key=${apiKey}&format=json`,
        };
      },
      providesTags: ["albums"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(displayLoader(true));
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(displayLoader(false));
        } catch (err) {
          // `onError` side-effect
        }
      },
      transformResponse: (response: any) => {
        return response.album;
      },
    }),
  }),
});

export const {
  useLoadNextArtistsQuery,
  useLazyLoadNextArtistsQuery,
  useLoadTopAlbumsQuery,
  useLoadAlbumQuery,
} = artistsApi;
