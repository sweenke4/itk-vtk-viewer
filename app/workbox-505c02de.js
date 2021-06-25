define("./workbox-505c02de.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.1.5"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class r extends i{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const c=t.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:t,event:e,params:i})}catch(t){o=Promise.reject(t)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){n=t}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),o}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let c;const o=()=>(c||(c=new a,c.addFetchListener(),c.addCacheListener()),c);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return o().registerRoute(a),a}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=t=>[u.prefix,t,u.suffix].filter((t=>t&&t.length>0)).join("-"),f=t=>{(t=>{for(const e of Object.keys(u))t(e)})((e=>{"string"==typeof t[e]&&(u[e]=t[e])}))},w=t=>t||l(u.precache),d=t=>t||l(u.runtime);function p(t){t.then((()=>{}))}const y=new Set;class m{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this.h=null,this.u=t,this.l=e,this.p=s,this.m=n||(()=>this.close())}get db(){return this.h}async open(){if(!this.h)return this.h=await new Promise(((t,e)=>{let s=!1;setTimeout((()=>{s=!0,e(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.l);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.p&&this.p(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.m.bind(this),t(e))}})),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map((t=>t.key))}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([t],"readonly",((a,c)=>{const o=a.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(r?t:t.value),i&&u.length>=i?c(u):t.continue()):c(u)}}))}async transaction(t,e,s){return await this.open(),await new Promise(((n,i)=>{const r=this.h.transaction(t,e);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,(t=>n(t)))}))}async g(t,e,s,...n){return await this.transaction([e],s,((s,i)=>{const r=s.objectStore(e),a=r[t].apply(r,n);a.onsuccess=()=>i(a.result)}))}close(){this.h&&(this.h.close(),this.h=null)}}m.prototype.OPEN_TIMEOUT=2e3;const g={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(g))for(const s of e)s in IDBObjectStore.prototype&&(m.prototype[s]=async function(e,...n){return await this.g(s,e,t,...n)});try{self["workbox:expiration:6.1.5"]&&_()}catch(t){}const R="cache-entries",v=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class q{constructor(t){this.R=t,this.h=new m("workbox-expiration",1,{onupgradeneeded:t=>this.v(t)})}v(t){const e=t.target.result.createObjectStore(R,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise(((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}}))})(this.R)}async setTimestamp(t,e){const s={url:t=v(t),timestamp:e,cacheName:this.R,id:this.q(t)};await this.h.put(R,s)}async getTimestamp(t){return(await this.h.get(R,this.q(t))).timestamp}async expireEntries(t,e){const s=await this.h.transaction(R,"readwrite",((s,n)=>{const i=s.objectStore(R).index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.R&&(t&&n.timestamp<t||e&&a>=e?r.push(s.value):a++),s.continue()}else n(r)}})),n=[];for(const t of s)await this.h.delete(R,t.id),n.push(t.url);return n}q(t){return this.R+"|"+v(t)}}class U{constructor(t,e={}){this.U=!1,this.L=!1,this._=e.maxEntries,this.N=e.maxAgeSeconds,this.C=e.matchOptions,this.R=t,this.D=new q(t)}async expireEntries(){if(this.U)return void(this.L=!0);this.U=!0;const t=this.N?Date.now()-1e3*this.N:0,e=await this.D.expireEntries(t,this._),s=await self.caches.open(this.R);for(const t of e)await s.delete(t,this.C);this.U=!1,this.L&&(this.L=!1,p(this.expireEntries()))}async updateTimestamp(t){await this.D.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.N){return await this.D.getTimestamp(t)<Date.now()-1e3*this.N}return!1}async delete(){this.L=!1,await this.D.expireEntries(1/0)}}try{self["workbox:strategies:6.1.5"]&&_()}catch(t){}const b={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};function L(){return(L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function x(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class N{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}function C(t){return"string"==typeof t?new Request(t):t}class E{constructor(t,e){this.O={},Object.assign(this,e),this.event=e.event,this.T=t,this.k=new N,this.K=[],this.P=[...t.plugins],this.M=new Map;for(const t of this.P)this.M.set(t,{});this.event.waitUntil(this.k.promise)}async fetch(t){const{event:e}=this;let n=C(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){throw new s("plugin-error-request-will-fetch",{thrownError:t})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.T.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=C(t);let s;const{cacheName:n,matchOptions:i}=this.T,r=await this.getCacheKey(e,"read"),a=L({},i,{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,e){const n=C(t);var i;await(i=0,new Promise((t=>setTimeout(t,i))));const r=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const c=await this.W(e);if(!c)return!1;const{cacheName:o,matchOptions:h}=this.T,u=await self.caches.open(o),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(t,e,s,n){const i=x(e.url,s);if(e.url===i)return t.match(e,n);const r=L({},n,{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===x(e.url,s))return t.match(e,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,l?c.clone():c)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of y)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){if(!this.O[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=C(await t({mode:e,request:s,event:this.event,params:this.params}));this.O[e]=s}return this.O[e]}hasCallback(t){for(const e of this.T.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.T.plugins)if("function"==typeof e[t]){const s=this.M.get(e),n=n=>{const i=L({},n,{state:s});return e[t](i)};yield n}}waitUntil(t){return this.K.push(t),t}async doneWaiting(){let t;for(;t=this.K.shift();)await t}destroy(){this.k.resolve()}async W(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class D{constructor(t={}){this.cacheName=d(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new E(this,{event:e,request:s,params:n}),r=this.A(i,s,e);return[r,this.S(r,i,s,e)]}async A(t,e,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(i=await this.j(e,t),!i||"error"===i.type)throw new s("no-response",{url:e.url})}catch(s){for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:e}),i)break;if(!i)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))i=await s({event:n,request:e,response:i});return i}async S(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){r=t}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}function O(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(t){}function T(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class k{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class K{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.F.getCacheKeyForURL(t.url);return s?new Request(s):t},this.F=t}}let P,M;async function W(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=e?e(r):r,c=function(){if(void 0===P){const t=new Response("");if("body"in t)try{new Response(t.body),P=!0}catch(t){P=!1}P=!1}return P}()?i.body:await i.blob();return new Response(c,a)}class A extends D{constructor(t={}){t.cacheName=w(t.cacheName),super(t),this.I=!1!==t.fallbackToNetwork,this.plugins.push(A.copyRedirectedCacheableResponsesPlugin)}async j(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.B(t,e):await this.H(t,e))}async H(t,e){let n;if(!this.I)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await e.fetch(t),n}async B(t,e){this.$();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}$(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==A.copyRedirectedCacheableResponsesPlugin&&(n===A.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(A.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}A.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},A.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await W(t):t};class S{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.G=new Map,this.V=new Map,this.J=new Map,this.T=new A({cacheName:w(t),plugins:[...e,new K({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.T}precache(t){this.addToCacheList(t),this.X||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.X=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=T(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.G.has(i)&&this.G.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.G.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.J.has(t)&&this.J.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.J.set(t,n.integrity)}if(this.G.set(i,t),this.V.set(i,r),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return O(t,(async()=>{const e=new k;this.strategy.plugins.push(e);for(const[e,s]of this.G){const n=this.J.get(s),i=this.V.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return O(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.G.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.G}getCachedURLs(){return[...this.G.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.G.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=L({cacheKey:e},s.params),this.strategy.handle(s))}}const j=()=>(M||(M=new S),M);class F extends i{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}t.ExpirationPlugin=class{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.Y(n),r=this.Z(s);p(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.Z(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.tt=t,this.N=t.maxAgeSeconds,this.et=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),y.add(e))}Z(t){if(t===d())throw new s("expire-custom-caches-only");let e=this.et.get(t);return e||(e=new U(t,this.tt),this.et.set(t,e)),e}Y(t){if(!this.N)return!0;const e=this.st(t);if(null===e)return!0;return e>=Date.now()-1e3*this.N}st(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.et)await self.caches.delete(t),await e.delete();this.et=new Map}},t.StaleWhileRevalidate=class extends D{constructor(t){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(b)}async j(t,e){const n=e.fetchAndCachePut(t).catch((()=>{}));let i,r=await e.cacheMatch(t);if(r);else try{r=await n}catch(t){i=t}if(!r)throw new s("no-response",{url:t.url,error:i});return r}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=w();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.precacheAndRoute=function(t,e){!function(t){j().precache(t)}(t),function(t){const e=j();h(new F(e,t))}(e)},t.registerRoute=h,t.setCacheNameDetails=function(t){f(t)}}));
