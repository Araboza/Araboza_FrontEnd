<p align="center"><img width="30%" src="https://cdn.discordapp.com/attachments/912302004271992882/927894338300682271/Araboza.png" /></p>

> `.Araboza`는 여러 사람들의 포트폴리오를 공유하고 관리하는 프로젝트입니다.

## START

```
$ git clone https://github.com/Araboza/Araboza_FrontEnd.git
$ cd Araboza_FrontEnd

$ yarn
$ yarn start

$ yarn build
```

## 진행 기간

2021.11.18 ~ 2021.01.03 (약 한달 반)

## 팀 구성

- 프론트엔드 : 변찬우
- 백엔드 : 김시훈, 김현승
- 디자인 : 노가성(필자)

## SKILLS

- [React](https://ko.reactjs.org)
- [Redux](https://ko.redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [axios](https://axios-http.com/)
- [styled-components](https://www.styled-components.com)
- [immer](https://immerjs.github.io/immer/)

## 구현 기능

- `Readux`를 활용하여 상태관리
- 좋아요 기능
- `google OAuth`를 활용한 로그인
- `Quill editor`를 활용한 markdown 작성
- `toast-ui viewer`를 활용한 markdown 문서 읽기

# 프로젝트 진행 과정

## 시작

주제가 결정된 후에는 기능 명세서를 작성하느라 많이 힘들었다<br>
안에 어떤 기능들이 들어가면 좋을지 감이 잘 오질 않아서 많이 고생했던 것 같다<br>
실제로 기능 명세서에는 있지만 프로젝트 진행 중에 없앤 부분도 있다.

![기능 명세서](https://cdn.discordapp.com/attachments/912302004271992882/927912578783543306/unknown.png)

## 디자인

디자인 부분에서는 가성이가 많이 고생을 해줬다.<br>
내 디자인은 많이 답이 없어서 걱정을 하고 있었는데<br>
가성이가 2주 정도를 리그 마를 활용하여 좋은 페이지를 만들어 줘서 많이 고마웠다.

![design](https://cdn.discordapp.com/attachments/912302004271992882/927913613317013544/unknown.png)

## 프런트

### 시작 전

이 프로젝트에 1년 동안 배운 기술들을 모두 적용하고 싶은 욕심에 많이 힘들어졌던 것 같다<br>
일단 CSR의 대표적인 라이브러리인 `React`, 뭔가 사용하면 가지가 철철 흐르는 `Redux`와 `Redux`의 가지에 가지를 더한 `Redux-saga`까지.<br>
사실 처음에는 `Nextjs`를 사용해서 SEO를 좀 더 강화하는 게 좋지 않을까 생각했지만<br>
그때 당시 `Nextjs`를 잘 다루지 못하는 것 같아서 거기까지는 하지 않았다.

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=ffffff"/>
<img src="https://img.shields.io/badge/Redux Saga-999999?style=flat-square&logo=Redux-Saga&logoColor=ffffff"/>

### 시작!

디자인에 맞춰 개발을 하고 있는데 생각해 보니 백에 그쪽에 api 명세서가 없었다<br>
그리고 서버도 아직 만들어지지 않아서 테스트도 못하고 있던 상황에서 아무 생각 없이 기능을 구현하고 있어서 나중에 생각했을 땐 망했다는 생각이 엄청 들었다<br>
어찌어찌 하면서 테스트도 못하는 상황에서 기능 구현과 퍼블리싱이 완성되었고 고통은 그때부터였다

### 백엔드와 연결

백엔드 코드를 짜기 전에 팀원과 같이 api 명세서를 작성하는데 api 명세서를 처음 짜봐서 뭐부터 작성해야 할지 많이 망막했다. 그래서 무지성으로 api 명세서를 작성했더니 많이 부족한 명세서가 탄생했다. 우선 request 값과 response 값을 적지 않아서 프런트 코드를 작성하면서 많은 불편함을 겪었고 처음에는 설명도 적지 않아서 정말 죽는 줄 알았다. 나중에는 `Swagger`라는 것을 활용해 훨씬 나아진 명세서를 보고 개발을 할 수 있었다.

### 마무리

백엔드와 연결을 마무리하고 나니 허점들이 하나씩 보이기 시작했다. 처음에는 포트폴리오를 작성하는 것부터 시작해서 삭제, 수정, 보여주기, user 보여주기, 다른 user는 수정/삭제 못하게 하기, 로그인, 로그아웃 등등 정말 많은 오류가 나서 고치느라 애 많이 먹었다.

## 백엔드

### 시작 전

무엇을 활용해서 백엔드를 만들지 고민이 많았다. `Spring Boot`가 실무에 많이 쓰이니 이걸 사용해 보고 싶었지만 `Java`를 잘 사용하는 팀원이 없었다. 그나마 잘 사용할 수 있는 언어로 하자는 생각에 `express`가 떠올랐지만 그 프레임워크로 심지어 `express`를 많이 써보지도 못한 사람들끼리 협업을 하는 건 너무 끔찍하다 생각해서 다른 방법을 모색하던 끝에 Nest라는 프레임워크를 만날 수 있었다. 하지만 프레임워크는 `typescript`라는 언어를 사용한다는 문제가 있었지만 금방 할 수 있을 것 같아서 `Nest`를 선택하게 되었다.

### 시작!

많이 부족한 api 명세서를 작성한 후 `mysql`과 연결하고 typeorm을 사용해 entity도 만들고 시작은 순조로웠다. 다만 api 명세서가 많이 문제였다. 뭔가 좀 더 정확히 작성했더라면 좋았을 텐데 그게 많이 아쉬웠다.

### 절반 정도 만들었을 때

로그인과 회원가입 등이 어느 정도 만들어졌고 portfolio를 만들려는데 conflict가 많이 나서 굉장히 고생을 했다. branch를 판지 너무 오래되어서 여러 파일에서 conflict가 났다. 또 서로 회의 없이 개발을 해서 같은 기능을 만들고 있기도 했다. 백엔드에서 이런 일을 너무 많이 겪어서 회의의 중요성을 많이 느꼈다.

### 완성

프런트랑 연결을 하면서 백엔드에서도 오류가 많이 보였다 수정이라든가 삭제라든가 정말 많았다. 시간도 없어서 무지성으로 코드를 짜다 보니 지금도 많이 걱정이다.

## 배포

AWS의 ec2를 사용해 우리가 만든 페이지를 배포하고 싶다는 생각이 들었다. 뭔가 재밌을 것 같아서 시도를 해 보았지만 google OAuth가 발목을 잡았다. url 인증을 하려면 `http://example.com`형식의 url이 있어야 하는데 이런 도메인은 돈을 주고 사야 한다고 한다... 아쉽게도 배포까지는 못했지만 좋은 경험이었다

# 결과

- 메인 페이지

![mainPage](https://cdn.discordapp.com/attachments/912302004271992882/927931722660741190/unknown.png)

- 로그인 페이지

![sf](https://cdn.discordapp.com/attachments/912302004271992882/927933968496599151/unknown.png)

- 포트폴리오 작성 페이지

![sfsd](https://cdn.discordapp.com/attachments/912302004271992882/927933104448999474/unknown.png)

- 포트폴리오 포여주는 페이지

![hello](https://cdn.discordapp.com/attachments/912302004271992882/927932653536161802/unknown.png)

![hello](https://cdn.discordapp.com/attachments/912302004271992882/927932556798738522/unknown.png)

- my 페이지

![sdf](https://cdn.discordapp.com/attachments/912302004271992882/927933576127869048/unknown.png)

# 프로젝트를 마무리 하면서

쉽게 할 수 있는 부분을 너무 어렵게 한 것 같아서 많이 힘들었지만 친구들과 협업하면서 이런 저런 에러를 보고 배워서 좋았던 것 같다. 프론트나 백엔드 둘다 많은 허점이 보이지만 지금은 무시하고 다음에 관심이 생기면 고쳐야 겠다.

지금까지 열심히 도와준 가성이나 시훈이, 현승이 정말정말 고맙다! 수고했고 다른 프로젝트에서 만나자!
