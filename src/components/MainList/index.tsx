import ItemBox from "../ItemBox";
import * as S from "./style";
import housesInfo from "../../data/houses.mock.json";

const MainList = () => {
  const houseInfo = housesInfo;

  console.log(houseInfo);

  console.log(houseInfo);
  return (
    <S.Wrapper>
      <span> {houseInfo.length} Houses Available</span>
      {houseInfo.map((house) => (
        <ItemBox key={house.id} houseInfo={house} />
      ))}
    </S.Wrapper>
  );
};

export default MainList;