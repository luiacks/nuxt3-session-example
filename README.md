# Nuxt3 Session Example

> Nuxt3でいい感じにセッションを管理する方法の提案

# 開発環境

```bash
node --version
v21.7.2

npm --version
10.5.0

docker --version
Docker version 25.0.3, build 4debf41
```

# 実行手順

- .envファイルを作成する(.env.exampleを参考に)
  - 必要であればDockerでMongoDBを立ち上げる
- 以下のコマンドを実行する

```bash
# DockerでMongoDBを起動(任意)
docker-compose up -d

# インストール
npm i

# 開発
npm run dev
```
