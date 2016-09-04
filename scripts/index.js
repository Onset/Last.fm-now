!function(t){"use strict";var e,r,n,o,i,a={".js":[".coffee",".jsx",".es6",".es"],".json":[],".css":[],".html":[]},c="function"==typeof require?require:null;return o=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},i=function(t,e,r){var n,o;if("function"==typeof t[e+r])return e+r;for(n=0;o=a[r][n];++n)if("function"==typeof t[e+o])return e+o;return null},e=function(t,n,a,c,s,u){var l,f,p,h,v,d;for(a=a.split(/[\\/]/),l=a.pop(),"."!==l&&".."!==l||(a.push(l),l="");null!=(f=a.shift());)if(f&&"."!==f&&(".."===f?(t=n.pop(),u=u.slice(0,u.lastIndexOf("/"))):(n.push(t),t=t[f],u+="/"+f),!t))throw o(c);if(l&&"function"!=typeof t[l]&&(d=i(t,l,".js"),d||(d=i(t,l,".json")),d||(d=i(t,l,".css")),d||(d=i(t,l,".html")),d?l=d:2!==s&&"object"==typeof t[l]&&(n.push(t),t=t[l],u+="/"+l,l="")),!l)return 1!==s&&t[":mainpath:"]?e(t,n,t[":mainpath:"],c,1,u):e(t,n,"index",c,2,u);if(v=t[l],!v)throw o(c);return v.hasOwnProperty("module")?v.module.exports:(p={},v.module=h={exports:p,id:u+"/"+l},v.call(p,p,h,r(t,n,u)),h.exports)},n=function(r,n,i,a){var s,u=i,l=i.charAt(0),f=0;if("/"===l){if(u=u.slice(1),r=t["/"],!r){if(c)return c(i);throw o(i)}a="/",n=[]}else if("."!==l){if(s=u.split("/",1)[0],r=t[s],!r){if(c)return c(i);throw o(i)}a=s,n=[],u=u.slice(s.length+1),u||(u=r[":mainpath:"],u?f=1:(u="index",f=2))}return e(r,n,u,i,f,a)},(r=function(t,e,r){return function(o){return n(t,[].concat(e),o,r)}})(t,[],"")}({"Last.fm-now":{src:{scripts:{components:{"checker.es6":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(t,e,r){for(var n=!0;n;){var o=t,i=e,a=r;n=!1,null===o&&(o=Function.prototype);var c=Object.getOwnPropertyDescriptor(o,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;if(void 0===s)return;return s.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;t=u,e=i,r=a,n=!0,c=u=void 0}},c=r("./component"),s=r("query-string"),u=2e3,l=7e3;e.exports=function(t){function e(t,r){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,r),this.username=this.getUsername(),this.$trackWrap=r.trackWrap&&$(r.trackWrap),this.lastTracktimestamp=0,this.lastNowPlayingKey="",this.$statesWrap=r.statesWrap&&$(r.statesWrap),this.activeError=!1,this.notificationsEnabled=this.getNotificationsSetting(),this.run()}return o(e,t),i(e,[{key:"run",value:function(){var t=this;this.username&&this.checkRecentTrack(),this.notificationsEnabled&&"granted"!==Notification.permission&&(this.notificationsEnabled=!1,Notification.requestPermission().then(function(e){"granted"===e&&(t.notificationsEnabled=!0)}))}},{key:"getUsername",value:function(){return s.parse(location.search).u}},{key:"getNotificationsSetting",value:function(){return!s.parse(location.search).disableNotifications}},{key:"getRecentUrl",value:function(){return"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+this.username+"&limit=2&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json"}},{key:"getUserInfoUrl",value:function(){return"https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user="+this.username+"&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json"}},{key:"preloadImage",value:function(t,e){var r=new Image;r.src=t,r.complete?e():r.onload=function(){e()}}},{key:"triggerUpdate",value:function(t){var e=this;t.coverUrl||(t.coverUrl="/images/generic-cover.jpg"),this.preloadImage(t.coverUrl,function(){e.updateTile(t),e.showNotification(t)})}},{key:"updateTile",value:function(t){this.$trackWrap&&this.$trackWrap.trigger("update",t)}},{key:"showNotification",value:function(t){if(this.notificationsEnabled&&document.hidden){var e=new Notification(t.title,{body:"by "+t.artist,icon:t.coverUrl});setTimeout(function(t){return function(){t.close()}}(e),l)}}},{key:"getImageUrl",value:function(t,e){for(var r="",n=t.length-1;n>=0;n--)r&&t[n].size!==e||(r=t[n]["#text"]);return r}},{key:"checkRecentTrack",value:function(){var t=this;$.getJSON(this.getRecentUrl()).done(function(e){if(!(e.recenttracks&&e.recenttracks.track&&e.recenttracks.track.length))return console.error("Bad format. Tracks not found."),void(t.activeLoading||(t.$statesWrap.trigger("setState",["error","Tracks not found"]),t.activeError=!0));var r=e.recenttracks.track[0];if(r.date){if(!(r.date.uts>t.lastTracktimestamp))return;t.lastTracktimestamp=r.date.uts}else{if(r.url===t.lastNowPlayingKey)return;t.lastNowPlayingKey=r.url,t.lastTracktimestamp=e.recenttracks.track[1].date.uts}t.activeError&&(t.activeError=!1,t.$statesWrap.trigger("setState",["error",null])),t.triggerUpdate({title:r.name,artist:r.artist["#text"],album:r.album["#text"],coverUrl:t.getImageUrl(r.image,"extralarge"),link:r.url})}).always(function(){setTimeout(function(){t.checkRecentTrack()},u)})}}]),e}(c)},"component.es6":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=window.jQuery,a=/^(\S+)\s*(.*)$/;e.exports=function(){function t(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];n(this,t),this.el=e,this.$el=i(e),this.data=r,this.attachListeners()}return o(t,[{key:"attachListeners",value:function(){var t=this,e=this,r=this.listeners,n=function(n){var o=n.trim(),i=!1,c=t[r[n]],s=n.match(a);s&&(o=s[1],i=s[2]);var u=function(t,r){c.call(this,t,e,r)};i?t.$el.on(o,i,u):t.$el.on(o,u)};for(var o in r)n(o)}},{key:"detachListeners",value:function(){this.$el.off()}},{key:"destroy",value:function(){this.detachListeners();for(var t in this)this[t]=null}},{key:"child",value:function(t){var e=this.$el.find(t);return e.length?e.eq(0):null}},{key:"listeners",get:function(){return{}}}]),t}()},"shapes.es6":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(t,e,r){for(var n=!0;n;){var o=t,i=e,a=r;n=!1,null===o&&(o=Function.prototype);var c=Object.getOwnPropertyDescriptor(o,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;if(void 0===s)return;return s.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;t=u,e=i,r=a,n=!0,c=u=void 0}},c=r("./component"),s=window.jQuery;e.exports=function(t){function e(t,r){n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,r),this.supportsSVG=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),this.supportsSVG&&this.injectSprite()}return o(e,t),i(e,[{key:"injectSprite",value:function(){var t=this;s.get(this.data.url,function(e,r){"success"==r?s(document.body).prepend(e):t.injectSprite()},"text")}}]),e}(c)},"states.es6":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(t,e,r){for(var n=!0;n;){var o=t,i=e,a=r;n=!1,null===o&&(o=Function.prototype);var c=Object.getOwnPropertyDescriptor(o,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;if(void 0===s)return;return s.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;t=u,e=i,r=a,n=!0,c=u=void 0}},c=r("./component");e.exports=function(t){function e(t,r){var o=this;n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,r),this.$note={loading:this.$el.find(".states-loading .states-note"),error:this.$el.find(".states-error .states-note")},this.countActive={},this.$el.on("setState",function(t,e,r){o.setState(e,r)})}return o(e,t),i(e,[{key:"setState",value:function(t,e){this.countActive[t]||(this.countActive[t]=0),e?(this.countActive[t]++,this.$el.addClass("view-"+t),this.$note[t].text(e)):(this.countActive[t]--,this.countActive[t]<=0&&(this.countActive[t]=0,this.$el.removeClass("view-"+t)))}}]),e}(c)},"track.es6":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(t,e,r){for(var n=!0;n;){var o=t,i=e,a=r;n=!1,null===o&&(o=Function.prototype);var c=Object.getOwnPropertyDescriptor(o,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;if(void 0===s)return;return s.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;t=u,e=i,r=a,n=!0,c=u=void 0}},c=r("./component");e.exports=function(t){function e(t,r){var o=this;n(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,r),this.$lastTrack=null,this.$trackTemplate=this.$el.find(".track"),this.$trackTemplate.detach(),this.$el.on("update",function(t,e){o.update(e)})}return o(e,t),i(e,[{key:"update",value:function(t){var e=this.$trackTemplate.clone();e.find(".track-title").text(t.title).prop("href",t.link),e.find(".track-artist").text(t.artist),e.find(".track-album").text(t.album),e.find(".track-cover").css("background-image",'url("'+t.coverUrl+'")'),e.find(".track-background").css("background-image",'url("'+t.coverUrl+'")'),this.$el.append(e),this.$lastTrack&&(this.$lastTrack.removeClass("is-active"),this.$lastTrack.on("transitionend",function(t){$(t.target).remove()})),this.$lastTrack=e}}]),e}(c)}},"componentsHandler.es6":function(t,e,r){"use strict";e.exports=function(t){var e=[],r=function(r){if(r.name in t){var n=t[r.name],o="string"==typeof r.place?document.querySelector(r.place):r.place,i=new n(o,r.data||{});e.push(i)}};initComponents.map(r),initComponents={push:r}}},"index.es6":function(t,e,r){"use strict";var n=r("./utils/jQueryFallbackProvider"),o=r("./componentsHandler"),i=function(t){r("./plugins"),o({checker:r("./components/checker"),shapes:r("./components/shapes"),states:r("./components/states"),track:r("./components/track")})},a=function(){console.log("jQuery dependency is missing. This page might not work correctly. Please try again later.")};n("/node_modules/jquery/dist/jquery.min.js",i,a)},"plugins.js":function(t,e,r){!function(){for(var t,e=function(){},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=r.length,o=window.console=window.console||{};n--;)t=r[n],o[t]||(o[t]=e)}()},utils:{"inject.es6":function(t,e,r){"use strict";var n=document.head||document.getElementsByTagName("head")[0];e.exports=function(t,e,r){var o=document.createElement("script");if(o.addEventListener("load",e),o.addEventListener("error",r),o.type="text/javascript","string"==typeof t)o.src=t,o.async=!0;else if("object"==typeof t)for(var i in t)if(t.hasOwnProperty(i)){var a=t[i];"content"==i?o.appendChild(document.createTextNode(a)):o[i]=a}n.appendChild(o)}},"jQueryFallbackProvider.es6":function(t,e,r){"use strict";var n=r("./inject");e.exports=function(t,e,r){var o=window.jQuery;return o?void e(o):t?void n(t,function(){e(window.jQuery)},r):void r()}}}}}},"object-assign":{"index.js":function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(t,e){for(var r,o,c=n(t),s=1;s<arguments.length;s++){r=Object(arguments[s]);for(var u in r)i.call(r,u)&&(c[u]=r[u]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(r);for(var l=0;l<o.length;l++)a.call(r,o[l])&&(c[o[l]]=r[o[l]])}}return c}}},"query-string":{"index.js":function(t,e,r){"use strict";function n(t,e){return e.encode?e.strict?o(t):encodeURIComponent(t):t}var o=r("strict-uri-encode"),i=r("object-assign");t.extract=function(t){return t.split("?")[1]||""},t.parse=function(t){var e=Object.create(null);return"string"!=typeof t?e:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=r.shift(),o=r.length>0?r.join("="):void 0;n=decodeURIComponent(n),o=void 0===o?null:decodeURIComponent(o),void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e},t.stringify=function(t,e){var r={encode:!0,strict:!0};return e=i(r,e),t?Object.keys(t).sort().map(function(r){var o=t[r];if(void 0===o)return"";if(null===o)return n(r,e);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(t){void 0!==t&&(null===t?i.push(n(r,e)):i.push(n(r,e)+"="+n(t,e)))}),i.join("&")}return n(r,e)+"="+n(o,e)}).filter(function(t){return t.length>0}).join("&"):""}}},"strict-uri-encode":{"index.js":function(t,e,r){"use strict";e.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}}}})("Last.fm-now/src/scripts/index");