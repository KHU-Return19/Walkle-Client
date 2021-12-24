import React from 'react'
import styled from 'styled-components';
const PageIndicator = ({currentSlide}) => {
    return (
        <>
        <PageIndicatorContainer>
          <PageIndicatorBox>
            <PageIndicatorSlider>
              <PageIndicatorOuter className={currentSlide=== 0 && "current-slide"} id="0">
                <PageIndicatorInner className={currentSlide=== 0 && "current-slide"}/>
              </PageIndicatorOuter>
              <PageIndicatorOuter className={currentSlide=== 1 && "current-slide"} id="1">
              <PageIndicatorInner className={currentSlide=== 1 && "current-slide"}/>
              </PageIndicatorOuter>
              <PageIndicatorOuter className={currentSlide=== 2 && "current-slide"} id="2">
              <PageIndicatorInner className={currentSlide=== 2 && "current-slide"}/>
              </PageIndicatorOuter>
              <PageIndicatorOuter className={currentSlide>= 3 && "current-slide"} id="3">
              <PageIndicatorInner className={currentSlide>= 3 && "current-slide"}/>
              </PageIndicatorOuter>
            </PageIndicatorSlider>
          </PageIndicatorBox>
        </PageIndicatorContainer>
        </>
    )
}

export default PageIndicator;

const PageIndicatorContainer = styled.div`
  justify-items: center;
  text-align: center;
`;

const PageIndicatorBox = styled.div`
width: 140px;
height: 16px;
margin: 50px auto 0px auto;
`;

const PageIndicatorSlider = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;

  width: 140px;
  height: 8px;
  .current-slide {
    background : #f5f3ff;
  }
`;

const PageIndicatorOuter = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 100px;
  .current-slide {
    background: #7054ff;
  }
  justify-content: center;
  display: flex;
`;

const PageIndicatorInner = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  border-radius: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #d2d2d2;
  border-radius: 100px;
`;