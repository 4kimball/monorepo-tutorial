# monorepo-tutorial

> yarn berry workspace를 활용한 모노레포 구축

### yarn berry 설정

yarn berry는 기존 Node.js 의존성 관리 시스템과 다르기 때문에 패키지 단위로만 설정할 수 있다.
아래 명령어를 통해 berry 버전으로 설정할 수 있다.

```shell
yarn set version berry
```

### workspaces 설정

루트 디렉터리에 있는 package.json에 `workspaces`를 추가한다.
yarn workspace에서 관리할 패키지의 경로를 `packages/**`로 설정한다.

```json
"workspaces": {
    "packages": [
      "packages/**"
    ]
  },
```

### 패키지 생성

packages 디렉토리로 이동하여 각각 `react-pjt`, `vue-pjt`, `webpack-pjt` 폴더를 만들었고,
`npm init -y`를 통해 `package.json`을 생성하였다.

### 패키지별 라이브러리 설치

packages 디렉토리에 패키지들이 존재한다. 각각의 패키지에 라이브러리 설치를 위해서 아래와 같은 명령어를 사용한다.

```shell
yarn workspace [패키지 이름] add [라이브러리]
yarn workspace react-pjt add react
```

루트 디렉토리에 라이브러리를 설치할 때(즉, 패키지에 공통된 라이브러리 설치를 할 때)

```shell
yarn add [라이브러리]
```

### 패키지 실행

현재 `webpack-pjt`에서 `dev`를 실행하면 웹팩 서버가 실행된다.
루트 디렉터리에서 패키지의 scripts를 실행하기 위해서는 아래와 같은 명령어를 사용한다.

```shell
yarn workspace [패키지이름] [scripts명령]
yarn workspace wepback-pjt dev
```

위와 같은 명령을 루트의 `package.json`의 `scripts`에 등록하여 사용할 수도 있다.
