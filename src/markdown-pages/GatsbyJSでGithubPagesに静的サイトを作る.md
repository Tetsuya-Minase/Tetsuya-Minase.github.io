---
path: "/blog/20200322"
date: "2020-03-22"
title: "GatsbyJSでGithubPagesに静的サイトを作る"
tag: ["JavaScript", "TypeScript"]
---

# はじめに
Angularで静的サイトを作ってた今日このごろ。  
Gatsbyも触ってみたかったので今回はGatsbyを使って静的サイトをGithubPagesに公開してみる。  

ただ公開するのはチュートリアルですぐできそうなので、  
Markdownページを公開できるようにするのと自動デプロイも試してみる。

# TL;DR.
[今回作ったもの](https://github.com/Tetsuya-Minase/Tetsuya-Minase.github.io)  
[このページ](https://tetsuya-minase.github.io/blog/20200322)

# 導入
公式の[QuickStart](https://www.gatsbyjs.org/docs/quick-start/)を見ながら進めていく。  

``` bash
$ npx gatsby-cli new gatsby-blog
> yarnとnpmどっち使うか聞かれるので好みで設定
```

`yarn (npm run) develop`で↓のようなページが表示されれば導入は完了。
[f:id:minase_mira:20200322194339p:plain]

# TypeScript化する
デフォではjsなのでts対応する。  
[公式](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)からプラグインが出ているのでそれを使うことにする。

## 必要なものをインストール
``` bash
# プラグインとtsをインストール
$ yarn add gatsby-plugin-typescript typescript

# 型定義もインストールしておく
$ yarn add --dev @types/react @types/react-dom @types/node
```

## tsconfigの作成
サクッと設定。  
ミニマムではないと思うけど、問題ないと思うのでこれでやる。

``` json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}
```

## ts化
ファイル全般を`.tsx`に変更すれば完了

# Markdown対応
静的サイトはこれまでの手順で作成可能だが一々HTMLを書くのはしんどいので、   
Markdownで書いたものを表示できるようにする。

Markdownに対応させるのはlibraryがあるのでそれを使う。  
導入方法は[公式](https://www.gatsbyjs.org/docs/adding-markdown-pages/)に乗っているので参考にしながらすすめる。

## libraryのインストール
``` bash
$ yarn add  gatsby-source-filesystem gatsby-transformer-remark
```

# Markdownファイルを作成
適当にMarkdownの記法を色々試してみる。  
`—--`で囲まれた部分はコンテンツではなく、メタデータとして扱われる。

``` markdown
---
path: "/blog/20200318"
date: "2020-03-18"
title: "My first blog post"
tag: ["JavaScript", "TypeScript"]
---

# はじめに
マークダウンを読めるようになったので試す。

# TL;DR.
このページ

# ヘディング
## レベル２
はこんなもん

### レベル３
はこれ

#### レベル4
だよ

# リスト
* hoge
* huga
* piyo

# 順番付き
1. first
2. second
3. third

# コード系
インライン`code`はこんな感じ  
ブロックは↓みたいな  

```
const hoge = () => 'hoge';
console.log(hoge());
```

# テーブル
|title|value|
|:---:|:----|
|中央寄せの文字を入れている。|左寄せの値を入れてみている。|
|２段目タイトル|２段目バリュー|

# 文字装飾
**ボールド**  
_イタリック_  

# 引用
> 引用してみた
>> もっと
```

## gatsby-configに追加
### gatsby-source-filesystem
これでMarkdownをソースとして読み込むことができるようになる。

``` javascript
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `markdown-pages`,
    path: `${__dirname}/src/markdown-pages`
  }
}
```

### gatsby-transformer-remark
これを使用することでMarkdownのコンテンツ部分をHTMLに。  
メタデータ部分を`formatter`に変換してくれる。

``` javascript
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `markdown-pages`,
    path: `${__dirname}/src/markdown-pages`
  }
},
// 追記
`gatsby-transformer-remark`
```

## Markdownファイルのテンプレート作成
とりあえず公式のテンプレートそのまま使う。  
(tsxに変更しただけ)

``` typescript
import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
```

## gatsby-nodeを使ってページを作成する
Markdownで書いたページから静的ページを作成するため、`gatsby-node`を用意する。  
今回はTypeScriptを使ったので、`ts-node`を使う。  
基本は公式のままで、`ts-node`部分を足しただけ。

``` javascript
const path = require(`path`)

// ここを追加
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
```

# GithubActionsを使って自動デプロイをする
GithubPagesに公開するのは有効にした上で、Markdownで書いたものをbuildしてpushすれば完了する。  
ただ、公開の都度buildするのはめんどくさいのでActionsを使って自動化してみる。  
※GithubPagesの公開方法は[公式](https://help.github.com/ja/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)参照

## workflow作成
GithubPagesにデプロイする[Action](https://github.com/marketplace/actions/github-pages-action)はすでにあるので、これを使ってやってみる。  
ただし、このActionはデプロイ先のブランチをすべて上書きしてしまうっぽいので、  
pagesを公開するブランチ以外をdefaultブランチにしたほうが良いかもしれない。  
(自分はmasterブランチを公開用にして、作業用をdevelopブランチとした)

``` yaml
name: deploy-pages

on:
  push:
    # 作業用ブランチにpushされた時に動かす
    branches:
      - develop

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1

      - name: setup
        uses: actions/setup-node@v1
        with:
          node-version: 12

      - name: install and setup config
        run: npm install

      # Gatsbyのビルド
      - name: build
        run: npm run build

      # pagesへdeployする
      - name: deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          # developブランチのpublicディレクトリの内容を
          publish_dir: ./public
          # masterブランチにpushする
          publish_branch: master
```

# まとめ
GatsbyJSを使って静的サイトを作った。  
Gatsbyをts化してうまく動かすところに苦戦した。  
今回の様な使い方をするのであれば、  
型があるメリットも薄い気がしたのであまり必要ないかなと思った。  

Gatsbyが意外と色々できる気がしたのでこれからもちょくちょく触っていきたいところ。  

# 参考リンク
- [Quick Start | GatsbyJS](https://www.gatsbyjs.org/docs/quick-start/)
- [gatsby-plugin-typescript | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)
- [Adding Markdown Pages | GatsbyJS](https://www.gatsbyjs.org/docs/adding-markdown-pages/)
- [TypeStrong/ts-node: TypeScript execution and REPL for node.js](https://github.com/TypeStrong/ts-node)
- [Gatsby.js を完全TypeScript化する - Qiita](https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb#template-%E3%81%AE-pagecontext-%E5%9E%8B%E3%82%92%E7%B8%9B%E3%82%8B)
- [GitHub Pages サイトの公開元を設定する - GitHub ヘルプ](https://help.github.com/ja/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages action · Actions · GitHub Marketplace](https://github.com/marketplace/actions/github-pages-action)
