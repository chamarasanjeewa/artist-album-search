import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import styled from "styled-components";
import { getArtistImageUrl } from "../utils";

export const Album = ({ album, onClick }: { album: Album; onClick: any }) => {
  return (
    <StyledCard onClick={() => onClick(album)}>
      {
        <img
          alt="album"
          src={getArtistImageUrl(album?.image?.[3])}
          height={300}
        />
      }
      <StyledMeta title={album.name} />
    </StyledCard>
  );
};

const StyledMeta = styled(Meta)`
  margin-top: 0.225rem;
`;

const StyledCard = styled(Card)`
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
`;
