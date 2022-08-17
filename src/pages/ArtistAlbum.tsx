import { useLocation, useNavigate } from "react-router-dom";
import { Divider, List } from "antd";
import { ErrorMessageDisplayer, Spinner } from "../components";
import { useLoadTopAlbumsQuery } from "../redux/apiSlices/artistApiSlice";
import { Album } from "../components/Album";
import { Errors, Info } from "../utils";

export const Artist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { artistName } = location.state as ArtistState;
  const {
    isError,
    isLoading,
    data: albums,
  } = useLoadTopAlbumsQuery({
    artistName,
  });

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMessageDisplayer error={Errors.errorLoadingAlbums} />
      ) : (
        <>
          <Divider orientation="left">{Info.albumTitle(artistName)} </Divider>
          <List
            grid={{ gutter: 4, column: 4 }}
            dataSource={albums}
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
