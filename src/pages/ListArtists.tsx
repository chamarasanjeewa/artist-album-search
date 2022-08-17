import { useLocation, useNavigate } from "react-router-dom";
import { List, Skeleton, Avatar } from "antd";
import { Errors, getArtistImageUrl } from "../utils";
import { ErrorMessageDisplayer, Spinner } from "../components";
import { useLoadNextArtistsQuery } from "../redux/apiSlices/artistApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styled from "styled-components";

export const ListArtists = () => {
  const location = useLocation();
  const { artistName } = (location.state as ArtistState) || {};
  const navigate = useNavigate();
  const { active } = useSelector((state: RootState) => state.loadingReducer);
  const { data, isLoading, isError } = useLoadNextArtistsQuery({
    searchTerm: artistName,
  });

  const handleArtistClick = (artist: ArtistMatches) => {
    navigate(`/artist`, {
      state: { artistName: artist.name },
    });
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMessageDisplayer error={Errors.errorLoadingArtist} />
      ) : (
        <List
          key={"dsfas"}
          grid={{ gutter: 4, column: 4 }}
          loading={active}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <StyledListItem
              onClick={() => handleArtistClick(item)}
              actions={[<a href={item?.url}>More information </a>]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <StyledMeta
                  avatar={<Avatar src={getArtistImageUrl(item?.image?.[4])} />}
                  title={<a href={item.url}>{item.name}</a>}
                  description={`Listners: ${item.listeners}`}
                />
              </Skeleton>
            </StyledListItem>
          )}
        />
      )}
    </div>
  );
};

const StyledListItem = styled(List.Item)`
  padding: 0.5rem !important;
  text-overflow: ellipsis;
  cursor: pointer;
  background-color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const StyledMeta = styled(List.Item.Meta)`
  text-overflow: ellipsis;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
`;
