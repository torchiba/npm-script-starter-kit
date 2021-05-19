(() => {
  // -------------------------------- //
  // 360px未満のデバイスの場合、デバイス幅を360pxに
  // -------------------------------- //
  const switchViewport = () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    console.log(viewport);
    const value =
      window.outerWidth > 375 ?
        'width=device-width,initial-scale=1' :
        'width=375';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };
  switchViewport();
  // -------------------------------- //
  // リサイズ・スクロールごとの処理
  // -------------------------------- //
  window.addEventListener('load', () => {
    // ---------------- resizeRunning ---------------- //
    let resizeRunning = false;
    window.addEventListener('resize', () => {
      // 呼び出されるまで何もしない
      if (!resizeRunning) {
        resizeRunning = true;
        // 描画する前のタイミングで呼び出してもらう
        window.requestAnimationFrame(() => {
          // ここでなにか処理をする
          console.log('resizeRunning');
          switchViewport();
          resizeRunning = false;
        });
      }
    });

    // ---------------- scrollRunning ---------------- //
    let scrollRunning = false;
    window.addEventListener('scroll', () => {
      // 呼び出されるまで何もしない
      if (!scrollRunning) {
        scrollRunning = true;
        // 描画する前のタイミングで呼び出してもらう
        window.requestAnimationFrame(() => {
          // ここでなにか処理をする
          console.log('scrollRunning');
          scrollRunning = false;
        });
      }
    });
  });

  // -------------------------------- //
  // ライブラリ読み込み
  // -------------------------------- //
  // iOSのViewport対応
  const viewportUnitsBuggyfill = require('viewport-units-buggyfill');
  viewportUnitsBuggyfill.init();
})();
