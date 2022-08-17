interface Album {
  id: number;
  name: string;
  image: ArtistImage[];
  url: string;
}

interface AlbumTrackInfo {
  name: string;
  image: ArtistImage[];
  artist: string;
  listners: number;
  playcount: number;
  id: string;
  url: string;
  releaseDate: string;
  tags: { tag: Tag[] };
  tracks: {
    track: Track[];
  };
}

interface Track {
  name: string;
  duration: string;
  url: string;
  image: ArtistImage[];
}

interface Artist {
  bio: {
    content: string;
    summary: string;
    published: string;
  };
  url: string;
  image: ArtistImage[];
  mbid: string;
  name: string;
  ontour: string;
  tags: { tag: Tag[] };
}

interface Albums {
  album: Album[];
}

interface Tag {
  name: string;
  url: string;
}

interface ArtistMatches {
  name: string;
  mbid: string;
  image: ArtistImage[];
  listeners: number;
  url: string;
}

interface ArtistImage {
  image: { size: string; #text: string }[];
}

interface ArtistState {
  artistName: string;
  mbid: string;
}

interface SearchQuery {
  searchTerm: string;
}

interface SearchArtist {
  artistName: string;
}

interface SearchAlbum {
  albumName: string;
  artistName: string;
}
