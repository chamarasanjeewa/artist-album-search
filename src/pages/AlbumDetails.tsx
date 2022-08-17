import { Col, Divider, List, Row, Skeleton, Tag } from "antd";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessageDisplayer, Spinner } from "../components";
import { useLoadAlbumQuery } from "../redux/apiSlices/artistApiSlice";
import { Errors, getArtistImageUrl } from "../utils";

export const AlbumDetails = () => {
  const location = useLocation();

  const { artistName, albumName } = location.state as SearchAlbum;
  console.log("inside details", artistName, " album", albumName);
  const { data, isLoading, isError } = useLoadAlbumQuery({
    artistName,
    albumName,
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMessageDisplayer error={Errors.errorLoadingAlbum} />
      ) : (
        <Row>
          <StyledTracks span={12}>
            <Divider orientation="left">Tracks</Divider>
            <List
              loading={false}
              itemLayout="horizontal"
              dataSource={data?.tracks?.track}
              renderItem={item => (
                <StyledListItem>
                  <Skeleton avatar title={false} loading={false} active>
                    <List.Item.Meta
                      title={<a href={item.url}>{item.name}</a>}
                      description={item.duration}
                    />
                  </Skeleton>
                </StyledListItem>
              )}
            />
          </StyledTracks>
          <Col span={12}>
            <div>
              <img alt="example" src={getArtistImageUrl(data?.image?.[5])} />
            </div>
            <div>
              {data?.tags?.tag?.map((x, i) => (
                <StyledTag
                  key={`${x} ${i}}`}
                  onClick={() => {
                    window.location.href = x.url;
                  }}
                >
                  {x.name}
                </StyledTag>
              ))}
            </div>
            <div>
              <span>{data?.name}</span>
            </div>
            <div>
              <span>{data?.artist}</span>
            </div>
            <div>
              <span>{data?.listners}</span>
            </div>
            <div>
              <span>{data?.playcount}</span>
            </div>
            <div>
              <span>{data?.url}</span>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

const StyledTracks = styled(Col)`
  padding-right: 1rem;
`;

const StyledListItem = styled(List.Item)`
  padding: 0.5rem !important;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const StyledTag = styled(Tag)`
  cursor: pointer;
  margin: 0.225rem;
  font-size: 1rem;
  font-weight: bold;
  color: inherit;
  padding: 0.225rem;
  margin-right: 0.225rem;
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;
