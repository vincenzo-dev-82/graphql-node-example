# graphql-node-example
## 프로젝트 시작
```
echo "# graphql-node-example" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:vincenzo-dev-82/graphql-node-example.git
git push -u origin main
```

## Node 확인하기
``` bash
# node 버전 확인하기
node -v

# nvm 을 이용한 node 설치
nvm install node
nvm use node
```

## 적합한 npm 버전 사용
### 만약 Node.js 업그레이드가 어렵다면, 현재 Node.js 버전에 맞는 npm 버전을 설치하세요.
``` bash
# npm 버전 확인
npm -v

# Node.js 에 맞는 최신 npm 버전을 설치합니다
npm install -g npm@latest-10
```


## 프로젝트 환경 설정

1. Node.js 초기화
``` bash
# IntelliJ의 터미널(Alt + F12)을 열고 아래 명령어를 입력하여 package.json을 생성합니다:
# 이 명령어는 기본 설정으로 package.json 파일을 만듭니다.
npm init -y
```

2. 필요한 패키지 설치
``` bash
# 예제 코드에 필요한 패키지를 설치합니다:
npm install apollo-server @apollo/client cross-fetch
```

3. 파일 생성
``` 
프로젝트 루트 디렉토리에 두 개의 파일을 생성합니다.
apollo-server.js
apollo-client.js
```

5. 코드 작성
``` 
Apollo Server 및 Apollo Client 코드를 각각의 파일에 구현합니다.
``` 

## 프로젝트 실행

1. 프로젝트 서버 실행
``` bash
# 터미널에서 아래 명령어를 실행하여 GraphQL 서버를 시작합니다.
# http://localhost:4000에서 서버가 실행됩니다.
node apollo-server.js
``` 

2. 프로젝트 클라이언트 실행
``` bash
# 새로운 터미널에서 아래 명령어를 실행하여 클라이언트가 서버에 요청을 보냅니다
# http://localhost:4000에서 서버가 실행됩니다.
node apollo-client.js
node apollo-client-react.js
``` 
