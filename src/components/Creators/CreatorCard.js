import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ReactComponent as BookmarkIcon } from "../../assets/flag.svg";
import {
  HashtagContainer,
  HashtagContentContainer,
  HashtagText,
} from "../Carousel/TagSlide";
import { bookmarkListState } from "../../store/state";

const CreatorCard = ({ creator, match }) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const isBookmarked =
    bookmarkList.findIndex((bookmark) => bookmark.id === creator.id) === -1
      ? false
      : true;
  const handleClick = () => {
    let newList = bookmarkList;
    isBookmarked
      ? (newList = bookmarkList.filter(
          (bookmark) => bookmark.id !== creator.id
        ))
      : (newList = bookmarkList.concat(creator));
    setBookmarkList(newList);
  };
  return (
    <>
      <CardContainer>
        <CardHeader>
          <BookmarkIcon
            className={isBookmarked ? "bookmarked Icon" : "Icon"}
            onClick={handleClick}
          />
          <CreatorImage />
        </CardHeader>
        <Link to={`${match.url}/${creator.id}`}>
          <CardBody>
            <HeadText>{creator.name}</HeadText>
            <SubText>{creator.job}</SubText>
            <CreatorTag>
              <HashTagListContainer>
                {creator.tag.map((tag) => (
                  <CreatorHashtagContainer>
                    <CreatorHashtagContentContainer>
                      <CreatorHashtagText>{tag}</CreatorHashtagText>
                    </CreatorHashtagContentContainer>
                  </CreatorHashtagContainer>
                ))}
              </HashTagListContainer>
            </CreatorTag>
          </CardBody>
        </Link>
      </CardContainer>
    </>
  );
};

export default CreatorCard;

const CardContainer = styled.div`
  padding: 0px 14px 72px 14px;
`;

const CardHeader = styled.div`
  position: relative;
  width: 317px;
  height: 220px;
  border-radius: 4px;
  background: #d2d2d2;
  .Icon {
    position: absolute;
    left: 273px;
    top: -4px;
    fill: #f1f1f1;
  }
  .bookmarked {
    fill: #7054ff;
  }
  .expired {
    width: 80px;
    height: 31px;
    background: #313338;
    color: #ffffff;
  }
`;

const CreatorImage = styled.div``;

const CardBody = styled.div``;

const SubText = styled.div`
  padding-top: 19px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: #313338;
`;

const HeadText = styled(SubText)`
  padding-top: 13px;
  font-size: 21px;
  font-weight: 700;
  line-height: 21px;
`;

const CreatorTag = styled.div``;

const HashTagListContainer = styled.div`
  display: flex;
  width: 220px;
`;

const CreatorHashtagContainer = styled(HashtagContainer)`
  height: 27px;
  padding: 8px 12px;
`;

const CreatorHashtagContentContainer = styled(HashtagContentContainer)``;

const CreatorHashtagText = styled(HashtagText)`
  color: #8b8b8b;
  font-size: 11px;
  line-height: 11px;
`;
