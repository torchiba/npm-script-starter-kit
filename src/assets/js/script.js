(() => {
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
