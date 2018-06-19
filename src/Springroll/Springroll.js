var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Debugger=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"minLevel",value:function(n){e.initParams(),"number"!=typeof n?(n=n.toUpperCase(),e.isValidLevelName(n)?window[e.paramKey].minLevel=e.LEVEL[n]:window[e.paramKey].minLevel=e.LEVEL.GENERAL):window[e.paramKey].minLevel=n}},{key:"initParams",value:function(){window[e.paramKey]||(window[e.paramKey]={emitEnabled:!1,enabled:!0,minLevel:1})}},{key:"emit",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Debugger";e.initParams(),e.params.emitEnabled&&window.dispatchEvent(new Event(n))}},{key:"meetsLevelRequirement",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GENERAL";return e.initParams(),!!(e.isValidLevelName(n)&&e.LEVEL[n]>=e.params.minLevel)}},{key:"log",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"log";if(e.initParams(),e.isEnabled()){for(var t=arguments.length,i=Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];switch(n.toLowerCase()){case"info":var r;return!!e.meetsLevelRequirement("INFO")&&((r=console).info.apply(r,i),e.emit(),!0);case"debug":var o;return!!e.meetsLevelRequirement("DEBUG")&&((o=console).debug.apply(o,i),e.emit(),!0);case"error":var s;return!!e.meetsLevelRequirement("ERROR")&&((s=console).error.apply(s,i),e.emit(),!0);case"warn":var l;return!!e.meetsLevelRequirement("WARN")&&((l=console).warn.apply(l,i),e.emit(),!0);case"log":case"general":default:var u;return!!e.meetsLevelRequirement("GENERAL")&&((u=console).log.apply(u,i),e.emit(),!0)}}}},{key:"isValidLevelName",value:function(n){return e.initParams(),"GENERAL"==n||"DEBUG"==n||"INFO"==n||"WARN"==n||"ERROR"==n}},{key:"assert",value:function(n){if(e.initParams(),!n)throw"Assert Error: "+n}},{key:"isEnabled",value:function(){return window[e.paramKey].enabled}},{key:"enable",value:function(n){e.initParams(),window[e.paramKey].enabled=n}},{key:"params",get:function(){return e.initParams(),window[e.paramKey]}},{key:"LEVEL",get:function(){return{GENERAL:1,DEBUG:2,INFO:3,WARN:4,ERROR:5}}},{key:"paramKey",get:function(){return"__spring_roll_debugger_params__"}}]),e}(),_createClass$1=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();function _classCallCheck$1(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var ScaleManager=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;_classCallCheck$1(this,e),this.width=1,this.height=1,this.callback=void 0,n instanceof Function&&this.enable(n),this.onResize=this.onResize.bind(this)}return _createClass$1(e,[{key:"onResize",value:function(e){var n=e.target.innerWidth,t=e.target.innerHeight;(1<n||1<t)&&(this.width=n,this.height=t),this.callback({width:n,height:t,scale:{ratio:n/t,x:n/this.width,y:t/this.height}}),this.width=n,this.height=t}},{key:"enable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;e instanceof Function?(this.callback=e,window.addEventListener("resize",this.onResize)):console.warn("Scale Manager was not passed a function")}},{key:"disable",value:function(){window.removeEventListener("resize",this.onResize)}}]),e}(),_createClass$2=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();function _classCallCheck$2(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var SpeechSynth=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.voice,a=void 0===i?0:i,r=t.rate,o=void 0===r?1:r,s=t.pitch,l=void 0===s?0:s,u=t.volume,c=void 0===u?1:u;_classCallCheck$2(this,e),this.speaker=new SpeechSynthesisUtterance,this.voiceOptions=window.speechSynthesis.getVoices(),this.voice=a,this.rate=o,this.pitch=l,this.volume=c,this.queue=[],this.speaker.onend=function(){n.speaking=!1,0<n.queue.length&&n.say(n.queue.shift())}}return _createClass$2(e,[{key:"pause",value:function(){this.speaking=!1,window.speechSynthesis.pause()}},{key:"resume",value:function(){this.speaking=!0,window.speechSynthesis.resume()}},{key:"cancel",value:function(){this.speaking=!1,this.pause(),this.queue.length=0,window.speechSynthesis.cancel()}},{key:"say",value:function(e){this.speaking?this.queue.push(e):(this.speaking=!0,this.speaker.text=e,window.speechSynthesis.speak(this.speaker))}},{key:"rangeLimit",value:function(e,n,t){return isNaN(t)?(console.warn("'"+t+"' is not a valid number!"),e):t>=n?n:e>=t?e:t}},{key:"voice",set:function(e){this.speaker.voice=this.voiceOptions[e]},get:function(){return this.speaker.voice}},{key:"lang",set:function(e){this.speaker.lang=e},get:function(){return this.speaker.lang}},{key:"rate",set:function(e){this.speaker.rate=this.rangeLimit(.1,10,e)},get:function(){return this.speaker.rate}},{key:"pitch",set:function(e){this.speaker.pitch=this.rangeLimit(0,2,e)},get:function(){return this.speaker.pitch}},{key:"volume",set:function(e){this.speaker.volume=this.rangeLimit(0,1,e)},get:function(){return this.speaker.volume}}]),e}(),_createClass$3=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();function _classCallCheck$3(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var ColorFilter=function(){function e(){_classCallCheck$3(this,e),this.element=null,null===document.getElementById("color__filter__svg")&&(document.head.innerHTML+='<svg\n      id="color__filter__svg" xmlns="http://www.w3.org/2000/svg"\n      version="1.1">\n      <defs>\n        <filter id="color__filter__protanopia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.567, 0.433, 0,     0, 0\n                    0.558, 0.442, 0,     0, 0\n                    0,     0.242, 0.758, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__protanomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.817, 0.183, 0,     0, 0\n                    0.333, 0.667, 0,     0, 0\n                    0,     0.125, 0.875, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__deuteranopia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.625, 0.375, 0,   0, 0\n                    0.7,   0.3,   0,   0, 0\n                    0,     0.3,   0.7, 0, 0\n                    0,     0,     0,   1, 0"/>\n        </filter>\n        <filter id="color__filter__deuteranomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.8,   0.2,   0,     0, 0\n                    0.258, 0.742, 0,     0, 0\n                    0,     0.142, 0.858, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__tritanopia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.95, 0.05,  0,     0, 0\n                    0,    0.433, 0.567, 0, 0\n                    0,    0.475, 0.525, 0, 0\n                    0,    0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__tritanomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.967, 0.033, 0,     0, 0\n                    0,     0.733, 0.267, 0, 0\n                    0,     0.183, 0.817, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__achromatopsia">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.299, 0.587, 0.114, 0, 0\n                    0.299, 0.587, 0.114, 0, 0\n                    0.299, 0.587, 0.114, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n        <filter id="color__filter__achromatomaly">\n          <feColorMatrix\n            in="SourceGraphic"\n            type="matrix"\n            values="0.618, 0.320, 0.062, 0, 0\n                    0.163, 0.775, 0.062, 0, 0\n                    0.163, 0.320, 0.516, 0, 0\n                    0,     0,     0,     1, 0"/>\n        </filter>\n      </defs>\n      </svg>\n      ')}return _createClass$3(e,[{key:"applyFilter",value:function(e,n){this.element=e,this.changeFilter(n)}},{key:"changeFilter",value:function(e){null!==this.element&&this.types[e]&&(this.element.style.filter="url(#color__filter__"+e+")")}},{key:"removeFilter",value:function(){this.element.style.filter=null}},{key:"types",get:function(){return{protanopia:"protanopia",protanomaly:"protanomaly",deuteranopia:"deuteranopia",deuteranomaly:"deuteranomaly",tritanopia:"tritanopia",tritanomaly:"tritanomaly",achromatopsia:"achromatopsia",achromatomaly:"achromatomaly"}}}]),e}(),_createClass$4=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();function _classCallCheck$4(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Controller=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck$4(this,e),this.assignButtons(n),window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this))}return _createClass$4(e,[{key:"update",value:function(){for(var e=0,n=this.keys.length;e<n;e++)this.buttons[this.keys[e]].enabled&&this.buttons[this.keys[e]].action()}},{key:"onKeyDown",value:function(e){this.onKey(e,!0)}},{key:"onKeyUp",value:function(e){this.onKey(e,!1)}},{key:"assignButtons",value:function(e){this.keys=Object.keys(e).filter(function(n){return"function"==typeof e[n]}).map(function(e){return e.toLowerCase()}),this.buttons={};for(var n=0,t=this.keys.length;n<t;n++)this.buttons[this.keys[n]]={enabled:!1,action:e[this.keys[n]]}}},{key:"onKey",value:function(e,n){var t=e.key.toLocaleLowerCase();this.keys.includes(t)&&(this.buttons[t].enabled=n)}}]),e}();export{Debugger,ScaleManager,SpeechSynth,ColorFilter,Controller};
//# sourceMappingURL=Springroll.js.map
