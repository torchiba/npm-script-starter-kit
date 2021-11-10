# npm-script-starter-kit
## ディレクトリ構成
```plain text
package.json  
-- dist  
  index.html  
  -- assets  
    -- css  
    -- js  
    -- images  
-- src  
  -- assets  
    -- scss  
      style.scss  
    -- ts  
      script.ts  
    -- images  
      image.jpg  
      image.gif  
      image.png  
      image.svg  
    -- ejs  
      index.ejs  
      -- templates
        _(parts).ejs  
.browserslistrc  
.editorconfig  
.eslintrc.json  
.prettierrc  
.stylelintrc  
README.md  
imagemin.js  
package-lock.json  
package.json  
postcss.config.js  
rollup.config.js  
tsconfig.json  

```

`src`内のファイルを編集してください。  
`dist`内にビルドされます。

## 制作環境
- git: 2.17.2
- npm: 6.14.12
- node.js: v14.16.1

## セットアップ
```sh
# clone
$ git clone git@github.com:torchiba/npm-script-starter-kit.git
$ cd npm-script-starter-kit

# package install
$ npm install

# build localhost
$ npm run watch
```
