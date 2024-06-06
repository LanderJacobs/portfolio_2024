(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function w6(c,a){const e=new Set(c.split(","));return r=>e.has(r)}const K={},k2=[],x1=()=>{},Sf=()=>!1,l4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),y6=c=>c.startsWith("onUpdate:"),t1=Object.assign,A6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},wf=Object.prototype.hasOwnProperty,$=(c,a)=>wf.call(c,a),T=Array.isArray,S2=c=>f4(c)==="[object Map]",V5=c=>f4(c)==="[object Set]",D=c=>typeof c=="function",s1=c=>typeof c=="string",g2=c=>typeof c=="symbol",Q=c=>c!==null&&typeof c=="object",M5=c=>(Q(c)||D(c))&&D(c.then)&&D(c.catch),d5=Object.prototype.toString,f4=c=>d5.call(c),yf=c=>f4(c).slice(8,-1),C5=c=>f4(c)==="[object Object]",P6=c=>s1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Z2=w6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),o4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Af=/-(\w)/g,q1=o4(c=>c.replace(Af,(a,e)=>e?e.toUpperCase():"")),Pf=/\B([A-Z])/g,F2=o4(c=>c.replace(Pf,"-$1").toLowerCase()),t4=o4(c=>c.charAt(0).toUpperCase()+c.slice(1)),I4=o4(c=>c?`on${t4(c)}`:""),r2=(c,a)=>!Object.is(c,a),j4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},L5=(c,a,e,r=!1)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,writable:r,value:e})},_f=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let H0;const g5=()=>H0||(H0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _6(c){if(T(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=s1(r)?Rf(r):_6(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(s1(c)||Q(c))return c}const Tf=/;(?![^(]*\))/g,Ff=/:([^]+)/,Bf=/\/\*[^]*?\*\//g;function Rf(c){const a={};return c.replace(Bf,"").split(Tf).forEach(e=>{if(e){const r=e.split(Ff);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function T6(c){let a="";if(s1(c))a=c;else if(T(c))for(let e=0;e<c.length;e++){const r=T6(c[e]);r&&(a+=r+" ")}else if(Q(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Df="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qf=w6(Df);function b5(c){return!!c||c===""}const v2=c=>s1(c)?c:c==null?"":T(c)||Q(c)&&(c.toString===d5||!D(c.toString))?JSON.stringify(c,x5,2):String(c),x5=(c,a)=>a&&a.__v_isRef?x5(c,a.value):S2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i],s)=>(e[G4(r,s)+" =>"]=i,e),{})}:V5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>G4(e))}:g2(a)?G4(a):Q(a)&&!T(a)&&!C5(a)?String(a):a,G4=(c,a="")=>{var e;return g2(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let k1;class Ef{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=k1,!a&&k1&&(this.index=(k1.scopes||(k1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=k1;try{return k1=this,a()}finally{k1=e}}}on(){k1=this}off(){k1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Of(c,a=k1){a&&a.active&&a.effects.push(c)}function $f(){return k1}let M2;class F6{constructor(a,e,r,i){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Of(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,l2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(Uf(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),f2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=a2,e=M2;try{return a2=!0,M2=this,this._runnings++,u0(this),this.fn()}finally{p0(this),this._runnings--,M2=e,a2=a}}stop(){this.active&&(u0(this),p0(this),this.onStop&&this.onStop(),this.active=!1)}}function Uf(c){return c.value}function u0(c){c._trackId++,c._depsLength=0}function p0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)N5(c.deps[a],c);c.deps.length=c._depsLength}}function N5(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let a2=!0,n6=0;const k5=[];function l2(){k5.push(a2),a2=!1}function f2(){const c=k5.pop();a2=c===void 0?!0:c}function B6(){n6++}function R6(){for(n6--;!n6&&l6.length;)l6.shift()()}function S5(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&N5(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const l6=[];function w5(c,a,e){B6();for(const r of c.keys()){let i;r._dirtyLevel<a&&(i??(i=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(i??(i=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&l6.push(r.scheduler)))}R6()}const y5=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},f6=new WeakMap,d2=Symbol(""),o6=Symbol("");function d1(c,a,e){if(a2&&M2){let r=f6.get(c);r||f6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=y5(()=>r.delete(e))),S5(M2,i)}}function U1(c,a,e,r,i,s){const n=f6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&T(c)){const f=Number(r);n.forEach((t,m)=>{(m==="length"||!g2(m)&&m>=f)&&l.push(t)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":T(c)?P6(e)&&l.push(n.get("length")):(l.push(n.get(d2)),S2(c)&&l.push(n.get(o6)));break;case"delete":T(c)||(l.push(n.get(d2)),S2(c)&&l.push(n.get(o6)));break;case"set":S2(c)&&l.push(n.get(d2));break}B6();for(const f of l)f&&w5(f,4);R6()}const If=w6("__proto__,__v_isRef,__isVue"),A5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(g2)),V0=jf();function jf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=j(this);for(let s=0,n=this.length;s<n;s++)d1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){l2(),B6();const r=j(this)[a].apply(this,e);return R6(),f2(),r}}),c}function Gf(c){g2(c)||(c=String(c));const a=j(this);return d1(a,"has",c),a.hasOwnProperty(c)}class P5{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?so:B5:s?F5:T5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=T(a);if(!i){if(n&&$(V0,e))return Reflect.get(V0,e,r);if(e==="hasOwnProperty")return Gf}const l=Reflect.get(a,e,r);return(g2(e)?A5.has(e):If(e))||(i||d1(a,"get",e),s)?l:C1(l)?n&&P6(e)?l:l.value:Q(l)?i?R5(l):E6(l):l}}class _5 extends P5{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(!this._isShallow){const f=e3(s);if(!X3(r)&&!e3(r)&&(s=j(s),r=j(r)),!T(a)&&C1(s)&&!C1(r))return f?!1:(s.value=r,!0)}const n=T(a)&&P6(e)?Number(e)<a.length:$(a,e),l=Reflect.set(a,e,r,i);return a===j(i)&&(n?r2(r,s)&&U1(a,"set",e,r):U1(a,"add",e,r)),l}deleteProperty(a,e){const r=$(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&U1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!g2(e)||!A5.has(e))&&d1(a,"has",e),r}ownKeys(a){return d1(a,"iterate",T(a)?"length":d2),Reflect.ownKeys(a)}}class Wf extends P5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Zf=new _5,Kf=new Wf,Yf=new _5(!0);const D6=c=>c,m4=c=>Reflect.getPrototypeOf(c);function S3(c,a,e=!1,r=!1){c=c.__v_raw;const i=j(c),s=j(a);e||(r2(a,s)&&d1(i,"get",a),d1(i,"get",s));const{has:n}=m4(i),l=r?D6:e?$6:r3;if(n.call(i,a))return l(c.get(a));if(n.call(i,s))return l(c.get(s));c!==i&&c.get(a)}function w3(c,a=!1){const e=this.__v_raw,r=j(e),i=j(c);return a||(r2(c,i)&&d1(r,"has",c),d1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function y3(c,a=!1){return c=c.__v_raw,!a&&d1(j(c),"iterate",d2),Reflect.get(c,"size",c)}function M0(c){c=j(c);const a=j(this);return m4(a).has.call(a,c)||(a.add(c),U1(a,"add",c,c)),this}function d0(c,a){a=j(a);const e=j(this),{has:r,get:i}=m4(e);let s=r.call(e,c);s||(c=j(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?r2(a,n)&&U1(e,"set",c,a):U1(e,"add",c,a),this}function C0(c){const a=j(this),{has:e,get:r}=m4(a);let i=e.call(a,c);i||(c=j(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&U1(a,"delete",c,void 0),s}function L0(){const c=j(this),a=c.size!==0,e=c.clear();return a&&U1(c,"clear",void 0,void 0),e}function A3(c,a){return function(r,i){const s=this,n=s.__v_raw,l=j(n),f=a?D6:c?$6:r3;return!c&&d1(l,"iterate",d2),n.forEach((t,m)=>r.call(i,f(t),f(m),s))}}function P3(c,a,e){return function(...r){const i=this.__v_raw,s=j(i),n=S2(s),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,t=i[c](...r),m=e?D6:a?$6:r3;return!a&&d1(s,"iterate",f?o6:d2),{next(){const{value:v,done:V}=t.next();return V?{value:v,done:V}:{value:l?[m(v[0]),m(v[1])]:m(v),done:V}},[Symbol.iterator](){return this}}}}function Y1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Xf(){const c={get(s){return S3(this,s)},get size(){return y3(this)},has:w3,add:M0,set:d0,delete:C0,clear:L0,forEach:A3(!1,!1)},a={get(s){return S3(this,s,!1,!0)},get size(){return y3(this)},has:w3,add:M0,set:d0,delete:C0,clear:L0,forEach:A3(!1,!0)},e={get(s){return S3(this,s,!0)},get size(){return y3(this,!0)},has(s){return w3.call(this,s,!0)},add:Y1("add"),set:Y1("set"),delete:Y1("delete"),clear:Y1("clear"),forEach:A3(!0,!1)},r={get(s){return S3(this,s,!0,!0)},get size(){return y3(this,!0)},has(s){return w3.call(this,s,!0)},add:Y1("add"),set:Y1("set"),delete:Y1("delete"),clear:Y1("clear"),forEach:A3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=P3(s,!1,!1),e[s]=P3(s,!0,!1),a[s]=P3(s,!1,!0),r[s]=P3(s,!0,!0)}),[c,e,a,r]}const[Jf,Qf,co,ao]=Xf();function q6(c,a){const e=a?c?ao:co:c?Qf:Jf;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get($(e,i)&&i in r?e:r,i,s)}const eo={get:q6(!1,!1)},ro={get:q6(!1,!0)},io={get:q6(!0,!1)};const T5=new WeakMap,F5=new WeakMap,B5=new WeakMap,so=new WeakMap;function no(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lo(c){return c.__v_skip||!Object.isExtensible(c)?0:no(yf(c))}function E6(c){return e3(c)?c:O6(c,!1,Zf,eo,T5)}function fo(c){return O6(c,!1,Yf,ro,F5)}function R5(c){return O6(c,!0,Kf,io,B5)}function O6(c,a,e,r,i){if(!Q(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=lo(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return i.set(c,l),l}function K2(c){return e3(c)?K2(c.__v_raw):!!(c&&c.__v_isReactive)}function e3(c){return!!(c&&c.__v_isReadonly)}function X3(c){return!!(c&&c.__v_isShallow)}function D5(c){return c?!!c.__v_raw:!1}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function oo(c){return Object.isExtensible(c)&&L5(c,"__v_skip",!0),c}const r3=c=>Q(c)?E6(c):c,$6=c=>Q(c)?R5(c):c;class q5{constructor(a,e,r,i){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new F6(()=>a(this._value),()=>U3(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=j(this);return(!a._cacheable||a.effect.dirty)&&r2(a._value,a._value=a.effect.run())&&U3(a,4),E5(a),a.effect._dirtyLevel>=2&&U3(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function to(c,a,e=!1){let r,i;const s=D(c);return s?(r=c,i=x1):(r=c.get,i=c.set),new q5(r,i,s||!i,e)}function E5(c){var a;a2&&M2&&(c=j(c),S5(M2,(a=c.dep)!=null?a:c.dep=y5(()=>c.dep=void 0,c instanceof q5?c:void 0)))}function U3(c,a=4,e){c=j(c);const r=c.dep;r&&w5(r,a)}function C1(c){return!!(c&&c.__v_isRef===!0)}function B1(c){return mo(c,!1)}function mo(c,a){return C1(c)?c:new zo(c,a)}class zo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:r3(a)}get value(){return E5(this),this._value}set value(a){const e=this.__v_isShallow||X3(a)||e3(a);a=e?a:j(a),r2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:r3(a),U3(this,4))}}function V1(c){return C1(c)?c.value:c}const vo={get:(c,a,e)=>V1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return C1(i)&&!C1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function O5(c){return K2(c)?c:new Proxy(c,vo)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e2(c,a,e,r){try{return r?c(...r):c()}catch(i){z4(i,a,e)}}function A1(c,a,e,r){if(D(c)){const i=e2(c,a,e,r);return i&&M5(i)&&i.catch(s=>{z4(s,a,e)}),i}if(T(c)){const i=[];for(let s=0;s<c.length;s++)i.push(A1(c[s],a,e,r));return i}}function z4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const t=s.ec;if(t){for(let m=0;m<t.length;m++)if(t[m](c,n,l)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){l2(),e2(f,null,10,[c,n,l]),f2();return}}ho(c,e,i,r)}function ho(c,a,e,r=!0){console.error(c)}let i3=!1,t6=!1;const z1=[];let R1=0;const w2=[];let J1=null,H2=0;const $5=Promise.resolve();let U6=null;function Ho(c){const a=U6||$5;return c?a.then(this?c.bind(this):c):a}function uo(c){let a=R1+1,e=z1.length;for(;a<e;){const r=a+e>>>1,i=z1[r],s=s3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function I6(c){(!z1.length||!z1.includes(c,i3&&c.allowRecurse?R1+1:R1))&&(c.id==null?z1.push(c):z1.splice(uo(c.id),0,c),U5())}function U5(){!i3&&!t6&&(t6=!0,U6=$5.then(j5))}function po(c){const a=z1.indexOf(c);a>R1&&z1.splice(a,1)}function Vo(c){T(c)?w2.push(...c):(!J1||!J1.includes(c,c.allowRecurse?H2+1:H2))&&w2.push(c),U5()}function g0(c,a,e=i3?R1+1:0){for(;e<z1.length;e++){const r=z1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;z1.splice(e,1),e--,r()}}}function I5(c){if(w2.length){const a=[...new Set(w2)].sort((e,r)=>s3(e)-s3(r));if(w2.length=0,J1){J1.push(...a);return}for(J1=a,H2=0;H2<J1.length;H2++)J1[H2]();J1=null,H2=0}}const s3=c=>c.id==null?1/0:c.id,Mo=(c,a)=>{const e=s3(c)-s3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function j5(c){t6=!1,i3=!0,z1.sort(Mo);try{for(R1=0;R1<z1.length;R1++){const a=z1[R1];a&&a.active!==!1&&e2(a,null,14)}}finally{R1=0,z1.length=0,I5(),i3=!1,U6=null,(z1.length||w2.length)&&j5()}}function Co(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||K;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const m=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:V}=r[m]||K;V&&(i=e.map(g=>s1(g)?g.trim():g)),v&&(i=e.map(_f))}let l,f=r[l=I4(a)]||r[l=I4(q1(a))];!f&&s&&(f=r[l=I4(F2(a))]),f&&A1(f,c,6,i);const t=r[l+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,A1(t,c,6,i)}}function G5(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},l=!1;if(!D(c)){const f=t=>{const m=G5(t,a,!0);m&&(l=!0,t1(n,m))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!l?(Q(c)&&r.set(c,null),null):(T(s)?s.forEach(f=>n[f]=null):t1(n,s),Q(c)&&r.set(c,n),n)}function v4(c,a){return!c||!l4(a)?!1:(a=a.slice(2).replace(/Once$/,""),$(c,a[0].toLowerCase()+a.slice(1))||$(c,F2(a))||$(c,a))}let o1=null,h4=null;function J3(c){const a=o1;return o1=c,h4=c&&c.type.__scopeId||null,a}function z3(c){h4=c}function v3(){h4=null}function m1(c,a=o1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&T0(-1);const s=J3(a);let n;try{n=c(...i)}finally{J3(s),r._d&&T0(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function W4(c){const{type:a,vnode:e,proxy:r,withProxy:i,propsOptions:[s],slots:n,attrs:l,emit:f,render:t,renderCache:m,props:v,data:V,setupState:g,ctx:q,inheritAttrs:_}=c,G=J3(c);let b,N;try{if(e.shapeFlag&4){const E=i||r,I=E;b=F1(t.call(I,E,m,v,g,V,q)),N=l}else{const E=a;b=F1(E.length>1?E(v,{attrs:l,slots:n,emit:f}):E(v,null)),N=a.props?l:Lo(l)}}catch(E){Q2.length=0,z4(E,c,1),b=B(P2)}let y=b;if(N&&_!==!1){const E=Object.keys(N),{shapeFlag:I}=y;E.length&&I&7&&(s&&E.some(y6)&&(N=go(N,s)),y=_2(y,N,!1,!0))}return e.dirs&&(y=_2(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),b=y,J3(G),b}const Lo=c=>{let a;for(const e in c)(e==="class"||e==="style"||l4(e))&&((a||(a={}))[e]=c[e]);return a},go=(c,a)=>{const e={};for(const r in c)(!y6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function bo(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:l,patchFlag:f}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?b0(r,n,t):!!n;if(f&8){const m=a.dynamicProps;for(let v=0;v<m.length;v++){const V=m[v];if(n[V]!==r[V]&&!v4(t,V))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?b0(r,n,t):!0:!!n;return!1}function b0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!v4(e,s))return!0}return!1}function xo({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const No="components";function H4(c,a){return So(No,c,!0,a)||c}const ko=Symbol.for("v-ndc");function So(c,a,e=!0,r=!1){const i=o1||v1;if(i){const s=i.type;{const l=bt(s,!1);if(l&&(l===a||l===q1(a)||l===t4(q1(a))))return s}const n=x0(i[c]||s[c],a)||x0(i.appContext[c],a);return!n&&r?s:n}}function x0(c,a){return c&&(c[a]||c[q1(a)]||c[t4(q1(a))])}const wo=c=>c.__isSuspense;function yo(c,a){a&&a.pendingBranch?T(c)?a.effects.push(...c):a.effects.push(c):Vo(c)}const Ao=Symbol.for("v-scx"),Po=()=>j3(Ao),_3={};function I3(c,a,e){return W5(c,a,e)}function W5(c,a,{immediate:e,deep:r,flush:i,once:s,onTrack:n,onTrigger:l}=K){if(a&&s){const R=a;a=(...r1)=>{R(...r1),I()}}const f=v1,t=R=>r===!0?R:u2(R,r===!1?1:void 0);let m,v=!1,V=!1;if(C1(c)?(m=()=>c.value,v=X3(c)):K2(c)?(m=()=>t(c),v=!0):T(c)?(V=!0,v=c.some(R=>K2(R)||X3(R)),m=()=>c.map(R=>{if(C1(R))return R.value;if(K2(R))return t(R);if(D(R))return e2(R,f,2)})):D(c)?a?m=()=>e2(c,f,2):m=()=>(g&&g(),A1(c,f,3,[q])):m=x1,a&&r){const R=m;m=()=>u2(R())}let g,q=R=>{g=y.onStop=()=>{e2(R,f,4),g=y.onStop=void 0}},_;if(V4)if(q=x1,a?e&&A1(a,f,3,[m(),V?[]:void 0,q]):m(),i==="sync"){const R=Po();_=R.__watcherHandles||(R.__watcherHandles=[])}else return x1;let G=V?new Array(c.length).fill(_3):_3;const b=()=>{if(!(!y.active||!y.dirty))if(a){const R=y.run();(r||v||(V?R.some((r1,u1)=>r2(r1,G[u1])):r2(R,G)))&&(g&&g(),A1(a,f,3,[R,G===_3?void 0:V&&G[0]===_3?[]:G,q]),G=R)}else y.run()};b.allowRecurse=!!a;let N;i==="sync"?N=b:i==="post"?N=()=>M1(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),N=()=>I6(b));const y=new F6(m,x1,N),E=$f(),I=()=>{y.stop(),E&&A6(E.effects,y)};return a?e?b():G=y.run():i==="post"?M1(y.run.bind(y),f&&f.suspense):y.run(),_&&_.push(I),I}function _o(c,a,e){const r=this.proxy,i=s1(c)?c.includes(".")?Z5(r,c):()=>r[c]:c.bind(r,r);let s;D(a)?s=a:(s=a.handler,e=a);const n=h3(this),l=W5(i,s.bind(r),e);return n(),l}function Z5(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function u2(c,a=1/0,e){if(a<=0||!Q(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),a--,C1(c))u2(c.value,a,e);else if(T(c))for(let r=0;r<c.length;r++)u2(c[r],a,e);else if(V5(c)||S2(c))c.forEach(r=>{u2(r,a,e)});else if(C5(c))for(const r in c)u2(c[r],a,e);return c}function Z4(c,a){if(o1===null)return c;const e=M4(o1)||o1.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[s,n,l,f=K]=a[i];s&&(D(s)&&(s={mounted:s,updated:s}),s.deep&&u2(n),r.push({dir:s,instance:e,value:n,oldValue:void 0,arg:l,modifiers:f}))}return c}function m2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const l=i[n];s&&(l.oldValue=s[n].value);let f=l.dir[r];f&&(l2(),A1(f,e,8,[c.el,l,c,a]),f2())}}/*! #__NO_SIDE_EFFECTS__ */function To(c,a){return D(c)?t1({name:c.name},a,{setup:c}):c}const Y2=c=>!!c.type.__asyncLoader,K5=c=>c.type.__isKeepAlive;function Fo(c,a){Y5(c,"a",a)}function Bo(c,a){Y5(c,"da",a)}function Y5(c,a,e=v1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(u4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)K5(i.parent.vnode)&&Ro(r,a,e,i),i=i.parent}}function Ro(c,a,e,r){const i=u4(a,c,r,!0);X5(()=>{A6(r[a],i)},e)}function u4(c,a,e=v1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;l2();const l=h3(e),f=A1(a,e,c,n);return l(),f2(),f});return r?i.unshift(s):i.push(s),s}}const W1=c=>(a,e=v1)=>(!V4||c==="sp")&&u4(c,(...r)=>a(...r),e),Do=W1("bm"),qo=W1("m"),Eo=W1("bu"),Oo=W1("u"),$o=W1("bum"),X5=W1("um"),Uo=W1("sp"),Io=W1("rtg"),jo=W1("rtc");function Go(c,a=v1){u4("ec",c,a)}function K4(c,a,e,r){let i;const s=e;if(T(c)||s1(c)){i=new Array(c.length);for(let n=0,l=c.length;n<l;n++)i[n]=a(c[n],n,void 0,s)}else if(typeof c=="number"){i=new Array(c);for(let n=0;n<c;n++)i[n]=a(n+1,n,void 0,s)}else if(Q(c))if(c[Symbol.iterator])i=Array.from(c,(n,l)=>a(n,l,void 0,s));else{const n=Object.keys(c);i=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const t=n[l];i[l]=a(c[t],t,l,s)}}else i=[];return i}function A2(c,a,e={},r,i){if(o1.isCE||o1.parent&&Y2(o1.parent)&&o1.parent.isCE)return B("slot",e,r);let s=c[a];s&&s._c&&(s._d=!1),a1();const n=s&&J5(s(e)),l=vt(f1,{key:e.key||n&&n.key||`_${a}`},n||[],n&&c._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function J5(c){return c.some(a=>c4(a)?!(a.type===P2||a.type===f1&&!J5(a.children)):!0)?c:null}const m6=c=>c?v7(c)?M4(c)||c.proxy:m6(c.parent):null,X2=t1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>m6(c.parent),$root:c=>m6(c.root),$emit:c=>c.emit,$options:c=>j6(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,I6(c.update)}),$nextTick:c=>c.n||(c.n=Ho.bind(c.proxy)),$watch:c=>_o.bind(c)}),Y4=(c,a)=>c!==K&&!c.__isScriptSetup&&$(c,a),Wo={get({_:c},a){if(a==="__v_skip")return!0;const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:l,appContext:f}=c;let t;if(a[0]!=="$"){const g=n[a];if(g!==void 0)switch(g){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(Y4(r,a))return n[a]=1,r[a];if(i!==K&&$(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&$(t,a))return n[a]=3,s[a];if(e!==K&&$(e,a))return n[a]=4,e[a];z6&&(n[a]=0)}}const m=X2[a];let v,V;if(m)return a==="$attrs"&&d1(c.attrs,"get",""),m(c);if((v=l.__cssModules)&&(v=v[a]))return v;if(e!==K&&$(e,a))return n[a]=4,e[a];if(V=f.config.globalProperties,$(V,a))return V[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return Y4(i,a)?(i[a]=e,!0):r!==K&&$(r,a)?(r[a]=e,!0):$(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let l;return!!e[n]||c!==K&&$(c,n)||Y4(a,n)||(l=s[0])&&$(l,n)||$(r,n)||$(X2,n)||$(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:$(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function N0(c){return T(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let z6=!0;function Zo(c){const a=j6(c),e=c.proxy,r=c.ctx;z6=!1,a.beforeCreate&&k0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:l,provide:f,inject:t,created:m,beforeMount:v,mounted:V,beforeUpdate:g,updated:q,activated:_,deactivated:G,beforeDestroy:b,beforeUnmount:N,destroyed:y,unmounted:E,render:I,renderTracked:R,renderTriggered:r1,errorCaptured:u1,serverPrefetch:b1,expose:E1,inheritAttrs:R2,components:b3,directives:x3,filters:$4}=a;if(t&&Ko(t,r,null),n)for(const c1 in n){const Z=n[c1];D(Z)&&(r[c1]=Z.bind(e))}if(i){const c1=i.call(e,e);Q(c1)&&(c.data=E6(c1))}if(z6=!0,s)for(const c1 in s){const Z=s[c1],o2=D(Z)?Z.bind(e,e):D(Z.get)?Z.get.bind(e,e):x1,N3=!D(Z)&&D(Z.set)?Z.set.bind(e):x1,t2=h2({get:o2,set:N3});Object.defineProperty(r,c1,{enumerable:!0,configurable:!0,get:()=>t2.value,set:P1=>t2.value=P1})}if(l)for(const c1 in l)Q5(l[c1],r,e,c1);if(f){const c1=D(f)?f.call(e):f;Reflect.ownKeys(c1).forEach(Z=>{at(Z,c1[Z])})}m&&k0(m,c,"c");function h1(c1,Z){T(Z)?Z.forEach(o2=>c1(o2.bind(e))):Z&&c1(Z.bind(e))}if(h1(Do,v),h1(qo,V),h1(Eo,g),h1(Oo,q),h1(Fo,_),h1(Bo,G),h1(Go,u1),h1(jo,R),h1(Io,r1),h1($o,N),h1(X5,E),h1(Uo,b1),T(E1))if(E1.length){const c1=c.exposed||(c.exposed={});E1.forEach(Z=>{Object.defineProperty(c1,Z,{get:()=>e[Z],set:o2=>e[Z]=o2})})}else c.exposed||(c.exposed={});I&&c.render===x1&&(c.render=I),R2!=null&&(c.inheritAttrs=R2),b3&&(c.components=b3),x3&&(c.directives=x3)}function Ko(c,a,e=x1){T(c)&&(c=v6(c));for(const r in c){const i=c[r];let s;Q(i)?"default"in i?s=j3(i.from||r,i.default,!0):s=j3(i.from||r):s=j3(i),C1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function k0(c,a,e){A1(T(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function Q5(c,a,e,r){const i=r.includes(".")?Z5(e,r):()=>e[r];if(s1(c)){const s=a[c];D(s)&&I3(i,s)}else if(D(c))I3(i,c.bind(e));else if(Q(c))if(T(c))c.forEach(s=>Q5(s,a,e,r));else{const s=D(c.handler)?c.handler.bind(e):a[c.handler];D(s)&&I3(i,s,c)}}function j6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,l=s.get(a);let f;return l?f=l:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(t=>Q3(f,t,n,!0)),Q3(f,a,n)),Q(a)&&s.set(a,f),f}function Q3(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&Q3(c,s,e,!0),i&&i.forEach(n=>Q3(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=Yo[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const Yo={data:S0,props:w0,emits:w0,methods:j2,computed:j2,beforeCreate:H1,created:H1,beforeMount:H1,mounted:H1,beforeUpdate:H1,updated:H1,beforeDestroy:H1,beforeUnmount:H1,destroyed:H1,unmounted:H1,activated:H1,deactivated:H1,errorCaptured:H1,serverPrefetch:H1,components:j2,directives:j2,watch:Jo,provide:S0,inject:Xo};function S0(c,a){return a?c?function(){return t1(D(c)?c.call(this,this):c,D(a)?a.call(this,this):a)}:a:c}function Xo(c,a){return j2(v6(c),v6(a))}function v6(c){if(T(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function H1(c,a){return c?[...new Set([].concat(c,a))]:a}function j2(c,a){return c?t1(Object.create(null),c,a):a}function w0(c,a){return c?T(c)&&T(a)?[...new Set([...c,...a])]:t1(Object.create(null),N0(c),N0(a??{})):a}function Jo(c,a){if(!c)return a;if(!a)return c;const e=t1(Object.create(null),c);for(const r in a)e[r]=H1(c[r],a[r]);return e}function c7(){return{app:null,config:{isNativeTag:Sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qo=0;function ct(c,a){return function(r,i=null){D(r)||(r=t1({},r)),i!=null&&!Q(i)&&(i=null);const s=c7(),n=new WeakSet;let l=!1;const f=s.app={_uid:Qo++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:kt,get config(){return s.config},set config(t){},use(t,...m){return n.has(t)||(t&&D(t.install)?(n.add(t),t.install(f,...m)):D(t)&&(n.add(t),t(f,...m))),f},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),f},component(t,m){return m?(s.components[t]=m,f):s.components[t]},directive(t,m){return m?(s.directives[t]=m,f):s.directives[t]},mount(t,m,v){if(!l){const V=B(r,i);return V.appContext=s,v===!0?v="svg":v===!1&&(v=void 0),m&&a?a(V,t):c(V,t,v),l=!0,f._container=t,t.__vue_app__=f,M4(V.component)||V.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,m){return s.provides[t]=m,f},runWithContext(t){const m=J2;J2=f;try{return t()}finally{J2=m}}};return f}}let J2=null;function at(c,a){if(v1){let e=v1.provides;const r=v1.parent&&v1.parent.provides;r===e&&(e=v1.provides=Object.create(r)),e[c]=a}}function j3(c,a,e=!1){const r=v1||o1;if(r||J2){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:J2._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&D(a)?a.call(r&&r.proxy):a}}const a7={},e7=()=>Object.create(a7),r7=c=>Object.getPrototypeOf(c)===a7;function et(c,a,e,r=!1){const i={},s=e7();c.propsDefaults=Object.create(null),i7(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:fo(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function rt(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,l=j(i),[f]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const m=c.vnode.dynamicProps;for(let v=0;v<m.length;v++){let V=m[v];if(v4(c.emitsOptions,V))continue;const g=a[V];if(f)if($(s,V))g!==s[V]&&(s[V]=g,t=!0);else{const q=q1(V);i[q]=h6(f,l,q,g,c,!1)}else g!==s[V]&&(s[V]=g,t=!0)}}}else{i7(c,a,i,s)&&(t=!0);let m;for(const v in l)(!a||!$(a,v)&&((m=F2(v))===v||!$(a,m)))&&(f?e&&(e[v]!==void 0||e[m]!==void 0)&&(i[v]=h6(f,l,v,void 0,c,!0)):delete i[v]);if(s!==l)for(const v in s)(!a||!$(a,v))&&(delete s[v],t=!0)}t&&U1(c.attrs,"set","")}function i7(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(Z2(f))continue;const t=a[f];let m;i&&$(i,m=q1(f))?!s||!s.includes(m)?e[m]=t:(l||(l={}))[m]=t:v4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,n=!0)}if(s){const f=j(e),t=l||K;for(let m=0;m<s.length;m++){const v=s[m];e[v]=h6(i,f,v,t[v],c,!$(t,v))}}return n}function h6(c,a,e,r,i,s){const n=c[e];if(n!=null){const l=$(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&D(f)){const{propsDefaults:t}=i;if(e in t)r=t[e];else{const m=h3(i);r=t[e]=f.call(null,a),m()}}else r=f}n[0]&&(s&&!l?r=!1:n[1]&&(r===""||r===F2(e))&&(r=!0))}return r}function s7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},l=[];let f=!1;if(!D(c)){const m=v=>{f=!0;const[V,g]=s7(v,a,!0);t1(n,V),g&&l.push(...g)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!s&&!f)return Q(c)&&r.set(c,k2),k2;if(T(s))for(let m=0;m<s.length;m++){const v=q1(s[m]);y0(v)&&(n[v]=K)}else if(s)for(const m in s){const v=q1(m);if(y0(v)){const V=s[m],g=n[v]=T(V)||D(V)?{type:V}:t1({},V);if(g){const q=_0(Boolean,g.type),_=_0(String,g.type);g[0]=q>-1,g[1]=_<0||q<_,(q>-1||$(g,"default"))&&l.push(v)}}}const t=[n,l];return Q(c)&&r.set(c,t),t}function y0(c){return c[0]!=="$"&&!Z2(c)}function A0(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function P0(c,a){return A0(c)===A0(a)}function _0(c,a){return T(a)?a.findIndex(e=>P0(e,c)):D(a)&&P0(a,c)?0:-1}const n7=c=>c[0]==="_"||c==="$stable",G6=c=>T(c)?c.map(F1):[F1(c)],it=(c,a,e)=>{if(a._n)return a;const r=m1((...i)=>G6(a(...i)),e);return r._c=!1,r},l7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(n7(i))continue;const s=c[i];if(D(s))a[i]=it(i,s,r);else if(s!=null){const n=G6(s);a[i]=()=>n}}},f7=(c,a)=>{const e=G6(a);c.slots.default=()=>e},st=(c,a)=>{const e=c.slots=e7();if(c.vnode.shapeFlag&32){const r=a._;r?(t1(e,a),L5(e,"_",r,!0)):l7(a,e)}else a&&f7(c,a)},nt=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=K;if(r.shapeFlag&32){const l=a._;l?e&&l===1?s=!1:(t1(i,a),!e&&l===1&&delete i._):(s=!a.$stable,l7(a,i)),n=a}else a&&(f7(c,a),n={default:1});if(s)for(const l in i)!n7(l)&&n[l]==null&&delete i[l]};function H6(c,a,e,r,i=!1){if(T(c)){c.forEach((V,g)=>H6(V,a&&(T(a)?a[g]:a),e,r,i));return}if(Y2(r)&&!i)return;const s=r.shapeFlag&4?M4(r.component)||r.component.proxy:r.el,n=i?null:s,{i:l,r:f}=c,t=a&&a.r,m=l.refs===K?l.refs={}:l.refs,v=l.setupState;if(t!=null&&t!==f&&(s1(t)?(m[t]=null,$(v,t)&&(v[t]=null)):C1(t)&&(t.value=null)),D(f))e2(f,l,12,[n,m]);else{const V=s1(f),g=C1(f);if(V||g){const q=()=>{if(c.f){const _=V?$(v,f)?v[f]:m[f]:f.value;i?T(_)&&A6(_,s):T(_)?_.includes(s)||_.push(s):V?(m[f]=[s],$(v,f)&&(v[f]=m[f])):(f.value=[s],c.k&&(m[c.k]=f.value))}else V?(m[f]=n,$(v,f)&&(v[f]=n)):g&&(f.value=n,c.k&&(m[c.k]=n))};n?(q.id=-1,M1(q,e)):q()}}}const M1=yo;function lt(c){return ft(c)}function ft(c,a){const e=g5();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:l,createComment:f,setText:t,setElementText:m,parentNode:v,nextSibling:V,setScopeId:g=x1,insertStaticContent:q}=c,_=(o,z,H,u=null,p=null,C=null,x=void 0,d=null,L=!!z.dynamicChildren)=>{if(o===z)return;o&&!E2(o,z)&&(u=k3(o),P1(o,p,C,!0),o=null),z.patchFlag===-2&&(L=!1,z.dynamicChildren=null);const{type:M,ref:S,shapeFlag:P}=z;switch(M){case p4:G(o,z,H,u);break;case P2:b(o,z,H,u);break;case G3:o==null&&N(z,H,u,x);break;case f1:b3(o,z,H,u,p,C,x,d,L);break;default:P&1?I(o,z,H,u,p,C,x,d,L):P&6?x3(o,z,H,u,p,C,x,d,L):(P&64||P&128)&&M.process(o,z,H,u,p,C,x,d,L,D2)}S!=null&&p&&H6(S,o&&o.ref,C,z||o,!z)},G=(o,z,H,u)=>{if(o==null)r(z.el=l(z.children),H,u);else{const p=z.el=o.el;z.children!==o.children&&t(p,z.children)}},b=(o,z,H,u)=>{o==null?r(z.el=f(z.children||""),H,u):z.el=o.el},N=(o,z,H,u)=>{[o.el,o.anchor]=q(o.children,z,H,u,o.el,o.anchor)},y=({el:o,anchor:z},H,u)=>{let p;for(;o&&o!==z;)p=V(o),r(o,H,u),o=p;r(z,H,u)},E=({el:o,anchor:z})=>{let H;for(;o&&o!==z;)H=V(o),i(o),o=H;i(z)},I=(o,z,H,u,p,C,x,d,L)=>{z.type==="svg"?x="svg":z.type==="math"&&(x="mathml"),o==null?R(z,H,u,p,C,x,d,L):b1(o,z,p,C,x,d,L)},R=(o,z,H,u,p,C,x,d)=>{let L,M;const{props:S,shapeFlag:P,transition:A,dirs:F}=o;if(L=o.el=n(o.type,C,S&&S.is,S),P&8?m(L,o.children):P&16&&u1(o.children,L,null,u,p,X4(o,C),x,d),F&&m2(o,null,u,"created"),r1(L,o,o.scopeId,x,u),S){for(const W in S)W!=="value"&&!Z2(W)&&s(L,W,null,S[W],C,o.children,u,p,O1);"value"in S&&s(L,"value",null,S.value,C),(M=S.onVnodeBeforeMount)&&T1(M,u,o)}F&&m2(o,null,u,"beforeMount");const O=ot(p,A);O&&A.beforeEnter(L),r(L,z,H),((M=S&&S.onVnodeMounted)||O||F)&&M1(()=>{M&&T1(M,u,o),O&&A.enter(L),F&&m2(o,null,u,"mounted")},p)},r1=(o,z,H,u,p)=>{if(H&&g(o,H),u)for(let C=0;C<u.length;C++)g(o,u[C]);if(p){let C=p.subTree;if(z===C){const x=p.vnode;r1(o,x,x.scopeId,x.slotScopeIds,p.parent)}}},u1=(o,z,H,u,p,C,x,d,L=0)=>{for(let M=L;M<o.length;M++){const S=o[M]=d?Q1(o[M]):F1(o[M]);_(null,S,z,H,u,p,C,x,d)}},b1=(o,z,H,u,p,C,x)=>{const d=z.el=o.el;let{patchFlag:L,dynamicChildren:M,dirs:S}=z;L|=o.patchFlag&16;const P=o.props||K,A=z.props||K;let F;if(H&&z2(H,!1),(F=A.onVnodeBeforeUpdate)&&T1(F,H,z,o),S&&m2(z,o,H,"beforeUpdate"),H&&z2(H,!0),M?E1(o.dynamicChildren,M,d,H,u,X4(z,p),C):x||Z(o,z,d,null,H,u,X4(z,p),C,!1),L>0){if(L&16)R2(d,z,P,A,H,u,p);else if(L&2&&P.class!==A.class&&s(d,"class",null,A.class,p),L&4&&s(d,"style",P.style,A.style,p),L&8){const O=z.dynamicProps;for(let W=0;W<O.length;W++){const J=O[W],l1=P[J],N1=A[J];(N1!==l1||J==="value")&&s(d,J,l1,N1,p,o.children,H,u,O1)}}L&1&&o.children!==z.children&&m(d,z.children)}else!x&&M==null&&R2(d,z,P,A,H,u,p);((F=A.onVnodeUpdated)||S)&&M1(()=>{F&&T1(F,H,z,o),S&&m2(z,o,H,"updated")},u)},E1=(o,z,H,u,p,C,x)=>{for(let d=0;d<z.length;d++){const L=o[d],M=z[d],S=L.el&&(L.type===f1||!E2(L,M)||L.shapeFlag&70)?v(L.el):H;_(L,M,S,null,u,p,C,x,!0)}},R2=(o,z,H,u,p,C,x)=>{if(H!==u){if(H!==K)for(const d in H)!Z2(d)&&!(d in u)&&s(o,d,H[d],null,x,z.children,p,C,O1);for(const d in u){if(Z2(d))continue;const L=u[d],M=H[d];L!==M&&d!=="value"&&s(o,d,M,L,x,z.children,p,C,O1)}"value"in u&&s(o,"value",H.value,u.value,x)}},b3=(o,z,H,u,p,C,x,d,L)=>{const M=z.el=o?o.el:l(""),S=z.anchor=o?o.anchor:l("");let{patchFlag:P,dynamicChildren:A,slotScopeIds:F}=z;F&&(d=d?d.concat(F):F),o==null?(r(M,H,u),r(S,H,u),u1(z.children||[],H,S,p,C,x,d,L)):P>0&&P&64&&A&&o.dynamicChildren?(E1(o.dynamicChildren,A,H,p,C,x,d),(z.key!=null||p&&z===p.subTree)&&o7(o,z,!0)):Z(o,z,H,S,p,C,x,d,L)},x3=(o,z,H,u,p,C,x,d,L)=>{z.slotScopeIds=d,o==null?z.shapeFlag&512?p.ctx.activate(z,H,u,x,L):$4(z,H,u,p,C,x,L):l0(o,z,L)},$4=(o,z,H,u,p,C,x)=>{const d=o.component=Mt(o,u,p);if(K5(o)&&(d.ctx.renderer=D2),dt(d),d.asyncDep){if(p&&p.registerDep(d,h1),!o.el){const L=d.subTree=B(P2);b(null,L,z,H)}}else h1(d,o,z,H,p,C,x)},l0=(o,z,H)=>{const u=z.component=o.component;if(bo(o,z,H))if(u.asyncDep&&!u.asyncResolved){c1(u,z,H);return}else u.next=z,po(u.update),u.effect.dirty=!0,u.update();else z.el=o.el,u.vnode=z},h1=(o,z,H,u,p,C,x)=>{const d=()=>{if(o.isMounted){let{next:S,bu:P,u:A,parent:F,vnode:O}=o;{const b2=t7(o);if(b2){S&&(S.el=O.el,c1(o,S,x)),b2.asyncDep.then(()=>{o.isUnmounted||d()});return}}let W=S,J;z2(o,!1),S?(S.el=O.el,c1(o,S,x)):S=O,P&&j4(P),(J=S.props&&S.props.onVnodeBeforeUpdate)&&T1(J,F,S,O),z2(o,!0);const l1=W4(o),N1=o.subTree;o.subTree=l1,_(N1,l1,v(N1.el),k3(N1),o,p,C),S.el=l1.el,W===null&&xo(o,l1.el),A&&M1(A,p),(J=S.props&&S.props.onVnodeUpdated)&&M1(()=>T1(J,F,S,O),p)}else{let S;const{el:P,props:A}=z,{bm:F,m:O,parent:W}=o,J=Y2(z);if(z2(o,!1),F&&j4(F),!J&&(S=A&&A.onVnodeBeforeMount)&&T1(S,W,z),z2(o,!0),P&&m0){const l1=()=>{o.subTree=W4(o),m0(P,o.subTree,o,p,null)};J?z.type.__asyncLoader().then(()=>!o.isUnmounted&&l1()):l1()}else{const l1=o.subTree=W4(o);_(null,l1,H,u,o,p,C),z.el=l1.el}if(O&&M1(O,p),!J&&(S=A&&A.onVnodeMounted)){const l1=z;M1(()=>T1(S,W,l1),p)}(z.shapeFlag&256||W&&Y2(W.vnode)&&W.vnode.shapeFlag&256)&&o.a&&M1(o.a,p),o.isMounted=!0,z=H=u=null}},L=o.effect=new F6(d,x1,()=>I6(M),o.scope),M=o.update=()=>{L.dirty&&L.run()};M.id=o.uid,z2(o,!0),M()},c1=(o,z,H)=>{z.component=o;const u=o.vnode.props;o.vnode=z,o.next=null,rt(o,z.props,u,H),nt(o,z.children,H),l2(),g0(o),f2()},Z=(o,z,H,u,p,C,x,d,L=!1)=>{const M=o&&o.children,S=o?o.shapeFlag:0,P=z.children,{patchFlag:A,shapeFlag:F}=z;if(A>0){if(A&128){N3(M,P,H,u,p,C,x,d,L);return}else if(A&256){o2(M,P,H,u,p,C,x,d,L);return}}F&8?(S&16&&O1(M,p,C),P!==M&&m(H,P)):S&16?F&16?N3(M,P,H,u,p,C,x,d,L):O1(M,p,C,!0):(S&8&&m(H,""),F&16&&u1(P,H,u,p,C,x,d,L))},o2=(o,z,H,u,p,C,x,d,L)=>{o=o||k2,z=z||k2;const M=o.length,S=z.length,P=Math.min(M,S);let A;for(A=0;A<P;A++){const F=z[A]=L?Q1(z[A]):F1(z[A]);_(o[A],F,H,null,p,C,x,d,L)}M>S?O1(o,p,C,!0,!1,P):u1(z,H,u,p,C,x,d,L,P)},N3=(o,z,H,u,p,C,x,d,L)=>{let M=0;const S=z.length;let P=o.length-1,A=S-1;for(;M<=P&&M<=A;){const F=o[M],O=z[M]=L?Q1(z[M]):F1(z[M]);if(E2(F,O))_(F,O,H,null,p,C,x,d,L);else break;M++}for(;M<=P&&M<=A;){const F=o[P],O=z[A]=L?Q1(z[A]):F1(z[A]);if(E2(F,O))_(F,O,H,null,p,C,x,d,L);else break;P--,A--}if(M>P){if(M<=A){const F=A+1,O=F<S?z[F].el:u;for(;M<=A;)_(null,z[M]=L?Q1(z[M]):F1(z[M]),H,O,p,C,x,d,L),M++}}else if(M>A)for(;M<=P;)P1(o[M],p,C,!0),M++;else{const F=M,O=M,W=new Map;for(M=O;M<=A;M++){const L1=z[M]=L?Q1(z[M]):F1(z[M]);L1.key!=null&&W.set(L1.key,M)}let J,l1=0;const N1=A-O+1;let b2=!1,z0=0;const q2=new Array(N1);for(M=0;M<N1;M++)q2[M]=0;for(M=F;M<=P;M++){const L1=o[M];if(l1>=N1){P1(L1,p,C,!0);continue}let _1;if(L1.key!=null)_1=W.get(L1.key);else for(J=O;J<=A;J++)if(q2[J-O]===0&&E2(L1,z[J])){_1=J;break}_1===void 0?P1(L1,p,C,!0):(q2[_1-O]=M+1,_1>=z0?z0=_1:b2=!0,_(L1,z[_1],H,null,p,C,x,d,L),l1++)}const v0=b2?tt(q2):k2;for(J=v0.length-1,M=N1-1;M>=0;M--){const L1=O+M,_1=z[L1],h0=L1+1<S?z[L1+1].el:u;q2[M]===0?_(null,_1,H,h0,p,C,x,d,L):b2&&(J<0||M!==v0[J]?t2(_1,H,h0,2):J--)}}},t2=(o,z,H,u,p=null)=>{const{el:C,type:x,transition:d,children:L,shapeFlag:M}=o;if(M&6){t2(o.component.subTree,z,H,u);return}if(M&128){o.suspense.move(z,H,u);return}if(M&64){x.move(o,z,H,D2);return}if(x===f1){r(C,z,H);for(let P=0;P<L.length;P++)t2(L[P],z,H,u);r(o.anchor,z,H);return}if(x===G3){y(o,z,H);return}if(u!==2&&M&1&&d)if(u===0)d.beforeEnter(C),r(C,z,H),M1(()=>d.enter(C),p);else{const{leave:P,delayLeave:A,afterLeave:F}=d,O=()=>r(C,z,H),W=()=>{P(C,()=>{O(),F&&F()})};A?A(C,O,W):W()}else r(C,z,H)},P1=(o,z,H,u=!1,p=!1)=>{const{type:C,props:x,ref:d,children:L,dynamicChildren:M,shapeFlag:S,patchFlag:P,dirs:A}=o;if(d!=null&&H6(d,null,H,o,!0),S&256){z.ctx.deactivate(o);return}const F=S&1&&A,O=!Y2(o);let W;if(O&&(W=x&&x.onVnodeBeforeUnmount)&&T1(W,z,o),S&6)kf(o.component,H,u);else{if(S&128){o.suspense.unmount(H,u);return}F&&m2(o,null,z,"beforeUnmount"),S&64?o.type.remove(o,z,H,p,D2,u):M&&(C!==f1||P>0&&P&64)?O1(M,z,H,!1,!0):(C===f1&&P&384||!p&&S&16)&&O1(L,z,H),u&&f0(o)}(O&&(W=x&&x.onVnodeUnmounted)||F)&&M1(()=>{W&&T1(W,z,o),F&&m2(o,null,z,"unmounted")},H)},f0=o=>{const{type:z,el:H,anchor:u,transition:p}=o;if(z===f1){Nf(H,u);return}if(z===G3){E(o);return}const C=()=>{i(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(o.shapeFlag&1&&p&&!p.persisted){const{leave:x,delayLeave:d}=p,L=()=>x(H,C);d?d(o.el,C,L):L()}else C()},Nf=(o,z)=>{let H;for(;o!==z;)H=V(o),i(o),o=H;i(z)},kf=(o,z,H)=>{const{bum:u,scope:p,update:C,subTree:x,um:d}=o;u&&j4(u),p.stop(),C&&(C.active=!1,P1(x,o,z,H)),d&&M1(d,z),M1(()=>{o.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},O1=(o,z,H,u=!1,p=!1,C=0)=>{for(let x=C;x<o.length;x++)P1(o[x],z,H,u,p)},k3=o=>o.shapeFlag&6?k3(o.component.subTree):o.shapeFlag&128?o.suspense.next():V(o.anchor||o.el);let U4=!1;const o0=(o,z,H)=>{o==null?z._vnode&&P1(z._vnode,null,null,!0):_(z._vnode||null,o,z,null,null,null,H),U4||(U4=!0,g0(),I5(),U4=!1),z._vnode=o},D2={p:_,um:P1,m:t2,r:f0,mt:$4,mc:u1,pc:Z,pbc:E1,n:k3,o:c};let t0,m0;return{render:o0,hydrate:t0,createApp:ct(o0,t0)}}function X4({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function z2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function ot(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function o7(c,a,e=!1){const r=c.children,i=a.children;if(T(r)&&T(i))for(let s=0;s<r.length;s++){const n=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Q1(i[s]),l.el=n.el),e||o7(n,l)),l.type===p4&&(l.el=n.el)}}function tt(c){const a=c.slice(),e=[0];let r,i,s,n,l;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)l=s+n>>1,c[e[l]]<t?s=l+1:n=l;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}function t7(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:t7(a)}const mt=c=>c.__isTeleport,f1=Symbol.for("v-fgt"),p4=Symbol.for("v-txt"),P2=Symbol.for("v-cmt"),G3=Symbol.for("v-stc"),Q2=[];let S1=null;function a1(c=!1){Q2.push(S1=c?null:[])}function zt(){Q2.pop(),S1=Q2[Q2.length-1]||null}let n3=1;function T0(c){n3+=c}function m7(c){return c.dynamicChildren=n3>0?S1||k2:null,zt(),n3>0&&S1&&S1.push(c),c}function i1(c,a,e,r,i,s){return m7(h(c,a,e,r,i,s,!0))}function vt(c,a,e,r,i){return m7(B(c,a,e,r,i,!0))}function c4(c){return c?c.__v_isVNode===!0:!1}function E2(c,a){return c.type===a.type&&c.key===a.key}const z7=({key:c})=>c??null,W3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?s1(c)||C1(c)||D(c)?{i:o1,r:c,k:a,f:!!e}:c:null);function h(c,a=null,e=null,r=0,i=null,s=c===f1?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&z7(a),ref:a&&W3(a),scopeId:h4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:o1};return l?(Z6(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=s1(e)?8:16),n3>0&&!n&&S1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&S1.push(f),f}const B=ht;function ht(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===ko)&&(c=P2),c4(c)){const l=_2(c,a,!0);return e&&Z6(l,e),n3>0&&!s&&S1&&(l.shapeFlag&6?S1[S1.indexOf(c)]=l:S1.push(l)),l.patchFlag|=-2,l}if(xt(c)&&(c=c.__vccOpts),a){a=Ht(a);let{class:l,style:f}=a;l&&!s1(l)&&(a.class=T6(l)),Q(f)&&(D5(f)&&!T(f)&&(f=t1({},f)),a.style=_6(f))}const n=s1(c)?1:wo(c)?128:mt(c)?64:Q(c)?4:D(c)?2:0;return h(c,a,e,r,i,n,s,!0)}function Ht(c){return c?D5(c)||r7(c)?t1({},c):c:null}function _2(c,a,e=!1,r=!1){const{props:i,ref:s,patchFlag:n,children:l,transition:f}=c,t=a?ut(i||{},a):i,m={__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&z7(t),ref:a&&a.ref?e&&s?T(s)?s.concat(W3(a)):[s,W3(a)]:W3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:l,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==f1?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:f,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&_2(c.ssContent),ssFallback:c.ssFallback&&_2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return f&&r&&(m.transition=f.clone(m)),m}function w1(c=" ",a=0){return B(p4,null,c,a)}function W6(c,a){const e=B(G3,null,c);return e.staticCount=a,e}function F1(c){return c==null||typeof c=="boolean"?B(P2):T(c)?B(f1,null,c.slice()):typeof c=="object"?Q1(c):B(p4,null,String(c))}function Q1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:_2(c)}function Z6(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(T(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),Z6(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!r7(a)?a._ctx=o1:i===3&&o1&&(o1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else D(a)?(a={default:a,_ctx:o1},e=32):(a=String(a),r&64?(e=16,a=[w1(a)]):e=8);c.children=a,c.shapeFlag|=e}function ut(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=T6([a.class,r.class]));else if(i==="style")a.style=_6([a.style,r.style]);else if(l4(i)){const s=a[i],n=r[i];n&&s!==n&&!(T(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function T1(c,a,e,r=null){A1(c,a,7,[e,r])}const pt=c7();let Vt=0;function Mt(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||pt,s={uid:Vt++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:s7(r,i),emitsOptions:G5(r,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Co.bind(null,s),c.ce&&c.ce(s),s}let v1=null,a4,u6;{const c=g5(),a=(e,r)=>{let i;return(i=c[e])||(i=c[e]=[]),i.push(r),s=>{i.length>1?i.forEach(n=>n(s)):i[0](s)}};a4=a("__VUE_INSTANCE_SETTERS__",e=>v1=e),u6=a("__VUE_SSR_SETTERS__",e=>V4=e)}const h3=c=>{const a=v1;return a4(c),c.scope.on(),()=>{c.scope.off(),a4(a)}},F0=()=>{v1&&v1.scope.off(),a4(null)};function v7(c){return c.vnode.shapeFlag&4}let V4=!1;function dt(c,a=!1){a&&u6(a);const{props:e,children:r}=c.vnode,i=v7(c);et(c,e,i,a),st(c,r);const s=i?Ct(c,a):void 0;return a&&u6(!1),s}function Ct(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,Wo);const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?gt(c):null,s=h3(c);l2();const n=e2(r,c,0,[c.props,i]);if(f2(),s(),M5(n)){if(n.then(F0,F0),a)return n.then(l=>{B0(c,l,a)}).catch(l=>{z4(l,c,0)});c.asyncDep=n}else B0(c,n,a)}else h7(c,a)}function B0(c,a,e){D(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:Q(a)&&(c.setupState=O5(a)),h7(c,e)}let R0;function h7(c,a,e){const r=c.type;if(!c.render){if(!a&&R0&&!r.render){const i=r.template||j6(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,t=t1(t1({isCustomElement:s,delimiters:l},n),f);r.render=R0(i,t)}}c.render=r.render||x1}{const i=h3(c);l2();try{Zo(c)}finally{f2(),i()}}}const Lt={get(c,a){return d1(c,"get",""),c[a]}};function gt(c){const a=e=>{c.exposed=e||{}};return{attrs:new Proxy(c.attrs,Lt),slots:c.slots,emit:c.emit,expose:a}}function M4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(O5(oo(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in X2)return X2[e](c)},has(a,e){return e in a||e in X2}}))}function bt(c,a=!0){return D(c)?c.displayName||c.name:c.name||a&&c.__name}function xt(c){return D(c)&&"__vccOpts"in c}const h2=(c,a)=>to(c,a,V4);function Nt(c,a,e){const r=arguments.length;return r===2?Q(a)&&!T(a)?c4(a)?B(c,null,[a]):B(c,a):B(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&c4(e)&&(e=[e]),B(c,a,e))}const kt="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const St="http://www.w3.org/2000/svg",wt="http://www.w3.org/1998/Math/MathML",c2=typeof document<"u"?document:null,D0=c2&&c2.createElement("template"),yt={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a==="svg"?c2.createElementNS(St,c):a==="mathml"?c2.createElementNS(wt,c):c2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>c2.createTextNode(c),createComment:c=>c2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>c2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{D0.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const l=D0.content;if(r==="svg"||r==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},At=Symbol("_vtc");function Pt(c,a,e){const r=c[At];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const e4=Symbol("_vod"),H7=Symbol("_vsh"),J4={beforeMount(c,{value:a},{transition:e}){c[e4]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):O2(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),O2(c,!0),r.enter(c)):r.leave(c,()=>{O2(c,!1)}):O2(c,a))},beforeUnmount(c,{value:a}){O2(c,a)}};function O2(c,a){c.style.display=a?c[e4]:"none",c[H7]=!a}const _t=Symbol(""),Tt=/(^|;)\s*display\s*:/;function Ft(c,a,e){const r=c.style,i=s1(e);let s=!1;if(e&&!i){if(a)if(s1(a))for(const n of a.split(";")){const l=n.slice(0,n.indexOf(":")).trim();e[l]==null&&Z3(r,l,"")}else for(const n in a)e[n]==null&&Z3(r,n,"");for(const n in e)n==="display"&&(s=!0),Z3(r,n,e[n])}else if(i){if(a!==e){const n=r[_t];n&&(e+=";"+n),r.cssText=e,s=Tt.test(e)}}else a&&c.removeAttribute("style");e4 in c&&(c[e4]=s?r.display:"",c[H7]&&(r.display="none"))}const q0=/\s*!important$/;function Z3(c,a,e){if(T(e))e.forEach(r=>Z3(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Bt(c,a);q0.test(e)?c.setProperty(F2(r),e.replace(q0,""),"important"):c[r]=e}}const E0=["Webkit","Moz","ms"],Q4={};function Bt(c,a){const e=Q4[a];if(e)return e;let r=q1(a);if(r!=="filter"&&r in c)return Q4[a]=r;r=t4(r);for(let i=0;i<E0.length;i++){const s=E0[i]+r;if(s in c)return Q4[a]=s}return a}const O0="http://www.w3.org/1999/xlink";function Rt(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(O0,a.slice(6,a.length)):c.setAttributeNS(O0,a,e);else{const s=qf(a);e==null||s&&!b5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Dt(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){const t=l==="OPTION"?c.getAttribute("value")||"":c.value,m=e??"";(t!==m||!("_value"in c))&&(c.value=m),e==null&&c.removeAttribute(a),c._value=e;return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=b5(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function qt(c,a,e,r){c.addEventListener(a,e,r)}function Et(c,a,e,r){c.removeEventListener(a,e,r)}const $0=Symbol("_vei");function Ot(c,a,e,r,i=null){const s=c[$0]||(c[$0]={}),n=s[a];if(r&&n)n.value=r;else{const[l,f]=$t(a);if(r){const t=s[a]=jt(r,i);qt(c,l,t,f)}else n&&(Et(c,l,n,f),s[a]=void 0)}}const U0=/(?:Once|Passive|Capture)$/;function $t(c){let a;if(U0.test(c)){a={};let r;for(;r=c.match(U0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):F2(c.slice(2)),a]}let c6=0;const Ut=Promise.resolve(),It=()=>c6||(Ut.then(()=>c6=0),c6=Date.now());function jt(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;A1(Gt(r,e.value),a,5,[r])};return e.value=c,e.attached=It(),e}function Gt(c,a){if(T(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const I0=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Wt=(c,a,e,r,i,s,n,l,f)=>{const t=i==="svg";a==="class"?Pt(c,r,t):a==="style"?Ft(c,e,r):l4(a)?y6(a)||Ot(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Zt(c,a,r,t))?Dt(c,a,r,s,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Rt(c,a,r,t))};function Zt(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&I0(a)&&D(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const i=c.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return I0(a)&&s1(e)?!1:a in c}const Kt=t1({patchProp:Wt},yt);let j0;function Yt(){return j0||(j0=lt(Kt))}const Xt=(...c)=>{const a=Yt().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Qt(r);if(!i)return;const s=a._component;!D(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,Jt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function Jt(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function Qt(c){return s1(c)?document.querySelector(c):c}const Z1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},cm={},am={class:"navbar p-2 pr-4 w-fit rounded-br-3xl bg-slate-900 z-20"};function em(c,a){return a1(),i1("ul",am,[A2(c.$slots,"default",{},void 0,!0)])}const rm=Z1(cm,[["render",em],["__scopeId","data-v-35e4a2c9"]]),im={},sm={class:"m-1 py-1 px-2 bg-slate-900 text-white rounded-sm hover:bg-slate-200 hover:text-black"};function nm(c,a){return a1(),i1("button",sm,[A2(c.$slots,"default")])}const $2=Z1(im,[["render",nm]]),lm={},fm=c=>(z3("data-v-471a0158"),c=c(),v3(),c),om={class:"footer bg-black w-full p-2 mt-2 text-center"},tm=fm(()=>h("p",null,"© 2024 - Lander Jacobs",-1)),mm=[tm];function zm(c,a){return a1(),i1("div",om,mm)}const vm=Z1(lm,[["render",zm],["__scopeId","data-v-471a0158"]]),hm={key:0,class:"bg-slate-950 text-white customDistance rounded-lg"},Hm={key:1,class:"bg-slate-200 text-black customDistance rounded-lg"},um={__name:"BackgroundSection",props:["dark"],setup(c){const a=c;return(e,r)=>a.dark?(a1(),i1("div",hm,[A2(e.$slots,"default",{},void 0,!0)])):(a1(),i1("div",Hm,[A2(e.$slots,"default",{},void 0,!0)]))}},U2=Z1(um,[["__scopeId","data-v-05436243"]]),K6=c=>(z3("data-v-7f4e591d"),c=c(),v3(),c),pm={class:"area flex flex-col place-content-center items-center"},Vm=K6(()=>h("p",{class:"text-6xl sm:text-8xl lg:text-9xl font-bold mb-10"},"Welkom",-1)),Mm=K6(()=>h("div",{class:"flex flex-rows justify-center"},[h("p",{class:"mx-20 2xl:w-6/12"},"Ik ben Lander Jacobs, student op de Thomas More-hogeschool. Met dit portfolio hoop ik aan te tonen wat ik kan, waar mijn capaciteiten liggen en wat ik heb geleerd tijdens mijn studies.")],-1)),dm=K6(()=>h("ul",{class:"circles"},[h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li"),h("li")],-1)),Cm={__name:"WelcomeSection",emits:["clickMore"],setup(c,{emit:a}){const e=a;function r(){e("clickMore")}return(i,s)=>(a1(),i1("div",pm,[h("div",{class:"customHeight z-10 place-content-center text-center"},[Vm,Mm,h("button",{onClick:r,class:"transition-colors bg-white text-black hover:bg-black hover:text-white font-semibold border-2 border-gray-800 rounded shadow py-2 px-5 mt-5 w-max"}," Meer over mij ")]),dm]))}},Lm=Z1(Cm,[["__scopeId","data-v-7f4e591d"]]),gm="/images/profielfoto_professioneel.jpg",bm="/images/icons/c-sharp_logo.png",xm="/images/icons/java_logo.png",Nm="/images/icons/vue_logo.png",km="/images/icons/unity_logo.png",Sm="/images/icons/php_logo.png",wm="/images/icons/docker_logo.png",ym="/images/icons/flutter_logo.png",Am="/images/icons/python_logo.png",Pm="/images/icons/html_logo.png",_m="/images/icons/css_logo.png",Tm="/images/icons/javascript_logo.png",Fm="/images/icons/sql_logo.png",G2={__name:"DownloadButton",props:["pdfPath","dark"],setup(c){const a=c;function e(){const r=document.createElement("a");r.href=a.pdfPath,r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)}return(r,i)=>c.dark?(a1(),i1("button",{key:0,onClick:e,class:"transition-colors bg-black text-white hover:bg-gray-100 hover:text-black font-semibold border-2 border-gray-800 rounded shadow py-2 px-4 w-full"},[A2(r.$slots,"default")])):(a1(),i1("button",{key:1,onClick:e,class:"transition-colors bg-slate-100 text-black hover:bg-black hover:text-white font-semibold border-2 border-gray-800 rounded shadow py-2 px-4 w-full"},[A2(r.$slots,"default")]))}},U=c=>(z3("data-v-865238c4"),c=c(),v3(),c),Bm=U(()=>h("div",{class:"text-center"},[h("h1",{class:"text-5xl bg-slate-800 text-white p-5 mb-7 rounded"},"Over mij")],-1)),Rm={class:"grid sm:grid-flow-auto sm:auto-rows-auto xl:grid-flow-col xl:auto-cols-auto gap-4"},Dm=U(()=>h("div",{class:"place-content-center"},[h("img",{class:"max-w-[18rem] mx-auto rounded-xl",src:gm})],-1)),qm={class:"place-content-center"},Em={class:"grid auto-rows-auto grid-flow-auto gap-4 lg:pl-10"},Om=W6('<div class="" data-v-865238c4><p class="bg-slate-800 text-white text-lg font-bold mb-2 text-center" data-v-865238c4>Profiel</p><p data-v-865238c4>Ik ben <b data-v-865238c4>Lander Jacobs</b>, momenteel student aan de Thomas More hogeschool te Geel. Na het middelbaar ben ik na enkele keuzes beland bij de <b data-v-865238c4>graduaatsopleiding programmeren</b>. Door deze opleiding kreeg ik een basis in het programmeren. Doordat mijn passie voor development was aangewakkerd, besloot ik na mijn graduaatsopleiding verder te studeren. Als vervolgopleiding koos ik dan voor de <b data-v-865238c4>bacheloropleiding Toegepaste Informatica</b>. Hier heb ik mijn kennis omtrent <b data-v-865238c4>Application Development</b> kunnen uitdiepen en verbreden.</p><br data-v-865238c4><p data-v-865238c4>Als ik een eigenschap van mezelf naar voor zou moeten zetten, zou ik zeggen dat ik <b data-v-865238c4>creatief</b> uit de hoek kan komen. Ik kan plezier vinden in het verhelpen van problemen met behulp van de technologiën die ik al ken. Daarnaast <b data-v-865238c4>leer ik ook graag bij</b> om zo problemen die ik al eens ben tegengekomen in de toekomst anders te kunnen aanpakken.</p></div><p class="bg-slate-800 text-white text-lg font-bold mb-2 text-center" data-v-865238c4>Studieloopbaan</p>',2),$m={class:"grid sm:grid-flow-auto sm:auto-rows-auto xl:grid-flow-col xl:grid-cols-2 gap-4 px-10 text-center"},Um={class:"hover:scale-105 place-content-center"},Im=U(()=>h("h1",{class:"text-2xl font-bold"},"Graduaat Programmeren",-1)),jm=U(()=>h("p",null,"2020-2022",-1)),Gm={class:"hover:scale-105 place-content-center"},Wm=U(()=>h("h1",{class:"text-2xl font-bold"},"Bachelor Toegepaste Informatica",-1)),Zm=U(()=>h("p",null,"2022-2024",-1)),Km=U(()=>h("p",{class:"bg-slate-800 text-white text-lg font-bold mt-2 mb-5 text-center"},"Technische vaardigheden",-1)),Ym={class:"flex flex-row flex-wrap gap-5 my-5 justify-center text-black"},Xm=["onMouseover"],Jm=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:bm},null,-1)),Qm=U(()=>h("p",null,"C#",-1)),cz=[Jm,Qm],az=["onMouseover"],ez=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:xm},null,-1)),rz=U(()=>h("p",null,"Java",-1)),iz=[ez,rz],sz=["onMouseover"],nz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Nm},null,-1)),lz=U(()=>h("p",null,"Vue",-1)),fz=[nz,lz],oz=["onMouseover"],tz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:km},null,-1)),mz=U(()=>h("p",null,"Unity",-1)),zz=[tz,mz],vz=["onMouseover"],hz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:Sm},null,-1)),Hz=U(()=>h("p",null,"PHP",-1)),uz=[hz,Hz],pz=["onMouseover"],Vz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:wm},null,-1)),Mz=U(()=>h("p",null,"Docker",-1)),dz=[Vz,Mz],Cz=["onMouseover"],Lz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:ym},null,-1)),gz=U(()=>h("p",null,"Flutter",-1)),bz=[Lz,gz],xz=["onMouseover"],Nz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Am},null,-1)),kz=U(()=>h("p",null,"Python",-1)),Sz=[Nz,kz],wz=["onMouseover"],yz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Pm},null,-1)),Az=U(()=>h("p",null,"HTML",-1)),Pz=[yz,Az],_z=["onMouseover"],Tz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:_m},null,-1)),Fz=U(()=>h("p",null,"CSS",-1)),Bz=[Tz,Fz],Rz=["onMouseover"],Dz=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-3",src:Tm},null,-1)),qz=U(()=>h("p",null,"Javascript",-1)),Ez=[Dz,qz],Oz=["onMouseover"],$z=U(()=>h("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:Fm},null,-1)),Uz=U(()=>h("p",null,"SQL",-1)),Iz=[$z,Uz],jz=U(()=>h("hr",{class:"bg-slate-800 h-1 rounded-full my-4 mx-10 xl:mx-52"},null,-1)),Gz={class:"text-center flex flex-col justify-center"},Wz=U(()=>h("div",{class:"flex flex-rows justify-center"},[h("p",{class:"font-semibold mb-2 px-5 py-0.5 text-wrap bg-slate-800 text-white w-max"},"Mijn ervaring")],-1)),Zz={key:0},Kz={key:1},Yz=W6('<p class="bg-slate-800 text-white text-lg font-bold mt-2 mb-3 text-center" data-v-865238c4>Professionele vaardigheden</p><div class="mb-5 flex flex-row flex-wrap gap-5 justify-center text-black" data-v-865238c4><div class="text-center w-4/12" data-v-865238c4><p class="my-2 text-md font-semibold" data-v-865238c4>Betrouwbaar</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-865238c4><div class="bg-slate-900 h-5 rounded-full" style="width:100%;" data-v-865238c4></div></div></div><div class="text-center w-4/12" data-v-865238c4><p class="my-2 text-md font-semibold" data-v-865238c4>Teamwerk</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-865238c4><div class="bg-slate-900 h-5 rounded-full" style="width:95%;" data-v-865238c4></div></div></div><div class="text-center w-4/12" data-v-865238c4><p class="my-2 text-md font-semibold" data-v-865238c4>Zelfstandig</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-865238c4><div class="bg-slate-900 h-5 rounded-full" style="width:80%;" data-v-865238c4></div></div></div><div class="text-center w-4/12" data-v-865238c4><p class="my-2 text-md font-semibold" data-v-865238c4>Flexibel</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-865238c4><div class="bg-slate-900 h-5 rounded-full" style="width:80%;" data-v-865238c4></div></div></div><div class="text-center w-4/12" data-v-865238c4><p class="my-2 text-md font-semibold" data-v-865238c4>Nauwkeurig</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-865238c4><div class="bg-slate-900 h-5 rounded-full" style="width:75%;" data-v-865238c4></div></div></div><div class="text-center w-4/12" data-v-865238c4><p class="my-2 text-md font-semibold" data-v-865238c4>Besluitvaardig</p><div class="w-full bg-gray-500 rounded-full h-5" data-v-865238c4><div class="bg-slate-900 h-5 rounded-full" style="width:65%;" data-v-865238c4></div></div></div></div>',2),Xz={class:"flex flex-rows justify-center"},Jz={class:"mt-5 w-8/12 sm:w-6/12"},Qz={__name:"AboutMe",setup(c){let a=B1("C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal");B1(null);function e(r){a.value=r}return(r,i)=>{const s=H4("font-awesome-icon");return a1(),i1(f1,null,[Bm,h("div",Rm,[Dm,h("div",qm,[h("div",Em,[Om,h("div",$m,[h("div",Um,[Im,B(s,{icon:["fas","user-graduate"],size:"4x",class:"my-2"}),jm]),h("div",Gm,[Wm,B(s,{icon:["fas","graduation-cap"],size:"4x",class:"my-2"}),Zm])])])])]),Km,h("div",null,[h("div",Ym,[h("div",{onMouseover:()=>e("C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal"),onClick:i[0]||(i[0]=()=>e("C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal")),class:"transition text-center hover:scale-110"},cz,40,Xm),h("div",{onMouseover:()=>e("Tijdens mijn traject in de professionele bachelor Toegepaste Informatica leerde ik ook werken met Java. Ik heb hier nog niet zoveel ervaring mee, maar zou deze zeker wel graag opdoen."),onClick:i[1]||(i[1]=()=>e("Tijdens mijn traject in de professionele bachelor Toegepaste Informatica leerde ik ook werken met Java. Ik heb hier nog niet zoveel ervaring mee, maar zou deze zeker wel graag opdoen.")),class:"transition text-center hover:scale-110"},iz,40,az),h("div",{onMouseover:()=>e("Tijdens een zomerproject met enkele medestudenten kozen we ervoor om Vue te gebruiken. Zo leerden we een nieuw framework dat we niet in onze opleiding kregen. Dit portfolio is ook gemaakt met behulp van Vue."),onClick:i[2]||(i[2]=()=>e("Tijdens een zomerproject met enkele medestudenten kozen we ervoor om Vue te gebruiken. Zo leerden we een nieuw framework dat we niet in onze opleiding kregen. Dit portfolio is ook gemaakt met behulp van Vue.")),class:"transition text-center hover:scale-110"},fz,40,sz),h("div",{onMouseover:()=>e("Tijdens mijn stage werkte ik gedurende 3 maanden aan een applicatie met Unity. Verder maakten we voor de scripts gebruik van C#."),onClick:i[3]||(i[3]=()=>e("Tijdens mijn stage werkte ik gedurende 3 maanden aan een applicatie met Unity. Verder maakten we voor de scripts gebruik van C#.")),class:"transition text-center hover:scale-110"},zz,40,oz),h("div",{onMouseover:()=>e('Ik leerde tijdens mijn opleiding ook werken met PHP. Voor het OPO "PHP Project" maakten we een applicatie in het PHP-framework Laravel.'),onClick:i[4]||(i[4]=()=>e('Ik leerde tijdens mijn opleiding ook werken met PHP. Voor het OPO "PHP Project" maakten we een applicatie in het PHP-framework Laravel.')),class:"transition text-center hover:scale-110"},uz,40,vz),h("div",{onMouseover:()=>e("Ik heb docker een aantal keer gebruikt voor kleinere opdrachten. Daarnaast heb ik het ook gebruikt voor een groter project dat diende als samenkomstpunt tussen verschillende IT-opleidingen."),onClick:i[5]||(i[5]=()=>e("Ik heb docker een aantal keer gebruikt voor kleinere opdrachten. Daarnaast heb ik het ook gebruikt voor een groter project dat diende als samenkomstpunt tussen verschillende IT-opleidingen.")),class:"transition text-center hover:scale-110"},dz,40,pz),h("div",{onMouseover:()=>e('Voor het OPO "Augmented Reality and Mobile App Development" maakte ik samen met een andere student een mobiele applicatie. Voor deze applicatie heb ik gewerkt aan de frontend met Flutter.'),onClick:i[6]||(i[6]=()=>e('Voor het OPO "Augmented Reality and Mobile App Development" maakte ik samen met een andere student een mobiele applicatie. Voor deze applicatie heb ik gewerkt aan de frontend met Flutter.')),class:"transition text-center hover:scale-110"},bz,40,Cz),h("div",{onMouseover:()=>e("Python is een taal die ik voornamelijk heb gebruikt in het verband met het verwerken van data, webscrapers en AI-gerelateerde projecten."),onClick:i[7]||(i[7]=()=>e("Python is een taal die ik voornamelijk heb gebruikt in het verband met het verwerken van data, webscrapers en AI-gerelateerde projecten.")),class:"transition text-center hover:scale-110"},Sz,40,xz),h("div",{onMouseover:()=>e("Voor het ontwerpen van webpagina's maak ik uiteraard gebruik van HTML. Dit leerde ik ook tijdens mijn graduaatsopleiding."),onClick:i[8]||(i[8]=()=>e("Voor het ontwerpen van webpagina's maak ik uiteraard gebruik van HTML. Dit leerde ik ook tijdens mijn graduaatsopleiding.")),class:"transition text-center hover:scale-110"},Pz,40,wz),h("div",{onMouseover:()=>e("Het stylen van webpagina's doe ik uiteraard via CSS. Soms kies ik er ook voor om libraries of frameworks te gebruiken die custom styling aanbieden met behulp van CSS. Een voorbeeld hiervan is de Tailwind-library."),onClick:i[9]||(i[9]=()=>e("Het stylen van webpagina's doe ik uiteraard via CSS. Soms kies ik er ook voor om libraries of frameworks te gebruiken die custom styling aanbieden met behulp van CSS. Een voorbeeld hiervan is de Tailwind-library.")),class:"transition text-center hover:scale-110"},Bz,40,_z),h("div",{onMouseover:()=>e("Voor het werken op webpagina's gebruik ik ook javascript. Deze taal gebruik ik ook wanneer ik werk met Vue."),onClick:i[10]||(i[10]=()=>e("Voor het werken op webpagina's gebruik ik ook javascript. Deze taal gebruik ik ook wanneer ik werk met Vue.")),class:"transition text-center hover:scale-110"},Ez,40,Rz),h("div",{onMouseover:()=>e("Tijdens de graduaatsopleiding heb ik vaak gewerkt met SQL voor het aanmaken van databases. Later gebruikte ik vaker de Code-First approach voor het werken met een database. Ik gebruik nog wel van tijd tot tijd SQL om de inhoud van mijn databases na te kijken."),onClick:i[11]||(i[11]=()=>e("Tijdens de graduaatsopleiding heb ik vaak gewerkt met SQL voor het aanmaken van databases. Later gebruikte ik vaker de Code-First approach voor het werken met een database. Ik gebruik nog wel van tijd tot tijd SQL om de inhoud van mijn databases na te kijken.")),class:"transition text-center hover:scale-110"},Iz,40,Oz)]),jz,h("div",Gz,[Wz,V1(a)!==""?(a1(),i1("p",Zz,v2(V1(a)),1)):(a1(),i1("p",Kz,"Als u meer wilt weten over de technologiën die ik ken kunt u over de gewenste technologie hoveren."))])]),Yz,h("div",Xz,[h("div",Jz,[B(G2,{dark:!0,pdfPath:"/documents/CV_LanderJacobs.pdf"},{default:m1(()=>[w1("Bekijk CV")]),_:1})])])],64)}}},cv=Z1(Qz,[["__scopeId","data-v-865238c4"]]),av="/images/mobilab_logo.png",ev="/images/hp_omnicept.png",rv=W6('<div class="text-center"><h1 class="text-5xl bg-slate-200 text-black p-5 mb-7 rounded">Stage</h1></div><div class="flex flex-row flex-wrap gap-5 justify-center"><div class="place-content-center justify-center"><img class="max-w-full md:max-w-sm md:m-2" src="'+av+'"></div><div class="sm:w-12/12 2xl:w-4/12 text-center"><p class="bg-slate-200 text-black text-lg font-bold mb-2">Ontwikkeling van een VR serious game</p><p>Ik deed mijn stage bij <b>Mobilab &amp; Care</b>. Dit is een onderzoekslab dat zich inzet voor een inclusievere samenleving. Hun doel is om de levenskwaliteit van mensen te verbeteren. Een van de onderwerpen waar ze mee bezig zijn is relaxatie verkrijgen door middel van <b>VR</b>.</p><br><p>Voor mijn stageopdracht heb ik samen met een andere stagiaire een VR-applicatie gemaakt. Deze applicatie zorgt ervoor dat men in een rustige omgeving wordt geplaatst. Daar kan men enkele activiteiten uitvoeren om tot rust te komen. Daarbij werkten we ook de <b>HP Reverb G2 Omnicept Edition</b>, dit is een <b>VR-headset</b> die <b>biologische feedback</b> kan geven over de gebruiker. Zodoende hebben we de data die we uit de headset konden verkrijgen, gebruikt om de VR-applicatie te laten reageren op de gemoedsrust van de gebruiker.</p><br><p>Hieronder vindt u de documenten voor mijn stage. Het plan van aanpak bevat meer uitleg over de stageopdracht en Mobilab zelf. Verder heb ik ook een realisatieverslag gemaakt van wat ik heb gerealiseerd tijdens mijn stage. Als laatste voerde ik ook nog een reflectie uit van mijn werk tijdens deze stage. Tijdens de stage hield ik ook een logboek bij met mijn dagdagelijks activiteiten.</p></div><div class="place-content-center justify-center"><img class="sm:max-w-full sm:max-w-md" src="'+ev+'"></div></div>',2),iv={class:"mt-3 flex flex-row flex-wrap justify-center"},sv={class:"mt-2 px-4 w-full lg:w-3/12"},nv={class:"mt-2 px-4 w-full lg:w-3/12"},lv={class:"mt-2 px-4 w-full lg:w-3/12"},fv={class:"mt-2 px-4 w-full lg:w-3/12"},ov={__name:"Internship",setup(c){return(a,e)=>(a1(),i1(f1,null,[rv,h("div",iv,[h("div",sv,[B(G2,{dark:!1,pdfPath:"/documents/Plan_van_aanpak.pdf"},{default:m1(()=>[w1("Plan van aanpak")]),_:1})]),h("div",nv,[B(G2,{dark:!1,pdfPath:"/documents/Realisatieverslag.pdf"},{default:m1(()=>[w1("Realisatie verslag")]),_:1})]),h("div",lv,[B(G2,{dark:!1,pdfPath:"/documents/Reflectieverslag.pdf"},{default:m1(()=>[w1("Reflectie verslag")]),_:1})]),h("div",fv,[B(G2,{dark:!1,pdfPath:"/documents/Logboek.pdf"},{default:m1(()=>[w1("Logboek")]),_:1})])])],64))}};class I2{constructor(a,e,r,i,s,n,l,f){this.title=a,this.imgLink=e,this.tags=r,this.smallText=i,this.middleText=s,this.bigText=n,this.githubLink=l,this.youtubeLink=f}}const tv=B1([new I2("Project 4.0: Choochoovision","/images/project_images/choochoovision.png",["Angular","Python","Java","Tailwind","Docker"],"Het OPO Project 4.0 vereist dat verschillende IT-richtingen samenwerken om voor een echte klant een project te maken. De groep waarin ik heb mogen werken bestaat uit een AI-student, twee Cloud en Cyber Security-studenten en twee Application Development studenten. Als opdracht maakten we voor RideOnTrack een applicatie waarin kon gelezen worden waar er problemen zijn op de treinsporen. Hiervoor werd een AI-model gemaakt dat de camerabeelden van de trein onderzocht en probeerde op te merken waar iets op het treinspoor lag. Dit hele project is een proof-of-concept en wordt zodoende nog door RideOnTrack bekeken of het uiteindelijk gebruikt zal worden.",["Mijn onderdeel voor deze opdracht was om de data van het AI-model door te sturen naar onze Java-backend, en uiteindelijk naar de Angular-frontend. Verder heb ik ook nog van tijd tot tijd mijn medestudent bijgestaan die bezig was met de backend en de frontend. Dit bijstaan was voornamelijk was voornamelijk op het vlak van enkele bugfixes of kleine problemen die soms naar voor kwamen.","De code die ik heb geschreven om de data van het AI-model door te sturen, was geschreven in Python. Dit was omdat de AI-modellen gebruik maakten van python-libraries om door de camerabeelden te gaan. Door python te gebruiken kon dit dan ook makkelijk in een docker-container worden geplaatst. Het gebruik van de docker-container ensceneerde dan de computer die op de trein staat, waar alle opnames van de treinsporen worden opgeslagen en dan ook de AI-modellen die daarmee zullen werken.","We werkten met twee AI-modellen die twee verschillende onderwerpen probeerden te detecteren. Daarom zorgde mijn code er ook voor dat de video die we gebruikten tijdens dit proof-of-concept deze twee modellen had gebruikt voordat de data wordt verstuurd. De data moest ook nog worden gefilterd om ervoor te zorgen dat er niet te veel wordt doorgestuurd. De AI-modellen merkten sommige zaken meerdere keren op. Als er geen filtering zou worden uitgevoerd, zou er bijvoorbeeld 20 afbeeldingen van eenzelfde probleem op de spoorwegen kunnen verstuurd worden.","Als laatste hebben we ook nog gebruik gemaakt van een externe API om locaties lang treinsporen te gebruiken. De video’s die we van RideOnTrack kregen gaven ons geen toegang tot de locaties waar ze werden opgenomen wegens privacy-redenen. Het gebruik van locaties van willekeurige treinsporen op de Belgische spoorwegen was voornamelijk om het proof-of-concept realistischer te laten overkomen."],"Tijdens deze opdracht heb ik voornamelijk leren werken met AI-modellen. Dit is ook door het feit dat we slechts een AI-student hadden die 2 modellen heeft gemaakt op een vrij korte periode. Om de last hiervan te ontnemen ben ik dan voornamelijk bezig geweest met de data van de modellen klaar te maken voor de backend. Ik heb ook de kans gehad om wat uitgebreidere dingen te mogen doen met Python. Het werken met Docker-containers was ook zeker nog interessant.","","https://www.youtube.com/watch?v=YxkGi11wp9Y"),new I2("PlaylistPortal","/images/project_images/playlistportal.png",["Vue","Tailwind","Javascript"],"Tijdens de zomer voor ons laatste jaar heb ik samen met 3 andere studenten een project gemaakt. Het doel van dit project was voornamelijk om een nieuwe taal te leren die we niet zouden zien tijdens onze studies. Zodoende kozen we voor Vue, als styling kozen we voor iets wat ons stuk bekender was: Tailwind. Omdat we niet zeker waren wat we zouden kunnen maken, besloten we de functionaliteiten van Spotify na te maken in een nieuwe applicatie. We doopten dit “PlaylistPortal”. Zoals te merken aan de naam managen we hierbinnen de afspeellijsten die iemand heeft. Verder kunnen er afspeellijsten worden bijgemaakt, nummers in een lijst worden toegevoegd of verwijdert, nummers worden afgespeeld, … . Hierbij zouden we gebruik maken van de Spotify-API en de Youtube-API, zo konden we ook uitbreiden met extra functionaliteiten zoals het tonen van Youtube-video’s.",["Tijdens dit project ben ik bezig geweest met de afspeelfunctie binnen de afspeellijsten. Zo zorgde ik voor het afspelen van een nummer, maar ook voor het afspelen van een hele lijst. Extra functionaliteiten waar ik aan werkte waren ook een manier om een lijst te shuffelen zodat nummers elke keer in een andere volgorde konden beluisterd worden. Die functionaliteit liet ik samenwerken met een andere functionaliteit waar ik aan werkte: het loopen van een huidig spelend nummer of een huidig afspelende lijst. Later werkte ik ook aan het toevoegen en verwijderen van afspeellijsten met behulp van de Youtube-API. Uiteraard deed ik ook mijn best om dit alles qua visuele stijl te laten overeenkomen met de huisstijl die we vooraf hadden overeengekomen."],"Dit project was interessant omdat het mij en mijn teamgenoten toeliet zelf de scope van de applicatie te bepalen. Ik kreeg zeker een breder zicht op wat ik kon, waar ik me in kon verbeteren en wat er mogelijk was. Dit kwam enigszins door samen te werken met oprecht gemotiveerde medestudenten en anderzijds door de vrijheid die was ontstaan door te werken buiten de grenzen van een opleiding. Vervolgens heb ik wat ik tijdens dit project heb geleerd op het vlak van Tailwind en Vue ook toegepast tijdens het werken aan het portfolio waar u zich nu bevindt.","",""),new I2("Mobile Development","/images/project_images/mobile_development.png",["Flutter","WikiTude","NodeJs","Javascript","MongoDB"],'Voor het OPO "Augmented Reality and Mobile App Development" moesten we in groepen van 2 een applicatie maken met AR-functionaliteit. Voor de AR-functionaliteit maakten we gebruik van WikiTude en voor de rest van de applicatie moesten we Flutter gebruiken. Als laatste moest deze applicatie ook data kunnen ophalen en opslaan met behulp van GET- POST- PUT- en DELETE-methoden. Ik en mijn collega besloten als onderwerp van de app te werken met hoeden. In onze applicatie kun je met AR een hoed op iemand zijn hoofd positioneren en vervolgens een review schrijven voor deze hoed.',["Tijdens dit project heb ik me bezig gehouden met het grootste deel van de Flutter-app en het opzetten en onderhouden van een API die we zelf hadden gemaakt. Mijn collega hield zich dan bezig met de AR-kant en deze samen te laten komen met de rest van de applicatie.","Als eerste maakte ik de API met behulp van NodeJS. Tijdens mijn graduaatsopleiding hadden we geleerd hoe we een API konden hosten op Netlify met behulp van NodeJS en MongoDB. Het opzetten van deze API en hiermee werken was optioneel, maar maakte het voor ons wel makkelijker om te werken aan onze applicatie.","Voor de rest werkte ik aan een inlogscherm, een overzicht van alle hoeden, een scherm om alle reviews van een hoed te zien en een scherm om reviews te bewerken. Het inlogscherm was voornamelijk zodat er een account zou gelinkt kunnen worden aan een review. Op het overzicht scherm werd per hoed berekend wat de gemiddelde rating is. Na het klikken op een hoed wordt men doorgestuurd naar het scherm met alle reviews voor de hoed. Hierbij kan men ook filteren op de eigen reviews. Een eigen review kan dan gebruikt worden om bewerkt te worden in een apart scherm of verwijdert te worden. Voor het aanmaken van de reviews moet men gebruik maken van de AR-functionaliteit die mijn collega heeft gemaakt."],"Dit project leerde me vooral te werken met Flutter. Verder heb ik ook nog eens gebruik kunnen maken van wat ik had geleerd tijdens de graduaatsopleiding. Door terug te gaan naar deze eerder vergaarde kennis, heb ik deze kunnen uitbreiden en beter kunnen gebruiken.","","https://www.youtube.com/watch?v=c5Vg62q7Fck"),new I2("Website voor fietsclub de Platte Berg","/images/project_images/platte_berg.png",["PHP","Laravel","Tailwind","HTML"],"Dit project is een opdracht vanuit de opleiding voor het OPO “PHP Project”. Hierbij werkten we samen met enkele andere studenten om een webapp te maken voor een theoretische klant. In dit geval was de klant een fietsclub die graag een website zou willen voor hun leden. Op deze website zou ingelogd moeten kunnen worden om zo verschillende faciliteiten van de club te kunnen bereiken zoals: wielerkledij, inschrijven voor ritten, enzovoorts. De website moest gemaakt worden met het PHP-framework Laravel.",["Tijdens dit project hebben ik meegewerkt aan de database die codefirst is aangemaakt. Verder hebben we deze aangemaakte database dan verbonden met de applicatie door middel van Livewire. Verder heb ik dan ook enkele pagina’s gemaakt. Deze werden gestyled door middel van Tailwind. Ook maakte ik een groot deel van de middelware die rekening moest houden met onderdelen die op de achtergrond werkten.","Tijdens dit project werkten we in een groep van 6. Door de nalatigheid van 2 van de studenten in deze groep heb ik een deel van hun werk moeten oppakken om de applicatie te laten werken. Zodoende heb ik tegen het einde van het project wat meer werk op me gekregen in vergelijking met enkele andere studenten."],"Als eerste zou ik kunnen stellen dat ik meer heb geleerd over hoe het Laravel-framework werkt. Dit was dan ook de eerste keer dat ik buiten een ander OPO om de kans heb gekregen om met PHP te werken. Dit zelfstandig werk leerde me dan ook meer over het opzoekwerk in online documentatie en welke bronnen online best te gebruiken zijn. Op het vlak van teamwerk heb ik mezelf ook een stuk flexibeler moeten opstellen om het wegvallen van enkele studenten op te kunnen vangen.","",""),new I2("Dungeon Project","/images/project_images/screenshot_dungeon_project.png",["C#",".Net Core","XML","SQL"],"Dit project is aangemaakt voor het OPO DevOps en Security. Voor de opdracht moest er een WPF-project worden gemaakt in .Net Core waarbij ook gebruik moest gemaakt worden van SQLlite. Vervolgens zou deze ook nog constant gebuild en getest worden met behulp van een CI/CD-pipeline. Nadat dit project klaar was voor de opdracht heb ik hier in mijn vrije tijd verder aan gewerkt.",["Als onderwerp besloot ik een RPG-stijl videogame te maken dat gemakkelijk kon verbreed worden door gegevens toe te voegen aan de SQLLite-database. De uitwerking van het spel was niet zeer belangrijk en het voornaamste was om de technische kant te laten werken.","Om het mezelf enigszins makkelijker te maken heb ik gebruik gemaakt van het MVVM-model om de applicatie uit te werken. De database is Code-First opgemaakt met behulp van ORM (Object-Relational-Mapping). Verder wordt de database gebruikt door middel van een Unit Of Work. De modellen voor de data worden ook beheerd met behulp van een Generic Repository.","Tijdens mijn vrije tijd heb ik dan ook verder gewerkt nadat de opdracht af was. De uitbreiding die ik er vervolgens op heb uitgevoerd zijn niet zeer indrukwekkend, maar hebben zeker nieuwe zaken bijgeleerd. Zo heb ik als grootste extra bijkomstigheid leren werken met threading binnen C#."],"Ik heb van dit project voornamelijk geleerd om zelfstandig een project op te zetten. Dit was namelijk de eerste keer dat ik op mezelf een relatief groot project was begonnen. Dit was ook een van de eerste keren dat ik binnen C# code-first werkte en met ORM. Dit project heeft me dan ook lessen meegegeven met betrekking tot datastructuur die ik vandaag de dag nog gebruik.","https://github.com/LanderJacobs/dungeon_project","")]),H3=c=>(z3("data-v-b2241e5e"),c=c(),v3(),c),mv={class:"fixed top-0 right-0 h-screen w-screen bg-black/80 place-content-center items-center flex flex-cols z-50"},zv={class:"bg-slate-200 sm:w-10/12 md:w-8/12 h-min rounded-t-lg customModalOverflow z-50"},vv={class:"text-2xl bg-black text-white py-5 mx-3 mb-1 text-center rounded-b-xl"},hv={class:"mx-5 mt-3"},Hv={class:"grid sm:grid-flow-auto sm:auto-rows-auto 2xl:grid-flow-col 2xl:auto-cols-auto justify-content gap-5"},uv={class:"place-content-center grid"},pv=["src"],Vv={class:"place-content-center"},Mv=H3(()=>h("p",{class:"text-black text-lg font-bold mt-3"},"Context",-1)),dv={class:"text-black mb-3"},Cv={class:"flex-wrap"},Lv=H3(()=>h("p",{class:"text-black text-lg font-bold mt-3"},"Hoe het project verliep",-1)),gv={class:"text-black mb-3 text-wrap"},bv=H3(()=>h("br",null,null,-1)),xv=H3(()=>h("p",{class:"text-black text-lg font-bold mt-3"},"Wat ik er uit heb geleerd",-1)),Nv={class:"text-black mb-3"},kv={class:"flex flex-cols justify-between m-2"},Sv=["href"],wv=["href"],yv=H3(()=>h("div",{class:"text-center"},[h("h1",{class:"text-5xl bg-slate-800 text-white p-5 mb-7 rounded"},"Realisaties")],-1)),Av={class:"flex flex-row flex-wrap gap-5 2xl:gap-10 justify-center"},Pv=["onClick"],_v={class:"text-white text-lg font-bold"},Tv={class:"place-content-center justify-center"},Fv=["src"],Bv={class:"flex flex-rows flex-wrap mt-2"},Rv={class:"bg-slate-100 text-black font-semibold place-content-center mx-2 mt-1 px-2 py-1 rounded-3xl"},Dv={__name:"Achievements",setup(c){let a=B1(!1),e=B1({title:{type:String,default:"Project naam"}});function r(){a.value=!a.value}function i(s){e.value=s,a.value=!0}return(s,n)=>{const l=H4("font-awesome-icon");return a1(),i1(f1,null,[Z4(h("div",mv,[h("div",zv,[h("p",vv,v2(V1(e).title),1),h("div",hv,[h("div",Hv,[h("div",uv,[h("img",{src:V1(e).imgLink,class:"sm:max-w-sm xl:max-w-lg border-x-4 border-y-2 border-black rounded-lg"},null,8,pv)]),h("div",Vv,[Mv,h("p",dv,v2(V1(e).smallText),1)])]),h("div",Cv,[Lv,(a1(!0),i1(f1,null,K4(V1(e).middleText,f=>(a1(),i1("p",gv,[w1(v2(f),1),bv]))),256)),xv,h("p",Nv,v2(V1(e).bigText),1)])]),h("div",kv,[h("button",{onClick:r,class:"transition-colors bg-black text-white hover:bg-gray-100 hover:text-black font-semibold border-2 border-gray-800 rounded shadow py-2 px-4"}," Sluit modal "),Z4(h("a",{href:V1(e).youtubeLink,target:"_blank",class:"bg-black text-white hover:bg-gray-100 hover:text-black border-2 border-gray-800 rounded-full size-fit p-2"},[B(l,{icon:["fab","youtube"],size:"lg"})],8,Sv),[[J4,V1(e).youtubeLink!==""]]),Z4(h("a",{href:V1(e).githubLink,target:"_blank",class:"bg-black text-white hover:bg-gray-100 hover:text-black border-2 border-gray-800 rounded-full size-fit p-2"},[B(l,{icon:["fab","github"],size:"lg"})],8,wv),[[J4,V1(e).githubLink!==""]])])]),h("div",{onClick:r,class:"fixed top-0 right-0 h-screen w-screen z-20"})],512),[[J4,V1(a)]]),yv,h("div",null,[h("div",null,[h("div",Av,[(a1(!0),i1(f1,null,K4(V1(tv),f=>(a1(),i1("div",{onClick:t=>i(f),class:"bg-slate-800 w-full grid grid-flow-auto auto-rows-auto md:w-5/12 lg:w-4/12 p-2 rounded-md hover:scale-105 transition"},[h("p",_v,v2(f.title),1),h("div",Tv,[h("img",{src:f.imgLink,class:"max-w-full rounded-lg"},null,8,Fv)]),h("div",Bv,[(a1(!0),i1(f1,null,K4(f.tags,t=>(a1(),i1("p",Rv,v2(t),1))),256))])],8,Pv))),256))])])])],64)}}},qv=Z1(Dv,[["__scopeId","data-v-b2241e5e"]]),Ev={},d4=c=>(z3("data-v-4449b80b"),c=c(),v3(),c),Ov={class:"customEndSection flex flex-col"},$v=d4(()=>h("div",{class:"text-center"},[h("h1",{class:"text-5xl bg-slate-200 text-black p-5 mb-7 rounded"},"Contact")],-1)),Uv={class:"flex flex-col flex-grow full gap-4 items-center place-content-center justify-center text-black"},Iv={href:"https://www.linkedin.com/in/landerjacobs2001/",target:"_blank",class:"w-6/12 md:w-3/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},jv=d4(()=>h("p",{class:"text-white"},"Bereik me via Linkedin",-1)),Gv={href:"https://github.com/LanderJacobs",target:"_blank",class:"w-6/12 md:w-3/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},Wv=d4(()=>h("p",{class:"text-white"},"Vind me op Github",-1)),Zv={href:"mailto:lander.jacobs2001@gmail.com",target:"_blank",class:"w-6/12 md:w-3/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},Kv=d4(()=>h("p",{class:"text-white"},"Stuur me een mail",-1));function Yv(c,a){const e=H4("font-awesome-icon");return a1(),i1("div",Ov,[$v,h("div",Uv,[h("a",Iv,[B(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fab","linkedin"],size:"3x"}),jv]),h("a",Gv,[B(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fab","github"],size:"3x"}),Wv]),h("a",Zv,[B(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fas","envelope"],size:"3x"}),Kv])])])}const Xv=Z1(Ev,[["render",Yv],["__scopeId","data-v-4449b80b"]]),Jv={__name:"App",setup(c){const a=B1(null),e=B1(null),r=B1(null),i=B1(null),s=B1(null);function n(){var v;(v=a.value)==null||v.scrollIntoView({behavior:"smooth"})}function l(){var v;(v=e.value)==null||v.scrollIntoView({behavior:"smooth"})}function f(){var v;(v=r.value)==null||v.scrollIntoView({behavior:"smooth"})}function t(){var v;(v=i.value)==null||v.scrollIntoView({behavior:"smooth"})}function m(){var v;(v=s.value)==null||v.scrollIntoView({behavior:"smooth"})}return(v,V)=>{const g=H4("font-awesome-icon");return a1(),i1(f1,null,[h("div",{ref_key:"welcomeRef",ref:a},null,512),B(rm,null,{default:m1(()=>[B($2,{onClick:n},{default:m1(()=>[B(g,{icon:"fas fa-house"})]),_:1}),B($2,{onClick:l},{default:m1(()=>[w1("Over mij")]),_:1}),B($2,{onClick:f},{default:m1(()=>[w1("Stage")]),_:1}),B($2,{onClick:t},{default:m1(()=>[w1("Realisaties")]),_:1}),B($2,{onClick:m},{default:m1(()=>[w1("Contact")]),_:1})]),_:1}),h("div",null,[B(U2,{dark:!0},{default:m1(()=>[B(Lm,{onClickMore:l})]),_:1}),h("div",{ref_key:"aboutmeRef",ref:e},[B(U2,{dark:!1},{default:m1(()=>[B(cv)]),_:1})],512),h("div",{ref_key:"internshipRef",ref:r},[B(U2,{dark:!0},{default:m1(()=>[B(ov)]),_:1})],512),h("div",{ref_key:"achievementsRef",ref:i},[B(U2,{dark:!1},{default:m1(()=>[B(qv)]),_:1})],512),h("div",{ref_key:"contactRef",ref:s},[B(U2,{dark:!0},{default:m1(()=>[B(Xv)]),_:1})],512)]),B(vm)],64)}}},Qv=Z1(Jv,[["__scopeId","data-v-284d83bc"]]);function G0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?G0(Object(e),!0).forEach(function(r){n1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):G0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function r4(c){"@babel/helpers - typeof";return r4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r4(c)}function ch(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function ah(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function eh(c,a,e){return a&&ah(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function n1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function Y6(c,a){return ih(c)||nh(c,a)||u7(c,a)||fh()}function u3(c){return rh(c)||sh(c)||u7(c)||lh()}function rh(c){if(Array.isArray(c))return p6(c)}function ih(c){if(Array.isArray(c))return c}function sh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function nh(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,l;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw l}}return r}}function u7(c,a){if(c){if(typeof c=="string")return p6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p6(c,a)}}function p6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function lh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W0=function(){},X6={},p7={},V7=null,M7={mark:W0,measure:W0};try{typeof window<"u"&&(X6=window),typeof document<"u"&&(p7=document),typeof MutationObserver<"u"&&(V7=MutationObserver),typeof performance<"u"&&(M7=performance)}catch{}var oh=X6.navigator||{},Z0=oh.userAgent,K0=Z0===void 0?"":Z0,i2=X6,X=p7,Y0=V7,T3=M7;i2.document;var K1=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",d7=~K0.indexOf("MSIE")||~K0.indexOf("Trident/"),F3,B3,R3,D3,q3,I1="___FONT_AWESOME___",V6=16,C7="fa",L7="svg-inline--fa",C2="data-fa-i2svg",M6="data-fa-pseudo-element",th="data-fa-pseudo-element-pending",J6="data-prefix",Q6="data-icon",X0="fontawesome-i2svg",mh="async",zh=["HTML","HEAD","STYLE","SCRIPT"],g7=function(){try{return!0}catch{return!1}}(),Y="classic",e1="sharp",c8=[Y,e1];function p3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Y]}})}var l3=p3((F3={},n1(F3,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),n1(F3,e1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),F3)),f3=p3((B3={},n1(B3,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),n1(B3,e1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),B3)),o3=p3((R3={},n1(R3,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),n1(R3,e1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),R3)),vh=p3((D3={},n1(D3,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),n1(D3,e1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),D3)),hh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,b7="fa-layers-text",Hh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,uh=p3((q3={},n1(q3,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),n1(q3,e1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),q3)),x7=[1,2,3,4,5,6,7,8,9,10],ph=x7.concat([11,12,13,14,15,16,17,18,19,20]),Vh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t3=new Set;Object.keys(f3[Y]).map(t3.add.bind(t3));Object.keys(f3[e1]).map(t3.add.bind(t3));var Mh=[].concat(c8,u3(t3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(x7.map(function(c){return"".concat(c,"x")})).concat(ph.map(function(c){return"w-".concat(c)})),c3=i2.FontAwesomeConfig||{};function dh(c){var a=X.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Ch(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(X&&typeof X.querySelector=="function"){var Lh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Lh.forEach(function(c){var a=Y6(c,2),e=a[0],r=a[1],i=Ch(dh(e));i!=null&&(c3[r]=i)})}var N7={styleDefault:"solid",familyDefault:"classic",cssPrefix:C7,replacementClass:L7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};c3.familyPrefix&&(c3.cssPrefix=c3.familyPrefix);var T2=k(k({},N7),c3);T2.autoReplaceSvg||(T2.observeMutations=!1);var w={};Object.keys(N7).forEach(function(c){Object.defineProperty(w,c,{enumerable:!0,set:function(e){T2[c]=e,a3.forEach(function(r){return r(w)})},get:function(){return T2[c]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(a){T2.cssPrefix=a,a3.forEach(function(e){return e(w)})},get:function(){return T2.cssPrefix}});i2.FontAwesomeConfig=w;var a3=[];function gh(c){return a3.push(c),function(){a3.splice(a3.indexOf(c),1)}}var X1=V6,D1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bh(c){if(!(!c||!K1)){var a=X.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=X.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return X.head.insertBefore(a,r),c}}var xh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m3(){for(var c=12,a="";c-- >0;)a+=xh[Math.random()*62|0];return a}function B2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function a8(c){return c.classList?B2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function k7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(k7(c[e]),'" ')},"").trim()}function C4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function e8(c){return c.size!==D1.size||c.x!==D1.x||c.y!==D1.y||c.rotate!==D1.rotate||c.flipX||c.flipY}function kh(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:t}}function Sh(c){var a=c.transform,e=c.width,r=e===void 0?V6:e,i=c.height,s=i===void 0?V6:i,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&d7?f+="translate(".concat(a.x/X1-r/2,"em, ").concat(a.y/X1-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/X1,"em), calc(-50% + ").concat(a.y/X1,"em)) "):f+="translate(".concat(a.x/X1,"em, ").concat(a.y/X1,"em) "),f+="scale(".concat(a.size/X1*(a.flipX?-1:1),", ").concat(a.size/X1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var wh=`:root, :host {
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
}`;function S7(){var c=C7,a=L7,e=w.cssPrefix,r=w.replacementClass,i=wh;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var J0=!1;function a6(){w.autoAddCss&&!J0&&(bh(S7()),J0=!0)}var yh={mixout:function(){return{dom:{css:S7,insertCss:a6}}},hooks:function(){return{beforeDOMElementCreation:function(){a6()},beforeI2svg:function(){a6()}}}},j1=i2||{};j1[I1]||(j1[I1]={});j1[I1].styles||(j1[I1].styles={});j1[I1].hooks||(j1[I1].hooks={});j1[I1].shims||(j1[I1].shims=[]);var y1=j1[I1],w7=[],Ah=function c(){X.removeEventListener("DOMContentLoaded",c),i4=1,w7.map(function(a){return a()})},i4=!1;K1&&(i4=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),i4||X.addEventListener("DOMContentLoaded",Ah));function Ph(c){K1&&(i4?setTimeout(c,0):w7.push(c))}function V3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?k7(c):"<".concat(a," ").concat(Nh(r),">").concat(s.map(V3).join(""),"</").concat(a,">")}function Q0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var e6=function(a,e,r,i){var s=Object.keys(a),n=s.length,l=e,f,t,m;for(r===void 0?(f=1,m=a[s[0]]):(f=0,m=r);f<n;f++)t=s[f],m=l(m,a[t],t,a);return m};function _h(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function d6(c){var a=_h(c);return a.length===1?a[0].toString(16):null}function Th(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function c5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function C6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=c5(a);typeof y1.hooks.addPack=="function"&&!i?y1.hooks.addPack(c,c5(a)):y1.styles[c]=k(k({},y1.styles[c]||{}),s),c==="fas"&&C6("fa",a)}var E3,O3,$3,x2=y1.styles,Fh=y1.shims,Bh=(E3={},n1(E3,Y,Object.values(o3[Y])),n1(E3,e1,Object.values(o3[e1])),E3),r8=null,y7={},A7={},P7={},_7={},T7={},Rh=(O3={},n1(O3,Y,Object.keys(l3[Y])),n1(O3,e1,Object.keys(l3[e1])),O3);function Dh(c){return~Mh.indexOf(c)}function qh(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Dh(i)?i:null}var F7=function(){var a=function(s){return e6(x2,function(n,l,f){return n[f]=e6(l,s,{}),n},{})};y7=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),A7=a(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),T7=a(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var e="far"in x2||w.autoFetchSvg,r=e6(Fh,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});P7=r.names,_7=r.unicodes,r8=L4(w.styleDefault,{family:w.familyDefault})};gh(function(c){r8=L4(c.styleDefault,{family:w.familyDefault})});F7();function i8(c,a){return(y7[c]||{})[a]}function Eh(c,a){return(A7[c]||{})[a]}function V2(c,a){return(T7[c]||{})[a]}function B7(c){return P7[c]||{prefix:null,iconName:null}}function Oh(c){var a=_7[c],e=i8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function s2(){return r8}var s8=function(){return{prefix:null,iconName:null,rest:[]}};function L4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Y:e,i=l3[r][c],s=f3[r][c]||f3[r][i],n=c in y1.styles?c:null;return s||n||null}var a5=($3={},n1($3,Y,Object.keys(o3[Y])),n1($3,e1,Object.keys(o3[e1])),$3);function g4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},n1(a,Y,"".concat(w.cssPrefix,"-").concat(Y)),n1(a,e1,"".concat(w.cssPrefix,"-").concat(e1)),a),n=null,l=Y;(c.includes(s[Y])||c.some(function(t){return a5[Y].includes(t)}))&&(l=Y),(c.includes(s[e1])||c.some(function(t){return a5[e1].includes(t)}))&&(l=e1);var f=c.reduce(function(t,m){var v=qh(w.cssPrefix,m);if(x2[m]?(m=Bh[l].includes(m)?vh[l][m]:m,n=m,t.prefix=m):Rh[l].indexOf(m)>-1?(n=m,t.prefix=L4(m,{family:l})):v?t.iconName=v:m!==w.replacementClass&&m!==s[Y]&&m!==s[e1]&&t.rest.push(m),!i&&t.prefix&&t.iconName){var V=n==="fa"?B7(t.iconName):{},g=V2(t.prefix,t.iconName);V.prefix&&(n=null),t.iconName=V.iconName||g||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!x2.far&&x2.fas&&!w.autoFetchSvg&&(t.prefix="fas")}return t},s8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===e1&&(x2.fass||w.autoFetchSvg)&&(f.prefix="fass",f.iconName=V2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=s2()||"fas"),f}var $h=function(){function c(){ch(this,c),this.definitions={}}return eh(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=k(k({},e.definitions[l]||{}),n[l]),C6(l,n[l]);var f=o3[Y][l];f&&C6(f,n[l]),F7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,t=n.icon,m=t[2];e[l]||(e[l]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(e[l][v]=t)}),e[l][f]=t}),e}}]),c}(),e5=[],N2={},y2={},Uh=Object.keys(y2);function Ih(c,a){var e=a.mixoutsTo;return e5=c,N2={},Object.keys(y2).forEach(function(r){Uh.indexOf(r)===-1&&delete y2[r]}),e5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),r4(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=i[n][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){N2[n]||(N2[n]=[]),N2[n].push(s[n])})}r.provides&&r.provides(y2)}),e}function L6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=N2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function L2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=N2[c]||[];i.forEach(function(s){s.apply(null,e)})}function G1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return y2[c]?y2[c].apply(null,a):void 0}function g6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||s2();if(a)return a=V2(e,a)||a,Q0(R7.definitions,e,a)||Q0(y1.styles,e,a)}var R7=new $h,jh=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,L2("noAuto")},Gh={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K1?(L2("beforeI2svg",a),G1("pseudoElements2svg",a),G1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Ph(function(){Zh({autoReplaceSvgRoot:e}),L2("watch",a)})}},Wh={icon:function(a){if(a===null)return null;if(r4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:V2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=L4(a[0]);return{prefix:r,iconName:V2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(w.cssPrefix,"-"))>-1||a.match(hh))){var i=g4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||s2(),iconName:V2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=s2();return{prefix:s,iconName:V2(s,a)||a}}}},g1={noAuto:jh,config:w,dom:Gh,parse:Wh,library:R7,findIconDefinition:g6,toHtml:V3},Zh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?X:e;(Object.keys(y1.styles).length>0||w.autoFetchSvg)&&K1&&w.autoReplaceSvg&&g1.dom.i2svg({node:r})};function b4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return V3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(K1){var r=X.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Kh(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(e8(n)&&e.found&&!r.found){var l=e.width,f=e.height,t={x:l/f/2,y:.5};i.style=C4(k(k({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Yh(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(w.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:n}),children:r}]}]}function n8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,m=c.titleId,v=c.extra,V=c.watchable,g=V===void 0?!1:V,q=r.found?r:e,_=q.width,G=q.height,b=i==="fak",N=[w.replacementClass,s?"".concat(w.cssPrefix,"-").concat(s):""].filter(function(b1){return v.classes.indexOf(b1)===-1}).filter(function(b1){return b1!==""||!!b1}).concat(v.classes).join(" "),y={children:[],attributes:k(k({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:N,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(G)})},E=b&&!~v.classes.indexOf("fa-fw")?{width:"".concat(_/G*16*.0625,"em")}:{};g&&(y.attributes[C2]=""),f&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(m||m3())},children:[f]}),delete y.attributes.title);var I=k(k({},y),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:l,styles:k(k({},E),v.styles)}),R=r.found&&e.found?G1("generateAbstractMask",I)||{children:[],attributes:{}}:G1("generateAbstractIcon",I)||{children:[],attributes:{}},r1=R.children,u1=R.attributes;return I.children=r1,I.attributes=u1,l?Yh(I):Kh(I)}function r5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=k(k(k({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(t[C2]="");var m=k({},n.styles);e8(i)&&(m.transform=Sh({transform:i,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var v=C4(m);v.length>0&&(t.style=v);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),s&&V.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),V}function Xh(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=C4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var r6=y1.styles;function b6(c){var a=c[0],e=c[1],r=c.slice(4),i=Y6(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var Jh={found:!1,width:512,height:512};function Qh(c,a){!g7&&!w.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function x6(c,a){var e=a;return a==="fa"&&w.styleDefault!==null&&(a=s2()),new Promise(function(r,i){if(G1("missingIconAbstract"),e==="fa"){var s=B7(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&r6[a]&&r6[a][c]){var n=r6[a][c];return r(b6(n))}Qh(c,a),r(k(k({},Jh),{},{icon:w.showMissingIcons&&c?G1("missingIconAbstract")||{}:{}}))})}var i5=function(){},N6=w.measurePerformance&&T3&&T3.mark&&T3.measure?T3:{mark:i5,measure:i5},W2='FA "6.5.2"',cH=function(a){return N6.mark("".concat(W2," ").concat(a," begins")),function(){return D7(a)}},D7=function(a){N6.mark("".concat(W2," ").concat(a," ends")),N6.measure("".concat(W2," ").concat(a),"".concat(W2," ").concat(a," begins"),"".concat(W2," ").concat(a," ends"))},l8={begin:cH,end:D7},K3=function(){};function s5(c){var a=c.getAttribute?c.getAttribute(C2):null;return typeof a=="string"}function aH(c){var a=c.getAttribute?c.getAttribute(J6):null,e=c.getAttribute?c.getAttribute(Q6):null;return a&&e}function eH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(w.replacementClass)}function rH(){if(w.autoReplaceSvg===!0)return Y3.replace;var c=Y3[w.autoReplaceSvg];return c||Y3.replace}function iH(c){return X.createElementNS("http://www.w3.org/2000/svg",c)}function sH(c){return X.createElement(c)}function q7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?iH:sH:e;if(typeof c=="string")return X.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(q7(n,{ceFn:r}))}),i}function nH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Y3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(q7(i),e)}),e.getAttribute(C2)===null&&w.keepOriginalSource){var r=X.createComment(nH(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~a8(e).indexOf(w.replacementClass))return Y3.replace(a);var i=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,f){return f===w.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(l){return V3(l)}).join(`
`);e.setAttribute(C2,""),e.innerHTML=n}};function n5(c){c()}function E7(c,a){var e=typeof a=="function"?a:K3;if(c.length===0)e();else{var r=n5;w.mutateApproach===mh&&(r=i2.requestAnimationFrame||n5),r(function(){var i=rH(),s=l8.begin("mutate");c.map(i),s(),e()})}}var f8=!1;function O7(){f8=!0}function k6(){f8=!1}var s4=null;function l5(c){if(Y0&&w.observeMutations){var a=c.treeCallback,e=a===void 0?K3:a,r=c.nodeCallback,i=r===void 0?K3:r,s=c.pseudoElementsCallback,n=s===void 0?K3:s,l=c.observeMutationsRoot,f=l===void 0?X:l;s4=new Y0(function(t){if(!f8){var m=s2();B2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!s5(v.addedNodes[0])&&(w.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&w.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&s5(v.target)&&~Vh.indexOf(v.attributeName))if(v.attributeName==="class"&&aH(v.target)){var V=g4(a8(v.target)),g=V.prefix,q=V.iconName;v.target.setAttribute(J6,g||m),q&&v.target.setAttribute(Q6,q)}else eH(v.target)&&i(v.target)})}}),K1&&s4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lH(){s4&&s4.disconnect()}function fH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function oH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=g4(a8(c));return i.prefix||(i.prefix=s2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Eh(i.prefix,c.innerText)||i8(i.prefix,d6(c.innerText))),!i.iconName&&w.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function tH(c){var a=B2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return w.autoA11y&&(e?a["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||m3()):(a["aria-hidden"]="true",a.focusable="false")),a}function mH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=oH(c),r=e.iconName,i=e.prefix,s=e.rest,n=tH(c),l=L6("parseNodeAttributes",{},c),f=a.styleParser?fH(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:D1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var zH=y1.styles;function $7(c){var a=w.autoReplaceSvg==="nest"?f5(c,{styleParser:!1}):f5(c);return~a.extra.classes.indexOf(b7)?G1("generateLayersText",c,a):G1("generateSvgReplacementMutation",c,a)}var n2=new Set;c8.map(function(c){n2.add("fa-".concat(c))});Object.keys(l3[Y]).map(n2.add.bind(n2));Object.keys(l3[e1]).map(n2.add.bind(n2));n2=u3(n2);function o5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K1)return Promise.resolve();var e=X.documentElement.classList,r=function(v){return e.add("".concat(X0,"-").concat(v))},i=function(v){return e.remove("".concat(X0,"-").concat(v))},s=w.autoFetchSvg?n2:c8.map(function(m){return"fa-".concat(m)}).concat(Object.keys(zH));s.includes("fa")||s.push("fa");var n=[".".concat(b7,":not([").concat(C2,"])")].concat(s.map(function(m){return".".concat(m,":not([").concat(C2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=B2(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var f=l8.begin("onTree"),t=l.reduce(function(m,v){try{var V=$7(v);V&&m.push(V)}catch(g){g7||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,v){Promise.all(t).then(function(V){E7(V,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),m()})}).catch(function(V){f(),v(V)})})}function vH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$7(c).then(function(e){e&&E7([e],a)})}function hH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:g6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:g6(i||{})),c(r,k(k({},e),{},{mask:i}))}}var HH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?D1:r,s=e.symbol,n=s===void 0?!1:s,l=e.mask,f=l===void 0?null:l,t=e.maskId,m=t===void 0?null:t,v=e.title,V=v===void 0?null:v,g=e.titleId,q=g===void 0?null:g,_=e.classes,G=_===void 0?[]:_,b=e.attributes,N=b===void 0?{}:b,y=e.styles,E=y===void 0?{}:y;if(a){var I=a.prefix,R=a.iconName,r1=a.icon;return b4(k({type:"icon"},a),function(){return L2("beforeDOMElementCreation",{iconDefinition:a,params:e}),w.autoA11y&&(V?N["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(q||m3()):(N["aria-hidden"]="true",N.focusable="false")),n8({icons:{main:b6(r1),mask:f?b6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:R,transform:k(k({},D1),i),symbol:n,title:V,maskId:m,titleId:q,extra:{attributes:N,styles:E,classes:G}})})}},uH={mixout:function(){return{icon:hH(HH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=o5,e.nodeCallback=vH,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?X:r,s=e.callback,n=s===void 0?function(){}:s;return o5(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,l=r.prefix,f=r.transform,t=r.symbol,m=r.mask,v=r.maskId,V=r.extra;return new Promise(function(g,q){Promise.all([x6(i,l),m.iconName?x6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var G=Y6(_,2),b=G[0],N=G[1];g([e,n8({icons:{main:b,mask:N},prefix:l,iconName:i,transform:f,symbol:t,maskId:v,title:s,titleId:n,extra:V,watchable:!0})])}).catch(q)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,l=e.styles,f=C4(l);f.length>0&&(i.style=f);var t;return e8(n)&&(t=G1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},pH={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return b4({type:"layer"},function(){L2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(u3(s)).join(" ")},children:n}]})}}}},VH={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,l=n===void 0?[]:n,f=r.attributes,t=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return b4({type:"counter",content:e},function(){return L2("beforeDOMElementCreation",{content:e,params:r}),Xh({content:e.toString(),title:s,extra:{attributes:t,styles:v,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(u3(l))}})})}}}},MH={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?D1:i,n=r.title,l=n===void 0?null:n,f=r.classes,t=f===void 0?[]:f,m=r.attributes,v=m===void 0?{}:m,V=r.styles,g=V===void 0?{}:V;return b4({type:"text",content:e},function(){return L2("beforeDOMElementCreation",{content:e,params:r}),r5({content:e,transform:k(k({},D1),s),title:l,extra:{attributes:v,styles:g,classes:["".concat(w.cssPrefix,"-layers-text")].concat(u3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,l=null,f=null;if(d7){var t=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();l=m.width/t,f=m.height/t}return w.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,r5({content:e.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},dH=new RegExp('"',"ug"),t5=[1105920,1112319];function CH(c){var a=c.replace(dH,""),e=Th(a,0),r=e>=t5[0]&&e<=t5[1],i=a.length===2?a[0]===a[1]:!1;return{value:d6(i?a[0]:a),isSecondary:r||i}}function m5(c,a){var e="".concat(th).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=B2(c.children),n=s.filter(function(r1){return r1.getAttribute(M6)===a})[0],l=i2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(Hh),t=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&m!=="none"&&m!==""){var v=l.getPropertyValue("content"),V=~["Sharp"].indexOf(f[2])?e1:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?f3[V][f[2].toLowerCase()]:uh[V][t],q=CH(v),_=q.value,G=q.isSecondary,b=f[0].startsWith("FontAwesome"),N=i8(g,_),y=N;if(b){var E=Oh(_);E.iconName&&E.prefix&&(N=E.iconName,g=E.prefix)}if(N&&!G&&(!n||n.getAttribute(J6)!==g||n.getAttribute(Q6)!==y)){c.setAttribute(e,y),n&&c.removeChild(n);var I=mH(),R=I.extra;R.attributes[M6]=a,x6(N,g).then(function(r1){var u1=n8(k(k({},I),{},{icons:{main:r1,mask:s8()},prefix:g,iconName:y,extra:R,watchable:!0})),b1=X.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(b1,c.firstChild):c.appendChild(b1),b1.outerHTML=u1.map(function(E1){return V3(E1)}).join(`