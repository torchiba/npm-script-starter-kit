(() => {
  console.log('Hello TypeScript');
  // -------------------------------- //
  // 360px未満のデバイスの場合、デバイス幅を360pxに
  // -------------------------------- //
  const switchViewport = () => {
    // console.log(`$viewpor: ${typeof $viewpor}`);
    const $viewport: HTMLElement | null = document.querySelector(
        'meta[name="viewport"]',
    );
    const WIDTH_XS: Number = 375;

    if ($viewport) {
      const value: string =
        window.innerWidth > WIDTH_XS ?
          'width=device-width,initial-scale=1' :
          'width=375';
      console.log('value', value);
      if ($viewport.getAttribute('content') !== value) {
        $viewport.setAttribute('content', value);
      }
    }
    // console.log($viewport);
  };
  switchViewport();
  // -------------------------------- //
  // リサイズ・スクロールごとの処理
  // -------------------------------- //
  window.addEventListener('load', () => {
    // ---------------- resizeRunning ---------------- //
    let resizeRunning: Boolean = false;
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
    let scrollRunning: Boolean = false;
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
