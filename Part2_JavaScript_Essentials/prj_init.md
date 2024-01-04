# FE 개발 환경 세팅 

1. `npm init -y` (프로젝트 이름이 영어만 가능)
2. `npm install parcel-bundler -D` : -D 는 devDependencies로써 개발용 의존성 패키지 설치 (개발할떄만 필요하고 웹브라우저에서는 필요없다는 뜻)
3. 필요한 패키지 설치 : ex) `npm install lodash` 등등 (웹 브라우저에서 실제 동작해야 하는 패키지)
  - github에서 내려 받았을 떄는 `npm install` 입력 시 자동으로 생성
4. index.html 생성
5. main.js 생성
6. package.json의 script에 추가
```json
{
  "name": "js-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev" : "parcel index.html",
    "build" : "parcel build index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  }
}
```
> parcel-bundler은 프로젝트에서만 설치가 된 것이기 떄문에 이렇게 추가 해야됨
7. 터미널에 `npm run dev`로 개발서버를 실행
8. .gitignore 추가
```script
## npm i

node_modules/
.cache/
dist/
```