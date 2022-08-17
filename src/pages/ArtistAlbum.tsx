import { useLocation, useNavigate } from "react-router-dom";
import { Divider, List } from "antd";
import { ErrorMessageDisplayer, Spinner } from "../components";
import { useLoadTopAlbumsQuery } from "../redux/apiSlices/artistApiSlice";
import { Album } from "../components/Album";
import { Errors, Info, SortBy } from "../utils";
import { useEffect, useState } from "react";
import { SortAlbums } from "../components/RecordSorter";

export const Artist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sortedAlbums, setSortedAlbums] = useState<Album[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.none);
  const { artistName } = location.state as ArtistState;
  const {
    isError,
    isLoading,
    data: albums,
  } = useLoadTopAlbumsQuery(
    {
      artistName,
    },
    { skip: !artistName }
  );

  useEffect(() => {
    if (albums) {
      let sortedAlbums = albums;
      if (sortBy === SortBy.ascending) {
        sortedAlbums = albums.slice().sort(comparer);
      } else if (sortBy === SortBy.descending) {
        sortedAlbums = albums.slice().sort(comparer).reverse();
      }
      setSortedAlbums(sortedAlbums);
    }
  }, [albums, sortBy]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMessageDisplayer error={Errors.errorLoadingAlbums} />
      ) : (
        <>
          <Divider orientation="left">{Info.albumTitle(artistName)} </Divider>
          <SortAlbums
            onSort={(sortBy: SortBy) => {
              setSortBy(sortBy);
            }}
          />
          <List
            grid={{ gutter: 4, column: 4 }}
            dataSource={sortedAlbums}
            renderItem={item => (
              <List.Item>
                <Album
                  album={item as Album}
                  onClick={(album: Album) => {
                    navigate(`/album`, {
                      state: { artistName: artistName, albumName: album.name },
                    });
                  }}
                />
              </List.Item>
            )}
          />
        </>
      )}
    </div>
  );
};

const comparer = (a: Album, b: Album) => {
  {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }
};
