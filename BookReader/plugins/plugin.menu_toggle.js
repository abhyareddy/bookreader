(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[777],{3504:function(e,n,o){"use strict";o(9600);var t=o(3609),i=o(3609);!function(){t.extend(BookReader.defaultOptions,{enableMenuToggle:!0});var e=!1;function n(e){e.refs&&e.refs.$BRnav&&e.refs.$BRnav.children(".BRnavCntl").css("display","none")}var o,r,a=!1,s=function(n,o,t){if(!e){var r,s,c=(r=document.querySelector(".BRcontainer")).scrollWidth>r.offsetWidth?n.refs.$brContainer[0]:o.currentTarget,d=n.constMode1up===n.mode||function(e,n){var o=e.clientX,t=n.offsetWidth,i=n.offsetLeft,r=Math.round(t/3),a=Math.round(r+i),s=Math.round(t-r+i);return o>a&&o<s}(o,c);(t?d:(s=o.target,i(s).hasClass("BookReader")||i(s).hasClass("BRcontainer")||i(s).hasClass("BRemptypage")||i(s).hasClass("BRpageview")||i(s).hasClass("BRtwopageview")))&&(function(e){a||(a=!0,i(document).on("BookReader:navToggled",(function e(){a=!1,window.removeEventListener("BookReader:navToggled",e)})),e.navigationIsVisible()?e.hideNavigation():e.showNavigation())}(n),t&&o.stopPropagation())}};function c(e,n){s(e,n)}function d(e,n){s(e,n,!0)}function u(n){var t=document.querySelector(".BookReader");if(t){t.addEventListener("click",c.bind(null,n),{capture:!0,passive:!0});var i=(document.querySelector(".BRcontainer")||{}).firstChild;i&&(i.addEventListener("click",d.bind(null,n),!0),function(){var n=document.querySelector(".BookReader");n&&(n.addEventListener("mousedown",(function(n){o=n.screenX,r=n.screenY,e=!0}),!0),n.addEventListener("mouseup",(function(n){Math.abs(o-n.screenX)>5||Math.abs(r-n.screenY)>5||(e=!1,o=0,r=0)}),!0))}())}}var f,l=function(e){var o=!1;try{o=e.navigationIsVisible()}catch(e){o=!1}if(o){var t=function(n){u(e)},r=function(o){!function(e){n(e),u(e)}(e)};i(document).on(["BookReader:3PageViewSelected"].join(" "),(function(o){!function(e){n(e),function(e){e.refs.$brPageViewEl&&e.refs.$brPageViewEl[0].removeEventListener("click",d,!0),e.refs.$brTwoPageView&&e.refs.$brTwoPageView[0].removeEventListener("click",d,!0)}(e),e.showNavigation()}(e)})),i(document).on(["BookReader:1PageViewSelected","BookReader:2PageViewSelected","BookReader:zoomIn","BookReader:zoomOut","BookReader:resize"].join(" "),t),i(window).on("orientationchange",t),i(document).on("BookReader:fullscreenToggled",r),i(window).on("DOMContentLoaded",r),r()}};BookReader.prototype.setup=(f=BookReader.prototype.setup,function(e){f.call(this,e)}),BookReader.prototype.init=function(e){return function(){e.call(this),this.options.enableMenuToggle&&l(this)}}(BookReader.prototype.init)}()}},function(e){"use strict";e(e.s=3504)}]);
//# sourceMappingURL=plugin.menu_toggle.js.map