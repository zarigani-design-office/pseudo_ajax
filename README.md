# Ajax風遷移アニメーション　Pseudo Ajax

このスクリプトはページ遷移をAjaxのような雰囲気にします。あくまで**Ajax風**であって、実際にAjaxを実装できるわけではないのでご注意ください。ページ間遷移をそれっぽくエフェクトをかけるスクリプトです。

## 使い方
`dist`フォルダにある`pseudo_ajax.min.js`を読み込み、scriptタグ内で`pseudo_ajax()`を実行すればOK。読み込みがふわっと出現するようになり、aタグをクリックするとふわっと消えてページ遷移します。

```
<script src="PATH/TO/pseudo-ajax.js"></script>
<script>
  pseudo_ajax()
</script>
```

## API
以下のAPIを用意しています。

| API | Type | Default | 説明 |
|----|----|----|----|
| tag | String | "a" | Ajax風を実行するセレクター |
| loadingStyle | String | "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center" | Loadingの文字のスタイル |



```
  pseudo_ajax({
    tag: ".pseudo",
    loadingStyle: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;font-size:2rem",
    beforeLoadStyle: "transform:translateY(48px);opacity:0",
    afterLoadStyle: "transition:all 1.5s ease-in-out;transform:translateY(0px);opacity:1",
    transitionStyle: "transition:all 2.6s ease-in-out;transform:translateY(32px);opacity:0"
  })
```
