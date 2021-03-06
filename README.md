# Ajax風遷移アニメーション　Pseudo Ajax

このスクリプトはページ遷移をAjaxのような雰囲気にします。あくまで**Ajax風**であって、実際にAjaxを実装できるわけではないのでご注意ください。ページ間遷移にそれっぽいエフェクトをかけるスクリプトです。

## 使い方
`dist`フォルダにある`pseudo_ajax.min.js`を`</body>`タグ直前に読み込みます。（注意：`<head>`タグ内だとエラーになります。）続く`<script>`タグ内で`pseudo_ajax()`を実行すればOKです。読み込み時にふわっと出現するようになり、aタグをクリックするとふわっと消えてページ遷移します。

自動でもbodyに対してスタイルがあてられますが、読み込み時にわずかにスタイルがあたる前のものが見えてしまうかもしれないので、`beforeLoadStyle`のデフォルトスタイル（もしくは自分でカスタマイズしたスタイル）を`<body>`タグにインラインで記述するとより確実です。
`<body>`タグへスタイルを与えるので、これ以外のスタイルがあるとアニメーションに干渉する恐れがあるので、ご注意ください。

CSS transfromを使っている関係上、position: fixエレメントへの影響があるかもしれません。

また、他のプラグイン（例えばフルページ系の）とも干渉する可能性があります。

### 記述例

```
<script src="PATH/TO/pseudo-ajax.js"></script>
<script>
  pseudoAjax()
</script>
</body>
```

## API
以下のAPIを用意しています。

| API | Type | Default | 説明 |
|:---|:---|:---|:---|
| tag | String | "a" | Ajax風を実行するセレクター |
| loadingText | String | "Loading" | ローディング中の表示文字 |
| loadingStyle | String | "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center" | Loadingの文字のスタイル |
| beforeLoadStyle | String | "transform:translateY(16px);opacity:0;width:100vw;height:100vh;overflow:hidden;" | 読み込み完了前のbodyに対するスタイル |
| afterLoadStyle | String | "transition:transform 0.6s ease-in-out,opacity 0.6s ease-in-out;transform:translateY(0px);opacity:1;width:100vw;height:100vh;overflow:hidden;" | 読み込み完了時のbodyに対するスタイル |
| transitionStyle | String | "transition:transform 0.6s ease-in-out,opacity 0.6s ease-in-out;transform:translateY(16px);opacity:0;width:100vw;height:100vh;overflow:hidden;" | ページ遷移時のbodyに対するスタイル |

### 設定例

```
  pseudo_ajax({
    tag: ".pseudo",
    loadingText: "LOADING",
    loadingStyle: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;font-size:2rem",
    beforeLoadStyle: "transform:translateY(48px);opacity:0;width:100vw;height:100vh;overflow:hidden;",
    afterLoadStyle: "transition:transform 1.6s ease-in-out,opacity 1.6s ease-in-out;transform:translateY(0px);opacity:1;width:100vw;height:100vh;overflow:hidden;",
    transitionStyle: "transition:transform 2.6s ease-in-out,opacity 2.6s ease-in-out;transform:translateY(48px);opacity:0;width:100vw;height:100vh;overflow:hidden;"
  })
```

## 対応ブラウザ

ES6で書いているので、IE11以外のモダンなブラウザなら対応していはずです。

## ライセンス
MIT License
