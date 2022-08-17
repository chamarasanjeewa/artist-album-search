import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Row, Image } from "antd";
import styled from "styled-components";
import { getArtistImageUrl, Info } from "../utils";
import SearchBar from "../components/SearchBar";
import { ErrorMessage, Spinner } from "../components";
import { useSearchArtists } from "../hooks";

export const SearchArtist = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  const { matchedArtists, loading, error } = useSearchArtists(searchText);

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const handleArtistClick = (artist: ArtistMatches) => {
    navigate(`/artist`, {
      state: { artistName: artist.name },
    });
  };

  return (
    <>
      <SearchBar onSearch={onSearch} placeHolder={Info.searchArtist} />
      <ResultContainer>
        {loading ? (
          <Spinner />
        ) : (
          <Row gutter={[16, 16]}>
            {error && <ErrorMessage error={error} />}
            {matchedArtists?.map((artist: ArtistMatches, i) => (
              <StyledRow
                key={`${artist?.mbid} ${i}}`}
                onClick={() => {
                  handleArtistClick(artist);
                }}
              >
                <StyledCol span={3}>
                  <StyledImage src={getArtistImageUrl(artist?.image?.[0])} />
                </StyledCol>
                <StyledCol span={4}>{artist.name}</StyledCol>
                <StyledCol span={12}>{artist.listeners}</StyledCol>
                <StyledCol span={5} onClick={(e) => e.stopPropagation()}>
                  <a href={artist.url}>More </a>
                </StyledCol>
              </StyledRow>
            ))}
          </Row>
        )}
      </ResultContainer>
    </>
  );
};

const StyledRow = styled(Row)`
  height: 4rem;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }
`;

const ResultContainer = styled.div`
  margin: 1rem;
  overflow: scroll;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledCol = styled(Col)`
  padding: 0.125rem;
  text-overflow: ellipsis;
`;
