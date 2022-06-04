# Movie-App

> 영화 목록을 인기순으로 보여주고, 영화에 대한 정보(평점, 개봉일, 개요) 제공 및 영화를 검색할 수 있는 앱

---

## 사용

- React
- Styled Components
- Axios
- TMDb API
- Context API

---

## 목차

- [구현](#구현)
  - 인기순 영화 목록
  - 영화 정보 제공
  - 영화 검색
  - UI
- [트러블 슈팅](#트러블슈팅)

---

## 구현

### 인기순 영화 목록

<img style="width:100vw; display:block; margin:0 auto" alt="initial" src="https://user-images.githubusercontent.com/90893579/171010177-322570f6-3daf-4fdc-98d7-6049ea73df0d.png">

- MovieList 컴포넌트에서 Axios 라이브러리를 통해 async/await으로 비동기 통신 요청으로 TMDb API 통신

### 영화 정보 제공

<img style="width:100vw; display:block; margin:0 auto" alt="overview" src="https://user-images.githubusercontent.com/90893579/171024033-2165fee3-f6e0-4269-96d8-5d8edff799c5.png">

- MovieList 컴포넌트에서 MovieItem 컴포넌트로 props를 통해 영화 객체를 전달 받아 map()으로 값을 꺼내 사용
- 커스텀 Hooks 생성해 반복되는 영화 목록 출력하는 로직 재사용

### 영화 검색

<img style="width:100vw; display:block; margin:0 auto" alt="search" src="https://user-images.githubusercontent.com/90893579/171024165-fda18ae9-ce21-4c1b-a31b-c66228f1d03c.png">

- MovieSearch 컴포넌트에서 Axios 라이브러리를 통해 get방식으로 통신
- 검색어를 useState로 관리하고, Axios로 get 요청 시 params 통해 검색 Query String으로 전달해 검색
- 검색어를 입력한 경우와 입력하지 않았을 경우를 useState의 boolean으로 관리해 삼항 연산자로 화면 출력

### UI

- Styled Components 이용
  - Global Style로 관리
  - props 받아와 스타일 적용
- input tag의 placeholder에 icon 사용
- transform 속성의 translateY 설정으로 영화 컨텐츠에 마우스를 hover하면 영화 정보 개요 출력

---

## 트러블 슈팅

### Array.prototype.map() expects a return value from arrow function. 오류

**문제**

- Axios 라이브러리로 get 방식으로 받아온 데이터를 배열 내장 함수 map과 arrow function을 이용해 값을 꺼내는데 생긴 오류

**해결**

- 중괄호{}를 소괄호()로 바꾸고 오류 해결함

### Input placeholder에 font-awesome icon 삽입되지 않는 현상

**문제**

- Input의 placeholder에 react-icons을 import한 후 돋보기 아이콘을 삽입하고자 할 때 생긴 현상

**해결**

- 해당 아이콘을 16진수로 변환한 코드를 placeholder 속성에 text와 동일한 형식으로 입력하고 CSS로 속성 정해주어 해결

### 검색이 되지 않는 현상

**문제**

- Axios로 search API호출시, search url에 검색어 반영이 안되는 현상

**해결**

- Input 컴포넌트에 value에 검색어를 전달
- onChange, onSubmit을 실행하는데 value로 값을 전달해 주어야 함을 학습

### 초기 마운트 시 undefined가 검색

**문제**

- 처음 렌더링되면서 Input에서 입력받지 않은 값을 검색하는 현상

**해결**

- preventDefault로 해결
- 검색어를 useState로 관리했는데, useEffect로 관리할 경우 효율적일 것 같음

---

## 학습한 내용

### Axios 라이브러리

- Axios 라이브러리는 HTTP 요청을 Promise 기반으로 처리하는 라이브러리로 JavaScript 객체를 'JSON'으로 직렬화함
- async, await를 사용할 경우 함수 앞에 `async` 를, 내부에 `async` 를 사용해 비동기 통신 처리
- async, await는 오류 디버깅을 위해 try, catch구문을 사용

### arrow function의 return문

- arrow function를 이용해 컴포넌트를 반환하고자 할 때 중괄호{}와 소괄호()에 따라 규칙이 다름
- 중괄호{}를 쓰고자 할 때는 return을 입력해야 함
- 소괄호()를 쓰고자 할 때는 return 없어도 됨
