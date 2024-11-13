(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function y6(c,a){const e=new Set(c.split(","));return r=>e.has(r)}const Z={},S2=[],N1=()=>{},Sf=()=>!1,l4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),A6=c=>c.startsWith("onUpdate:"),o1=Object.assign,P6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},wf=Object.prototype.hasOwnProperty,$=(c,a)=>wf.call(c,a),F=Array.isArray,w2=c=>n4(c)==="[object Map]",V5=c=>n4(c)==="[object Set]",R=c=>typeof c=="function",s1=c=>typeof c=="string",g2=c=>typeof c=="symbol",c1=c=>c!==null&&typeof c=="object",p5=c=>(c1(c)||R(c))&&R(c.then)&&R(c.catch),M5=Object.prototype.toString,n4=c=>M5.call(c),yf=c=>n4(c).slice(8,-1),C5=c=>n4(c)==="[object Object]",T6=c=>s1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Z2=y6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),f4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Af=/-(\w)/g,D1=f4(c=>c.replace(Af,(a,e)=>e?e.toUpperCase():"")),Pf=/\B([A-Z])/g,B2=f4(c=>c.replace(Pf,"-$1").toLowerCase()),o4=f4(c=>c.charAt(0).toUpperCase()+c.slice(1)),G4=f4(c=>c?`on${o4(c)}`:""),e2=(c,a)=>!Object.is(c,a),W4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},d5=(c,a,e,r=!1)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,writable:r,value:e})},Tf=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let h0;const L5=()=>h0||(h0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function t4(c){if(F(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=s1(r)?Rf(r):t4(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(s1(c)||c1(c))return c}const Ff=/;(?![^(]*\))/g,_f=/:([^]+)/,Bf=/\/\*[^]*?\*\//g;function Rf(c){const a={};return c.replace(Bf,"").split(Ff).forEach(e=>{if(e){const r=e.split(_f);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function F6(c){let a="";if(s1(c))a=c;else if(F(c))for(let e=0;e<c.length;e++){const r=F6(c[e]);r&&(a+=r+" ")}else if(c1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Df="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qf=y6(Df);function g5(c){return!!c||c===""}const O1=c=>s1(c)?c:c==null?"":F(c)||c1(c)&&(c.toString===M5||!R(c.toString))?JSON.stringify(c,b5,2):String(c),b5=(c,a)=>a&&a.__v_isRef?b5(c,a.value):w2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i],s)=>(e[Z4(r,s)+" =>"]=i,e),{})}:V5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>Z4(e))}:g2(a)?Z4(a):c1(a)&&!F(a)&&!C5(a)?String(a):a,Z4=(c,a="")=>{var e;return g2(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let S1;class Ef{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=S1,!a&&S1&&(this.index=(S1.scopes||(S1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=S1;try{return S1=this,a()}finally{S1=e}}}on(){S1=this}off(){S1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Of(c,a=S1){a&&a.active&&a.effects.push(c)}function $f(){return S1}let M2;class _6{constructor(a,e,r,i){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Of(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,l2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(Uf(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),n2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=c2,e=M2;try{return c2=!0,M2=this,this._runnings++,H0(this),this.fn()}finally{u0(this),this._runnings--,M2=e,c2=a}}stop(){this.active&&(H0(this),u0(this),this.onStop&&this.onStop(),this.active=!1)}}function Uf(c){return c.value}function H0(c){c._trackId++,c._depsLength=0}function u0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)x5(c.deps[a],c);c.deps.length=c._depsLength}}function x5(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let c2=!0,n6=0;const N5=[];function l2(){N5.push(c2),c2=!1}function n2(){const c=N5.pop();c2=c===void 0?!0:c}function B6(){n6++}function R6(){for(n6--;!n6&&f6.length;)f6.shift()()}function k5(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&x5(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const f6=[];function S5(c,a,e){B6();for(const r of c.keys()){let i;r._dirtyLevel<a&&(i??(i=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(i??(i=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&f6.push(r.scheduler)))}R6()}const w5=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},o6=new WeakMap,C2=Symbol(""),t6=Symbol("");function p1(c,a,e){if(c2&&M2){let r=o6.get(c);r||o6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=w5(()=>r.delete(e))),k5(M2,i)}}function U1(c,a,e,r,i,s){const l=o6.get(c);if(!l)return;let n=[];if(a==="clear")n=[...l.values()];else if(e==="length"&&F(c)){const f=Number(r);l.forEach((t,m)=>{(m==="length"||!g2(m)&&m>=f)&&n.push(t)})}else switch(e!==void 0&&n.push(l.get(e)),a){case"add":F(c)?T6(e)&&n.push(l.get("length")):(n.push(l.get(C2)),w2(c)&&n.push(l.get(t6)));break;case"delete":F(c)||(n.push(l.get(C2)),w2(c)&&n.push(l.get(t6)));break;case"set":w2(c)&&n.push(l.get(C2));break}B6();for(const f of n)f&&S5(f,4);R6()}const If=y6("__proto__,__v_isRef,__isVue"),y5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(g2)),V0=jf();function jf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=I(this);for(let s=0,l=this.length;s<l;s++)p1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(I)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){l2(),B6();const r=I(this)[a].apply(this,e);return R6(),n2(),r}}),c}function Gf(c){g2(c)||(c=String(c));const a=I(this);return p1(a,"has",c),a.hasOwnProperty(c)}class A5{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?so:_5:s?F5:T5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const l=F(a);if(!i){if(l&&$(V0,e))return Reflect.get(V0,e,r);if(e==="hasOwnProperty")return Gf}const n=Reflect.get(a,e,r);return(g2(e)?y5.has(e):If(e))||(i||p1(a,"get",e),s)?n:M1(n)?l&&T6(e)?n:n.value:c1(n)?i?B5(n):E6(n):n}}class P5 extends A5{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(!this._isShallow){const f=r3(s);if(!Y3(r)&&!r3(r)&&(s=I(s),r=I(r)),!F(a)&&M1(s)&&!M1(r))return f?!1:(s.value=r,!0)}const l=F(a)&&T6(e)?Number(e)<a.length:$(a,e),n=Reflect.set(a,e,r,i);return a===I(i)&&(l?e2(r,s)&&U1(a,"set",e,r):U1(a,"add",e,r)),n}deleteProperty(a,e){const r=$(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&U1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!g2(e)||!y5.has(e))&&p1(a,"has",e),r}ownKeys(a){return p1(a,"iterate",F(a)?"length":C2),Reflect.ownKeys(a)}}class Wf extends A5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Zf=new P5,Kf=new Wf,Yf=new P5(!0);const D6=c=>c,m4=c=>Reflect.getPrototypeOf(c);function k3(c,a,e=!1,r=!1){c=c.__v_raw;const i=I(c),s=I(a);e||(e2(a,s)&&p1(i,"get",a),p1(i,"get",s));const{has:l}=m4(i),n=r?D6:e?$6:i3;if(l.call(i,a))return n(c.get(a));if(l.call(i,s))return n(c.get(s));c!==i&&c.get(a)}function S3(c,a=!1){const e=this.__v_raw,r=I(e),i=I(c);return a||(e2(c,i)&&p1(r,"has",c),p1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function w3(c,a=!1){return c=c.__v_raw,!a&&p1(I(c),"iterate",C2),Reflect.get(c,"size",c)}function p0(c){c=I(c);const a=I(this);return m4(a).has.call(a,c)||(a.add(c),U1(a,"add",c,c)),this}function M0(c,a){a=I(a);const e=I(this),{has:r,get:i}=m4(e);let s=r.call(e,c);s||(c=I(c),s=r.call(e,c));const l=i.call(e,c);return e.set(c,a),s?e2(a,l)&&U1(e,"set",c,a):U1(e,"add",c,a),this}function C0(c){const a=I(this),{has:e,get:r}=m4(a);let i=e.call(a,c);i||(c=I(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&U1(a,"delete",c,void 0),s}function d0(){const c=I(this),a=c.size!==0,e=c.clear();return a&&U1(c,"clear",void 0,void 0),e}function y3(c,a){return function(r,i){const s=this,l=s.__v_raw,n=I(l),f=a?D6:c?$6:i3;return!c&&p1(n,"iterate",C2),l.forEach((t,m)=>r.call(i,f(t),f(m),s))}}function A3(c,a,e){return function(...r){const i=this.__v_raw,s=I(i),l=w2(s),n=c==="entries"||c===Symbol.iterator&&l,f=c==="keys"&&l,t=i[c](...r),m=e?D6:a?$6:i3;return!a&&p1(s,"iterate",f?t6:C2),{next(){const{value:v,done:V}=t.next();return V?{value:v,done:V}:{value:n?[m(v[0]),m(v[1])]:m(v),done:V}},[Symbol.iterator](){return this}}}}function K1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Xf(){const c={get(s){return k3(this,s)},get size(){return w3(this)},has:S3,add:p0,set:M0,delete:C0,clear:d0,forEach:y3(!1,!1)},a={get(s){return k3(this,s,!1,!0)},get size(){return w3(this)},has:S3,add:p0,set:M0,delete:C0,clear:d0,forEach:y3(!1,!0)},e={get(s){return k3(this,s,!0)},get size(){return w3(this,!0)},has(s){return S3.call(this,s,!0)},add:K1("add"),set:K1("set"),delete:K1("delete"),clear:K1("clear"),forEach:y3(!0,!1)},r={get(s){return k3(this,s,!0,!0)},get size(){return w3(this,!0)},has(s){return S3.call(this,s,!0)},add:K1("add"),set:K1("set"),delete:K1("delete"),clear:K1("clear"),forEach:y3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=A3(s,!1,!1),e[s]=A3(s,!0,!1),a[s]=A3(s,!1,!0),r[s]=A3(s,!0,!0)}),[c,e,a,r]}const[Jf,Qf,co,ao]=Xf();function q6(c,a){const e=a?c?ao:co:c?Qf:Jf;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get($(e,i)&&i in r?e:r,i,s)}const eo={get:q6(!1,!1)},ro={get:q6(!1,!0)},io={get:q6(!0,!1)};const T5=new WeakMap,F5=new WeakMap,_5=new WeakMap,so=new WeakMap;function lo(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function no(c){return c.__v_skip||!Object.isExtensible(c)?0:lo(yf(c))}function E6(c){return r3(c)?c:O6(c,!1,Zf,eo,T5)}function fo(c){return O6(c,!1,Yf,ro,F5)}function B5(c){return O6(c,!0,Kf,io,_5)}function O6(c,a,e,r,i){if(!c1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const l=no(c);if(l===0)return c;const n=new Proxy(c,l===2?r:e);return i.set(c,n),n}function K2(c){return r3(c)?K2(c.__v_raw):!!(c&&c.__v_isReactive)}function r3(c){return!!(c&&c.__v_isReadonly)}function Y3(c){return!!(c&&c.__v_isShallow)}function R5(c){return c?!!c.__v_raw:!1}function I(c){const a=c&&c.__v_raw;return a?I(a):c}function oo(c){return Object.isExtensible(c)&&d5(c,"__v_skip",!0),c}const i3=c=>c1(c)?E6(c):c,$6=c=>c1(c)?B5(c):c;class D5{constructor(a,e,r,i){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new _6(()=>a(this._value),()=>$3(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=I(this);return(!a._cacheable||a.effect.dirty)&&e2(a._value,a._value=a.effect.run())&&$3(a,4),q5(a),a.effect._dirtyLevel>=2&&$3(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function to(c,a,e=!1){let r,i;const s=R(c);return s?(r=c,i=N1):(r=c.get,i=c.set),new D5(r,i,s||!i,e)}function q5(c){var a;c2&&M2&&(c=I(c),k5(M2,(a=c.dep)!=null?a:c.dep=w5(()=>c.dep=void 0,c instanceof D5?c:void 0)))}function $3(c,a=4,e){c=I(c);const r=c.dep;r&&S5(r,a)}function M1(c){return!!(c&&c.__v_isRef===!0)}function x1(c){return mo(c,!1)}function mo(c,a){return M1(c)?c:new zo(c,a)}class zo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:I(a),this._value=e?a:i3(a)}get value(){return q5(this),this._value}set value(a){const e=this.__v_isShallow||Y3(a)||r3(a);a=e?a:I(a),e2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:i3(a),$3(this,4))}}function u1(c){return M1(c)?c.value:c}const vo={get:(c,a,e)=>u1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return M1(i)&&!M1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function E5(c){return K2(c)?c:new Proxy(c,vo)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function a2(c,a,e,r){try{return r?c(...r):c()}catch(i){z4(i,a,e)}}function A1(c,a,e,r){if(R(c)){const i=a2(c,a,e,r);return i&&p5(i)&&i.catch(s=>{z4(s,a,e)}),i}if(F(c)){const i=[];for(let s=0;s<c.length;s++)i.push(A1(c[s],a,e,r));return i}}function z4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const l=a.proxy,n=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const t=s.ec;if(t){for(let m=0;m<t.length;m++)if(t[m](c,l,n)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){l2(),a2(f,null,10,[c,l,n]),n2();return}}ho(c,e,i,r)}function ho(c,a,e,r=!0){console.error(c)}let s3=!1,m6=!1;const t1=[];let B1=0;const y2=[];let X1=null,h2=0;const O5=Promise.resolve();let U6=null;function Ho(c){const a=U6||O5;return c?a.then(this?c.bind(this):c):a}function uo(c){let a=B1+1,e=t1.length;for(;a<e;){const r=a+e>>>1,i=t1[r],s=l3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function I6(c){(!t1.length||!t1.includes(c,s3&&c.allowRecurse?B1+1:B1))&&(c.id==null?t1.push(c):t1.splice(uo(c.id),0,c),$5())}function $5(){!s3&&!m6&&(m6=!0,U6=O5.then(I5))}function Vo(c){const a=t1.indexOf(c);a>B1&&t1.splice(a,1)}function po(c){F(c)?y2.push(...c):(!X1||!X1.includes(c,c.allowRecurse?h2+1:h2))&&y2.push(c),$5()}function L0(c,a,e=s3?B1+1:0){for(;e<t1.length;e++){const r=t1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;t1.splice(e,1),e--,r()}}}function U5(c){if(y2.length){const a=[...new Set(y2)].sort((e,r)=>l3(e)-l3(r));if(y2.length=0,X1){X1.push(...a);return}for(X1=a,h2=0;h2<X1.length;h2++)X1[h2]();X1=null,h2=0}}const l3=c=>c.id==null?1/0:c.id,Mo=(c,a)=>{const e=l3(c)-l3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function I5(c){m6=!1,s3=!0,t1.sort(Mo);try{for(B1=0;B1<t1.length;B1++){const a=t1[B1];a&&a.active!==!1&&a2(a,null,14)}}finally{B1=0,t1.length=0,U5(),s3=!1,U6=null,(t1.length||y2.length)&&I5()}}function Co(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||Z;let i=e;const s=a.startsWith("update:"),l=s&&a.slice(7);if(l&&l in r){const m=`${l==="modelValue"?"model":l}Modifiers`,{number:v,trim:V}=r[m]||Z;V&&(i=e.map(g=>s1(g)?g.trim():g)),v&&(i=e.map(Tf))}let n,f=r[n=G4(a)]||r[n=G4(D1(a))];!f&&s&&(f=r[n=G4(B2(a))]),f&&A1(f,c,6,i);const t=r[n+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[n])return;c.emitted[n]=!0,A1(t,c,6,i)}}function j5(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let l={},n=!1;if(!R(c)){const f=t=>{const m=j5(t,a,!0);m&&(n=!0,o1(l,m))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!n?(c1(c)&&r.set(c,null),null):(F(s)?s.forEach(f=>l[f]=null):o1(l,s),c1(c)&&r.set(c,l),l)}function v4(c,a){return!c||!l4(a)?!1:(a=a.slice(2).replace(/Once$/,""),$(c,a[0].toLowerCase()+a.slice(1))||$(c,B2(a))||$(c,a))}let f1=null,h4=null;function X3(c){const a=f1;return f1=c,h4=c&&c.type.__scopeId||null,a}function H4(c){h4=c}function u4(){h4=null}function d1(c,a=f1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&T0(-1);const s=X3(a);let l;try{l=c(...i)}finally{X3(s),r._d&&T0(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function K4(c){const{type:a,vnode:e,proxy:r,withProxy:i,propsOptions:[s],slots:l,attrs:n,emit:f,render:t,renderCache:m,props:v,data:V,setupState:g,ctx:q,inheritAttrs:T}=c,j=X3(c);let b,N;try{if(e.shapeFlag&4){const E=i||r,U=E;b=_1(t.call(U,E,m,v,g,V,q)),N=n}else{const E=a;b=_1(E.length>1?E(v,{attrs:n,slots:l,emit:f}):E(v,null)),N=a.props?n:Lo(n)}}catch(E){c3.length=0,z4(E,c,1),b=D(T2)}let y=b;if(N&&T!==!1){const E=Object.keys(N),{shapeFlag:U}=y;E.length&&U&7&&(s&&E.some(A6)&&(N=go(N,s)),y=F2(y,N,!1,!0))}return e.dirs&&(y=F2(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),b=y,X3(j),b}const Lo=c=>{let a;for(const e in c)(e==="class"||e==="style"||l4(e))&&((a||(a={}))[e]=c[e]);return a},go=(c,a)=>{const e={};for(const r in c)(!A6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function bo(c,a,e){const{props:r,children:i,component:s}=c,{props:l,children:n,patchFlag:f}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?g0(r,l,t):!!l;if(f&8){const m=a.dynamicProps;for(let v=0;v<m.length;v++){const V=m[v];if(l[V]!==r[V]&&!v4(t,V))return!0}}}else return(i||n)&&(!n||!n.$stable)?!0:r===l?!1:r?l?g0(r,l,t):!0:!!l;return!1}function g0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!v4(e,s))return!0}return!1}function xo({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const No="components";function V4(c,a){return So(No,c,!0,a)||c}const ko=Symbol.for("v-ndc");function So(c,a,e=!0,r=!1){const i=f1||m1;if(i){const s=i.type;{const n=bt(s,!1);if(n&&(n===a||n===D1(a)||n===o4(D1(a))))return s}const l=b0(i[c]||s[c],a)||b0(i.appContext[c],a);return!l&&r?s:l}}function b0(c,a){return c&&(c[a]||c[D1(a)]||c[o4(D1(a))])}const wo=c=>c.__isSuspense;function yo(c,a){a&&a.pendingBranch?F(c)?a.effects.push(...c):a.effects.push(c):po(c)}const Ao=Symbol.for("v-scx"),Po=()=>I3(Ao),P3={};function U3(c,a,e){return G5(c,a,e)}function G5(c,a,{immediate:e,deep:r,flush:i,once:s,onTrack:l,onTrigger:n}=Z){if(a&&s){const B=a;a=(...r1)=>{B(...r1),U()}}const f=m1,t=B=>r===!0?B:H2(B,r===!1?1:void 0);let m,v=!1,V=!1;if(M1(c)?(m=()=>c.value,v=Y3(c)):K2(c)?(m=()=>t(c),v=!0):F(c)?(V=!0,v=c.some(B=>K2(B)||Y3(B)),m=()=>c.map(B=>{if(M1(B))return B.value;if(K2(B))return t(B);if(R(B))return a2(B,f,2)})):R(c)?a?m=()=>a2(c,f,2):m=()=>(g&&g(),A1(c,f,3,[q])):m=N1,a&&r){const B=m;m=()=>H2(B())}let g,q=B=>{g=y.onStop=()=>{a2(B,f,4),g=y.onStop=void 0}},T;if(C4)if(q=N1,a?e&&A1(a,f,3,[m(),V?[]:void 0,q]):m(),i==="sync"){const B=Po();T=B.__watcherHandles||(B.__watcherHandles=[])}else return N1;let j=V?new Array(c.length).fill(P3):P3;const b=()=>{if(!(!y.active||!y.dirty))if(a){const B=y.run();(r||v||(V?B.some((r1,h1)=>e2(r1,j[h1])):e2(B,j)))&&(g&&g(),A1(a,f,3,[B,j===P3?void 0:V&&j[0]===P3?[]:j,q]),j=B)}else y.run()};b.allowRecurse=!!a;let N;i==="sync"?N=b:i==="post"?N=()=>V1(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),N=()=>I6(b));const y=new _6(m,N1,N),E=$f(),U=()=>{y.stop(),E&&P6(E.effects,y)};return a?e?b():j=y.run():i==="post"?V1(y.run.bind(y),f&&f.suspense):y.run(),T&&T.push(U),U}function To(c,a,e){const r=this.proxy,i=s1(c)?c.includes(".")?W5(r,c):()=>r[c]:c.bind(r,r);let s;R(a)?s=a:(s=a.handler,e=a);const l=v3(this),n=G5(i,s.bind(r),e);return l(),n}function W5(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function H2(c,a=1/0,e){if(a<=0||!c1(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),a--,M1(c))H2(c.value,a,e);else if(F(c))for(let r=0;r<c.length;r++)H2(c[r],a,e);else if(V5(c)||w2(c))c.forEach(r=>{H2(r,a,e)});else if(C5(c))for(const r in c)H2(c[r],a,e);return c}function Y4(c,a){if(f1===null)return c;const e=d4(f1)||f1.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[s,l,n,f=Z]=a[i];s&&(R(s)&&(s={mounted:s,updated:s}),s.deep&&H2(l),r.push({dir:s,instance:e,value:l,oldValue:void 0,arg:n,modifiers:f}))}return c}function m2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let l=0;l<i.length;l++){const n=i[l];s&&(n.oldValue=s[l].value);let f=n.dir[r];f&&(l2(),A1(f,e,8,[c.el,n,c,a]),n2())}}/*! #__NO_SIDE_EFFECTS__ */function Fo(c,a){return R(c)?o1({name:c.name},a,{setup:c}):c}const Y2=c=>!!c.type.__asyncLoader,Z5=c=>c.type.__isKeepAlive;function _o(c,a){K5(c,"a",a)}function Bo(c,a){K5(c,"da",a)}function K5(c,a,e=m1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(p4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)Z5(i.parent.vnode)&&Ro(r,a,e,i),i=i.parent}}function Ro(c,a,e,r){const i=p4(a,c,r,!0);Y5(()=>{P6(r[a],i)},e)}function p4(c,a,e=m1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...l)=>{if(e.isUnmounted)return;l2();const n=v3(e),f=A1(a,e,c,l);return n(),n2(),f});return r?i.unshift(s):i.push(s),s}}const W1=c=>(a,e=m1)=>(!C4||c==="sp")&&p4(c,(...r)=>a(...r),e),Do=W1("bm"),qo=W1("m"),Eo=W1("bu"),Oo=W1("u"),$o=W1("bum"),Y5=W1("um"),Uo=W1("sp"),Io=W1("rtg"),jo=W1("rtc");function Go(c,a=m1){p4("ec",c,a)}function X2(c,a,e,r){let i;const s=e;if(F(c)||s1(c)){i=new Array(c.length);for(let l=0,n=c.length;l<n;l++)i[l]=a(c[l],l,void 0,s)}else if(typeof c=="number"){i=new Array(c);for(let l=0;l<c;l++)i[l]=a(l+1,l,void 0,s)}else if(c1(c))if(c[Symbol.iterator])i=Array.from(c,(l,n)=>a(l,n,void 0,s));else{const l=Object.keys(c);i=new Array(l.length);for(let n=0,f=l.length;n<f;n++){const t=l[n];i[n]=a(c[t],t,n,s)}}else i=[];return i}function P2(c,a,e={},r,i){if(f1.isCE||f1.parent&&Y2(f1.parent)&&f1.parent.isCE)return D("slot",e,r);let s=c[a];s&&s._c&&(s._d=!1),K();const l=s&&X5(s(e)),n=vt(i1,{key:e.key||l&&l.key||`_${a}`},l||[],l&&c._===1?64:-2);return!i&&n.scopeId&&(n.slotScopeIds=[n.scopeId+"-s"]),s&&s._c&&(s._d=!0),n}function X5(c){return c.some(a=>Q3(a)?!(a.type===T2||a.type===i1&&!X5(a.children)):!0)?c:null}const z6=c=>c?v7(c)?d4(c)||c.proxy:z6(c.parent):null,J2=o1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>z6(c.parent),$root:c=>z6(c.root),$emit:c=>c.emit,$options:c=>j6(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,I6(c.update)}),$nextTick:c=>c.n||(c.n=Ho.bind(c.proxy)),$watch:c=>To.bind(c)}),X4=(c,a)=>c!==Z&&!c.__isScriptSetup&&$(c,a),Wo={get({_:c},a){if(a==="__v_skip")return!0;const{ctx:e,setupState:r,data:i,props:s,accessCache:l,type:n,appContext:f}=c;let t;if(a[0]!=="$"){const g=l[a];if(g!==void 0)switch(g){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(X4(r,a))return l[a]=1,r[a];if(i!==Z&&$(i,a))return l[a]=2,i[a];if((t=c.propsOptions[0])&&$(t,a))return l[a]=3,s[a];if(e!==Z&&$(e,a))return l[a]=4,e[a];v6&&(l[a]=0)}}const m=J2[a];let v,V;if(m)return a==="$attrs"&&p1(c.attrs,"get",""),m(c);if((v=n.__cssModules)&&(v=v[a]))return v;if(e!==Z&&$(e,a))return l[a]=4,e[a];if(V=f.config.globalProperties,$(V,a))return V[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return X4(i,a)?(i[a]=e,!0):r!==Z&&$(r,a)?(r[a]=e,!0):$(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},l){let n;return!!e[l]||c!==Z&&$(c,l)||X4(a,l)||(n=s[0])&&$(n,l)||$(r,l)||$(J2,l)||$(i.config.globalProperties,l)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:$(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function x0(c){return F(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let v6=!0;function Zo(c){const a=j6(c),e=c.proxy,r=c.ctx;v6=!1,a.beforeCreate&&N0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:l,watch:n,provide:f,inject:t,created:m,beforeMount:v,mounted:V,beforeUpdate:g,updated:q,activated:T,deactivated:j,beforeDestroy:b,beforeUnmount:N,destroyed:y,unmounted:E,render:U,renderTracked:B,renderTriggered:r1,errorCaptured:h1,serverPrefetch:g1,expose:q1,inheritAttrs:D2,components:g3,directives:b3,filters:I4}=a;if(t&&Ko(t,r,null),l)for(const a1 in l){const W=l[a1];R(W)&&(r[a1]=W.bind(e))}if(i){const a1=i.call(e,e);c1(a1)&&(c.data=E6(a1))}if(v6=!0,s)for(const a1 in s){const W=s[a1],o2=R(W)?W.bind(e,e):R(W.get)?W.get.bind(e,e):N1,x3=!R(W)&&R(W.set)?W.set.bind(e):N1,t2=v2({get:o2,set:x3});Object.defineProperty(r,a1,{enumerable:!0,configurable:!0,get:()=>t2.value,set:P1=>t2.value=P1})}if(n)for(const a1 in n)J5(n[a1],r,e,a1);if(f){const a1=R(f)?f.call(e):f;Reflect.ownKeys(a1).forEach(W=>{at(W,a1[W])})}m&&N0(m,c,"c");function z1(a1,W){F(W)?W.forEach(o2=>a1(o2.bind(e))):W&&a1(W.bind(e))}if(z1(Do,v),z1(qo,V),z1(Eo,g),z1(Oo,q),z1(_o,T),z1(Bo,j),z1(Go,h1),z1(jo,B),z1(Io,r1),z1($o,N),z1(Y5,E),z1(Uo,g1),F(q1))if(q1.length){const a1=c.exposed||(c.exposed={});q1.forEach(W=>{Object.defineProperty(a1,W,{get:()=>e[W],set:o2=>e[W]=o2})})}else c.exposed||(c.exposed={});U&&c.render===N1&&(c.render=U),D2!=null&&(c.inheritAttrs=D2),g3&&(c.components=g3),b3&&(c.directives=b3)}function Ko(c,a,e=N1){F(c)&&(c=h6(c));for(const r in c){const i=c[r];let s;c1(i)?"default"in i?s=I3(i.from||r,i.default,!0):s=I3(i.from||r):s=I3(i),M1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):a[r]=s}}function N0(c,a,e){A1(F(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function J5(c,a,e,r){const i=r.includes(".")?W5(e,r):()=>e[r];if(s1(c)){const s=a[c];R(s)&&U3(i,s)}else if(R(c))U3(i,c.bind(e));else if(c1(c))if(F(c))c.forEach(s=>J5(s,a,e,r));else{const s=R(c.handler)?c.handler.bind(e):a[c.handler];R(s)&&U3(i,s,c)}}function j6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:l}}=c.appContext,n=s.get(a);let f;return n?f=n:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(t=>J3(f,t,l,!0)),J3(f,a,l)),c1(a)&&s.set(a,f),f}function J3(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&J3(c,s,e,!0),i&&i.forEach(l=>J3(c,l,e,!0));for(const l in a)if(!(r&&l==="expose")){const n=Yo[l]||e&&e[l];c[l]=n?n(c[l],a[l]):a[l]}return c}const Yo={data:k0,props:S0,emits:S0,methods:G2,computed:G2,beforeCreate:v1,created:v1,beforeMount:v1,mounted:v1,beforeUpdate:v1,updated:v1,beforeDestroy:v1,beforeUnmount:v1,destroyed:v1,unmounted:v1,activated:v1,deactivated:v1,errorCaptured:v1,serverPrefetch:v1,components:G2,directives:G2,watch:Jo,provide:k0,inject:Xo};function k0(c,a){return a?c?function(){return o1(R(c)?c.call(this,this):c,R(a)?a.call(this,this):a)}:a:c}function Xo(c,a){return G2(h6(c),h6(a))}function h6(c){if(F(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function v1(c,a){return c?[...new Set([].concat(c,a))]:a}function G2(c,a){return c?o1(Object.create(null),c,a):a}function S0(c,a){return c?F(c)&&F(a)?[...new Set([...c,...a])]:o1(Object.create(null),x0(c),x0(a??{})):a}function Jo(c,a){if(!c)return a;if(!a)return c;const e=o1(Object.create(null),c);for(const r in a)e[r]=v1(c[r],a[r]);return e}function Q5(){return{app:null,config:{isNativeTag:Sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qo=0;function ct(c,a){return function(r,i=null){R(r)||(r=o1({},r)),i!=null&&!c1(i)&&(i=null);const s=Q5(),l=new WeakSet;let n=!1;const f=s.app={_uid:Qo++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:kt,get config(){return s.config},set config(t){},use(t,...m){return l.has(t)||(t&&R(t.install)?(l.add(t),t.install(f,...m)):R(t)&&(l.add(t),t(f,...m))),f},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),f},component(t,m){return m?(s.components[t]=m,f):s.components[t]},directive(t,m){return m?(s.directives[t]=m,f):s.directives[t]},mount(t,m,v){if(!n){const V=D(r,i);return V.appContext=s,v===!0?v="svg":v===!1&&(v=void 0),m&&a?a(V,t):c(V,t,v),n=!0,f._container=t,t.__vue_app__=f,d4(V.component)||V.component.proxy}},unmount(){n&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,m){return s.provides[t]=m,f},runWithContext(t){const m=Q2;Q2=f;try{return t()}finally{Q2=m}}};return f}}let Q2=null;function at(c,a){if(m1){let e=m1.provides;const r=m1.parent&&m1.parent.provides;r===e&&(e=m1.provides=Object.create(r)),e[c]=a}}function I3(c,a,e=!1){const r=m1||f1;if(r||Q2){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Q2._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&R(a)?a.call(r&&r.proxy):a}}const c7={},a7=()=>Object.create(c7),e7=c=>Object.getPrototypeOf(c)===c7;function et(c,a,e,r=!1){const i={},s=a7();c.propsDefaults=Object.create(null),r7(c,a,i,s);for(const l in c.propsOptions[0])l in i||(i[l]=void 0);e?c.props=r?i:fo(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function rt(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:l}}=c,n=I(i),[f]=c.propsOptions;let t=!1;if((r||l>0)&&!(l&16)){if(l&8){const m=c.vnode.dynamicProps;for(let v=0;v<m.length;v++){let V=m[v];if(v4(c.emitsOptions,V))continue;const g=a[V];if(f)if($(s,V))g!==s[V]&&(s[V]=g,t=!0);else{const q=D1(V);i[q]=H6(f,n,q,g,c,!1)}else g!==s[V]&&(s[V]=g,t=!0)}}}else{r7(c,a,i,s)&&(t=!0);let m;for(const v in n)(!a||!$(a,v)&&((m=B2(v))===v||!$(a,m)))&&(f?e&&(e[v]!==void 0||e[m]!==void 0)&&(i[v]=H6(f,n,v,void 0,c,!0)):delete i[v]);if(s!==n)for(const v in s)(!a||!$(a,v))&&(delete s[v],t=!0)}t&&U1(c.attrs,"set","")}function r7(c,a,e,r){const[i,s]=c.propsOptions;let l=!1,n;if(a)for(let f in a){if(Z2(f))continue;const t=a[f];let m;i&&$(i,m=D1(f))?!s||!s.includes(m)?e[m]=t:(n||(n={}))[m]=t:v4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,l=!0)}if(s){const f=I(e),t=n||Z;for(let m=0;m<s.length;m++){const v=s[m];e[v]=H6(i,f,v,t[v],c,!$(t,v))}}return l}function H6(c,a,e,r,i,s){const l=c[e];if(l!=null){const n=$(l,"default");if(n&&r===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&R(f)){const{propsDefaults:t}=i;if(e in t)r=t[e];else{const m=v3(i);r=t[e]=f.call(null,a),m()}}else r=f}l[0]&&(s&&!n?r=!1:l[1]&&(r===""||r===B2(e))&&(r=!0))}return r}function i7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,l={},n=[];let f=!1;if(!R(c)){const m=v=>{f=!0;const[V,g]=i7(v,a,!0);o1(l,V),g&&n.push(...g)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!s&&!f)return c1(c)&&r.set(c,S2),S2;if(F(s))for(let m=0;m<s.length;m++){const v=D1(s[m]);w0(v)&&(l[v]=Z)}else if(s)for(const m in s){const v=D1(m);if(w0(v)){const V=s[m],g=l[v]=F(V)||R(V)?{type:V}:o1({},V);if(g){const q=P0(Boolean,g.type),T=P0(String,g.type);g[0]=q>-1,g[1]=T<0||q<T,(q>-1||$(g,"default"))&&n.push(v)}}}const t=[l,n];return c1(c)&&r.set(c,t),t}function w0(c){return c[0]!=="$"&&!Z2(c)}function y0(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function A0(c,a){return y0(c)===y0(a)}function P0(c,a){return F(a)?a.findIndex(e=>A0(e,c)):R(a)&&A0(a,c)?0:-1}const s7=c=>c[0]==="_"||c==="$stable",G6=c=>F(c)?c.map(_1):[_1(c)],it=(c,a,e)=>{if(a._n)return a;const r=d1((...i)=>G6(a(...i)),e);return r._c=!1,r},l7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(s7(i))continue;const s=c[i];if(R(s))a[i]=it(i,s,r);else if(s!=null){const l=G6(s);a[i]=()=>l}}},n7=(c,a)=>{const e=G6(a);c.slots.default=()=>e},st=(c,a)=>{const e=c.slots=a7();if(c.vnode.shapeFlag&32){const r=a._;r?(o1(e,a),d5(e,"_",r,!0)):l7(a,e)}else a&&n7(c,a)},lt=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,l=Z;if(r.shapeFlag&32){const n=a._;n?e&&n===1?s=!1:(o1(i,a),!e&&n===1&&delete i._):(s=!a.$stable,l7(a,i)),l=a}else a&&(n7(c,a),l={default:1});if(s)for(const n in i)!s7(n)&&l[n]==null&&delete i[n]};function u6(c,a,e,r,i=!1){if(F(c)){c.forEach((V,g)=>u6(V,a&&(F(a)?a[g]:a),e,r,i));return}if(Y2(r)&&!i)return;const s=r.shapeFlag&4?d4(r.component)||r.component.proxy:r.el,l=i?null:s,{i:n,r:f}=c,t=a&&a.r,m=n.refs===Z?n.refs={}:n.refs,v=n.setupState;if(t!=null&&t!==f&&(s1(t)?(m[t]=null,$(v,t)&&(v[t]=null)):M1(t)&&(t.value=null)),R(f))a2(f,n,12,[l,m]);else{const V=s1(f),g=M1(f);if(V||g){const q=()=>{if(c.f){const T=V?$(v,f)?v[f]:m[f]:f.value;i?F(T)&&P6(T,s):F(T)?T.includes(s)||T.push(s):V?(m[f]=[s],$(v,f)&&(v[f]=m[f])):(f.value=[s],c.k&&(m[c.k]=f.value))}else V?(m[f]=l,$(v,f)&&(v[f]=l)):g&&(f.value=l,c.k&&(m[c.k]=l))};l?(q.id=-1,V1(q,e)):q()}}}const V1=yo;function nt(c){return ft(c)}function ft(c,a){const e=L5();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:l,createText:n,createComment:f,setText:t,setElementText:m,parentNode:v,nextSibling:V,setScopeId:g=N1,insertStaticContent:q}=c,T=(o,z,h,H=null,u=null,d=null,x=void 0,C=null,L=!!z.dynamicChildren)=>{if(o===z)return;o&&!O2(o,z)&&(H=N3(o),P1(o,u,d,!0),o=null),z.patchFlag===-2&&(L=!1,z.dynamicChildren=null);const{type:p,ref:S,shapeFlag:P}=z;switch(p){case M4:j(o,z,h,H);break;case T2:b(o,z,h,H);break;case j3:o==null&&N(z,h,H,x);break;case i1:g3(o,z,h,H,u,d,x,C,L);break;default:P&1?U(o,z,h,H,u,d,x,C,L):P&6?b3(o,z,h,H,u,d,x,C,L):(P&64||P&128)&&p.process(o,z,h,H,u,d,x,C,L,q2)}S!=null&&u&&u6(S,o&&o.ref,d,z||o,!z)},j=(o,z,h,H)=>{if(o==null)r(z.el=n(z.children),h,H);else{const u=z.el=o.el;z.children!==o.children&&t(u,z.children)}},b=(o,z,h,H)=>{o==null?r(z.el=f(z.children||""),h,H):z.el=o.el},N=(o,z,h,H)=>{[o.el,o.anchor]=q(o.children,z,h,H,o.el,o.anchor)},y=({el:o,anchor:z},h,H)=>{let u;for(;o&&o!==z;)u=V(o),r(o,h,H),o=u;r(z,h,H)},E=({el:o,anchor:z})=>{let h;for(;o&&o!==z;)h=V(o),i(o),o=h;i(z)},U=(o,z,h,H,u,d,x,C,L)=>{z.type==="svg"?x="svg":z.type==="math"&&(x="mathml"),o==null?B(z,h,H,u,d,x,C,L):g1(o,z,u,d,x,C,L)},B=(o,z,h,H,u,d,x,C)=>{let L,p;const{props:S,shapeFlag:P,transition:A,dirs:_}=o;if(L=o.el=l(o.type,d,S&&S.is,S),P&8?m(L,o.children):P&16&&h1(o.children,L,null,H,u,J4(o,d),x,C),_&&m2(o,null,H,"created"),r1(L,o,o.scopeId,x,H),S){for(const G in S)G!=="value"&&!Z2(G)&&s(L,G,null,S[G],d,o.children,H,u,E1);"value"in S&&s(L,"value",null,S.value,d),(p=S.onVnodeBeforeMount)&&F1(p,H,o)}_&&m2(o,null,H,"beforeMount");const O=ot(u,A);O&&A.beforeEnter(L),r(L,z,h),((p=S&&S.onVnodeMounted)||O||_)&&V1(()=>{p&&F1(p,H,o),O&&A.enter(L),_&&m2(o,null,H,"mounted")},u)},r1=(o,z,h,H,u)=>{if(h&&g(o,h),H)for(let d=0;d<H.length;d++)g(o,H[d]);if(u){let d=u.subTree;if(z===d){const x=u.vnode;r1(o,x,x.scopeId,x.slotScopeIds,u.parent)}}},h1=(o,z,h,H,u,d,x,C,L=0)=>{for(let p=L;p<o.length;p++){const S=o[p]=C?J1(o[p]):_1(o[p]);T(null,S,z,h,H,u,d,x,C)}},g1=(o,z,h,H,u,d,x)=>{const C=z.el=o.el;let{patchFlag:L,dynamicChildren:p,dirs:S}=z;L|=o.patchFlag&16;const P=o.props||Z,A=z.props||Z;let _;if(h&&z2(h,!1),(_=A.onVnodeBeforeUpdate)&&F1(_,h,z,o),S&&m2(z,o,h,"beforeUpdate"),h&&z2(h,!0),p?q1(o.dynamicChildren,p,C,h,H,J4(z,u),d):x||W(o,z,C,null,h,H,J4(z,u),d,!1),L>0){if(L&16)D2(C,z,P,A,h,H,u);else if(L&2&&P.class!==A.class&&s(C,"class",null,A.class,u),L&4&&s(C,"style",P.style,A.style,u),L&8){const O=z.dynamicProps;for(let G=0;G<O.length;G++){const J=O[G],n1=P[J],k1=A[J];(k1!==n1||J==="value")&&s(C,J,n1,k1,u,o.children,h,H,E1)}}L&1&&o.children!==z.children&&m(C,z.children)}else!x&&p==null&&D2(C,z,P,A,h,H,u);((_=A.onVnodeUpdated)||S)&&V1(()=>{_&&F1(_,h,z,o),S&&m2(z,o,h,"updated")},H)},q1=(o,z,h,H,u,d,x)=>{for(let C=0;C<z.length;C++){const L=o[C],p=z[C],S=L.el&&(L.type===i1||!O2(L,p)||L.shapeFlag&70)?v(L.el):h;T(L,p,S,null,H,u,d,x,!0)}},D2=(o,z,h,H,u,d,x)=>{if(h!==H){if(h!==Z)for(const C in h)!Z2(C)&&!(C in H)&&s(o,C,h[C],null,x,z.children,u,d,E1);for(const C in H){if(Z2(C))continue;const L=H[C],p=h[C];L!==p&&C!=="value"&&s(o,C,p,L,x,z.children,u,d,E1)}"value"in H&&s(o,"value",h.value,H.value,x)}},g3=(o,z,h,H,u,d,x,C,L)=>{const p=z.el=o?o.el:n(""),S=z.anchor=o?o.anchor:n("");let{patchFlag:P,dynamicChildren:A,slotScopeIds:_}=z;_&&(C=C?C.concat(_):_),o==null?(r(p,h,H),r(S,h,H),h1(z.children||[],h,S,u,d,x,C,L)):P>0&&P&64&&A&&o.dynamicChildren?(q1(o.dynamicChildren,A,h,u,d,x,C),(z.key!=null||u&&z===u.subTree)&&f7(o,z,!0)):W(o,z,h,S,u,d,x,C,L)},b3=(o,z,h,H,u,d,x,C,L)=>{z.slotScopeIds=C,o==null?z.shapeFlag&512?u.ctx.activate(z,h,H,x,L):I4(z,h,H,u,d,x,L):l0(o,z,L)},I4=(o,z,h,H,u,d,x)=>{const C=o.component=Mt(o,H,u);if(Z5(o)&&(C.ctx.renderer=q2),Ct(C),C.asyncDep){if(u&&u.registerDep(C,z1),!o.el){const L=C.subTree=D(T2);b(null,L,z,h)}}else z1(C,o,z,h,u,d,x)},l0=(o,z,h)=>{const H=z.component=o.component;if(bo(o,z,h))if(H.asyncDep&&!H.asyncResolved){a1(H,z,h);return}else H.next=z,Vo(H.update),H.effect.dirty=!0,H.update();else z.el=o.el,H.vnode=z},z1=(o,z,h,H,u,d,x)=>{const C=()=>{if(o.isMounted){let{next:S,bu:P,u:A,parent:_,vnode:O}=o;{const b2=o7(o);if(b2){S&&(S.el=O.el,a1(o,S,x)),b2.asyncDep.then(()=>{o.isUnmounted||C()});return}}let G=S,J;z2(o,!1),S?(S.el=O.el,a1(o,S,x)):S=O,P&&W4(P),(J=S.props&&S.props.onVnodeBeforeUpdate)&&F1(J,_,S,O),z2(o,!0);const n1=K4(o),k1=o.subTree;o.subTree=n1,T(k1,n1,v(k1.el),N3(k1),o,u,d),S.el=n1.el,G===null&&xo(o,n1.el),A&&V1(A,u),(J=S.props&&S.props.onVnodeUpdated)&&V1(()=>F1(J,_,S,O),u)}else{let S;const{el:P,props:A}=z,{bm:_,m:O,parent:G}=o,J=Y2(z);if(z2(o,!1),_&&W4(_),!J&&(S=A&&A.onVnodeBeforeMount)&&F1(S,G,z),z2(o,!0),P&&t0){const n1=()=>{o.subTree=K4(o),t0(P,o.subTree,o,u,null)};J?z.type.__asyncLoader().then(()=>!o.isUnmounted&&n1()):n1()}else{const n1=o.subTree=K4(o);T(null,n1,h,H,o,u,d),z.el=n1.el}if(O&&V1(O,u),!J&&(S=A&&A.onVnodeMounted)){const n1=z;V1(()=>F1(S,G,n1),u)}(z.shapeFlag&256||G&&Y2(G.vnode)&&G.vnode.shapeFlag&256)&&o.a&&V1(o.a,u),o.isMounted=!0,z=h=H=null}},L=o.effect=new _6(C,N1,()=>I6(p),o.scope),p=o.update=()=>{L.dirty&&L.run()};p.id=o.uid,z2(o,!0),p()},a1=(o,z,h)=>{z.component=o;const H=o.vnode.props;o.vnode=z,o.next=null,rt(o,z.props,H,h),lt(o,z.children,h),l2(),L0(o),n2()},W=(o,z,h,H,u,d,x,C,L=!1)=>{const p=o&&o.children,S=o?o.shapeFlag:0,P=z.children,{patchFlag:A,shapeFlag:_}=z;if(A>0){if(A&128){x3(p,P,h,H,u,d,x,C,L);return}else if(A&256){o2(p,P,h,H,u,d,x,C,L);return}}_&8?(S&16&&E1(p,u,d),P!==p&&m(h,P)):S&16?_&16?x3(p,P,h,H,u,d,x,C,L):E1(p,u,d,!0):(S&8&&m(h,""),_&16&&h1(P,h,H,u,d,x,C,L))},o2=(o,z,h,H,u,d,x,C,L)=>{o=o||S2,z=z||S2;const p=o.length,S=z.length,P=Math.min(p,S);let A;for(A=0;A<P;A++){const _=z[A]=L?J1(z[A]):_1(z[A]);T(o[A],_,h,null,u,d,x,C,L)}p>S?E1(o,u,d,!0,!1,P):h1(z,h,H,u,d,x,C,L,P)},x3=(o,z,h,H,u,d,x,C,L)=>{let p=0;const S=z.length;let P=o.length-1,A=S-1;for(;p<=P&&p<=A;){const _=o[p],O=z[p]=L?J1(z[p]):_1(z[p]);if(O2(_,O))T(_,O,h,null,u,d,x,C,L);else break;p++}for(;p<=P&&p<=A;){const _=o[P],O=z[A]=L?J1(z[A]):_1(z[A]);if(O2(_,O))T(_,O,h,null,u,d,x,C,L);else break;P--,A--}if(p>P){if(p<=A){const _=A+1,O=_<S?z[_].el:H;for(;p<=A;)T(null,z[p]=L?J1(z[p]):_1(z[p]),h,O,u,d,x,C,L),p++}}else if(p>A)for(;p<=P;)P1(o[p],u,d,!0),p++;else{const _=p,O=p,G=new Map;for(p=O;p<=A;p++){const C1=z[p]=L?J1(z[p]):_1(z[p]);C1.key!=null&&G.set(C1.key,p)}let J,n1=0;const k1=A-O+1;let b2=!1,m0=0;const E2=new Array(k1);for(p=0;p<k1;p++)E2[p]=0;for(p=_;p<=P;p++){const C1=o[p];if(n1>=k1){P1(C1,u,d,!0);continue}let T1;if(C1.key!=null)T1=G.get(C1.key);else for(J=O;J<=A;J++)if(E2[J-O]===0&&O2(C1,z[J])){T1=J;break}T1===void 0?P1(C1,u,d,!0):(E2[T1-O]=p+1,T1>=m0?m0=T1:b2=!0,T(C1,z[T1],h,null,u,d,x,C,L),n1++)}const z0=b2?tt(E2):S2;for(J=z0.length-1,p=k1-1;p>=0;p--){const C1=O+p,T1=z[C1],v0=C1+1<S?z[C1+1].el:H;E2[p]===0?T(null,T1,h,v0,u,d,x,C,L):b2&&(J<0||p!==z0[J]?t2(T1,h,v0,2):J--)}}},t2=(o,z,h,H,u=null)=>{const{el:d,type:x,transition:C,children:L,shapeFlag:p}=o;if(p&6){t2(o.component.subTree,z,h,H);return}if(p&128){o.suspense.move(z,h,H);return}if(p&64){x.move(o,z,h,q2);return}if(x===i1){r(d,z,h);for(let P=0;P<L.length;P++)t2(L[P],z,h,H);r(o.anchor,z,h);return}if(x===j3){y(o,z,h);return}if(H!==2&&p&1&&C)if(H===0)C.beforeEnter(d),r(d,z,h),V1(()=>C.enter(d),u);else{const{leave:P,delayLeave:A,afterLeave:_}=C,O=()=>r(d,z,h),G=()=>{P(d,()=>{O(),_&&_()})};A?A(d,O,G):G()}else r(d,z,h)},P1=(o,z,h,H=!1,u=!1)=>{const{type:d,props:x,ref:C,children:L,dynamicChildren:p,shapeFlag:S,patchFlag:P,dirs:A}=o;if(C!=null&&u6(C,null,h,o,!0),S&256){z.ctx.deactivate(o);return}const _=S&1&&A,O=!Y2(o);let G;if(O&&(G=x&&x.onVnodeBeforeUnmount)&&F1(G,z,o),S&6)kf(o.component,h,H);else{if(S&128){o.suspense.unmount(h,H);return}_&&m2(o,null,z,"beforeUnmount"),S&64?o.type.remove(o,z,h,u,q2,H):p&&(d!==i1||P>0&&P&64)?E1(p,z,h,!1,!0):(d===i1&&P&384||!u&&S&16)&&E1(L,z,h),H&&n0(o)}(O&&(G=x&&x.onVnodeUnmounted)||_)&&V1(()=>{G&&F1(G,z,o),_&&m2(o,null,z,"unmounted")},h)},n0=o=>{const{type:z,el:h,anchor:H,transition:u}=o;if(z===i1){Nf(h,H);return}if(z===j3){E(o);return}const d=()=>{i(h),u&&!u.persisted&&u.afterLeave&&u.afterLeave()};if(o.shapeFlag&1&&u&&!u.persisted){const{leave:x,delayLeave:C}=u,L=()=>x(h,d);C?C(o.el,d,L):L()}else d()},Nf=(o,z)=>{let h;for(;o!==z;)h=V(o),i(o),o=h;i(z)},kf=(o,z,h)=>{const{bum:H,scope:u,update:d,subTree:x,um:C}=o;H&&W4(H),u.stop(),d&&(d.active=!1,P1(x,o,z,h)),C&&V1(C,z),V1(()=>{o.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},E1=(o,z,h,H=!1,u=!1,d=0)=>{for(let x=d;x<o.length;x++)P1(o[x],z,h,H,u)},N3=o=>o.shapeFlag&6?N3(o.component.subTree):o.shapeFlag&128?o.suspense.next():V(o.anchor||o.el);let j4=!1;const f0=(o,z,h)=>{o==null?z._vnode&&P1(z._vnode,null,null,!0):T(z._vnode||null,o,z,null,null,null,h),j4||(j4=!0,L0(),U5(),j4=!1),z._vnode=o},q2={p:T,um:P1,m:t2,r:n0,mt:I4,mc:h1,pc:W,pbc:q1,n:N3,o:c};let o0,t0;return{render:f0,hydrate:o0,createApp:ct(f0,o0)}}function J4({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function z2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function ot(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function f7(c,a,e=!1){const r=c.children,i=a.children;if(F(r)&&F(i))for(let s=0;s<r.length;s++){const l=r[s];let n=i[s];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=i[s]=J1(i[s]),n.el=l.el),e||f7(l,n)),n.type===M4&&(n.el=l.el)}}function tt(c){const a=c.slice(),e=[0];let r,i,s,l,n;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,l=e.length-1;s<l;)n=s+l>>1,c[e[n]]<t?s=n+1:l=n;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,l=e[s-1];s-- >0;)e[s]=l,l=a[l];return e}function o7(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:o7(a)}const mt=c=>c.__isTeleport,i1=Symbol.for("v-fgt"),M4=Symbol.for("v-txt"),T2=Symbol.for("v-cmt"),j3=Symbol.for("v-stc"),c3=[];let w1=null;function K(c=!1){c3.push(w1=c?null:[])}function zt(){c3.pop(),w1=c3[c3.length-1]||null}let n3=1;function T0(c){n3+=c}function t7(c){return c.dynamicChildren=n3>0?w1||S2:null,zt(),n3>0&&w1&&w1.push(c),c}function Q(c,a,e,r,i,s){return t7(M(c,a,e,r,i,s,!0))}function vt(c,a,e,r,i){return t7(D(c,a,e,r,i,!0))}function Q3(c){return c?c.__v_isVNode===!0:!1}function O2(c,a){return c.type===a.type&&c.key===a.key}const m7=({key:c})=>c??null,G3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?s1(c)||M1(c)||R(c)?{i:f1,r:c,k:a,f:!!e}:c:null);function M(c,a=null,e=null,r=0,i=null,s=c===i1?0:1,l=!1,n=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&m7(a),ref:a&&G3(a),scopeId:h4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:f1};return n?(W6(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=s1(e)?8:16),n3>0&&!l&&w1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&w1.push(f),f}const D=ht;function ht(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===ko)&&(c=T2),Q3(c)){const n=F2(c,a,!0);return e&&W6(n,e),n3>0&&!s&&w1&&(n.shapeFlag&6?w1[w1.indexOf(c)]=n:w1.push(n)),n.patchFlag|=-2,n}if(xt(c)&&(c=c.__vccOpts),a){a=Ht(a);let{class:n,style:f}=a;n&&!s1(n)&&(a.class=F6(n)),c1(f)&&(R5(f)&&!F(f)&&(f=o1({},f)),a.style=t4(f))}const l=s1(c)?1:wo(c)?128:mt(c)?64:c1(c)?4:R(c)?2:0;return M(c,a,e,r,i,l,s,!0)}function Ht(c){return c?R5(c)||e7(c)?o1({},c):c:null}function F2(c,a,e=!1,r=!1){const{props:i,ref:s,patchFlag:l,children:n,transition:f}=c,t=a?ut(i||{},a):i,m={__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&m7(t),ref:a&&a.ref?e&&s?F(s)?s.concat(G3(a)):[s,G3(a)]:G3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==i1?l===-1?16:l|16:l,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:f,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&F2(c.ssContent),ssFallback:c.ssFallback&&F2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return f&&r&&(m.transition=f.clone(m)),m}function u2(c=" ",a=0){return D(M4,null,c,a)}function z7(c,a){const e=D(j3,null,c);return e.staticCount=a,e}function _1(c){return c==null||typeof c=="boolean"?D(T2):F(c)?D(i1,null,c.slice()):typeof c=="object"?J1(c):D(M4,null,String(c))}function J1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:F2(c)}function W6(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(F(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),W6(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!e7(a)?a._ctx=f1:i===3&&f1&&(f1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else R(a)?(a={default:a,_ctx:f1},e=32):(a=String(a),r&64?(e=16,a=[u2(a)]):e=8);c.children=a,c.shapeFlag|=e}function ut(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=F6([a.class,r.class]));else if(i==="style")a.style=t4([a.style,r.style]);else if(l4(i)){const s=a[i],l=r[i];l&&s!==l&&!(F(s)&&s.includes(l))&&(a[i]=s?[].concat(s,l):l)}else i!==""&&(a[i]=r[i])}return a}function F1(c,a,e,r=null){A1(c,a,7,[e,r])}const Vt=Q5();let pt=0;function Mt(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||Vt,s={uid:pt++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:i7(r,i),emitsOptions:j5(r,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Co.bind(null,s),c.ce&&c.ce(s),s}let m1=null,c4,V6;{const c=L5(),a=(e,r)=>{let i;return(i=c[e])||(i=c[e]=[]),i.push(r),s=>{i.length>1?i.forEach(l=>l(s)):i[0](s)}};c4=a("__VUE_INSTANCE_SETTERS__",e=>m1=e),V6=a("__VUE_SSR_SETTERS__",e=>C4=e)}const v3=c=>{const a=m1;return c4(c),c.scope.on(),()=>{c.scope.off(),c4(a)}},F0=()=>{m1&&m1.scope.off(),c4(null)};function v7(c){return c.vnode.shapeFlag&4}let C4=!1;function Ct(c,a=!1){a&&V6(a);const{props:e,children:r}=c.vnode,i=v7(c);et(c,e,i,a),st(c,r);const s=i?dt(c,a):void 0;return a&&V6(!1),s}function dt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,Wo);const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?gt(c):null,s=v3(c);l2();const l=a2(r,c,0,[c.props,i]);if(n2(),s(),p5(l)){if(l.then(F0,F0),a)return l.then(n=>{_0(c,n,a)}).catch(n=>{z4(n,c,0)});c.asyncDep=l}else _0(c,l,a)}else h7(c,a)}function _0(c,a,e){R(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:c1(a)&&(c.setupState=E5(a)),h7(c,e)}let B0;function h7(c,a,e){const r=c.type;if(!c.render){if(!a&&B0&&!r.render){const i=r.template||j6(c).template;if(i){const{isCustomElement:s,compilerOptions:l}=c.appContext.config,{delimiters:n,compilerOptions:f}=r,t=o1(o1({isCustomElement:s,delimiters:n},l),f);r.render=B0(i,t)}}c.render=r.render||N1}{const i=v3(c);l2();try{Zo(c)}finally{n2(),i()}}}const Lt={get(c,a){return p1(c,"get",""),c[a]}};function gt(c){const a=e=>{c.exposed=e||{}};return{attrs:new Proxy(c.attrs,Lt),slots:c.slots,emit:c.emit,expose:a}}function d4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(E5(oo(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in J2)return J2[e](c)},has(a,e){return e in a||e in J2}}))}function bt(c,a=!0){return R(c)?c.displayName||c.name:c.name||a&&c.__name}function xt(c){return R(c)&&"__vccOpts"in c}const v2=(c,a)=>to(c,a,C4);function Nt(c,a,e){const r=arguments.length;return r===2?c1(a)&&!F(a)?Q3(a)?D(c,null,[a]):D(c,a):D(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&Q3(e)&&(e=[e]),D(c,a,e))}const kt="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const St="http://www.w3.org/2000/svg",wt="http://www.w3.org/1998/Math/MathML",Q1=typeof document<"u"?document:null,R0=Q1&&Q1.createElement("template"),yt={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a==="svg"?Q1.createElementNS(St,c):a==="mathml"?Q1.createElementNS(wt,c):Q1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>Q1.createTextNode(c),createComment:c=>Q1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>Q1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const l=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{R0.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const n=R0.content;if(r==="svg"||r==="mathml"){const f=n.firstChild;for(;f.firstChild;)n.appendChild(f.firstChild);n.removeChild(f)}a.insertBefore(n,e)}return[l?l.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},At=Symbol("_vtc");function Pt(c,a,e){const r=c[At];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const a4=Symbol("_vod"),H7=Symbol("_vsh"),Q4={beforeMount(c,{value:a},{transition:e}){c[a4]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):$2(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),$2(c,!0),r.enter(c)):r.leave(c,()=>{$2(c,!1)}):$2(c,a))},beforeUnmount(c,{value:a}){$2(c,a)}};function $2(c,a){c.style.display=a?c[a4]:"none",c[H7]=!a}const Tt=Symbol(""),Ft=/(^|;)\s*display\s*:/;function _t(c,a,e){const r=c.style,i=s1(e);let s=!1;if(e&&!i){if(a)if(s1(a))for(const l of a.split(";")){const n=l.slice(0,l.indexOf(":")).trim();e[n]==null&&W3(r,n,"")}else for(const l in a)e[l]==null&&W3(r,l,"");for(const l in e)l==="display"&&(s=!0),W3(r,l,e[l])}else if(i){if(a!==e){const l=r[Tt];l&&(e+=";"+l),r.cssText=e,s=Ft.test(e)}}else a&&c.removeAttribute("style");a4 in c&&(c[a4]=s?r.display:"",c[H7]&&(r.display="none"))}const D0=/\s*!important$/;function W3(c,a,e){if(F(e))e.forEach(r=>W3(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Bt(c,a);D0.test(e)?c.setProperty(B2(r),e.replace(D0,""),"important"):c[r]=e}}const q0=["Webkit","Moz","ms"],c6={};function Bt(c,a){const e=c6[a];if(e)return e;let r=D1(a);if(r!=="filter"&&r in c)return c6[a]=r;r=o4(r);for(let i=0;i<q0.length;i++){const s=q0[i]+r;if(s in c)return c6[a]=s}return a}const E0="http://www.w3.org/1999/xlink";function Rt(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(E0,a.slice(6,a.length)):c.setAttributeNS(E0,a,e);else{const s=qf(a);e==null||s&&!g5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Dt(c,a,e,r,i,s,l){if(a==="innerHTML"||a==="textContent"){r&&l(r,i,s),c[a]=e??"";return}const n=c.tagName;if(a==="value"&&n!=="PROGRESS"&&!n.includes("-")){const t=n==="OPTION"?c.getAttribute("value")||"":c.value,m=e??"";(t!==m||!("_value"in c))&&(c.value=m),e==null&&c.removeAttribute(a),c._value=e;return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=g5(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function qt(c,a,e,r){c.addEventListener(a,e,r)}function Et(c,a,e,r){c.removeEventListener(a,e,r)}const O0=Symbol("_vei");function Ot(c,a,e,r,i=null){const s=c[O0]||(c[O0]={}),l=s[a];if(r&&l)l.value=r;else{const[n,f]=$t(a);if(r){const t=s[a]=jt(r,i);qt(c,n,t,f)}else l&&(Et(c,n,l,f),s[a]=void 0)}}const $0=/(?:Once|Passive|Capture)$/;function $t(c){let a;if($0.test(c)){a={};let r;for(;r=c.match($0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):B2(c.slice(2)),a]}let a6=0;const Ut=Promise.resolve(),It=()=>a6||(Ut.then(()=>a6=0),a6=Date.now());function jt(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;A1(Gt(r,e.value),a,5,[r])};return e.value=c,e.attached=It(),e}function Gt(c,a){if(F(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const U0=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Wt=(c,a,e,r,i,s,l,n,f)=>{const t=i==="svg";a==="class"?Pt(c,r,t):a==="style"?_t(c,e,r):l4(a)?A6(a)||Ot(c,a,e,r,l):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Zt(c,a,r,t))?Dt(c,a,r,s,l,n,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Rt(c,a,r,t))};function Zt(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&U0(a)&&R(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const i=c.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return U0(a)&&s1(e)?!1:a in c}const Kt=o1({patchProp:Wt},yt);let I0;function Yt(){return I0||(I0=nt(Kt))}const Xt=(...c)=>{const a=Yt().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Qt(r);if(!i)return;const s=a._component;!R(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const l=e(i,!1,Jt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},a};function Jt(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function Qt(c){return s1(c)?document.querySelector(c):c}const f2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},cm={},am={class:"navbar p-2 pr-4 w-fit rounded-br-3xl bg-slate-900 z-20"};function em(c,a){return K(),Q("ul",am,[P2(c.$slots,"default",{},void 0,!0)])}const rm=f2(cm,[["render",em],["__scopeId","data-v-35e4a2c9"]]),im={},sm={class:"m-1 py-1 px-2 bg-slate-900 text-white rounded-sm hover:bg-slate-200 hover:text-black"};function lm(c,a){return K(),Q("button",sm,[P2(c.$slots,"default")])}const U2=f2(im,[["render",lm]]),nm={},fm=c=>(H4("data-v-471a0158"),c=c(),u4(),c),om={class:"footer bg-black w-full p-2 mt-2 text-center"},tm=fm(()=>M("p",null,"© 2024 - Lander Jacobs",-1)),mm=[tm];function zm(c,a){return K(),Q("div",om,mm)}const vm=f2(nm,[["render",zm],["__scopeId","data-v-471a0158"]]),hm={key:0,class:"bg-slate-950 text-white customDistance rounded-lg"},Hm={key:1,class:"bg-slate-200 text-black customDistance rounded-lg"},um={__name:"BackgroundSection",props:["dark"],setup(c){const a=c;return(e,r)=>a.dark?(K(),Q("div",hm,[P2(e.$slots,"default",{},void 0,!0)])):(K(),Q("div",Hm,[P2(e.$slots,"default",{},void 0,!0)]))}},I2=f2(um,[["__scopeId","data-v-05436243"]]),Z6=c=>(H4("data-v-87b4fd11"),c=c(),u4(),c),Vm={class:"area flex flex-col place-content-center items-center"},pm=Z6(()=>M("p",{class:"text-6xl sm:text-8xl lg:text-9xl font-bold mb-10"},"Welkom",-1)),Mm=Z6(()=>M("div",{class:"flex flex-rows justify-center"},[M("p",{class:"mx-20 2xl:w-6/12"},"Ik ben Lander Jacobs, student op de Thomas More-hogeschool. Met dit portfolio hoop ik aan te tonen wat ik kan, waar mijn capaciteiten liggen en wat ik heb geleerd tijdens mijn studies.")],-1)),Cm=Z6(()=>M("ul",{class:"circles"},[M("li"),M("li"),M("li"),M("li"),M("li"),M("li"),M("li"),M("li"),M("li"),M("li")],-1)),dm={__name:"WelcomeSection",emits:["clickMore"],setup(c,{emit:a}){const e=a;function r(){e("clickMore")}return(i,s)=>(K(),Q("div",Vm,[M("div",{class:"customHeight z-10 place-content-center text-center"},[pm,Mm,M("button",{onClick:r,class:"transition-colors bg-white text-black hover:border-l-4 hover:bg-black hover:text-white font-semibold border-2 border-gray-800 rounded shadow py-2 px-5 mt-5 w-max"}," Meer over mij ")]),Cm]))}},Lm=f2(dm,[["__scopeId","data-v-87b4fd11"]]),gm="/images/profielfoto_professioneel.jpg",bm={__name:"DownloadButton",props:["pdfPath","dark"],setup(c){const a=c;function e(){const r=document.createElement("a");r.href=a.pdfPath,r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)}return(r,i)=>c.dark?(K(),Q("button",{key:0,onClick:e,class:"transition-colors bg-black text-white hover:bg-gray-100 hover:text-black font-semibold border-2 border-gray-800 rounded shadow py-2 px-4 w-full"},[P2(r.$slots,"default")])):(K(),Q("button",{key:1,onClick:e,class:"transition-colors bg-slate-100 text-black hover:bg-black hover:text-white font-semibold border-2 border-gray-800 rounded shadow py-2 px-4 w-full"},[P2(r.$slots,"default")]))}};class b1{constructor(a,e,r){this.title=a,this.text=e,this.imageLink=r}}class x2{constructor(a,e){this.title=a,this.confidence=e}}const xm=x1([new b1("C#","C# is een van de eerste programmeertalen waarmee ik ben begonnen 4 jaar geleden. Sindsdien heb ik ook al veel projecten gemaakt in deze taal","/images/icons/c-sharp_logo.png"),new b1("Java","Tijdens mijn traject in de professionele bachelor Toegepaste Informatica leerde ik ook werken met Java. Ik heb hier nog niet zoveel ervaring mee, maar zou deze zeker wel graag opdoen.","/images/icons/java_logo.png"),new b1("Vue","Tijdens een zomerproject met enkele medestudenten kozen we ervoor om Vue te gebruiken. Zo leerden we een nieuw framework dat we niet in onze opleiding kregen. Dit portfolio is ook gemaakt met behulp van Vue.","/images/icons/vue_logo.png"),new b1("Unity","Tijdens mijn stage werkte ik gedurende 3 maanden aan een applicatie met Unity. Verder maakten we voor de scripts gebruik van C#.","/images/icons/unity_logo.png"),new b1("PHP",'Ik leerde tijdens mijn opleiding ook werken met PHP. Voor het OPO "PHP Project" maakten we een applicatie in het PHP-framework Laravel.',"/images/icons/php_logo.png"),new b1("Docker","Ik heb docker een aantal keer gebruikt voor kleinere opdrachten. Daarnaast heb ik het ook gebruikt voor een groter project dat diende als samenkomstpunt tussen verschillende IT-opleidingen.","/images/icons/docker_logo.png"),new b1("Flutter",'Voor het OPO "Augmented Reality and Mobile App Development" maakte ik samen met een andere student een mobiele applicatie. Voor deze applicatie heb ik gewerkt aan de frontend met Flutter.',"/images/icons/flutter_logo.png"),new b1("Python","Python is een taal die ik voornamelijk heb gebruikt in het verband met het verwerken van data, webscrapers en AI-gerelateerde projecten.","/images/icons/python_logo.png"),new b1("HTML","Voor het ontwerpen van webpagina's maak ik uiteraard gebruik van HTML. Dit leerde ik ook tijdens mijn graduaatsopleiding.","/images/icons/html_logo.png"),new b1("CSS","Het stylen van webpagina's doe ik uiteraard via CSS. Soms kies ik er ook voor om libraries of frameworks te gebruiken die custom styling aanbieden met behulp van CSS. Een voorbeeld hiervan is de Tailwind-library.","/images/icons/css_logo.png"),new b1("Javascript","Voor het werken op webpagina's gebruik ik ook javascript. Deze taal gebruik ik ook wanneer ik werk met Vue.","/images/icons/javascript_logo.png"),new b1("SQL","Tijdens de graduaatsopleiding heb ik vaak gewerkt met SQL voor het aanmaken van databases. Later gebruikte ik vaker de Code-First approach voor het werken met een database. Ik gebruik nog wel van tijd tot tijd SQL om de inhoud van mijn databases na te kijken.","/images/icons/sql_logo.png")]),Nm=x1([new x2("Betrouwbaar",100),new x2("Teamwerk",95),new x2("Zelfstandig",80),new x2("Flexibel",80),new x2("Nauwkeurig",75),new x2("Besluitvaardig",65)]),km=M("div",{class:"text-center"},[M("h1",{class:"text-5xl bg-slate-800 text-white p-5 mb-7 rounded"},"Over mij")],-1),Sm={class:"grid sm:grid-flow-auto sm:auto-rows-auto xl:grid-flow-col xl:auto-cols-auto gap-4"},wm=M("div",{class:"place-content-center"},[M("img",{class:"max-w-[18rem] mx-auto rounded-xl",src:gm})],-1),ym={class:"place-content-center"},Am={class:"grid auto-rows-auto grid-flow-auto gap-4 lg:pl-10"},Pm=z7('<div class=""><p class="bg-slate-800 text-white text-lg font-bold mb-2 text-center">Profiel</p><p>Ik ben <b>Lander Jacobs</b>, momenteel student aan de Thomas More hogeschool te Geel. Na het middelbaar ben ik na enkele keuzes beland bij de <b>graduaatsopleiding programmeren</b>. Door deze opleiding kreeg ik een basis in het programmeren. Doordat mijn passie voor development was aangewakkerd, besloot ik na mijn graduaatsopleiding verder te studeren. Als vervolgopleiding koos ik dan voor de <b>bacheloropleiding Toegepaste Informatica</b>. Hier heb ik mijn kennis omtrent <b>Application Development</b> kunnen uitdiepen en verbreden.</p><br><p>Als ik een eigenschap van mezelf naar voor zou moeten zetten, zou ik zeggen dat ik <b>creatief</b> uit de hoek kan komen. Ik kan plezier vinden in het verhelpen van problemen met behulp van de technologiën die ik al ken. Daarnaast <b>leer ik ook graag bij</b> om zo problemen die ik al eens ben tegengekomen in de toekomst anders te kunnen aanpakken.</p></div><p class="bg-slate-800 text-white text-lg font-bold mb-2 text-center">Studieloopbaan</p>',2),Tm={class:"grid sm:grid-flow-auto sm:auto-rows-auto xl:grid-flow-col xl:grid-cols-2 gap-4 px-10 text-center"},Fm={class:"hover:scale-105 place-content-center"},_m=M("h1",{class:"text-2xl font-bold"},"Graduaat Programmeren",-1),Bm=M("p",null,"2020-2022",-1),Rm={class:"hover:scale-105 place-content-center"},Dm=M("h1",{class:"text-2xl font-bold"},"Bachelor Toegepaste Informatica",-1),qm=M("p",null,"2022-2024",-1),Em=M("p",{class:"bg-slate-800 text-white text-lg font-bold mt-2 mb-5 text-center"},"Technische vaardigheden",-1),Om={class:"flex flex-row flex-wrap gap-5 my-5 justify-center text-black"},$m=["onMouseover"],Um=["src"],Im=M("hr",{class:"bg-slate-800 h-1 rounded-full my-4 mx-10 xl:mx-52"},null,-1),jm={class:"text-center flex flex-col justify-center"},Gm=M("div",{class:"flex flex-rows justify-center"},[M("p",{class:"font-semibold mb-2 px-5 py-0.5 text-wrap bg-slate-800 text-white w-max"},"Mijn ervaring")],-1),Wm={class:"h-48 sm:h-36 md:h-24 lg:h-20 place-content-center"},Zm={key:0},Km={key:1},Ym=M("p",{class:"bg-slate-800 text-white text-lg font-bold mt-2 mb-3 text-center"},"Professionele vaardigheden",-1),Xm={class:"mb-5 flex flex-row flex-wrap gap-5 justify-center text-black"},Jm={class:"text-center w-4/12"},Qm={class:"my-2 text-md font-semibold"},cz={class:"w-full bg-gray-500 rounded-full h-5"},az={class:"flex flex-rows justify-center"},ez={class:"mt-5 w-8/12 sm:w-6/12"},rz={__name:"AboutMe",setup(c){const a=x1("Als u meer wilt weten over mijn ervaring met een specifieke technologie, kunt u over de gewenste technologie hoveren."),e=x1(null);function r(i,s){a.value=s,e.value!=null&&(e.value.classList.remove("scale-125"),e.value.classList.remove("mx-1")),e.value=i.target.closest("div"),e.value.classList.add("scale-125"),e.value.classList.add("mx-1")}return(i,s)=>{const l=V4("font-awesome-icon");return K(),Q(i1,null,[km,M("div",Sm,[wm,M("div",ym,[M("div",Am,[Pm,M("div",Tm,[M("div",Fm,[_m,D(l,{icon:["fas","user-graduate"],size:"4x",class:"my-2"}),Bm]),M("div",Rm,[Dm,D(l,{icon:["fas","graduation-cap"],size:"4x",class:"my-2"}),qm])])])])]),Em,M("div",null,[M("div",Om,[(K(!0),Q(i1,null,X2(u1(xm),n=>(K(),Q("div",{onMouseover:f=>r(f,n.text),class:"transition text-center"},[M("img",{class:"size-20 bg-slate-800 rounded-full p-2.5",src:n.imageLink},null,8,Um),M("p",null,O1(n.title),1)],40,$m))),256))]),Im,M("div",jm,[Gm,M("div",Wm,[a.value!==""?(K(),Q("p",Zm,O1(a.value),1)):(K(),Q("p",Km,"Als u meer wilt weten over de technologiën die ik ken kunt u over de gewenste technologie hoveren."))])])]),Ym,M("div",Xm,[(K(!0),Q(i1,null,X2(u1(Nm),n=>(K(),Q("div",Jm,[M("p",Qm,O1(n.title),1),M("div",cz,[M("div",{class:"bg-slate-900 h-5 rounded-full",style:t4({width:n.confidence+"%"})},null,4)])]))),256))]),M("div",az,[M("div",ez,[D(bm,{dark:!0,pdfPath:"/documents/CV_LanderJacobs.pdf"},{default:d1(()=>[u2("Bekijk CV")]),_:1})])])],64)}}},iz="/images/mobilab_logo.png",sz="/images/hp_omnicept.png",lz=z7('<div class="text-center"><h1 class="text-5xl bg-slate-200 text-black p-5 mb-7 rounded">Stage</h1></div><div class="flex flex-row flex-wrap gap-5 justify-center"><div class="place-content-center justify-center"><img class="max-w-full md:max-w-sm md:m-2" src="'+iz+'"></div><div class="sm:w-12/12 2xl:w-4/12 text-center"><p class="bg-slate-200 text-black text-lg font-bold mb-2">Ontwikkeling van een VR serious game</p><p>Ik deed mijn stage bij <b>Mobilab &amp; Care</b>. Dit is een onderzoekslab dat zich inzet voor een inclusievere samenleving. Hun doel is om de levenskwaliteit van mensen te verbeteren. Een van de onderwerpen waar ze mee bezig zijn is relaxatie verkrijgen door middel van <b>VR</b>.</p><br><p>Voor mijn stageopdracht heb ik samen met een andere stagiaire een VR-applicatie gemaakt. Deze applicatie zorgt ervoor dat men in een rustige omgeving wordt geplaatst. Daar kan men enkele activiteiten uitvoeren om tot rust te komen. Daarbij werkten we ook de <b>HP Reverb G2 Omnicept Edition</b>, dit is een <b>VR-headset</b> die <b>biologische feedback</b> kan geven over de gebruiker. Zodoende hebben we de data die we uit de headset konden verkrijgen, gebruikt om de VR-applicatie te laten reageren op de gemoedsrust van de gebruiker.</p><br><p>Hieronder vindt u de documenten voor mijn stage. Het plan van aanpak bevat meer uitleg over de stageopdracht en Mobilab zelf. Verder heb ik ook een realisatieverslag gemaakt van wat ik heb gerealiseerd tijdens mijn stage. Als laatste voerde ik ook nog een reflectie uit van mijn werk tijdens deze stage. Tijdens de stage hield ik ook een logboek bij met mijn dagdagelijks activiteiten.</p></div><div class="place-content-center justify-center"><img class="sm:max-w-full sm:max-w-md" src="'+sz+'"></div></div>',2),nz={__name:"Internship",setup(c){return(a,e)=>lz}};class j2{constructor(a,e,r,i,s,l,n,f){this.title=a,this.imgLink=e,this.tags=r,this.smallText=i,this.middleText=s,this.bigText=l,this.githubLink=n,this.youtubeLink=f}}const fz=x1([new j2("Project 4.0: Choochoovision","/images/project_images/choochoovision.png",["Angular","Python","Java","Tailwind","Docker"],"Het OPO Project 4.0 vereist dat verschillende IT-richtingen samenwerken om voor een echte klant een project te maken. De groep waarin ik heb mogen werken bestaat uit een AI-student, twee Cloud en Cyber Security-studenten en twee Application Development studenten. Als opdracht maakten we voor RideOnTrack een applicatie waarin kon gelezen worden waar er problemen zijn op de treinsporen. Hiervoor werd een AI-model gemaakt dat de camerabeelden van de trein onderzocht en probeerde op te merken waar iets op het treinspoor lag. Dit hele project is een proof-of-concept en wordt zodoende nog door RideOnTrack bekeken of het uiteindelijk gebruikt zal worden.",["Mijn onderdeel voor deze opdracht was om de data van het AI-model door te sturen naar onze Java-backend, en uiteindelijk naar de Angular-frontend. Verder heb ik ook nog van tijd tot tijd mijn medestudent bijgestaan die bezig was met de backend en de frontend. Dit bijstaan was voornamelijk was voornamelijk op het vlak van enkele bugfixes of kleine problemen die soms naar voor kwamen.","De code die ik heb geschreven om de data van het AI-model door te sturen, was geschreven in Python. Dit was omdat de AI-modellen gebruik maakten van python-libraries om door de camerabeelden te gaan. Door python te gebruiken kon dit dan ook makkelijk in een docker-container worden geplaatst. Het gebruik van de docker-container ensceneerde dan de computer die op de trein staat, waar alle opnames van de treinsporen worden opgeslagen en dan ook de AI-modellen die daarmee zullen werken.","We werkten met twee AI-modellen die twee verschillende onderwerpen probeerden te detecteren. Daarom zorgde mijn code er ook voor dat de video die we gebruikten tijdens dit proof-of-concept deze twee modellen had gebruikt voordat de data wordt verstuurd. De data moest ook nog worden gefilterd om ervoor te zorgen dat er niet te veel wordt doorgestuurd. De AI-modellen merkten sommige zaken meerdere keren op. Als er geen filtering zou worden uitgevoerd, zou er bijvoorbeeld 20 afbeeldingen van eenzelfde probleem op de spoorwegen kunnen verstuurd worden.","Als laatste hebben we ook nog gebruik gemaakt van een externe API om locaties lang treinsporen te gebruiken. De video’s die we van RideOnTrack kregen gaven ons geen toegang tot de locaties waar ze werden opgenomen wegens privacy-redenen. Het gebruik van locaties van willekeurige treinsporen op de Belgische spoorwegen was voornamelijk om het proof-of-concept realistischer te laten overkomen."],"Tijdens deze opdracht heb ik voornamelijk leren werken met AI-modellen. Dit is ook door het feit dat we slechts een AI-student hadden die 2 modellen heeft gemaakt op een vrij korte periode. Om de last hiervan te ontnemen ben ik dan voornamelijk bezig geweest met de data van de modellen klaar te maken voor de backend. Ik heb ook de kans gehad om wat uitgebreidere dingen te mogen doen met Python. Het werken met Docker-containers was ook zeker nog interessant.","","https://www.youtube.com/watch?v=YxkGi11wp9Y"),new j2("PlaylistPortal","/images/project_images/playlistportal.png",["Vue","Tailwind","Javascript"],"Tijdens de zomer voor ons laatste jaar heb ik samen met 3 andere studenten een project gemaakt. Het doel van dit project was voornamelijk om een nieuwe taal te leren die we niet zouden zien tijdens onze studies. Zodoende kozen we voor Vue, als styling kozen we voor iets wat ons stuk bekender was: Tailwind. Omdat we niet zeker waren wat we zouden kunnen maken, besloten we de functionaliteiten van Spotify na te maken in een nieuwe applicatie. We doopten dit “PlaylistPortal”. Zoals te merken aan de naam managen we hierbinnen de afspeellijsten die iemand heeft. Verder kunnen er afspeellijsten worden bijgemaakt, nummers in een lijst worden toegevoegd of verwijdert, nummers worden afgespeeld, … . Hierbij zouden we gebruik maken van de Spotify-API en de Youtube-API, zo konden we ook uitbreiden met extra functionaliteiten zoals het tonen van Youtube-video’s.",["Tijdens dit project ben ik bezig geweest met de afspeelfunctie binnen de afspeellijsten. Zo zorgde ik voor het afspelen van een nummer, maar ook voor het afspelen van een hele lijst. Extra functionaliteiten waar ik aan werkte waren ook een manier om een lijst te shuffelen zodat nummers elke keer in een andere volgorde konden beluisterd worden. Die functionaliteit liet ik samenwerken met een andere functionaliteit waar ik aan werkte: het loopen van een huidig spelend nummer of een huidig afspelende lijst. Later werkte ik ook aan het toevoegen en verwijderen van afspeellijsten met behulp van de Youtube-API. Uiteraard deed ik ook mijn best om dit alles qua visuele stijl te laten overeenkomen met de huisstijl die we vooraf hadden overeengekomen."],"Dit project was interessant omdat het mij en mijn teamgenoten toeliet zelf de scope van de applicatie te bepalen. Ik kreeg zeker een breder zicht op wat ik kon, waar ik me in kon verbeteren en wat er mogelijk was. Dit kwam enigszins door samen te werken met oprecht gemotiveerde medestudenten en anderzijds door de vrijheid die was ontstaan door te werken buiten de grenzen van een opleiding. Vervolgens heb ik wat ik tijdens dit project heb geleerd op het vlak van Tailwind en Vue ook toegepast tijdens het werken aan het portfolio waar u zich nu bevindt.","",""),new j2("Mobile Development","/images/project_images/mobile_development.png",["Flutter","WikiTude","NodeJs","Javascript","MongoDB"],'Voor het OPO "Augmented Reality and Mobile App Development" moesten we in groepen van 2 een applicatie maken met AR-functionaliteit. Voor de AR-functionaliteit maakten we gebruik van WikiTude en voor de rest van de applicatie moesten we Flutter gebruiken. Als laatste moest deze applicatie ook data kunnen ophalen en opslaan met behulp van GET- POST- PUT- en DELETE-methoden. Ik en mijn collega besloten als onderwerp van de app te werken met hoeden. In onze applicatie kun je met AR een hoed op iemand zijn hoofd positioneren en vervolgens een review schrijven voor deze hoed.',["Tijdens dit project heb ik me bezig gehouden met het grootste deel van de Flutter-app en het opzetten en onderhouden van een API die we zelf hadden gemaakt. Mijn collega hield zich dan bezig met de AR-kant en deze samen te laten komen met de rest van de applicatie.","Als eerste maakte ik de API met behulp van NodeJS. Tijdens mijn graduaatsopleiding hadden we geleerd hoe we een API konden hosten op Netlify met behulp van NodeJS en MongoDB. Het opzetten van deze API en hiermee werken was optioneel, maar maakte het voor ons wel makkelijker om te werken aan onze applicatie.","Voor de rest werkte ik aan een inlogscherm, een overzicht van alle hoeden, een scherm om alle reviews van een hoed te zien en een scherm om reviews te bewerken. Het inlogscherm was voornamelijk zodat er een account zou gelinkt kunnen worden aan een review. Op het overzicht scherm werd per hoed berekend wat de gemiddelde rating is. Na het klikken op een hoed wordt men doorgestuurd naar het scherm met alle reviews voor de hoed. Hierbij kan men ook filteren op de eigen reviews. Een eigen review kan dan gebruikt worden om bewerkt te worden in een apart scherm of verwijdert te worden. Voor het aanmaken van de reviews moet men gebruik maken van de AR-functionaliteit die mijn collega heeft gemaakt."],"Dit project leerde me vooral te werken met Flutter. Verder heb ik ook nog eens gebruik kunnen maken van wat ik had geleerd tijdens de graduaatsopleiding. Door terug te gaan naar deze eerder vergaarde kennis, heb ik deze kunnen uitbreiden en beter kunnen gebruiken.","","https://www.youtube.com/watch?v=c5Vg62q7Fck"),new j2("Website voor fietsclub de Platte Berg","/images/project_images/platte_berg.png",["PHP","Laravel","Tailwind","HTML"],"Dit project is een opdracht vanuit de opleiding voor het OPO “PHP Project”. Hierbij werkten we samen met enkele andere studenten om een webapp te maken voor een theoretische klant. In dit geval was de klant een fietsclub die graag een website zou willen voor hun leden. Op deze website zou ingelogd moeten kunnen worden om zo verschillende faciliteiten van de club te kunnen bereiken zoals: wielerkledij, inschrijven voor ritten, enzovoorts. De website moest gemaakt worden met het PHP-framework Laravel.",["Tijdens dit project hebben ik meegewerkt aan de database die codefirst is aangemaakt. Verder hebben we deze aangemaakte database dan verbonden met de applicatie door middel van Livewire. Verder heb ik dan ook enkele pagina’s gemaakt. Deze werden gestyled door middel van Tailwind. Ook maakte ik een groot deel van de middelware die rekening moest houden met onderdelen die op de achtergrond werkten.","Tijdens dit project werkten we in een groep van 6. Door de nalatigheid van 2 van de studenten in deze groep heb ik een deel van hun werk moeten oppakken om de applicatie te laten werken. Zodoende heb ik tegen het einde van het project wat meer werk op me gekregen in vergelijking met enkele andere studenten."],"Als eerste zou ik kunnen stellen dat ik meer heb geleerd over hoe het Laravel-framework werkt. Dit was dan ook de eerste keer dat ik buiten een ander OPO om de kans heb gekregen om met PHP te werken. Dit zelfstandig werk leerde me dan ook meer over het opzoekwerk in online documentatie en welke bronnen online best te gebruiken zijn. Op het vlak van teamwerk heb ik mezelf ook een stuk flexibeler moeten opstellen om het wegvallen van enkele studenten op te kunnen vangen.","",""),new j2("Dungeon Project","/images/project_images/screenshot_dungeon_project.png",["C#",".Net Core","XML","SQL"],"Dit project is aangemaakt voor het OPO DevOps en Security. Voor de opdracht moest er een WPF-project worden gemaakt in .Net Core waarbij ook gebruik moest gemaakt worden van SQLlite. Vervolgens zou deze ook nog constant gebuild en getest worden met behulp van een CI/CD-pipeline. Nadat dit project klaar was voor de opdracht heb ik hier in mijn vrije tijd verder aan gewerkt.",["Als onderwerp besloot ik een RPG-stijl videogame te maken dat gemakkelijk kon verbreed worden door gegevens toe te voegen aan de SQLLite-database. De uitwerking van het spel was niet zeer belangrijk en het voornaamste was om de technische kant te laten werken.","Om het mezelf enigszins makkelijker te maken heb ik gebruik gemaakt van het MVVM-model om de applicatie uit te werken. De database is Code-First opgemaakt met behulp van ORM (Object-Relational-Mapping). Verder wordt de database gebruikt door middel van een Unit Of Work. De modellen voor de data worden ook beheerd met behulp van een Generic Repository.","Tijdens mijn vrije tijd heb ik dan ook verder gewerkt nadat de opdracht af was. De uitbreiding die ik er vervolgens op heb uitgevoerd zijn niet zeer indrukwekkend, maar hebben zeker nieuwe zaken bijgeleerd. Zo heb ik als grootste extra bijkomstigheid leren werken met threading binnen C#."],"Ik heb van dit project voornamelijk geleerd om zelfstandig een project op te zetten. Dit was namelijk de eerste keer dat ik op mezelf een relatief groot project was begonnen. Dit was ook een van de eerste keren dat ik binnen C# code-first werkte en met ORM. Dit project heeft me dan ook lessen meegegeven met betrekking tot datastructuur die ik vandaag de dag nog gebruik.","https://github.com/LanderJacobs/dungeon_project","")]),h3=c=>(H4("data-v-d952d305"),c=c(),u4(),c),oz={class:"fixed top-0 right-0 h-screen w-screen bg-black/80 place-content-center items-center flex flex-cols z-50"},tz={class:"bg-slate-200 sm:w-10/12 md:w-8/12 h-min rounded-t-lg customModalOverflow z-50"},mz={class:"text-2xl bg-black text-white py-5 mx-3 mb-1 text-center rounded-b-xl"},zz={class:"mx-5 mt-3"},vz={class:"grid sm:grid-flow-auto sm:auto-rows-auto 2xl:grid-flow-col 2xl:auto-cols-auto justify-content gap-5"},hz={class:"place-content-center grid"},Hz=["src"],uz={class:"place-content-center"},Vz=h3(()=>M("p",{class:"text-black text-lg font-bold mt-3"},"Context",-1)),pz={class:"text-black mb-3"},Mz={class:"flex-wrap"},Cz=h3(()=>M("p",{class:"text-black text-lg font-bold mt-3"},"Hoe het project verliep",-1)),dz={class:"text-black mb-3 text-wrap"},Lz=h3(()=>M("br",null,null,-1)),gz=h3(()=>M("p",{class:"text-black text-lg font-bold mt-3"},"Wat ik er uit heb geleerd",-1)),bz={class:"text-black mb-3"},xz={class:"flex flex-cols justify-between m-2"},Nz=["href"],kz=["href"],Sz=h3(()=>M("div",{class:"text-center"},[M("h1",{class:"text-5xl bg-slate-800 text-white p-5 mb-7 rounded"},"Realisaties")],-1)),wz={class:"flex flex-row flex-wrap gap-5 2xl:gap-10 justify-center"},yz=["onClick"],Az={class:"text-white text-lg font-bold"},Pz={class:"place-content-center justify-center"},Tz=["src"],Fz={class:"flex flex-rows flex-wrap mt-2"},_z={class:"bg-slate-100 text-black font-semibold place-content-center mx-2 mt-1 px-2 py-1 rounded-3xl"},Bz={__name:"Achievements",setup(c){let a=x1(!1),e=x1({title:{type:String,default:"Project naam"}});function r(){a.value=!a.value}function i(s){e.value=s,a.value=!0}return(s,l)=>{const n=V4("font-awesome-icon");return K(),Q(i1,null,[Y4(M("div",oz,[M("div",tz,[M("p",mz,O1(u1(e).title),1),M("div",zz,[M("div",vz,[M("div",hz,[M("img",{src:u1(e).imgLink,class:"sm:max-w-sm xl:max-w-lg border-x-4 border-y-2 border-black rounded-lg"},null,8,Hz)]),M("div",uz,[Vz,M("p",pz,O1(u1(e).smallText),1)])]),M("div",Mz,[Cz,(K(!0),Q(i1,null,X2(u1(e).middleText,f=>(K(),Q("p",dz,[u2(O1(f),1),Lz]))),256)),gz,M("p",bz,O1(u1(e).bigText),1)])]),M("div",xz,[M("button",{onClick:r,class:"transition-colors bg-black text-white hover:bg-gray-100 hover:text-black font-semibold border-2 border-gray-800 rounded shadow py-2 px-4"}," Sluiten "),Y4(M("a",{href:u1(e).youtubeLink,target:"_blank",class:"bg-black text-white hover:bg-gray-100 hover:text-black border-2 border-gray-800 rounded-full size-fit p-2"},[D(n,{icon:["fab","youtube"],size:"lg"})],8,Nz),[[Q4,u1(e).youtubeLink!==""]]),Y4(M("a",{href:u1(e).githubLink,target:"_blank",class:"bg-black text-white hover:bg-gray-100 hover:text-black border-2 border-gray-800 rounded-full size-fit p-2"},[D(n,{icon:["fab","github"],size:"lg"})],8,kz),[[Q4,u1(e).githubLink!==""]])])]),M("div",{onClick:r,class:"fixed top-0 right-0 h-screen w-screen z-20"})],512),[[Q4,u1(a)]]),Sz,M("div",null,[M("div",null,[M("div",wz,[(K(!0),Q(i1,null,X2(u1(fz),f=>(K(),Q("div",{onClick:t=>i(f),class:"bg-slate-800 w-full grid grid-flow-auto auto-rows-auto md:w-5/12 lg:w-4/12 p-2 rounded-md hover:scale-105 transition"},[M("p",Az,O1(f.title),1),M("div",Pz,[M("img",{src:f.imgLink,class:"max-w-full rounded-lg"},null,8,Tz)]),M("div",Fz,[(K(!0),Q(i1,null,X2(f.tags,t=>(K(),Q("p",_z,O1(t),1))),256))])],8,yz))),256))])])])],64)}}},Rz=f2(Bz,[["__scopeId","data-v-d952d305"]]),Dz={},L4=c=>(H4("data-v-1bc627af"),c=c(),u4(),c),qz={class:"customEndSection flex flex-col"},Ez=L4(()=>M("div",{class:"text-center"},[M("h1",{class:"text-5xl bg-slate-200 text-black p-5 mb-7 rounded"},"Contact")],-1)),Oz={class:"flex flex-col flex-grow full gap-4 items-center place-content-center justify-center text-black"},$z={href:"https://www.linkedin.com/in/landerjacobs2001/",target:"_blank",class:"w-8/12 xl:w-6/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},Uz=L4(()=>M("p",{class:"text-white"},"Bereik me via Linkedin",-1)),Iz={href:"https://github.com/LanderJacobs",target:"_blank",class:"w-8/12 xl:w-6/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},jz=L4(()=>M("p",{class:"text-white"},"Vind me op Github",-1)),Gz={href:"mailto:lander.jacobs2001@gmail.com",target:"_blank",class:"w-8/12 xl:w-6/12 text-center border-2 p-3 rounded-lg transition hover:scale-105"},Wz=L4(()=>M("p",{class:"text-white"},"Stuur me een mail",-1));function Zz(c,a){const e=V4("font-awesome-icon");return K(),Q("div",qz,[Ez,M("div",Oz,[M("a",$z,[D(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fab","linkedin"],size:"3x"}),Uz]),M("a",Iz,[D(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fab","github"],size:"3x"}),jz]),M("a",Gz,[D(e,{class:"bg-gray-100 border-2 border-gray-800 rounded-full inline-block p-3 my-2",icon:["fas","envelope"],size:"3x"}),Wz])])])}const Kz=f2(Dz,[["render",Zz],["__scopeId","data-v-1bc627af"]]),Yz={__name:"App",setup(c){const a=x1(null),e=x1(null),r=x1(null),i=x1(null),s=x1(null);function l(){var v;(v=a.value)==null||v.scrollIntoView({behavior:"smooth"})}function n(){var v;(v=e.value)==null||v.scrollIntoView({behavior:"smooth"})}function f(){var v;(v=r.value)==null||v.scrollIntoView({behavior:"smooth"})}function t(){var v;(v=i.value)==null||v.scrollIntoView({behavior:"smooth"})}function m(){var v;(v=s.value)==null||v.scrollIntoView({behavior:"smooth"})}return(v,V)=>{const g=V4("font-awesome-icon");return K(),Q(i1,null,[M("div",{ref_key:"welcomeRef",ref:a},null,512),D(rm,null,{default:d1(()=>[D(U2,{onClick:l},{default:d1(()=>[D(g,{icon:"fas fa-house"})]),_:1}),D(U2,{onClick:n},{default:d1(()=>[u2("Over mij")]),_:1}),D(U2,{onClick:f},{default:d1(()=>[u2("Stage")]),_:1}),D(U2,{onClick:t},{default:d1(()=>[u2("Realisaties")]),_:1}),D(U2,{onClick:m},{default:d1(()=>[u2("Contact")]),_:1})]),_:1}),M("div",null,[D(I2,{dark:!0},{default:d1(()=>[D(Lm,{onClickMore:n})]),_:1}),M("div",{ref_key:"aboutmeRef",ref:e},[D(I2,{dark:!1},{default:d1(()=>[D(rz)]),_:1})],512),M("div",{ref_key:"internshipRef",ref:r},[D(I2,{dark:!0},{default:d1(()=>[D(nz)]),_:1})],512),M("div",{ref_key:"achievementsRef",ref:i},[D(I2,{dark:!1},{default:d1(()=>[D(Rz)]),_:1})],512),M("div",{ref_key:"contactRef",ref:s},[D(I2,{dark:!0},{default:d1(()=>[D(Kz)]),_:1})],512)]),D(vm)],64)}}},Xz=f2(Yz,[["__scopeId","data-v-284d83bc"]]);function j0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?j0(Object(e),!0).forEach(function(r){l1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):j0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function e4(c){"@babel/helpers - typeof";return e4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e4(c)}function Jz(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Qz(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function cv(c,a,e){return a&&Qz(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function l1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function K6(c,a){return ev(c)||iv(c,a)||u7(c,a)||lv()}function H3(c){return av(c)||rv(c)||u7(c)||sv()}function av(c){if(Array.isArray(c))return p6(c)}function ev(c){if(Array.isArray(c))return c}function rv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function iv(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,l,n;try{for(e=e.call(c);!(i=(l=e.next()).done)&&(r.push(l.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,n=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw n}}return r}}function u7(c,a){if(c){if(typeof c=="string")return p6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p6(c,a)}}function p6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function sv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G0=function(){},Y6={},V7={},p7=null,M7={mark:G0,measure:G0};try{typeof window<"u"&&(Y6=window),typeof document<"u"&&(V7=document),typeof MutationObserver<"u"&&(p7=MutationObserver),typeof performance<"u"&&(M7=performance)}catch{}var nv=Y6.navigator||{},W0=nv.userAgent,Z0=W0===void 0?"":W0,r2=Y6,X=V7,K0=p7,T3=M7;r2.document;var Z1=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",C7=~Z0.indexOf("MSIE")||~Z0.indexOf("Trident/"),F3,_3,B3,R3,D3,I1="___FONT_AWESOME___",M6=16,d7="fa",L7="svg-inline--fa",d2="data-fa-i2svg",C6="data-fa-pseudo-element",fv="data-fa-pseudo-element-pending",X6="data-prefix",J6="data-icon",Y0="fontawesome-i2svg",ov="async",tv=["HTML","HEAD","STYLE","SCRIPT"],g7=function(){try{return!0}catch{return!1}}(),Y="classic",e1="sharp",Q6=[Y,e1];function u3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Y]}})}var f3=u3((F3={},l1(F3,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),l1(F3,e1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),F3)),o3=u3((_3={},l1(_3,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),l1(_3,e1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),_3)),t3=u3((B3={},l1(B3,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),l1(B3,e1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),B3)),mv=u3((R3={},l1(R3,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),l1(R3,e1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),R3)),zv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,b7="fa-layers-text",vv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hv=u3((D3={},l1(D3,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),l1(D3,e1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),D3)),x7=[1,2,3,4,5,6,7,8,9,10],Hv=x7.concat([11,12,13,14,15,16,17,18,19,20]),uv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m3=new Set;Object.keys(o3[Y]).map(m3.add.bind(m3));Object.keys(o3[e1]).map(m3.add.bind(m3));var Vv=[].concat(Q6,H3(m3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V2.GROUP,V2.SWAP_OPACITY,V2.PRIMARY,V2.SECONDARY]).concat(x7.map(function(c){return"".concat(c,"x")})).concat(Hv.map(function(c){return"w-".concat(c)})),a3=r2.FontAwesomeConfig||{};function pv(c){var a=X.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Mv(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(X&&typeof X.querySelector=="function"){var Cv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Cv.forEach(function(c){var a=K6(c,2),e=a[0],r=a[1],i=Mv(pv(e));i!=null&&(a3[r]=i)})}var N7={styleDefault:"solid",familyDefault:"classic",cssPrefix:d7,replacementClass:L7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a3.familyPrefix&&(a3.cssPrefix=a3.familyPrefix);var _2=k(k({},N7),a3);_2.autoReplaceSvg||(_2.observeMutations=!1);var w={};Object.keys(N7).forEach(function(c){Object.defineProperty(w,c,{enumerable:!0,set:function(e){_2[c]=e,e3.forEach(function(r){return r(w)})},get:function(){return _2[c]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(a){_2.cssPrefix=a,e3.forEach(function(e){return e(w)})},get:function(){return _2.cssPrefix}});r2.FontAwesomeConfig=w;var e3=[];function dv(c){return e3.push(c),function(){e3.splice(e3.indexOf(c),1)}}var Y1=M6,R1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lv(c){if(!(!c||!Z1)){var a=X.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=X.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],l=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(r=s)}return X.head.insertBefore(a,r),c}}var gv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z3(){for(var c=12,a="";c-- >0;)a+=gv[Math.random()*62|0];return a}function R2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function c8(c){return c.classList?R2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function k7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bv(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(k7(c[e]),'" ')},"").trim()}function g4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function a8(c){return c.size!==R1.size||c.x!==R1.x||c.y!==R1.y||c.rotate!==R1.rotate||c.flipX||c.flipY}function xv(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(l," ").concat(n)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:t}}function Nv(c){var a=c.transform,e=c.width,r=e===void 0?M6:e,i=c.height,s=i===void 0?M6:i,l=c.startCentered,n=l===void 0?!1:l,f="";return n&&C7?f+="translate(".concat(a.x/Y1-r/2,"em, ").concat(a.y/Y1-s/2,"em) "):n?f+="translate(calc(-50% + ".concat(a.x/Y1,"em), calc(-50% + ").concat(a.y/Y1,"em)) "):f+="translate(".concat(a.x/Y1,"em, ").concat(a.y/Y1,"em) "),f+="scale(".concat(a.size/Y1*(a.flipX?-1:1),", ").concat(a.size/Y1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var kv=`:root, :host {
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
}`;function S7(){var c=d7,a=L7,e=w.cssPrefix,r=w.replacementClass,i=kv;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(n,".".concat(r))}return i}var X0=!1;function e6(){w.autoAddCss&&!X0&&(Lv(S7()),X0=!0)}var Sv={mixout:function(){return{dom:{css:S7,insertCss:e6}}},hooks:function(){return{beforeDOMElementCreation:function(){e6()},beforeI2svg:function(){e6()}}}},j1=r2||{};j1[I1]||(j1[I1]={});j1[I1].styles||(j1[I1].styles={});j1[I1].hooks||(j1[I1].hooks={});j1[I1].shims||(j1[I1].shims=[]);var y1=j1[I1],w7=[],wv=function c(){X.removeEventListener("DOMContentLoaded",c),r4=1,w7.map(function(a){return a()})},r4=!1;Z1&&(r4=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),r4||X.addEventListener("DOMContentLoaded",wv));function yv(c){Z1&&(r4?setTimeout(c,0):w7.push(c))}function V3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?k7(c):"<".concat(a," ").concat(bv(r),">").concat(s.map(V3).join(""),"</").concat(a,">")}function J0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var r6=function(a,e,r,i){var s=Object.keys(a),l=s.length,n=e,f,t,m;for(r===void 0?(f=1,m=a[s[0]]):(f=0,m=r);f<l;f++)t=s[f],m=n(m,a[t],t,a);return m};function Av(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function d6(c){var a=Av(c);return a.length===1?a[0].toString(16):null}function Pv(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Q0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function L6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=Q0(a);typeof y1.hooks.addPack=="function"&&!i?y1.hooks.addPack(c,Q0(a)):y1.styles[c]=k(k({},y1.styles[c]||{}),s),c==="fas"&&L6("fa",a)}var q3,E3,O3,N2=y1.styles,Tv=y1.shims,Fv=(q3={},l1(q3,Y,Object.values(t3[Y])),l1(q3,e1,Object.values(t3[e1])),q3),e8=null,y7={},A7={},P7={},T7={},F7={},_v=(E3={},l1(E3,Y,Object.keys(f3[Y])),l1(E3,e1,Object.keys(f3[e1])),E3);function Bv(c){return~Vv.indexOf(c)}function Rv(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Bv(i)?i:null}var _7=function(){var a=function(s){return r6(N2,function(l,n,f){return l[f]=r6(n,s,{}),l},{})};y7=a(function(i,s,l){if(s[3]&&(i[s[3]]=l),s[2]){var n=s[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){i[f.toString(16)]=l})}return i}),A7=a(function(i,s,l){if(i[l]=l,s[2]){var n=s[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){i[f]=l})}return i}),F7=a(function(i,s,l){var n=s[2];return i[l]=l,n.forEach(function(f){i[f]=l}),i});var e="far"in N2||w.autoFetchSvg,r=r6(Tv,function(i,s){var l=s[0],n=s[1],f=s[2];return n==="far"&&!e&&(n="fas"),typeof l=="string"&&(i.names[l]={prefix:n,iconName:f}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:n,iconName:f}),i},{names:{},unicodes:{}});P7=r.names,T7=r.unicodes,e8=b4(w.styleDefault,{family:w.familyDefault})};dv(function(c){e8=b4(c.styleDefault,{family:w.familyDefault})});_7();function r8(c,a){return(y7[c]||{})[a]}function Dv(c,a){return(A7[c]||{})[a]}function p2(c,a){return(F7[c]||{})[a]}function B7(c){return P7[c]||{prefix:null,iconName:null}}function qv(c){var a=T7[c],e=r8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function i2(){return e8}var i8=function(){return{prefix:null,iconName:null,rest:[]}};function b4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Y:e,i=f3[r][c],s=o3[r][c]||o3[r][i],l=c in y1.styles?c:null;return s||l||null}var c5=(O3={},l1(O3,Y,Object.keys(t3[Y])),l1(O3,e1,Object.keys(t3[e1])),O3);function x4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},l1(a,Y,"".concat(w.cssPrefix,"-").concat(Y)),l1(a,e1,"".concat(w.cssPrefix,"-").concat(e1)),a),l=null,n=Y;(c.includes(s[Y])||c.some(function(t){return c5[Y].includes(t)}))&&(n=Y),(c.includes(s[e1])||c.some(function(t){return c5[e1].includes(t)}))&&(n=e1);var f=c.reduce(function(t,m){var v=Rv(w.cssPrefix,m);if(N2[m]?(m=Fv[n].includes(m)?mv[n][m]:m,l=m,t.prefix=m):_v[n].indexOf(m)>-1?(l=m,t.prefix=b4(m,{family:n})):v?t.iconName=v:m!==w.replacementClass&&m!==s[Y]&&m!==s[e1]&&t.rest.push(m),!i&&t.prefix&&t.iconName){var V=l==="fa"?B7(t.iconName):{},g=p2(t.prefix,t.iconName);V.prefix&&(l=null),t.iconName=V.iconName||g||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!N2.far&&N2.fas&&!w.autoFetchSvg&&(t.prefix="fas")}return t},i8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&n===e1&&(N2.fass||w.autoFetchSvg)&&(f.prefix="fass",f.iconName=p2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||l==="fa")&&(f.prefix=i2()||"fas"),f}var Ev=function(){function c(){Jz(this,c),this.definitions={}}return cv(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var l=i.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(n){e.definitions[n]=k(k({},e.definitions[n]||{}),l[n]),L6(n,l[n]);var f=t3[Y][n];f&&L6(f,l[n]),_7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var l=i[s],n=l.prefix,f=l.iconName,t=l.icon,m=t[2];e[n]||(e[n]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(e[n][v]=t)}),e[n][f]=t}),e}}]),c}(),a5=[],k2={},A2={},Ov=Object.keys(A2);function $v(c,a){var e=a.mixoutsTo;return a5=c,k2={},Object.keys(A2).forEach(function(r){Ov.indexOf(r)===-1&&delete A2[r]}),a5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(l){typeof i[l]=="function"&&(e[l]=i[l]),e4(i[l])==="object"&&Object.keys(i[l]).forEach(function(n){e[l]||(e[l]={}),e[l][n]=i[l][n]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(l){k2[l]||(k2[l]=[]),k2[l].push(s[l])})}r.provides&&r.provides(A2)}),e}function g6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=k2[c]||[];return s.forEach(function(l){a=l.apply(null,[a].concat(r))}),a}function L2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=k2[c]||[];i.forEach(function(s){s.apply(null,e)})}function G1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return A2[c]?A2[c].apply(null,a):void 0}function b6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||i2();if(a)return a=p2(e,a)||a,J0(R7.definitions,e,a)||J0(y1.styles,e,a)}var R7=new Ev,Uv=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,L2("noAuto")},Iv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z1?(L2("beforeI2svg",a),G1("pseudoElements2svg",a),G1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,yv(function(){Gv({autoReplaceSvgRoot:e}),L2("watch",a)})}},jv={icon:function(a){if(a===null)return null;if(e4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:p2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=b4(a[0]);return{prefix:r,iconName:p2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(w.cssPrefix,"-"))>-1||a.match(zv))){var i=x4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||i2(),iconName:p2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=i2();return{prefix:s,iconName:p2(s,a)||a}}}},L1={noAuto:Uv,config:w,dom:Iv,parse:jv,library:R7,findIconDefinition:b6,toHtml:V3},Gv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?X:e;(Object.keys(y1.styles).length>0||w.autoFetchSvg)&&Z1&&w.autoReplaceSvg&&L1.dom.i2svg({node:r})};function N4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return V3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(Z1){var r=X.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Wv(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,l=c.transform;if(a8(l)&&e.found&&!r.found){var n=e.width,f=e.height,t={x:n/f/2,y:.5};i.style=g4(k(k({},s),{},{"transform-origin":"".concat(t.x+l.x/16,"em ").concat(t.y+l.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Zv(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,l=s===!0?"".concat(a,"-").concat(w.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:l}),children:r}]}]}function s8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,l=c.transform,n=c.symbol,f=c.title,t=c.maskId,m=c.titleId,v=c.extra,V=c.watchable,g=V===void 0?!1:V,q=r.found?r:e,T=q.width,j=q.height,b=i==="fak",N=[w.replacementClass,s?"".concat(w.cssPrefix,"-").concat(s):""].filter(function(g1){return v.classes.indexOf(g1)===-1}).filter(function(g1){return g1!==""||!!g1}).concat(v.classes).join(" "),y={children:[],attributes:k(k({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:N,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(j)})},E=b&&!~v.classes.indexOf("fa-fw")?{width:"".concat(T/j*16*.0625,"em")}:{};g&&(y.attributes[d2]=""),f&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(m||z3())},children:[f]}),delete y.attributes.title);var U=k(k({},y),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:l,symbol:n,styles:k(k({},E),v.styles)}),B=r.found&&e.found?G1("generateAbstractMask",U)||{children:[],attributes:{}}:G1("generateAbstractIcon",U)||{children:[],attributes:{}},r1=B.children,h1=B.attributes;return U.children=r1,U.attributes=h1,n?Zv(U):Wv(U)}function e5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,l=c.extra,n=c.watchable,f=n===void 0?!1:n,t=k(k(k({},l.attributes),s?{title:s}:{}),{},{class:l.classes.join(" ")});f&&(t[d2]="");var m=k({},l.styles);a8(i)&&(m.transform=Nv({transform:i,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var v=g4(m);v.length>0&&(t.style=v);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),s&&V.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),V}function Kv(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=g4(r.styles);s.length>0&&(i.style=s);var l=[];return l.push({tag:"span",attributes:i,children:[a]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}var i6=y1.styles;function x6(c){var a=c[0],e=c[1],r=c.slice(4),i=K6(r,1),s=i[0],l=null;return Array.isArray(s)?l={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(V2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(V2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(V2.PRIMARY),fill:"currentColor",d:s[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:l}}var Yv={found:!1,width:512,height:512};function Xv(c,a){!g7&&!w.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function N6(c,a){var e=a;return a==="fa"&&w.styleDefault!==null&&(a=i2()),new Promise(function(r,i){if(G1("missingIconAbstract"),e==="fa"){var s=B7(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&i6[a]&&i6[a][c]){var l=i6[a][c];return r(x6(l))}Xv(c,a),r(k(k({},Yv),{},{icon:w.showMissingIcons&&c?G1("missingIconAbstract")||{}:{}}))})}var r5=function(){},k6=w.measurePerformance&&T3&&T3.mark&&T3.measure?T3:{mark:r5,measure:r5},W2='FA "6.5.2"',Jv=function(a){return k6.mark("".concat(W2," ").concat(a," begins")),function(){return D7(a)}},D7=function(a){k6.mark("".concat(W2," ").concat(a," ends")),k6.measure("".concat(W2," ").concat(a),"".concat(W2," ").concat(a," begins"),"".concat(W2," ").concat(a," ends"))},l8={begin:Jv,end:D7},Z3=function(){};function i5(c){var a=c.getAttribute?c.getAttribute(d2):null;return typeof a=="string"}function Qv(c){var a=c.getAttribute?c.getAttribute(X6):null,e=c.getAttribute?c.getAttribute(J6):null;return a&&e}function ch(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(w.replacementClass)}function ah(){if(w.autoReplaceSvg===!0)return K3.replace;var c=K3[w.autoReplaceSvg];return c||K3.replace}function eh(c){return X.createElementNS("http://www.w3.org/2000/svg",c)}function rh(c){return X.createElement(c)}function q7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?eh:rh:e;if(typeof c=="string")return X.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(l){i.setAttribute(l,c.attributes[l])});var s=c.children||[];return s.forEach(function(l){i.appendChild(q7(l,{ceFn:r}))}),i}function ih(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var K3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(q7(i),e)}),e.getAttribute(d2)===null&&w.keepOriginalSource){var r=X.createComment(ih(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~c8(e).indexOf(w.replacementClass))return K3.replace(a);var i=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(n,f){return f===w.replacementClass||f.match(i)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var l=r.map(function(n){return V3(n)}).join(`
`);e.setAttribute(d2,""),e.innerHTML=l}};function s5(c){c()}function E7(c,a){var e=typeof a=="function"?a:Z3;if(c.length===0)e();else{var r=s5;w.mutateApproach===ov&&(r=r2.requestAnimationFrame||s5),r(function(){var i=ah(),s=l8.begin("mutate");c.map(i),s(),e()})}}var n8=!1;function O7(){n8=!0}function S6(){n8=!1}var i4=null;function l5(c){if(K0&&w.observeMutations){var a=c.treeCallback,e=a===void 0?Z3:a,r=c.nodeCallback,i=r===void 0?Z3:r,s=c.pseudoElementsCallback,l=s===void 0?Z3:s,n=c.observeMutationsRoot,f=n===void 0?X:n;i4=new K0(function(t){if(!n8){var m=i2();R2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!i5(v.addedNodes[0])&&(w.searchPseudoElements&&l(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&w.searchPseudoElements&&l(v.target.parentNode),v.type==="attributes"&&i5(v.target)&&~uv.indexOf(v.attributeName))if(v.attributeName==="class"&&Qv(v.target)){var V=x4(c8(v.target)),g=V.prefix,q=V.iconName;v.target.setAttribute(X6,g||m),q&&v.target.setAttribute(J6,q)}else ch(v.target)&&i(v.target)})}}),Z1&&i4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sh(){i4&&i4.disconnect()}function lh(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),l=s[0],n=s.slice(1);return l&&n.length>0&&(r[l]=n.join(":").trim()),r},{})),e}function nh(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=x4(c8(c));return i.prefix||(i.prefix=i2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Dv(i.prefix,c.innerText)||r8(i.prefix,d6(c.innerText))),!i.iconName&&w.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function fh(c){var a=R2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return w.autoA11y&&(e?a["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||z3()):(a["aria-hidden"]="true",a.focusable="false")),a}function oh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=nh(c),r=e.iconName,i=e.prefix,s=e.rest,l=fh(c),n=g6("parseNodeAttributes",{},c),f=a.styleParser?lh(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:R1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:l}},n)}var th=y1.styles;function $7(c){var a=w.autoReplaceSvg==="nest"?n5(c,{styleParser:!1}):n5(c);return~a.extra.classes.indexOf(b7)?G1("generateLayersText",c,a):G1("generateSvgReplacementMutation",c,a)}var s2=new Set;Q6.map(function(c){s2.add("fa-".concat(c))});Object.keys(f3[Y]).map(s2.add.bind(s2));Object.keys(f3[e1]).map(s2.add.bind(s2));s2=H3(s2);function f5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z1)return Promise.resolve();var e=X.documentElement.classList,r=function(v){return e.add("".concat(Y0,"-").concat(v))},i=function(v){return e.remove("".concat(Y0,"-").concat(v))},s=w.autoFetchSvg?s2:Q6.map(function(m){return"fa-".concat(m)}).concat(Object.keys(th));s.includes("fa")||s.push("fa");var l=[".".concat(b7,":not([").concat(d2,"])")].concat(s.map(function(m){return".".concat(m,":not([").concat(d2,"])")})).join(", ");if(l.length===0)return Promise.resolve();var n=[];try{n=R2(c.querySelectorAll(l))}catch{}if(n.length>0)r("pending"),i("complete");else return Promise.resolve();var f=l8.begin("onTree"),t=n.reduce(function(m,v){try{var V=$7(v);V&&m.push(V)}catch(g){g7||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,v){Promise.all(t).then(function(V){E7(V,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),m()})}).catch(function(V){f(),v(V)})})}function mh(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$7(c).then(function(e){e&&E7([e],a)})}function zh(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:b6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:b6(i||{})),c(r,k(k({},e),{},{mask:i}))}}var vh=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?R1:r,s=e.symbol,l=s===void 0?!1:s,n=e.mask,f=n===void 0?null:n,t=e.maskId,m=t===void 0?null:t,v=e.title,V=v===void 0?null:v,g=e.titleId,q=g===void 0?null:g,T=e.classes,j=T===void 0?[]:T,b=e.attributes,N=b===void 0?{}:b,y=e.styles,E=y===void 0?{}:y;if(a){var U=a.prefix,B=a.iconName,r1=a.icon;return N4(k({type:"icon"},a),function(){return L2("beforeDOMElementCreation",{iconDefinition:a,params:e}),w.autoA11y&&(V?N["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(q||z3()):(N["aria-hidden"]="true",N.focusable="false")),s8({icons:{main:x6(r1),mask:f?x6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:B,transform:k(k({},R1),i),symbol:l,title:V,maskId:m,titleId:q,extra:{attributes:N,styles:E,classes:j}})})}},hh={mixout:function(){return{icon:zh(vh)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=f5,e.nodeCallback=mh,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?X:r,s=e.callback,l=s===void 0?function(){}:s;return f5(i,l)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,l=r.titleId,n=r.prefix,f=r.transform,t=r.symbol,m=r.mask,v=r.maskId,V=r.extra;return new Promise(function(g,q){Promise.all([N6(i,n),m.iconName?N6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var j=K6(T,2),b=j[0],N=j[1];g([e,s8({icons:{main:b,mask:N},prefix:n,iconName:i,transform:f,symbol:t,maskId:v,title:s,titleId:l,extra:V,watchable:!0})])}).catch(q)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,l=e.transform,n=e.styles,f=g4(n);f.length>0&&(i.style=f);var t;return a8(l)&&(t=G1("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},Hh={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return N4({type:"layer"},function(){L2("beforeDOMElementCreation",{assembler:e,params:r});var l=[];return e(function(n){Array.isArray(n)?n.map(function(f){l=l.concat(f.abstract)}):l=l.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(H3(s)).join(" ")},children:l}]})}}}},uh={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,l=r.classes,n=l===void 0?[]:l,f=r.attributes,t=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return N4({type:"counter",content:e},function(){return L2("beforeDOMElementCreation",{content:e,params:r}),Kv({content:e.toString(),title:s,extra:{attributes:t,styles:v,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(H3(n))}})})}}}},Vh={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?R1:i,l=r.title,n=l===void 0?null:l,f=r.classes,t=f===void 0?[]:f,m=r.attributes,v=m===void 0?{}:m,V=r.styles,g=V===void 0?{}:V;return N4({type:"text",content:e},function(){return L2("beforeDOMElementCreation",{content:e,params:r}),e5({content:e,transform:k(k({},R1),s),title:n,extra:{attributes:v,styles:g,classes:["".concat(w.cssPrefix,"-layers-text")].concat(H3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,l=r.extra,n=null,f=null;if(C7){var t=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();n=m.width/t,f=m.height/t}return w.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,e5({content:e.innerHTML,width:n,height:f,transform:s,title:i,extra:l,watchable:!0})])}}},ph=new RegExp('"',"ug"),o5=[1105920,1112319];function Mh(c){var a=c.replace(ph,""),e=Pv(a,0),r=e>=o5[0]&&e<=o5[1],i=a.length===2?a[0]===a[1]:!1;return{value:d6(i?a[0]:a),isSecondary:r||i}}function t5(c,a){var e="".concat(fv).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=R2(c.children),l=s.filter(function(r1){return r1.getAttribute(C6)===a})[0],n=r2.getComputedStyle(c,a),f=n.getPropertyValue("font-family").match(vv),t=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(l&&!f)return c.removeChild(l),r();if(f&&m!=="none"&&m!==""){var v=n.getPropertyValue("content"),V=~["Sharp"].indexOf(f[2])?e1:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?o3[V][f[2].toLowerCase()]:hv[V][t],q=Mh(v),T=q.value,j=q.isSecondary,b=f[0].startsWith("FontAwesome"),N=r8(g,T),y=N;if(b){var E=qv(T);E.iconName&&E.prefix&&(N=E.iconName,g=E.prefix)}if(N&&!j&&(!l||l.getAttribute(X6)!==g||l.getAttribute(J6)!==y)){c.setAttribute(e,y),l&&c.removeChild(l);var U=oh(),B=U.extra;B.attributes[C6]=a,N6(N,g).then(function(r1){var h1=s8(k(k({},U),{},{icons:{main:r1,mask:i8()},prefix:g,iconName:y,extra:B,watchable:!0})),g1=X.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(g1,c.firstChild):c.appendChild(g1),g1.outerHTML=h1.map(function(q1){return V3(q1)}).join(`