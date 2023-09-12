"use strict";(self.webpackChunkng_my_page=self.webpackChunkng_my_page||[]).push([[429],{435:(se,Te,ae)=>{ae(583),ae(389)},389:(se,Te,ae)=>{var he,be;void 0!==(be="function"==typeof(he=function(){var Ee=function(){function ie(){this.name="TaskTrackingZone",this.microTasks=[],this.macroTasks=[],this.eventTasks=[],this.properties={TaskTrackingZone:this}}return ie.get=function(){return Zone.current.get("TaskTrackingZone")},ie.prototype.getTasksFor=function(oe){switch(oe){case"microTask":return this.microTasks;case"macroTask":return this.macroTasks;case"eventTask":return this.eventTasks}throw new Error("Unknown task format: "+oe)},ie.prototype.onScheduleTask=function(oe,Pe,Q,F){return F.creationLocation=new Error("Task '".concat(F.type,"' from '").concat(F.source,"'.")),this.getTasksFor(F.type).push(F),oe.scheduleTask(Q,F)},ie.prototype.onCancelTask=function(oe,Pe,Q,F){for(var ne=this.getTasksFor(F.type),le=0;le<ne.length;le++)if(ne[le]==F){ne.splice(le,1);break}return oe.cancelTask(Q,F)},ie.prototype.onInvokeTask=function(oe,Pe,Q,F,ne,le){if("eventTask"===F.type)return oe.invokeTask(Q,F,ne,le);for(var me=this.getTasksFor(F.type),M=0;M<me.length;M++)if(me[M]==F){me.splice(M,1);break}return oe.invokeTask(Q,F,ne,le)},ie.prototype.clearEvents=function(){for(;this.eventTasks.length;)Zone.current.cancelTask(this.eventTasks[0])},ie}();Zone.TaskTrackingZoneSpec=Ee})?he.call(Te,ae,Te,se):he)&&(se.exports=be)},583:()=>{!function(e){const n=e.performance;function i(L){n&&n.mark&&n.mark(L)}function o(L,T){n&&n.measure&&n.measure(L,T)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function a(L){return c+L}const E=!0===e[a("forceDuplicateZoneCheck")];if(e.Zone){if(E||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let d=(()=>{class L{constructor(t,r){this._parent=t,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(e.Promise!==de.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=L.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return fe}static __load_patch(t,r,m=!1){if(de.hasOwnProperty(t)){if(!m&&E)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const C="Zone:"+t;i(C),de[t]=r(e,L,Y),o(C,C)}}get parent(){return this._parent}get name(){return this._name}get(t){const r=this.getZoneWith(t);if(r)return r._properties[t]}getZoneWith(t){let r=this;for(;r;){if(r._properties.hasOwnProperty(t))return r;r=r._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,r){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const m=this._zoneDelegate.intercept(this,t,r),C=this;return function(){return C.runGuarded(m,this,arguments,r)}}run(t,r,m,C){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,r,m,C)}finally{W=W.parent}}runGuarded(t,r=null,m,C){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,r,m,C)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{W=W.parent}}runTask(t,r,m){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===x&&(t.type===te||t.type===P))return;const C=t.state!=y;C&&t._transitionTo(y,j),t.runCount++;const $=fe;fe=t,W={parent:W,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,r,m)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==x&&t.state!==h&&(t.type==te||t.data&&t.data.isPeriodic?C&&t._transitionTo(j,y):(t.runCount=0,this._updateTaskCount(t,-1),C&&t._transitionTo(x,y,x))),W=W.parent,fe=$}}scheduleTask(t){if(t.zone&&t.zone!==this){let m=this;for(;m;){if(m===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);m=m.parent}}t._transitionTo(q,x);const r=[];t._zoneDelegates=r,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(m){throw t._transitionTo(h,q,x),this._zoneDelegate.handleError(this,m),m}return t._zoneDelegates===r&&this._updateTaskCount(t,1),t.state==q&&t._transitionTo(j,q),t}scheduleMicroTask(t,r,m,C){return this.scheduleTask(new p(I,t,r,m,C,void 0))}scheduleMacroTask(t,r,m,C,$){return this.scheduleTask(new p(P,t,r,m,C,$))}scheduleEventTask(t,r,m,C,$){return this.scheduleTask(new p(te,t,r,m,C,$))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");t._transitionTo(B,j,y);try{this._zoneDelegate.cancelTask(this,t)}catch(r){throw t._transitionTo(h,B),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(t,-1),t._transitionTo(x,B),t.runCount=0,t}_updateTaskCount(t,r){const m=t._zoneDelegates;-1==r&&(t._zoneDelegates=null);for(let C=0;C<m.length;C++)m[C]._updateTaskCount(t.type,r)}}return L.__symbol__=a,L})();const b={name:"",onHasTask:(L,T,t,r)=>L.hasTask(t,r),onScheduleTask:(L,T,t,r)=>L.scheduleTask(t,r),onInvokeTask:(L,T,t,r,m,C)=>L.invokeTask(t,r,m,C),onCancelTask:(L,T,t,r)=>L.cancelTask(t,r)};class v{constructor(T,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const m=r&&r.onHasTask;(m||t&&t._hasTaskZS)&&(this._hasTaskZS=m?r:b,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(T,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,t):new d(T,t)}intercept(T,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,t,r):t}invoke(T,t,r,m,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,t,r,m,C):t.apply(r,m)}handleError(T,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,t)}scheduleTask(T,t){let r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,t),r||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=I)throw new Error("Task is missing scheduleFn.");R(t)}return r}invokeTask(T,t,r,m){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,t,r,m):t.callback.apply(r,m)}cancelTask(T,t){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r}hasTask(T,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,t)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,t){const r=this._taskCounts,m=r[T],C=r[T]=m+t;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=m&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class p{constructor(T,t,r,m,C,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=t,this.data=m,this.scheduleFn=C,this.cancelFn=$,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=T===te&&m&&m.useG?p.invokeTask:function(){return p.invokeTask.call(e,l,this,arguments)}}static invokeTask(T,t,r){T||(T=this),re++;try{return T.runCount++,T.zone.runTask(T,t,r)}finally{1==re&&_(),re--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,q)}_transitionTo(T,t,r){if(this._state!==t&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${t}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==x&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const A=a("setTimeout"),S=a("Promise"),N=a("then");let ee,U=[],H=!1;function X(L){if(ee||e[S]&&(ee=e[S].resolve(0)),ee){let T=ee[N];T||(T=ee.then),T.call(ee,L)}else e[A](L,0)}function R(L){0===re&&0===U.length&&X(_),L&&U.push(L)}function _(){if(!H){for(H=!0;U.length;){const L=U;U=[];for(let T=0;T<L.length;T++){const t=L[T];try{t.zone.runTask(t,null,null)}catch(r){Y.onUnhandledError(r)}}}Y.microtaskDrainDone(),H=!1}}const J={name:"NO ZONE"},x="notScheduled",q="scheduling",j="scheduled",y="running",B="canceling",h="unknown",I="microTask",P="macroTask",te="eventTask",de={},Y={symbol:a,currentZoneFrame:()=>W,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:X};let W={parent:null,zone:new d(null,null)},fe=null,re=0;function z(){}o("Zone","Zone"),e.Zone=d}(typeof window<"u"&&window||typeof self<"u"&&self||global);const se=Object.getOwnPropertyDescriptor,Te=Object.defineProperty,ae=Object.getPrototypeOf,he=Object.create,be=Array.prototype.slice,Ee="addEventListener",ie="removeEventListener",oe=Zone.__symbol__(Ee),Pe=Zone.__symbol__(ie),Q="true",F="false",ne=Zone.__symbol__("");function le(e,n){return Zone.current.wrap(e,n)}function me(e,n,i,o,c){return Zone.current.scheduleMacroTask(e,n,i,o,c)}const M=Zone.__symbol__,Se=typeof window<"u",we=Se?window:void 0,K=Se&&we||"object"==typeof self&&self||global,ct="removeAttribute";function Ae(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=le(e[i],n+"_"+i));return e}function Ge(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ve=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ne=!("nw"in K)&&typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process),je=!Ne&&!Ve&&!(!Se||!we.HTMLElement),Ue=typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process)&&!Ve&&!(!Se||!we.HTMLElement),Ie={},We=function(e){if(!(e=e||K.event))return;let n=Ie[e.type];n||(n=Ie[e.type]=M("ON_PROPERTY"+e.type));const i=this||e.target||K,o=i[n];let c;return je&&i===we&&"error"===e.type?(c=o&&o.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===c&&e.preventDefault()):(c=o&&o.apply(this,arguments),null!=c&&!c&&e.preventDefault()),c};function ze(e,n,i){let o=se(e,n);if(!o&&i&&se(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=M("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete o.writable,delete o.value;const a=o.get,E=o.set,d=n.substr(2);let b=Ie[d];b||(b=Ie[d]=M("ON_PROPERTY"+d)),o.set=function(v){let p=this;!p&&e===K&&(p=K),p&&("function"==typeof p[b]&&p.removeEventListener(d,We),E&&E.call(p,null),p[b]=v,"function"==typeof v&&p.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&e===K&&(v=K),!v)return null;const p=v[b];if(p)return p;if(a){let A=a.call(this);if(A)return o.set.call(this,A),"function"==typeof v[ct]&&v.removeAttribute(n),A}return null},Te(e,n,o),e[c]=!0}function Xe(e,n,i){if(n)for(let o=0;o<n.length;o++)ze(e,"on"+n[o],i);else{const o=[];for(const c in e)"on"==c.substr(0,2)&&o.push(c);for(let c=0;c<o.length;c++)ze(e,o[c],i)}}const ue=M("originalInstance");function Ze(e){const n=K[e];if(!n)return;K[M(e)]=n,K[e]=function(){const c=Ae(arguments,e);switch(c.length){case 0:this[ue]=new n;break;case 1:this[ue]=new n(c[0]);break;case 2:this[ue]=new n(c[0],c[1]);break;case 3:this[ue]=new n(c[0],c[1],c[2]);break;case 4:this[ue]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},pe(K[e],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===e&&"responseBlob"===o||function(c){"function"==typeof i[c]?K[e].prototype[c]=function(){return this[ue][c].apply(this[ue],arguments)}:Te(K[e].prototype,c,{set:function(a){"function"==typeof a?(this[ue][c]=le(a,e+"."+c),pe(this[ue][c],a)):this[ue][c]=a},get:function(){return this[ue][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(K[e][o]=n[o])}function ye(e,n,i){let o=e;for(;o&&!o.hasOwnProperty(n);)o=ae(o);!o&&e[n]&&(o=e);const c=M(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Ge(o&&se(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},pe(o[n],a)}return a}function lt(e,n,i){let o=null;function c(a){const E=a.data;return E.args[E.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(E.target,E.args),a}o=ye(e,n,a=>function(E,d){const b=i(E,d);return b.cbIdx>=0&&"function"==typeof d[b.cbIdx]?me(b.name,d[b.cbIdx],b,c):a.apply(E,d)})}function pe(e,n){e[M("OriginalDelegate")]=n}let qe=!1,He=!1;function ft(){if(qe)return He;qe=!0;try{const e=we.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(He=!0)}catch{}return He}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,E=i.symbol,d=[],b=!0===e[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=E("Promise"),p=E("then"),A="__creationTrace__";i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const S=E("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[S];"function"==typeof u&&u.call(this,l)}catch{}}function U(l){return l&&l.then}function H(l){return l}function ee(l){return t.reject(l)}const X=E("state"),R=E("value"),_=E("finally"),J=E("parentPromiseValue"),x=E("parentPromiseState"),q="Promise.then",j=null,y=!0,B=!1,h=0;function I(l,u){return s=>{try{Y(l,u,s)}catch(f){Y(l,!1,f)}}}const P=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},te="Promise resolved with itself",de=E("currentTaskTrace");function Y(l,u,s){const f=P();if(l===s)throw new TypeError(te);if(l[X]===j){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(w){return f(()=>{Y(l,!1,w)})(),l}if(u!==B&&s instanceof t&&s.hasOwnProperty(X)&&s.hasOwnProperty(R)&&s[X]!==j)fe(s),Y(l,s[X],s[R]);else if(u!==B&&"function"==typeof g)try{g.call(s,f(I(l,u)),f(I(l,!1)))}catch(w){f(()=>{Y(l,!1,w)})()}else{l[X]=u;const w=l[R];if(l[R]=s,l[_]===_&&u===y&&(l[X]=l[x],l[R]=l[J]),u===B&&s instanceof Error){const k=n.currentTask&&n.currentTask.data&&n.currentTask.data[A];k&&c(s,de,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<w.length;)re(l,w[k++],w[k++],w[k++],w[k++]);if(0==w.length&&u==B){l[X]=h;let k=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(D){k=D}b&&(k.throwOriginal=!0),k.rejection=s,k.promise=l,k.zone=n.current,k.task=n.currentTask,d.push(k),i.scheduleMicroTask()}}}return l}const W=E("rejectionHandledHandler");function fe(l){if(l[X]===h){try{const u=n[W];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch{}l[X]=B;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function re(l,u,s,f,g){fe(l);const w=l[X],k=w?"function"==typeof f?f:H:"function"==typeof g?g:ee;u.scheduleMicroTask(q,()=>{try{const D=l[R],Z=!!s&&_===s[_];Z&&(s[J]=D,s[x]=w);const O=u.run(k,void 0,Z&&k!==ee&&k!==H?[]:[D]);Y(s,!0,O)}catch(D){Y(s,!1,D)}},s)}const L=function(){},T=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return Y(new this(null),y,u)}static reject(u){return Y(new this(null),B,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let k of u)f++,s.push(t.resolve(k))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const w=[];return new t((k,D)=>{for(let Z=0;Z<s.length;Z++)s[Z].then(O=>{g||(g=!0,k(O))},O=>{w.push(O),f--,0===f&&(g=!0,D(new T(w,"All promises were rejected")))})})}static race(u){let s,f,g=new this((D,Z)=>{s=D,f=Z});function w(D){s(D)}function k(D){f(D)}for(let D of u)U(D)||(D=this.resolve(D)),D.then(w,k);return g}static all(u){return t.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,w=new this((O,G)=>{f=O,g=G}),k=2,D=0;const Z=[];for(let O of u){U(O)||(O=this.resolve(O));const G=D;try{O.then(V=>{Z[G]=s?s.thenCallback(V):V,k--,0===k&&f(Z)},V=>{s?(Z[G]=s.errorCallback(V),k--,0===k&&f(Z)):g(V)})}catch(V){g(V)}k++,D++}return k-=2,0===k&&f(Z),w}constructor(u){const s=this;if(!(s instanceof t))throw new Error("Must be an instanceof Promise.");s[X]=j,s[R]=[];try{u&&u(I(s,y),I(s,B))}catch(f){Y(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(u,s){let f=this.constructor[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||t);const g=new f(L),w=n.current;return this[X]==j?this[R].push(w,g,u,s):re(this,w,g,u,s),g}catch(u){return this.then(null,u)}finally(u){let s=this.constructor[Symbol.species];(!s||"function"!=typeof s)&&(s=t);const f=new s(L);f[_]=_;const g=n.current;return this[X]==j?this[R].push(g,f,u,u):re(this,g,f,u,u),f}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const r=e[v]=e.Promise;e.Promise=t;const m=E("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[p]=f,l.prototype.then=function(g,w){return new t((D,Z)=>{f.call(this,D,Z)}).then(g,w)},l[m]=!0}return i.patchThen=C,r&&(C(r),ye(e,"fetch",l=>function $(l){return function(u,s){let f=l.apply(u,s);if(f instanceof t)return f;let g=f.constructor;return g[m]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=M("OriginalDelegate"),o=M("Promise"),c=M("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const p=e[o];if(p)return n.call(p)}if(this===Error){const p=e[c];if(p)return n.call(p)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}});let Re=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Re=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Re=!1}const ht={useG:!0},ce={},Ye={},Ke=new RegExp("^"+ne+"(\\w+)(true|false)$"),$e=M("propagationStopped");function Je(e,n){const i=(n?n(e):e)+F,o=(n?n(e):e)+Q,c=ne+i,a=ne+o;ce[e]={},ce[e][F]=c,ce[e][Q]=a}function dt(e,n,i,o){const c=o&&o.add||Ee,a=o&&o.rm||ie,E=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",b=M(c),v="."+c+":",p="prependListener",A="."+p+":",S=function(R,_,J){if(R.isRemoved)return;const x=R.callback;let q;"object"==typeof x&&x.handleEvent&&(R.callback=y=>x.handleEvent(y),R.originalDelegate=x);try{R.invoke(R,_,[J])}catch(y){q=y}const j=R.options;return j&&"object"==typeof j&&j.once&&_[a].call(_,J.type,R.originalDelegate?R.originalDelegate:R.callback,j),q};function N(R,_,J){if(!(_=_||e.event))return;const x=R||_.target||e,q=x[ce[_.type][J?Q:F]];if(q){const j=[];if(1===q.length){const y=S(q[0],x,_);y&&j.push(y)}else{const y=q.slice();for(let B=0;B<y.length&&(!_||!0!==_[$e]);B++){const h=S(y[B],x,_);h&&j.push(h)}}if(1===j.length)throw j[0];for(let y=0;y<j.length;y++){const B=j[y];n.nativeScheduleMicroTask(()=>{throw B})}}}const U=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function ee(R,_){if(!R)return!1;let J=!0;_&&void 0!==_.useG&&(J=_.useG);const x=_&&_.vh;let q=!0;_&&void 0!==_.chkDup&&(q=_.chkDup);let j=!1;_&&void 0!==_.rt&&(j=_.rt);let y=R;for(;y&&!y.hasOwnProperty(c);)y=ae(y);if(!y&&R[c]&&(y=R),!y||y[b])return!1;const B=_&&_.eventNameToString,h={},I=y[b]=y[c],P=y[M(a)]=y[a],te=y[M(E)]=y[E],de=y[M(d)]=y[d];let Y;_&&_.prepend&&(Y=y[M(_.prepend)]=y[_.prepend]);const t=J?function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?H:U,h.options)}:function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},r=J?function(s){if(!s.isRemoved){const f=ce[s.eventName];let g;f&&(g=f[s.capture?Q:F]);const w=g&&s.target[g];if(w)for(let k=0;k<w.length;k++)if(w[k]===s){w.splice(k,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?H:U,s.options)}:function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},$=Zone[M("UNPATCHED_EVENTS")],l=e[M("PASSIVE_EVENTS")],u=function(s,f,g,w,k=!1,D=!1){return function(){const Z=this||e;let O=arguments[0];_&&_.transferEventName&&(O=_.transferEventName(O));let G=arguments[1];if(!G)return s.apply(this,arguments);if(Ne&&"uncaughtException"===O)return s.apply(this,arguments);let V=!1;if("function"!=typeof G){if(!G.handleEvent)return s.apply(this,arguments);V=!0}if(x&&!x(s,G,Z,arguments))return;const ke=Re&&!!l&&-1!==l.indexOf(O),_e=function W(s,f){return!Re&&"object"==typeof s&&s?!!s.capture:Re&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}(arguments[2],ke);if($)for(let ve=0;ve<$.length;ve++)if(O===$[ve])return ke?s.call(Z,O,G,_e):s.apply(this,arguments);const Fe=!!_e&&("boolean"==typeof _e||_e.capture),nt=!(!_e||"object"!=typeof _e)&&_e.once,gt=Zone.current;let Be=ce[O];Be||(Je(O,B),Be=ce[O]);const rt=Be[Fe?Q:F];let Le,De=Z[rt],ot=!1;if(De){if(ot=!0,q)for(let ve=0;ve<De.length;ve++)if(C(De[ve],G))return}else De=Z[rt]=[];const st=Z.constructor.name,it=Ye[st];it&&(Le=it[O]),Le||(Le=st+f+(B?B(O):O)),h.options=_e,nt&&(h.options.once=!1),h.target=Z,h.capture=Fe,h.eventName=O,h.isExisting=ot;const Oe=J?ht:void 0;Oe&&(Oe.taskData=h);const ge=gt.scheduleEventTask(Le,G,Oe,g,w);return h.target=null,Oe&&(Oe.taskData=null),nt&&(_e.once=!0),!Re&&"boolean"==typeof ge.options||(ge.options=_e),ge.target=Z,ge.capture=Fe,ge.eventName=O,V&&(ge.originalDelegate=G),D?De.unshift(ge):De.push(ge),k?Z:void 0}};return y[c]=u(I,v,t,r,j),Y&&(y[p]=u(Y,A,function(s){return Y.call(h.target,h.eventName,s.invoke,h.options)},r,j,!0)),y[a]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],w=!!g&&("boolean"==typeof g||g.capture),k=arguments[1];if(!k)return P.apply(this,arguments);if(x&&!x(P,k,s,arguments))return;const D=ce[f];let Z;D&&(Z=D[w?Q:F]);const O=Z&&s[Z];if(O)for(let G=0;G<O.length;G++){const V=O[G];if(C(V,k))return O.splice(G,1),V.isRemoved=!0,0===O.length&&(V.allRemoved=!0,s[Z]=null,"string"==typeof f)&&(s[ne+"ON_PROPERTY"+f]=null),V.zone.cancelTask(V),j?s:void 0}return P.apply(this,arguments)},y[E]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],w=Qe(s,B?B(f):f);for(let k=0;k<w.length;k++){const D=w[k];g.push(D.originalDelegate?D.originalDelegate:D.callback)}return g},y[d]=function(){const s=this||e;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ce[f];if(g){const D=s[g[F]],Z=s[g[Q]];if(D){const O=D.slice();for(let G=0;G<O.length;G++){const V=O[G];this[a].call(this,f,V.originalDelegate?V.originalDelegate:V.callback,V.options)}}if(Z){const O=Z.slice();for(let G=0;G<O.length;G++){const V=O[G];this[a].call(this,f,V.originalDelegate?V.originalDelegate:V.callback,V.options)}}}}else{const g=Object.keys(s);for(let w=0;w<g.length;w++){const D=Ke.exec(g[w]);let Z=D&&D[1];Z&&"removeListener"!==Z&&this[d].call(this,Z)}this[d].call(this,"removeListener")}if(j)return this},pe(y[c],I),pe(y[a],P),de&&pe(y[d],de),te&&pe(y[E],te),!0}let X=[];for(let R=0;R<i.length;R++)X[R]=ee(i[R],o);return X}function Qe(e,n){if(!n){const a=[];for(let E in e){const d=Ke.exec(E);let b=d&&d[1];if(b&&(!n||b===n)){const v=e[E];if(v)for(let p=0;p<v.length;p++)a.push(v[p])}}return a}let i=ce[n];i||(Je(n),i=ce[n]);const o=e[i[F]],c=e[i[Q]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[$e]=!0,o&&o.apply(c,a)})}function Tt(e,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const E=n[a]=n[o];n[o]=function(d,b,v){return b&&b.prototype&&c.forEach(function(p){const A=`${i}.${o}::`+p,S=b.prototype;if(S.hasOwnProperty(p)){const N=e.ObjectGetOwnPropertyDescriptor(S,p);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,A),e._redefineProperty(b.prototype,p,N)):S[p]&&(S[p]=e.wrapWithCurrentZone(S[p],A))}else S[p]&&(S[p]=e.wrapWithCurrentZone(S[p],A))}),E.call(n,d,b,v)},e.attachOriginToPatched(n[o],E)}function et(e,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===e);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(e,n,i,o){e&&Xe(e,et(e,n,i),o)}function xe(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,i)=>{const o=xe(e);i.patchOnProperties=Xe,i.patchMethod=ye,i.bindArguments=Ae,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");e[a]&&(e[c]=e[a]),e[c]&&(n[c]=n[a]=e[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=Te,i.ObjectGetOwnPropertyDescriptor=se,i.ObjectCreate=he,i.ArraySlice=be,i.patchClass=Ze,i.wrapWithCurrentZone=le,i.filterProperties=et,i.attachOriginToPatched=pe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Tt,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ce,eventNames:o,isBrowser:je,isMix:Ue,isNode:Ne,TRUE_STR:Q,FALSE_STR:F,ZONE_SYMBOL_PREFIX:ne,ADD_EVENT_LISTENER_STR:Ee,REMOVE_EVENT_LISTENER_STR:ie})});const Me=M("zoneTask");function Ce(e,n,i,o){let c=null,a=null;i+=o;const E={};function d(v){const p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=c.apply(e,p.args),v}function b(v){return a.call(e,v.data.handleId)}c=ye(e,n+=o,v=>function(p,A){if("function"==typeof A[0]){const S={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?A[1]||0:void 0,args:A},N=A[0];A[0]=function(){try{return N.apply(this,arguments)}finally{S.isPeriodic||("number"==typeof S.handleId?delete E[S.handleId]:S.handleId&&(S.handleId[Me]=null))}};const U=me(n,A[0],S,d,b);if(!U)return U;const H=U.data.handleId;return"number"==typeof H?E[H]=U:H&&(H[Me]=U),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(U.ref=H.ref.bind(H),U.unref=H.unref.bind(H)),"number"==typeof H||H?H:U}return v.apply(e,A)}),a=ye(e,i,v=>function(p,A){const S=A[0];let N;"number"==typeof S?N=E[S]:(N=S&&S[Me],N||(N=S)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof S?delete E[S]:S&&(S[Me]=null),N.zone.cancelTask(N)):v.apply(e,A)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";Ce(e,n,i,"Timeout"),Ce(e,n,i,"Interval"),Ce(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{Ce(e,"request","cancel","AnimationFrame"),Ce(e,"mozRequest","mozCancel","AnimationFrame"),Ce(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)ye(e,i[o],(a,E,d)=>function(b,v){return n.current.run(a,e,v,d)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function kt(e,n){n.patchEventPrototype(e,n)})(e,i),function pt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:E}=n.getGlobalObjects();for(let b=0;b<i.length;b++){const v=i[b],S=E+(v+a),N=E+(v+c);o[v]={},o[v][a]=S,o[v][c]=N}const d=e.EventTarget;d&&d.prototype&&n.patchEventTarget(e,n,[d&&d.prototype])}(e,i);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{Ze("MutationObserver"),Ze("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{Ze("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{Ze("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function Et(e,n){if(Ne&&!Ue||Zone[e.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(je){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const e=we.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,xe(c),i&&i.concat(a),ae(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,xe(a.prototype),i)}}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function yt(e,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function b(v){const p=v.XMLHttpRequest;if(!p)return;const A=p.prototype;let N=A[oe],U=A[Pe];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const I=h.prototype;N=I[oe],U=I[Pe]}}const H="readystatechange",ee="scheduled";function X(h){const I=h.data,P=I.target;P[a]=!1,P[d]=!1;const te=P[c];N||(N=P[oe],U=P[Pe]),te&&U.call(P,H,te);const de=P[c]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[a]&&h.state===ee){const W=P[n.__symbol__("loadfalse")];if(0!==P.status&&W&&W.length>0){const fe=h.invoke;h.invoke=function(){const re=P[n.__symbol__("loadfalse")];for(let z=0;z<re.length;z++)re[z]===h&&re.splice(z,1);!I.aborted&&h.state===ee&&fe.call(h)},W.push(h)}else h.invoke()}else!I.aborted&&!1===P[a]&&(P[d]=!0)};return N.call(P,H,de),P[i]||(P[i]=h),y.apply(P,I.args),P[a]=!0,h}function R(){}function _(h){const I=h.data;return I.aborted=!0,B.apply(I.target,I.args)}const J=ye(A,"open",()=>function(h,I){return h[o]=0==I[2],h[E]=I[1],J.apply(h,I)}),q=M("fetchTaskAborting"),j=M("fetchTaskScheduling"),y=ye(A,"send",()=>function(h,I){if(!0===n.current[j]||h[o])return y.apply(h,I);{const P={target:h,url:h[E],isPeriodic:!1,args:I,aborted:!1},te=me("XMLHttpRequest.send",R,P,X,_);h&&!0===h[d]&&!P.aborted&&te.state===ee&&te.invoke()}}),B=ye(A,"abort",()=>function(h,I){const P=function S(h){return h[i]}(h);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[q])return B.apply(h,I)})}(e);const i=M("xhrTask"),o=M("xhrSync"),c=M("xhrListener"),a=M("xhrScheduled"),E=M("xhrURL"),d=M("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const i=e.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=e[c];if(a){if(!Ge(se(e,c)))continue;e[c]=(d=>{const b=function(){return d.apply(this,Ae(arguments,i+"."+c))};return pe(b,d),b})(a)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(o){return function(c){Qe(e,o).forEach(E=>{const d=e.PromiseRejectionEvent;if(d){const b=new d(o,{promise:c.promise,reason:c.rejection});E.invoke(b)}})}}e.PromiseRejectionEvent&&(n[M("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[M("rejectionHandledHandler")]=i("rejectionhandled"))})}},se=>{se(se.s=435)}]);