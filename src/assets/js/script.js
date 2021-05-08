(() => {
  let resizeRunning;
  let scrollRunning;
  // -------------------------------- //
  // リサイズ・スクロールごとの処理
  // -------------------------------- //
  // リサイズするたびに処理走らせる
  resizeRunning = false;
  window.addEventListener('resize', function() {
    // 呼び出されるまで何もしない
    if (!resizeRunning) {
      isRunning = true;
      // 描画する前のタイミングで呼び出してもらう
      window.requestAnimationFrame(function() {
        // ここでなにか処理をする
        console.log('resizeRunning');
        resizeRunning = false;
      });
    }
  });

  // スクロールするたびに処理走らせる
  scrollRunning = false;
  window.addEventListener('scroll', function() {
    // 呼び出されるまで何もしない
    if (!scrollRunning) {
      scrollRunning = true;
      // 描画する前のタイミングで呼び出してもらう
      window.requestAnimationFrame(function() {
        // ここでなにか処理をする
        console.log('scrollRunning');
        scrollRunning = false;
      });
    }
  });
  // -------------------------------- //
  // ライブラリ読み込み
  // -------------------------------- //
  // iOSのViewport対応
  const viewportUnitsBuggyfill = require('viewport-units-buggyfill');
  viewportUnitsBuggyfill.init();
})();
