"use strict";export default class Core_Utils{constructor(){}setCookie(e,t,o){let r;if(o){let e=new Date;e.setTime(e.getTime()+24*o*60*60*1e3),r="; expires="+e.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}getCookie(e){let t=e+"=",o=decodeURIComponent(document.cookie).split(";");for(let e=0;e<o.length;e++){let r=o[e];for(;" "==r.charAt(0);)r=r.sub(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}deleteCookie(e){this.setCookie(e,"",-1)}isEmpty(e){return Array.isArray(e)?0==e.length:"object"==typeof e?0===Object.entries(e).length&&e.constructor===Object:void 0===e||null==e||""==e}}