/* Copyright 2019 Zarigani Design Office
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function pseudoAjax(
  //ユーザー設定読み込み デフォルト値はundefinedとして定義
  yourSettings = {
    tag: undefined,
    loadingText: undefined,
    loadingStyle: undefined,
    beforeLoadStyle: undefined,
    afterLoadStyle: undefined,
    transitionStyle: undefined
  }
) {
  const yourTag = yourSettings.tag;
  const yourLoadingText = yourSettings.loadingText;
  const yourLoadingStyle = yourSettings.loadingStyle;
  const yourBeforeLoadStyle = yourSettings.beforeLoadStyle;
  const yourAfterLoadStyle = yourSettings.afterLoadStyle;
  const yourTransitionStyle = yourSettings.transitionStyle;
  //ユーザー設定を実行関数に渡す。
  pseudoAjaxExe(
    yourTag,
    yourLoadingText,
    yourLoadingStyle,
    yourBeforeLoadStyle,
    yourAfterLoadStyle,
    yourTransitionStyle
  );
}
//実行関数
function pseudoAjaxExe(
  //引数がundefinedの場合はデフォルト値
  tag = "a",
  loadingText = "Loading",
  loadingStyle = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;font-family:sans-serif",
  beforeLoadStyle = "transform:translateY(16px);opacity:0;width:100vw;height:100vh;overflow:hidden;",
  afterLoadStyle = "transition:transform 0.6s ease-in-out,opacity 0.6s ease-in-out;transform:translateY(0px);opacity:1;width:100vw;height:100vh;overflow:hidden;",
  transitionStyle = "transition:transform 0.6s ease-in-out,opacity 0.6s ease-in-out;transform:translateY(16px);opacity:0;width:100vw;height:100vh;overflow:hidden;"
) {
  const body = document.getElementsByTagName("body")[0];
  const loadingDom = document.createElement("div");
  //読み込み時のアニメーション
  document.addEventListener("DOMContentLoaded", () => {
    //DOM構築時Bodyフェードアウト
    body.setAttribute("style", beforeLoadStyle);
    //Loading文字
    loadingDom.textContent = loadingText;
    loadingDom.setAttribute("style", loadingStyle);
    body.parentNode.insertBefore(loadingDom, body);
  });

  window.onload = () => {
    //Loadingの文字削除
    body.parentNode.removeChild(loadingDom);
    //DOM構築完了時にフェードイン
    body.setAttribute("style", afterLoadStyle);
    body.addEventListener("transitionend", () => {
      body.setAttribute("style", "");
    });
  };

  //セレクタークリック時にフェード付与
  const selectors = document.querySelectorAll(tag);
  for (const selector of selectors) {
    const href = selector.href;
    const target = selector.target;
    selector.addEventListener("click", e => {
      //target="_blank"の場合は通常挙動
      if (target !== "_blank") {
        //デフォルト挙動キャンセル
        e.preventDefault();
        body.setAttribute("style", transitionStyle);
        //トランジッション終わったら、ページ遷移
        body.addEventListener("transitionend", () => {
          body.parentNode.removeChild(body);
          location.href = href;
        });
      }
    });
  }
}
