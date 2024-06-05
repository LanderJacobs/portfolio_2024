(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function S6(c,a){const e=new Set(c.split(","));return r=>e.has(r)}const K={},k2=[],x1=()=>{},kf=()=>!1,s4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),w6=c=>c.startsWith("onUpdate:"),t1=Object.assign,y6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Sf=Object.prototype.hasOwnProperty,$=(c,a)=>Sf.call(c,a),T=Array.isArray,S2=c=>l4(c)==="[object Map]",p5=c=>l4(c)==="[object Set]",D=c=>typeof c=="function",l1=c=>typeof c=="string",g2=c=>typeof c=="symbol",Q=c=>c!==null&&typeof c=="object",V5=c=>(Q(c)||D(c))&&D(c.then)&&D(c.catch),M5=Object.prototype.toString,l4=c=>M5.call(c),wf=c=>l4(c).slice(8,-1),d5=c=>l4(c)==="[object Object]",A6=c=>l1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Z2=S6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),n4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},yf=/-(\w)/g,q1=n4(c=>c.replace(yf,(a,e)=>e?e.toUpperCase():"")),Af=/\B([A-Z])/g,F2=n4(c=>c.replace(Af,"-$1").toLowerCase()),f4=n4(c=>c.charAt(0).toUpperCase()+c.slice(1)),U4=n4(c=>c?`on${f4(c)}`:""),i2=(c,a)=>!Object.is(c,a),I4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},C5=(c,a,e,r=!1)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,writable:r,value:e})},Pf=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let h0;const L5=()=>h0||(h0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function P6(c){if(T(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=l1(r)?Bf(r):P6(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(l1(c)||Q(c))return c}const _f=/;(?![^(]*\))/g,Tf=/:([^]+)/,Ff=/\/\*[^]*?\*\//g;function Bf(c){const a={};return c.replace(Ff,"").split(_f).forEach(e=>{if(e){const r=e.split(Tf);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function _6(c){let a="";if(l1(c))a=c;else if(T(c))for(let e=0;e<c.length;e++){const r=_6(c[e]);r&&(a+=r+" ")}else if(Q(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Rf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Df=S6(Rf);function g5(c){return!!c||c===""}const J1=c=>l1(c)?c:c==null?"":T(c)||Q(c)&&(c.toString===M5||!D(c.toString))?JSON.stringify(c,b5,2):String(c),b5=(c,a)=>a&&a.__v_isRef?b5(c,a.value):S2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i],s)=>(e[j4(r,s)+" =>"]=i,e),{})}:p5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>j4(e))}:g2(a)?j4(a):Q(a)&&!T(a)&&!d5(a)?String(a):a,j4=(c,a="")=>{var e;return g2(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let k1;class qf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=k1,!a&&k1&&(this.index=(k1.scopes||(k1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=k1;try{return k1=this,a()}finally{k1=e}}}on(){k1=this}off(){k1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ef(c,a=k1){a&&a.active&&a.effects.push(c)}function Of(){return k1}let M2;class T6{constructor(a,e,r,i){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ef(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,f2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&($f(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),o2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=e2,e=M2;try{return e2=!0,M2=this,this._runnings++,H0(this),this.fn()}finally{u0(this),this._runnings--,M2=e,e2=a}}stop(){this.active&&(H0(this),u0(this),this.onStop&&this.onStop(),this.active=!1)}}function $f(c){return c.value}function H0(c){c._trackId++,c._depsLength=0}function u0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)x5(c.deps[a],c);c.deps.length=c._depsLength}}function x5(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let e2=!0,s6=0;const N5=[];function f2(){N5.push(e2),e2=!1}function o2(){const c=N5.pop();e2=c===void 0?!0:c}function F6(){s6++}function B6(){for(s6--;!s6&&l6.length;)l6.shift()()}function k5(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&x5(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const l6=[];function S5(c,a,e){F6();for(const r of c.keys()){let i;r._dirtyLevel<a&&(i??(i=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(i??(i=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&l6.push(r.scheduler)))}B6()}const w5=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},n6=new WeakMap,d2=Symbol(""),f6=Symbol("");function d1(c,a,e){if(e2&&M2){let r=n6.get(c);r||n6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=w5(()=>r.delete(e))),k5(M2,i)}}function U1(c,a,e,r,i,s){const l=n6.get(c);if(!l)return;let n=[];if(a==="clear")n=[...l.values()];else if(e==="length"&&T(c)){const f=Number(r);l.forEach((t,m)=>{(m==="length"||!g2(m)&&m>=f)&&n.push(t)})}else switch(e!==void 0&&n.push(l.get(e)),a){case"add":T(c)?A6(e)&&n.push(l.get("length")):(n.push(l.get(d2)),S2(c)&&n.push(l.get(f6)));break;case"delete":T(c)||(n.push(l.get(d2)),S2(c)&&n.push(l.get(f6)));break;case"set":S2(c)&&n.push(l.get(d2));break}F6();for(const f of n)f&&S5(f,4);B6()}const Uf=S6("__proto__,__v_isRef,__isVue"),y5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(g2)),p0=If();function If(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=j(this);for(let s=0,l=this.length;s<l;s++)d1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){f2(),F6();const r=j(this)[a].apply(this,e);return B6(),o2(),r}}),c}function jf(c){g2(c)||(c=String(c));const a=j(this);return d1(a,"has",c),a.hasOwnProperty(c)}class A5{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?io:F5:s?T5:_5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const l=T(a);if(!i){if(l&&$(p0,e))return Reflect.get(p0,e,r);if(e==="hasOwnProperty")return jf}const n=Reflect.get(a,e,r);return(g2(e)?y5.has(e):Uf(e))||(i||d1(a,"get",e),s)?n:C1(n)?l&&A6(e)?n:n.value:Q(n)?i?B5(n):q6(n):n}}class P5 extends A5{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(!this._isShallow){const f=e3(s);if(!K3(r)&&!e3(r)&&(s=j(s),r=j(r)),!T(a)&&C1(s)&&!C1(r))return f?!1:(s.value=r,!0)}const l=T(a)&&A6(e)?Number(e)<a.length:$(a,e),n=Reflect.set(a,e,r,i);return a===j(i)&&(l?i2(r,s)&&U1(a,"set",e,r):U1(a,"add",e,r)),n}deleteProperty(a,e){const r=$(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&U1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!g2(e)||!y5.has(e))&&d1(a,"has",e),r}ownKeys(a){return d1(a,"iterate",T(a)?"length":d2),Reflect.ownKeys(a)}}class Gf extends A5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Wf=new P5,Zf=new Gf,Kf=new P5(!0);const R6=c=>c,o4=c=>Reflect.getPrototypeOf(c);function N3(c,a,e=!1,r=!1){c=c.__v_raw;const i=j(c),s=j(a);e||(i2(a,s)&&d1(i,"get",a),d1(i,"get",s));const{has:l}=o4(i),n=r?R6:e?O6:r3;if(l.call(i,a))return n(c.get(a));if(l.call(i,s))return n(c.get(s));c!==i&&c.get(a)}function k3(c,a=!1){const e=this.__v_raw,r=j(e),i=j(c);return a||(i2(c,i)&&d1(r,"has",c),d1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function S3(c,a=!1){return c=c.__v_raw,!a&&d1(j(c),"iterate",d2),Reflect.get(c,"size",c)}function V0(c){c=j(c);const a=j(this);return o4(a).has.call(a,c)||(a.add(c),U1(a,"add",c,c)),this}function M0(c,a){a=j(a);const e=j(this),{has:r,get:i}=o4(e);let s=r.call(e,c);s||(c=j(c),s=r.call(e,c));const l=i.call(e,c);return e.set(c,a),s?i2(a,l)&&U1(e,"set",c,a):U1(e,"add",c,a),this}function d0(c){const a=j(this),{has:e,get:r}=o4(a);let i=e.call(a,c);i||(c=j(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&U1(a,"delete",c,void 0),s}function C0(){const c=j(this),a=c.size!==0,e=c.clear();return a&&U1(c,"clear",void 0,void 0),e}function w3(c,a){return function(r,i){const s=this,l=s.__v_raw,n=j(l),f=a?R6:c?O6:r3;return!c&&d1(n,"iterate",d2),l.forEach((t,m)=>r.call(i,f(t),f(m),s))}}function y3(c,a,e){return function(...r){const i=this.__v_raw,s=j(i),l=S2(s),n=c==="entries"||c===Symbol.iterator&&l,f=c==="keys"&&l,t=i[c](...r),m=e?R6:a?O6:r3;return!a&&d1(s,"iterate",f?f6:d2),{next(){const{value:v,done:V}=t.next();return V?{value:v,done:V}:{value:n?[m(v[0]),m(v[1])]:m(v),done:V}},[Symbol.iterator](){return this}}}}function Y1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Yf(){const c={get(s){return N3(this,s)},get size(){return S3(this)},has:k3,add:V0,set:M0,delete:d0,clear:C0,forEach:w3(!1,!1)},a={get(s){return N3(this,s,!1,!0)},get size(){return S3(this)},has:k3,add:V0,set:M0,delete:d0,clear:C0,forEach:w3(!1,!0)},e={get(s){return N3(this,s,!0)},get size(){return S3(this,!0)},has(s){return k3.call(this,s,!0)},add:Y1("add"),set:Y1("set"),delete:Y1("delete"),clear:Y1("clear"),forEach:w3(!0,!1)},r={get(s){return N3(this,s,!0,!0)},get size(){return S3(this,!0)},has(s){return k3.call(this,s,!0)},add:Y1("add"),set:Y1("set"),delete:Y1("delete"),clear:Y1("clear"),forEach:w3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=y3(s,!1,!1),e[s]=y3(s,!0,!1),a[s]=y3(s,!1,!0),r[s]=y3(s,!0,!0)}),[c,e,a,r]}const[Xf,Jf,Qf,co]=Yf();function D6(c,a){const e=a?c?co:Qf:c?Jf:Xf;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get($(e,i)&&i in r?e:r,i,s)}const ao={get:D6(!1,!1)},eo={get:D6(!1,!0)},ro={get:D6(!0,!1)};const _5=new WeakMap,T5=new WeakMap,F5=new WeakMap,io=new WeakMap;function so(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lo(c){return c.__v_skip||!Object.isExtensible(c)?0:so(wf(c))}function q6(c){return e3(c)?c:E6(c,!1,Wf,ao,_5)}function no(c){return E6(c,!1,Kf,eo,T5)}function B5(c){return E6(c,!0,Zf,ro,F5)}function E6(c,a,e,r,i){if(!Q(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const l=lo(c);if(l===0)return c;const n=new Proxy(c,l===2?r:e);return i.set(c,n),n}function K2(c){return e3(c)?K2(c.__v_raw):!!(c&&c.__v_isReactive)}function e3(c){return!!(c&&c.__v_isReadonly)}function K3(c){return!!(c&&c.__v_isShallow)}function R5(c){return c?!!c.__v_raw:!1}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function fo(c){return Object.isExtensible(c)&&C5(c,"__v_skip",!0),c}const r3=c=>Q(c)?q6(c):c,O6=c=>Q(c)?B5(c):c;class D5{constructor(a,e,r,i){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new T6(()=>a(this._value),()=>O3(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=j(this);return(!a._cacheable||a.effect.dirty)&&i2(a._value,a._value=a.effect.run())&&O3(a,4),q5(a),a.effect._dirtyLevel>=2&&O3(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function oo(c,a,e=!1){let r,i;const s=D(c);return s?(r=c,i=x1):(r=c.get,i=c.set),new D5(r,i,s||!i,e)}function q5(c){var a;e2&&M2&&(c=j(c),k5(M2,(a=c.dep)!=null?a:c.dep=w5(()=>c.dep=void 0,c instanceof D5?c:void 0)))}function O3(c,a=4,e){c=j(c);const r=c.dep;r&&S5(r,a)}function C1(c){return!!(c&&c.__v_isRef===!0)}function S1(c){return to(c,!1)}function to(c,a){return C1(c)?c:new mo(c,a)}class mo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:r3(a)}get value(){return q5(this),this._value}set value(a){const e=this.__v_isShallow||K3(a)||e3(a);a=e?a:j(a),i2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:r3(a),O3(this,4))}}function u1(c){return C1(c)?c.value:c}const zo={get:(c,a,e)=>u1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return C1(i)&&!C1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function E5(c){return K2(c)?c:new Proxy(c,zo)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function r2(c,a,e,r){try{return r?c(...r):c()}catch(i){t4(i,a,e)}}function P1(c,a,e,r){if(D(c)){const i=r2(c,a,e,r);return i&&V5(i)&&i.catch(s=>{t4(s,a,e)}),i}if(T(c)){const i=[];for(let s=0;s<c.length;s++)i.push(P1(c[s],a,e,r));return i}}function t4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const l=a.proxy,n=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const t=s.ec;if(t){for(let m=0;m<t.length;m++)if(t[m](c,l,n)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){f2(),r2(f,null,10,[c,l,n]),o2();return}}vo(c,e,i,r)}function vo(c,a,e,r=!0){console.error(c)}let i3=!1,o6=!1;const z1=[];let R1=0;const w2=[];let Q1=null,H2=0;const O5=Promise.resolve();let $6=null;function ho(c){const a=$6||O5;return c?a.then(this?c.bind(this):c):a}function Ho(c){let a=R1+1,e=z1.length;for(;a<e;){const r=a+e>>>1,i=z1[r],s=s3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function U6(c){(!z1.length||!z1.includes(c,i3&&c.allowRecurse?R1+1:R1))&&(c.id==null?z1.push(c):z1.splice(Ho(c.id),0,c),$5())}function $5(){!i3&&!o6&&(o6=!0,$6=O5.then(I5))}function uo(c){const a=z1.indexOf(c);a>R1&&z1.splice(a,1)}function po(c){T(c)?w2.push(...c):(!Q1||!Q1.includes(c,c.allowRecurse?H2+1:H2))&&w2.push(c),$5()}function L0(c,a,e=i3?R1+1:0){for(;e<z1.length;e++){const r=z1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;z1.splice(e,1),e--,r()}}}function U5(c){if(w2.length){const a=[...new Set(w2)].sort((e,r)=>s3(e)-s3(r));if(w2.length=0,Q1){Q1.push(...a);return}for(Q1=a,H2=0;H2<Q1.length;H2++)Q1[H2]();Q1=null,H2=0}}const s3=c=>c.id==null?1/0:c.id,Vo=(c,a)=>{const e=s3(c)-s3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function I5(c){o6=!1,i3=!0,z1.sort(Vo);try{for(R1=0;R1<z1.length;R1++){const a=z1[R1];a&&a.active!==!1&&r2(a,null,14)}}finally{R1=0,z1.length=0,U5(),i3=!1,$6=null,(z1.length||w2.length)&&I5()}}function Mo(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||K;let i=e;const s=a.startsWith("update:"),l=s&&a.slice(7);if(l&&l in r){const m=`${l==="modelValue"?"model":l}Modifiers`,{number:v,trim:V}=r[m]||K;V&&(i=e.map(g=>l1(g)?g.trim():g)),v&&(i=e.map(Pf))}let n,f=r[n=U4(a)]||r[n=U4(q1(a))];!f&&s&&(f=r[n=U4(F2(a))]),f&&P1(f,c,6,i);const t=r[n+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[n])return;c.emitted[n]=!0,P1(t,c,6,i)}}function j5(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let l={},n=!1;if(!D(c)){const f=t=>{const m=j5(t,a,!0);m&&(n=!0,t1(l,m))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!n?(Q(c)&&r.set(c,null),null):(T(s)?s.forEach(f=>l[f]=null):t1(l,s),Q(c)&&r.set(c,l),l)}function m4(c,a){return!c||!s4(a)?!1:(a=a.slice(2).replace(/Once$/,""),$(c,a[0].toLowerCase()+a.slice(1))||$(c,F2(a))||$(c,a))}let o1=null,z4=null;function Y3(c){const a=o1;return o1=c,z4=c&&c.type.__scopeId||null,a}function v4(c){z4=c}function h4(){z4=null}function m1(c,a=o1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&_0(-1);const s=Y3(a);let l;try{l=c(...i)}finally{Y3(s),r._d&&_0(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function G4(c){const{type:a,vnode:e,proxy:r,withProxy:i,propsOptions:[s],slots:l,attrs:n,emit:f,render:t,renderCache:m,props:v,data:V,setupState:g,ctx:q,inheritAttrs:_}=c,G=Y3(c);let b,N;try{if(e.shapeFlag&4){const E=i||r,U=E;b=B1(t.call(U,E,m,v,g,V,q)),N=n}else{const E=a;b=B1(E.length>1?E(v,{attrs:n,slots:l,emit:f}):E(v,null)),N=a.props?n:Co(n)}}catch(E){Q2.length=0,t4(E,c,1),b=B(P2)}let y=b;if(N&&_!==!1){const E=Object.keys(N),{shapeFlag:U}=y;E.length&&U&7&&(s&&E.some(w6)&&(N=Lo(N,s)),y=_2(y,N,!1,!0))}return e.dirs&&(y=_2(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),b=y,Y3(G),b}const Co=c=>{let a;for(const e in c)(e==="class"||e==="style"||s4(e))&&((a||(a={}))[e]=c[e]);return a},Lo=(c,a)=>{const e={};for(const r in c)(!w6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function go(c,a,e){const{props:r,children:i,component:s}=c,{props:l,children:n,patchFlag:f}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?g0(r,l,t):!!l;if(f&8){const m=a.dynamicProps;for(let v=0;v<m.length;v++){const V=m[v];if(l[V]!==r[V]&&!m4(t,V))return!0}}}else return(i||n)&&(!n||!n.$stable)?!0:r===l?!1:r?l?g0(r,l,t):!0:!!l;return!1}function g0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!m4(e,s))return!0}return!1}function bo({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const xo="components";function H4(c,a){return ko(xo,c,!0,a)||c}const No=Symbol.for("v-ndc");function ko(c,a,e=!0,r=!1){const i=o1||v1;if(i){const s=i.type;{const n=gt(s,!1);if(n&&(n===a||n===q1(a)||n===f4(q1(a))))return s}const l=b0(i[c]||s[c],a)||b0(i.appContext[c],a);return!l&&r?s:l}}function b0(c,a){return c&&(c[a]||c[q1(a)]||c[f4(q1(a))])}const So=c=>c.__isSuspense;function wo(c,a){a&&a.pendingBranch?T(c)?a.effects.push(...c):a.effects.push(c):po(c)}const yo=Symbol.for("v-scx"),Ao=()=>U3(yo),A3={};function $3(c,a,e){return G5(c,a,e)}function G5(c,a,{immediate:e,deep:r,flush:i,once:s,onTrack:l,onTrigger:n}=K){if(a&&s){const R=a;a=(...r1)=>{R(...r1),U()}}const f=v1,t=R=>r===!0?R:u2(R,r===!1?1:void 0);let m,v=!1,V=!1;if(C1(c)?(m=()=>c.value,v=K3(c)):K2(c)?(m=()=>t(c),v=!0):T(c)?(V=!0,v=c.some(R=>K2(R)||K3(R)),m=()=>c.map(R=>{if(C1(R))return R.value;if(K2(R))return t(R);if(D(R))return r2(R,f,2)})):D(c)?a?m=()=>r2(c,f,2):m=()=>(g&&g(),P1(c,f,3,[q])):m=x1,a&&r){const R=m;m=()=>u2(R())}let g,q=R=>{g=y.onStop=()=>{r2(R,f,4),g=y.onStop=void 0}},_;if(V4)if(q=x1,a?e&&P1(a,f,3,[m(),V?[]:void 0,q]):m(),i==="sync"){const R=Ao();_=R.__watcherHandles||(R.__watcherHandles=[])}else return x1;let G=V?new Array(c.length).fill(A3):A3;const b=()=>{if(!(!y.active||!y.dirty))if(a){const R=y.run();(r||v||(V?R.some((r1,p1)=>i2(r1,G[p1])):i2(R,G)))&&(g&&g(),P1(a,f,3,[R,G===A3?void 0:V&&G[0]===A3?[]:G,q]),G=R)}else y.run()};b.allowRecurse=!!a;let N;i==="sync"?N=b:i==="post"?N=()=>M1(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),N=()=>U6(b));const y=new T6(m,x1,N),E=Of(),U=()=>{y.stop(),E&&y6(E.effects,y)};return a?e?b():G=y.run():i==="post"?M1(y.run.bind(y),f&&f.suspense):y.run(),_&&_.push(U),U}function Po(c,a,e){const r=this.proxy,i=l1(c)?c.includes(".")?W5(r,c):()=>r[c]:c.bind(r,r);let s;D(a)?s=a:(s=a.handler,e=a);const l=z3(this),n=G5(i,s.bind(r),e);return l(),n}function W5(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function u2(c,a=1/0,e){if(a<=0||!Q(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),a--,C1(c))u2(c.value,a,e);else if(T(c))for(let r=0;r<c.length;r++)u2(c[r],a,e);else if(p5(c)||S2(c))c.forEach(r=>{u2(r,a,e)});else if(d5(c))for(const r in c)u2(c[r],a,e);return c}function W4(c,a){if(o1===null)return c;const e=M4(o1)||o1.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[s,l,n,f=K]=a[i];s&&(D(s)&&(s={mounted:s,updated:s}),s.deep&&u2(l),r.push({dir:s,instance:e,value:l,oldValue:void 0,arg:n,modifiers:f}))}return c}function z2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let l=0;l<i.length;l++){const n=i[l];s&&(n.oldValue=s[l].value);let f=n.dir[r];f&&(f2(),P1(f,e,8,[c.el,n,c,a]),o2())}}/*! #__NO_SIDE_EFFECTS__ */function _o(c,a){return D(c)?t1({name:c.name},a,{setup:c}):c}const Y2=c=>!!c.type.__asyncLoader,Z5=c=>c.type.__isKeepAlive;function To(c,a){K5(c,"a",a)}function Fo(c,a){K5(c,"da",a)}function K5(c,a,e=v1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(u4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)Z5(i.parent.vnode)&&Bo(r,a,e,i),i=i.parent}}function Bo(c,a,e,r){const i=u4(a,c,r,!0);Y5(()=>{y6(r[a],i)},e)}function u4(c,a,e=v1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...l)=>{if(e.isUnmounted)return;f2();const n=z3(e),f=P1(a,e,c,l);return n(),o2(),f});return r?i.unshift(s):i.push(s),s}}const W1=c=>(a,e=v1)=>(!V4||c==="sp")&&u4(c,(...r)=>a(...r),e),Ro=W1("bm"),Do=W1("m"),qo=W1("bu"),Eo=W1("u"),Oo=W1("bum"),Y5=W1("um"),$o=W1("sp"),Uo=W1("rtg"),Io=W1("rtc");function jo(c,a=v1){u4("ec",c,a)}function Z4(c,a,e,r){let i;const s=e;if(T(c)||l1(c)){i=new Array(c.length);for(let l=0,n=c.length;l<n;l++)i[l]=a(c[l],l,void 0,s)}else if(typeof c=="number"){i=new Array(c);for(let l=0;l<c;l++)i[l]=a(l+1,l,void 0,s)}else if(Q(c))if(c[Symbol.iterator])i=Array.from(c,(l,n)=>a(l,n,void 0,s));else{const l=Object.keys(c);i=new Array(l.length);for(let n=0,f=l.length;n<f;n++){const t=l[n];i[n]=a(c[t],t,n,s)}}else i=[];return i}function A2(c,a,e={},r,i){if(o1.isCE||o1.parent&&Y2(o1.parent)&&o1.parent.isCE)return B("slot",e,r);let s=c[a];s&&s._c&&(s._d=!1),a1();const l=s&&X5(s(e)),n=zt(s1,{key:e.key||l&&l.key||`_${a}`},l||[],l&&c._===1?64:-2);return!i&&n.scopeId&&(n.slotScopeIds=[n.scopeId+"-s"]),s&&s._c&&(s._d=!0),n}function X5(c){return c.some(a=>J3(a)?!(a.type===P2||a.type===s1&&!X5(a.children)):!0)?c:null}const t6=c=>c?z7(c)?M4(c)||c.proxy:t6(c.parent):null,X2=t1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>t6(c.parent),$root:c=>t6(c.root),$emit:c=>c.emit,$options:c=>I6(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,U6(c.update)}),$nextTick:c=>c.n||(c.n=ho.bind(c.proxy)),$watch:c=>Po.bind(c)}),K4=(c,a)=>c!==K&&!c.__isScriptSetup&&$(c,a),Go={get({_:c},a){if(a==="__v_skip")return!0;const{ctx:e,setupState:r,data:i,props:s,accessCache:l,type:n,appContext:f}=c;let t;if(a[0]!=="$"){const g=l[a];if(g!==void 0)switch(g){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(K4(r,a))return l[a]=1,r[a];if(i!==K&&$(i,a))return l[a]=2,i[a];if((t=c.propsOptions[0])&&$(t,a))return l[a]=3,s[a];if(e!==K&&$(e,a))return l[a]=4,e[a];m6&&(l[a]=0)}}const m=X2[a];let v,V;if(m)return a==="$attrs"&&d1(c.attrs,"get",""),m(c);if((v=n.__cssModules)&&(v=v[a]))return v;if(e!==K&&$(e,a))return l[a]=4,e[a];if(V=f.config.globalProperties,$(V,a))return V[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return K4(i,a)?(i[a]=e,!0):r!==K&&$(r,a)?(r[a]=e,!0):$(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},l){let n;return!!e[l]||c!==K&&$(c,l)||K4(a,l)||(n=s[0])&&$(n,l)||$(r,l)||$(X2,l)||$(i.config.globalProperties,l)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:$(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function x0(c){return T(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let m6=!0;function Wo(c){const a=I6(c),e=c.proxy,r=c.ctx;m6=!1,a.beforeCreate&&N0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:l,watch:n,provide:f,inject:t,created:m,beforeMount:v,mounted:V,beforeUpdate:g,updated:q,activated:_,deactivated:G,beforeDestroy:b,beforeUnmount:N,destroyed:y,unmounted:E,render:U,renderTracked:R,renderTriggered:r1,errorCaptured:p1,serverPrefetch:b1,expose:E1,inheritAttrs:R2,components:L3,directives:g3,filters:O4}=a;if(t&&Zo(t,r,null),l)for(const c1 in l){const Z=l[c1];D(Z)&&(r[c1]=Z.bind(e))}if(i){const c1=i.call(e,e);Q(c1)&&(c.data=q6(c1))}if(m6=!0,s)for(const c1 in s){const Z=s[c1],t2=D(Z)?Z.bind(e,e):D(Z.get)?Z.get.bind(e,e):x1,b3=!D(Z)&&D(Z.set)?Z.set.bind(e):x1,m2=h2({get:t2,set:b3});Object.defineProperty(r,c1,{enumerable:!0,configurable:!0,get:()=>m2.value,set:_1=>m2.value=_1})}if(n)for(const c1 in n)J5(n[c1],r,e,c1);if(f){const c1=D(f)?f.call(e):f;Reflect.ownKeys(c1).forEach(Z=>{ct(Z,c1[Z])})}m&&N0(m,c,"c");function h1(c1,Z){T(Z)?Z.forEach(t2=>c1(t2.bind(e))):Z&&c1(Z.bind(e))}if(h1(Ro,v),h1(Do,V),h1(qo,g),h1(Eo,q),h1(To,_),h1(Fo,G),h1(jo,p1),h1(Io,R),h1(Uo,r1),h1(Oo,N),h1(Y5,E),h1($o,b1),T(E1))if(E1.length){const c1=c.exposed||(c.exposed={});E1.forEach(Z=>{Object.defineProperty(c1,Z,{get:()=>e[Z],set:t2=>e[Z]=t2})})}else c.exposed||(c.exposed={});U&&c.render===x1&&(c.render=U),R2!=null&&(c.inheritAttrs=R2),L3&&(c.components=L3),g3&&(c.directives=g3)}function Zo(c,a,e=x1){T(c)&&(c=z6(c));for(const r in c){const i=c[r];let s;Q(i)?"default"in i?s=U3(i.from||r,i.default,!0):s=U3(i.from||r):s=U3(i),C1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):a[r]=s}}function N0(c,a,e){P1(T(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function J5(c,a,e,r){const i=r.includes(".")?W5(e,r):()=>e[r];if(l1(c)){const s=a[c];D(s)&&$3(i,s)}else if(D(c))$3(i,c.bind(e));else if(Q(c))if(T(c))c.forEach(s=>J5(s,a,e,r));else{const s=D(c.handler)?c.handler.bind(e):a[c.handler];D(s)&&$3(i,s,c)}}function I6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:l}}=c.appContext,n=s.get(a);let f;return n?f=n:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(t=>X3(f,t,l,!0)),X3(f,a,l)),Q(a)&&s.set(a,f),f}function X3(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&X3(c,s,e,!0),i&&i.forEach(l=>X3(c,l,e,!0));for(const l in a)if(!(r&&l==="expose")){const n=Ko[l]||e&&e[l];c[l]=n?n(c[l],a[l]):a[l]}return c}const Ko={data:k0,props:S0,emits:S0,methods:j2,computed:j2,beforeCreate:H1,created:H1,beforeMount:H1,mounted:H1,beforeUpdate:H1,updated:H1,beforeDestroy:H1,beforeUnmount:H1,destroyed:H1,unmounted:H1,activated:H1,deactivated:H1,errorCaptured:H1,serverPrefetch:H1,components:j2,directives:j2,watch:Xo,provide:k0,inject:Yo};function k0(c,a){return a?c?function(){return t1(D(c)?c.call(this,this):c,D(a)?a.call(this,this):a)}:a:c}function Yo(c,a){return j2(z6(c),z6(a))}function z6(c){if(T(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function H1(c,a){return c?[...new Set([].concat(c,a))]:a}function j2(c,a){return c?t1(Object.create(null),c,a):a}function S0(c,a){return c?T(c)&&T(a)?[...new Set([...c,...a])]:t1(Object.create(null),x0(c),x0(a??{})):a}function Xo(c,a){if(!c)return a;if(!a)return c;const e=t1(Object.create(null),c);for(const r in a)e[r]=H1(c[r],a[r]);return e}function Q5(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jo=0;function Qo(c,a){return function(r,i=null){D(r)||(r=t1({},r)),i!=null&&!Q(i)&&(i=null);const s=Q5(),l=new WeakSet;let n=!1;const f=s.app={_uid:Jo++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Nt,get config(){return s.config},set config(t){},use(t,...m){return l.has(t)||(t&&D(t.install)?(l.add(t),t.install(f,...m)):D(t)&&(l.add(t),t(f,...m))),f},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),f},component(t,m){return m?(s.components[t]=m,f):s.components[t]},directive(t,m){return m?(s.directives[t]=m,f):s.directives[t]},mount(t,m,v){if(!n){const V=B(r,i);return V.appContext=s,v===!0?v="svg":v===!1&&(v=void 0),m&&a?a(V,t):c(V,t,v),n=!0,f._container=t,t.__vue_app__=f,M4(V.component)||V.component.proxy}},unmount(){n&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,m){return s.provides[t]=m,f},runWithContext(t){const m=J2;J2=f;try{return t()}finally{J2=m}}};return f}}let J2=null;function ct(c,a){if(v1){let e=v1.provides;const r=v1.parent&&v1.parent.provides;r===e&&(e=v1.provides=Object.create(r)),e[c]=a}}function U3(c,a,e=!1){const r=v1||o1;if(r||J2){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:J2._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&D(a)?a.call(r&&r.proxy):a}}const c7={},a7=()=>Object.create(c7),e7=c=>Object.getPrototypeOf(c)===c7;function at(c,a,e,r=!1){const i={},s=a7();c.propsDefaults=Object.create(null),r7(c,a,i,s);for(const l in c.propsOptions[0])l in i||(i[l]=void 0);e?c.props=r?i:no(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function et(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:l}}=c,n=j(i),[f]=c.propsOptions;let t=!1;if((r||l>0)&&!(l&16)){if(l&8){const m=c.vnode.dynamicProps;for(let v=0;v<m.length;v++){let V=m[v];if(m4(c.emitsOptions,V))continue;const g=a[V];if(f)if($(s,V))g!==s[V]&&(s[V]=g,t=!0);else{const q=q1(V);i[q]=v6(f,n,q,g,c,!1)}else g!==s[V]&&(s[V]=g,t=!0)}}}else{r7(c,a,i,s)&&(t=!0);let m;for(const v in n)(!a||!$(a,v)&&((m=F2(v))===v||!$(a,m)))&&(f?e&&(e[v]!==void 0||e[m]!==void 0)&&(i[v]=v6(f,n,v,void 0,c,!0)):delete i[v]);if(s!==n)for(const v in s)(!a||!$(a,v))&&(delete s[v],t=!0)}t&&U1(c.attrs,"set","")}function r7(c,a,e,r){const[i,s]=c.propsOptions;let l=!1,n;if(a)for(let f in a){if(Z2(f))continue;const t=a[f];let m;i&&$(i,m=q1(f))?!s||!s.includes(m)?e[m]=t:(n||(n={}))[m]=t:m4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,l=!0)}if(s){const f=j(e),t=n||K;for(let m=0;m<s.length;m++){const v=s[m];e[v]=v6(i,f,v,t[v],c,!$(t,v))}}return l}function v6(c,a,e,r,i,s){const l=c[e];if(l!=null){const n=$(l,"default");if(n&&r===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&D(f)){const{propsDefaults:t}=i;if(e in t)r=t[e];else{const m=z3(i);r=t[e]=f.call(null,a),m()}}else r=f}l[0]&&(s&&!n?r=!1:l[1]&&(r===""||r===F2(e))&&(r=!0))}return r}function i7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,l={},n=[];let f=!1;if(!D(c)){const m=v=>{f=!0;const[V,g]=i7(v,a,!0);t1(l,V),g&&n.push(...g)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!s&&!f)return Q(c)&&r.set(c,k2),k2;if(T(s))for(let m=0;m<s.length;m++){const v=q1(s[m]);w0(v)&&(l[v]=K)}else if(s)for(const m in s){const v=q1(m);if(w0(v)){const V=s[m],g=l[v]=T(V)||D(V)?{type:V}:t1({},V);if(g){const q=P0(Boolean,g.type),_=P0(String,g.type);g[0]=q>-1,g[1]=_<0||q<_,(q>-1||$(g,"default"))&&n.push(v)}}}const t=[l,n];return Q(c)&&r.set(c,t),t}function w0(c){return c[0]!=="$"&&!Z2(c)}function y0(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function A0(c,a){return y0(c)===y0(a)}function P0(c,a){return T(a)?a.findIndex(e=>A0(e,c)):D(a)&&A0(a,c)?0:-1}const s7=c=>c[0]==="_"||c==="$stable",j6=c=>T(c)?c.map(B1):[B1(c)],rt=(c,a,e)=>{if(a._n)return a;const r=m1((...i)=>j6(a(...i)),e);return r._c=!1,r},l7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(s7(i))continue;const s=c[i];if(D(s))a[i]=rt(i,s,r);else if(s!=null){const l=j6(s);a[i]=()=>l}}},n7=(c,a)=>{const e=j6(a);c.slots.default=()=>e},it=(c,a)=>{const e=c.slots=a7();if(c.vnode.shapeFlag&32){const r=a._;r?(t1(e,a),C5(e,"_",r,!0)):l7(a,e)}else a&&n7(c,a)},st=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,l=K;if(r.shapeFlag&32){const n=a._;n?e&&n===1?s=!1:(t1(i,a),!e&&n===1&&delete i._):(s=!a.$stable,l7(a,i)),l=a}else a&&(n7(c,a),l={default:1});if(s)for(const n in i)!s7(n)&&l[n]==null&&delete i[n]};function h6(c,a,e,r,i=!1){if(T(c)){c.forEach((V,g)=>h6(V,a&&(T(a)?a[g]:a),e,r,i));return}if(Y2(r)&&!i)return;const s=r.shapeFlag&4?M4(r.component)||r.component.proxy:r.el,l=i?null:s,{i:n,r:f}=c,t=a&&a.r,m=n.refs===K?n.refs={}:n.refs,v=n.setupState;if(t!=null&&t!==f&&(l1(t)?(m[t]=null,$(v,t)&&(v[t]=null)):C1(t)&&(t.value=null)),D(f))r2(f,n,12,[l,m]);else{const V=l1(f),g=C1(f);if(V||g){const q=()=>{if(c.f){const _=V?$(v,f)?v[f]:m[f]:f.value;i?T(_)&&y6(_,s):T(_)?_.includes(s)||_.push(s):V?(m[f]=[s],$(v,f)&&(v[f]=m[f])):(f.value=[s],c.k&&(m[c.k]=f.value))}else V?(m[f]=l,$(v,f)&&(v[f]=l)):g&&(f.value=l,c.k&&(m[c.k]=l))};l?(q.id=-1,M1(q,e)):q()}}}const M1=wo;function lt(c){return nt(c)}function nt(c,a){const e=L5();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:l,createText:n,createComment:f,setText:t,setElementText:m,parentNode:v,nextSibling:V,setScopeId:g=x1,insertStaticContent:q}=c,_=(o,z,H,u=null,p=null,C=null,x=void 0,d=null,L=!!z.dynamicChildren)=>{if(o===z)return;o&&!E2(o,z)&&(u=x3(o),_1(o,p,C,!0),o=null),z.patchFlag===-2&&(L=!1,z.dynamicChildren=null);const{type:M,ref:S,shapeFlag:P}=z;switch(M){case p4:G(o,z,H,u);break;case P2:b(o,z,H,u);break;case I3:o==null&&N(z,H,u,x);break;case s1:L3(o,z,H,u,p,C,x,d,L);break;default:P&1?U(o,z,H,u,p,C,x,d,L):P&6?g3(o,z,H,u,p,C,x,d,L):(P&64||P&128)&&M.process(o,z,H,u,p,C,x,d,L,D2)}S!=null&&p&&h6(S,o&&o.ref,C,z||o,!z)},G=(o,z,H,u)=>{if(o==null)r(z.el=n(z.children),H,u);else{const p=z.el=o.el;z.children!==o.children&&t(p,z.children)}},b=(o,z,H,u)=>{o==null?r(z.el=f(z.children||""),H,u):z.el=o.el},N=(o,z,H,u)=>{[o.el,o.anchor]=q(o.children,z,H,u,o.el,o.anchor)},y=({el:o,anchor:z},H,u)=>{let p;for(;o&&o!==z;)p=V(o),r(o,H,u),o=p;r(z,H,u)},E=({el:o,anchor:z})=>{let H;for(;o&&o!==z;)H=V(o),i(o),o=H;i(z)},U=(o,z,H,u,p,C,x,d,L)=>{z.type==="svg"?x="svg":z.type==="math"&&(x="mathml"),o==null?R(z,H,u,p,C,x,d,L):b1(o,z,p,C,x,d,L)},R=(o,z,H,u,p,C,x,d)=>{let L,M;const{props:S,shapeFlag:P,transition:A,dirs:F}=o;if(L=o.el=l(o.type,C,S&&S.is,S),P&8?m(L,o.children):P&16&&p1(o.children,L,null,u,p,Y4(o,C),x,d),F&&z2(o,null,u,"created"),r1(L,o,o.scopeId,x,u),S){for(const W in S)W!=="value"&&!Z2(W)&&s(L,W,null,S[W],C,o.children,u,p,O1);"value"in S&&s(L,"value",null,S.value,C),(M=S.onVnodeBeforeMount)&&F1(M,u,o)}F&&z2(o,null,u,"beforeMount");const O=ft(p,A);O&&A.beforeEnter(L),r(L,z,H),((M=S&&S.onVnodeMounted)||O||F)&&M1(()=>{M&&F1(M,u,o),O&&A.enter(L),F&&z2(o,null,u,"mounted")},p)},r1=(o,z,H,u,p)=>{if(H&&g(o,H),u)for(let C=0;C<u.length;C++)g(o,u[C]);if(p){let C=p.subTree;if(z===C){const x=p.vnode;r1(o,x,x.scopeId,x.slotScopeIds,p.parent)}}},p1=(o,z,H,u,p,C,x,d,L=0)=>{for(let M=L;M<o.length;M++){const S=o[M]=d?c2(o[M]):B1(o[M]);_(null,S,z,H,u,p,C,x,d)}},b1=(o,z,H,u,p,C,x)=>{const d=z.el=o.el;let{patchFlag:L,dynamicChildren:M,dirs:S}=z;L|=o.patchFlag&16;const P=o.props||K,A=z.props||K;let F;if(H&&v2(H,!1),(F=A.onVnodeBeforeUpdate)&&F1(F,H,z,o),S&&z2(z,o,H,"beforeUpdate"),H&&v2(H,!0),M?E1(o.dynamicChildren,M,d,H,u,Y4(z,p),C):x||Z(o,z,d,null,H,u,Y4(z,p),C,!1),L>0){if(L&16)R2(d,z,P,A,H,u,p);else if(L&2&&P.class!==A.class&&s(d,"class",null,A.class,p),L&4&&s(d,"style",P.style,A.style,p),L&8){const O=z.dynamicProps;for(let W=0;W<O.length;W++){const J=O[W],f1=P[J],N1=A[J];(N1!==f1||J==="value")&&s(d,J,f1,N1,p,o.children,H,u,O1)}}L&1&&o.children!==z.children&&m(d,z.children)}else!x&&M==null&&R2(d,z,P,A,H,u,p);((F=A.onVnodeUpdated)||S)&&M1(()=>{F&&F1(F,H,z,o),S&&z2(z,o,H,"updated")},u)},E1=(o,z,H,u,p,C,x)=>{for(let d=0;d<z.length;d++){const L=o[d],M=z[d],S=L.el&&(L.type===s1||!E2(L,M)||L.shapeFlag&70)?v(L.el):H;_(L,M,S,null,u,p,C,x,!0)}},R2=(o,z,H,u,p,C,x)=>{if(H!==u){if(H!==K)for(const d in H)!Z2(d)&&!(d in u)&&s(o,d,H[d],null,x,z.children,p,C,O1);for(const d in u){if(Z2(d))continue;const L=u[d],M=H[d];L!==M&&d!=="value"&&s(o,d,M,L,x,z.children,p,C,O1)}"value"in u&&s(o,"value",H.value,u.value,x)}},L3=(o,z,H,u,p,C,x,d,L)=>{const M=z.el=o?o.el:n(""),S=z.anchor=o?o.anchor:n("");let{patchFlag:P,dynamicChildren:A,slotScopeIds:F}=z;F&&(d=d?d.concat(F):F),o==null?(r(M,H,u),r(S,H,u),p1(z.children||[],H,S,p,C,x,d,L)):P>0&&P&64&&A&&o.dynamicChildren?(E1(o.dynamicChildren,A,H,p,C,x,d),(z.key!=null||p&&z===p.subTree)&&f7(o,z,!0)):Z(o,z,H,S,p,C,x,d,L)},g3=(o,z,H,u,p,C,x,d,L)=>{z.slotScopeIds=d,o==null?z.shapeFlag&512?p.ctx.activate(z,H,u,x,L):O4(z,H,u,p,C,x,L):l0(o,z,L)},O4=(o,z,H,u,p,C,x)=>{const d=o.component=Vt(o,u,p);if(Z5(o)&&(d.ctx.renderer=D2),Mt(d),d.asyncDep){if(p&&p.registerDep(d,h1),!o.el){const L=d.subTree=B(P2);b(null,L,z,H)}}else h1(d,o,z,H,p,C,x)},l0=(o,z,H)=>{const u=z.component=o.component;if(go(o,z,H))if(u.asyncDep&&!u.asyncResolved){c1(u,z,H);return}else u.next=z,uo(u.update),u.effect.dirty=!0,u.update();else z.el=o.el,u.vnode=z},h1=(o,z,H,u,p,C,x)=>{const d=()=>{if(o.isMounted){let{next:S,bu:P,u:A,parent:F,vnode:O}=o;{const b2=o7(o);if(b2){S&&(S.el=O.el,c1(o,S,x)),b2.asyncDep.then(()=>{o.isUnmounted||d()});return}}let W=S,J;v2(o,!1),S?(S.el=O.el,c1(o,S,x)):S=O,P&&I4(P),(J=S.props&&S.props.onVnodeBeforeUpdate)&&F1(J,F,S,O),v2(o,!0);const f1=G4(o),N1=o.subTree;o.subTree=f1,_(N1,f1,v(N1.el),x3(N1),o,p,C),S.el=f1.el,W===null&&bo(o,f1.el),A&&M1(A,p),(J=S.props&&S.props.onVnodeUpdated)&&M1(()=>F1(J,F,S,O),p)}else{let S;const{el:P,props:A}=z,{bm:F,m:O,parent:W}=o,J=Y2(z);if(v2(o,!1),F&&I4(F),!J&&(S=A&&A.onVnodeBeforeMount)&&F1(S,W,z),v2(o,!0),P&&t0){const f1=()=>{o.subTree=G4(o),t0(P,o.subTree,o,p,null)};J?z.type.__asyncLoader().then(()=>!o.isUnmounted&&f1()):f1()}else{const f1=o.subTree=G4(o);_(null,f1,H,u,o,p,C),z.el=f1.el}if(O&&M1(O,p),!J&&(S=A&&A.onVnodeMounted)){const f1=z;M1(()=>F1(S,W,f1),p)}(z.shapeFlag&256||W&&Y2(W.vnode)&&W.vnode.shapeFlag&256)&&o.a&&M1(o.a,p),o.isMounted=!0,z=H=u=null}},L=o.effect=new T6(d,x1,()=>U6(M),o.scope),M=o.update=()=>{L.dirty&&L.run()};M.id=o.uid,v2(o,!0),M()},c1=(o,z,H)=>{z.component=o;const u=o.vnode.props;o.vnode=z,o.next=null,et(o,z.props,u,H),st(o,z.children,H),f2(),L0(o),o2()},Z=(o,z,H,u,p,C,x,d,L=!1)=>{const M=o&&o.children,S=o?o.shapeFlag:0,P=z.children,{patchFlag:A,shapeFlag:F}=z;if(A>0){if(A&128){b3(M,P,H,u,p,C,x,d,L);return}else if(A&256){t2(M,P,H,u,p,C,x,d,L);return}}F&8?(S&16&&O1(M,p,C),P!==M&&m(H,P)):S&16?F&16?b3(M,P,H,u,p,C,x,d,L):O1(M,p,C,!0):(S&8&&m(H,""),F&16&&p1(P,H,u,p,C,x,d,L))},t2=(o,z,H,u,p,C,x,d,L)=>{o=o||k2,z=z||k2;const M=o.length,S=z.length,P=Math.min(M,S);let A;for(A=0;A<P;A++){const F=z[A]=L?c2(z[A]):B1(z[A]);_(o[A],F,H,null,p,C,x,d,L)}M>S?O1(o,p,C,!0,!1,P):p1(z,H,u,p,C,x,d,L,P)},b3=(o,z,H,u,p,C,x,d,L)=>{let M=0;const S=z.length;let P=o.length-1,A=S-1;for(;M<=P&&M<=A;){const F=o[M],O=z[M]=L?c2(z[M]):B1(z[M]);if(E2(F,O))_(F,O,H,null,p,C,x,d,L);else break;M++}for(;M<=P&&M<=A;){const F=o[P],O=z[A]=L?c2(z[A]):B1(z[A]);if(E2(F,O))_(F,O,H,null,p,C,x,d,L);else break;P--,A--}if(M>P){if(M<=A){const F=A+1,O=F<S?z[F].el:u;for(;M<=A;)_(null,z[M]=L?c2(z[M]):B1(z[M]),H,O,p,C,x,d,L),M++}}else if(M>A)for(;M<=P;)_1(o[M],p,C,!0),M++;else{const F=M,O=M,W=new Map;for(M=O;M<=A;M++){const L1=z[M]=L?c2(z[M]):B1(z[M]);L1.key!=null&&W.set(L1.key,M)}let J,f1=0;const N1=A-O+1;let b2=!1,m0=0;const q2=new Array(N1);for(M=0;M<N1;M++)q2[M]=0;for(M=F;M<=P;M++){const L1=o[M];if(f1>=N1){_1(L1,p,C,!0);continue}let T1;if(L1.key!=null)T1=W.get(L1.key);else for(J=O;J<=A;J++)if(q2[J-O]===0&&E2(L1,z[J])){T1=J;break}T1===void 0?_1(L1,p,C,!0):(q2[T1-O]=M+1,T1>=m0?m0=T1:b2=!0,_(L1,z[T1],H,null,p,C,x,d,L),f1++)}const z0=b2?ot(q2):k2;for(J=z0.length-1,M=N1-1;M>=0;M--){const L1=O+M,T1=z[L1],v0=L1+1<S?z[L1+1].el:u;q2[M]===0?_(null,T1,H,v0,p,C,x,d,L):b2&&(J<0||M!==z0[J]?m2(T1,H,v0,2):J--)}}},m2=(o,z,H,u,p=null)=>{const{el:C,type:x,transition:d,children:L,shapeFlag:M}=o;if(M&6){m2(o.component.subTree,z,H,u);return}if(M&128){o.suspense.move(z,H,u);return}if(M&64){x.move(o,z,H,D2);return}if(x===s1){r(C,z,H);for(let P=0;P<L.length;P++)m2(L[P],z,H,u);r(o.anchor,z,H);return}if(x===I3){y(o,z,H);return}if(u!==2&&M&1&&d)if(u===0)d.beforeEnter(C),r(C,z,H),M1(()=>d.enter(C),p);else{const{leave:P,delayLeave:A,afterLeave:F}=d,O=()=>r(C,z,H),W=()=>{P(C,()=>{O(),F&&F()})};A?A(C,O,W):W()}else r(C,z,H)},_1=(o,z,H,u=!1,p=!1)=>{const{type:C,props:x,ref:d,children:L,dynamicChildren:M,shapeFlag:S,patchFlag:P,dirs:A}=o;if(d!=null&&h6(d,null,H,o,!0),S&256){z.ctx.deactivate(o);return}const F=S&1&&A,O=!Y2(o);let W;if(O&&(W=x&&x.onVnodeBeforeUnmount)&&F1(W,z,o),S&6)Nf(o.component,H,u);else{if(S&128){o.suspense.unmount(H,u);return}F&&z2(o,null,z,"beforeUnmount"),S&64?o.type.remove(o,z,H,p,D2,u):M&&(C!==s1||P>0&&P&64)?O1(M,z,H,!1,!0):(C===s1&&P&384||!p&&S&16)&&O1(L,z,H),u&&n0(o)}(O&&(W=x&&x.onVnodeUnmounted)||F)&&M1(()=>{W&&F1(W,z,o),F&&z2(o,null,z,"unmounted")},H)},n0=o=>{const{type:z,el:H,anchor:u,transition:p}=o;if(z===s1){xf(H,u);return}if(z===I3){E(o);return}const C=()=>{i(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(o.shapeFlag&1&&p&&!p.persisted){const{leave:x,delayLeave:d}=p,L=()=>x(H,C);d?d(o.el,C,L):L()}else C()},xf=(o,z)=>{let H;for(;o!==z;)H=V(o),i(o),o=H;i(z)},Nf=(o,z,H)=>{const{bum:u,scope:p,update:C,subTree:x,um:d}=o;u&&I4(u),p.stop(),C&&(C.active=!1,_1(x,o,z,H)),d&&M1(d,z),M1(()=>{o.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},O1=(o,z,H,u=!1,p=!1,C=0)=>{for(let x=C;x<o.length;x++)_1(o[x],z,H,u,p)},x3=o=>o.shapeFlag&6?x3(o.component.subTree):o.shapeFlag&128?o.suspense.next():V(o.anchor||o.el);let $4=!1;const f0=(o,z,H)=>{o==null?z._vnode&&_1(z._vnode,null,null,!0):_(z._vnode||null,o,z,null,null,null,H),$4||($4=!0,L0(),U5(),$4=!1),z._vnode=o},D2={p:_,um:_1,m:m2,r:n0,mt:O4,mc:p1,pc:Z,pbc:E1,n:x3,o:c};let o0,t0;return{render:f0,hydrate:o0,createApp:Qo(f0,o0)}}function Y4({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function v2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function ft(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function f7(c,a,e=!1){const r=c.children,i=a.children;if(T(r)&&T(i))for(let s=0;s<r.length;s++){const l=r[s];let n=i[s];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=i[s]=c2(i[s]),n.el=l.el),e||f7(l,n)),n.type===p4&&(n.el=l.el)}}function ot(c){const a=c.slice(),e=[0];let r,i,s,l,n;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,l=e.length-1;s<l;)n=s+l>>1,c[e[n]]<t?s=n+1:l=n;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,l=e[s-1];s-- >0;)e[s]=l,l=a[l];return e}function o7(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:o7(a)}const tt=c=>c.__isTeleport,s1=Symbol.for("v-fgt"),p4=Symbol.for("v-txt"),P2=Symbol.for("v-cmt"),I3=Symbol.for("v-stc"),Q2=[];let w1=null;function a1(c=!1){Q2.push(w1=c?null:[])}function mt(){Q2.pop(),w1=Q2[Q2.length-1]||null}let l3=1;function _0(c){l3+=c}function t7(c){return c.dynamicChildren=l3>0?w1||k2:null,mt(),l3>0&&w1&&w1.push(c),c}function i1(c,a,e,r,i,s){return t7(h(c,a,e,r,i,s,!0))}function zt(c,a,e,r,i){return t7(B(c,a,e,r,i,!0))}function J3(c){return c?c.__v_isVNode===!0:!1}function E2(c,a){return c.type===a.type&&c.key===a.key}const m7=({key:c})=>c??null,j3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?l1(c)||C1(c)||D(c)?{i:o1,r:c,k:a,f:!!e}:c:null);function h(c,a=null,e=null,r=0,i=null,s=c===s1?0:1,l=!1,n=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&m7(a),ref:a&&j3(a),scopeId:z4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:o1};return n?(W6(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=l1(e)?8:16),l3>0&&!l&&w1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&w1.push(f),f}const B=vt;function vt(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===No)&&(c=P2),J3(c)){const n=_2(c,a,!0);return e&&W6(n,e),l3>0&&!s&&w1&&(n.shapeFlag&6?w1[w1.indexOf(c)]=n:w1.push(n)),n.patchFlag|=-2,n}if(bt(c)&&(c=c.__vccOpts),a){a=ht(a);let{class:n,style:f}=a;n&&!l1(n)&&(a.class=_6(n)),Q(f)&&(R5(f)&&!T(f)&&(f=t1({},f)),a.style=P6(f))}const l=l1(c)?1:So(c)?128:tt(c)?64:Q(c)?4:D(c)?2:0;return h(c,a,e,r,i,l,s,!0)}function ht(c){return c?R5(c)||e7(c)?t1({},c):c:null}function _2(c,a,e=!1,r=!1){const{props:i,ref:s,patchFlag:l,children:n,transition:f}=c,t=a?Ht(i||{},a):i,m={__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&m7(t),ref:a&&a.ref?e&&s?T(s)?s.concat(j3(a)):[s,j3(a)]:j3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==s1?l===-1?16:l|16:l,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:f,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&_2(c.ssContent),ssFallback:c.ssFallback&&_2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return f&&r&&(m.transition=f.clone(m)),m}function y1(c=" ",a=0){return B(p4,null,c,a)}function G6(c,a){const e=B(I3,null,c);return e.staticCount=a,e}function B1(c){return c==null||typeof c=="boolean"?B(P2):T(c)?B(s1,null,c.slice()):typeof c=="object"?c2(c):B(p4,null,String(c))}function c2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:_2(c)}function W6(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(T(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),W6(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!e7(a)?a._ctx=o1:i===3&&o1&&(o1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else D(a)?(a={default:a,_ctx:o1},e=32):(a=String(a),r&64?(e=16,a=[y1(a)]):e=8);c.children=a,c.shapeFlag|=e}function Ht(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=_6([a.class,r.class]));else if(i==="style")a.style=P6([a.style,r.style]);else if(s4(i)){const s=a[i],l=r[i];l&&s!==l&&!(T(s)&&s.includes(l))&&(a[i]=s?[].concat(s,l):l)}else i!==""&&(a[i]=r[i])}return a}function F1(c,a,e,r=null){P1(c,a,7,[e,r])}const ut=Q5();let pt=0;function Vt(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||ut,s={uid:pt++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:i7(r,i),emitsOptions:j5(r,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Mo.bind(null,s),c.ce&&c.ce(s),s}let v1=null,Q3,H6;{const c=L5(),a=(e,r)=>{let i;return(i=c[e])||(i=c[e]=[]),i.push(r),s=>{i.length>1?i.forEach(l=>l(s)):i[0](s)}};Q3=a("__VUE_INSTANCE_SETTERS__",e=>v1=e),H6=a("__VUE_SSR_SETTERS__",e=>V4=e)}const z3=c=>{const a=v1;return Q3(c),c.scope.on(),()=>{c.scope.off(),Q3(a)}},T0=()=>{v1&&v1.scope.off(),Q3(null)};function z7(c){return c.vnode.shapeFlag&4}let V4=!1;function Mt(c,a=!1){a&&H6(a);const{props:e,children:r}=c.vnode,i=z7(c);at(c,e,i,a),it(c,r);const s=i?dt(c,a):void 0;return a&&H6(!1),s}function dt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,Go);const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Lt(c):null,s=z3(c);f2();const l=r2(r,c,0,[c.props,i]);if(o2(),s(),V5(l)){if(l.then(T0,T0),a)return l.then(n=>{F0(c,n,a)}).catch(n=>{t4(n,c,0)});c.asyncDep=l}else F0(c,l,a)}else v7(c,a)}function F0(c,a,e){D(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:Q(a)&&(c.setupState=E5(a)),v7(c,e)}let B0;function v7(c,a,e){const r=c.type;if(!c.render){if(!a&&B0&&!r.render){const i=r.template||I6(c).template;if(i){const{isCustomElement:s,compilerOptions:l}=c.appContext.config,{delimiters:n,compilerOptions:f}=r,t=t1(t1({isCustomElement:s,delimiters:n},l),f);r.render=B0(i,t)}}c.render=r.render||x1}{const i=z3(c);f2();try{Wo(c)}finally{o2(),i()}}}const Ct={get(c,a){return d1(c,"get",""),c[a]}};function Lt(c){const a=e=>{c.exposed=e||{}};return{attrs:new Proxy(c.attrs,Ct),slots:c.slots,emit:c.emit,expose:a}}function M4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(E5(fo(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in X2)return X2[e](c)},has(a,e){return e in a||e in X2}}))}function gt(c,a=!0){return D(c)?c.displayName||c.name:c.name||a&&c.__name}function bt(c){return D(c)&&"__vccOpts"in c}const h2=(c,a)=>oo(c,a,V4);function xt(c,a,e){const r=arguments.length;return r===2?Q(a)&&!T(a)?J3(a)?B(c,null,[a]):B(c,a):B(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&J3(e)&&(e=[e]),B(c,a,e))}const Nt="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kt="http://www.w3.org/2000/svg",St="http://www.w3.org/1998/Math/MathML",a2=typeof document<"u"?document:null,R0=a2&&a2.createElement("template"),wt={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a==="svg"?a2.createElementNS(kt,c):a==="mathml"?a2.createElementNS(St,c):a2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>a2.createTextNode(c),createComment:c=>a2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>a2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const l=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{R0.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const n=R0.content;if(r==="svg"||r==="mathml"){const f=n.firstChild;for(;f.firstChild;)n.appendChild(f.firstChild);n.removeChild(f)}a.insertBefore(n,e)}return[l?l.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},yt=Symbol("_vtc");function At(c,a,e){const r=c[yt];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const c4=Symbol("_vod"),h7=Symbol("_vsh"),X4={beforeMount(c,{value:a},{transition:e}){c[c4]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):O2(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),O2(c,!0),r.enter(c)):r.leave(c,()=>{O2(c,!1)}):O2(c,a))},beforeUnmount(c,{value:a}){O2(c,a)}};function O2(c,a){c.style.display=a?c[c4]:"none",c[h7]=!a}const Pt=Symbol(""),_t=/(^|;)\s*display\s*:/;function Tt(c,a,e){const r=c.style,i=l1(e);let s=!1;if(e&&!i){if(a)if(l1(a))for(const l of a.split(";")){const n=l.slice(0,l.indexOf(":")).trim();e[n]==null&&G3(r,n,"")}else for(const l in a)e[l]==null&&G3(r,l,"");for(const l in e)l==="display"&&(s=!0),G3(r,l,e[l])}else if(i){if(a!==e){const l=r[Pt];l&&(e+=";"+l),r.cssText=e,s=_t.test(e)}}else a&&c.removeAttribute("style");c4 in c&&(c[c4]=s?r.display:"",c[h7]&&(r.display="none"))}const D0=/\s*!important$/;function G3(c,a,e){if(T(e))e.forEach(r=>G3(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Ft(c,a);D0.test(e)?c.setProperty(F2(r),e.replace(D0,""),"important"):c[r]=e}}const q0=["Webkit","Moz","ms"],J4={};function Ft(c,a){const e=J4[a];if(e)return e;let r=q1(a);if(r!=="filter"&&r in c)return J4[a]=r;r=f4(r);for(let i=0;i<q0.length;i++){const s=q0[i]+r;if(s in c)return J4[a]=s}return a}const E0="http://www.w3.org/1999/xlink";function Bt(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(E0,a.slice(6,a.length)):c.setAttributeNS(E0,a,e);else{const s=Df(a);e==null||s&&!g5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Rt(c,a,e,r,i,s,l){if(a==="innerHTML"||a==="textContent"){r&&l(r,i,s),c[a]=e??"";return}const n=c.tagName;if(a==="value"&&n!=="PROGRESS"&&!n.includes("-")){const t=n==="OPTION"?c.getAttribute("value")||"":c.value,m=e??"";(t!==m||!("_value"in c))&&(c.value=m),e==null&&c.removeAttribute(a),c._value=e;return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=g5(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function Dt(c,a,e,r){c.addEventListener(a,e,r)}function qt(c,a,e,r){c.removeEventListener(a,e,r)}const O0=Symbol("_vei");function Et(c,a,e,r,i=null){const s=c[O0]||(c[O0]={}),l=s[a];if(r&&l)l.value=r;else{const[n,f]=Ot(a);if(r){const t=s[a]=It(r,i);Dt(c,n,t,f)}else l&&(qt(c,n,l,f),s[a]=void 0)}}const $0=/(?:Once|Passive|Capture)$/;function Ot(c){let a;if($0.test(c)){a={};let r;for(;r=c.match($0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):F2(c.slice(2)),a]}let Q4=0;const $t=Promise.resolve(),Ut=()=>Q4||($t.then(()=>Q4=0),Q4=Date.now());function It(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;P1(jt(r,e.value),a,5,[r])};return e.value=c,e.attached=Ut(),e}function jt(c,a){if(T(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const U0=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Gt=(c,a,e,r,i,s,l,n,f)=>{const t=i==="svg";a==="class"?At(c,r,t):a==="style"?Tt(c,e,r):s4(a)?w6(a)||Et(c,a,e,r,l):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Wt(c,a,r,t))?Rt(c,a,r,s,l,n,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Bt(c,a,r,t))};function Wt(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&U0(a)&&D(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const i=c.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return U0(a)&&l1(e)?!1:a in c}const Zt=t1({patchProp:Gt},wt);let I0;function Kt(){return I0||(I0=lt(Zt))}const Yt=(...c)=>{const a=Kt().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Jt(r);if(!i)return;const s=a._component;!D(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const l=e(i,!1,Xt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},a};function Xt(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function Jt(c){return l1(c)?document.querySelector(c):c}const Z1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},Qt={},cm={class:"navbar p-2 pr-4 w-fit rounded-br-3xl bg-slate-900 z-20"};function am(c,a){return a1(),i1("ul",cm,[A2(c.$slots,"default",{},void 0,!0)])}const em=Z1(Qt,[["render",am],["__scopeId","data-v-35e4a2c9"]]),rm={},im={class:"m-1 py-1 px-2 bg-slate-900 text-white rounded-sm hover:bg-slate-200 hover:text-black"};function sm(c,a){return a1(),i1("button",im,[A2(c.$slots,"default")])}const $2=Z1(rm,[["render",sm]]),lm={},nm=c=>(v4("data-v-471a0158"),c=c(),h4(),c),fm={class:"footer bg-black w-full p-2 mt-2 text-center"},om=nm(()=>h("p",null,"© 2024 - Lander Jacobs",-1)),tm=[om];function mm(c,a){return a1(),i1("div",fm,tm)}const zm=Z1(lm,[["render",mm],["__scopeId","data-v-471a0158"]]),vm={key:0,class:"bg-slate-950 text-white customDistance rounded-lg"},hm={key:1,class:"bg-slate-200 text-black customDistance rounded-lg"},Hm={__name:"BackgroundSection",props:["dark"],setup(c){const a=c;return(e,r)=>a.dark?(a1(),i1("div",vm,[A2(e.$slots,"default",{},void 0,!0)])):(a1(),i1("div",hm,[A2(e.$slots,"default",{},void 0,!0)]))}},U2=Z1(Hm,[["__scopeId","data-v-05436243"]]),Z6=c=>(v4("data-v-7f4e591d"),c=c(),h4(),c),um={class:"area flex flex-col place-content-center items-center"},pm=Z6(()=>h("p",{class:"text-6xl sm:text-8xl lg:text-9xl font-bold mb-10"},"Welkom",-1)),Vm=Z6(()=>h("div",{class:"flex flex-rows justify-center"},[h("p",{class:"mx-20 2xl:w-6/12"},"Ik ben Lander Jacobs, student op de Thomas More-hogeschool. Met dit portfolio hoop ik aan te tonen wat ik kan, waar mijn capaciteiten liggen en wat ik heb geleerd tijdens mijn studies.")],-1)),Mm=Z6(()=>h("ul",{class:"circles"},[h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li")],-1)),dm={__name:"WelcomeSection",emits:["clickMore"],setup(c,{emit:a}){const e=a;function r(){e("clickMore")}return(i,s)=>(a1(),i1("div",um,[h("div",{class:"customHeight z-10 place-content-center text-center"},[pm,Vm,h("button",{onClick:r,class:"transition-colors bg-white text-black hover:bg-black hover:text-white font-semibold border-2 border-gray-800 rounded shadow py-2 px-5 mt-5 w-max"}," Meer over mij ")]),Mm]))}},Cm=Z1(dm,[["__scopeId","data-v-7f4e591d"]]),Lm="/images/profielfoto_professioneel.jpg",gm="/images/icons/c-sharp_logo.png",bm="/images/icons/java_logo.png",xm="/images/icons/vue_logo.png",Nm="/images/icons/unity_logo.png",km="/images/icons/php_logo.png",Sm="/images/icons/docker_logo.png",wm="/images/icons/flutter_logo.png",ym="/images/icons/python_logo.png",Am="/images/icons/html_logo.png",Pm="/images/icons/css_logo.png",_m="/images/icons/javascript_logo.png",Tm="/images/icons/sql_logo.png",G2={__name:"DownloadButton",props:["pdfPath","dark"],setup(c){const a=c;function e(){const r=document.createElement("a");r.href=a.pdfPath,r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)}return(r,i)=>c.dark?(a1(),i1("button",{key:0,onClick:e,class:"transition-colors bg-black text-white hover:bg-gray-100 hover:text-black font-semibold border-2 border-gray-800 rounded shadow py-2 px-4 w-full"},[A2(r.$slots,"default")])):(a1(),i1("button",{key:1,onClick:e,class:"transition-colors bg-slate-100 text-black hover:bg-black hover:text-white font-semibold border-2 border-gray-800 rounded shadow py-2 px-4 w-full"},[A2(r.$slots,"default")]))}},I=c=>(v4("data-v-d6545ca4"),c=c(),h4(),c),Fm=I(()=>h("div",{class:"text-center"},[h("h1",{class:"text-5xl bg-slate-800 text-white p-5 mb-7 rounded"},"Over mij")],-1)),Bm={class:"grid sm:grid-flow-auto sm:auto-rows-auto xl:grid-flow-col xl:auto-cols-auto gap-4"},Rm=I(()=>h("div",{class:"place-content-center"},[h("img",{class:"max-w-[18rem] mx-auto rounded-xl",src:Lm})],-1)),Dm={class:"place-content-center"},qm={class:"grid auto-rows-auto grid-flow-auto gap-4 lg:pl-10"},Em=G6('<div class="" data-v-d6545ca4><p class="bg-slate-800 text-white text-lg font-bold mb-2 text-center" data-v-d6545ca4>Profiel</p><p data-v-d6545ca4>Ik ben <b data-v-d6545ca4>Lander Jacobs</b>, momenteel student aan de Thomas More hogeschool te Geel. Na het middelbaar ben ik na enkele keuzes beland bij de <b data-v-d6545ca4>graduaatsopleiding programmeren</b>. Door deze opleiding kreeg ik een basis in het programmeren. Doordat mijn passie voor development was aangewakkerd, besloot ik na mijn graduaatsopleiding verder te studeren. Als vervolgopleiding koos ik dan voor de <b data-v-d6545ca4>bacheloropleiding Toegepaste Informatica</b>. Hier heb ik mijn kennis omtrent <b data-v-d6545ca4>Application Development</b> kunnen uitdiepen en verbreden.</p><br data-v-d6545ca4><p data-v-d6545ca4>Als ik een eigenschap van mezelf naar voor zou moeten zetten, zou ik zeggen dat ik <b data-v-d6545ca4>creatief</b> uit de hoek kan komen. Ik kan plezier vinden in het verhelpen van problemen met behulp van de technologiën die ik al ken. Daarnaast <b data-v-d6545ca4>leer ik ook graag bij</b> om zo problemen die ik al eens ben tegengekomen in de toekomst anders te kunnen aanpakken.</p></div><p class="bg-slate-800 text-white text-lg font-bold mb-2 text-center" data-v-d6545ca4>Studieloopbaan</p>',2),Om={class:"grid sm:grid-flow-auto sm:auto-rows-auto xl:grid-flow-col xl:grid-cols-2 gap-4 px-10 text-center"},$m={class:"hover:scale-105 place-content-center"},Um=I(()=>h("h1",{class:"text-2xl font-bold"},"Graduaat Programmeren",-1)),Im=I(()=>h("p",null,"2020-2022",-1)),jm={class:"hover:scale-105 place-content-center"},Gm=I(()=>h("h1",{class:"text-2xl font-bold"},"Bachelor Toegepaste Informatica",-1)),Wm=I(()=>h("p",null,"2022-2024",-1)),Zm=I(()=>h("p",{class:"bg-slate-800 text-white text-lg font-bold my-2 text-center"},"Technische vaardigheden",-1)),Km={class:"flex flex-row flex-wrap gap-5 justify-center text-black"},Ym=["onMouseover"],Xm=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:gm},null,-1)),Jm=I(()=>h("p",null,"C#",-1)),Qm=[Xm,Jm],cz=["onMouseover"],az=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:bm},null,-1)),ez=I(()=>h("p",null,"Java",-1)),rz=[az,ez],iz=["onMouseover"],sz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:xm},null,-1)),lz=I(()=>h("p",null,"Vue",-1)),nz=[sz,lz],fz=["onMouseover"],oz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Nm},null,-1)),tz=I(()=>h("p",null,"Unity",-1)),mz=[oz,tz],zz=["onMouseover"],vz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:km},null,-1)),hz=I(()=>h("p",null,"PHP",-1)),Hz=[vz,hz],uz=["onMouseover"],pz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Sm},null,-1)),Vz=I(()=>h("p",null,"Docker",-1)),Mz=[pz,Vz],dz=["onMouseover"],Cz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:wm},null,-1)),Lz=I(()=>h("p",null,"Flutter",-1)),gz=[Cz,Lz],bz=["onMouseover"],xz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:ym},null,-1)),Nz=I(()=>h("p",null,"Python",-1)),kz=[xz,Nz],Sz=["onMouseover"],wz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Am},null,-1)),yz=I(()=>h("p",null,"HTML",-1)),Az=[wz,yz],Pz=["onMouseover"],_z=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Pm},null,-1)),Tz=I(()=>h("p",null,"CSS",-1)),Fz=[_z,Tz],Bz=["onMouseover"],Rz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:_m},null,-1)),Dz=I(()=>h("p",null,"Javascript",-1)),qz=[Rz,Dz],Ez=["onMouseover"],Oz=I(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:Tm},null,-1)),$z=I(()=>h("p",null,"SQL",-1)),Uz=[Oz,$z],Iz=I(()=>h("hr",{class:"bg-slate-800 h-1 rounded-full my-4 mx-10 xl:mx-52"},null,-1)),jz={class:"text-center flex flex-col justify-center"},Gz={class:"flex flex-rows justify-center"},Wz={class:"font-semibold mb-2 px-5 py-0.5 text-wrap bg-slate-800 text-white w-max"},Zz={key:0},Kz={key:1},Yz=G6('<p class="bg-slate-800 text-white text-lg font-bold my-2 text-center" data-v-d6545ca4>Professionele vaardigheden</p><div class="mb-5 flex flex-row flex-wrap gap-5 justify-center text-black" data-v-d6545ca4><div class="md:mx-20 text-center w-full xl:w-4/12" data-v-d6545ca4><p class="my-2 text-xl md:text-2xl font-semibold" data-v-d6545ca4>Betrouwbaar</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-d6545ca4><div class="bg-slate-900 h-5 rounded-full" style="width:100%;" data-v-d6545ca4></div></div></div><div class="md:mx-20 text-center w-full xl:w-4/12" data-v-d6545ca4><p class="my-2 text-xl md:text-2xl font-semibold" data-v-d6545ca4>Teamwerk</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-d6545ca4><div class="bg-slate-900 h-5 rounded-full" style="width:95%;" data-v-d6545ca4></div></div></div><div class="md:mx-20 text-center w-full xl:w-4/12" data-v-d6545ca4><p class="my-2 text-xl md:text-2xl font-semibold" data-v-d6545ca4>Zelfstandig</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-d6545ca4><div class="bg-slate-900 h-5 rounded-full" style="width:80%;" data-v-d6545ca4></div></div></div><div class="md:mx-20 text-center w-full xl:w-4/12" data-v-d6545ca4><p class="my-2 text-xl md:text-2xl font-semibold" data-v-d6545ca4>Flexibel</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-d6545ca4><div class="bg-slate-900 h-5 rounded-full" style="width:80%;" data-v-d6545ca4></div></div></div><div class="md:mx-20 text-center w-full xl:w-4/12" data-v-d6545ca4><p class="my-2 text-xl md:text-2xl font-semibold" data-v-d6545ca4>Nauwkeurig</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-d6545ca4><div class="bg-slate-900 h-5 rounded-full" style="width:75%;" data-v-d6545ca4></div></div></div><div class="md:mx-20 text-center w-full xl:w-4/12" data-v-d6545ca4><p class="my-2 text-xl md:text-2xl font-semibold" data-v-d6545ca4>Besluitvaardig</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-d6545ca4><div class="bg-slate-900 h-5 rounded-full" style="width:65%;" data-v-d6545ca4></div></div></div></div>',2),Xz={class:"mt-5"},Jz={__name:"AboutMe",setup(c){let a=S1("C#"),e=S1("C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal");S1(null);function r(i,s){e.value=s,a.value=i}return(i,s)=>{const l=H4("font-awesome-icon");return a1(),i1(s1,null,[Fm,h("div",Bm,[Rm,h("div",Dm,[h("div",qm,[Em,h("div",Om,[h("div",$m,[Um,B(l,{icon:["fas","user-graduate"],size:"4x",class:"my-2"}),Im]),h("div",jm,[Gm,B(l,{icon:["fas","graduation-cap"],size:"4x",class:"my-2"}),Wm])])])])]),Zm,h("div",null,[h("div",Km,[h("div",{onMouseover:()=>r("C#","C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal"),onClick:s[0]||(s[0]=()=>r("C#","C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal")),class:"transition text-center hover:scale-110"},Qm,40,Ym),h("div",{onMouseover:()=>r("Java","Tijdens mijn traject in de professionele bachelor Toegepaste Informatica leerde ik ook werken met Java. Ik heb hier nog niet zoveel ervaring mee, maar zou deze zeker wel graag opdoen."),onClick:s[1]||(s[1]=()=>r("Java","Tijdens mijn traject in de professionele bachelor Toegepaste Informatica leerde ik ook werken met Java. Ik heb hier nog niet zoveel ervaring mee, maar zou deze zeker wel graag opdoen.")),class:"transition text-center hover:scale-110"},rz,40,cz),h("div",{onMouseover:()=>r("Vue","Tijdens een zomerproject met enkele medestudenten kozen we ervoor om Vue te gebruiken. Zo leerden we een nieuw framework dat we niet in onze opleiding kregen. Dit portfolio is ook gemaakt met behulp van Vue."),onClick:s[2]||(s[2]=()=>r("Vue","Tijdens een zomerproject met enkele medestudenten kozen we ervoor om Vue te gebruiken. Zo leerden we een nieuw framework dat we niet in onze opleiding kregen. Dit portfolio is ook gemaakt met behulp van Vue.")),class:"transition text-center hover:scale-110"},nz,40,iz),h("div",{onMouseover:()=>r("Unity","Tijdens mijn stage werkte ik gedurende 3 maanden aan een applicatie met Unity. Verder maakten we voor de scripts gebruik van C#."),onClick:s[3]||(s[3]=()=>r("Unity","Tijdens mijn stage werkte ik gedurende 3 maanden aan een applicatie met Unity. Verder maakten we voor de scripts gebruik van C#.")),class:"transition text-center hover:scale-110"},mz,40,fz),h("div",{onMouseover:()=>r("PHP",'Ik leerde tijdens mijn opleiding ook werken met PHP. Voor het OPO "PHP Project" maakten we een applicatie in het PHP-framework Laravel.'),onClick:s[4]||(s[4]=()=>r("PHP",'Ik leerde tijdens mijn opleiding ook werken met PHP. Voor het OPO "PHP Project" maakten we een applicatie in het PHP-framework Laravel.')),class:"transition text-center hover:scale-110"},Hz,40,zz),h("div",{onMouseover:()=>r("Docker","Ik heb docker een aantal keer gebruikt voor kleinere opdrachten. Daarnaast heb ik het ook gebruikt voor een groter project dat diende als samenkomstpunt tussen verschillende IT-opleidingen."),onClick:s[5]||(s[5]=()=>r("Docker","Ik heb docker een aantal keer gebruikt voor kleinere opdrachten. Daarnaast heb ik het ook gebruikt voor een groter project dat diende als samenkomstpunt tussen verschillende IT-opleidingen.")),class:"transition text-center hover:scale-110"},Mz,40,uz),h("div",{onMouseover:()=>r("Flutter",'Voor het OPO "Augmented Reality and Mobile App Development" maakte ik samen met een andere student een mobiele applicatie. Voor deze applicatie heb ik gewerkt aan de frontend met Flutter.'),onClick:s[6]||(s[6]=()=>r("Flutter",'Voor het OPO "Augmented Reality and Mobile App Development" maakte ik samen met een andere student een mobiele applicatie. Voor deze applicatie heb ik gewerkt aan de frontend met Flutter.')),class:"transition text-center hover:scale-110"},gz,40,dz),h("div",{onMouseover:()=>r("Python","Python is een taal die ik voornamelijk heb gebruikt in het verband met het verwerken van data, webscrapers en AI-gerelateerde projecten."),onClick:s[7]||(s[7]=()=>r("Python","Python is een taal die ik voornamelijk heb gebruikt in het verband met het verwerken van data, webscrapers en AI-gerelateerde projecten.")),class:"transition text-center hover:scale-110"},kz,40,bz),h("div",{onMouseover:()=>r("HTML","Voor het ontwerpen van webpagina's maak ik uiteraard gebruik van HTML. Dit leerde ik ook tijdens mijn graduaatsopleiding."),onClick:s[8]||(s[8]=()=>r("HTML","Voor het ontwerpen van webpagina's maak ik uiteraard gebruik van HTML. Dit leerde ik ook tijdens mijn graduaatsopleiding.")),class:"transition text-center hover:scale-110"},Az,40,Sz),h("div",{onMouseover:()=>r("CSS","Het stylen van webpagina's doe ik uiteraard via CSS. Soms kies ik er ook voor om libraries of frameworks te gebruiken die custom styling aanbieden met behulp van CSS. Een voorbeeld hiervan is de Tailwind-library."),onClick:s[9]||(s[9]=()=>r("CSS","Het stylen van webpagina's doe ik uiteraard via CSS. Soms kies ik er ook voor om libraries of frameworks te gebruiken die custom styling aanbieden met behulp van CSS. Een voorbeeld hiervan is de Tailwind-library.")),class:"transition text-center hover:scale-110"},Fz,40,Pz),h("div",{onMouseover:()=>r("Javascript","Voor het werken op webpagina's gebruik ik ook javascript. Deze taal gebruik ik ook wanneer ik werk met Vue."),onClick:s[10]||(s[10]=()=>r("Javascript","Voor het werken op webpagina's gebruik ik ook javascript. Deze taal gebruik ik ook wanneer ik werk met Vue.")),class:"transition text-center hover:scale-110"},qz,40,Bz),h("div",{onMouseover:()=>r("SQL","Tijdens de graduaatsopleiding heb ik vaak gewerkt met SQL voor het aanmaken van databases. Later gebruikte ik vaker de Code-First approach voor het werken met een database. Ik gebruik nog wel van tijd tot tijd SQL om de inhoud van mijn databases na te kijken."),onClick:s[11]||(s[11]=()=>r("SQL","Tijdens de graduaatsopleiding heb ik vaak gewerkt met SQL voor het aanmaken van databases. Later gebruikte ik vaker de Code-First approach voor het werken met een database. Ik gebruik nog wel van tijd tot tijd SQL om de inhoud van mijn databases na te kijken.")),class:"transition text-center hover:scale-110"},Uz,40,Ez)]),Iz,h("div",jz,[h("div",Gz,[h("p",Wz,"Mijn ervaring met "+J1(u1(a)),1)]),u1(e)!==""?(a1(),i1("p",Zz,J1(u1(e)),1)):(a1(),i1("p",Kz,"Als u meer wilt weten over de technologiën die ik ken kunt u over de gewenste technologie hoveren."))])]),Yz,h("div",Xz,[B(G2,{dark:!0,pdfPath:"/documents/CV_LanderJacobs.pdf"},{default:m1(()=>[y1("Bekijk CV")]),_:1})])],64)}}},Qz=Z1(Jz,[["__scopeId","data-v-d6545ca4"]]),cv="/images/mobilab_logo.png",av="/images/hp_omnicept.png",ev=G6('<div class="text-center"><h1 class="text-5xl bg-slate-200 text-black p-5 mb-7 rounded">Stage</h1></div><div class="flex flex-row flex-wrap gap-5 justify-center"><div class="place-content-center justify-center"><img class="max-w-full md:max-w-sm md:m-2" src="'+cv+'"></div><div class="sm:w-12/12 2xl:w-4/12 text-center"><p class="bg-slate-200 text-black text-lg font-bold mb-2">Ontwikkeling van een VR serious game</p><p>Ik deed mijn stage bij <b>Mobilab &amp; Care</b>. Dit is een onderzoekslab dat zich inzet voor een inclusievere samenleving. Hun doel is om de levenskwaliteit van mensen te verbeteren. Een van de onderwerpen waar ze mee bezig zijn is relaxatie verkrijgen door middel van <b>VR</b>.</p><br><p>Voor mijn stageopdracht heb ik samen met een andere stagiaire een VR-applicatie gemaakt. Deze applicatie zorgt ervoor dat men in een rustige omgeving wordt geplaatst. Daar kan men enkele activiteiten uitvoeren om tot rust te komen. Daarbij werkten we ook de <b>HP Reverb G2 Omnicept Edition</b>, dit is een <b>VR-headset</b> die <b>biologische feedback</b> kan geven over de gebruiker. Zodoende hebben we de data die we uit de headset konden verkrijgen, gebruikt om de VR-applicatie te laten reageren op de gemoedsrust van de gebruiker.</p><br><p>Hieronder vindt u de documenten voor mijn stage. Het plan van aanpak bevat meer uitleg over de stageopdracht en Mobilab zelf. Verder heb ik ook een realisatieverslag gemaakt van wat ik heb gerealiseerd tijdens mijn stage. Als laatste voerde ik ook nog een reflectie uit van mijn werk tijdens deze stage. Tijdens de stage hield ik ook een logboek bij met mijn dagdagelijks activiteiten.</p></div><div class="place-content-center justify-center"><img class="sm:max-w-full sm:max-w-md" src="'+av+'"></div></div>',2),rv={class:"mt-3 flex flex-row flex-wrap justify-center"},iv={class:"mt-2 px-4 w-full lg:w-3/12"},sv={class:"mt-2 px-4 w-full lg:w-3/12"},lv={class:"mt-2 px-4 w-full lg:w-3/12"},nv={class:"mt-2 px-4 w-full lg:w-3/12"},fv={__name:"Internship",setup(c){return(a,e)=>(a1(),i1(s1,null,[ev,h("div",rv,[h("div",iv,[B(G2,{dark:!1,pdfPath:"/documents/Plan_van_aanpak.pdf"},{default:m1(()=>[y1("Plan van aanpak")]),_:1})]),h("div",sv,[B(G2,{dark:!1,pdfPath:"/documents/Realisatieverslag.pdf"},{default:m1(()=>[y1("Realisatie verslag")]),_:1})]),h("div",lv,[B(G2,{dark:!1,pdfPath:"/documents/Reflectieverslag.pdf"},{default:m1(()=>[y1("Reflectie verslag")]),_:1})]),h("div",nv,[B(G2,{dark:!1,pdfPath:"/documents/Logboek.pdf"},{default:m1(()=>[y1("Logboek")]),_:1})])])],64))}};class I2{constructor(a,e,r,i,s,l,n,f){this.title=a,this.imgLink=e,this.tags=r,this.smallText=i,this.middleText=s,this.bigText=l,this.githubLink=n,this.youtubeLink=f}}const ov=S1([new I2("Project 4.0: Choochoovision","/images/project_images/choochoovision.png",["Angular","Python","Java","Tailwind","Docker"],"Het OPO Project 4.0 vereist dat verschillende IT-richtingen samenwerken om voor een echte klant een project te maken. De groep waarin ik heb mogen werken bestaat uit een AI-student, twee Cloud en Cyber Security-studenten en twee Application Development studenten. Als opdracht maakten we voor RideOnTrack een applicatie waarin kon gelezen worden waar er problemen zijn op de treinsporen. Hiervoor werd een AI-model gemaakt dat de camerabeelden van de trein onderzocht en probeerde op te merken waar iets op het treinspoor lag. Dit hele project is een proof-of-concept en wordt zodoende nog door RideOnTrack bekeken of het uiteindelijk gebruikt zal worden.",["Mijn onderdeel voor deze opdracht was om de data van het AI-model door te sturen naar onze Java-backend, en uiteindelijk naar de Angular-frontend. Verder heb ik ook nog van tijd tot tijd mijn medestudent bijgestaan die bezig was met de backend en de frontend. Dit bijstaan was voornamelijk was voornamelijk op het vlak van enkele bugfixes of kleine problemen die soms naar voor kwamen.","De code die ik heb geschreven om de data van het AI-model door te sturen, was geschreven in Python. Dit was omdat de AI-modellen gebruik maakten van python-libraries om door de camerabeelden te gaan. Door python te gebruiken kon dit dan ook makkelijk in een docker-container worden geplaatst. Het gebruik van de docker-container ensceneerde dan de computer die op de trein staat, waar alle opnames van de treinsporen worden opgeslagen en dan ook de AI-modellen die daarmee zullen werken.","We werkten met twee AI-modellen die twee verschillende onderwerpen probeerden te detecteren. Daarom zorgde mijn code er ook voor dat de video die we gebruikten tijdens dit proof-of-concept deze twee modellen had gebruikt voordat de data wordt verstuurd. De data moest ook nog worden gefilterd om ervoor te zorgen dat er niet te veel wordt doorgestuurd. De AI-modellen merkten sommige zaken meerdere keren op. Als er geen filtering zou worden uitgevoerd, zou er bijvoorbeeld 20 afbeeldingen van eenzelfde probleem op de spoorwegen kunnen verstuurd worden.","Als laatste hebben we ook nog gebruik gemaakt van een externe API om locaties lang treinsporen te gebruiken. De video’s die we van RideOnTrack kregen gaven ons geen toegang tot de locaties waar ze werden opgenomen wegens privacy-redenen. Het gebruik van locaties van willekeurige treinsporen op de Belgische spoorwegen was voornamelijk om het proof-of-concept realistischer te laten overkomen."],"Tijdens deze opdracht heb ik voornamelijk leren werken met AI-modellen. Dit is ook door het feit dat we slechts een AI-student hadden die 2 modellen heeft gemaakt op een vrij korte periode. Om de last hiervan te ontnemen ben ik dan voornamelijk bezig geweest met de data van de modellen klaar te maken voor de backend. Ik heb ook de kans gehad om wat uitgebreidere dingen te mogen doen met Python. Het werken met Docker-containers was ook zeker nog interessant.","","https://www.youtube.com/watch?v=YxkGi11wp9Y"),new I2("PlaylistPortal","/images/project_images/playlistportal.png",["Vue","Tailwind","Javascript"],"Tijdens de zomer voor ons laatste jaar heb ik samen met 3 andere studenten een project gemaakt. Het doel van dit project was voornamelijk om een nieuwe taal te leren die we niet zouden zien tijdens onze studies. Zodoende kozen we voor Vue, als styling kozen we voor iets wat ons stuk bekender was: Tailwind. Omdat we niet zeker waren wat we zouden kunnen maken, besloten we de functionaliteiten van Spotify na te maken in een nieuwe applicatie. We doopten dit “PlaylistPortal”. Zoals te merken aan de naam managen we hierbinnen de afspeellijsten die iemand heeft. Verder kunnen er afspeellijsten worden bijgemaakt, nummers in een lijst worden toegevoegd of verwijdert, nummers worden afgespeeld, … . Hierbij zouden we gebruik maken van de Spotify-API en de Youtube-API, zo konden we ook uitbreiden met extra functionaliteiten zoals het tonen van Youtube-video’s.",["Tijdens dit project ben ik bezig geweest met de afspeelfunctie binnen de afspeellijsten. Zo zorgde ik voor het afspelen van een nummer, maar ook voor het afspelen van een hele lijst. Extra functionaliteiten waar ik aan werkte waren ook een manier om een lijst te shuffelen zodat nummers elke keer in een andere volgorde konden beluisterd worden. Die functionaliteit liet ik samenwerken met een andere functionaliteit waar ik aan werkte: het loopen van een huidig spelend nummer of een huidig afspelende lijst. Later werkte ik ook aan het toevoegen en verwijderen van afspeellijsten met behulp van de Youtube-API. Uiteraard deed ik ook mijn best om dit alles qua visuele stijl te laten overeenkomen met de huisstijl die we vooraf hadden overeengekomen."],"Dit project was interessant omdat het mij en mijn teamgenoten toeliet zelf de scope van de applicatie te bepalen. Ik kreeg zeker een breder zicht op wat ik kon, waar ik me in kon verbeteren en wat er mogelijk was. Dit kwam enigszins door samen te werken met oprecht gemotiveerde medestudenten en anderzijds door de vrijheid die was ontstaan door te werken buiten de grenzen van een opleiding. Vervolgens heb ik wat ik tijdens dit project heb geleerd op het vlak van Tailwind en Vue ook toegepast tijdens het werken aan het portfolio waar u zich nu bevindt.","",""),new I2("Mobile Development","/images/project_images/mobile_development.png",["Flutter","WikiTude","NodeJs","Javascript","MongoDB"],'Voor het OPO "Augmented Reality and Mobile App Development" moesten we in groepen van 2 een applicatie maken met AR-functionaliteit. Voor de AR-functionaliteit maakten we gebruik van WikiTude en voor de rest van de applicatie moesten we Flutter gebruiken. Als laatste moest deze applicatie ook data kunnen ophalen en opslaan met behulp van GET- POST- PUT- en DELETE-methoden. Ik en mijn collega besloten als onderwerp van de app te werken met hoeden. In onze applicatie kun je met AR een hoed op iemand zijn hoofd positioneren en vervolgens een review schrijven voor deze hoed.',["Tijdens dit project heb ik me bezig gehouden met het grootste deel van de Flutter-app en het opzetten en onderhouden van een API die we zelf hadden gemaakt. Mijn collega hield zich dan bezig met de AR-kant en deze samen te laten komen met de rest van de applicatie.","Als eerste maakte ik de API met behulp van NodeJS. Tijdens mijn graduaatsopleiding hadden we geleerd hoe we een API konden hosten op Netlify met behulp van NodeJS en MongoDB. Het opzetten van deze API en hiermee werken was optioneel, maar maakte het voor ons wel makkelijker om te werken aan onze applicatie.","Voor de rest werkte ik aan een inlogscherm, een overzicht van alle hoeden, een scherm om alle reviews van een hoed te zien en een scherm om reviews te bewerken. Het inlogscherm was voornamelijk zodat er een account zou gelinkt kunnen worden aan een review. Op het overzicht scherm werd per hoed berekend wat de gemiddelde rating is. Na het klikken op een hoed wordt men doorgestuurd naar het scherm met alle reviews voor de hoed. Hierbij kan men ook filteren op de eigen reviews. Een eigen review kan dan gebruikt worden om bewerkt te worden in een apart scherm of verwijdert te worden. Voor het aanmaken van de reviews moet men gebruik maken van de AR-functionaliteit die mijn collega heeft gemaakt."],"Dit project leerde me vooral te werken met Flutter. Verder heb ik ook nog eens gebruik kunnen maken van wat ik had geleerd tijdens de graduaatsopleiding. Door terug te gaan naar deze eerder vergaarde kennis, heb ik deze kunnen uitbreiden en beter kunnen gebruiken.","","https://www.youtube.com/watch?v=c5Vg62q7Fck"),new I2("Website voor fietsclub de Platte Berg","/images/project_images/platte_berg.png",["PHP","Laravel","Tailwind","HTML"],"Dit project is een opdracht vanuit de opleiding voor het OPO “PHP Project”. Hierbij werkten we samen met enkele andere studenten om een webapp te maken voor een theoretische klant. In dit geval was de klant een fietsclub die graag een website zou willen voor hun leden. Op deze website zou ingelogd moeten kunnen worden om zo verschillende faciliteiten van de club te kunnen bereiken zoals: wielerkledij, inschrijven voor ritten, enzovoorts. De website moest gemaakt worden met het PHP-framework Laravel.",["Tijdens dit project hebben ik meegewerkt aan de database die codefirst is aangemaakt. Verder hebben we deze aangemaakte database dan verbonden met de applicatie door middel van Livewire. Verder heb ik dan ook enkele pagina’s gemaakt. Deze werden gestyled door middel van Tailwind. Ook maakte ik een groot deel van de middelware die rekening moest houden met onderdelen die op de achtergrond werkten.","Tijdens dit project werkten we in een groep van 6. Door de nalatigheid van 2 van de studenten in deze groep heb ik een deel van hun werk moeten oppakken om de applicatie te laten werken. Zodoende heb ik tegen het einde van het project wat meer werk op me gekregen in vergelijking met enkele andere studenten."],"Als eerste zou ik kunnen stellen dat ik meer heb geleerd over hoe het Laravel-framework werkt. Dit was dan ook de eerste keer dat ik buiten een ander OPO om de kans heb gekregen om met PHP te werken. Dit zelfstandig werk leerde me dan ook meer over het opzoekwerk in online documentatie en welke bronnen online best te gebruiken zijn. Op het vlak van teamwerk heb ik mezelf ook een stuk flexibeler moeten opstellen om het wegvallen van enkele studenten op te kunnen vangen.","",""),new I2("Dungeon Project","/images/project_images/screenshot_dungeon_project.png",["C#",".Net Core","XML","SQL"],"Dit project is aangemaakt voor het OPO DevOps en Security. Voor de opdracht moest er een WPF-project worden gemaakt in .Net Core waarbij ook gebruik moest gemaakt worden van SQLlite. Vervolgens zou deze ook nog constant gebuild en getest worden met behulp van een CI/CD-pipeline. Nadat dit project klaar was voor de opdracht heb ik hier in mijn vrije tijd verder aan gewerkt.",["Als onderwerp besloot ik een RPG-stijl videogame te maken dat gemakkelijk kon verbreed worden door gegevens toe te voegen aan de SQLLite-database. De uitwerking van het spel was niet zeer belangrijk en het voornaamste was om de technische kant te laten werken.","Om het mezelf enigszins makkelijker te maken heb ik gebruik gemaakt van het MVVM-model om de applicatie uit te werken. De database is Code-First opgemaakt met behulp van ORM (Object-Relational-Mapping). Verder wordt de database gebruikt door middel van een Unit Of Work. De modellen voor de data worden ook beheerd met behulp van een Generic Repository.","Tijdens mijn vrije tijd heb ik dan ook verder gewerkt nadat de opdracht af was. De uitbreiding die ik er vervolgens op heb uitgevoerd zijn niet zeer indrukwekkend, maar hebben zeker nieuwe zaken bijgeleerd. Zo heb ik als grootste extra bijkomstigheid leren werken met threading binnen C#."],"Ik heb van dit project voornamelijk geleerd om zelfstandig een project op te zetten. Dit was namelijk de eerste keer dat ik op mezelf een relatief groot project was begonnen. Dit was ook een van de eerste keren dat ik binnen C# code-first werkte en met ORM. Dit project heeft me dan ook lessen meegegeven met betrekking tot datastructuur die ik vandaag de dag nog gebruik.","https://github.com/LanderJacobs/dungeon_project","")]),v3=c=>(v4("data-v-b2241e5e"),c=c(),h4(),c),tv={class:"fixed top-0 right-0 h-screen w-screen bg-black/80 place-content-center items-center flex flex-cols z-50"},mv={class:"bg-slate-200 sm:w-10/12 md:w-8/12 h-min rounded-t-lg customModalOverflow z-50"},zv={class:"text-2xl bg-black text-white py-5 mx-3 mb-1 text-center rounded-b-xl"},vv={class:"mx-5 mt-3"},hv={class:"grid sm:grid-flow-auto sm:auto-rows-auto 2xl:grid-flow-col 2xl:auto-cols-auto justify-content gap-5"},Hv={class:"place-content-center grid"},uv=["src"],pv={class:"place-content-center"},Vv=v3(()=>h("p",{class:"text-black text-lg font-bold mt-3"},"Context",-1)),Mv={class:"text-black mb-3"},dv={class:"flex-wrap"},Cv=v3(()=>h("p",{class:"text-black text-lg font-bold mt-3"},"Hoe het project verliep",-1)),Lv={class:"text-black mb-3 text-wrap"},gv=v3(()=>h("br",null,null,-1)),bv=v3(()=>h("p",{class:"text-black text-lg font-bold mt-3"},"Wat ik er uit heb geleerd",-1)),xv={class:"text-black mb-3"},Nv={class:"flex flex-cols justify-between m-2"},kv=["href"],Sv=["href"],wv=v3(()=>h("div",{class:"text-center"},[h("h1",{class:"text-5xl bg-slate-800 text-white p-5 mb-7 rounded"},"Realisaties")],-1)),yv={class:"flex flex-row flex-wrap gap-5 2xl:gap-10 justify-center"},Av=["onClick"],Pv={class:"text-white text-lg font-bold"},_v={class:"place-content-center justify-center"},Tv=["src"],Fv={class:"flex flex-rows flex-wrap mt-2"},Bv={class:"bg-slate-100 text-black font-semibold place-content-center mx-2 mt-1 px-2 py-1 rounded-3xl"},Rv={__name:"Achievements",setup(c){let a=S1(!1),e=S1({title:{type:String,default:"Project naam"}});function r(){a.value=!a.value}function i(s){e.value=s,a.value=!0}return(s,l)=>{const n=H4("font-awesome-icon");return a1(),i1(s1,null,[W4(h("div",tv,[h("div",mv,[h("p",zv,J1(u1(e).title),1),h("div",vv,[h("div",hv,[h("div",Hv,[h("img",{src:u1(e).imgLink,class:"sm:max-w-sm xl:max-w-lg border-x-4 border-y-2 border-black rounded-lg"},null,8,uv)]),h("div",pv,[Vv,h("p",Mv,J1(u1(e).smallText),1)])]),h("div",dv,[Cv,(a1(!0),i1(s1,null,Z4(u1(e).middleText,f=>(a1(),i1("p",Lv,[y1(J1(f),1),gv]))),256)),bv,h("p",xv,J1(u1(e).bigText),1)])]),h("div",Nv,[h("button",{onClick:r,class:"transition-colors bg-black text-white hover:bg-gray-100 hover:text-black font-semibold border-2 border-gray-800 rounded shadow py-2 px-4"}," Sluit modal "),W4(h("a",{href:u1(e).youtubeLink,target:"_blank",class:"bg-black text-white hover:bg-gray-100 hover:text-black border-2 border-gray-800 rounded-full size-fit p-2"},[B(n,{icon:["fab","youtube"],size:"lg"})],8,kv),[[X4,u1(e).youtubeLink!==""]]),W4(h("a",{href:u1(e).githubLink,target:"_blank",class:"bg-black text-white hover:bg-gray-100 hover:text-black border-2 border-gray-800 rounded-full size-fit p-2"},[B(n,{icon:["fab","github"],size:"lg"})],8,Sv),[[X4,u1(e).githubLink!==""]])])]),h("div",{onClick:r,class:"fixed top-0 right-0 h-screen w-screen z-20"})],512),[[X4,u1(a)]]),wv,h("div",null,[h("div",null,[h("div",yv,[(a1(!0),i1(s1,null,Z4(u1(ov),f=>(a1(),i1("div",{onClick:t=>i(f),class:"bg-slate-800 w-full grid grid-flow-auto auto-rows-auto md:w-5/12 lg:w-4/12 p-2 rounded-md hover:scale-105 transition"},[h("p",Pv,J1(f.title),1),h("div",_v,[h("img",{src:f.imgLink,class:"max-w-full rounded-lg"},null,8,Tv)]),h("div",Fv,[(a1(!0),i1(s1,null,Z4(f.tags,t=>(a1(),i1("p",Bv,J1(t),1))),256))])],8,Av))),256))])])])],64)}}},Dv=Z1(Rv,[["__scopeId","data-v-b2241e5e"]]),qv={},Ev=h("div",{class:"text-center"},[h("h1",{class:"text-5xl bg-slate-200 text-black p-5 mb-7 rounded"},"Contact")],-1),Ov={class:"flex flex-col md:flex-row gap-4 items-center justify-center text-black"},$v={href:"https://www.linkedin.com/in/landerjacobs2001/",target:"_blank",class:"w-6/12 md:w-3/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},Uv=h("p",{class:"text-white"},"Bereik me via Linkedin",-1),Iv={href:"https://github.com/LanderJacobs",target:"_blank",class:"w-6/12 md:w-3/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},jv=h("p",{class:"text-white"},"Vind me op Github",-1),Gv={href:"mailto:lander.jacobs2001@gmail.com",target:"_blank",class:"w-6/12 md:w-3/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},Wv=h("p",{class:"text-white"},"Stuur me een mail",-1);function Zv(c,a){const e=H4("font-awesome-icon");return a1(),i1(s1,null,[Ev,h("div",Ov,[h("a",$v,[B(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fab","linkedin"],size:"3x"}),Uv]),h("a",Iv,[B(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fab","github"],size:"3x"}),jv]),h("a",Gv,[B(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fas","envelope"],size:"3x"}),Wv])])],64)}const Kv=Z1(qv,[["render",Zv]]),Yv={__name:"App",setup(c){const a=S1(null),e=S1(null),r=S1(null),i=S1(null),s=S1(null);function l(){var v;(v=a.value)==null||v.scrollIntoView({behavior:"smooth"})}function n(){var v;(v=e.value)==null||v.scrollIntoView({behavior:"smooth"})}function f(){var v;(v=r.value)==null||v.scrollIntoView({behavior:"smooth"})}function t(){var v;(v=i.value)==null||v.scrollIntoView({behavior:"smooth"})}function m(){var v;(v=s.value)==null||v.scrollIntoView({behavior:"smooth"})}return(v,V)=>{const g=H4("font-awesome-icon");return a1(),i1(s1,null,[h("div",{ref_key:"welcomeRef",ref:a},null,512),B(em,null,{default:m1(()=>[B($2,{onClick:l},{default:m1(()=>[B(g,{icon:"fas fa-house"})]),_:1}),B($2,{onClick:n},{default:m1(()=>[y1("Over mij")]),_:1}),B($2,{onClick:f},{default:m1(()=>[y1("Stage")]),_:1}),B($2,{onClick:t},{default:m1(()=>[y1("Realisaties")]),_:1}),B($2,{onClick:m},{default:m1(()=>[y1("Contact")]),_:1})]),_:1}),h("div",null,[B(U2,{dark:!0},{default:m1(()=>[B(Cm,{onClickMore:n})]),_:1}),h("div",{ref_key:"aboutmeRef",ref:e},[B(U2,{dark:!1},{default:m1(()=>[B(Qz)]),_:1})],512),h("div",{ref_key:"internshipRef",ref:r},[B(U2,{dark:!0},{default:m1(()=>[B(fv)]),_:1})],512),h("div",{ref_key:"achievementsRef",ref:i},[B(U2,{dark:!1},{default:m1(()=>[B(Dv)]),_:1})],512),h("div",{ref_key:"contactRef",ref:s},[B(U2,{dark:!0},{default:m1(()=>[B(Kv)]),_:1})],512)]),B(zm)],64)}}},Xv=Z1(Yv,[["__scopeId","data-v-284d83bc"]]);function j0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?j0(Object(e),!0).forEach(function(r){n1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):j0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function a4(c){"@babel/helpers - typeof";return a4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a4(c)}function Jv(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Qv(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function ch(c,a,e){return a&&Qv(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function n1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function K6(c,a){return eh(c)||ih(c,a)||H7(c,a)||lh()}function h3(c){return ah(c)||rh(c)||H7(c)||sh()}function ah(c){if(Array.isArray(c))return u6(c)}function eh(c){if(Array.isArray(c))return c}function rh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ih(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,l,n;try{for(e=e.call(c);!(i=(l=e.next()).done)&&(r.push(l.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,n=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw n}}return r}}function H7(c,a){if(c){if(typeof c=="string")return u6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u6(c,a)}}function u6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function sh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G0=function(){},Y6={},u7={},p7=null,V7={mark:G0,measure:G0};try{typeof window<"u"&&(Y6=window),typeof document<"u"&&(u7=document),typeof MutationObserver<"u"&&(p7=MutationObserver),typeof performance<"u"&&(V7=performance)}catch{}var nh=Y6.navigator||{},W0=nh.userAgent,Z0=W0===void 0?"":W0,s2=Y6,X=u7,K0=p7,P3=V7;s2.document;var K1=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",M7=~Z0.indexOf("MSIE")||~Z0.indexOf("Trident/"),_3,T3,F3,B3,R3,I1="___FONT_AWESOME___",p6=16,d7="fa",C7="svg-inline--fa",C2="data-fa-i2svg",V6="data-fa-pseudo-element",fh="data-fa-pseudo-element-pending",X6="data-prefix",J6="data-icon",Y0="fontawesome-i2svg",oh="async",th=["HTML","HEAD","STYLE","SCRIPT"],L7=function(){try{return!0}catch{return!1}}(),Y="classic",e1="sharp",Q6=[Y,e1];function H3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Y]}})}var n3=H3((_3={},n1(_3,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),n1(_3,e1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_3)),f3=H3((T3={},n1(T3,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),n1(T3,e1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),T3)),o3=H3((F3={},n1(F3,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),n1(F3,e1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),F3)),mh=H3((B3={},n1(B3,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),n1(B3,e1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),B3)),zh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,g7="fa-layers-text",vh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hh=H3((R3={},n1(R3,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),n1(R3,e1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),R3)),b7=[1,2,3,4,5,6,7,8,9,10],Hh=b7.concat([11,12,13,14,15,16,17,18,19,20]),uh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t3=new Set;Object.keys(f3[Y]).map(t3.add.bind(t3));Object.keys(f3[e1]).map(t3.add.bind(t3));var ph=[].concat(Q6,h3(t3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(b7.map(function(c){return"".concat(c,"x")})).concat(Hh.map(function(c){return"w-".concat(c)})),c3=s2.FontAwesomeConfig||{};function Vh(c){var a=X.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Mh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(X&&typeof X.querySelector=="function"){var dh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dh.forEach(function(c){var a=K6(c,2),e=a[0],r=a[1],i=Mh(Vh(e));i!=null&&(c3[r]=i)})}var x7={styleDefault:"solid",familyDefault:"classic",cssPrefix:d7,replacementClass:C7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};c3.familyPrefix&&(c3.cssPrefix=c3.familyPrefix);var T2=k(k({},x7),c3);T2.autoReplaceSvg||(T2.observeMutations=!1);var w={};Object.keys(x7).forEach(function(c){Object.defineProperty(w,c,{enumerable:!0,set:function(e){T2[c]=e,a3.forEach(function(r){return r(w)})},get:function(){return T2[c]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(a){T2.cssPrefix=a,a3.forEach(function(e){return e(w)})},get:function(){return T2.cssPrefix}});s2.FontAwesomeConfig=w;var a3=[];function Ch(c){return a3.push(c),function(){a3.splice(a3.indexOf(c),1)}}var X1=p6,D1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lh(c){if(!(!c||!K1)){var a=X.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=X.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],l=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(r=s)}return X.head.insertBefore(a,r),c}}var gh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m3(){for(var c=12,a="";c-- >0;)a+=gh[Math.random()*62|0];return a}function B2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function c8(c){return c.classList?B2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function N7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(N7(c[e]),'" ')},"").trim()}function d4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function a8(c){return c.size!==D1.size||c.x!==D1.x||c.y!==D1.y||c.rotate!==D1.rotate||c.flipX||c.flipY}function xh(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(l," ").concat(n)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:t}}function Nh(c){var a=c.transform,e=c.width,r=e===void 0?p6:e,i=c.height,s=i===void 0?p6:i,l=c.startCentered,n=l===void 0?!1:l,f="";return n&&M7?f+="translate(".concat(a.x/X1-r/2,"em, ").concat(a.y/X1-s/2,"em) "):n?f+="translate(calc(-50% + ".concat(a.x/X1,"em), calc(-50% + ").concat(a.y/X1,"em)) "):f+="translate(".concat(a.x/X1,"em, ").concat(a.y/X1,"em) "),f+="scale(".concat(a.size/X1*(a.flipX?-1:1),", ").concat(a.size/X1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var kh=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function k7(){var c=d7,a=C7,e=w.cssPrefix,r=w.replacementClass,i=kh;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(n,".".concat(r))}return i}var X0=!1;function c6(){w.autoAddCss&&!X0&&(Lh(k7()),X0=!0)}var Sh={mixout:function(){return{dom:{css:k7,insertCss:c6}}},hooks:function(){return{beforeDOMElementCreation:function(){c6()},beforeI2svg:function(){c6()}}}},j1=s2||{};j1[I1]||(j1[I1]={});j1[I1].styles||(j1[I1].styles={});j1[I1].hooks||(j1[I1].hooks={});j1[I1].shims||(j1[I1].shims=[]);var A1=j1[I1],S7=[],wh=function c(){X.removeEventListener("DOMContentLoaded",c),e4=1,S7.map(function(a){return a()})},e4=!1;K1&&(e4=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),e4||X.addEventListener("DOMContentLoaded",wh));function yh(c){K1&&(e4?setTimeout(c,0):S7.push(c))}function u3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?N7(c):"<".concat(a," ").concat(bh(r),">").concat(s.map(u3).join(""),"</").concat(a,">")}function J0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var a6=function(a,e,r,i){var s=Object.keys(a),l=s.length,n=e,f,t,m;for(r===void 0?(f=1,m=a[s[0]]):(f=0,m=r);f<l;f++)t=s[f],m=n(m,a[t],t,a);return m};function Ah(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function M6(c){var a=Ah(c);return a.length===1?a[0].toString(16):null}function Ph(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Q0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function d6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=Q0(a);typeof A1.hooks.addPack=="function"&&!i?A1.hooks.addPack(c,Q0(a)):A1.styles[c]=k(k({},A1.styles[c]||{}),s),c==="fas"&&d6("fa",a)}var D3,q3,E3,x2=A1.styles,_h=A1.shims,Th=(D3={},n1(D3,Y,Object.values(o3[Y])),n1(D3,e1,Object.values(o3[e1])),D3),e8=null,w7={},y7={},A7={},P7={},_7={},Fh=(q3={},n1(q3,Y,Object.keys(n3[Y])),n1(q3,e1,Object.keys(n3[e1])),q3);function Bh(c){return~ph.indexOf(c)}function Rh(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Bh(i)?i:null}var T7=function(){var a=function(s){return a6(x2,function(l,n,f){return l[f]=a6(n,s,{}),l},{})};w7=a(function(i,s,l){if(s[3]&&(i[s[3]]=l),s[2]){var n=s[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){i[f.toString(16)]=l})}return i}),y7=a(function(i,s,l){if(i[l]=l,s[2]){var n=s[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){i[f]=l})}return i}),_7=a(function(i,s,l){var n=s[2];return i[l]=l,n.forEach(function(f){i[f]=l}),i});var e="far"in x2||w.autoFetchSvg,r=a6(_h,function(i,s){var l=s[0],n=s[1],f=s[2];return n==="far"&&!e&&(n="fas"),typeof l=="string"&&(i.names[l]={prefix:n,iconName:f}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:n,iconName:f}),i},{names:{},unicodes:{}});A7=r.names,P7=r.unicodes,e8=C4(w.styleDefault,{family:w.familyDefault})};Ch(function(c){e8=C4(c.styleDefault,{family:w.familyDefault})});T7();function r8(c,a){return(w7[c]||{})[a]}function Dh(c,a){return(y7[c]||{})[a]}function V2(c,a){return(_7[c]||{})[a]}function F7(c){return A7[c]||{prefix:null,iconName:null}}function qh(c){var a=P7[c],e=r8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function l2(){return e8}var i8=function(){return{prefix:null,iconName:null,rest:[]}};function C4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Y:e,i=n3[r][c],s=f3[r][c]||f3[r][i],l=c in A1.styles?c:null;return s||l||null}var c5=(E3={},n1(E3,Y,Object.keys(o3[Y])),n1(E3,e1,Object.keys(o3[e1])),E3);function L4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},n1(a,Y,"".concat(w.cssPrefix,"-").concat(Y)),n1(a,e1,"".concat(w.cssPrefix,"-").concat(e1)),a),l=null,n=Y;(c.includes(s[Y])||c.some(function(t){return c5[Y].includes(t)}))&&(n=Y),(c.includes(s[e1])||c.some(function(t){return c5[e1].includes(t)}))&&(n=e1);var f=c.reduce(function(t,m){var v=Rh(w.cssPrefix,m);if(x2[m]?(m=Th[n].includes(m)?mh[n][m]:m,l=m,t.prefix=m):Fh[n].indexOf(m)>-1?(l=m,t.prefix=C4(m,{family:n})):v?t.iconName=v:m!==w.replacementClass&&m!==s[Y]&&m!==s[e1]&&t.rest.push(m),!i&&t.prefix&&t.iconName){var V=l==="fa"?F7(t.iconName):{},g=V2(t.prefix,t.iconName);V.prefix&&(l=null),t.iconName=V.iconName||g||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!x2.far&&x2.fas&&!w.autoFetchSvg&&(t.prefix="fas")}return t},i8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&n===e1&&(x2.fass||w.autoFetchSvg)&&(f.prefix="fass",f.iconName=V2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||l==="fa")&&(f.prefix=l2()||"fas"),f}var Eh=function(){function c(){Jv(this,c),this.definitions={}}return ch(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var l=i.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(n){e.definitions[n]=k(k({},e.definitions[n]||{}),l[n]),d6(n,l[n]);var f=o3[Y][n];f&&d6(f,l[n]),T7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var l=i[s],n=l.prefix,f=l.iconName,t=l.icon,m=t[2];e[n]||(e[n]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(e[n][v]=t)}),e[n][f]=t}),e}}]),c}(),a5=[],N2={},y2={},Oh=Object.keys(y2);function $h(c,a){var e=a.mixoutsTo;return a5=c,N2={},Object.keys(y2).forEach(function(r){Oh.indexOf(r)===-1&&delete y2[r]}),a5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(l){typeof i[l]=="function"&&(e[l]=i[l]),a4(i[l])==="object"&&Object.keys(i[l]).forEach(function(n){e[l]||(e[l]={}),e[l][n]=i[l][n]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(l){N2[l]||(N2[l]=[]),N2[l].push(s[l])})}r.provides&&r.provides(y2)}),e}function C6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=N2[c]||[];return s.forEach(function(l){a=l.apply(null,[a].concat(r))}),a}function L2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=N2[c]||[];i.forEach(function(s){s.apply(null,e)})}function G1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return y2[c]?y2[c].apply(null,a):void 0}function L6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||l2();if(a)return a=V2(e,a)||a,J0(B7.definitions,e,a)||J0(A1.styles,e,a)}var B7=new Eh,Uh=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,L2("noAuto")},Ih={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K1?(L2("beforeI2svg",a),G1("pseudoElements2svg",a),G1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,yh(function(){Gh({autoReplaceSvgRoot:e}),L2("watch",a)})}},jh={icon:function(a){if(a===null)return null;if(a4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:V2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=C4(a[0]);return{prefix:r,iconName:V2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(w.cssPrefix,"-"))>-1||a.match(zh))){var i=L4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||l2(),iconName:V2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=l2();return{prefix:s,iconName:V2(s,a)||a}}}},g1={noAuto:Uh,config:w,dom:Ih,parse:jh,library:B7,findIconDefinition:L6,toHtml:u3},Gh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?X:e;(Object.keys(A1.styles).length>0||w.autoFetchSvg)&&K1&&w.autoReplaceSvg&&g1.dom.i2svg({node:r})};function g4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return u3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(K1){var r=X.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Wh(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,l=c.transform;if(a8(l)&&e.found&&!r.found){var n=e.width,f=e.height,t={x:n/f/2,y:.5};i.style=d4(k(k({},s),{},{"transform-origin":"".concat(t.x+l.x/16,"em ").concat(t.y+l.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Zh(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,l=s===!0?"".concat(a,"-").concat(w.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:l}),children:r}]}]}function s8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,l=c.transform,n=c.symbol,f=c.title,t=c.maskId,m=c.titleId,v=c.extra,V=c.watchable,g=V===void 0?!1:V,q=r.found?r:e,_=q.width,G=q.height,b=i==="fak",N=[w.replacementClass,s?"".concat(w.cssPrefix,"-").concat(s):""].filter(function(b1){return v.classes.indexOf(b1)===-1}).filter(function(b1){return b1!==""||!!b1}).concat(v.classes).join(" "),y={children:[],attributes:k(k({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:N,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(G)})},E=b&&!~v.classes.indexOf("fa-fw")?{width:"".concat(_/G*16*.0625,"em")}:{};g&&(y.attributes[C2]=""),f&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(m||m3())},children:[f]}),delete y.attributes.title);var U=k(k({},y),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:l,symbol:n,styles:k(k({},E),v.styles)}),R=r.found&&e.found?G1("generateAbstractMask",U)||{children:[],attributes:{}}:G1("generateAbstractIcon",U)||{children:[],attributes:{}},r1=R.children,p1=R.attributes;return U.children=r1,U.attributes=p1,n?Zh(U):Wh(U)}function e5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,l=c.extra,n=c.watchable,f=n===void 0?!1:n,t=k(k(k({},l.attributes),s?{title:s}:{}),{},{class:l.classes.join(" ")});f&&(t[C2]="");var m=k({},l.styles);a8(i)&&(m.transform=Nh({transform:i,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var v=d4(m);v.length>0&&(t.style=v);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),s&&V.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),V}function Kh(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=d4(r.styles);s.length>0&&(i.style=s);var l=[];return l.push({tag:"span",attributes:i,children:[a]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}var e6=A1.styles;function g6(c){var a=c[0],e=c[1],r=c.slice(4),i=K6(r,1),s=i[0],l=null;return Array.isArray(s)?l={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:s[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:l}}var Yh={found:!1,width:512,height:512};function Xh(c,a){!L7&&!w.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function b6(c,a){var e=a;return a==="fa"&&w.styleDefault!==null&&(a=l2()),new Promise(function(r,i){if(G1("missingIconAbstract"),e==="fa"){var s=F7(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&e6[a]&&e6[a][c]){var l=e6[a][c];return r(g6(l))}Xh(c,a),r(k(k({},Yh),{},{icon:w.showMissingIcons&&c?G1("missingIconAbstract")||{}:{}}))})}var r5=function(){},x6=w.measurePerformance&&P3&&P3.mark&&P3.measure?P3:{mark:r5,measure:r5},W2='FA "6.5.2"',Jh=function(a){return x6.mark("".concat(W2," ").concat(a," begins")),function(){return R7(a)}},R7=function(a){x6.mark("".concat(W2," ").concat(a," ends")),x6.measure("".concat(W2," ").concat(a),"".concat(W2," ").concat(a," begins"),"".concat(W2," ").concat(a," ends"))},l8={begin:Jh,end:R7},W3=function(){};function i5(c){var a=c.getAttribute?c.getAttribute(C2):null;return typeof a=="string"}function Qh(c){var a=c.getAttribute?c.getAttribute(X6):null,e=c.getAttribute?c.getAttribute(J6):null;return a&&e}function cH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(w.replacementClass)}function aH(){if(w.autoReplaceSvg===!0)return Z3.replace;var c=Z3[w.autoReplaceSvg];return c||Z3.replace}function eH(c){return X.createElementNS("http://www.w3.org/2000/svg",c)}function rH(c){return X.createElement(c)}function D7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?eH:rH:e;if(typeof c=="string")return X.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(l){i.setAttribute(l,c.attributes[l])});var s=c.children||[];return s.forEach(function(l){i.appendChild(D7(l,{ceFn:r}))}),i}function iH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Z3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(D7(i),e)}),e.getAttribute(C2)===null&&w.keepOriginalSource){var r=X.createComment(iH(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~c8(e).indexOf(w.replacementClass))return Z3.replace(a);var i=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(n,f){return f===w.replacementClass||f.match(i)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var l=r.map(function(n){return u3(n)}).join(`
`);e.setAttribute(C2,""),e.innerHTML=l}};function s5(c){c()}function q7(c,a){var e=typeof a=="function"?a:W3;if(c.length===0)e();else{var r=s5;w.mutateApproach===oh&&(r=s2.requestAnimationFrame||s5),r(function(){var i=aH(),s=l8.begin("mutate");c.map(i),s(),e()})}}var n8=!1;function E7(){n8=!0}function N6(){n8=!1}var r4=null;function l5(c){if(K0&&w.observeMutations){var a=c.treeCallback,e=a===void 0?W3:a,r=c.nodeCallback,i=r===void 0?W3:r,s=c.pseudoElementsCallback,l=s===void 0?W3:s,n=c.observeMutationsRoot,f=n===void 0?X:n;r4=new K0(function(t){if(!n8){var m=l2();B2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!i5(v.addedNodes[0])&&(w.searchPseudoElements&&l(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&w.searchPseudoElements&&l(v.target.parentNode),v.type==="attributes"&&i5(v.target)&&~uh.indexOf(v.attributeName))if(v.attributeName==="class"&&Qh(v.target)){var V=L4(c8(v.target)),g=V.prefix,q=V.iconName;v.target.setAttribute(X6,g||m),q&&v.target.setAttribute(J6,q)}else cH(v.target)&&i(v.target)})}}),K1&&r4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sH(){r4&&r4.disconnect()}function lH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),l=s[0],n=s.slice(1);return l&&n.length>0&&(r[l]=n.join(":").trim()),r},{})),e}function nH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=L4(c8(c));return i.prefix||(i.prefix=l2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Dh(i.prefix,c.innerText)||r8(i.prefix,M6(c.innerText))),!i.iconName&&w.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function fH(c){var a=B2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return w.autoA11y&&(e?a["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||m3()):(a["aria-hidden"]="true",a.focusable="false")),a}function oH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=nH(c),r=e.iconName,i=e.prefix,s=e.rest,l=fH(c),n=C6("parseNodeAttributes",{},c),f=a.styleParser?lH(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:D1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:l}},n)}var tH=A1.styles;function O7(c){var a=w.autoReplaceSvg==="nest"?n5(c,{styleParser:!1}):n5(c);return~a.extra.classes.indexOf(g7)?G1("generateLayersText",c,a):G1("generateSvgReplacementMutation",c,a)}var n2=new Set;Q6.map(function(c){n2.add("fa-".concat(c))});Object.keys(n3[Y]).map(n2.add.bind(n2));Object.keys(n3[e1]).map(n2.add.bind(n2));n2=h3(n2);function f5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K1)return Promise.resolve();var e=X.documentElement.classList,r=function(v){return e.add("".concat(Y0,"-").concat(v))},i=function(v){return e.remove("".concat(Y0,"-").concat(v))},s=w.autoFetchSvg?n2:Q6.map(function(m){return"fa-".concat(m)}).concat(Object.keys(tH));s.includes("fa")||s.push("fa");var l=[".".concat(g7,":not([").concat(C2,"])")].concat(s.map(function(m){return".".concat(m,":not([").concat(C2,"])")})).join(", ");if(l.length===0)return Promise.resolve();var n=[];try{n=B2(c.querySelectorAll(l))}catch{}if(n.length>0)r("pending"),i("complete");else return Promise.resolve();var f=l8.begin("onTree"),t=n.reduce(function(m,v){try{var V=O7(v);V&&m.push(V)}catch(g){L7||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,v){Promise.all(t).then(function(V){q7(V,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),m()})}).catch(function(V){f(),v(V)})})}function mH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;O7(c).then(function(e){e&&q7([e],a)})}function zH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:L6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:L6(i||{})),c(r,k(k({},e),{},{mask:i}))}}var vH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?D1:r,s=e.symbol,l=s===void 0?!1:s,n=e.mask,f=n===void 0?null:n,t=e.maskId,m=t===void 0?null:t,v=e.title,V=v===void 0?null:v,g=e.titleId,q=g===void 0?null:g,_=e.classes,G=_===void 0?[]:_,b=e.attributes,N=b===void 0?{}:b,y=e.styles,E=y===void 0?{}:y;if(a){var U=a.prefix,R=a.iconName,r1=a.icon;return g4(k({type:"icon"},a),function(){return L2("beforeDOMElementCreation",{iconDefinition:a,params:e}),w.autoA11y&&(V?N["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(q||m3()):(N["aria-hidden"]="true",N.focusable="false")),s8({icons:{main:g6(r1),mask:f?g6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:R,transform:k(k({},D1),i),symbol:l,title:V,maskId:m,titleId:q,extra:{attributes:N,styles:E,classes:G}})})}},hH={mixout:function(){return{icon:zH(vH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=f5,e.nodeCallback=mH,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?X:r,s=e.callback,l=s===void 0?function(){}:s;return f5(i,l)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,l=r.titleId,n=r.prefix,f=r.transform,t=r.symbol,m=r.mask,v=r.maskId,V=r.extra;return new Promise(function(g,q){Promise.all([b6(i,n),m.iconName?b6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var G=K6(_,2),b=G[0],N=G[1];g([e,s8({icons:{main:b,mask:N},prefix:n,iconName:i,transform:f,symbol:t,maskId:v,title:s,titleId:l,extra:V,watchable:!0})])}).catch(q)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,l=e.transform,n=e.styles,f=d4(n);f.length>0&&(i.style=f);var t;return a8(l)&&(t=G1("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},HH={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return g4({type:"layer"},function(){L2("beforeDOMElementCreation",{assembler:e,params:r});var l=[];return e(function(n){Array.isArray(n)?n.map(function(f){l=l.concat(f.abstract)}):l=l.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(h3(s)).join(" ")},children:l}]})}}}},uH={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,l=r.classes,n=l===void 0?[]:l,f=r.attributes,t=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return g4({type:"counter",content:e},function(){return L2("beforeDOMElementCreation",{content:e,params:r}),Kh({content:e.toString(),title:s,extra:{attributes:t,styles:v,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(h3(n))}})})}}}},pH={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?D1:i,l=r.title,n=l===void 0?null:l,f=r.classes,t=f===void 0?[]:f,m=r.attributes,v=m===void 0?{}:m,V=r.styles,g=V===void 0?{}:V;return g4({type:"text",content:e},function(){return L2("beforeDOMElementCreation",{content:e,params:r}),e5({content:e,transform:k(k({},D1),s),title:n,extra:{attributes:v,styles:g,classes:["".concat(w.cssPrefix,"-layers-text")].concat(h3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,l=r.extra,n=null,f=null;if(M7){var t=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();n=m.width/t,f=m.height/t}return w.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,e5({content:e.innerHTML,width:n,height:f,transform:s,title:i,extra:l,watchable:!0})])}}},VH=new RegExp('"',"ug"),o5=[1105920,1112319];function MH(c){var a=c.replace(VH,""),e=Ph(a,0),r=e>=o5[0]&&e<=o5[1],i=a.length===2?a[0]===a[1]:!1;return{value:M6(i?a[0]:a),isSecondary:r||i}}function t5(c,a){var e="".concat(fh).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=B2(c.children),l=s.filter(function(r1){return r1.getAttribute(V6)===a})[0],n=s2.getComputedStyle(c,a),f=n.getPropertyValue("font-family").match(vh),t=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(l&&!f)return c.removeChild(l),r();if(f&&m!=="none"&&m!==""){var v=n.getPropertyValue("content"),V=~["Sharp"].indexOf(f[2])?e1:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?f3[V][f[2].toLowerCase()]:hh[V][t],q=MH(v),_=q.value,G=q.isSecondary,b=f[0].startsWith("FontAwesome"),N=r8(g,_),y=N;if(b){var E=qh(_);E.iconName&&E.prefix&&(N=E.iconName,g=E.prefix)}if(N&&!G&&(!l||l.getAttribute(X6)!==g||l.getAttribute(J6)!==y)){c.setAttribute(e,y),l&&c.removeChild(l);var U=oH(),R=U.extra;R.attributes[V6]=a,b6(N,g).then(function(r1){var p1=s8(k(k({},U),{},{icons:{main:r1,mask:i8()},prefix:g,iconName:y,extra:R,watchable:!0})),b1=X.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(b1,c.firstChild):c.appendChild(b1),b1.outerHTML=p1.map(function(E1){return u3(E1)}).join(`