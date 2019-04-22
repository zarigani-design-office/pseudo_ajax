/* Copyright 2019 Zarigani Design Office
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const body = document.getElementsByTagName("body")[0];
const loadingDom = document.createElement("div");
const selector = document.querySelectorAll("a");

document.addEventListener("DOMContentLoaded", () => {
  //DOM構築時Bodyフェードアウト
  body.setAttribute("style", "transform:translateY(16px);opacity:0");
  //Loading文字
  loadingDom.textContent = "Loading";
  loadingDom.setAttribute(
    "style",
    "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center"
  );
  loadingDom.setAttribute("id", "loading");
  body.parentNode.insertBefore(loadingDom, body);
});
window.onload = () => {
  //Loadingの文字削除
  body.parentNode.removeChild(loadingDom);
  //DOM構築完了時にフェードイン
  document
    .getElementsByTagName("body")[0]
    .setAttribute(
      "style",
      "transition:all 0.6s ease-in-out;transform:translateY(0px);opacity:1"
    );
  //aタグクリック時にフェード付与
  const aTags = Array.from(selector, e => {
    return e;
  });
  aTags.forEach(a => {
    const href = a.href;
    const target = a.target;
    a.addEventListener("click", e => {
      if (target !== "_blank") {
        //target="_blank"の場合は通常挙動
        //デフォルト挙動キャンセル
        e.preventDefault();
        //const body = document.getElementsByTagName("body")[0];
        body.setAttribute(
          "style",
          "transition:all 0.6s ease-in-out;transform:translateY(16px);opacity:0"
        );
        //トランジッション終わったら、ページ遷移
        body.addEventListener("transitionend", () => {
          location.href = href;
        });
      }
    });
  });
};
