# 시작 전
0. branch 및 버전 확인, 가장 최신 버전으로 pull.
1. `npm install`로 필요 dependencies 전부 설치
2. walkle-client 폴더에 .env 생성, `REACT_APP_REST_API_KEY` 와 `REACT_APP_API_KEY` 환경변수 선언, app key는 프론트 팀에게 문의
3. `npm start` 실행

## 개발 경과 확인용 배포 페이지
https://mrmirror21.github.io/

### Walkle

`React.js` `Styledcomponents`

> **지도 기반 로컬 크리에이터 플랫폼 서비스**
> 

로컬 크리에이터 간 협업을 촉진시키기 위해 제작한 서비스. FE 1명, BE 2명, 기획자 1명, 디자이너 2명이 진행한 팀 프로젝트.

📎 [Github](https://github.com/KHU-Return19/Walkle-Client) / [Site](https://mrmirror21.github.io/) (2021.10 ~ 2022.02, 현재 데모 이용 가능)

**Front-End**

- 프론트엔드 UI **단독 구현, 개발**
- KaKao Map API 활용, 사용자의 위치 기반 서비스 제공
    - 당시 React.js를 미지원 했던 API의 CSS 관련 GUI 독자 구현
- Carousel, 카드형, 피드 등 **UI 전반 자체 구현 및 개발**
