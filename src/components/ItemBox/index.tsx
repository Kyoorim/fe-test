import { useState } from "react";
import * as S from "./style";
import { HouseInfo } from "../../types";
import enkorpic from "../../data/enkorpic.jpeg";

const ItemBox = ({ houseInfo }: { houseInfo: HouseInfo }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <S.Wrapper>
      <S.ImageContainer>
        {imageError ? (
          <img src={enkorpic} alt="house" />
        ) : (
          <img
            src={houseInfo.images[0].url}
            alt="house"
            onError={handleImageError}
          />
        )}
      </S.ImageContainer>
      <S.InfoContainer>
        <h4>{houseInfo.name}</h4>
        <h5>{houseInfo.address}</h5>
        <S.TagContainer>
          <span>{houseInfo.houseType}</span>
          <span>{houseInfo.university}</span>
        </S.TagContainer>
      </S.InfoContainer>
    </S.Wrapper>
  );
};

export default ItemBox;
