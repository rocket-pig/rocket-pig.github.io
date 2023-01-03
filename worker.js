const allFiles = ['/','./index.html','./js/app.js','./js/eruda.min.js','./js/jquery.js','./lib/onsen/css/font_awesome/css/font-awesome.css','./lib/onsen/css/font_awesome/css/font-awesome.min.css','./lib/onsen/css/font_awesome/css/all.css','./lib/onsen/css/font_awesome/css/all.min.css','./lib/onsen/css/font_awesome/css/brands.css','./lib/onsen/css/font_awesome/css/brands.min.css','./lib/onsen/css/font_awesome/css/fontawesome.css','./lib/onsen/css/font_awesome/css/fontawesome.min.css','./lib/onsen/css/font_awesome/css/regular.css','./lib/onsen/css/font_awesome/css/regular.min.css','./lib/onsen/css/font_awesome/css/solid.css','./lib/onsen/css/font_awesome/css/solid.min.css','./lib/onsen/css/font_awesome/css/svg-with-js.css','./lib/onsen/css/font_awesome/css/svg-with-js.min.css','./lib/onsen/css/font_awesome/css/v4-shims.css','./lib/onsen/css/font_awesome/css/v4-shims.min.css','./lib/onsen/css/font_awesome/fonts/FontAwesome.otf','./lib/onsen/css/font_awesome/fonts/fontawesome-webfont.eot','./lib/onsen/css/font_awesome/fonts/fontawesome-webfont.svg','./lib/onsen/css/font_awesome/fonts/fontawesome-webfont.ttf','./lib/onsen/css/font_awesome/fonts/fontawesome-webfont.woff','./lib/onsen/css/font_awesome/fonts/fontawesome-webfont.woff2','./lib/onsen/css/font_awesome/webfonts/fa-brands-400.eot','./lib/onsen/css/font_awesome/webfonts/fa-regular-400.eot','./lib/onsen/css/font_awesome/webfonts/fa-solid-900.eot','./lib/onsen/css/font_awesome/webfonts/fa-brands-400.svg','./lib/onsen/css/font_awesome/webfonts/fa-regular-400.svg','./lib/onsen/css/font_awesome/webfonts/fa-solid-900.svg','./lib/onsen/css/font_awesome/webfonts/fa-brands-400.ttf','./lib/onsen/css/font_awesome/webfonts/fa-regular-400.ttf','./lib/onsen/css/font_awesome/webfonts/fa-solid-900.ttf','./lib/onsen/css/font_awesome/webfonts/fa-brands-400.woff','./lib/onsen/css/font_awesome/webfonts/fa-regular-400.woff','./lib/onsen/css/font_awesome/webfonts/fa-solid-900.woff','./lib/onsen/css/font_awesome/webfonts/fa-brands-400.woff2','./lib/onsen/css/font_awesome/webfonts/fa-regular-400.woff2','./lib/onsen/css/font_awesome/webfonts/fa-solid-900.woff2','./lib/onsen/css/ionicons/css/ionicons.css','./lib/onsen/css/ionicons/css/ionicons.min.css','./lib/onsen/css/ionicons/css/ionicons-core.css','./lib/onsen/css/ionicons/css/ionicons-core.min.css','./lib/onsen/css/ionicons/fonts/ionicons.eot','./lib/onsen/css/ionicons/fonts/ionicons.svg','./lib/onsen/css/ionicons/fonts/ionicons.ttf','./lib/onsen/css/ionicons/fonts/ionicons.woff','./lib/onsen/css/ionicons/fonts/ionicons.woff2','./lib/onsen/css/material-design-iconic-font/css/material-design-iconic-font.css','./lib/onsen/css/material-design-iconic-font/css/material-design-iconic-font.min.css','./lib/onsen/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.eot','./lib/onsen/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.svg','./lib/onsen/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.ttf','./lib/onsen/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff','./lib/onsen/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff2','./lib/onsen/css/onsen-css-components.css','./lib/onsen/css/onsen-css-components.min.css','./lib/onsen/css/onsenui.css','./lib/onsen/css/onsenui.min.css','./lib/onsen/css/override.css','./lib/onsen/css/css-components-src/components/action-sheet.css','./lib/onsen/css/css-components-src/components/alert-dialog.css','./lib/onsen/css/css-components-src/components/button-bar.css','./lib/onsen/css/css-components-src/components/button.css','./lib/onsen/css/css-components-src/components/card.css','./lib/onsen/css/css-components-src/components/checkbox.css','./lib/onsen/css/css-components-src/components/combination.css','./lib/onsen/css/css-components-src/components/dialog.css','./lib/onsen/css/css-components-src/components/fab.css','./lib/onsen/css/css-components-src/components/global.css','./lib/onsen/css/css-components-src/components/index.css','./lib/onsen/css/css-components-src/components/list.css','./lib/onsen/css/css-components-src/components/modal.css','./lib/onsen/css/css-components-src/components/notification.css','./lib/onsen/css/css-components-src/components/page.css','./lib/onsen/css/css-components-src/components/popover.css','./lib/onsen/css/css-components-src/components/progress-bar.css','./lib/onsen/css/css-components-src/components/progress-circular.css','./lib/onsen/css/css-components-src/components/radio-button.css','./lib/onsen/css/css-components-src/components/range.css','./lib/onsen/css/css-components-src/components/search-input.css','./lib/onsen/css/css-components-src/components/segment.css','./lib/onsen/css/css-components-src/components/select.css','./lib/onsen/css/css-components-src/components/switch.css','./lib/onsen/css/css-components-src/components/tabbar.css','./lib/onsen/css/css-components-src/components/text-input.css','./lib/onsen/css/css-components-src/components/textarea.css','./lib/onsen/css/css-components-src/components/toast.css','./lib/onsen/css/css-components-src/components/toolbar-button.css','./lib/onsen/css/css-components-src/components/toolbar.css','./lib/onsen/css/css-components-src/iphonex-support/action-sheet.css','./lib/onsen/css/css-components-src/iphonex-support/combination.css','./lib/onsen/css/css-components-src/iphonex-support/fab.css','./lib/onsen/css/css-components-src/iphonex-support/global.css','./lib/onsen/css/css-components-src/iphonex-support/index.css','./lib/onsen/css/css-components-src/iphonex-support/page.css','./lib/onsen/css/css-components-src/iphonex-support/tabbar.css','./lib/onsen/css/css-components-src/iphonex-support/toast.css','./lib/onsen/css/css-components-src/iphonex-support/toolbar.css','./lib/onsen/css/css-components-src/dark-onsen-css-components.css','./lib/onsen/css/css-components-src/dark-theme.css','./lib/onsen/css/css-components-src/license.css','./lib/onsen/css/css-components-src/old-onsen-css-components.css','./lib/onsen/css/css-components-src/old-theme.css','./lib/onsen/css/css-components-src/onsen-css-components.css','./lib/onsen/css/css-components-src/theme.css','./lib/onsen/css/css-components-src/img/android-search-input-icon.svg','./lib/onsen/css/css-components-src/img/ios-search-input-icon.svg','./lib/onsen/css/css-components-src/img/select-arrow.svg','./lib/onsen/css/dark-onsen-css-components.css','./lib/onsen/css/dark-onsen-css-components.min.css','./lib/onsen/css/onsenui-core.css','./lib/onsen/css/onsenui-core.min.css','./lib/onsen/css/onsenui-fonts.css','./lib/onsen/js/onsenui.js','./lib/onsen/js/onsenui.min.js','./lib/onsen/LICENSE','./lib/onsen/esm/ons/action-sheet.js','./lib/onsen/esm/ons/animation-options-parser.js','./lib/onsen/esm/ons/internal/animator-factory.js','./lib/onsen/esm/ons/internal/device-back-button-dispatcher.js','./lib/onsen/esm/ons/internal/index.js','./lib/onsen/esm/ons/internal/internal.js','./lib/onsen/esm/ons/internal/lazy-repeat.js','./lib/onsen/esm/ons/internal/modifier-util.js','./lib/onsen/esm/ons/internal/swipe-reveal.js','./lib/onsen/esm/ons/internal/swiper.js','./lib/onsen/esm/ons/internal/toast-queue.js','./lib/onsen/esm/ons/animit.js','./lib/onsen/esm/ons/autostyle.js','./lib/onsen/esm/ons/base-animator.js','./lib/onsen/esm/ons/content-ready.js','./lib/onsen/esm/ons/doorlock.js','./lib/onsen/esm/ons/elements.js','./lib/onsen/esm/ons/gesture-detector.js','./lib/onsen/esm/ons/index.js','./lib/onsen/esm/ons/iphonex-patch.js','./lib/onsen/esm/ons/microevent.js','./lib/onsen/esm/ons/modifier.js','./lib/onsen/esm/ons/notification.js','./lib/onsen/esm/ons/orientation.js','./lib/onsen/esm/ons/page-attribute-expression.js','./lib/onsen/esm/ons/page-loader.js','./lib/onsen/esm/ons/platform.js','./lib/onsen/esm/ons/software-keyboard.js','./lib/onsen/esm/ons/styler.js','./lib/onsen/esm/ons/util.js','./lib/onsen/esm/elements/ons-ripple/animator-css.js','./lib/onsen/esm/elements/ons-ripple/animator-js.js','./lib/onsen/esm/elements/ons-action-sheet/animator.js','./lib/onsen/esm/elements/ons-alert-dialog/animator.js','./lib/onsen/esm/elements/ons-dialog/animator.js','./lib/onsen/esm/elements/ons-list-item/animator.js','./lib/onsen/esm/elements/ons-modal/animator.js','./lib/onsen/esm/elements/ons-modal/fade-animator.js','./lib/onsen/esm/elements/ons-modal/lift-animator.js','./lib/onsen/esm/elements/ons-navigator/animator.js','./lib/onsen/esm/elements/ons-navigator/ios-fade-animator.js','./lib/onsen/esm/elements/ons-navigator/ios-lift-animator.js','./lib/onsen/esm/elements/ons-navigator/ios-slide-animator.js','./lib/onsen/esm/elements/ons-navigator/ios-swipe-animator.js','./lib/onsen/esm/elements/ons-navigator/md-fade-animator.js','./lib/onsen/esm/elements/ons-navigator/md-lift-animator.js','./lib/onsen/esm/elements/ons-navigator/md-slide-animator.js','./lib/onsen/esm/elements/ons-navigator/none-animator.js','./lib/onsen/esm/elements/ons-popover/animator.js','./lib/onsen/esm/elements/ons-splitter/animator.js','./lib/onsen/esm/elements/ons-splitter/overlay-animator.js','./lib/onsen/esm/elements/ons-splitter/push-animator.js','./lib/onsen/esm/elements/ons-splitter/reveal-animator.js','./lib/onsen/esm/elements/ons-toast/animator.js','./lib/onsen/esm/elements/ons-toast/ascend-animator.js','./lib/onsen/esm/elements/ons-toast/fade-animator.js','./lib/onsen/esm/elements/ons-toast/fall-animator.js','./lib/onsen/esm/elements/ons-toast/lift-animator.js','./lib/onsen/esm/elements/base/base-button.js','./lib/onsen/esm/elements/base/base-checkbox.js','./lib/onsen/esm/elements/base/base-dialog.js','./lib/onsen/esm/elements/base/base-element.js','./lib/onsen/esm/elements/base/base-input.js','./lib/onsen/esm/elements/ons-action-sheet-button.js','./lib/onsen/esm/elements/ons-action-sheet.js','./lib/onsen/esm/elements/ons-alert-dialog-button.js','./lib/onsen/esm/elements/ons-alert-dialog.js','./lib/onsen/esm/elements/ons-back-button.js','./lib/onsen/esm/elements/ons-bottom-toolbar.js','./lib/onsen/esm/elements/ons-button.js','./lib/onsen/esm/elements/ons-card.js','./lib/onsen/esm/elements/ons-carousel-item.js','./lib/onsen/esm/elements/ons-carousel.js','./lib/onsen/esm/elements/ons-checkbox.js','./lib/onsen/esm/elements/ons-col.js','./lib/onsen/esm/elements/ons-dialog.js','./lib/onsen/esm/elements/ons-fab.js','./lib/onsen/esm/elements/ons-gesture-detector.js','./lib/onsen/esm/elements/ons-icon.js','./lib/onsen/esm/elements/ons-if.js','./lib/onsen/esm/elements/ons-input.js','./lib/onsen/esm/elements/ons-lazy-repeat.js','./lib/onsen/esm/elements/ons-list-header.js','./lib/onsen/esm/elements/ons-list-item.js','./lib/onsen/esm/elements/ons-list-title.js','./lib/onsen/esm/elements/ons-list.js','./lib/onsen/esm/elements/ons-modal.js','./lib/onsen/esm/elements/ons-navigator.js','./lib/onsen/esm/elements/ons-page.js','./lib/onsen/esm/elements/ons-popover.js','./lib/onsen/esm/elements/ons-progress-bar.js','./lib/onsen/esm/elements/ons-progress-circular.js','./lib/onsen/esm/elements/ons-pull-hook.js','./lib/onsen/esm/elements/ons-radio.js','./lib/onsen/esm/elements/ons-range.js','./lib/onsen/esm/elements/ons-ripple.js','./lib/onsen/esm/elements/ons-row.js','./lib/onsen/esm/elements/ons-search-input.js','./lib/onsen/esm/elements/ons-segment.js','./lib/onsen/esm/elements/ons-select.js','./lib/onsen/esm/elements/ons-speed-dial-item.js','./lib/onsen/esm/elements/ons-speed-dial.js','./lib/onsen/esm/elements/ons-splitter-content.js','./lib/onsen/esm/elements/ons-splitter-mask.js','./lib/onsen/esm/elements/ons-splitter-side.js','./lib/onsen/esm/elements/ons-splitter.js','./lib/onsen/esm/elements/ons-switch.js','./lib/onsen/esm/elements/ons-tab.js','./lib/onsen/esm/elements/ons-tabbar.js','./lib/onsen/esm/elements/ons-toast.js','./lib/onsen/esm/elements/ons-toolbar-button.js','./lib/onsen/esm/elements/ons-toolbar.js','./lib/onsen/esm/polyfills/custom-elements/custom-elements.min.js','./lib/onsen/esm/polyfills/custom-elements/custom-elements.min.js.map','./lib/onsen/esm/polyfills/index.js','./lib/onsen/esm/polyfills/MutationObserver@0.7.22/MutationObserver.js','./lib/onsen/esm/polyfills/polyfill-switches.js','./lib/onsen/esm/polyfills/setImmediate@1.0.2+mod/setImmediate.js','./lib/onsen/esm/index.js','./lib/onsen/esm/vendor/index.js','./lib/onsen/esm/vendor/viewport.js','./lib/onsen/esm/setup.js','./lib/onsen/esm/onsenui.d.ts','./lib/trystero/torrent.js','./lib/trystero/room.js','./lib/trystero/utils.js','./lib/trystero/crypto.js','./lib/trystero/firebase.d.ts','./lib/trystero/firebase.js','./lib/trystero/index.d.ts','./lib/trystero/index.js','./lib/trystero/ipfs.js','./lib/trystero/torrent.d.ts','./lib/common/crypto.js','./lib/simplepeer.min.js','./lib/image-blob-reduce.min.js','./lib/pica.min.js','./lib/image-blob-reduce.js','./manifest.json','./worker.js','./startworker.js']
CACHE_NAME = "V1"
//change
self.addEventListener("install", event => {
    console.log('inside install event.')
      self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>     cache.addAll(allFiles))
  );

  console.log("Service Worker installing.");
});

self.addEventListener("activate", event => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", event => {
  // Cache-First Strategy
  event.respondWith(
    caches
      .match(event.request) // check if the request has already been cached
      .then(cached => cached || fetch(event.request)) // otherwise request network
      .then(
        response =>
          cache(event.request, response) // put response in cache
            .then(() => response) // resolve promise with the network response
      )
  );
});

