interface Album {
  id: number;
  name: string;
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
