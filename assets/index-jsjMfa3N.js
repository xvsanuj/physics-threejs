(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="166",Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ul=0,fa=1,dl=2,Mo=1,So=2,vn=3,In=0,He=1,gn=2,Pn=0,yi=1,pa=2,ma=3,va=4,fl=5,Wn=100,pl=101,ml=102,vl=103,gl=104,_l=200,xl=201,yl=202,Ml=203,ps=204,ms=205,Sl=206,El=207,wl=208,Al=209,bl=210,Tl=211,Cl=212,Rl=213,Pl=214,Ll=0,Il=1,Dl=2,Cr=3,Nl=4,Ul=5,Fl=6,Bl=7,Eo=0,Ol=1,zl=2,Ln=0,Vl=1,Hl=2,kl=3,Gl=4,Wl=5,Xl=6,ql=7,wo=300,wi=301,Ai=302,vs=303,gs=304,Dr=306,_s=1e3,qn=1001,xs=1002,Ye=1003,Yl=1004,Zi=1005,tn=1006,Or=1007,Yn=1008,yn=1009,Ao=1010,bo=1011,Hi=1012,Ks=1013,$n=1014,_n=1015,qi=1016,js=1017,Zs=1018,bi=1020,To=35902,Co=1021,Ro=1022,en=1023,Po=1024,Lo=1025,Mi=1026,Ti=1027,Io=1028,Js=1029,Do=1030,Qs=1031,ta=1033,Sr=33776,Er=33777,wr=33778,Ar=33779,ys=35840,Ms=35841,Ss=35842,Es=35843,ws=36196,As=37492,bs=37496,Ts=37808,Cs=37809,Rs=37810,Ps=37811,Ls=37812,Is=37813,Ds=37814,Ns=37815,Us=37816,Fs=37817,Bs=37818,Os=37819,zs=37820,Vs=37821,br=36492,Hs=36494,ks=36495,No=36283,Gs=36284,Ws=36285,Xs=36286,$l=3200,Kl=3201,Uo=0,jl=1,Rn="",Qe="srgb",Nn="srgb-linear",ea="display-p3",Nr="display-p3-linear",Rr="linear",Me="srgb",Pr="rec709",Lr="p3",ei=7680,ga=519,Zl=512,Jl=513,Ql=514,Fo=515,tc=516,ec=517,nc=518,ic=519,_a=35044,xa="300 es",xn=2e3,Ir=2001;class Jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ya=1234567;const zi=Math.PI/180,ki=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function na(i,t){return(i%t+t)%t}function rc(i,t,e,n,a){return n+(i-t)*(a-n)/(e-t)}function sc(i,t,e){return i!==t?(e-i)/(t-i):0}function Vi(i,t,e){return(1-e)*i+e*t}function ac(i,t,e,n){return Vi(i,t,1-Math.exp(-e*n))}function oc(i,t=1){return t-Math.abs(na(i,t*2)-t)}function lc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uc(i,t){return i+Math.random()*(t-i)}function dc(i){return i*(.5-Math.random())}function fc(i){i!==void 0&&(ya=i);let t=ya+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pc(i){return i*zi}function mc(i){return i*ki}function vc(i){return(i&i-1)===0&&i!==0}function gc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _c(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xc(i,t,e,n,a){const r=Math.cos,s=Math.sin,o=r(e/2),c=s(e/2),d=r((t+n)/2),h=s((t+n)/2),l=r((t-n)/2),u=s((t-n)/2),p=r((n-t)/2),v=s((n-t)/2);switch(a){case"XYX":i.set(o*h,c*l,c*u,o*d);break;case"YZY":i.set(c*u,o*h,c*l,o*d);break;case"ZXZ":i.set(c*l,c*u,o*h,o*d);break;case"XZX":i.set(o*h,c*v,c*p,o*d);break;case"YXY":i.set(c*p,o*h,c*v,o*d);break;case"ZYZ":i.set(c*v,c*p,o*h,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yc={DEG2RAD:zi,RAD2DEG:ki,generateUUID:Pi,clamp:Ue,euclideanModulo:na,mapLinear:rc,inverseLerp:sc,lerp:Vi,damp:ac,pingpong:oc,smoothstep:lc,smootherstep:cc,randInt:hc,randFloat:uc,randFloatSpread:dc,seededRandom:fc,degToRad:pc,radToDeg:mc,isPowerOfTwo:vc,ceilPowerOfTwo:gc,floorPowerOfTwo:_c,setQuaternionFromProperEuler:xc,normalize:Be,denormalize:_i};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,a,r,s,o,c,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d)}set(t,e,n,a,r,s,o,c,d){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],d=n[1],h=n[4],l=n[7],u=n[2],p=n[5],v=n[8],g=a[0],m=a[3],f=a[6],_=a[1],x=a[4],y=a[7],R=a[2],L=a[5],I=a[8];return r[0]=s*g+o*_+c*R,r[3]=s*m+o*x+c*L,r[6]=s*f+o*y+c*I,r[1]=d*g+h*_+l*R,r[4]=d*m+h*x+l*L,r[7]=d*f+h*y+l*I,r[2]=u*g+p*_+v*R,r[5]=u*m+p*x+v*L,r[8]=u*f+p*y+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8];return e*s*h-e*o*d-n*r*h+n*o*c+a*r*d-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=h*s-o*d,u=o*c-h*r,p=d*r-s*c,v=e*l+n*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*d-h*n)*g,t[2]=(o*n-a*s)*g,t[3]=u*g,t[4]=(h*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*c-d*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*s+d*o)+s+t,-a*d,a*c,-a*(-d*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new ce;function Bo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mc(){const i=Gi("canvas");return i.style.display="block",i}const Ma={};function Oo(i){i in Ma||(Ma[i]=!0,console.warn(i))}function Sc(i,t,e){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Sa=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ea=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[Nn]:{transfer:Rr,primaries:Pr,toReference:i=>i,fromReference:i=>i},[Qe]:{transfer:Me,primaries:Pr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Nr]:{transfer:Rr,primaries:Lr,toReference:i=>i.applyMatrix3(Ea),fromReference:i=>i.applyMatrix3(Sa)},[ea]:{transfer:Me,primaries:Lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ea),fromReference:i=>i.applyMatrix3(Sa).convertLinearToSRGB()}},Ec=new Set([Nn,Nr]),ve={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ec.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ji[t].toReference,a=Ji[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ji[i].primaries},getTransfer:function(i){return i===Rn?Rr:Ji[i].transfer}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Gi("canvas")),ni.width=t.width,ni.height=t.height;const n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Si(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Hr(a[s].image)):r.push(Hr(a[s]))}else r=Hr(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bc=0;class ze extends Jn{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=qn,a=qn,r=tn,s=Yn,o=en,c=yn,d=ze.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Pi(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case xs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case xs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=wo;ze.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,a=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,d=c[0],h=c[4],l=c[8],u=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(d+1)/2,y=(p+1)/2,R=(f+1)/2,L=(h+u)/4,I=(l+g)/4,N=(v+m)/4;return x>y&&x>R?x<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(x),a=L/n,r=I/n):y>R?y<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),n=L/a,r=N/a):R<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),n=I/r,a=N/r),this.set(n,a,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(u-h)/_,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tc extends Jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const a={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vo extends ze{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends ze{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],d=n[a+1],h=n[a+2],l=n[a+3];const u=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==u||d!==p||h!==v){let m=1-o;const f=c*u+d*p+h*v+l*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),L=Math.atan2(R,f*_);m=Math.sin(m*L)/R,o=Math.sin(o*L)/R}const y=o*_;if(c=c*m+u*y,d=d*m+p*y,h=h*m+v*y,l=l*m+g*y,m===1-o){const R=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=R,d*=R,h*=R,l*=R}}t[e]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],d=n[a+2],h=n[a+3],l=r[s],u=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+h*l+c*p-d*u,t[e+1]=c*v+h*u+d*l-o*p,t[e+2]=d*v+h*p+o*u-c*l,t[e+3]=h*v-o*l-c*u-d*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,d=o(n/2),h=o(a/2),l=o(r/2),u=c(n/2),p=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"YXZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"ZXY":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"ZYX":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"YZX":this._x=u*h*l+d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l-u*p*v;break;case"XZY":this._x=u*h*l-d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],d=e[2],h=e[6],l=e[10],u=n+o+l;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-d)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+d)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-d)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+d)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,d=e._z,h=e._w;return this._x=n*h+s*o+a*d-r*c,this._y=a*h+s*c+r*o-n*d,this._z=r*h+s*d+n*c-a*o,this._w=s*h-n*o-a*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,o),l=Math.sin((1-e)*h)/d,u=Math.sin(e*h)/d;return this._w=s*l+this._w*u,this._x=n*l+this._x*u,this._y=a*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,e=0,n=0){at.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,d=2*(s*a-o*n),h=2*(o*e-r*a),l=2*(r*n-s*e);return this.x=e+c*d+s*l-o*h,this.y=n+c*h+o*d-r*l,this.z=a+c*l+r*h-s*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new at,wa=new jn;class Yi{constructor(t=new at(1/0,1/0,1/0),e=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,je):je.fromBufferAttribute(r,s),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),tr.subVectors(this.max,Ni),ii.subVectors(t.a,Ni),ri.subVectors(t.b,Ni),si.subVectors(t.c,Ni),Sn.subVectors(ri,ii),En.subVectors(si,ri),Bn.subVectors(ii,si);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!Gr(e,ii,ri,si,tr)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,ii,ri,si,tr))?!1:(er.crossVectors(Sn,En),e=[er.x,er.y,er.z],Gr(e,ii,ri,si,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new at,new at,new at,new at,new at,new at,new at,new at],je=new at,Qi=new Yi,ii=new at,ri=new at,si=new at,Sn=new at,En=new at,Bn=new at,Ni=new at,tr=new at,er=new at,On=new at;function Gr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){On.fromArray(i,r);const o=a.x*Math.abs(On.x)+a.y*Math.abs(On.y)+a.z*Math.abs(On.z),c=t.dot(On),d=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>o)return!1}return!0}const Rc=new Yi,Ui=new at,Wr=new at;class ia{constructor(t=new at,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rc.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(Ui,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(Wr)),this.expandByPoint(Ui.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new at,Xr=new at,nr=new at,wn=new at,qr=new at,ir=new at,Yr=new at;class Ho{constructor(t=new at,e=new at(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Xr.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(nr),o=wn.dot(this.direction),c=-wn.dot(nr),d=wn.lengthSq(),h=Math.abs(1-s*s);let l,u,p,v;if(h>0)if(l=s*c-o,u=s*o-c,v=r*h,l>=0)if(u>=-v)if(u<=v){const g=1/h;l*=g,u*=g,p=l*(l+s*u+2*o)+u*(s*l+u+2*c)+d}else u=r,l=Math.max(0,-(s*u+o)),p=-l*l+u*(u+2*c)+d;else u=-r,l=Math.max(0,-(s*u+o)),p=-l*l+u*(u+2*c)+d;else u<=-v?(l=Math.max(0,-(-s*r+o)),u=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d):u<=v?(l=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+d):(l=Math.max(0,-(s*r+o)),u=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d);else u=s>0?-r:r,l=Math.max(0,-(s*u+o)),p=-l*l+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Xr).addScaledVector(nr,u),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),a=dn.dot(dn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,a=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,a=(t.min.x-u.x)*d),h>=0?(r=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-u.z)*l,c=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,c=(t.min.z-u.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,a,r){qr.subVectors(e,t),ir.subVectors(n,t),Yr.crossVectors(qr,ir);let s=this.direction.dot(Yr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,t);const c=o*this.direction.dot(ir.crossVectors(wn,ir));if(c<0)return null;const d=o*this.direction.dot(qr.cross(wn));if(d<0||c+d>s)return null;const h=-o*wn.dot(Yr);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,a,r,s,o,c,d,h,l,u,p,v,g,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d,h,l,u,p,v,g,m)}set(t,e,n,a,r,s,o,c,d,h,l,u,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=c,f[2]=d,f[6]=h,f[10]=l,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),s=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),d=Math.sin(a),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const u=s*h,p=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=d,e[1]=p+v*d,e[5]=u-g*d,e[9]=-o*c,e[2]=g-u*d,e[6]=v+p*d,e[10]=s*c}else if(t.order==="YXZ"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u+g*o,e[4]=v*o-p,e[8]=s*d,e[1]=s*l,e[5]=s*h,e[9]=-o,e[2]=p*o-v,e[6]=g+u*o,e[10]=s*c}else if(t.order==="ZXY"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*h,e[9]=g-u*o,e[2]=-s*d,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const u=s*h,p=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*d-p,e[8]=u*d+g,e[1]=c*l,e[5]=g*d+u,e[9]=p*d-v,e[2]=-d,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const u=s*c,p=s*d,v=o*c,g=o*d;e[0]=c*h,e[4]=g-u*l,e[8]=v*l+p,e[1]=l,e[5]=s*h,e[9]=-o*h,e[2]=-d*h,e[6]=p*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=s*c,p=s*d,v=o*c,g=o*d;e[0]=c*h,e[4]=-l,e[8]=d*h,e[1]=u*l+g,e[5]=s*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pc,t,Lc)}lookAt(t,e,n){const a=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),An.crossVectors(n,Ge),An.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),An.crossVectors(n,Ge)),An.normalize(),rr.crossVectors(Ge,An),a[0]=An.x,a[4]=rr.x,a[8]=Ge.x,a[1]=An.y,a[5]=rr.y,a[9]=Ge.y,a[2]=An.z,a[6]=rr.z,a[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],d=n[12],h=n[1],l=n[5],u=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],_=n[3],x=n[7],y=n[11],R=n[15],L=a[0],I=a[4],N=a[8],w=a[12],M=a[1],b=a[5],O=a[9],F=a[13],Y=a[2],X=a[6],K=a[10],V=a[14],D=a[3],et=a[7],Z=a[11],B=a[15];return r[0]=s*L+o*M+c*Y+d*D,r[4]=s*I+o*b+c*X+d*et,r[8]=s*N+o*O+c*K+d*Z,r[12]=s*w+o*F+c*V+d*B,r[1]=h*L+l*M+u*Y+p*D,r[5]=h*I+l*b+u*X+p*et,r[9]=h*N+l*O+u*K+p*Z,r[13]=h*w+l*F+u*V+p*B,r[2]=v*L+g*M+m*Y+f*D,r[6]=v*I+g*b+m*X+f*et,r[10]=v*N+g*O+m*K+f*Z,r[14]=v*w+g*F+m*V+f*B,r[3]=_*L+x*M+y*Y+R*D,r[7]=_*I+x*b+y*X+R*et,r[11]=_*N+x*O+y*K+R*Z,r[15]=_*w+x*F+y*V+R*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],d=t[13],h=t[2],l=t[6],u=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-a*d*l-r*o*u+n*d*u+a*o*p-n*c*p)+g*(+e*c*p-e*d*u+r*s*u-a*s*p+a*d*h-r*c*h)+m*(+e*d*l-e*o*p-r*s*l+n*s*p+r*o*h-n*d*h)+f*(-a*o*h-e*c*l+e*o*u+a*s*l-n*s*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=t[9],u=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],_=l*m*d-g*u*d+g*c*p-o*m*p-l*c*f+o*u*f,x=v*u*d-h*m*d-v*c*p+s*m*p+h*c*f-s*u*f,y=h*g*d-v*l*d+v*o*p-s*g*p-h*o*f+s*l*f,R=v*l*c-h*g*c-v*o*u+s*g*u+h*o*m-s*l*m,L=e*_+n*x+a*y+r*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=_*I,t[1]=(g*u*r-l*m*r-g*a*p+n*m*p+l*a*f-n*u*f)*I,t[2]=(o*m*r-g*c*r+g*a*d-n*m*d-o*a*f+n*c*f)*I,t[3]=(l*c*r-o*u*r-l*a*d+n*u*d+o*a*p-n*c*p)*I,t[4]=x*I,t[5]=(h*m*r-v*u*r+v*a*p-e*m*p-h*a*f+e*u*f)*I,t[6]=(v*c*r-s*m*r-v*a*d+e*m*d+s*a*f-e*c*f)*I,t[7]=(s*u*r-h*c*r+h*a*d-e*u*d-s*a*p+e*c*p)*I,t[8]=y*I,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*f-e*l*f)*I,t[10]=(s*g*r-v*o*r+v*n*d-e*g*d-s*n*f+e*o*f)*I,t[11]=(h*o*r-s*l*r-h*n*d+e*l*d+s*n*p-e*o*p)*I,t[12]=R*I,t[13]=(h*g*a-v*l*a+v*n*u-e*g*u-h*n*m+e*l*m)*I,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*I,t[15]=(s*l*a-h*o*a+h*n*c-e*l*c-s*n*u+e*o*u)*I,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,d=r*s,h=r*o;return this.set(d*s+n,d*o-a*c,d*c+a*o,0,d*o+a*c,h*o+n,h*c-a*s,0,d*c-a*o,h*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,d=r+r,h=s+s,l=o+o,u=r*d,p=r*h,v=r*l,g=s*h,m=s*l,f=o*l,_=c*d,x=c*h,y=c*l,R=n.x,L=n.y,I=n.z;return a[0]=(1-(g+f))*R,a[1]=(p+y)*R,a[2]=(v-x)*R,a[3]=0,a[4]=(p-y)*L,a[5]=(1-(u+f))*L,a[6]=(m+_)*L,a[7]=0,a[8]=(v+x)*I,a[9]=(m-_)*I,a[10]=(1-(u+g))*I,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=ai.set(a[0],a[1],a[2]).length();const s=ai.set(a[4],a[5],a[6]).length(),o=ai.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Ze.copy(this);const d=1/r,h=1/s,l=1/o;return Ze.elements[0]*=d,Ze.elements[1]*=d,Ze.elements[2]*=d,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=l,Ze.elements[9]*=l,Ze.elements[10]*=l,e.setFromRotationMatrix(Ze),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=xn){const c=this.elements,d=2*r/(e-t),h=2*r/(n-a),l=(e+t)/(e-t),u=(n+a)/(n-a);let p,v;if(o===xn)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Ir)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=xn){const c=this.elements,d=1/(e-t),h=1/(n-a),l=1/(s-r),u=(e+t)*d,p=(n+a)*h;let v,g;if(o===xn)v=(s+r)*l,g=-2*l;else if(o===Ir)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new at,Ze=new be,Pc=new at(0,0,0),Lc=new at(1,1,1),An=new at,rr=new at,Ge=new at,Aa=new be,ba=new jn;class cn{constructor(t=0,e=0,n=0,a=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],d=a[5],h=a[9],l=a[2],u=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ba.setFromEuler(this),this.setFromQuaternion(ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ic=0;const Ta=new at,oi=new jn,fn=new be,sr=new at,Fi=new at,Dc=new at,Nc=new jn,Ca=new at(1,0,0),Ra=new at(0,1,0),Pa=new at(0,0,1),La={type:"added"},Uc={type:"removed"},li={type:"childadded",child:null},$r={type:"childremoved",child:null};class Fe extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new at,e=new cn,n=new jn,a=new at(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new be},normalMatrix:{value:new ce}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(Ra,t)}rotateZ(t){return this.rotateOnAxis(Pa,t)}translateOnAxis(t,e){return Ta.copy(t).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(Ra,t)}translateZ(t){return this.translateOnAxis(Pa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Fi,sr,this.up):fn.lookAt(sr,Fi,this.up),this.quaternion.setFromRotationMatrix(fn),a&&(fn.extractRotation(a.matrixWorld),oi.setFromRotationMatrix(fn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(La),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uc),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(La),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Dc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),d=s(t.textures),h=s(t.images),l=s(t.shapes),u=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Fe.DEFAULT_UP=new at(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new at,pn=new at,Kr=new at,mn=new at,ci=new at,hi=new at,Ia=new at,jr=new at,Zr=new at,Jr=new at;class sn{constructor(t=new at,e=new at,n=new at){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Je.subVectors(t,e),a.cross(Je);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){Je.subVectors(a,e),pn.subVectors(n,e),Kr.subVectors(t,e);const s=Je.dot(Je),o=Je.dot(pn),c=Je.dot(Kr),d=pn.dot(pn),h=pn.dot(Kr),l=s*d-o*o;if(l===0)return r.set(0,0,0),null;const u=1/l,p=(d*c-o*h)*u,v=(s*h-o*c)*u;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(s,mn.y),c.addScaledVector(o,mn.z),c)}static isFrontFacing(t,e,n,a){return Je.subVectors(n,e),pn.subVectors(t,e),Je.cross(pn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;ci.subVectors(a,n),hi.subVectors(r,n),jr.subVectors(t,n);const c=ci.dot(jr),d=hi.dot(jr);if(c<=0&&d<=0)return e.copy(n);Zr.subVectors(t,a);const h=ci.dot(Zr),l=hi.dot(Zr);if(h>=0&&l<=h)return e.copy(a);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return s=c/(c-h),e.copy(n).addScaledVector(ci,s);Jr.subVectors(t,r);const p=ci.dot(Jr),v=hi.dot(Jr);if(v>=0&&p<=v)return e.copy(r);const g=p*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(hi,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return Ia.subVectors(r,a),o=(l-h)/(l-h+(p-v)),e.copy(a).addScaledVector(Ia,o);const f=1/(m+g+u);return s=g*f,o=u*f,e.copy(n).addScaledVector(ci,s).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class pe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=ve.workingColorSpace){if(t=na(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Qr(s,r,t+1/3),this.g=Qr(s,r,t),this.b=Qr(s,r,t-1/3)}return ve.toWorkingColorSpace(this,a),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Go[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ve.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ue(Ne.r*255,0,255))*65536+Math.round(Ue(Ne.g*255,0,255))*256+Math.round(Ue(Ne.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,a=Ne.g,r=Ne.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,d;const h=(o+s)/2;if(o===s)c=0,d=0;else{const l=s-o;switch(d=h<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Qe){ve.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,a=Ne.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(ar);const n=Vi(bn.h,ar.h,e),a=Vi(bn.s,ar.s,e),r=Vi(bn.l,ar.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new pe;pe.NAMES=Go;let Fc=0;class $i extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=yi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ps,this.blendDst=ms,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ps&&(n.blendSrc=this.blendSrc),this.blendDst!==ms&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Wo extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new at,or=new re;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Oo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),a=Be(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),a=Be(a,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_a&&(t.usage=this.usage),t}}class Xo extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qo extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class on extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bc=0;const Xe=new be,ts=new Fe,ui=new at,We=new Yi,Bi=new Yi,Ie=new at;class Un extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bo(t)?qo:Xo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ts.lookAt(t),ts.updateMatrix(),this.applyMatrix4(ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new on(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(We.min,Bi.min),We.expandByPoint(Ie),Ie.addVectors(We.max,Bi.max),We.expandByPoint(Ie)):(We.expandByPoint(Bi.min),We.expandByPoint(Bi.max))}We.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Ie.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Ie));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Ie.fromBufferAttribute(o,d),c&&(ui.fromBufferAttribute(t,d),Ie.add(ui)),a=Math.max(a,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,a=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new at,c[N]=new at;const d=new at,h=new at,l=new at,u=new re,p=new re,v=new re,g=new at,m=new at;function f(N,w,M){d.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),l.fromBufferAttribute(n,M),u.fromBufferAttribute(r,N),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,M),h.sub(d),l.sub(d),p.sub(u),v.sub(u);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-p.y).multiplyScalar(b),m.copy(l).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),o[N].add(g),o[w].add(g),o[M].add(g),c[N].add(m),c[w].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let N=0,w=_.length;N<w;++N){const M=_[N],b=M.start,O=M.count;for(let F=b,Y=b+O;F<Y;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new at,y=new at,R=new at,L=new at;function I(N){R.fromBufferAttribute(a,N),L.copy(R);const w=o[N];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(L,w);const b=y.dot(c[N])<0?-1:1;s.setXYZW(N,x.x,x.y,x.z,b)}for(let N=0,w=_.length;N<w;++N){const M=_[N],b=M.start,O=M.count;for(let F=b,Y=b+O;F<Y;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const a=new at,r=new at,s=new at,o=new at,c=new at,d=new at,h=new at,l=new at;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(h),c.add(h),d.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,p=e.count;u<p;u+=3)a.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const d=o.array,h=o.itemSize,l=o.normalized,u=new d.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)u[v++]=d[p++]}return new an(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Un,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let h=0,l=d.length;h<l;h++){const u=d[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const d=s[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const p=d[l];h.push(p.toJSON(t.data))}h.length>0&&(a[c]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const d in a){const h=a[d];this.setAttribute(d,h.clone(e))}const r=t.morphAttributes;for(const d in r){const h=[],l=r[d];for(let u=0,p=l.length;u<p;u++)h.push(l[u].clone(e));this.morphAttributes[d]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let d=0,h=s.length;d<h;d++){const l=s[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new be,zn=new Ho,lr=new ia,Na=new at,di=new at,fi=new at,pi=new at,es=new at,cr=new at,hr=new re,ur=new re,dr=new re,Ua=new at,Fa=new at,Ba=new at,fr=new at,pr=new at;class $e extends Fe{constructor(t=new Un,e=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=o[c],l=r[c];h!==0&&(es.fromBufferAttribute(l,t),s?cr.addScaledVector(es,h):cr.addScaledVector(es.sub(e),h))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),zn.copy(t.ray).recast(t.near),!(lr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(lr,Na)===null||zn.origin.distanceToSquared(Na)>(t.far-t.near)**2))&&(Da.copy(r).invert(),zn.copy(t.ray).applyMatrix4(Da),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const L=o.getX(y),I=o.getX(y+1),N=o.getX(y+2);a=mr(this,f,t,n,d,h,l,L,I,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);a=mr(this,s,t,n,d,h,l,_,x,y),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const L=y,I=y+1,N=y+2;a=mr(this,f,t,n,d,h,l,L,I,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;a=mr(this,s,t,n,d,h,l,_,x,y),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Oc(i,t,e,n,a,r,s,o){let c;if(t.side===He?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===In,o),c===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(pr);return d<e.near||d>e.far?null:{distance:d,point:pr.clone(),object:i}}function mr(i,t,e,n,a,r,s,o,c,d){i.getVertexPosition(o,di),i.getVertexPosition(c,fi),i.getVertexPosition(d,pi);const h=Oc(i,t,e,n,di,fi,pi,fr);if(h){a&&(hr.fromBufferAttribute(a,o),ur.fromBufferAttribute(a,c),dr.fromBufferAttribute(a,d),h.uv=sn.getInterpolation(fr,di,fi,pi,hr,ur,dr,new re)),r&&(hr.fromBufferAttribute(r,o),ur.fromBufferAttribute(r,c),dr.fromBufferAttribute(r,d),h.uv1=sn.getInterpolation(fr,di,fi,pi,hr,ur,dr,new re)),s&&(Ua.fromBufferAttribute(s,o),Fa.fromBufferAttribute(s,c),Ba.fromBufferAttribute(s,d),h.normal=sn.getInterpolation(fr,di,fi,pi,Ua,Fa,Ba,new at),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:d,normal:new at,materialIndex:0};sn.getNormal(di,fi,pi,l.normal),h.face=l}return h}class Li extends Un{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],d=[],h=[],l=[];let u=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(l,2));function v(g,m,f,_,x,y,R,L,I,N,w){const M=y/I,b=R/N,O=y/2,F=R/2,Y=L/2,X=I+1,K=N+1;let V=0,D=0;const et=new at;for(let Z=0;Z<K;Z++){const B=Z*b-F;for(let J=0;J<X;J++){const k=J*M-O;et[g]=k*_,et[m]=B*x,et[f]=Y,d.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[f]=L>0?1:-1,h.push(et.x,et.y,et.z),l.push(J/I),l.push(1-Z/N),V+=1}}for(let Z=0;Z<N;Z++)for(let B=0;B<I;B++){const J=u+B+X*Z,k=u+B+X*(Z+1),T=u+(B+1)+X*(Z+1),C=u+(B+1)+X*Z;c.push(J,k,C),c.push(k,T,C),D+=6}o.addGroup(p,D,w),p+=D,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Ci(i[e]);for(const a in n)t[a]=n[a]}return t}function zc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Vc={clone:Ci,merge:Oe};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=zc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new at,Oa=new re,za=new re;class qe extends $o{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Oa,za),e.subVectors(za,Oa)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,d=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/d,a*=s.width/c,n*=s.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,vi=1;class Gc extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qe(mi,vi,t,e);a.layers=this.layers,this.add(a);const r=new qe(mi,vi,t,e);r.layers=this.layers,this.add(r);const s=new qe(mi,vi,t,e);s.layers=this.layers,this.add(s);const o=new qe(mi,vi,t,e);o.layers=this.layers,this.add(o);const c=new qe(mi,vi,t,e);c.layers=this.layers,this.add(c);const d=new qe(mi,vi,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const d of e)this.remove(d);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,d,h]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(l,u,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ra extends ze{constructor(t,e,n,a,r,s,o,c,d,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,a,r,s,o,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wc extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new ra(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Li(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Pn});r.uniforms.tEquirect.value=e;const s=new $e(a,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=tn),new Gc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}const ns=new at,Xc=new at,qc=new ce;class Cn{constructor(t=new at(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=ns.subVectors(n,e).cross(Xc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ns),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qc.getNormalMatrix(t),a=this.coplanarPoint(ns).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ia,vr=new at;class sa{constructor(t=new Cn,e=new Cn,n=new Cn,a=new Cn,r=new Cn,s=new Cn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],d=a[4],h=a[5],l=a[6],u=a[7],p=a[8],v=a[9],g=a[10],m=a[11],f=a[12],_=a[13],x=a[14],y=a[15];if(n[0].setComponents(c-r,u-d,m-p,y-f).normalize(),n[1].setComponents(c+r,u+d,m+p,y+f).normalize(),n[2].setComponents(c+s,u+h,m+v,y+_).normalize(),n[3].setComponents(c-s,u-h,m-v,y-_).normalize(),n[4].setComponents(c-o,u-l,m-g,y-x).normalize(),e===xn)n[5].setComponents(c+o,u+l,m+g,y+x).normalize();else if(e===Ir)n[5].setComponents(o,l,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(vr.x=a.normal.x>0?t.max.x:t.min.x,vr.y=a.normal.y>0?t.max.y:t.min.y,vr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yc(i){const t=new WeakMap;function e(o,c){const d=o.array,h=o.usage,l=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),o.onUploadCallback();let p;if(d instanceof Float32Array)p=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=i.SHORT;else if(d instanceof Uint32Array)p=i.UNSIGNED_INT;else if(d instanceof Int32Array)p=i.INT;else if(d instanceof Int8Array)p=i.BYTE;else if(d instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,d){const h=c.array,l=c._updateRange,u=c.updateRanges;if(i.bindBuffer(d,o),l.count===-1&&u.length===0&&i.bufferSubData(d,0,h),u.length!==0){for(let p=0,v=u.length;p<v;p++){const g=u[p];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}l.count!==-1&&(i.bufferSubData(d,l.offset*h.BYTES_PER_ELEMENT,h,l.offset,l.count),l.count=-1),c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const d=t.get(o);if(d===void 0)t.set(o,e(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:a,remove:r,update:s}}class Ki extends Un{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),d=o+1,h=c+1,l=t/o,u=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const _=f*u-s;for(let x=0;x<d;x++){const y=x*l-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const x=_+d*f,y=_+d*(f+1),R=_+1+d*(f+1),L=_+1+d*f;p.push(x,y,L),p.push(y,R,L)}this.setIndex(p),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var $c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,th=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_h=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Su=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Au=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ku=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,td=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ed=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ad=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ld=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ad=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:$c,alphahash_pars_fragment:Kc,alphamap_fragment:jc,alphamap_pars_fragment:Zc,alphatest_fragment:Jc,alphatest_pars_fragment:Qc,aomap_fragment:th,aomap_pars_fragment:eh,batching_pars_vertex:nh,batching_vertex:ih,begin_vertex:rh,beginnormal_vertex:sh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:uh,clipping_planes_vertex:dh,color_fragment:fh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:vh,common:gh,cube_uv_reflection_fragment:_h,defaultnormal_vertex:xh,displacementmap_pars_vertex:yh,displacementmap_vertex:Mh,emissivemap_fragment:Sh,emissivemap_pars_fragment:Eh,colorspace_fragment:wh,colorspace_pars_fragment:Ah,envmap_fragment:bh,envmap_common_pars_fragment:Th,envmap_pars_fragment:Ch,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:Vh,envmap_vertex:Ph,fog_vertex:Lh,fog_pars_vertex:Ih,fog_fragment:Dh,fog_pars_fragment:Nh,gradientmap_pars_fragment:Uh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Bh,lights_lambert_pars_fragment:Oh,lights_pars_begin:zh,lights_toon_fragment:Hh,lights_toon_pars_fragment:kh,lights_phong_fragment:Gh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:qh,lights_fragment_begin:Yh,lights_fragment_maps:$h,lights_fragment_end:Kh,logdepthbuf_fragment:jh,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:Jh,logdepthbuf_vertex:Qh,map_fragment:tu,map_pars_fragment:eu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:ru,metalnessmap_pars_fragment:su,morphinstance_vertex:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:hu,normal_fragment_begin:uu,normal_fragment_maps:du,normal_pars_fragment:fu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:vu,clearcoat_normal_fragment_begin:gu,clearcoat_normal_fragment_maps:_u,clearcoat_pars_fragment:xu,iridescence_pars_fragment:yu,opaque_fragment:Mu,packing:Su,premultiplied_alpha_fragment:Eu,project_vertex:wu,dithering_fragment:Au,dithering_pars_fragment:bu,roughnessmap_fragment:Tu,roughnessmap_pars_fragment:Cu,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Pu,shadowmap_vertex:Lu,shadowmask_pars_fragment:Iu,skinbase_vertex:Du,skinning_pars_vertex:Nu,skinning_vertex:Uu,skinnormal_vertex:Fu,specularmap_fragment:Bu,specularmap_pars_fragment:Ou,tonemapping_fragment:zu,tonemapping_pars_fragment:Vu,transmission_fragment:Hu,transmission_pars_fragment:ku,uv_pars_fragment:Gu,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:qu,background_vert:Yu,background_frag:$u,backgroundCube_vert:Ku,backgroundCube_frag:ju,cube_vert:Zu,cube_frag:Ju,depth_vert:Qu,depth_frag:td,distanceRGBA_vert:ed,distanceRGBA_frag:nd,equirect_vert:id,equirect_frag:rd,linedashed_vert:sd,linedashed_frag:ad,meshbasic_vert:od,meshbasic_frag:ld,meshlambert_vert:cd,meshlambert_frag:hd,meshmatcap_vert:ud,meshmatcap_frag:dd,meshnormal_vert:fd,meshnormal_frag:pd,meshphong_vert:md,meshphong_frag:vd,meshphysical_vert:gd,meshphysical_frag:_d,meshtoon_vert:xd,meshtoon_frag:yd,points_vert:Md,points_frag:Sd,shadow_vert:Ed,shadow_frag:wd,sprite_vert:Ad,sprite_frag:bd},Ht={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},nn={basic:{uniforms:Oe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Oe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new pe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Oe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Oe([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Oe([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new pe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Oe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Oe([Ht.points,Ht.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Oe([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Oe([Ht.common,Ht.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Oe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Oe([Ht.sprite,Ht.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Oe([Ht.common,Ht.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Oe([Ht.lights,Ht.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};nn.physical={uniforms:Oe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const gr={r:0,b:0,g:0},Hn=new cn,Td=new be;function Cd(i,t,e,n,a,r,s){const o=new pe(0);let c=r===!0?0:1,d,h,l=null,u=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?f(o,c):y&&y.isColor&&(f(y,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Dr)?(h===void 0&&(h=new $e(new Li(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ci(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Hn.copy(x.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Td.makeRotationFromEuler(Hn)),h.material.toneMapped=ve.getTransfer(y.colorSpace)!==Me,(l!==y||u!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=y,u=y.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new $e(new Ki(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ci(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=ve.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||u!==y.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,l=y,u=y.version,p=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function f(_,x){_.getRGB(gr,Yo(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(o,c)},render:g,addToRenderList:m}}function Rd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let r=a,s=!1;function o(M,b,O,F,Y){let X=!1;const K=l(F,O,b);r!==K&&(r=K,d(r.object)),X=p(M,F,O,Y),X&&v(M,F,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,y(M,b,O,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function d(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function l(M,b,O){const F=O.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let X=Y[b.id];X===void 0&&(X={},Y[b.id]=X);let K=X[F];return K===void 0&&(K=u(c()),X[F]=K),K}function u(M){const b=[],O=[],F=[];for(let Y=0;Y<e;Y++)b[Y]=0,O[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,b,O,F){const Y=r.attributes,X=b.attributes;let K=0;const V=O.getAttributes();for(const D in V)if(V[D].location>=0){const Z=Y[D];let B=X[D];if(B===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),Z===void 0||Z.attribute!==B||B&&Z.data!==B.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function v(M,b,O,F){const Y={},X=b.attributes;let K=0;const V=O.getAttributes();for(const D in V)if(V[D].location>=0){let Z=X[D];Z===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const B={};B.attribute=Z,Z&&Z.data&&(B.data=Z.data),Y[D]=B,K++}r.attributes=Y,r.attributesNum=K,r.index=F}function g(){const M=r.newAttributes;for(let b=0,O=M.length;b<O;b++)M[b]=0}function m(M){f(M,0)}function f(M,b){const O=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;O[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),Y[M]!==b&&(i.vertexAttribDivisor(M,b),Y[M]=b)}function _(){const M=r.newAttributes,b=r.enabledAttributes;for(let O=0,F=b.length;O<F;O++)b[O]!==M[O]&&(i.disableVertexAttribArray(O),b[O]=0)}function x(M,b,O,F,Y,X,K){K===!0?i.vertexAttribIPointer(M,b,O,Y,X):i.vertexAttribPointer(M,b,O,F,Y,X)}function y(M,b,O,F){g();const Y=F.attributes,X=O.getAttributes(),K=b.defaultAttributeValues;for(const V in X){const D=X[V];if(D.location>=0){let et=Y[V];if(et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const Z=et.normalized,B=et.itemSize,J=t.get(et);if(J===void 0)continue;const k=J.buffer,T=J.type,C=J.bytesPerElement,G=T===i.INT||T===i.UNSIGNED_INT||et.gpuType===Ks;if(et.isInterleavedBufferAttribute){const j=et.data,nt=j.stride,q=et.offset;if(j.isInstancedInterleavedBuffer){for(let st=0;st<D.locationSize;st++)f(D.location+st,j.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let st=0;st<D.locationSize;st++)m(D.location+st);i.bindBuffer(i.ARRAY_BUFFER,k);for(let st=0;st<D.locationSize;st++)x(D.location+st,B/D.locationSize,T,Z,nt*C,(q+B/D.locationSize*st)*C,G)}else{if(et.isInstancedBufferAttribute){for(let j=0;j<D.locationSize;j++)f(D.location+j,et.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let j=0;j<D.locationSize;j++)m(D.location+j);i.bindBuffer(i.ARRAY_BUFFER,k);for(let j=0;j<D.locationSize;j++)x(D.location+j,B/D.locationSize,T,Z,B*C,B/D.locationSize*j*C,G)}}else if(K!==void 0){const Z=K[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(D.location,Z);break;case 3:i.vertexAttrib3fv(D.location,Z);break;case 4:i.vertexAttrib4fv(D.location,Z);break;default:i.vertexAttrib1fv(D.location,Z)}}}}_()}function R(){N();for(const M in n){const b=n[M];for(const O in b){const F=b[O];for(const Y in F)h(F[Y].object),delete F[Y];delete b[O]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const O in b){const F=b[O];for(const Y in F)h(F[Y].object),delete F[Y];delete b[O]}delete n[M.id]}function I(M){for(const b in n){const O=n[b];if(O[M.id]===void 0)continue;const F=O[M.id];for(const Y in F)h(F[Y].object),delete F[Y];delete O[M.id]}}function N(){w(),s=!0,r!==a&&(r=a,d(r.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Pd(i,t,e){let n;function a(d){n=d}function r(d,h){i.drawArrays(n,d,h),e.update(h,n,1)}function s(d,h,l){l!==0&&(i.drawArraysInstanced(n,d,h,l),e.update(h,n,l))}function o(d,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,l);let p=0;for(let v=0;v<l;v++)p+=h[v];e.update(p,n,1)}function c(d,h,l,u){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d.length;v++)s(d[v],h[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g];for(let g=0;g<u.length;g++)e.update(v,n,u[g])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ld(i,t,e,n){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(L){return!(L!==en&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const I=L===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==yn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_n&&!I)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const l=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:R}}function Id(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Cn,o=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const p=l.length!==0||u||n!==0||a;return a=u,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){e=h(l,u,0)},this.setState=function(l,u,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?h(null):d();else{const _=r?0:n,x=_*4;let y=f.clippingState||null;c.value=y,y=h(v,u,x,p);for(let R=0;R!==x;++R)y[R]=e[R];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,u,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)s.copy(l[x]).applyMatrix4(_,o),s.normal.toArray(m,y),m[y+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Dd(i){let t=new WeakMap;function e(s,o){return o===vs?s.mapping=wi:o===gs&&(s.mapping=Ai),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===vs||o===gs)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const d=new Wc(c.height);return d.fromEquirectangularTexture(i,s),t.set(s,d),s.addEventListener("dispose",a),e(d.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jo extends $o{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,s=r+d*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xi=4,Va=[.125,.215,.35,.446,.526,.582],Xn=20,is=new jo,Ha=new pe;let rs=null,ss=0,as=0,os=!1;const Gn=(1+Math.sqrt(5))/2,gi=1/Gn,ka=[new at(-Gn,gi,0),new at(Gn,gi,0),new at(-gi,0,Gn),new at(gi,0,Gn),new at(0,Gn,-gi),new at(0,Gn,gi),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rs,ss,as),this._renderer.xr.enabled=os,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:qi,format:en,colorSpace:Nn,depthBuffer:!1},a=Wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(r)),this._blurMaterial=Ud(r,t,e)}return a}_compileMaterial(t){const e=new $e(this._lodPlanes[0],t);this._renderer.compile(e,is)}_sceneToCubeUV(t,e,n,a){const o=new qe(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,u=h.toneMapping;h.getClearColor(Ha),h.toneMapping=Ln,h.autoClear=!1;const p=new Wo({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),v=new $e(new Li,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ha),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,c[f],0),o.lookAt(d[f],0,0)):_===1?(o.up.set(0,0,c[f]),o.lookAt(0,d[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,d[f]));const x=this._cubeSize;_r(a,_*x,f>2?x:0,x,x),h.setRenderTarget(a),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===wi||t.mapping===Ai;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,is)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ka[(a-r-1)%ka.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new $e(this._lodPlanes[a],d),u=d.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const f=[];let _=0;for(let I=0;I<Xn;++I){const N=I/g,w=Math.exp(-N*N/2);f.push(w),I===0?_+=w:I<m&&(_+=2*w)}for(let I=0;I<f.length;I++)f[I]=f[I]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-n;const y=this._sizeLods[a],R=3*y*(a>x-xi?a-x+xi:0),L=4*(this._cubeSize-y);_r(e,R,L,3*y,2*y),c.setRenderTarget(e),c.render(l,is)}}function Nd(i){const t=[],e=[],n=[];let a=i;const r=i-xi+1+Va.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-xi?c=Va[s-i+xi-1]:s===0&&(c=0),n.push(c);const d=1/(o-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,N=L>2?0:-1,w=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];_.set(w,g*v*L),x.set(u,m*v*L);const M=[L,L,L,L,L,L];y.set(M,f*v*L)}const R=new Un;R.setAttribute("position",new an(_,g)),R.setAttribute("uv",new an(x,m)),R.setAttribute("faceIndex",new an(y,f)),t.push(R),a>xi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wa(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Ud(i,t,e){const n=new Float32Array(Xn),a=new at(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Xa(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function qa(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===vs||c===gs,h=c===wi||c===Ai;if(d||h){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Ga(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return d&&p&&p.height>0||h&&p&&a(p)?(e===null&&(e=new Ga(i)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function a(o){let c=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Bd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const a=e(n);return a===null&&Oo("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Od(i,t,e,n){const a={},r=new WeakMap;function s(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const g=u.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",s),delete a[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,e.memory.geometries++),u}function c(l){const u=l.attributes;for(const v in u)t.update(u[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function d(l){const u=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const R=_[x+0],L=_[x+1],I=_[x+2];u.push(R,L,L,I,I,R)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const R=x+0,L=x+1,I=x+2;u.push(R,L,L,I,I,R)}}else return;const m=new(Bo(u)?qo:Xo)(u,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const u=r.get(l);if(u){const p=l.index;p!==null&&u.version<p.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function zd(i,t,e){let n;function a(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*s),e.update(p,n,1)}function d(u,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,u*s,v),e.update(p,n,v))}function h(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,n,1)}function l(u,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)d(u[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,v);let f=0;for(let _=0;_<v;_++)f+=p[_];for(let _=0;_<g.length;_++)e.update(f,n,g[_])}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Vd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function Hd(i,t,e){const n=new WeakMap,a=new Re;function r(s,o,c){const d=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,L=1;R>t.maxTextureSize&&(L=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const I=new Float32Array(R*L*4*l),N=new Vo(I,R,L,l);N.type=_n,N.needsUpdate=!0;const w=y*4;for(let b=0;b<l;b++){const O=f[b],F=_[b],Y=x[b],X=R*L*4*b;for(let K=0;K<O.count;K++){const V=K*w;v===!0&&(a.fromBufferAttribute(O,K),I[X+V+0]=a.x,I[X+V+1]=a.y,I[X+V+2]=a.z,I[X+V+3]=0),g===!0&&(a.fromBufferAttribute(F,K),I[X+V+4]=a.x,I[X+V+5]=a.y,I[X+V+6]=a.z,I[X+V+7]=0),m===!0&&(a.fromBufferAttribute(Y,K),I[X+V+8]=a.x,I[X+V+9]=a.y,I[X+V+10]=a.z,I[X+V+11]=Y.itemSize===4?a.w:1)}}u={count:l,texture:N,size:new re(R,L)},n.set(o,u),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kd(i,t,e,n){let a=new WeakMap;function r(c){const d=n.render.frame,h=c.geometry,l=t.get(c,h);if(a.get(l)!==d&&(t.update(l),a.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==d&&(u.update(),a.set(u,d))}return l}function s(){a=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:s}}class Zo extends ze{constructor(t,e,n,a,r,s,o,c,d,h=Mi){if(h!==Mi&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=$n),n===void 0&&h===Ti&&(n=bi),super(null,a,r,s,o,c,h,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jo=new ze,Ya=new Zo(1,1),Qo=new Vo,tl=new Cc,el=new ra,$a=[],Ka=[],ja=new Float32Array(16),Za=new Float32Array(9),Ja=new Float32Array(4);function Ii(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=$a[a];if(r===void 0&&(r=new Float32Array(a),$a[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=Ka[t];e===void 0&&(e=new Int32Array(t),Ka[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Yd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Ja.set(n),i.uniformMatrix2fv(this.addr,!1,Ja),Le(e,n)}}function $d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Za.set(n),i.uniformMatrix3fv(this.addr,!1,Za),Le(e,n)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),Le(e,n)}}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function sf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(Ya.compareFunction=Fo,r=Ya):r=Jo,e.setTexture2D(t||r,a)}function af(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||tl,a)}function of(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||el,a)}function lf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Qo,a)}function cf(i){switch(i){case 5126:return Gd;case 35664:return Wd;case 35665:return Xd;case 35666:return qd;case 35674:return Yd;case 35675:return $d;case 35676:return Kd;case 5124:case 35670:return jd;case 35667:case 35671:return Zd;case 35668:case 35672:return Jd;case 35669:case 35673:return Qd;case 5125:return tf;case 36294:return ef;case 36295:return nf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function hf(i,t){i.uniform1fv(this.addr,t)}function uf(i,t){const e=Ii(t,this.size,2);i.uniform2fv(this.addr,e)}function df(i,t){const e=Ii(t,this.size,3);i.uniform3fv(this.addr,e)}function ff(i,t){const e=Ii(t,this.size,4);i.uniform4fv(this.addr,e)}function pf(i,t){const e=Ii(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mf(i,t){const e=Ii(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vf(i,t){const e=Ii(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gf(i,t){i.uniform1iv(this.addr,t)}function _f(i,t){i.uniform2iv(this.addr,t)}function xf(i,t){i.uniform3iv(this.addr,t)}function yf(i,t){i.uniform4iv(this.addr,t)}function Mf(i,t){i.uniform1uiv(this.addr,t)}function Sf(i,t){i.uniform2uiv(this.addr,t)}function Ef(i,t){i.uniform3uiv(this.addr,t)}function wf(i,t){i.uniform4uiv(this.addr,t)}function Af(i,t,e){const n=this.cache,a=t.length,r=Ur(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||Jo,r[s])}function bf(i,t,e){const n=this.cache,a=t.length,r=Ur(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||tl,r[s])}function Tf(i,t,e){const n=this.cache,a=t.length,r=Ur(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||el,r[s])}function Cf(i,t,e){const n=this.cache,a=t.length,r=Ur(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||Qo,r[s])}function Rf(i){switch(i){case 5126:return hf;case 35664:return uf;case 35665:return df;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return vf;case 5124:case 35670:return gf;case 35667:case 35671:return _f;case 35668:case 35672:return xf;case 35669:case 35673:return yf;case 5125:return Mf;case 36294:return Sf;case 36295:return Ef;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return Cf}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cf(e.type)}}class Lf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rf(e.type)}}class If{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function Qa(i,t){i.seq.push(t),i.map[t.id]=t}function Df(i,t,e){const n=i.name,a=n.length;for(ls.lastIndex=0;;){const r=ls.exec(n),s=ls.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&s+2===a){Qa(e,d===void 0?new Pf(o,i,t):new Lf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new If(o),Qa(e,l)),e=l}}}class Tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);Df(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function to(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Nf=37297;let Uf=0;function Ff(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}function Bf(i){const t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i);let n;switch(t===e?n="":t===Lr&&e===Pr?n="LinearDisplayP3ToLinearSRGB":t===Pr&&e===Lr&&(n="LinearSRGBToLinearDisplayP3"),i){case Nn:case Nr:return[n,"LinearTransferOETF"];case Qe:case ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function eo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Ff(i.getShaderSource(t),s)}else return a}function Of(i,t){const e=Bf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zf(i,t){let e;switch(t){case Vl:e="Linear";break;case Hl:e="Reinhard";break;case kl:e="OptimizedCineon";break;case Gl:e="ACESFilmic";break;case Xl:e="AgX";break;case ql:e="Neutral";break;case Wl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Hf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Oi(i){return i!==""}function no(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function io(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(i){return i.replace(Gf,Xf)}const Wf=new Map;function Xf(i,t){let e=le[t];if(e===void 0){const n=Wf.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qs(e)}const qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ro(i){return i.replace(qf,Yf)}function Yf(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function so(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $f(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===So?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ai:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Zf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ol:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function Jf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qf(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=$f(e),d=Kf(e),h=jf(e),l=Zf(e),u=Jf(e),p=Vf(e),v=Hf(r),g=a.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Oi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Oi).join(`
`),f.length>0&&(f+=`
`)):(m=[so(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),f=[so(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?le.tonemapping_pars_fragment:"",e.toneMapping!==Ln?zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Of("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),s=qs(s),s=no(s,e),s=io(s,e),o=qs(o),o=no(o,e),o=io(o,e),s=ro(s),o=ro(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+s,y=_+f+o,R=to(a,a.VERTEX_SHADER,x),L=to(a,a.FRAGMENT_SHADER,y);a.attachShader(g,R),a.attachShader(g,L),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function I(b){if(i.debug.checkShaderErrors){const O=a.getProgramInfoLog(g).trim(),F=a.getShaderInfoLog(R).trim(),Y=a.getShaderInfoLog(L).trim();let X=!0,K=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,R,L);else{const V=eo(a,R,"vertex"),D=eo(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+V+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||Y==="")&&(K=!1);K&&(b.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:f}})}a.deleteShader(R),a.deleteShader(L),N=new Tr(a,g),w=kf(a,g)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(g,Nf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=L,this}let tp=0;class ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new np(t),e.set(t,n)),n}}class np{constructor(t){this.id=tp++,this.code=t,this.usedTimes=0}}function ip(i,t,e,n,a,r,s){const o=new ko,c=new ep,d=new Set,h=[],l=a.logarithmicDepthBuffer,u=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return d.add(w),w===0?"uv":`uv${w}`}function m(w,M,b,O,F){const Y=O.fog,X=F.geometry,K=w.isMeshStandardMaterial?O.environment:null,V=(w.isMeshStandardMaterial?e:t).get(w.envMap||K),D=V&&V.mapping===Dr?V.image.height:null,et=v[w.type];w.precision!==null&&(p=a.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,B=Z!==void 0?Z.length:0;let J=0;X.morphAttributes.position!==void 0&&(J=1),X.morphAttributes.normal!==void 0&&(J=2),X.morphAttributes.color!==void 0&&(J=3);let k,T,C,G;if(et){const ae=nn[et];k=ae.vertexShader,T=ae.fragmentShader}else k=w.vertexShader,T=w.fragmentShader,c.update(w),C=c.getVertexShaderID(w),G=c.getFragmentShaderID(w);const j=i.getRenderTarget(),nt=F.isInstancedMesh===!0,q=F.isBatchedMesh===!0,st=!!w.map,pt=!!w.matcap,U=!!V,Tt=!!w.aoMap,Mt=!!w.lightMap,ht=!!w.bumpMap,ot=!!w.normalMap,Kt=!!w.displacementMap,At=!!w.emissiveMap,kt=!!w.metalnessMap,P=!!w.roughnessMap,A=w.anisotropy>0,Q=w.clearcoat>0,dt=w.dispersion>0,vt=w.iridescence>0,ut=w.sheen>0,Ot=w.transmission>0,yt=A&&!!w.anisotropyMap,Lt=Q&&!!w.clearcoatMap,jt=Q&&!!w.clearcoatNormalMap,wt=Q&&!!w.clearcoatRoughnessMap,Vt=vt&&!!w.iridescenceMap,ee=vt&&!!w.iridescenceThicknessMap,Yt=ut&&!!w.sheenColorMap,zt=ut&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Qt=!!w.specularColorMap,de=!!w.specularIntensityMap,S=Ot&&!!w.transmissionMap,tt=Ot&&!!w.thicknessMap,it=!!w.gradientMap,ct=!!w.alphaMap,_t=w.alphaTest>0,Xt=!!w.alphaHash,te=!!w.extensions;let me=Ln;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(me=i.toneMapping);const xe={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:k,fragmentShader:T,defines:w.defines,customVertexShaderID:C,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:q,batchingColor:q&&F._colorsTexture!==null,instancing:nt,instancingColor:nt&&F.instanceColor!==null,instancingMorph:nt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nn,alphaToCoverage:!!w.alphaToCoverage,map:st,matcap:pt,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:D,aoMap:Tt,lightMap:Mt,bumpMap:ht,normalMap:ot,displacementMap:u&&Kt,emissiveMap:At,normalMapObjectSpace:ot&&w.normalMapType===jl,normalMapTangentSpace:ot&&w.normalMapType===Uo,metalnessMap:kt,roughnessMap:P,anisotropy:A,anisotropyMap:yt,clearcoat:Q,clearcoatMap:Lt,clearcoatNormalMap:jt,clearcoatRoughnessMap:wt,dispersion:dt,iridescence:vt,iridescenceMap:Vt,iridescenceThicknessMap:ee,sheen:ut,sheenColorMap:Yt,sheenRoughnessMap:zt,specularMap:Jt,specularColorMap:Qt,specularIntensityMap:de,transmission:Ot,transmissionMap:S,thicknessMap:tt,gradientMap:it,opaque:w.transparent===!1&&w.blending===yi&&w.alphaToCoverage===!1,alphaMap:ct,alphaTest:_t,alphaHash:Xt,combine:w.combine,mapUv:st&&g(w.map.channel),aoMapUv:Tt&&g(w.aoMap.channel),lightMapUv:Mt&&g(w.lightMap.channel),bumpMapUv:ht&&g(w.bumpMap.channel),normalMapUv:ot&&g(w.normalMap.channel),displacementMapUv:Kt&&g(w.displacementMap.channel),emissiveMapUv:At&&g(w.emissiveMap.channel),metalnessMapUv:kt&&g(w.metalnessMap.channel),roughnessMapUv:P&&g(w.roughnessMap.channel),anisotropyMapUv:yt&&g(w.anisotropyMap.channel),clearcoatMapUv:Lt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&g(w.sheenRoughnessMap.channel),specularMapUv:Jt&&g(w.specularMap.channel),specularColorMapUv:Qt&&g(w.specularColorMap.channel),specularIntensityMapUv:de&&g(w.specularIntensityMap.channel),transmissionMapUv:S&&g(w.transmissionMap.channel),thicknessMapUv:tt&&g(w.thicknessMap.channel),alphaMapUv:ct&&g(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ot||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(st||ct),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:st&&w.map.isVideoTexture===!0&&ve.getTransfer(w.map.colorSpace)===Me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gn,flipSided:w.side===He,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=d.has(1),xe.vertexUv2s=d.has(2),xe.vertexUv3s=d.has(3),d.clear(),xe}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const b in w.defines)M.push(b),M.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(_(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function y(w){const M=v[w.type];let b;if(M){const O=nn[M];b=Vc.clone(O.uniforms)}else b=w.uniforms;return b}function R(w,M){let b;for(let O=0,F=h.length;O<F;O++){const Y=h[O];if(Y.cacheKey===M){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new Qf(i,M,w,r),h.push(b)),b}function L(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function I(w){c.remove(w)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:N}}function rp(){let i=new WeakMap;function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function e(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function sp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ao(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oo(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,u,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:u,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,u,p,v,g,m){const f=s(l,u,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?a.push(f):e.push(f)}function c(l,u,p,v,g,m){const f=s(l,u,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?a.unshift(f):e.unshift(f)}function d(l,u){e.length>1&&e.sort(l||sp),n.length>1&&n.sort(u||ao),a.length>1&&a.sort(u||ao)}function h(){for(let l=t,u=i.length;l<u;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:h,sort:d}}function ap(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new oo,i.set(n,[s])):a>=r.length?(s=new oo,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function op(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new at,color:new pe};break;case"SpotLight":e={position:new at,direction:new at,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new at,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new at,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new at,halfWidth:new at,halfHeight:new at};break}return i[t.id]=e,e}}}function lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cp=0;function hp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function up(i){const t=new op,e=lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new at);const a=new at,r=new be,s=new be;function o(d){let h=0,l=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,_=0,x=0,y=0,R=0,L=0,I=0;d.sort(hp);for(let w=0,M=d.length;w<M;w++){const b=d[w],O=b.color,F=b.intensity,Y=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=O.r*F,l+=O.g*F,u+=O.b*F;else if(b.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(b.sh.coefficients[K],F);I++}else if(b.isDirectionalLight){const K=t.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const V=b.shadow,D=e.get(b);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=b.shadow.matrix,_++}n.directional[p]=K,p++}else if(b.isSpotLight){const K=t.get(b);K.position.setFromMatrixPosition(b.matrixWorld),K.color.copy(O).multiplyScalar(F),K.distance=Y,K.coneCos=Math.cos(b.angle),K.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),K.decay=b.decay,n.spot[g]=K;const V=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,V.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[g]=V.matrix,b.castShadow){const D=e.get(b);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.spotShadow[g]=D,n.spotShadowMap[g]=X,y++}g++}else if(b.isRectAreaLight){const K=t.get(b);K.color.copy(O).multiplyScalar(F),K.halfWidth.set(b.width*.5,0,0),K.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=K,m++}else if(b.isPointLight){const K=t.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),K.distance=b.distance,K.decay=b.decay,b.castShadow){const V=b.shadow,D=e.get(b);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,n.pointShadow[v]=D,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=b.shadow.matrix,x++}n.point[v]=K,v++}else if(b.isHemisphereLight){const K=t.get(b);K.skyColor.copy(b.color).multiplyScalar(F),K.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=u;const N=n.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==_||N.numPointShadows!==x||N.numSpotShadows!==y||N.numSpotMaps!==R||N.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,N.directionalLength=p,N.pointLength=v,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=_,N.numPointShadows=x,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=I,n.version=cp++)}function c(d,h){let l=0,u=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let f=0,_=d.length;f<_;f++){const x=d[f];if(x.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),l++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),r.copy(x.matrixWorld),r.premultiply(m),s.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function lo(i){const t=new up(i),e=[],n=[];function a(h){d.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function s(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function dp(i){let t=new WeakMap;function e(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new lo(i),t.set(a,[o])):r>=s.length?(o=new lo(i),s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class fp extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pp extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gp(i,t,e){let n=new sa;const a=new re,r=new re,s=new Re,o=new fp({depthPacking:Kl}),c=new pp,d={},h=e.maxTextureSize,l={[In]:He,[He]:In,[gn]:gn},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:mp,fragmentShader:vp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $e(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let f=this.type;this.render=function(L,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Pn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=f!==vn&&this.type===vn,Y=f===vn&&this.type!==vn;for(let X=0,K=L.length;X<K;X++){const V=L[X],D=V.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const et=D.getFrameExtents();if(a.multiply(et),r.copy(D.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/et.x),a.x=r.x*et.x,D.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/et.y),a.y=r.y*et.y,D.mapSize.y=r.y)),D.map===null||F===!0||Y===!0){const B=this.type!==vn?{minFilter:Ye,magFilter:Ye}:{};D.map!==null&&D.map.dispose(),D.map=new Kn(a.x,a.y,B),D.map.texture.name=V.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Z=D.getViewportCount();for(let B=0;B<Z;B++){const J=D.getViewport(B);s.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(s),D.updateMatrices(V,B),n=D.getFrustum(),y(I,N,D.camera,V,this.type)}D.isPointLightShadow!==!0&&this.type===vn&&_(D,N),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,b)};function _(L,I){const N=t.update(g);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Kn(a.x,a.y)),u.uniforms.shadow_pass.value=L.map.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(I,null,N,u,g,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(I,null,N,p,g,null)}function x(L,I,N,w){let M=null;const b=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)M=b;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=M.uuid,F=I.uuid;let Y=d[O];Y===void 0&&(Y={},d[O]=Y);let X=Y[F];X===void 0&&(X=M.clone(),Y[F]=X,I.addEventListener("dispose",R)),M=X}if(M.visible=I.visible,M.wireframe=I.wireframe,w===vn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:l[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=N}return M}function y(L,I,N,w,M){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===vn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const F=t.update(L),Y=L.material;if(Array.isArray(Y)){const X=F.groups;for(let K=0,V=X.length;K<V;K++){const D=X[K],et=Y[D.materialIndex];if(et&&et.visible){const Z=x(L,et,w,M);L.onBeforeShadow(i,L,I,N,F,Z,D),i.renderBufferDirect(N,null,F,Z,L,D),L.onAfterShadow(i,L,I,N,F,Z,D)}}}else if(Y.visible){const X=x(L,Y,w,M);L.onBeforeShadow(i,L,I,N,F,X,null),i.renderBufferDirect(N,null,F,X,L,null),L.onAfterShadow(i,L,I,N,F,X,null)}}const O=L.children;for(let F=0,Y=O.length;F<Y;F++)y(O[F],I,N,w,M)}function R(L){L.target.removeEventListener("dispose",R);for(const N in d){const w=d[N],M=L.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function _p(i){function t(){let S=!1;const tt=new Re;let it=null;const ct=new Re(0,0,0,0);return{setMask:function(_t){it!==_t&&!S&&(i.colorMask(_t,_t,_t,_t),it=_t)},setLocked:function(_t){S=_t},setClear:function(_t,Xt,te,me,xe){xe===!0&&(_t*=me,Xt*=me,te*=me),tt.set(_t,Xt,te,me),ct.equals(tt)===!1&&(i.clearColor(_t,Xt,te,me),ct.copy(tt))},reset:function(){S=!1,it=null,ct.set(-1,0,0,0)}}}function e(){let S=!1,tt=null,it=null,ct=null;return{setTest:function(_t){_t?G(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(_t){tt!==_t&&!S&&(i.depthMask(_t),tt=_t)},setFunc:function(_t){if(it!==_t){switch(_t){case Ll:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case Nl:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=_t}},setLocked:function(_t){S=_t},setClear:function(_t){ct!==_t&&(i.clearDepth(_t),ct=_t)},reset:function(){S=!1,tt=null,it=null,ct=null}}}function n(){let S=!1,tt=null,it=null,ct=null,_t=null,Xt=null,te=null,me=null,xe=null;return{setTest:function(ae){S||(ae?G(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ae){tt!==ae&&!S&&(i.stencilMask(ae),tt=ae)},setFunc:function(ae,he,lt){(it!==ae||ct!==he||_t!==lt)&&(i.stencilFunc(ae,he,lt),it=ae,ct=he,_t=lt)},setOp:function(ae,he,lt){(Xt!==ae||te!==he||me!==lt)&&(i.stencilOp(ae,he,lt),Xt=ae,te=he,me=lt)},setLocked:function(ae){S=ae},setClear:function(ae){xe!==ae&&(i.clearStencil(ae),xe=ae)},reset:function(){S=!1,tt=null,it=null,ct=null,_t=null,Xt=null,te=null,me=null,xe=null}}}const a=new t,r=new e,s=new n,o=new WeakMap,c=new WeakMap;let d={},h={},l=new WeakMap,u=[],p=null,v=!1,g=null,m=null,f=null,_=null,x=null,y=null,R=null,L=new pe(0,0,0),I=0,N=!1,w=null,M=null,b=null,O=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=K>=2);let D=null,et={};const Z=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),J=new Re().fromArray(Z),k=new Re().fromArray(B);function T(S,tt,it,ct){const _t=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(S,Xt),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<it;te++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(tt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return Xt}const C={};C[i.TEXTURE_2D]=T(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=T(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=T(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=T(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),G(i.DEPTH_TEST),r.setFunc(Cr),ht(!1),ot(fa),G(i.CULL_FACE),Tt(Pn);function G(S){d[S]!==!0&&(i.enable(S),d[S]=!0)}function j(S){d[S]!==!1&&(i.disable(S),d[S]=!1)}function nt(S,tt){return h[S]!==tt?(i.bindFramebuffer(S,tt),h[S]=tt,S===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=tt),S===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function q(S,tt){let it=u,ct=!1;if(S){it=l.get(tt),it===void 0&&(it=[],l.set(tt,it));const _t=S.textures;if(it.length!==_t.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,te=_t.length;Xt<te;Xt++)it[Xt]=i.COLOR_ATTACHMENT0+Xt;it.length=_t.length,ct=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ct=!0);ct&&i.drawBuffers(it)}function st(S){return p!==S?(i.useProgram(S),p=S,!0):!1}const pt={[Wn]:i.FUNC_ADD,[pl]:i.FUNC_SUBTRACT,[ml]:i.FUNC_REVERSE_SUBTRACT};pt[vl]=i.MIN,pt[gl]=i.MAX;const U={[_l]:i.ZERO,[xl]:i.ONE,[yl]:i.SRC_COLOR,[ps]:i.SRC_ALPHA,[bl]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[Sl]:i.DST_ALPHA,[Ml]:i.ONE_MINUS_SRC_COLOR,[ms]:i.ONE_MINUS_SRC_ALPHA,[Al]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[Tl]:i.CONSTANT_COLOR,[Cl]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Pl]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(S,tt,it,ct,_t,Xt,te,me,xe,ae){if(S===Pn){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(G(i.BLEND),v=!0),S!==fl){if(S!==g||ae!==N){if((m!==Wn||x!==Wn)&&(i.blendEquation(i.FUNC_ADD),m=Wn,x=Wn),ae)switch(S){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}f=null,_=null,y=null,R=null,L.set(0,0,0),I=0,g=S,N=ae}return}_t=_t||tt,Xt=Xt||it,te=te||ct,(tt!==m||_t!==x)&&(i.blendEquationSeparate(pt[tt],pt[_t]),m=tt,x=_t),(it!==f||ct!==_||Xt!==y||te!==R)&&(i.blendFuncSeparate(U[it],U[ct],U[Xt],U[te]),f=it,_=ct,y=Xt,R=te),(me.equals(L)===!1||xe!==I)&&(i.blendColor(me.r,me.g,me.b,xe),L.copy(me),I=xe),g=S,N=!1}function Mt(S,tt){S.side===gn?j(i.CULL_FACE):G(i.CULL_FACE);let it=S.side===He;tt&&(it=!it),ht(it),S.blending===yi&&S.transparent===!1?Tt(Pn):Tt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),a.setMask(S.colorWrite);const ct=S.stencilWrite;s.setTest(ct),ct&&(s.setMask(S.stencilWriteMask),s.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),s.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),At(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(S){w!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),w=S)}function ot(S){S!==ul?(G(i.CULL_FACE),S!==M&&(S===fa?i.cullFace(i.BACK):S===dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),M=S}function Kt(S){S!==b&&(X&&i.lineWidth(S),b=S)}function At(S,tt,it){S?(G(i.POLYGON_OFFSET_FILL),(O!==tt||F!==it)&&(i.polygonOffset(tt,it),O=tt,F=it)):j(i.POLYGON_OFFSET_FILL)}function kt(S){S?G(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function P(S){S===void 0&&(S=i.TEXTURE0+Y-1),D!==S&&(i.activeTexture(S),D=S)}function A(S,tt,it){it===void 0&&(D===null?it=i.TEXTURE0+Y-1:it=D);let ct=et[it];ct===void 0&&(ct={type:void 0,texture:void 0},et[it]=ct),(ct.type!==S||ct.texture!==tt)&&(D!==it&&(i.activeTexture(it),D=it),i.bindTexture(S,tt||C[S]),ct.type=S,ct.texture=tt)}function Q(){const S=et[D];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Yt(S){J.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),J.copy(S))}function zt(S){k.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),k.copy(S))}function Jt(S,tt){let it=c.get(tt);it===void 0&&(it=new WeakMap,c.set(tt,it));let ct=it.get(S);ct===void 0&&(ct=i.getUniformBlockIndex(tt,S.name),it.set(S,ct))}function Qt(S,tt){const ct=c.get(tt).get(S);o.get(tt)!==ct&&(i.uniformBlockBinding(tt,ct,S.__bindingPointIndex),o.set(tt,ct))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},D=null,et={},h={},l=new WeakMap,u=[],p=null,v=!1,g=null,m=null,f=null,_=null,x=null,y=null,R=null,L=new pe(0,0,0),I=0,N=!1,w=null,M=null,b=null,O=null,F=null,J.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:G,disable:j,bindFramebuffer:nt,drawBuffers:q,useProgram:st,setBlending:Tt,setMaterial:Mt,setFlipSided:ht,setCullFace:ot,setLineWidth:Kt,setPolygonOffset:At,setScissorTest:kt,activeTexture:P,bindTexture:A,unbindTexture:Q,compressedTexImage2D:dt,compressedTexImage3D:vt,texImage2D:Vt,texImage3D:ee,updateUBOMapping:Jt,uniformBlockBinding:Qt,texStorage2D:jt,texStorage3D:wt,texSubImage2D:ut,texSubImage3D:Ot,compressedTexSubImage2D:yt,compressedTexSubImage3D:Lt,scissor:Yt,viewport:zt,reset:de}}function co(i,t,e,n){const a=xp(n);switch(e){case Co:return i*t;case Po:return i*t;case Lo:return i*t*2;case Io:return i*t/a.components*a.byteLength;case Js:return i*t/a.components*a.byteLength;case Do:return i*t*2/a.components*a.byteLength;case Qs:return i*t*2/a.components*a.byteLength;case Ro:return i*t*3/a.components*a.byteLength;case en:return i*t*4/a.components*a.byteLength;case ta:return i*t*4/a.components*a.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ms:case Es:return Math.max(i,16)*Math.max(t,8)/4;case ys:case Ss:return Math.max(i,8)*Math.max(t,8)/2;case ws:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ps:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ls:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Is:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ds:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Us:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Os:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case Hs:case ks:return Math.ceil(i/4)*Math.ceil(t/4)*16;case No:case Gs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ws:case Xs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xp(i){switch(i){case yn:case Ao:return{byteLength:1,components:1};case Hi:case bo:case qi:return{byteLength:2,components:1};case js:case Zs:return{byteLength:2,components:4};case $n:case Ks:case _n:return{byteLength:4,components:1};case To:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yp(i,t,e,n,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new re,h=new WeakMap;let l;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,A){return p?new OffscreenCanvas(P,A):Gi("canvas")}function g(P,A,Q){let dt=1;const vt=kt(P);if((vt.width>Q||vt.height>Q)&&(dt=Q/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ut=Math.floor(dt*vt.width),Ot=Math.floor(dt*vt.height);l===void 0&&(l=v(ut,Ot));const yt=A?v(ut,Ot):l;return yt.width=ut,yt.height=Ot,yt.getContext("2d").drawImage(P,0,0,ut,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+Ot+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Ye&&P.minFilter!==tn}function f(P){i.generateMipmap(P)}function _(P,A,Q,dt,vt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=A;if(A===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),A===i.RGBA){const Ot=vt?Rr:ve.getTransfer(dt);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=Ot===Me?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(P,A){let Q;return P?A===null||A===$n||A===bi?Q=i.DEPTH24_STENCIL8:A===_n?Q=i.DEPTH32F_STENCIL8:A===Hi&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$n||A===bi?Q=i.DEPTH_COMPONENT24:A===_n?Q=i.DEPTH_COMPONENT32F:A===Hi&&(Q=i.DEPTH_COMPONENT16),Q}function y(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ye&&P.minFilter!==tn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function R(P){const A=P.target;A.removeEventListener("dispose",R),I(A),A.isVideoTexture&&h.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),w(A)}function I(P){const A=n.get(P);if(A.__webglInit===void 0)return;const Q=P.source,dt=u.get(Q);if(dt){const vt=dt[A.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&N(P),Object.keys(dt).length===0&&u.delete(Q)}n.remove(P)}function N(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const Q=P.source,dt=u.get(Q);delete dt[A.__cacheKey],s.memory.textures--}function w(P){const A=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let vt=0;vt<A.__webglFramebuffer[dt].length;vt++)i.deleteFramebuffer(A.__webglFramebuffer[dt][vt]);else i.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)i.deleteFramebuffer(A.__webglFramebuffer[dt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=P.textures;for(let dt=0,vt=Q.length;dt<vt;dt++){const ut=n.get(Q[dt]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),s.memory.textures--),n.remove(Q[dt])}n.remove(P)}let M=0;function b(){M=0}function O(){const P=M;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),M+=1,P}function F(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Y(P,A){const Q=n.get(P);if(P.isVideoTexture&&Kt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const dt=P.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(Q,P,A);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function X(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){k(Q,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function K(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){k(Q,P,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function V(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){T(Q,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const D={[_s]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[xs]:i.MIRRORED_REPEAT},et={[Ye]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Z={[Zl]:i.NEVER,[ic]:i.ALWAYS,[Jl]:i.LESS,[Fo]:i.LEQUAL,[Ql]:i.EQUAL,[nc]:i.GEQUAL,[tc]:i.GREATER,[ec]:i.NOTEQUAL};function B(P,A){if(A.type===_n&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===tn||A.magFilter===Or||A.magFilter===Zi||A.magFilter===Yn||A.minFilter===tn||A.minFilter===Or||A.minFilter===Zi||A.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,D[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,D[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,D[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ye||A.minFilter!==Zi&&A.minFilter!==Yn||A.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function J(P,A){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",R));const dt=A.source;let vt=u.get(dt);vt===void 0&&(vt={},u.set(dt,vt));const ut=F(A);if(ut!==P.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),vt[ut].usedTimes++;const Ot=vt[P.__cacheKey];Ot!==void 0&&(vt[P.__cacheKey].usedTimes--,Ot.usedTimes===0&&N(A)),P.__cacheKey=ut,P.__webglTexture=vt[ut].texture}return Q}function k(P,A,Q){let dt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=i.TEXTURE_3D);const vt=J(P,A),ut=A.source;e.bindTexture(dt,P.__webglTexture,i.TEXTURE0+Q);const Ot=n.get(ut);if(ut.version!==Ot.__version||vt===!0){e.activeTexture(i.TEXTURE0+Q);const yt=ve.getPrimaries(ve.workingColorSpace),Lt=A.colorSpace===Rn?null:ve.getPrimaries(A.colorSpace),jt=A.colorSpace===Rn||yt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let wt=g(A.image,!1,a.maxTextureSize);wt=At(A,wt);const Vt=r.convert(A.format,A.colorSpace),ee=r.convert(A.type);let Yt=_(A.internalFormat,Vt,ee,A.colorSpace,A.isVideoTexture);B(dt,A);let zt;const Jt=A.mipmaps,Qt=A.isVideoTexture!==!0,de=Ot.__version===void 0||vt===!0,S=ut.dataReady,tt=y(A,wt);if(A.isDepthTexture)Yt=x(A.format===Ti,A.type),de&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Yt,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,wt.width,wt.height,0,Vt,ee,null));else if(A.isDataTexture)if(Jt.length>0){Qt&&de&&e.texStorage2D(i.TEXTURE_2D,tt,Yt,Jt[0].width,Jt[0].height);for(let it=0,ct=Jt.length;it<ct;it++)zt=Jt[it],Qt?S&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,zt.width,zt.height,Vt,ee,zt.data):e.texImage2D(i.TEXTURE_2D,it,Yt,zt.width,zt.height,0,Vt,ee,zt.data);A.generateMipmaps=!1}else Qt?(de&&e.texStorage2D(i.TEXTURE_2D,tt,Yt,wt.width,wt.height),S&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt.width,wt.height,Vt,ee,wt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,wt.width,wt.height,0,Vt,ee,wt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Yt,Jt[0].width,Jt[0].height,wt.depth);for(let it=0,ct=Jt.length;it<ct;it++)if(zt=Jt[it],A.format!==en)if(Vt!==null)if(Qt){if(S)if(A.layerUpdates.size>0){const _t=co(zt.width,zt.height,A.format,A.type);for(const Xt of A.layerUpdates){const te=zt.data.subarray(Xt*_t/zt.data.BYTES_PER_ELEMENT,(Xt+1)*_t/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Xt,zt.width,zt.height,1,Vt,te,0,0)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,zt.width,zt.height,wt.depth,Vt,zt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Yt,zt.width,zt.height,wt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?S&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,zt.width,zt.height,wt.depth,Vt,ee,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Yt,zt.width,zt.height,wt.depth,0,Vt,ee,zt.data)}else{Qt&&de&&e.texStorage2D(i.TEXTURE_2D,tt,Yt,Jt[0].width,Jt[0].height);for(let it=0,ct=Jt.length;it<ct;it++)zt=Jt[it],A.format!==en?Vt!==null?Qt?S&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,zt.width,zt.height,Vt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?S&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,zt.width,zt.height,Vt,ee,zt.data):e.texImage2D(i.TEXTURE_2D,it,Yt,zt.width,zt.height,0,Vt,ee,zt.data)}else if(A.isDataArrayTexture)if(Qt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Yt,wt.width,wt.height,wt.depth),S)if(A.layerUpdates.size>0){const it=co(wt.width,wt.height,A.format,A.type);for(const ct of A.layerUpdates){const _t=wt.data.subarray(ct*it/wt.data.BYTES_PER_ELEMENT,(ct+1)*it/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,wt.width,wt.height,1,Vt,ee,_t)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Vt,ee,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,wt.width,wt.height,wt.depth,0,Vt,ee,wt.data);else if(A.isData3DTexture)Qt?(de&&e.texStorage3D(i.TEXTURE_3D,tt,Yt,wt.width,wt.height,wt.depth),S&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Vt,ee,wt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,wt.width,wt.height,wt.depth,0,Vt,ee,wt.data);else if(A.isFramebufferTexture){if(de)if(Qt)e.texStorage2D(i.TEXTURE_2D,tt,Yt,wt.width,wt.height);else{let it=wt.width,ct=wt.height;for(let _t=0;_t<tt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Yt,it,ct,0,Vt,ee,null),it>>=1,ct>>=1}}else if(Jt.length>0){if(Qt&&de){const it=kt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,tt,Yt,it.width,it.height)}for(let it=0,ct=Jt.length;it<ct;it++)zt=Jt[it],Qt?S&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Vt,ee,zt):e.texImage2D(i.TEXTURE_2D,it,Yt,Vt,ee,zt);A.generateMipmaps=!1}else if(Qt){if(de){const it=kt(wt);e.texStorage2D(i.TEXTURE_2D,tt,Yt,it.width,it.height)}S&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt,ee,wt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Vt,ee,wt);m(A)&&f(dt),Ot.__version=ut.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function T(P,A,Q){if(A.image.length!==6)return;const dt=J(P,A),vt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);const ut=n.get(vt);if(vt.version!==ut.__version||dt===!0){e.activeTexture(i.TEXTURE0+Q);const Ot=ve.getPrimaries(ve.workingColorSpace),yt=A.colorSpace===Rn?null:ve.getPrimaries(A.colorSpace),Lt=A.colorSpace===Rn||Ot===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const jt=A.isCompressedTexture||A.image[0].isCompressedTexture,wt=A.image[0]&&A.image[0].isDataTexture,Vt=[];for(let ct=0;ct<6;ct++)!jt&&!wt?Vt[ct]=g(A.image[ct],!0,a.maxCubemapSize):Vt[ct]=wt?A.image[ct].image:A.image[ct],Vt[ct]=At(A,Vt[ct]);const ee=Vt[0],Yt=r.convert(A.format,A.colorSpace),zt=r.convert(A.type),Jt=_(A.internalFormat,Yt,zt,A.colorSpace),Qt=A.isVideoTexture!==!0,de=ut.__version===void 0||dt===!0,S=vt.dataReady;let tt=y(A,ee);B(i.TEXTURE_CUBE_MAP,A);let it;if(jt){Qt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Jt,ee.width,ee.height);for(let ct=0;ct<6;ct++){it=Vt[ct].mipmaps;for(let _t=0;_t<it.length;_t++){const Xt=it[_t];A.format!==en?Yt!==null?Qt?S&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,0,0,Xt.width,Xt.height,Yt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,Jt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,0,0,Xt.width,Xt.height,Yt,zt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t,Jt,Xt.width,Xt.height,0,Yt,zt,Xt.data)}}}else{if(it=A.mipmaps,Qt&&de){it.length>0&&tt++;const ct=kt(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(wt){Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Vt[ct].width,Vt[ct].height,Yt,zt,Vt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,Vt[ct].width,Vt[ct].height,0,Yt,zt,Vt[ct].data);for(let _t=0;_t<it.length;_t++){const te=it[_t].image[ct].image;Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,0,0,te.width,te.height,Yt,zt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,Jt,te.width,te.height,0,Yt,zt,te.data)}}else{Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,zt,Vt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,Yt,zt,Vt[ct]);for(let _t=0;_t<it.length;_t++){const Xt=it[_t];Qt?S&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,0,0,Yt,zt,Xt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t+1,Jt,Yt,zt,Xt.image[ct])}}}m(A)&&f(i.TEXTURE_CUBE_MAP),ut.__version=vt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function C(P,A,Q,dt,vt,ut){const Ot=r.convert(Q.format,Q.colorSpace),yt=r.convert(Q.type),Lt=_(Q.internalFormat,Ot,yt,Q.colorSpace);if(!n.get(A).__hasExternalTextures){const wt=Math.max(1,A.width>>ut),Vt=Math.max(1,A.height>>ut);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,ut,Lt,wt,Vt,A.depth,0,Ot,yt,null):e.texImage2D(vt,ut,Lt,wt,Vt,0,Ot,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ot(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,vt,n.get(Q).__webglTexture,0,ht(A)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,vt,n.get(Q).__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(P,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const dt=A.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ut=x(A.stencilBuffer,vt),Ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ht(A);ot(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ut,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ut,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ut,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,P)}else{const dt=A.textures;for(let vt=0;vt<dt.length;vt++){const ut=dt[vt],Ot=r.convert(ut.format,ut.colorSpace),yt=r.convert(ut.type),Lt=_(ut.internalFormat,Ot,yt,ut.colorSpace),jt=ht(A);Q&&ot(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Lt,A.width,A.height):ot(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Lt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);const dt=n.get(A.depthTexture).__webglTexture,vt=ht(A);if(A.depthTexture.format===Mi)ot(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(A.depthTexture.format===Ti)ot(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function nt(P){const A=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");j(A.__webglFramebuffer,P)}else if(Q){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]=i.createRenderbuffer(),G(A.__webglDepthbuffer[dt],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),G(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,A,Q){const dt=n.get(P);A!==void 0&&C(dt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&nt(P)}function st(P){const A=P.texture,Q=n.get(P),dt=n.get(A);P.addEventListener("dispose",L);const vt=P.textures,ut=P.isWebGLCubeRenderTarget===!0,Ot=vt.length>1;if(Ot||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=A.version,s.memory.textures++),ut){Q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[yt]=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)Q.__webglFramebuffer[yt][Lt]=i.createFramebuffer()}else Q.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let yt=0;yt<A.mipmaps.length;yt++)Q.__webglFramebuffer[yt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let yt=0,Lt=vt.length;yt<Lt;yt++){const jt=n.get(vt[yt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),s.memory.textures++)}if(P.samples>0&&ot(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let yt=0;yt<vt.length;yt++){const Lt=vt[yt];Q.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[yt]);const jt=r.convert(Lt.format,Lt.colorSpace),wt=r.convert(Lt.type),Vt=_(Lt.internalFormat,jt,wt,Lt.colorSpace,P.isXRRenderTarget===!0),ee=ht(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Vt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),G(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),B(i.TEXTURE_CUBE_MAP,A);for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Lt=0;Lt<A.mipmaps.length;Lt++)C(Q.__webglFramebuffer[yt][Lt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt);else C(Q.__webglFramebuffer[yt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let yt=0,Lt=vt.length;yt<Lt;yt++){const jt=vt[yt],wt=n.get(jt);e.bindTexture(i.TEXTURE_2D,wt.__webglTexture),B(i.TEXTURE_2D,jt),C(Q.__webglFramebuffer,P,jt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,dt.__webglTexture),B(yt,A),A.mipmaps&&A.mipmaps.length>0)for(let Lt=0;Lt<A.mipmaps.length;Lt++)C(Q.__webglFramebuffer[Lt],P,A,i.COLOR_ATTACHMENT0,yt,Lt);else C(Q.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,yt,0);m(A)&&f(yt),e.unbindTexture()}P.depthBuffer&&nt(P)}function pt(P){const A=P.textures;for(let Q=0,dt=A.length;Q<dt;Q++){const vt=A[Q];if(m(vt)){const ut=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ot=n.get(vt).__webglTexture;e.bindTexture(ut,Ot),f(ut),e.unbindTexture()}}}const U=[],Tt=[];function Mt(P){if(P.samples>0){if(ot(P)===!1){const A=P.textures,Q=P.width,dt=P.height;let vt=i.COLOR_BUFFER_BIT;const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(P),yt=A.length>1;if(yt)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const jt=n.get(A[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,vt,i.NEAREST),c===!0&&(U.length=0,Tt.length=0,U.push(i.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(U.push(ut),Tt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const jt=n.get(A[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ht(P){return Math.min(a.maxSamples,P.samples)}function ot(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Kt(P){const A=s.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function At(P,A){const Q=P.colorSpace,dt=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Nn&&Q!==Rn&&(ve.getTransfer(Q)===Me?(dt!==en||vt!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=q,this.setupRenderTarget=st,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=C,this.useMultisampledRTT=ot}function Mp(i,t){function e(n,a=Rn){let r;const s=ve.getTransfer(a);if(n===yn)return i.UNSIGNED_BYTE;if(n===js)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===To)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ao)return i.BYTE;if(n===bo)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Ks)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===Co)return i.ALPHA;if(n===Ro)return i.RGB;if(n===en)return i.RGBA;if(n===Po)return i.LUMINANCE;if(n===Lo)return i.LUMINANCE_ALPHA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===Do)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===wr||n===Ar)if(s===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ys||n===Ms||n===Ss||n===Es)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ys)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ms)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ss)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Es)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ws||n===As||n===bs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ws||n===As)return s===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ts||n===Cs||n===Rs||n===Ps||n===Ls||n===Is||n===Ds||n===Ns||n===Us||n===Fs||n===Bs||n===Os||n===zs||n===Vs)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ts)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ps)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ls)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Is)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ds)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ns)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Us)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Os)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vs)return s===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Hs||n===ks)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return s===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hs)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ks)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Gs||n===Ws||n===Xs)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ws)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Sp extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xr extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ep={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),p=.02,v=.005;d.inputState.pinching&&u>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ap=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const a=new ze,r=t.properties.get(a);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:wp,fragmentShader:Ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $e(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends Jn{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,d=null,h=null,l=null,u=null,p=null,v=null;const g=new bp,m=e.getContextAttributes();let f=null,_=null;const x=[],y=[],R=new re;let L=null;const I=new qe;I.layers.enable(1),I.viewport=new Re;const N=new qe;N.layers.enable(2),N.viewport=new Re;const w=[I,N],M=new Sp;M.layers.enable(1),M.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let C=x[T];return C===void 0&&(C=new cs,x[T]=C),C.getTargetRaySpace()},this.getControllerGrip=function(T){let C=x[T];return C===void 0&&(C=new cs,x[T]=C),C.getGripSpace()},this.getHand=function(T){let C=x[T];return C===void 0&&(C=new cs,x[T]=C),C.getHandSpace()};function F(T){const C=y.indexOf(T.inputSource);if(C===-1)return;const G=x[C];G!==void 0&&(G.update(T.inputSource,T.frame,d||s),G.dispatchEvent({type:T.type,data:T.inputSource}))}function Y(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",X);for(let T=0;T<x.length;T++){const C=y[T];C!==null&&(y[T]=null,x[T].disconnect(C))}b=null,O=null,g.reset(),t.setRenderTarget(f),p=null,u=null,l=null,a=null,_=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(T){d=T},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(T){if(a=T,a!==null){if(f=t.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),a.renderState.layers===void 0){const C={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,C),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Kn(p.framebufferWidth,p.framebufferHeight,{format:en,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let C=null,G=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=m.stencil?Ti:Mi,G=m.stencil?bi:$n);const nt={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};l=new XRWebGLBinding(a,e),u=l.createProjectionLayer(nt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Kn(u.textureWidth,u.textureHeight,{format:en,type:yn,depthTexture:new Zo(u.textureWidth,u.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,s=await a.requestReferenceSpace(o),k.setContext(a),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(T){for(let C=0;C<T.removed.length;C++){const G=T.removed[C],j=y.indexOf(G);j>=0&&(y[j]=null,x[j].disconnect(G))}for(let C=0;C<T.added.length;C++){const G=T.added[C];let j=y.indexOf(G);if(j===-1){for(let q=0;q<x.length;q++)if(q>=y.length){y.push(G),j=q;break}else if(y[q]===null){y[q]=G,j=q;break}if(j===-1)break}const nt=x[j];nt&&nt.connect(G)}}const K=new at,V=new at;function D(T,C,G){K.setFromMatrixPosition(C.matrixWorld),V.setFromMatrixPosition(G.matrixWorld);const j=K.distanceTo(V),nt=C.projectionMatrix.elements,q=G.projectionMatrix.elements,st=nt[14]/(nt[10]-1),pt=nt[14]/(nt[10]+1),U=(nt[9]+1)/nt[5],Tt=(nt[9]-1)/nt[5],Mt=(nt[8]-1)/nt[0],ht=(q[8]+1)/q[0],ot=st*Mt,Kt=st*ht,At=j/(-Mt+ht),kt=At*-Mt;C.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(kt),T.translateZ(At),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const P=st+At,A=pt+At,Q=ot-kt,dt=Kt+(j-kt),vt=U*pt/A*P,ut=Tt*pt/A*P;T.projectionMatrix.makePerspective(Q,dt,vt,ut,P,A),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function et(T,C){C===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(C.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(a===null)return;g.texture!==null&&(T.near=g.depthNear,T.far=g.depthFar),M.near=N.near=I.near=T.near,M.far=N.far=I.far=T.far,(b!==M.near||O!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,O=M.far,I.near=b,I.far=O,N.near=b,N.far=O,I.updateProjectionMatrix(),N.updateProjectionMatrix(),T.updateProjectionMatrix());const C=T.parent,G=M.cameras;et(M,C);for(let j=0;j<G.length;j++)et(G[j],C);G.length===2?D(M,I,N):M.projectionMatrix.copy(I.projectionMatrix),Z(T,M,C)};function Z(T,C,G){G===null?T.matrix.copy(C.matrixWorld):(T.matrix.copy(G.matrixWorld),T.matrix.invert(),T.matrix.multiply(C.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=ki*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(T){c=T,u!==null&&(u.fixedFoveation=T),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let B=null;function J(T,C){if(h=C.getViewerPose(d||s),v=C,h!==null){const G=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let j=!1;G.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let q=0;q<G.length;q++){const st=G[q];let pt=null;if(p!==null)pt=p.getViewport(st);else{const Tt=l.getViewSubImage(u,st);pt=Tt.viewport,q===0&&(t.setRenderTargetTextures(_,Tt.colorTexture,u.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(_))}let U=w[q];U===void 0&&(U=new qe,U.layers.enable(q),U.viewport=new Re,w[q]=U),U.matrix.fromArray(st.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(st.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(pt.x,pt.y,pt.width,pt.height),q===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(U)}const nt=a.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const q=l.getDepthInformation(G[0]);q&&q.isValid&&q.texture&&g.init(t,q,a.renderState)}}for(let G=0;G<x.length;G++){const j=y[G],nt=x[G];j!==null&&nt!==void 0&&nt.update(j,C,d||s)}B&&B(T,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const k=new Ko;k.setAnimationLoop(J),this.setAnimationLoop=function(T){B=T},this.dispose=function(){}}}const kn=new cn,Cp=new be;function Rp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,_,x):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,kn.copy(y),kn.x*=-1,kn.y*=-1,kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(kn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Pp(i,t,e,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function d(_,x){let y=a[_.id];y===void 0&&(v(_),y=h(_),a[_.id]=y,_.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(_,R);const L=t.render.frame;r[_.id]!==L&&(u(_),r[_.id]=L)}function h(_){const x=l();_.__bindingPointIndex=x;const y=i.createBuffer(),R=_.__size,L=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function l(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=a[_.id],y=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let L=0,I=y.length;L<I;L++){const N=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,M=N.length;w<M;w++){const b=N[w];if(p(b,L,w,R)===!0){const O=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let X=0;X<F.length;X++){const K=F[X],V=g(K);typeof K=="number"||typeof K=="boolean"?(b.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,b.__data)):K.isMatrix3?(b.__data[0]=K.elements[0],b.__data[1]=K.elements[1],b.__data[2]=K.elements[2],b.__data[3]=0,b.__data[4]=K.elements[3],b.__data[5]=K.elements[4],b.__data[6]=K.elements[5],b.__data[7]=0,b.__data[8]=K.elements[6],b.__data[9]=K.elements[7],b.__data[10]=K.elements[8],b.__data[11]=0):(K.toArray(b.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,y,R){const L=_.value,I=x+"_"+y;if(R[I]===void 0)return typeof L=="number"||typeof L=="boolean"?R[I]=L:R[I]=L.clone(),!0;{const N=R[I];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return R[I]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function v(_){const x=_.uniforms;let y=0;const R=16;for(let I=0,N=x.length;I<N;I++){const w=Array.isArray(x[I])?x[I]:[x[I]];for(let M=0,b=w.length;M<b;M++){const O=w[M],F=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,X=F.length;Y<X;Y++){const K=F[Y],V=g(K),D=y%R;D!==0&&R-D<V.boundary&&(y+=R-D),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=V.storage}}}const L=y%R;return L>0&&(y+=R-L),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function f(){for(const _ in a)i.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:c,update:d,dispose:f}}class Lp{constructor(t={}){const{canvas:e=Mc(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let y=!1,R=0,L=0,I=null,N=-1,w=null;const M=new Re,b=new Re;let O=null;const F=new pe(0);let Y=0,X=e.width,K=e.height,V=1,D=null,et=null;const Z=new Re(0,0,X,K),B=new Re(0,0,X,K);let J=!1;const k=new sa;let T=!1,C=!1;const G=new be,j=new at,nt=new Re,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function pt(){return I===null?V:1}let U=n;function Tt(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$s}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){const H="webgl2";if(U=Tt(H,E),U===null)throw Tt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,ht,ot,Kt,At,kt,P,A,Q,dt,vt,ut,Ot,yt,Lt,jt,wt,Vt,ee,Yt,zt,Jt,Qt,de;function S(){Mt=new Bd(U),Mt.init(),Jt=new Mp(U,Mt),ht=new Ld(U,Mt,t,Jt),ot=new _p(U),Kt=new Vd(U),At=new rp,kt=new yp(U,Mt,ot,At,ht,Jt,Kt),P=new Dd(x),A=new Fd(x),Q=new Yc(U),Qt=new Rd(U,Q),dt=new Od(U,Q,Kt,Qt),vt=new kd(U,dt,Q,Kt),ee=new Hd(U,ht,kt),jt=new Id(At),ut=new ip(x,P,A,Mt,ht,Qt,jt),Ot=new Rp(x,At),yt=new ap,Lt=new dp(Mt),Vt=new Cd(x,P,A,ot,vt,u,c),wt=new gp(x,vt,ht),de=new Pp(U,Kt,ht,ot),Yt=new Pd(U,Mt,Kt),zt=new zd(U,Mt,Kt),Kt.programs=ut.programs,x.capabilities=ht,x.extensions=Mt,x.properties=At,x.renderLists=yt,x.shadowMap=wt,x.state=ot,x.info=Kt}S();const tt=new Tp(x,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(X,K,!1))},this.getSize=function(E){return E.set(X,K)},this.setSize=function(E,H,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,K=H,e.width=Math.floor(E*V),e.height=Math.floor(H*V),$===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(X*V,K*V).floor()},this.setDrawingBufferSize=function(E,H,$){X=E,K=H,V=$,e.width=Math.floor(E*$),e.height=Math.floor(H*$),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,H,$,z){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,H,$,z),ot.viewport(M.copy(Z).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(B)},this.setScissor=function(E,H,$,z){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,H,$,z),ot.scissor(b.copy(B).multiplyScalar(V).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){ot.setScissorTest(J=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(E=!0,H=!0,$=!0){let z=0;if(E){let W=!1;if(I!==null){const mt=I.texture.format;W=mt===ta||mt===Qs||mt===Js}if(W){const mt=I.texture.type,Ct=mt===yn||mt===$n||mt===Hi||mt===bi||mt===js||mt===Zs,St=Vt.getClearColor(),bt=Vt.getClearAlpha(),Et=St.r,$t=St.g,qt=St.b;Ct?(p[0]=Et,p[1]=$t,p[2]=qt,p[3]=bt,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=Et,v[1]=$t,v[2]=qt,v[3]=bt,U.clearBufferiv(U.COLOR,0,v))}else z|=U.COLOR_BUFFER_BIT}H&&(z|=U.DEPTH_BUFFER_BIT),$&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),Lt.dispose(),At.dispose(),P.dispose(),A.dispose(),vt.dispose(),Qt.dispose(),de.dispose(),ut.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",lt),tt.removeEventListener("sessionend",ft),gt.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Kt.autoReset,H=wt.enabled,$=wt.autoUpdate,z=wt.needsUpdate,W=wt.type;S(),Kt.autoReset=E,wt.enabled=H,wt.autoUpdate=$,wt.needsUpdate=z,wt.type=W}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const H=E.target;H.removeEventListener("dispose",Xt),te(H)}function te(E){me(E),At.remove(E)}function me(E){const H=At.get(E).programs;H!==void 0&&(H.forEach(function($){ut.releaseProgram($)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,$,z,W,mt){H===null&&(H=q);const Ct=W.isMesh&&W.matrixWorld.determinant()<0,St=Gt(E,H,$,z,W);ot.setMaterial(z,Ct);let bt=$.index,Et=1;if(z.wireframe===!0){if(bt=dt.getWireframeAttribute($),bt===void 0)return;Et=2}const $t=$.drawRange,qt=$.attributes.position;let ne=$t.start*Et,fe=($t.start+$t.count)*Et;mt!==null&&(ne=Math.max(ne,mt.start*Et),fe=Math.min(fe,(mt.start+mt.count)*Et)),bt!==null?(ne=Math.max(ne,0),fe=Math.min(fe,bt.count)):qt!=null&&(ne=Math.max(ne,0),fe=Math.min(fe,qt.count));const ue=fe-ne;if(ue<0||ue===1/0)return;Qt.setup(W,z,St,$,bt);let se,oe=Yt;if(bt!==null&&(se=Q.get(bt),oe=zt,oe.setIndex(se)),W.isMesh)z.wireframe===!0?(ot.setLineWidth(z.wireframeLinewidth*pt()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(W.isLine){let Bt=z.linewidth;Bt===void 0&&(Bt=1),ot.setLineWidth(Bt*pt()),W.isLineSegments?oe.setMode(U.LINES):W.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else W.isPoints?oe.setMode(U.POINTS):W.isSprite&&oe.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)oe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Bt=W._multiDrawStarts,_e=W._multiDrawCounts,ie=W._multiDrawCount,ge=bt?Q.get(bt).bytesPerElement:1,Se=At.get(z).currentProgram.getUniforms();for(let ye=0;ye<ie;ye++)Se.setValue(U,"_gl_DrawID",ye),oe.render(Bt[ye]/ge,_e[ye])}else if(W.isInstancedMesh)oe.renderInstances(ne,ue,W.count);else if($.isInstancedBufferGeometry){const Bt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_e=Math.min($.instanceCount,Bt);oe.renderInstances(ne,ue,_e)}else oe.render(ne,ue)};function xe(E,H,$){E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,rt(E,H,$),E.side=In,E.needsUpdate=!0,rt(E,H,$),E.side=gn):rt(E,H,$)}this.compile=function(E,H,$=null){$===null&&($=E),m=Lt.get($),m.init(H),_.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const z=new Set;return E.traverse(function(W){const mt=W.material;if(mt)if(Array.isArray(mt))for(let Ct=0;Ct<mt.length;Ct++){const St=mt[Ct];xe(St,$,W),z.add(St)}else xe(mt,$,W),z.add(mt)}),_.pop(),m=null,z},this.compileAsync=function(E,H,$=null){const z=this.compile(E,H,$);return new Promise(W=>{function mt(){if(z.forEach(function(Ct){At.get(Ct).currentProgram.isReady()&&z.delete(Ct)}),z.size===0){W(E);return}setTimeout(mt,10)}Mt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ae=null;function he(E){ae&&ae(E)}function lt(){gt.stop()}function ft(){gt.start()}const gt=new Ko;gt.setAnimationLoop(he),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(E){ae=E,tt.setAnimationLoop(E),E===null?gt.stop():gt.start()},tt.addEventListener("sessionstart",lt),tt.addEventListener("sessionend",ft),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,I),m=Lt.get(E,_.length),m.init(H),_.push(m),G.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),k.setFromProjectionMatrix(G),C=this.localClippingEnabled,T=jt.init(this.clippingPlanes,C),g=yt.get(E,f.length),g.init(),f.push(g),tt.enabled===!0&&tt.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&xt(mt,H,-1/0,x.sortObjects)}xt(E,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(D,et),st=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,st&&Vt.addToRenderList(g,E),this.info.render.frame++,T===!0&&jt.beginShadows();const $=m.state.shadowsArray;wt.render($,E,H),T===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,W=g.transmissive;if(m.setupLights(),H.isArrayCamera){const mt=H.cameras;if(W.length>0)for(let Ct=0,St=mt.length;Ct<St;Ct++){const bt=mt[Ct];Nt(z,W,E,bt)}st&&Vt.render(E);for(let Ct=0,St=mt.length;Ct<St;Ct++){const bt=mt[Ct];Zt(g,E,bt,bt.viewport)}}else W.length>0&&Nt(z,W,E,H),st&&Vt.render(E),Zt(g,E,H);I!==null&&(kt.updateMultisampleRenderTarget(I),kt.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,H),Qt.resetDefaultState(),N=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],T===!0&&jt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function xt(E,H,$,z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){z&&nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Ct=vt.update(E),St=E.material;St.visible&&g.push(E,Ct,St,$,nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const Ct=vt.update(E),St=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),nt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),nt.copy(Ct.boundingSphere.center)),nt.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(St)){const bt=Ct.groups;for(let Et=0,$t=bt.length;Et<$t;Et++){const qt=bt[Et],ne=St[qt.materialIndex];ne&&ne.visible&&g.push(E,Ct,ne,$,nt.z,qt)}}else St.visible&&g.push(E,Ct,St,$,nt.z,null)}}const mt=E.children;for(let Ct=0,St=mt.length;Ct<St;Ct++)xt(mt[Ct],H,$,z)}function Zt(E,H,$,z){const W=E.opaque,mt=E.transmissive,Ct=E.transparent;m.setupLightsView($),T===!0&&jt.setGlobalState(x.clippingPlanes,$),z&&ot.viewport(M.copy(z)),W.length>0&&Rt(W,H,$),mt.length>0&&Rt(mt,H,$),Ct.length>0&&Rt(Ct,H,$),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Nt(E,H,$,z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Kn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?qi:yn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const mt=m.state.transmissionRenderTarget[z.id],Ct=z.viewport||M;mt.setSize(Ct.z,Ct.w);const St=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(F),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),st?Vt.render($):x.clear();const bt=x.toneMapping;x.toneMapping=Ln;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),T===!0&&jt.setGlobalState(x.clippingPlanes,z),Rt(E,$,z),kt.updateMultisampleRenderTarget(mt),kt.updateRenderTargetMipmap(mt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let qt=0,ne=H.length;qt<ne;qt++){const fe=H[qt],ue=fe.object,se=fe.geometry,oe=fe.material,Bt=fe.group;if(oe.side===gn&&ue.layers.test(z.layers)){const _e=oe.side;oe.side=He,oe.needsUpdate=!0,Ut(ue,$,z,se,oe,Bt),oe.side=_e,oe.needsUpdate=!0,$t=!0}}$t===!0&&(kt.updateMultisampleRenderTarget(mt),kt.updateRenderTargetMipmap(mt))}x.setRenderTarget(St),x.setClearColor(F,Y),Et!==void 0&&(z.viewport=Et),x.toneMapping=bt}function Rt(E,H,$){const z=H.isScene===!0?H.overrideMaterial:null;for(let W=0,mt=E.length;W<mt;W++){const Ct=E[W],St=Ct.object,bt=Ct.geometry,Et=z===null?Ct.material:z,$t=Ct.group;St.layers.test($.layers)&&Ut(St,H,$,bt,Et,$t)}}function Ut(E,H,$,z,W,mt){E.onBeforeRender(x,H,$,z,W,mt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.transparent===!0&&W.side===gn&&W.forceSinglePass===!1?(W.side=He,W.needsUpdate=!0,x.renderBufferDirect($,H,z,W,E,mt),W.side=In,W.needsUpdate=!0,x.renderBufferDirect($,H,z,W,E,mt),W.side=gn):x.renderBufferDirect($,H,z,W,E,mt),E.onAfterRender(x,H,$,z,W,mt)}function rt(E,H,$){H.isScene!==!0&&(H=q);const z=At.get(E),W=m.state.lights,mt=m.state.shadowsArray,Ct=W.state.version,St=ut.getParameters(E,W.state,mt,H,$),bt=ut.getProgramCacheKey(St);let Et=z.programs;z.environment=E.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(E.isMeshStandardMaterial?A:P).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Xt),Et=new Map,z.programs=Et);let $t=Et.get(bt);if($t!==void 0){if(z.currentProgram===$t&&z.lightsStateVersion===Ct)return Ft(E,St),$t}else St.uniforms=ut.getUniforms(E),E.onBeforeCompile(St,x),$t=ut.acquireProgram(St,bt),Et.set(bt,$t),z.uniforms=St.uniforms;const qt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qt.clippingPlanes=jt.uniform),Ft(E,St),z.needsLights=Pt(E),z.lightsStateVersion=Ct,z.needsLights&&(qt.ambientLightColor.value=W.state.ambient,qt.lightProbe.value=W.state.probe,qt.directionalLights.value=W.state.directional,qt.directionalLightShadows.value=W.state.directionalShadow,qt.spotLights.value=W.state.spot,qt.spotLightShadows.value=W.state.spotShadow,qt.rectAreaLights.value=W.state.rectArea,qt.ltc_1.value=W.state.rectAreaLTC1,qt.ltc_2.value=W.state.rectAreaLTC2,qt.pointLights.value=W.state.point,qt.pointLightShadows.value=W.state.pointShadow,qt.hemisphereLights.value=W.state.hemi,qt.directionalShadowMap.value=W.state.directionalShadowMap,qt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qt.spotShadowMap.value=W.state.spotShadowMap,qt.spotLightMatrix.value=W.state.spotLightMatrix,qt.spotLightMap.value=W.state.spotLightMap,qt.pointShadowMap.value=W.state.pointShadowMap,qt.pointShadowMatrix.value=W.state.pointShadowMatrix),z.currentProgram=$t,z.uniformsList=null,$t}function It(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Tr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Ft(E,H){const $=At.get(E);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Gt(E,H,$,z,W){H.isScene!==!0&&(H=q),kt.resetTextureUnits();const mt=H.fog,Ct=z.isMeshStandardMaterial?H.environment:null,St=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Nn,bt=(z.isMeshStandardMaterial?A:P).get(z.envMap||Ct),Et=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$t=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),qt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color;let ue=Ln;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=x.toneMapping);const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=se!==void 0?se.length:0,Bt=At.get(z),_e=m.state.lights;if(T===!0&&(C===!0||E!==w)){const Te=E===w&&z.id===N;jt.setState(z,E,Te)}let ie=!1;z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==_e.state.version||Bt.outputColorSpace!==St||W.isBatchedMesh&&Bt.batching===!1||!W.isBatchedMesh&&Bt.batching===!0||W.isBatchedMesh&&Bt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Bt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||W.isInstancedMesh&&Bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Bt.instancingMorph===!1&&W.morphTexture!==null||Bt.envMap!==bt||z.fog===!0&&Bt.fog!==mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==jt.numPlanes||Bt.numIntersection!==jt.numIntersection)||Bt.vertexAlphas!==Et||Bt.vertexTangents!==$t||Bt.morphTargets!==qt||Bt.morphNormals!==ne||Bt.morphColors!==fe||Bt.toneMapping!==ue||Bt.morphTargetsCount!==oe)&&(ie=!0):(ie=!0,Bt.__version=z.version);let ge=Bt.currentProgram;ie===!0&&(ge=rt(z,H,W));let Se=!1,ye=!1,ke=!1;const Wt=ge.getUniforms(),we=Bt.uniforms;if(ot.useProgram(ge.program)&&(Se=!0,ye=!0,ke=!0),z.id!==N&&(N=z.id,ye=!0),Se||w!==E){Wt.setValue(U,"projectionMatrix",E.projectionMatrix),Wt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Te=Wt.map.cameraPosition;Te!==void 0&&Te.setValue(U,j.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&Wt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Wt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,ye=!0,ke=!0)}if(W.isSkinnedMesh){Wt.setOptional(U,W,"bindMatrix"),Wt.setOptional(U,W,"bindMatrixInverse");const Te=W.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Wt.setValue(U,"boneTexture",Te.boneTexture,kt))}W.isBatchedMesh&&(Wt.setOptional(U,W,"batchingTexture"),Wt.setValue(U,"batchingTexture",W._matricesTexture,kt),Wt.setOptional(U,W,"batchingIdTexture"),Wt.setValue(U,"batchingIdTexture",W._indirectTexture,kt),Wt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Wt.setValue(U,"batchingColorTexture",W._colorsTexture,kt));const Ae=$.morphAttributes;if((Ae.position!==void 0||Ae.normal!==void 0||Ae.color!==void 0)&&ee.update(W,$,ge),(ye||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,Wt.setValue(U,"receiveShadow",W.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(we.envMap.value=bt,we.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&H.environment!==null&&(we.envMapIntensity.value=H.environmentIntensity),ye&&(Wt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Dt(we,ke),mt&&z.fog===!0&&Ot.refreshFogUniforms(we,mt),Ot.refreshMaterialUniforms(we,z,V,K,m.state.transmissionRenderTarget[E.id]),Tr.upload(U,It(Bt),we,kt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Tr.upload(U,It(Bt),we,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Wt.setValue(U,"center",W.center),Wt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Wt.setValue(U,"normalMatrix",W.normalMatrix),Wt.setValue(U,"modelMatrix",W.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Te=z.uniformsGroups;for(let Ke=0,Br=Te.length;Ke<Br;Ke++){const ji=Te[Ke];de.update(ji,ge),de.bind(ji,ge)}}return ge}function Dt(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Pt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,H,$){At.get(E.texture).__webglTexture=H,At.get(E.depthTexture).__webglTexture=$;const z=At.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=$===void 0,z.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const $=At.get(E);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,$=0){I=E,R=H,L=$;let z=!0,W=null,mt=!1,Ct=!1;if(E){const bt=At.get(E);bt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):bt.__webglFramebuffer===void 0?kt.setupRenderTarget(E):bt.__hasExternalTextures&&kt.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Ct=!0);const $t=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[H])?W=$t[H][$]:W=$t[H],mt=!0):E.samples>0&&kt.useMultisampledRTT(E)===!1?W=At.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?W=$t[$]:W=$t,M.copy(E.viewport),b.copy(E.scissor),O=E.scissorTest}else M.copy(Z).multiplyScalar(V).floor(),b.copy(B).multiplyScalar(V).floor(),O=J;if(ot.bindFramebuffer(U.FRAMEBUFFER,W)&&z&&ot.drawBuffers(E,W),ot.viewport(M),ot.scissor(b),ot.setScissorTest(O),mt){const bt=At.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,$)}else if(Ct){const bt=At.get(E.texture),Et=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,$||0,Et)}N=-1},this.readRenderTargetPixels=function(E,H,$,z,W,mt,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(St=St[Ct]),St){ot.bindFramebuffer(U.FRAMEBUFFER,St);try{const bt=E.texture,Et=bt.format,$t=bt.type;if(!ht.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-z&&$>=0&&$<=E.height-W&&U.readPixels(H,$,z,W,Jt.convert(Et),Jt.convert($t),mt)}finally{const bt=I!==null?At.get(I).__webglFramebuffer:null;ot.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,H,$,z,W,mt,Ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(St=St[Ct]),St){ot.bindFramebuffer(U.FRAMEBUFFER,St);try{const bt=E.texture,Et=bt.format,$t=bt.type;if(!ht.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-z&&$>=0&&$<=E.height-W){const qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(H,$,z,W,Jt.convert(Et),Jt.convert($t),0),U.flush();const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Sc(U,ne,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt)}finally{U.deleteBuffer(qt),U.deleteSync(ne)}return mt}}finally{const bt=I!==null?At.get(I).__webglFramebuffer:null;ot.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(E,H=null,$=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-$),W=Math.floor(E.image.width*z),mt=Math.floor(E.image.height*z),Ct=H!==null?H.x:0,St=H!==null?H.y:0;kt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ct,St,W,mt),ot.unbindTexture()},this.copyTextureToTexture=function(E,H,$=null,z=null,W=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],H=arguments[2],W=arguments[3]||0,$=null);let mt,Ct,St,bt,Et,$t;$!==null?(mt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,St=$.min.x,bt=$.min.y):(mt=E.image.width,Ct=E.image.height,St=0,bt=0),z!==null?(Et=z.x,$t=z.y):(Et=0,$t=0);const qt=Jt.convert(H.format),ne=Jt.convert(H.type);kt.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const fe=U.getParameter(U.UNPACK_ROW_LENGTH),ue=U.getParameter(U.UNPACK_IMAGE_HEIGHT),se=U.getParameter(U.UNPACK_SKIP_PIXELS),oe=U.getParameter(U.UNPACK_SKIP_ROWS),Bt=U.getParameter(U.UNPACK_SKIP_IMAGES),_e=E.isCompressedTexture?E.mipmaps[W]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Et,$t,mt,Ct,qt,ne,_e.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Et,$t,_e.width,_e.height,qt,_e.data):U.texSubImage2D(U.TEXTURE_2D,W,Et,$t,mt,Ct,qt,ne,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),U.pixelStorei(U.UNPACK_SKIP_PIXELS,se),U.pixelStorei(U.UNPACK_SKIP_ROWS,oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt),W===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(E,H,$=null,z=null,W=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,z=arguments[1]||null,E=arguments[2],H=arguments[3],W=arguments[4]||0);let mt,Ct,St,bt,Et,$t,qt,ne,fe;const ue=E.isCompressedTexture?E.mipmaps[W]:E.image;$!==null?(mt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,St=$.max.z-$.min.z,bt=$.min.x,Et=$.min.y,$t=$.min.z):(mt=ue.width,Ct=ue.height,St=ue.depth,bt=0,Et=0,$t=0),z!==null?(qt=z.x,ne=z.y,fe=z.z):(qt=0,ne=0,fe=0);const se=Jt.convert(H.format),oe=Jt.convert(H.type);let Bt;if(H.isData3DTexture)kt.setTexture3D(H,0),Bt=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)kt.setTexture2DArray(H,0),Bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const _e=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ge=U.getParameter(U.UNPACK_SKIP_PIXELS),Se=U.getParameter(U.UNPACK_SKIP_ROWS),ye=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Bt,W,qt,ne,fe,mt,Ct,St,se,oe,ue.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Bt,W,qt,ne,fe,mt,Ct,St,se,ue.data):U.texSubImage3D(Bt,W,qt,ne,fe,mt,Ct,St,se,oe,ue),U.pixelStorei(U.UNPACK_ROW_LENGTH,_e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ye),W===0&&H.generateMipmaps&&U.generateMipmap(Bt),ot.unbindTexture()},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&kt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?kt.setTextureCube(E,0):E.isData3DTexture?kt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?kt.setTexture2DArray(E,0):kt.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){R=0,L=0,I=null,ot.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ea?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===Nr?"display-p3":"srgb"}}class Ip extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oa extends Un{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let d=0;const h=[],l=new at,u=new at,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let y=0;f===0&&s===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const L=R/e;l.x=-t*Math.cos(a+L*r)*Math.sin(s+x*o),l.y=t*Math.cos(s+x*o),l.z=t*Math.sin(a+L*r)*Math.sin(s+x*o),v.push(l.x,l.y,l.z),u.copy(l).normalize(),g.push(u.x,u.y,u.z),m.push(L+y,1-x),_.push(d++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=h[f][_+1],y=h[f][_],R=h[f+1][_],L=h[f+1][_+1];(f!==0||s>0)&&p.push(x,y,L),(f!==n-1||c<Math.PI)&&p.push(y,R,L)}this.setIndex(p),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ho={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dp{constructor(t,e,n){const a=this;let r=!1,s=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return d.push(h,l),this},this.removeHandler=function(h){const l=d.indexOf(h);return l!==-1&&d.splice(l,2),this},this.getHandler=function(h){for(let l=0,u=d.length;l<u;l+=2){const p=d[l],v=d[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Np=new Dp;class Fr{constructor(t){this.manager=t!==void 0?t:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";class nl extends Fr{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ho.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=Gi("img");function c(){h(),ho.add(t,this),e&&e(this),r.manager.itemEnd(t)}function d(l){h(),a&&a(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Up extends Fr{constructor(t){super(t)}load(t,e,n,a){const r=new ra;r.colorSpace=Qe;const s=new nl(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function c(d){s.load(t[d],function(h){r.images[d]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,a)}for(let d=0;d<t.length;++d)c(d);return r}}class Fp extends Fr{constructor(t){super(t)}load(t,e,n,a){const r=new ze,s=new nl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class il extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const hs=new be,uo=new at,fo=new at;class Bp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(uo),fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fo),e.updateMatrixWorld(),hs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Op extends Bp{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vp extends il{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=po(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=po();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function po(){return(typeof performance>"u"?Date:performance).now()}class mo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);const vo={type:"change"},us={type:"start"},go={type:"end"},yr=new Ho,_o=new Cn,kp=Math.cos(70*yc.DEG2RAD);class Gp extends Jn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new at,this.cursor=new at,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Lt),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vo),n.update(),r=a.NONE},this.update=function(){const S=new at,tt=new jn().setFromUnitVectors(t.up,new at(0,1,0)),it=tt.clone().invert(),ct=new at,_t=new jn,Xt=new at,te=2*Math.PI;return function(xe=null){const ae=n.object.position;S.copy(ae).sub(n.target),S.applyQuaternion(tt),o.setFromVector3(S),n.autoRotate&&r===a.NONE&&O(M(xe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let he=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(he)&&isFinite(lt)&&(he<-Math.PI?he+=te:he>Math.PI&&(he-=te),lt<-Math.PI?lt+=te:lt>Math.PI&&(lt-=te),he<=lt?o.theta=Math.max(he,Math.min(lt,o.theta)):o.theta=o.theta>(he+lt)/2?Math.max(he,o.theta):Math.min(lt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ft=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)o.radius=Z(o.radius);else{const gt=o.radius;o.radius=Z(o.radius*d),ft=gt!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(it),ae.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&L){let gt=null;if(n.object.isPerspectiveCamera){const xt=S.length();gt=Z(xt*d);const Zt=xt-gt;n.object.position.addScaledVector(y,Zt),n.object.updateMatrixWorld(),ft=!!Zt}else if(n.object.isOrthographicCamera){const xt=new at(R.x,R.y,0);xt.unproject(n.object);const Zt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),ft=Zt!==n.object.zoom;const Nt=new at(R.x,R.y,0);Nt.unproject(n.object),n.object.position.sub(Nt).add(xt),n.object.updateMatrixWorld(),gt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;gt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(gt).add(n.object.position):(yr.origin.copy(n.object.position),yr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(yr.direction))<kp?t.lookAt(n.target):(_o.setFromNormalAndCoplanarPoint(n.object.up,n.target),yr.intersectPlane(_o,n.target))))}else if(n.object.isOrthographicCamera){const gt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),gt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ft=!0)}return d=1,L=!1,ft||ct.distanceToSquared(n.object.position)>s||8*(1-_t.dot(n.object.quaternion))>s||Xt.distanceToSquared(n.target)>s?(n.dispatchEvent(vo),ct.copy(n.object.position),_t.copy(n.object.quaternion),Xt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Vt),n.domElement.removeEventListener("pointerdown",kt),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",vt),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",Ot,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Lt),n._domElementKeyEvents=null)};const n=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=a.NONE;const s=1e-6,o=new mo,c=new mo;let d=1;const h=new at,l=new re,u=new re,p=new re,v=new re,g=new re,m=new re,f=new re,_=new re,x=new re,y=new at,R=new re;let L=!1;const I=[],N={};let w=!1;function M(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function b(S){const tt=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*tt)}function O(S){c.theta-=S}function F(S){c.phi-=S}const Y=function(){const S=new at;return function(it,ct){S.setFromMatrixColumn(ct,0),S.multiplyScalar(-it),h.add(S)}}(),X=function(){const S=new at;return function(it,ct){n.screenSpacePanning===!0?S.setFromMatrixColumn(ct,1):(S.setFromMatrixColumn(ct,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(it),h.add(S)}}(),K=function(){const S=new at;return function(it,ct){const _t=n.domElement;if(n.object.isPerspectiveCamera){const Xt=n.object.position;S.copy(Xt).sub(n.target);let te=S.length();te*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*it*te/_t.clientHeight,n.object.matrix),X(2*ct*te/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(it*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),X(ct*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(S,tt){if(!n.zoomToCursor)return;L=!0;const it=n.domElement.getBoundingClientRect(),ct=S-it.left,_t=tt-it.top,Xt=it.width,te=it.height;R.x=ct/Xt*2-1,R.y=-(_t/te)*2+1,y.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function B(S){l.set(S.clientX,S.clientY)}function J(S){et(S.clientX,S.clientX),f.set(S.clientX,S.clientY)}function k(S){v.set(S.clientX,S.clientY)}function T(S){u.set(S.clientX,S.clientY),p.subVectors(u,l).multiplyScalar(n.rotateSpeed);const tt=n.domElement;O(2*Math.PI*p.x/tt.clientHeight),F(2*Math.PI*p.y/tt.clientHeight),l.copy(u),n.update()}function C(S){_.set(S.clientX,S.clientY),x.subVectors(_,f),x.y>0?V(b(x.y)):x.y<0&&D(b(x.y)),f.copy(_),n.update()}function G(S){g.set(S.clientX,S.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),K(m.x,m.y),v.copy(g),n.update()}function j(S){et(S.clientX,S.clientY),S.deltaY<0?D(b(S.deltaY)):S.deltaY>0&&V(b(S.deltaY)),n.update()}function nt(S){let tt=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),tt=!0;break}tt&&(S.preventDefault(),n.update())}function q(S){if(I.length===1)l.set(S.pageX,S.pageY);else{const tt=Qt(S),it=.5*(S.pageX+tt.x),ct=.5*(S.pageY+tt.y);l.set(it,ct)}}function st(S){if(I.length===1)v.set(S.pageX,S.pageY);else{const tt=Qt(S),it=.5*(S.pageX+tt.x),ct=.5*(S.pageY+tt.y);v.set(it,ct)}}function pt(S){const tt=Qt(S),it=S.pageX-tt.x,ct=S.pageY-tt.y,_t=Math.sqrt(it*it+ct*ct);f.set(0,_t)}function U(S){n.enableZoom&&pt(S),n.enablePan&&st(S)}function Tt(S){n.enableZoom&&pt(S),n.enableRotate&&q(S)}function Mt(S){if(I.length==1)u.set(S.pageX,S.pageY);else{const it=Qt(S),ct=.5*(S.pageX+it.x),_t=.5*(S.pageY+it.y);u.set(ct,_t)}p.subVectors(u,l).multiplyScalar(n.rotateSpeed);const tt=n.domElement;O(2*Math.PI*p.x/tt.clientHeight),F(2*Math.PI*p.y/tt.clientHeight),l.copy(u)}function ht(S){if(I.length===1)g.set(S.pageX,S.pageY);else{const tt=Qt(S),it=.5*(S.pageX+tt.x),ct=.5*(S.pageY+tt.y);g.set(it,ct)}m.subVectors(g,v).multiplyScalar(n.panSpeed),K(m.x,m.y),v.copy(g)}function ot(S){const tt=Qt(S),it=S.pageX-tt.x,ct=S.pageY-tt.y,_t=Math.sqrt(it*it+ct*ct);_.set(0,_t),x.set(0,Math.pow(_.y/f.y,n.zoomSpeed)),V(x.y),f.copy(_);const Xt=(S.pageX+tt.x)*.5,te=(S.pageY+tt.y)*.5;et(Xt,te)}function Kt(S){n.enableZoom&&ot(S),n.enablePan&&ht(S)}function At(S){n.enableZoom&&ot(S),n.enableRotate&&Mt(S)}function kt(S){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",A)),!zt(S)&&(ee(S),S.pointerType==="touch"?jt(S):Q(S)))}function P(S){n.enabled!==!1&&(S.pointerType==="touch"?wt(S):dt(S))}function A(S){switch(Yt(S),I.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent(go),r=a.NONE;break;case 1:const tt=I[0],it=N[tt];jt({pointerId:tt,pageX:it.x,pageY:it.y});break}}function Q(S){let tt;switch(S.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case Qn.DOLLY:if(n.enableZoom===!1)return;J(S),r=a.DOLLY;break;case Qn.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;k(S),r=a.PAN}else{if(n.enableRotate===!1)return;B(S),r=a.ROTATE}break;case Qn.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;B(S),r=a.ROTATE}else{if(n.enablePan===!1)return;k(S),r=a.PAN}break;default:r=a.NONE}r!==a.NONE&&n.dispatchEvent(us)}function dt(S){switch(r){case a.ROTATE:if(n.enableRotate===!1)return;T(S);break;case a.DOLLY:if(n.enableZoom===!1)return;C(S);break;case a.PAN:if(n.enablePan===!1)return;G(S);break}}function vt(S){n.enabled===!1||n.enableZoom===!1||r!==a.NONE||(S.preventDefault(),n.dispatchEvent(us),j(ut(S)),n.dispatchEvent(go))}function ut(S){const tt=S.deltaMode,it={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(tt){case 1:it.deltaY*=16;break;case 2:it.deltaY*=100;break}return S.ctrlKey&&!w&&(it.deltaY*=10),it}function Ot(S){S.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",yt,{passive:!0,capture:!0}))}function yt(S){S.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",yt,{passive:!0,capture:!0}))}function Lt(S){n.enabled===!1||n.enablePan===!1||nt(S)}function jt(S){switch(Jt(S),I.length){case 1:switch(n.touches.ONE){case ti.ROTATE:if(n.enableRotate===!1)return;q(S),r=a.TOUCH_ROTATE;break;case ti.PAN:if(n.enablePan===!1)return;st(S),r=a.TOUCH_PAN;break;default:r=a.NONE}break;case 2:switch(n.touches.TWO){case ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(S),r=a.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(S),r=a.TOUCH_DOLLY_ROTATE;break;default:r=a.NONE}break;default:r=a.NONE}r!==a.NONE&&n.dispatchEvent(us)}function wt(S){switch(Jt(S),r){case a.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(S),n.update();break;case a.TOUCH_PAN:if(n.enablePan===!1)return;ht(S),n.update();break;case a.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Kt(S),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(S),n.update();break;default:r=a.NONE}}function Vt(S){n.enabled!==!1&&S.preventDefault()}function ee(S){I.push(S.pointerId)}function Yt(S){delete N[S.pointerId];for(let tt=0;tt<I.length;tt++)if(I[tt]==S.pointerId){I.splice(tt,1);return}}function zt(S){for(let tt=0;tt<I.length;tt++)if(I[tt]==S.pointerId)return!0;return!1}function Jt(S){let tt=N[S.pointerId];tt===void 0&&(tt=new re,N[S.pointerId]=tt),tt.set(S.pageX,S.pageY)}function Qt(S){const tt=S.pointerId===I[0]?I[1]:I[0];return N[tt]}n.domElement.addEventListener("contextmenu",Vt),n.domElement.addEventListener("pointerdown",kt),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",vt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ot,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ln{constructor(t,e,n,a,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),ln.nextNameID=ln.nextNameID||0,this.$name.id=`lil-gui-name-${++ln.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Wp extends ln{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ys(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Xp={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ys,toHexString:Ys},Wi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},qp={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Wi.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const a=i*n<<16^t*n<<8^e*n<<0;return Wi.toHexString(a)}},Yp={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Wi.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const a=i*n<<16^t*n<<8^e*n<<0;return Wi.toHexString(a)}},$p=[Xp,Wi,qp,Yp];function Kp(i){return $p.find(t=>t.match(i))}class jp extends ln{constructor(t,e,n,a){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Kp(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ys(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ds extends ln{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Zp extends ln{constructor(t,e,n,a,r,s){super(t,e,n,"number"),this._initInput(),this.min(a),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},a=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let s=!1,o,c,d,h,l;const u=5,p=_=>{o=_.clientX,c=d=_.clientY,s=!0,h=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(s){const x=_.clientX-o,y=_.clientY-c;Math.abs(y)>u?(_.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>u&&g()}if(!s){const x=_.clientY-d;l-=x*this._step*this._arrowKeyMultiplier(_),h+l>this._max?l=this._max-h:h+l<this._min&&(l=this._min-h),this._snapClampSetValue(h+l)}d=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,_,x,y,R)=>(f-_)/(x-_)*(R-y)+y,e=f=>{const _=this.$slider.getBoundingClientRect();let x=t(f,_.left,_.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",r)},a=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",r)};let s=!1,o,c;const d=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),s=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,c=f.touches[0].clientY,s=!0):d(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",u))},l=f=>{if(s){const _=f.touches[0].clientX-o,x=f.touches[0].clientY-c;Math.abs(_)>Math.abs(x)?d(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u))}else f.preventDefault(),e(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),v=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Jp extends ln{constructor(t,e,n,a){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Qp extends ln{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const tm=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function em(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let xo=!1;class ca{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:a,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!xo&&o&&(em(tm),xo=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=s}add(t,e,n,a,r){if(Object(n)===n)return new Jp(this,t,e,n);const s=t[e];switch(typeof s){case"number":return new Zp(this,t,e,n,a,r);case"boolean":return new Wp(this,t,e);case"string":return new Qp(this,t,e);case"function":return new ds(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,s)}addColor(t,e,n=1){return new jp(this,t,e,n)}addFolder(t){const e=new ca({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ds||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ds)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const a=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function nm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Mr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var rl={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(d,h){if(!a[d]){if(!n[d]){var l=typeof Mr=="function"&&Mr;if(!h&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=a[d]={exports:{}};n[d][0].call(u.exports,function(p){var v=n[d][1][p];return s(v||p)},u,u.exports,e,n,a,r)}return a[d].exports}for(var o=typeof Mr=="function"&&Mr,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;s.prototype.setFromPoints=function(d,h,l,u){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(d[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<d.length;m++){var f=d[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),u&&(p.x-=u,p.y-=u,p.z-=u,v.x+=u,v.y+=u,v.z+=u),this},s.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return(u.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(u.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(u.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return h.x<=u.x&&l.x>=p.x&&h.y<=u.y&&l.y>=p.y&&h.z<=u.z&&l.z>=p.z},s.prototype.getCorners=function(d,h,l,u,p,v,g,m){var f=this.lowerBound,_=this.upperBound;d.copy(f),h.set(_.x,f.y,f.z),l.set(_.x,_.y,f.z),u.set(f.x,_.y,_.z),p.set(_.x,f.y,f.z),v.set(f.x,_.y,f.z),g.set(f.x,f.y,_.z),m.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(u,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var R=l[y];d.pointToLocal(R,R)}return h.setFromPoints(l)},s.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(u,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var R=l[y];d.pointToWorld(R,R)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var d=o;o=s,s=d}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&d||g.sleepState===r.SLEEPING)&&(m.type&d||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,_):this.doBoundingSphereBroadphase(g,m,f,_)};var h=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,f,_){var x=h;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),R=x.norm2();R<y&&(f.push(g),_.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),_.push(m))};var l={keys:[]},u=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,_=u,x=p,y=g.length,R=0;R!==y;R++)_[R]=g[R],x[R]=m[R];g.length=0,m.length=0;for(var R=0;R!==y;R++){var L=_[R].id,I=x[R].id,N=L<I?L+","+I:I+","+L;f[N]=R,f.keys.push(N)}for(var R=0;R!==f.keys.length;R++){var N=f.keys.pop(),w=f[N];g.push(_[w]),m.push(x[w]),delete f[N]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,u,p,v){r.apply(this),this.nx=u||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new s;new s,c.prototype.collisionPairs=function(h,l,u){var p=h.numObjects(),v=h.bodies,j=this.aabbMax,G=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,_=m*f,x=f,y=1,R=j.x,L=j.y,I=j.z,N=G.x,w=G.y,M=G.z,b=g/(R-N),O=m/(L-w),F=f/(I-M),Y=(R-N)/g,X=(L-w)/m,K=(I-M)/f,V=Math.sqrt(Y*Y+X*X+K*K)*.5,D=o.types,et=D.SPHERE,Z=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var B=this.bins,J=this.binLengths,k=this.bins.length,T=0;T!==k;T++)J[T]=0;var C=Math.ceil,G=Math.min,j=Math.max;function nt(wt,Vt,ee,Yt,zt,Jt,Qt){var de=(wt-N)*b|0,S=(Vt-w)*O|0,tt=(ee-M)*F|0,it=C((Yt-N)*b),ct=C((zt-w)*O),_t=C((Jt-M)*F);de<0?de=0:de>=g&&(de=g-1),S<0?S=0:S>=m&&(S=m-1),tt<0?tt=0:tt>=f&&(tt=f-1),it<0?it=0:it>=g&&(it=g-1),ct<0?ct=0:ct>=m&&(ct=m-1),_t<0?_t=0:_t>=f&&(_t=f-1),de*=_,S*=x,tt*=y,it*=_,ct*=x,_t*=y;for(var Xt=de;Xt<=it;Xt+=_)for(var te=S;te<=ct;te+=x)for(var me=tt;me<=_t;me+=y){var xe=Xt+te+me;B[xe][J[xe]++]=Qt}}for(var T=0;T!==p;T++){var q=v[T],st=q.shape;switch(st.type){case et:var pt=q.position.x,U=q.position.y,Tt=q.position.z,Mt=st.radius;nt(pt-Mt,U-Mt,Tt-Mt,pt+Mt,U+Mt,Tt+Mt,q);break;case Z:st.worldNormalNeedsUpdate&&st.computeWorldNormal(q.quaternion);var ht=st.worldNormal,ot=N+Y*.5-q.position.x,Kt=w+X*.5-q.position.y,At=M+K*.5-q.position.z,kt=d;kt.set(ot,Kt,At);for(var P=0,A=0;P!==g;P++,A+=_,kt.y=Kt,kt.x+=Y)for(var Q=0,dt=0;Q!==m;Q++,dt+=x,kt.z=At,kt.y+=X)for(var vt=0,ut=0;vt!==f;vt++,ut+=y,kt.z+=K)if(kt.dot(ht)<V){var Ot=A+dt+ut;B[Ot][J[Ot]++]=q}break;default:q.aabbNeedsUpdate&&q.computeAABB(),nt(q.aabb.lowerBound.x,q.aabb.lowerBound.y,q.aabb.lowerBound.z,q.aabb.upperBound.x,q.aabb.upperBound.y,q.aabb.upperBound.z,q);break}}for(var T=0;T!==k;T++){var yt=J[T];if(yt>1)for(var Lt=B[T],P=0;P!==yt;P++)for(var q=Lt[P],Q=0;Q!==P;Q++){var jt=Lt[Q];this.needBroadphaseCollision(q,jt)&&this.intersectionTest(q,jt,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,p,v,g,m;for(p=0;p!==u;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,h)},new s,o.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var d=o;o=s,s=d}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),h=e("../collision/AABB");function l(k,T){this.from=k?k.clone():new r,this.to=T?T.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,p=[];l.prototype.intersectWorld=function(k,T){return this.mode=T.mode||l.ANY,this.result=T.result||new c,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),p.length=0,k.broadphase.aabbQuery(k,u,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(k,T,C,G){G.vsub(T,Z),C.vsub(T,v),k.vsub(T,g);var j=Z.dot(Z),nt=Z.dot(v),q=Z.dot(g),st=v.dot(v),pt=v.dot(g),U,Tt;return(U=st*q-nt*pt)>=0&&(Tt=j*pt-nt*q)>=0&&U+Tt<j*st-nt*nt}var f=new r,_=new s;l.prototype.intersectBody=function(k,T){T&&(this.result=T,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!k.collisionResponse)&&!(!(this.collisionFilterGroup&k.collisionFilterMask)||!(k.collisionFilterGroup&this.collisionFilterMask)))for(var G=f,j=_,nt=0,q=k.shapes.length;nt<q;nt++){var st=k.shapes[nt];if(!(C&&!st.collisionResponse)&&(k.quaternion.mult(k.shapeOrientations[nt],j),k.quaternion.vmult(k.shapeOffsets[nt],G),G.vadd(k.position,G),this.intersectShape(st,j,G,k),this.result._shouldStop))break}},l.prototype.intersectBodies=function(k,T){T&&(this.result=T,this._updateDirection());for(var C=0,G=k.length;!this.result._shouldStop&&C<G;C++)this.intersectBody(k[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(k,T,C,G){var j=this.from,nt=J(j,this._direction,C);if(!(nt>k.boundingSphereRadius)){var q=this[k.type];q&&q.call(this,k,T,C,G)}},new r,new r;var x=new r,y=new r,R=new r,L=new r;new r,new c,l.prototype.intersectBox=function(k,T,C,G){return this.intersectConvex(k.convexPolyhedronRepresentation,T,C,G)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(k,T,C,G){var j=this.from,nt=this.to,q=this._direction,st=new r(0,0,1);T.vmult(st,st);var pt=new r;j.vsub(C,pt);var U=pt.dot(st);nt.vsub(C,pt);var Tt=pt.dot(st);if(!(U*Tt>0)&&!(j.distanceTo(nt)<U)){var Mt=st.dot(q);if(!(Math.abs(Mt)<this.precision)){var ht=new r,ot=new r,Kt=new r;j.vsub(C,ht);var At=-st.dot(ht)/Mt;q.scale(At,ot),j.vadd(ot,Kt),this.reportIntersection(st,Kt,k,G,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(k){var T=this.to,C=this.from;k.lowerBound.x=Math.min(T.x,C.x),k.lowerBound.y=Math.min(T.y,C.y),k.lowerBound.z=Math.min(T.z,C.z),k.upperBound.x=Math.max(T.x,C.x),k.upperBound.y=Math.max(T.y,C.y),k.upperBound.z=Math.max(T.z,C.z)};var I={faceList:[0]};l.prototype.intersectHeightfield=function(k,T,C,G){k.data,k.elementSize;var j=new r,nt=new l(this.from,this.to);o.pointToLocalFrame(C,T,nt.from,nt.from),o.pointToLocalFrame(C,T,nt.to,nt.to);var q=[],st=null,pt=null,U=null,Tt=null,Mt=k.getIndexOfPosition(nt.from.x,nt.from.y,q,!1);if(Mt&&(st=q[0],pt=q[1],U=q[0],Tt=q[1]),Mt=k.getIndexOfPosition(nt.to.x,nt.to.y,q,!1),Mt&&((st===null||q[0]<st)&&(st=q[0]),(U===null||q[0]>U)&&(U=q[0]),(pt===null||q[1]<pt)&&(pt=q[1]),(Tt===null||q[1]>Tt)&&(Tt=q[1])),st!==null){var ht=[];k.getRectMinMax(st,pt,U,Tt,ht),ht[0],ht[1];for(var ot=st;ot<=U;ot++)for(var Kt=pt;Kt<=Tt;Kt++){if(this.result._shouldStop||(k.getConvexTrianglePillar(ot,Kt,!1),o.pointToWorldFrame(C,T,k.pillarOffset,j),this.intersectConvex(k.pillarConvex,T,j,G,I),this.result._shouldStop))return;k.getConvexTrianglePillar(ot,Kt,!0),o.pointToWorldFrame(C,T,k.pillarOffset,j),this.intersectConvex(k.pillarConvex,T,j,G,I)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var N=new r,w=new r;l.prototype.intersectSphere=function(k,T,C,G){var j=this.from,nt=this.to,q=k.radius,st=Math.pow(nt.x-j.x,2)+Math.pow(nt.y-j.y,2)+Math.pow(nt.z-j.z,2),pt=2*((nt.x-j.x)*(j.x-C.x)+(nt.y-j.y)*(j.y-C.y)+(nt.z-j.z)*(j.z-C.z)),U=Math.pow(j.x-C.x,2)+Math.pow(j.y-C.y,2)+Math.pow(j.z-C.z,2)-Math.pow(q,2),Tt=Math.pow(pt,2)-4*st*U,Mt=N,ht=w;if(!(Tt<0))if(Tt===0)j.lerp(nt,Tt,Mt),Mt.vsub(C,ht),ht.normalize(),this.reportIntersection(ht,Mt,k,G,-1);else{var ot=(-pt-Math.sqrt(Tt))/(2*st),Kt=(-pt+Math.sqrt(Tt))/(2*st);if(ot>=0&&ot<=1&&(j.lerp(nt,ot,Mt),Mt.vsub(C,ht),ht.normalize(),this.reportIntersection(ht,Mt,k,G,-1)),this.result._shouldStop)return;Kt>=0&&Kt<=1&&(j.lerp(nt,Kt,Mt),Mt.vsub(C,ht),ht.normalize(),this.reportIntersection(ht,Mt,k,G,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var M=new r;new r,new r;var b=new r;l.prototype.intersectConvex=function(T,C,G,j,nt){for(var q=M,st=b,pt=nt&&nt.faceList||null,U=T.faces,Tt=T.vertices,Mt=T.faceNormals,ht=this._direction,ot=this.from,Kt=this.to,At=ot.distanceTo(Kt),kt=pt?pt.length:U.length,P=this.result,A=0;!P._shouldStop&&A<kt;A++){var Q=pt?pt[A]:A,dt=U[Q],vt=Mt[Q],ut=C,Ot=G;st.copy(Tt[dt[0]]),ut.vmult(st,st),st.vadd(Ot,st),st.vsub(ot,st),ut.vmult(vt,q);var yt=ht.dot(q);if(!(Math.abs(yt)<this.precision)){var Lt=q.dot(st)/yt;if(!(Lt<0)){ht.mult(Lt,x),x.vadd(ot,x),y.copy(Tt[dt[0]]),ut.vmult(y,y),Ot.vadd(y,y);for(var jt=1;!P._shouldStop&&jt<dt.length-1;jt++){R.copy(Tt[dt[jt]]),L.copy(Tt[dt[jt+1]]),ut.vmult(R,R),ut.vmult(L,L),Ot.vadd(R,R),Ot.vadd(L,L);var wt=x.distanceTo(ot);!(m(x,y,R,L)||m(x,R,y,L))||wt>At||this.reportIntersection(q,x,T,j,Q)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var O=new r,F=new r,Y=new r,X=new r,K=new r,V=new r;new h;var D=[],et=new o;l.prototype.intersectTrimesh=function(T,C,G,j,nt){var q=O,st=D,pt=et,U=b,Tt=F,Mt=Y,ht=X,ot=V,Kt=K;nt&&nt.faceList;var At=T.indices;T.vertices,T.faceNormals;var kt=this.from,P=this.to,A=this._direction;pt.position.copy(G),pt.quaternion.copy(C),o.vectorToLocalFrame(G,C,A,Tt),o.pointToLocalFrame(G,C,kt,Mt),o.pointToLocalFrame(G,C,P,ht);var Q=Mt.distanceSquared(ht);T.tree.rayQuery(this,pt,st);for(var dt=0,vt=st.length;!this.result._shouldStop&&dt!==vt;dt++){var ut=st[dt];T.getNormal(ut,q),T.getVertex(At[ut*3],y),y.vsub(Mt,U);var Ot=Tt.dot(q),yt=q.dot(U)/Ot;if(!(yt<0)){Tt.scale(yt,x),x.vadd(Mt,x),T.getVertex(At[ut*3+1],R),T.getVertex(At[ut*3+2],L);var Lt=x.distanceSquared(Mt);!(m(x,R,y,L)||m(x,y,R,L))||Lt>Q||(o.vectorToWorldFrame(C,q,Kt),o.pointToWorldFrame(G,C,x,ot),this.reportIntersection(Kt,ot,T,j,ut))}}st.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(k,T,C,G,j){var nt=this.from,q=this.to,st=nt.distanceTo(T),pt=this.result;if(!(this.skipBackfaces&&k.dot(this._direction)>0))switch(pt.hitFaceIndex=typeof j<"u"?j:-1,this.mode){case l.ALL:this.hasHit=!0,pt.set(nt,q,k,T,C,G,st),pt.hasHit=!0,this.callback(pt);break;case l.CLOSEST:(st<pt.distance||!pt.hasHit)&&(this.hasHit=!0,pt.hasHit=!0,pt.set(nt,q,k,T,C,G,st));break;case l.ANY:this.hasHit=!0,pt.hasHit=!0,pt.set(nt,q,k,T,C,G,st),pt._shouldStop=!0;break}};var Z=new r,B=new r;function J(k,T,C){C.vsub(k,Z);var G=Z.dot(T);T.mult(G,B),B.vadd(k,B);var j=C.distanceTo(B);return j}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,d,h,l,u,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},s.prototype.collisionPairs=function(o,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,u))break;this.intersectionTest(g,m,c,d)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,h=0;h!==d;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,d){var h,l;d===0?(h=o.position.x,l=c.position.x):d===1?(h=o.position.y,l=c.position.y):d===2&&(h=o.position.z,l=c.position.z);var u=o.boundingRadius,p=c.boundingRadius,v=h+u,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,h=0,l=0,u=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],_=f.position.x;o+=_,c+=_*_;var x=f.position.y;d+=x,h+=x*x;var y=f.position.z;l+=y,u+=y*y}var R=c-o*o*g,L=h-d*d*g,I=u-l*l*g;R>L?R>I?this.axisIndex=0:this.axisIndex=2:L>I?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<u.length;p++){var v=u[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,g=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new s(h,l,u),f=this.twistEquation=new o(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),u.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,d,h,l){r.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new s(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,u,m,p,f,g);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);x.normalize();var y=this.rotationalEquation1=new s(u,p,v),R=this.rotationalEquation2=new s(u,p,v),L=this.motorEquation=new o(u,p,g);L.enabled=!1,this.equations.push(y,R,L)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,_=l,x=this.axisA,y=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(x,f),p.quaternion.vmult(y,_),f.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;d.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),d.pointToLocalFrame(g,p),r.call(this,d,p,h,v,u);var m=this.rotationalEquation1=new s(d,h,l),f=this.rotationalEquation2=new s(d,h,l),_=this.rotationalEquation3=new s(d,h,l);this.equations.push(m,f,_)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),h.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,h,l,u,p){r.call(this,d,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new s(d,l),g=this.equationY=new s(d,l),m=this.equationZ=new s(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,p=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;s.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-p.dot(v),y=this.computeGW(),R=this.computeGiMf(),L=-x*l-y*u-h*R;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,f,_){_=typeof _<"u"?_:1e6,r.call(this,m,f,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s,h=new s;o.prototype.computeB=function(m){var f=this.a,_=this.b,x=this.bi,y=this.bj,R=this.ri,L=this.rj,I=c,N=d,w=x.velocity,M=x.angularVelocity;x.force,x.torque;var b=y.velocity,O=y.angularVelocity;y.force,y.torque;var F=h,Y=this.jacobianElementA,X=this.jacobianElementB,K=this.ni;R.cross(K,I),L.cross(K,N),K.negate(Y.spatial),I.negate(Y.rotational),X.spatial.copy(K),X.rotational.copy(N),F.copy(y.position),F.vadd(L,F),F.vsub(x.position,F),F.vsub(R,F);var V=K.dot(F),D=this.restitution+1,et=D*b.dot(K)-D*w.dot(K)+O.dot(N)-M.dot(I),Z=this.computeGiMf(),B=-V*f-et*_-m*Z;return B};var l=new s,u=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=u,_=p,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,f),m.vsub(f,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,f,_){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var _=m,x=g,y=f;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},o.prototype.computeB=function(g,m,f){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.velocity,y=_.velocity,R=f.angularVelocity||c,L=_.angularVelocity||c;return g.multiplyVectors(x,R)+m.multiplyVectors(y,L)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.vlambda,y=_.vlambda,R=f.wlambda||c,L=_.wlambda||c;return g.multiplyVectors(x,R)+m.multiplyVectors(y,L)};var d=new s,h=new s,l=new s,u=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.force,y=f.torque,R=_.force,L=_.torque,I=f.invMassSolve,N=_.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(y,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(L,u):u.set(0,0,0),x.mult(I,d),R.mult(N,h),g.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.invMassSolve,y=_.invMassSolve,R=f.invInertiaWorldSolve,L=_.invInertiaWorldSolve,I=x+y;return R&&(R.vmult(g.rotational,p),I+=p.dot(g.rotational)),L&&(L.vmult(m.rotational,p),I+=p.dot(m.rotational)),I};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),f.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(h,l,u){r.call(this,h,l,-u,u),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,p=this.rj,v=c,g=d,m=this.t;u.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,_=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),R=-x*l-h*y;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;s.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-p.dot(v),y=this.computeGW(),R=this.computeGiMf(),L=-x*l-y*u-h*R;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,d,h){h=typeof h<"u"?h:1e6,s.call(this,c,d,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,p=this.jacobianElementB;u.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},s.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,h=o.x,l=o.y,u=o.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var d=c||new s,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,p=0;p<3;p++)u+=o.elements[h+p*3]*this.elements[p+l*3];d.elements[h+l*3]=u}return d},s.prototype.scale=function(o,c){c=c||new s;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*d[3*l+0],h[3*l+1]=o.y*d[3*l+1],h[3*l+2]=o.z*d[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,p;for(u=0;u<3;u++)for(p=0;p<3;p++)l[u+h*p]=this.elements[u+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,_;do{if(u=g-v,l[u+h*u]===0){for(p=u+1;p<g;p++)if(l[u+h*p]!==0){m=f;do _=f-m,l[_+h*u]+=l[_+h*p];while(--m);break}}if(l[u+h*u]!==0)for(p=u+1;p<g;p++){var x=l[u+h*p]/l[u+h*u];m=f;do _=f-m,l[_+h*p]=_<=u?0:l[_+h*p]-l[_+h*u]*x;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=d,f;do{if(l=v-p,h[l+d*l]===0){for(u=l+1;u<v;u++)if(h[l+d*u]!==0){g=m;do f=m-g,h[f+d*l]+=h[f+d*u];while(--g);break}}if(h[l+d*l]!==0)for(u=l+1;u<v;u++){var _=h[l+d*u]/h[l+d*l];g=m;do f=m-g,h[f+d*u]=f<=l?0:h[f+d*u]-h[f+d*l]*_;while(--g)}}while(--p);l=2;do{u=l-1;do{var _=h[l+d*u]/h[l+d*l];g=d;do f=d-g,h[f+d*u]=h[f+d*u]-h[f+d*l]*_;while(--g)}while(u--)}while(--l);l=2;do{var _=1/h[l+d*l];g=d;do f=d-g,h[f+d*l]=h[f+d*l]*_;while(--g)}while(l--);l=2;do{u=2;do{if(f=h[c+u+d*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,f)}while(u--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,h=o.z,l=o.w,u=c+c,p=d+d,v=h+h,g=c*u,m=c*p,f=c*v,_=d*p,x=d*v,y=h*v,R=l*u,L=l*p,I=l*v,N=this.elements;return N[3*0+0]=1-(_+y),N[3*0+1]=m-I,N[3*0+2]=f+L,N[3*1+0]=m+I,N[3*1+1]=1-(g+y),N[3*1+2]=x-R,N[3*2+0]=f-L,N[3*2+1]=x+R,N[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(u,p,v,g){this.x=u!==void 0?u:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(u,p,v,g){this.x=u,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(u,p){var v=Math.sin(p*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,p]};var o=new r,c=new r;s.prototype.setFromVectors=function(u,p){if(u.isAntiparallelTo(p)){var v=o,g=c;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(p.norm(),2))+u.dot(p),this.normalize()}};var d=new r,h=new r,l=new r;s.prototype.mult=function(u,p){p=p||new s;var v=this.w,g=d,m=h,f=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),p.w=v*u.w-g.dot(m),g.cross(m,f),p.x=v*m.x+u.w*g.x+f.x,p.y=v*m.y+u.w*g.y+f.y,p.z=v*m.z+u.w*g.z+f.z,p},s.prototype.inverse=function(u){var p=this.x,v=this.y,g=this.z,m=this.w;u=u||new s,this.conjugate(u);var f=1/(p*p+v*v+g*g+m*m);return u.x*=f,u.y*=f,u.z*=f,u.w*=f,u},s.prototype.conjugate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},s.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},s.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},s.prototype.vmult=function(u,p){p=p||new r;var v=u.x,g=u.y,m=u.z,f=this.x,_=this.y,x=this.z,y=this.w,R=y*v+_*m-x*g,L=y*g+x*v-f*m,I=y*m+f*g-_*v,N=-f*v-_*g-x*m;return p.x=R*y+N*-f+L*-x-I*-_,p.y=L*y+N*-_+I*-f-R*-x,p.z=I*y+N*-x+R*-_-L*-f,p},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},s.prototype.toEuler=function(u,p){p=p||"YZX";var v,g,m,f=this.x,_=this.y,x=this.z,y=this.w;switch(p){case"YZX":var R=f*_+x*y;if(R>.499&&(v=2*Math.atan2(f,y),g=Math.PI/2,m=0),R<-.499&&(v=-2*Math.atan2(f,y),g=-Math.PI/2,m=0),isNaN(v)){var L=f*f,I=_*_,N=x*x;v=Math.atan2(2*_*y-2*f*x,1-2*I-2*N),g=Math.asin(2*R),m=Math.atan2(2*f*y-2*_*x,1-2*L-2*N)}break;default:throw new Error("Euler order "+p+" not supported yet.")}u.y=v,u.z=g,u.x=m},s.prototype.setFromEuler=function(u,p,v,g){g=g||"XYZ";var m=Math.cos(u/2),f=Math.cos(p/2),_=Math.cos(v/2),x=Math.sin(u/2),y=Math.sin(p/2),R=Math.sin(v/2);return g==="XYZ"?(this.x=x*f*_+m*y*R,this.y=m*y*_-x*f*R,this.z=m*f*R+x*y*_,this.w=m*f*_-x*y*R):g==="YXZ"?(this.x=x*f*_+m*y*R,this.y=m*y*_-x*f*R,this.z=m*f*R-x*y*_,this.w=m*f*_+x*y*R):g==="ZXY"?(this.x=x*f*_-m*y*R,this.y=m*y*_+x*f*R,this.z=m*f*R+x*y*_,this.w=m*f*_-x*y*R):g==="ZYX"?(this.x=x*f*_-m*y*R,this.y=m*y*_+x*f*R,this.z=m*f*R-x*y*_,this.w=m*f*_+x*y*R):g==="YZX"?(this.x=x*f*_+m*y*R,this.y=m*y*_+x*f*R,this.z=m*f*R-x*y*_,this.w=m*f*_-x*y*R):g==="XZY"&&(this.x=x*f*_-m*y*R,this.y=m*y*_-x*f*R,this.z=m*f*R+x*y*_,this.w=m*f*_+x*y*R),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new s,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new s;o.pointToLocalFrame=function(d,h,l,p){var p=p||new r;return l.vsub(d,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(d,h){return o.pointToLocalFrame(this.position,this.quaternion,d,h)},o.pointToWorldFrame=function(d,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(d,p),p},o.prototype.pointToWorld=function(d,h){return o.pointToWorldFrame(this.position,this.quaternion,d,h)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},o.vectorToLocalFrame=function(d,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(h,l){var u=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return l=l||new s,l.x=m*v-f*p,l.y=f*u-g*v,l.z=g*p-m*u,l},s.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new s(this.x+h.x,this.y+h.y,this.z+h.z)},s.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new s(this.x-h.x,this.y-h.y,this.z-h.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,p=Math.sqrt(h*h+l*l+u*u);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(h){h=h||new s;var l=this.x,u=this.y,p=this.z,v=Math.sqrt(l*l+u*u+p*p);return v>0?(v=1/v,h.x=l*v,h.y=u*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},s.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p))},s.prototype.distanceSquared=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p)},s.prototype.mult=function(h,l){l=l||new s;var u=this.x,p=this.y,v=this.z;return l.x=h*u,l.y=h*p,l.z=h*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new s,c=new s;s.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var p=o,v=1/u;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},s.prototype.lerp=function(h,l,u){var p=this.x,v=this.y,g=this.z;u.x=p+(h.x-p)*l,u.y=v+(h.y-v)*l,u.z=g+(h.z-g)*l},s.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},s.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new s;s.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),h=e("../shapes/Box");function l(b){b=b||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,b.position&&this.position.copy(b.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new s,this.force=new s;var O=typeof b.mass=="number"?b.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=O<=0?l.STATIC:l.DYNAMIC,typeof b.type==typeof l.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new s,b.shape&&this.addShape(b.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(b){if(this.allowSleep){var O=this.sleepState,F=this.velocity.norm2()+this.angularVelocity.norm2(),Y=Math.pow(this.sleepSpeedLimit,2);O===l.AWAKE&&F<Y?(this.sleepState=l.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(l.sleepyEvent)):O===l.SLEEPY&&F>Y?this.wakeUp():O===l.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(b,F){var F=F||new s;return b.vsub(this.position,F),this.quaternion.conjugate().vmult(F,F),F},l.prototype.vectorToLocalFrame=function(b,F){var F=F||new s;return this.quaternion.conjugate().vmult(b,F),F},l.prototype.pointToWorldFrame=function(b,F){var F=F||new s;return this.quaternion.vmult(b,F),F.vadd(this.position,F),F},l.prototype.vectorToWorldFrame=function(b,F){var F=F||new s;return this.quaternion.vmult(b,F),F};var u=new s,p=new c;l.prototype.addShape=function(b,O,F){var Y=new s,X=new c;return O&&Y.copy(O),F&&X.copy(F),this.shapes.push(b),this.shapeOffsets.push(Y),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var b=this.shapes,O=this.shapeOffsets,F=b.length,Y=0,X=0;X!==F;X++){var K=b[X];K.updateBoundingSphereRadius();var V=O[X].norm(),D=K.boundingSphereRadius;V+D>Y&&(Y=V+D)}this.boundingRadius=Y};var v=new d;l.prototype.computeAABB=function(){for(var b=this.shapes,O=this.shapeOffsets,F=this.shapeOrientations,Y=b.length,X=u,K=p,V=this.quaternion,D=this.aabb,et=v,Z=0;Z!==Y;Z++){var B=b[Z];F[Z].mult(V,K),K.vmult(O[Z],X),X.vadd(this.position,X),B.calculateWorldAABB(X,K,et.lowerBound,et.upperBound),Z===0?D.copy(et):D.extend(et)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(b){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!b)){var F=g,Y=m;F.setRotationFromQuaternion(this.quaternion),F.transpose(Y),F.scale(O,F),F.mmult(Y,this.invInertiaWorld)}};var f=new s,_=new s;l.prototype.applyForce=function(b,O){if(this.type===l.DYNAMIC){var F=f;O.vsub(this.position,F);var Y=_;F.cross(b,Y),this.force.vadd(b,this.force),this.torque.vadd(Y,this.torque)}};var x=new s,y=new s;l.prototype.applyLocalForce=function(b,O){if(this.type===l.DYNAMIC){var F=x,Y=y;this.vectorToWorldFrame(b,F),this.pointToWorldFrame(O,Y),this.applyForce(F,Y)}};var R=new s,L=new s,I=new s;l.prototype.applyImpulse=function(b,O){if(this.type===l.DYNAMIC){var F=R;O.vsub(this.position,F);var Y=L;Y.copy(b),Y.mult(this.invMass,Y),this.velocity.vadd(Y,this.velocity);var X=I;F.cross(b,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var N=new s,w=new s;l.prototype.applyLocalImpulse=function(b,O){if(this.type===l.DYNAMIC){var F=N,Y=w;this.vectorToWorldFrame(b,F),this.pointToWorldFrame(O,Y),this.applyImpulse(F,Y)}};var M=new s;l.prototype.updateMassProperties=function(){var b=M;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,F=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(b,this.mass,O),this.invInertia.set(O.x>0&&!F?1/O.x:0,O.y>0&&!F?1/O.y:0,O.z>0&&!F?1/O.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(b,O){var F=new s;return b.vsub(this.position,F),this.angularVelocity.cross(F,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(V){this.chassisBody=V.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof V.indexRightAxis<"u"?V.indexRightAxis:1,this.indexForwardAxis=typeof V.indexForwardAxis<"u"?V.indexForwardAxis:0,this.indexUpAxis=typeof V.indexUpAxis<"u"?V.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,u=new r;new o,d.prototype.addWheel=function(V){V=V||{};var D=new c(V),et=this.wheelInfos.length;return this.wheelInfos.push(D),et},d.prototype.setSteeringValue=function(V,D){var et=this.wheelInfos[D];et.steering=V},new r,d.prototype.applyEngineForce=function(V,D){this.wheelInfos[D].engineForce=V},d.prototype.setBrake=function(V,D){this.wheelInfos[D].brake=V},d.prototype.addToWorld=function(V){this.constraints,V.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(V.dt)},V.addEventListener("preStep",this.preStepCallback),this.world=V},d.prototype.getVehicleAxisWorld=function(V,D){D.set(V===0?1:0,V===1?1:0,V===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},d.prototype.updateVehicle=function(V){for(var D=this.wheelInfos,et=D.length,Z=this.chassisBody,B=0;B<et;B++)this.updateWheelTransform(B);this.currentVehicleSpeedKmHour=3.6*Z.velocity.norm();var J=new r;this.getVehicleAxisWorld(this.indexForwardAxis,J),J.dot(Z.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var B=0;B<et;B++)this.castRay(D[B]);this.updateSuspension(V);for(var k=new r,T=new r,B=0;B<et;B++){var C=D[B],G=C.suspensionForce;G>C.maxSuspensionForce&&(G=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(G*V,k),C.raycastResult.hitPointWorld.vsub(Z.position,T),Z.applyImpulse(k,C.raycastResult.hitPointWorld)}this.updateFriction(V);var j=new r,nt=new r,q=new r;for(B=0;B<et;B++){var C=D[B];Z.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,q);var st=1;switch(this.indexUpAxis){case 1:st=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var pt=nt.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(pt,j),nt.vsub(j,nt);var U=nt.dot(q);C.deltaRotation=st*U*V/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*V),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},d.prototype.updateSuspension=function(V){for(var D=this.chassisBody,et=D.mass,Z=this.wheelInfos,B=Z.length,J=0;J<B;J++){var k=Z[J];if(k.isInContact){var T,C=k.suspensionRestLength,G=k.suspensionLength,j=C-G;T=k.suspensionStiffness*j*k.clippedInvContactDotSuspension;var nt=k.suspensionRelativeVelocity,q;nt<0?q=k.dampingCompression:q=k.dampingRelaxation,T-=q*nt,k.suspensionForce=T*et,k.suspensionForce<0&&(k.suspensionForce=0)}else k.suspensionForce=0}},d.prototype.removeFromWorld=function(V){this.constraints,V.remove(this.chassisBody),V.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;d.prototype.castRay=function(V){var D=p,et=v;this.updateWheelTransformWorld(V);var Z=this.chassisBody,B=-1,J=V.suspensionRestLength+V.radius;V.directionWorld.scale(J,D);var k=V.chassisConnectionPointWorld;k.vadd(D,et);var T=V.raycastResult;T.reset();var C=Z.collisionResponse;Z.collisionResponse=!1,this.world.rayTest(k,et,T),Z.collisionResponse=C;var G=T.body;if(V.raycastResult.groundObject=0,G){B=T.distance,V.raycastResult.hitNormalWorld=T.hitNormalWorld,V.isInContact=!0;var j=T.distance;V.suspensionLength=j-V.radius;var nt=V.suspensionRestLength-V.maxSuspensionTravel,q=V.suspensionRestLength+V.maxSuspensionTravel;V.suspensionLength<nt&&(V.suspensionLength=nt),V.suspensionLength>q&&(V.suspensionLength=q,V.raycastResult.reset());var st=V.raycastResult.hitNormalWorld.dot(V.directionWorld),pt=new r;Z.getVelocityAtWorldPoint(V.raycastResult.hitPointWorld,pt);var U=V.raycastResult.hitNormalWorld.dot(pt);if(st>=-.1)V.suspensionRelativeVelocity=0,V.clippedInvContactDotSuspension=1/.1;else{var Tt=-1/st;V.suspensionRelativeVelocity=U*Tt,V.clippedInvContactDotSuspension=Tt}}else V.suspensionLength=V.suspensionRestLength+0*V.maxSuspensionTravel,V.suspensionRelativeVelocity=0,V.directionWorld.scale(-1,V.raycastResult.hitNormalWorld),V.clippedInvContactDotSuspension=1;return B},d.prototype.updateWheelTransformWorld=function(V){V.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(V.chassisConnectionPointLocal,V.chassisConnectionPointWorld),D.vectorToWorldFrame(V.directionLocal,V.directionWorld),D.vectorToWorldFrame(V.axleLocal,V.axleWorld)},d.prototype.updateWheelTransform=function(V){var D=h,et=l,Z=u,B=this.wheelInfos[V];this.updateWheelTransformWorld(B),B.directionLocal.scale(-1,D),et.copy(B.axleLocal),D.cross(et,Z),Z.normalize(),et.normalize();var J=B.steering,k=new s;k.setFromAxisAngle(D,J);var T=new s;T.setFromAxisAngle(et,B.rotation);var C=B.worldTransform.quaternion;this.chassisBody.quaternion.mult(k,C),C.mult(T,C),C.normalize();var G=B.worldTransform.position;G.copy(B.directionWorld),G.scale(B.suspensionLength,G),G.vadd(B.chassisConnectionPointWorld,G)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(V){return this.wheelInfos[V].worldTransform};var m=new r,f=[],_=[],x=1;d.prototype.updateFriction=function(V){for(var D=m,et=this.wheelInfos,Z=et.length,B=this.chassisBody,J=_,k=f,T=0;T<Z;T++){var C=et[T],G=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,J[T]||(J[T]=new r),k[T]||(k[T]=new r)}for(var T=0;T<Z;T++){var C=et[T],G=C.raycastResult.body;if(G){var j=k[T],nt=this.getWheelTransformWorld(T);nt.vectorToWorldFrame(g[this.indexRightAxis],j);var q=C.raycastResult.hitNormalWorld,st=j.dot(q);q.scale(st,D),j.vsub(D,j),j.normalize(),q.cross(j,J[T]),J[T].normalize(),C.sideImpulse=K(B,C.raycastResult.hitPointWorld,G,C.raycastResult.hitPointWorld,j),C.sideImpulse*=x}}var pt=1,U=.5;this.sliding=!1;for(var T=0;T<Z;T++){var C=et[T],G=C.raycastResult.body,Tt=0;if(C.slipInfo=1,G){var Mt=0,ht=C.brake?C.brake:Mt;Tt=I(B,G,C.raycastResult.hitPointWorld,J[T],ht),Tt+=C.engineForce*V;var ot=ht/Tt;C.slipInfo*=ot}if(C.forwardImpulse=0,C.skidInfo=1,G){C.skidInfo=1;var Kt=C.suspensionForce*V*C.frictionSlip,At=Kt,kt=Kt*At;C.forwardImpulse=Tt;var P=C.forwardImpulse*U,A=C.sideImpulse*pt,Q=P*P+A*A;if(C.sliding=!1,Q>kt){this.sliding=!0,C.sliding=!0;var ot=Kt/Math.sqrt(Q);C.skidInfo*=ot}}}if(this.sliding)for(var T=0;T<Z;T++){var C=et[T];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var T=0;T<Z;T++){var C=et[T],dt=new r;if(dt.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var vt=new r;J[T].scale(C.forwardImpulse,vt),B.applyImpulse(vt,dt)}if(C.sideImpulse!==0){var G=C.raycastResult.body,ut=new r;ut.copy(C.raycastResult.hitPointWorld);var Ot=new r;k[T].scale(C.sideImpulse,Ot),B.pointToLocalFrame(dt,dt),dt["xyz"[this.indexUpAxis]]*=C.rollInfluence,B.pointToWorldFrame(dt,dt),B.applyImpulse(Ot,dt),Ot.scale(-1,Ot),G.applyImpulse(Ot,ut)}}};var y=new r,R=new r,L=new r;function I(V,D,et,Z,B){var J=0,k=et,T=y,C=R,G=L;V.getVelocityAtWorldPoint(k,T),D.getVelocityAtWorldPoint(k,C),T.vsub(C,G);var j=Z.dot(G),nt=O(V,et,Z),q=O(D,et,Z),st=1,pt=st/(nt+q);return J=-j*pt,B<J&&(J=B),J<-B&&(J=-B),J}var N=new r,w=new r,M=new r,b=new r;function O(V,D,et){var Z=N,B=w,J=M,k=b;return D.vsub(V.position,Z),Z.cross(et,B),V.invInertiaWorld.vmult(B,k),k.cross(Z,J),V.invMass+et.dot(J)}var F=new r,Y=new r,X=new r;function K(V,D,et,Z,B,st){var k=B.norm2();if(k>1.1)return 0;var T=F,C=Y,G=X;V.getVelocityAtWorldPoint(D,T),et.getVelocityAtWorldPoint(Z,C),T.vsub(C,G);var j=B.dot(G),nt=.2,q=1/(V.invMass+et.invMass),st=-nt*j*q;return st}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var _=new d(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-f*x,f*_+m*x,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var u=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,_=this.smoothingRadius*this.smoothingRadius,x=o,y=0;y!==m;y++){var R=this.particles[y];R.position.vsub(v.position,x),f!==R.id&&x.norm2()<_&&g.push(R)}};var c=new r,d=new r,h=new r,l=new r,u=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var R=y.length,L=0,I=0;I!==R;I++){x.position.vsub(y[I].position,g);var N=g.norm(),w=this.w(N);L+=y[I].mass*w}this.densities[_]=L,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var M=d,b=h,O=l,F=u,Y=p,_=0;_!==v;_++){var X=this.particles[_];M.set(0,0,0),b.set(0,0,0);for(var K,V,y=this.neighbors[_],R=y.length,I=0;I!==R;I++){var D=y[I];X.position.vsub(D.position,F);var et=F.norm();K=-D.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+f)+this.pressures[I]/(this.densities[I]*this.densities[I]+f)),this.gradw(F,O),O.mult(K,O),M.vadd(O,M),D.velocity.vsub(X.velocity,Y),Y.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*D.mass,Y),V=this.nablaw(et),Y.mult(V,Y),b.vadd(Y,b)}b.mult(X.mass,b),M.mult(X.mass,M),X.force.vadd(b,X.force),X.force.vadd(M,X.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,c=new r,d=new r,h=new r,l=new r,u=new r,p=new r,v=new r,g=new r,m=new r,f=new r;s.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,R=this.bodyA,L=this.bodyB,I=o,N=c,w=d,M=h,b=f,O=l,F=u,Y=p,X=v,K=g,V=m;this.getWorldAnchorA(O),this.getWorldAnchorB(F),O.vsub(R.position,Y),F.vsub(L.position,X),F.vsub(O,I);var D=I.norm();N.copy(I),N.normalize(),L.velocity.vsub(R.velocity,w),L.angularVelocity.cross(X,b),w.vadd(b,w),R.angularVelocity.cross(Y,b),w.vsub(b,w),N.mult(-_*(D-y)-x*w.dot(N),M),R.force.vsub(M,R.force),L.force.vadd(M,L.force),Y.cross(M,K),X.cross(M,V),R.torque.vsub(K,R.torque),L.torque.vadd(V,L.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,h=new r,l=new r;d.prototype.updateWheel=function(u){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-u,-p),new v(l,-u,-p),new v(l,u,-p),new v(-l,u,-p),new v(-l,-u,p),new v(l,-u,p),new v(l,u,p),new v(-l,u,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new s,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,p){var v=l;p.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,u){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==p.length;g++)u.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new s;new s,c.prototype.forEachWorldCorner=function(l,u,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),p(d.x,d.y,d.z)};var h=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,u,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];u.vmult(m,m),l.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<p.x&&(p.x=_),x<p.y&&(p.y=x),y<p.z&&(p.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(B,J,k){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=B||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=J||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=k?k.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new s;c.prototype.computeEdges=function(){var B=this.faces,J=this.vertices;J.length;var k=this.uniqueEdges;k.length=0;for(var T=d,C=0;C!==B.length;C++)for(var G=B[C],j=G.length,nt=0;nt!==j;nt++){var q=(nt+1)%j;J[G[nt]].vsub(J[G[q]],T),T.normalize();for(var st=!1,pt=0;pt!==k.length;pt++)if(k[pt].almostEquals(T)||k[pt].almostEquals(T)){st=!0;break}st||k.push(T.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var B=0;B<this.faces.length;B++){for(var J=0;J<this.faces[B].length;J++)if(!this.vertices[this.faces[B][J]])throw new Error("Vertex "+this.faces[B][J]+" not found!");var k=this.faceNormals[B]||new s;this.getFaceNormal(B,k),k.negate(k),this.faceNormals[B]=k;var T=this.vertices[this.faces[B][0]];if(k.dot(T)<0){console.error(".faceNormals["+B+"] = Vec3("+k.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var J=0;J<this.faces[B].length;J++)console.warn(".vertices["+this.faces[B][J]+"] = Vec3("+this.vertices[this.faces[B][J]].toString()+")")}}};var h=new s,l=new s;c.computeNormal=function(B,J,k,T){J.vsub(B,l),k.vsub(J,h),h.cross(l,T),T.isZero()||T.normalize()},c.prototype.getFaceNormal=function(B,J){var k=this.faces[B],T=this.vertices[k[0]],C=this.vertices[k[1]],G=this.vertices[k[2]];return c.computeNormal(T,C,G,J)};var u=new s;c.prototype.clipAgainstHull=function(B,J,k,T,C,G,j,nt,q){for(var st=u,pt=-1,U=-Number.MAX_VALUE,Tt=0;Tt<k.faces.length;Tt++){st.copy(k.faceNormals[Tt]),C.vmult(st,st);var Mt=st.dot(G);Mt>U&&(U=Mt,pt=Tt)}for(var ht=[],ot=k.faces[pt],Kt=ot.length,At=0;At<Kt;At++){var kt=k.vertices[ot[At]],P=new s;P.copy(kt),C.vmult(P,P),T.vadd(P,P),ht.push(P)}pt>=0&&this.clipFaceAgainstHull(G,B,J,ht,j,nt,q)};var p=new s,v=new s,g=new s,m=new s,f=new s,_=new s;c.prototype.findSeparatingAxis=function(B,J,k,T,C,G,j,nt){var q=p,st=v,pt=g,U=m,Tt=f,Mt=_,ht=Number.MAX_VALUE,ot=this;if(ot.uniqueAxes)for(var At=0;At!==ot.uniqueAxes.length;At++){k.vmult(ot.uniqueAxes[At],q);var P=ot.testSepAxis(q,B,J,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(q))}else for(var Kt=j?j.length:ot.faces.length,At=0;At<Kt;At++){var kt=j?j[At]:At;q.copy(ot.faceNormals[kt]),k.vmult(q,q);var P=ot.testSepAxis(q,B,J,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(q))}if(B.uniqueAxes)for(var At=0;At!==B.uniqueAxes.length;At++){C.vmult(B.uniqueAxes[At],st);var P=ot.testSepAxis(st,B,J,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(st))}else for(var A=nt?nt.length:B.faces.length,At=0;At<A;At++){var kt=nt?nt[At]:At;st.copy(B.faceNormals[kt]),C.vmult(st,st);var P=ot.testSepAxis(st,B,J,k,T,C);if(P===!1)return!1;P<ht&&(ht=P,G.copy(st))}for(var Q=0;Q!==ot.uniqueEdges.length;Q++){k.vmult(ot.uniqueEdges[Q],U);for(var dt=0;dt!==B.uniqueEdges.length;dt++)if(C.vmult(B.uniqueEdges[dt],Tt),U.cross(Tt,Mt),!Mt.almostZero()){Mt.normalize();var vt=ot.testSepAxis(Mt,B,J,k,T,C);if(vt===!1)return!1;vt<ht&&(ht=vt,G.copy(Mt))}}return T.vsub(J,pt),pt.dot(G)>0&&G.negate(G),!0};var x=[],y=[];c.prototype.testSepAxis=function(B,J,k,T,C,G){var j=this;c.project(j,B,k,T,x),c.project(J,B,C,G,y);var nt=x[0],q=x[1],st=y[0],pt=y[1],U=nt-pt,Tt=st-q,Mt=U<Tt?U:Tt;return Mt};var R=new s,L=new s;c.prototype.calculateLocalInertia=function(B,J){this.computeLocalAABB(R,L);var k=L.x-R.x,T=L.y-R.y,C=L.z-R.z;J.x=1/12*B*(2*T*2*T+2*C*2*C),J.y=1/12*B*(2*k*2*k+2*C*2*C),J.z=1/12*B*(2*T*2*T+2*k*2*k)},c.prototype.getPlaneConstantOfFace=function(B){var J=this.faces[B],k=this.faceNormals[B],T=this.vertices[J[0]],C=-k.dot(T);return C};var I=new s,N=new s,w=new s,M=new s,b=new s,O=new s,F=new s,Y=new s;c.prototype.clipFaceAgainstHull=function(B,J,k,T,C,G,j){for(var nt=I,q=N,st=w,pt=M,U=b,Tt=O,Mt=F,ht=Y,ot=this,Kt=[],At=T,kt=Kt,P=-1,A=Number.MAX_VALUE,Q=0;Q<ot.faces.length;Q++){nt.copy(ot.faceNormals[Q]),k.vmult(nt,nt);var dt=nt.dot(B);dt<A&&(A=dt,P=Q)}if(!(P<0)){var vt=ot.faces[P];vt.connectedFaces=[];for(var ut=0;ut<ot.faces.length;ut++)for(var Ot=0;Ot<ot.faces[ut].length;Ot++)vt.indexOf(ot.faces[ut][Ot])!==-1&&ut!==P&&vt.connectedFaces.indexOf(ut)===-1&&vt.connectedFaces.push(ut);At.length;for(var yt=vt.length,Lt=0;Lt<yt;Lt++){var jt=ot.vertices[vt[Lt]],wt=ot.vertices[vt[(Lt+1)%yt]];jt.vsub(wt,q),st.copy(q),k.vmult(st,st),J.vadd(st,st),pt.copy(this.faceNormals[P]),k.vmult(pt,pt),J.vadd(pt,pt),st.cross(pt,U),U.negate(U),Tt.copy(jt),k.vmult(Tt,Tt),J.vadd(Tt,Tt),-Tt.dot(U);var Yt;{var Vt=vt.connectedFaces[Lt];Mt.copy(this.faceNormals[Vt]);var ee=this.getPlaneConstantOfFace(Vt);ht.copy(Mt),k.vmult(ht,ht);var Yt=ee-ht.dot(J)}for(this.clipFaceAgainstPlane(At,kt,ht,Yt);At.length;)At.shift();for(;kt.length;)At.push(kt.shift())}Mt.copy(this.faceNormals[P]);var ee=this.getPlaneConstantOfFace(P);ht.copy(Mt),k.vmult(ht,ht);for(var Yt=ee-ht.dot(J),ut=0;ut<At.length;ut++){var zt=ht.dot(At[ut])+Yt;if(zt<=C&&(console.log("clamped: depth="+zt+" to minDist="+(C+"")),zt=C),zt<=G){var Jt=At[ut];if(zt<=0){var Qt={point:Jt,normal:ht,depth:zt};j.push(Qt)}}}}},c.prototype.clipFaceAgainstPlane=function(B,J,k,T){var C,G,j=B.length;if(j<2)return J;var nt=B[B.length-1],q=B[0];C=k.dot(nt)+T;for(var st=0;st<j;st++){if(q=B[st],G=k.dot(q)+T,C<0)if(G<0){var pt=new s;pt.copy(q),J.push(pt)}else{var pt=new s;nt.lerp(q,C/(C-G),pt),J.push(pt)}else if(G<0){var pt=new s;nt.lerp(q,C/(C-G),pt),J.push(pt),J.push(q)}nt=q,C=G}return J},c.prototype.computeWorldVertices=function(B,J){for(var k=this.vertices.length;this.worldVertices.length<k;)this.worldVertices.push(new s);for(var T=this.vertices,C=this.worldVertices,G=0;G!==k;G++)J.vmult(T[G],C[G]),B.vadd(C[G],C[G]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(B,J){var k=this.vertices.length,T=this.vertices;B.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),J.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<k;C++){var G=T[C];G.x<B.x?B.x=G.x:G.x>J.x&&(J.x=G.x),G.y<B.y?B.y=G.y:G.y>J.y&&(J.y=G.y),G.z<B.z?B.z=G.z:G.z>J.z&&(J.z=G.z)}},c.prototype.computeWorldFaceNormals=function(B){for(var J=this.faceNormals.length;this.worldFaceNormals.length<J;)this.worldFaceNormals.push(new s);for(var k=this.faceNormals,T=this.worldFaceNormals,C=0;C!==J;C++)B.vmult(k[C],T[C]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var B=0,J=this.vertices,k=0,T=J.length;k!==T;k++){var C=J[k].norm2();C>B&&(B=C)}this.boundingSphereRadius=Math.sqrt(B)};var X=new s;c.prototype.calculateWorldAABB=function(B,J,k,T){for(var C=this.vertices.length,G=this.vertices,j,nt,q,st,pt,U,Tt=0;Tt<C;Tt++){X.copy(G[Tt]),J.vmult(X,X),B.vadd(X,X);var Mt=X;Mt.x<j||j===void 0?j=Mt.x:(Mt.x>st||st===void 0)&&(st=Mt.x),Mt.y<nt||nt===void 0?nt=Mt.y:(Mt.y>pt||pt===void 0)&&(pt=Mt.y),Mt.z<q||q===void 0?q=Mt.z:(Mt.z>U||U===void 0)&&(U=Mt.z)}k.set(j,nt,q),T.set(st,pt,U)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(B){B=B||new s;for(var J=this.vertices.length,k=this.vertices,T=0;T<J;T++)B.vadd(k[T],B);return B.mult(1/J,B),B},c.prototype.transformAllPoints=function(B,J){var k=this.vertices.length,T=this.vertices;if(J){for(var C=0;C<k;C++){var G=T[C];J.vmult(G,G)}for(var C=0;C<this.faceNormals.length;C++){var G=this.faceNormals[C];J.vmult(G,G)}}if(B)for(var C=0;C<k;C++){var G=T[C];G.vadd(B,G)}};var K=new s,V=new s,D=new s;c.prototype.pointIsInside=function(B){var J=this.vertices.length,k=this.vertices,T=this.faces,C=this.faceNormals,G=null,j=this.faces.length,nt=K;this.getAveragePointLocal(nt);for(var q=0;q<j;q++){this.faces[q].length;var J=C[q],st=k[T[q][0]],pt=V;B.vsub(st,pt);var U=J.dot(pt),Tt=D;nt.vsub(st,Tt);var Mt=J.dot(Tt);if(U<0&&Mt>0||U>0&&Mt<0)return!1}return G?1:-1},new s;var et=new s,Z=new s;c.project=function(B,J,k,T,C){var G=B.vertices.length,j=et,nt=0,q=0,st=Z,pt=B.vertices;st.setZero(),o.vectorToLocalFrame(k,T,J,j),o.pointToLocalFrame(k,T,st,st);var U=st.dot(j);q=nt=pt[0].dot(j);for(var Tt=1;Tt<G;Tt++){var Mt=pt[Tt].dot(j);Mt>nt&&(nt=Mt),Mt<q&&(q=Mt)}if(q-=U,nt-=U,q>nt){var ht=q;q=nt,nt=ht}C[0]=nt,C[1]=q}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,h,l,u){var p=u,v=[],g=[],m=[],f=[],_=[],x=Math.cos,y=Math.sin;v.push(new s(h*x(0),h*y(0),-l*.5)),f.push(0),v.push(new s(d*x(0),d*y(0),l*.5)),_.push(1);for(var R=0;R<p;R++){var L=2*Math.PI/p*(R+1),I=2*Math.PI/p*(R+.5);R<p-1?(v.push(new s(h*x(L),h*y(L),-l*.5)),f.push(2*R+2),v.push(new s(d*x(L),d*y(L),l*.5)),_.push(2*R+3),m.push([2*R+2,2*R+3,2*R+1,2*R])):m.push([0,1,2*R+1,2*R]),(p%2===1||R<p/2)&&g.push(new s(x(I),y(I),0))}m.push(_),g.push(new s(0,0,1));for(var N=[],R=0;R<f.length;R++)N.push(f[f.length-R-1]);m.push(N),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var p=this.data;p[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=u;f++)for(var _=l;_<=p;_++){var x=g[f][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(l/v);return u[0]=m,u[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var p=[];this.getIndexOfPosition(h,l,p,u);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:p,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new o);f.length=5;for(var _=0;_<5;_++)f[_]||(f[_]=[]);var x=p.vertices,y=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((h+.75)*m,(l+.75)*m,y),x[0].set(.25*m,.25*m,g[h+1][l+1]-y),x[1].set(-.75*m,.25*m,g[h][l+1]-y),x[2].set(.25*m,-.75*m,g[h+1][l]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,y),x[0].set(-.25*m,-.25*m,g[h][l]-y),x[1].set(.75*m,-.25*m,g[h+1][l]-y),x[2].set(-.25*m,.75*m,g[h][l+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,p,v)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,p){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new s,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,h){return h=h||new s,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),u.set(p,p,p),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new s;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-u,l[g]=c[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function h(N,w){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(N),this.indices=new Int16Array(w),this.normals=new Float32Array(w.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new s;h.prototype.updateTree=function(){var N=this.tree;N.reset(),N.aabb.copy(this.aabb);var w=this.scale;N.aabb.lowerBound.x*=1/w.x,N.aabb.lowerBound.y*=1/w.y,N.aabb.lowerBound.z*=1/w.z,N.aabb.upperBound.x*=1/w.x,N.aabb.upperBound.y*=1/w.y,N.aabb.upperBound.z*=1/w.z;for(var M=new c,b=new s,O=new s,F=new s,Y=[b,O,F],X=0;X<this.indices.length/3;X++){var K=X*3;this._getUnscaledVertex(this.indices[K],b),this._getUnscaledVertex(this.indices[K+1],O),this._getUnscaledVertex(this.indices[K+2],F),M.setFromPoints(Y),N.insert(M,X)}N.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(N,w){u.copy(N);var M=this.scale,b=M.x,O=M.y,F=M.z,Y=u.lowerBound,X=u.upperBound;return Y.x/=b,Y.y/=O,Y.z/=F,X.x/=b,X.y/=O,X.z/=F,this.tree.aabbQuery(u,w)},h.prototype.setScale=function(N){var w=this.scale.x===this.scale.y===this.scale.z,M=N.x===N.y===N.z;w&&M||this.updateNormals(),this.scale.copy(N),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var N=l,w=this.normals,M=0;M<this.indices.length/3;M++){var b=M*3,O=this.indices[b],F=this.indices[b+1],Y=this.indices[b+2];this.getVertex(O,f),this.getVertex(F,_),this.getVertex(Y,x),h.computeNormal(_,f,x,N),w[b]=N.x,w[b+1]=N.y,w[b+2]=N.z}},h.prototype.updateEdges=function(){for(var N={},w=function(K,V){var D=O<F?O+"_"+F:F+"_"+O;N[D]=!0},M=0;M<this.indices.length/3;M++){var b=M*3,O=this.indices[b],F=this.indices[b+1];this.indices[b+2],w(),w(),w()}var Y=Object.keys(N);this.edges=new Int16Array(Y.length*2);for(var M=0;M<Y.length;M++){var X=Y[M].split("_");this.edges[2*M]=parseInt(X[0],10),this.edges[2*M+1]=parseInt(X[1],10)}},h.prototype.getEdgeVertex=function(N,w,M){var b=this.edges[N*2+(w?1:0)];this.getVertex(b,M)};var p=new s,v=new s;h.prototype.getEdgeVector=function(N,w){var M=p,b=v;this.getEdgeVertex(N,0,M),this.getEdgeVertex(N,1,b),b.vsub(M,w)};var g=new s,m=new s;h.computeNormal=function(N,w,M,b){w.vsub(N,m),M.vsub(w,g),g.cross(m,b),b.isZero()||b.normalize()};var f=new s,_=new s,x=new s;h.prototype.getVertex=function(N,w){var M=this.scale;return this._getUnscaledVertex(N,w),w.x*=M.x,w.y*=M.y,w.z*=M.z,w},h.prototype._getUnscaledVertex=function(N,w){var M=N*3,b=this.vertices;return w.set(b[M],b[M+1],b[M+2])},h.prototype.getWorldVertex=function(N,w,M,b){return this.getVertex(N,b),o.pointToWorldFrame(w,M,b,b),b},h.prototype.getTriangleVertices=function(N,w,M,b){var O=N*3;this.getVertex(this.indices[O],w),this.getVertex(this.indices[O+1],M),this.getVertex(this.indices[O+2],b)},h.prototype.getNormal=function(N,w){var M=N*3;return w.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var y=new c;h.prototype.calculateLocalInertia=function(N,w){this.computeLocalAABB(y);var M=y.upperBound.x-y.lowerBound.x,b=y.upperBound.y-y.lowerBound.y,O=y.upperBound.z-y.lowerBound.z;return w.set(1/12*N*(2*b*2*b+2*O*2*O),1/12*N*(2*M*2*M+2*O*2*O),1/12*N*(2*b*2*b+2*M*2*M))};var R=new s;h.prototype.computeLocalAABB=function(N){var w=N.lowerBound,M=N.upperBound,b=this.vertices.length;this.vertices;var O=R;this.getVertex(0,O),w.copy(O),M.copy(O);for(var F=0;F!==b;F++)this.getVertex(F,O),O.x<w.x?w.x=O.x:O.x>M.x&&(M.x=O.x),O.y<w.y?w.y=O.y:O.y>M.y&&(M.y=O.y),O.z<w.z?w.z=O.z:O.z>M.z&&(M.z=O.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var N=0,w=this.vertices,M=new s,b=0,O=w.length/3;b!==O;b++){this.getVertex(b,M);var F=M.norm2();F>N&&(N=F)}this.boundingSphereRadius=Math.sqrt(N)},new s;var L=new o,I=new c;h.prototype.calculateWorldAABB=function(N,w,M,b){var O=L,F=I;O.position=N,O.quaternion=w,this.aabb.toWorldFrame(O,F),M.copy(F.lowerBound),b.copy(F.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(N,w,M,b,O){N=N||1,w=w||.5,M=M||8,b=b||6,O=O||Math.PI*2;for(var F=[],Y=[],X=0;X<=M;X++)for(var K=0;K<=b;K++){var V=K/b*O,D=X/M*Math.PI*2,et=(N+w*Math.cos(D))*Math.cos(V),Z=(N+w*Math.cos(D))*Math.sin(V),B=w*Math.sin(D);F.push(et,Z,B)}for(var X=1;X<=M;X++)for(var K=1;K<=b;K++){var J=(b+1)*X+K-1,k=(b+1)*(X-1)+K-1,T=(b+1)*(X-1)+K,C=(b+1)*X+K;Y.push(J,k,C),Y.push(k,T,C)}return new h(F,Y)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],d=[];s.prototype.solve=function(h,l){var u=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,_=f.length,x=h,y,R,L,I,N,w;if(m!==0)for(var M=0;M!==_;M++)f[M].updateSolveMassProperties();var b=c,O=d,F=o;b.length=m,O.length=m,F.length=m;for(var M=0;M!==m;M++){var Y=g[M];F[M]=0,O[M]=Y.computeB(x),b[M]=1/Y.computeC()}if(m!==0){for(var M=0;M!==_;M++){var X=f[M],K=X.vlambda,V=X.wlambda;K.set(0,0,0),V&&V.set(0,0,0)}for(u=0;u!==p;u++){I=0;for(var D=0;D!==m;D++){var Y=g[D];y=O[D],R=b[D],w=F[D],N=Y.computeGWlambda(),L=R*(y-N-Y.eps*w),w+L<Y.minForce?L=Y.minForce-w:w+L>Y.maxForce&&(L=Y.maxForce-w),F[D]+=L,I+=L>0?L:-L,Y.addToWlambda(L)}if(I*I<v)break}for(var M=0;M!==_;M++){var X=f[M],et=X.velocity,Z=X.angularVelocity;et.vadd(X.vlambda,et),Z&&Z.vadd(X.wlambda,Z)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],h={bodies:[]},l=s.STATIC;function u(f){for(var _=f.length,x=0;x!==_;x++){var y=f[x];if(!y.visited&&!(y.body.type&l))return y}return!1}var p=[];function v(f,_,x,y){for(p.push(f),f.visited=!0,_(f,x,y);p.length;)for(var R=p.pop(),L;L=u(R.children);)L.visited=!0,_(L,x,y),p.push(L)}function g(f,_,x){_.push(f.body);for(var y=f.eqs.length,R=0;R!==y;R++){var L=f.eqs[R];x.indexOf(L)===-1&&x.push(L)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,_){for(var x=c,y=this.nodePool,R=_.bodies,L=this.equations,I=L.length,N=R.length,w=this.subsolver;y.length<N;)y.push(this.createNode());x.length=N;for(var M=0;M<N;M++)x[M]=y[M];for(var M=0;M!==N;M++){var b=x[M];b.body=R[M],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var O=0;O!==I;O++){var F=L[O],M=R.indexOf(F.bi),Y=R.indexOf(F.bj),X=x[M],K=x[Y];X.children.push(K),X.eqs.push(F),K.children.push(X),K.eqs.push(F)}var V,D=0,et=d;w.tolerance=this.tolerance,w.iterations=this.iterations;for(var Z=h;V=u(x);){et.length=0,Z.bodies.length=0,v(V,g,Z.bodies,et);var B=et.length;et=et.sort(m);for(var M=0;M!==B;M++)w.addEquation(et[M]);w.solve(f,Z),w.removeAllEquations(),D++}return D};function m(f,_){return _.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var d=c[s].indexOf(o);return d!==-1&&c[s].splice(d,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,u,p+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new s;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var _=f.aabb.lowerBound;_.x*=d.x,_.y*=d.y,_.z*=d.z,_.vadd(u,_),_.vadd(d,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(p,v.children)}return u};var h=new r;o.prototype.rayQuery=function(l,u,p){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),p=u.children.length-1;p>=0;p--)u.children[p].data.length||u.children.splice(p,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var d=o;o=s,s=d}var h=s+"-"+o;this.get(s,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,ft,gt,xt,Zt,Nt){var Rt;this.contactPointPool.length?(Rt=this.contactPointPool.pop(),Rt.bi=lt,Rt.bj=ft):Rt=new u(lt,ft),Rt.enabled=lt.collisionResponse&&ft.collisionResponse&&gt.collisionResponse&&xt.collisionResponse;var Ut=this.currentContactMaterial;Rt.restitution=Ut.restitution,Rt.setSpookParams(Ut.contactEquationStiffness,Ut.contactEquationRelaxation,this.world.dt);var rt=gt.material||lt.material,It=xt.material||ft.material;return rt&&It&&rt.restitution>=0&&It.restitution>=0&&(Rt.restitution=rt.restitution*It.restitution),Rt.si=Zt||gt,Rt.sj=Nt||xt,Rt},v.prototype.createFrictionEquationsFromContact=function(lt,ft){var gt=lt.bi,xt=lt.bj,Zt=lt.si,Nt=lt.sj,Rt=this.world,Ut=this.currentContactMaterial,rt=Ut.friction,It=Zt.material||gt.material,Ft=Nt.material||xt.material;if(It&&Ft&&It.friction>=0&&Ft.friction>=0&&(rt=It.friction*Ft.friction),rt>0){var Gt=rt*Rt.gravity.length(),Dt=gt.invMass+xt.invMass;Dt>0&&(Dt=1/Dt);var Pt=this.frictionEquationPool,E=Pt.length?Pt.pop():new p(gt,xt,Gt*Dt),H=Pt.length?Pt.pop():new p(gt,xt,Gt*Dt);return E.bi=H.bi=gt,E.bj=H.bj=xt,E.minForce=H.minForce=-Gt*Dt,E.maxForce=H.maxForce=Gt*Dt,E.ri.copy(lt.ri),E.rj.copy(lt.rj),H.ri.copy(lt.ri),H.rj.copy(lt.rj),lt.ni.tangents(E.t,H.t),E.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,Rt.dt),H.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,Rt.dt),E.enabled=H.enabled=lt.enabled,ft.push(E,H),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(lt){var ft=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ft,this.frictionResult)||lt===1)){var gt=this.frictionResult[this.frictionResult.length-2],xt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var Zt=ft.bi;ft.bj;for(var Nt=0;Nt!==lt;Nt++)ft=this.result[this.result.length-1-Nt],ft.bodyA!==Zt?(g.vadd(ft.ni,g),m.vadd(ft.ri,m),f.vadd(ft.rj,f)):(g.vsub(ft.ni,g),m.vadd(ft.rj,m),f.vadd(ft.ri,f));var Rt=1/lt;m.scale(Rt,gt.ri),f.scale(Rt,gt.rj),xt.ri.copy(gt.ri),xt.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,xt.t)}};var _=new c,x=new c,y=new h,R=new h;v.prototype.getContacts=function(lt,ft,gt,xt,Zt,Nt,Rt){this.contactPointPool=Zt,this.frictionEquationPool=Rt,this.result=xt,this.frictionResult=Nt;for(var Ut=y,rt=R,It=_,Ft=x,Gt=0,Dt=lt.length;Gt!==Dt;Gt++){var Pt=lt[Gt],E=ft[Gt],H=null;Pt.material&&E.material&&(H=gt.getContactMaterial(Pt.material,E.material)||null);for(var $=0;$<Pt.shapes.length;$++){Pt.quaternion.mult(Pt.shapeOrientations[$],Ut),Pt.quaternion.vmult(Pt.shapeOffsets[$],It),It.vadd(Pt.position,It);for(var z=Pt.shapes[$],W=0;W<E.shapes.length;W++){E.quaternion.mult(E.shapeOrientations[W],rt),E.quaternion.vmult(E.shapeOffsets[W],Ft),Ft.vadd(E.position,Ft);var mt=E.shapes[W];if(!(It.distanceTo(Ft)>z.boundingSphereRadius+mt.boundingSphereRadius)){var Ct=null;z.material&&mt.material&&(Ct=gt.getContactMaterial(z.material,mt.material)||null),this.currentContactMaterial=Ct||H||gt.defaultContactMaterial;var St=this[z.type|mt.type];St&&(z.type<mt.type?St.call(this,z,mt,It,Ft,Ut,rt,Pt,E,z,mt):St.call(this,mt,z,Ft,It,rt,Ut,E,Pt,z,mt))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,ft.convexPolyhedronRepresentation.material=ft.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ft.convexPolyhedronRepresentation,gt,xt,Zt,Nt,Rt,Ut,lt,ft)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ft,gt,xt,Zt,Nt,Rt,Ut,lt,ft)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,ft,gt,xt,Zt,Nt,Rt,Ut,lt,ft)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=this.createContactEquation(Rt,Ut,lt,ft);xt.vsub(gt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(lt.radius,rt.ri),rt.rj.mult(-ft.radius,rt.rj),rt.ri.vadd(gt,rt.ri),rt.ri.vsub(Rt.position,rt.ri),rt.rj.vadd(xt,rt.rj),rt.rj.vsub(Ut.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var L=new c,I=new c,N=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=new c,It=L;It.set(0,0,1),Zt.vmult(It,It);for(var Ft=0;Ft<ft.vertices.length/3;Ft++){ft.getVertex(Ft,rt);var Gt=new c;Gt.copy(rt),d.pointToWorldFrame(xt,Nt,Gt,rt);var Dt=I;rt.vsub(gt,Dt);var Pt=It.dot(Dt);if(Pt<=0){var E=this.createContactEquation(Rt,Ut,lt,ft);E.ni.copy(It);var H=N;It.scale(Dt.dot(It),H),rt.vsub(H,H),E.ri.copy(H),E.ri.vsub(Rt.position,E.ri),E.rj.copy(rt),E.rj.vsub(Ut.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}}};var w=new c,M=new c;new c;var b=new c,O=new c,F=new c,Y=new c,X=new c,K=new c,V=new c,D=new c,et=new c,Z=new c,B=new c,J=new r,k=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=F,It=Y,Ft=X,Gt=K,Dt=V,Pt=D,E=J,H=O,$=M,z=k;d.pointToLocalFrame(xt,Nt,gt,Dt);var W=lt.radius;E.lowerBound.set(Dt.x-W,Dt.y-W,Dt.z-W),E.upperBound.set(Dt.x+W,Dt.y+W,Dt.z+W),ft.getTrianglesInAABB(E,z);for(var mt=b,Ct=lt.radius*lt.radius,St=0;St<z.length;St++)for(var bt=0;bt<3;bt++)if(ft.getVertex(ft.indices[z[St]*3+bt],mt),mt.vsub(Dt,$),$.norm2()<=Ct){H.copy(mt),d.pointToWorldFrame(xt,Nt,H,mt),mt.vsub(gt,$);var Et=this.createContactEquation(Rt,Ut,lt,ft);Et.ni.copy($),Et.ni.normalize(),Et.ri.copy(Et.ni),Et.ri.scale(lt.radius,Et.ri),Et.ri.vadd(gt,Et.ri),Et.ri.vsub(Rt.position,Et.ri),Et.rj.copy(mt),Et.rj.vsub(Ut.position,Et.rj),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}for(var St=0;St<z.length;St++)for(var bt=0;bt<3;bt++){ft.getVertex(ft.indices[z[St]*3+bt],rt),ft.getVertex(ft.indices[z[St]*3+(bt+1)%3],It),It.vsub(rt,Ft),Dt.vsub(It,Pt);var $t=Pt.dot(Ft);Dt.vsub(rt,Pt);var qt=Pt.dot(Ft);if(qt>0&&$t<0){Dt.vsub(rt,Pt),Gt.copy(Ft),Gt.normalize(),qt=Pt.dot(Gt),Gt.scale(qt,Pt),Pt.vadd(rt,Pt);var ne=Pt.distanceTo(Dt);if(ne<lt.radius){var Et=this.createContactEquation(Rt,Ut,lt,ft);Pt.vsub(Dt,Et.ni),Et.ni.normalize(),Et.ni.scale(lt.radius,Et.ri),d.pointToWorldFrame(xt,Nt,Pt,Pt),Pt.vsub(Ut.position,Et.rj),d.vectorToWorldFrame(Nt,Et.ni,Et.ni),d.vectorToWorldFrame(Nt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}}for(var fe=et,ue=Z,se=B,oe=w,St=0,Bt=z.length;St!==Bt;St++){ft.getTriangleVertices(z[St],fe,ue,se),ft.getNormal(z[St],oe),Dt.vsub(fe,Pt);var ne=Pt.dot(oe);if(oe.scale(ne,Pt),Dt.vsub(Pt,Pt),ne=Pt.distanceTo(Dt),o.pointInTriangle(Pt,fe,ue,se)&&ne<lt.radius){var Et=this.createContactEquation(Rt,Ut,lt,ft);Pt.vsub(Dt,Et.ni),Et.ni.normalize(),Et.ni.scale(lt.radius,Et.ri),d.pointToWorldFrame(xt,Nt,Pt,Pt),Pt.vsub(Ut.position,Et.rj),d.vectorToWorldFrame(Nt,Et.ni,Et.ni),d.vectorToWorldFrame(Nt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}z.length=0};var T=new c,C=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=this.createContactEquation(Rt,Ut,lt,ft);if(rt.ni.set(0,0,1),Nt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(lt.radius,rt.ri),gt.vsub(xt,T),rt.ni.mult(rt.ni.dot(T),C),T.vsub(C,rt.rj),-T.dot(rt.ni)<=lt.radius){var It=rt.ri,Ft=rt.rj;It.vadd(gt,It),It.vsub(Rt.position,It),Ft.vadd(xt,Ft),Ft.vsub(Ut.position,Ft),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var G=new c,j=new c,nt=new c;function q(lt,ft,gt){for(var xt=null,Zt=lt.length,Nt=0;Nt!==Zt;Nt++){var Rt=lt[Nt],Ut=G;lt[(Nt+1)%Zt].vsub(Rt,Ut);var rt=j;Ut.cross(ft,rt);var It=nt;gt.vsub(Rt,It);var Ft=rt.dot(It);if(xt===null||Ft>0&&xt===!0||Ft<=0&&xt===!1){xt===null&&(xt=Ft>0);continue}else return!1}return!0}var st=new c,pt=new c,U=new c,Tt=new c,Mt=[new c,new c,new c,new c,new c,new c],ht=new c,ot=new c,Kt=new c,At=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=this.v3pool,It=Mt;gt.vsub(xt,st),ft.getSideNormals(It,Nt);for(var Ft=lt.radius,Gt=!1,Dt=ot,Pt=Kt,E=At,H=null,$=0,z=0,W=0,mt=null,Ct=0,St=It.length;Ct!==St&&Gt===!1;Ct++){var bt=pt;bt.copy(It[Ct]);var Et=bt.norm();bt.normalize();var $t=st.dot(bt);if($t<Et+Ft&&$t>0){var qt=U,ne=Tt;qt.copy(It[(Ct+1)%3]),ne.copy(It[(Ct+2)%3]);var fe=qt.norm(),ue=ne.norm();qt.normalize(),ne.normalize();var se=st.dot(qt),oe=st.dot(ne);if(se<fe&&se>-fe&&oe<ue&&oe>-ue){var Ae=Math.abs($t-Et-Ft);(mt===null||Ae<mt)&&(mt=Ae,z=se,W=oe,H=Et,Dt.copy(bt),Pt.copy(qt),E.copy(ne),$++)}}}if($){Gt=!0;var Wt=this.createContactEquation(Rt,Ut,lt,ft);Dt.mult(-Ft,Wt.ri),Wt.ni.copy(Dt),Wt.ni.negate(Wt.ni),Dt.mult(H,Dt),Pt.mult(z,Pt),Dt.vadd(Pt,Dt),E.mult(W,E),Dt.vadd(E,Wt.rj),Wt.ri.vadd(gt,Wt.ri),Wt.ri.vsub(Rt.position,Wt.ri),Wt.rj.vadd(xt,Wt.rj),Wt.rj.vsub(Ut.position,Wt.rj),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}for(var Bt=rt.get(),_e=ht,ie=0;ie!==2&&!Gt;ie++)for(var ge=0;ge!==2&&!Gt;ge++)for(var Se=0;Se!==2&&!Gt;Se++)if(Bt.set(0,0,0),ie?Bt.vadd(It[0],Bt):Bt.vsub(It[0],Bt),ge?Bt.vadd(It[1],Bt):Bt.vsub(It[1],Bt),Se?Bt.vadd(It[2],Bt):Bt.vsub(It[2],Bt),xt.vadd(Bt,_e),_e.vsub(gt,_e),_e.norm2()<Ft*Ft){Gt=!0;var Wt=this.createContactEquation(Rt,Ut,lt,ft);Wt.ri.copy(_e),Wt.ri.normalize(),Wt.ni.copy(Wt.ri),Wt.ri.mult(Ft,Wt.ri),Wt.rj.copy(Bt),Wt.ri.vadd(gt,Wt.ri),Wt.ri.vsub(Rt.position,Wt.ri),Wt.rj.vadd(xt,Wt.rj),Wt.rj.vsub(Ut.position,Wt.rj),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}rt.release(Bt),Bt=null;for(var ye=rt.get(),ke=rt.get(),Wt=rt.get(),we=rt.get(),Ae=rt.get(),Te=It.length,ie=0;ie!==Te&&!Gt;ie++)for(var ge=0;ge!==Te&&!Gt;ge++)if(ie%3!==ge%3){It[ge].cross(It[ie],ye),ye.normalize(),It[ie].vadd(It[ge],ke),Wt.copy(gt),Wt.vsub(ke,Wt),Wt.vsub(xt,Wt);var Ke=Wt.dot(ye);ye.mult(Ke,we);for(var Se=0;Se===ie%3||Se===ge%3;)Se++;Ae.copy(gt),Ae.vsub(we,Ae),Ae.vsub(ke,Ae),Ae.vsub(xt,Ae);var Br=Math.abs(Ke),ji=Ae.norm();if(Br<It[Se].norm()&&ji<Ft){Gt=!0;var Ee=this.createContactEquation(Rt,Ut,lt,ft);ke.vadd(we,Ee.rj),Ee.rj.copy(Ee.rj),Ae.negate(Ee.ni),Ee.ni.normalize(),Ee.ri.copy(Ee.rj),Ee.ri.vadd(xt,Ee.ri),Ee.ri.vsub(gt,Ee.ri),Ee.ri.normalize(),Ee.ri.mult(Ft,Ee.ri),Ee.ri.vadd(gt,Ee.ri),Ee.ri.vsub(Rt.position,Ee.ri),Ee.rj.vadd(xt,Ee.rj),Ee.rj.vsub(Ut.position,Ee.rj),this.result.push(Ee),this.createFrictionEquationsFromContact(Ee,this.frictionResult)}}rt.release(ye,ke,Wt,we,Ae)};var kt=new c,P=new c,A=new c,Q=new c,dt=new c,vt=new c,ut=new c,Ot=new c,yt=new c,Lt=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=this.v3pool;gt.vsub(xt,kt);for(var It=ft.faceNormals,Ft=ft.faces,Gt=ft.vertices,Dt=lt.radius,Pt=0;Pt!==Gt.length;Pt++){var E=Gt[Pt],H=dt;Nt.vmult(E,H),xt.vadd(H,H);var $=Q;if(H.vsub(gt,$),$.norm2()<Dt*Dt){W=!0;var z=this.createContactEquation(Rt,Ut,lt,ft);z.ri.copy($),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Dt,z.ri),H.vsub(xt,z.rj),z.ri.vadd(gt,z.ri),z.ri.vsub(Rt.position,z.ri),z.rj.vadd(xt,z.rj),z.rj.vsub(Ut.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var W=!1,Pt=0,mt=Ft.length;Pt!==mt&&W===!1;Pt++){var Ct=It[Pt],St=Ft[Pt],bt=vt;Nt.vmult(Ct,bt);var Et=ut;Nt.vmult(Gt[St[0]],Et),Et.vadd(xt,Et);var $t=Ot;bt.mult(-Dt,$t),gt.vadd($t,$t);var qt=yt;$t.vsub(Et,qt);var ne=qt.dot(bt),fe=Lt;if(gt.vsub(Et,fe),ne<0&&fe.dot(bt)>0){for(var ue=[],se=0,oe=St.length;se!==oe;se++){var Bt=rt.get();Nt.vmult(Gt[St[se]],Bt),xt.vadd(Bt,Bt),ue.push(Bt)}if(q(ue,bt,gt)){W=!0;var z=this.createContactEquation(Rt,Ut,lt,ft);bt.mult(-Dt,z.ri),bt.negate(z.ni);var _e=rt.get();bt.mult(-ne,_e);var ie=rt.get();bt.mult(-Dt,ie),gt.vsub(xt,z.rj),z.rj.vadd(ie,z.rj),z.rj.vadd(_e,z.rj),z.rj.vadd(xt,z.rj),z.rj.vsub(Ut.position,z.rj),z.ri.vadd(gt,z.ri),z.ri.vsub(Rt.position,z.ri),rt.release(_e),rt.release(ie),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var se=0,ge=ue.length;se!==ge;se++)rt.release(ue[se]);return}else for(var se=0;se!==St.length;se++){var Se=rt.get(),ye=rt.get();Nt.vmult(Gt[St[(se+1)%St.length]],Se),Nt.vmult(Gt[St[(se+2)%St.length]],ye),xt.vadd(Se,Se),xt.vadd(ye,ye);var ke=P;ye.vsub(Se,ke);var Wt=A;ke.unit(Wt);var we=rt.get(),Ae=rt.get();gt.vsub(Se,Ae);var Te=Ae.dot(Wt);Wt.mult(Te,we),we.vadd(Se,we);var Ke=rt.get();if(we.vsub(gt,Ke),Te>0&&Te*Te<ke.norm2()&&Ke.norm2()<Dt*Dt){var z=this.createContactEquation(Rt,Ut,lt,ft);we.vsub(xt,z.rj),we.vsub(gt,z.ni),z.ni.normalize(),z.ni.mult(Dt,z.ri),z.rj.vadd(xt,z.rj),z.rj.vsub(Ut.position,z.rj),z.ri.vadd(gt,z.ri),z.ri.vsub(Rt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var se=0,ge=ue.length;se!==ge;se++)rt.release(ue[se]);rt.release(Se),rt.release(ye),rt.release(we),rt.release(Ke),rt.release(Ae);return}rt.release(Se),rt.release(ye),rt.release(we),rt.release(Ke),rt.release(Ae)}for(var se=0,ge=ue.length;se!==ge;se++)rt.release(ue[se])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){ft.convexPolyhedronRepresentation.material=ft.material,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.planeConvex(lt,ft.convexPolyhedronRepresentation,gt,xt,Zt,Nt,Rt,Ut)};var jt=new c,wt=new c,Vt=new c,ee=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=jt,It=wt;It.set(0,0,1),Zt.vmult(It,It);for(var Ft=0,Gt=Vt,Dt=0;Dt!==ft.vertices.length;Dt++){rt.copy(ft.vertices[Dt]),Nt.vmult(rt,rt),xt.vadd(rt,rt),rt.vsub(gt,Gt);var Pt=It.dot(Gt);if(Pt<=0){var E=this.createContactEquation(Rt,Ut,lt,ft),H=ee;It.mult(It.dot(Gt),H),rt.vsub(H,H),H.vsub(gt,E.ri),E.ni.copy(It),rt.vsub(xt,E.rj),E.ri.vadd(gt,E.ri),E.ri.vsub(Rt.position,E.ri),E.rj.vadd(xt,E.rj),E.rj.vsub(Ut.position,E.rj),this.result.push(E),Ft++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}}this.enableFrictionReduction&&Ft&&this.createFrictionFromAverage(Ft)};var Yt=new c,zt=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut,rt,It,Ft,Gt){var Dt=Yt;if(!(gt.distanceTo(xt)>lt.boundingSphereRadius+ft.boundingSphereRadius)&&lt.findSeparatingAxis(ft,gt,Zt,xt,Nt,Dt,Ft,Gt)){var Pt=[],E=zt;lt.clipAgainstHull(gt,Zt,ft,xt,Nt,Dt,-100,100,Pt);for(var H=0,$=0;$!==Pt.length;$++){var z=this.createContactEquation(Rt,Ut,lt,ft,rt,It),W=z.ri,mt=z.rj;Dt.negate(z.ni),Pt[$].normal.negate(E),E.mult(Pt[$].depth,E),Pt[$].point.vadd(E,W),mt.copy(Pt[$].point),W.vsub(gt,W),mt.vsub(xt,mt),W.vadd(gt,W),W.vsub(Rt.position,W),mt.vadd(xt,mt),mt.vsub(Ut.position,mt),this.result.push(z),H++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&H&&this.createFrictionFromAverage(H)}};var Jt=new c,Qt=new c,de=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=Jt;rt.set(0,0,1),Rt.quaternion.vmult(rt,rt);var It=Qt;xt.vsub(Rt.position,It);var Ft=rt.dot(It);if(Ft<=0){var Gt=this.createContactEquation(Ut,Rt,ft,lt);Gt.ni.copy(rt),Gt.ni.negate(Gt.ni),Gt.ri.set(0,0,0);var Dt=de;rt.mult(rt.dot(xt),Dt),xt.vsub(Dt,Dt),Gt.rj.copy(Dt),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}};var S=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=S;rt.set(0,0,1),xt.vsub(gt,rt);var It=rt.norm2();if(It<=lt.radius*lt.radius){var Ft=this.createContactEquation(Ut,Rt,ft,lt);rt.normalize(),Ft.rj.copy(rt),Ft.rj.mult(lt.radius,Ft.rj),Ft.ni.copy(rt),Ft.ni.negate(Ft.ni),Ft.ri.set(0,0,0),this.result.push(Ft),this.createFrictionEquationsFromContact(Ft,this.frictionResult)}};var tt=new h,it=new c;new c;var ct=new c,_t=new c,Xt=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=-1,It=ct,Ft=Xt,Gt=null,Dt=it;if(Dt.copy(xt),Dt.vsub(gt,Dt),Zt.conjugate(tt),tt.vmult(Dt,Dt),lt.pointIsInside(Dt)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(gt,Zt),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(Zt);for(var Pt=0,E=lt.faces.length;Pt!==E;Pt++){var H=[lt.worldVertices[lt.faces[Pt][0]]],$=lt.worldFaceNormals[Pt];xt.vsub(H[0],_t);var z=-$.dot(_t);(Gt===null||Math.abs(z)<Math.abs(Gt))&&(Gt=z,rt=Pt,It.copy($))}if(rt!==-1){var W=this.createContactEquation(Ut,Rt,ft,lt);It.mult(Gt,Ft),Ft.vadd(xt,Ft),Ft.vsub(gt,Ft),W.rj.copy(Ft),It.negate(W.ni),W.ri.set(0,0,0);var mt=W.ri,Ct=W.rj;mt.vadd(xt,mt),mt.vsub(Ut.position,mt),Ct.vadd(gt,Ct),Ct.vsub(Rt.position,Ct),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,ft,gt,xt,Zt,Nt,Rt,Ut)};var te=new c,me=new c,xe=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=ft.data,It=ft.elementSize,Ft=lt.boundingSphereRadius,Gt=me,Dt=xe,Pt=te;d.pointToLocalFrame(xt,Nt,gt,Pt);var E=Math.floor((Pt.x-Ft)/It)-1,H=Math.ceil((Pt.x+Ft)/It)+1,$=Math.floor((Pt.y-Ft)/It)-1,z=Math.ceil((Pt.y+Ft)/It)+1;if(!(H<0||z<0||E>rt.length||$>rt[0].length)){E<0&&(E=0),H<0&&(H=0),$<0&&($=0),z<0&&(z=0),E>=rt.length&&(E=rt.length-1),H>=rt.length&&(H=rt.length-1),z>=rt[0].length&&(z=rt[0].length-1),$>=rt[0].length&&($=rt[0].length-1);var W=[];ft.getRectMinMax(E,$,H,z,W);var mt=W[0],Ct=W[1];if(!(Pt.z-Ft>Ct||Pt.z+Ft<mt))for(var St=E;St<H;St++)for(var bt=$;bt<z;bt++)ft.getConvexTrianglePillar(St,bt,!1),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut,null,null,Dt,null),ft.getConvexTrianglePillar(St,bt,!0),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut,null,null,Dt,null)}};var ae=new c,he=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,ft,gt,xt,Zt,Nt,Rt,Ut){var rt=ft.data,It=lt.radius,Ft=ft.elementSize,Gt=he,Dt=ae;d.pointToLocalFrame(xt,Nt,gt,Dt);var Pt=Math.floor((Dt.x-It)/Ft)-1,E=Math.ceil((Dt.x+It)/Ft)+1,H=Math.floor((Dt.y-It)/Ft)-1,$=Math.ceil((Dt.y+It)/Ft)+1;if(!(E<0||$<0||Pt>rt.length||$>rt[0].length)){Pt<0&&(Pt=0),E<0&&(E=0),H<0&&(H=0),$<0&&($=0),Pt>=rt.length&&(Pt=rt.length-1),E>=rt.length&&(E=rt.length-1),$>=rt[0].length&&($=rt[0].length-1),H>=rt[0].length&&(H=rt[0].length-1);var z=[];ft.getRectMinMax(Pt,H,E,$,z);var W=z[0],mt=z[1];if(!(Dt.z-It>mt||Dt.z+It<W))for(var Ct=this.result,St=Pt;St<E;St++)for(var bt=H;bt<$;bt++){var Et=Ct.length;ft.getConvexTrianglePillar(St,bt,!1),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut),ft.getConvexTrianglePillar(St,bt,!0),d.pointToWorldFrame(xt,Nt,ft.pillarOffset,Gt),gt.distanceTo(Gt)<ft.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ft.pillarConvex,gt,Gt,Zt,Nt,Rt,Ut);var $t=Ct.length-Et;if($t>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=y;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new x,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new h,new f;var R=new _;if(y.prototype.getContactMaterial=function(D,et){return this.contactMaterialTable.get(D.id,et.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof v&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(D){this.constraints.push(D)},y.prototype.removeConstraint=function(D){var et=this.constraints.indexOf(D);et!==-1&&this.constraints.splice(et,1)},y.prototype.rayTest=function(D,et,Z){Z instanceof m?this.raycastClosest(D,et,{skipBackfaces:!0},Z):this.raycastAll(D,et,{skipBackfaces:!0},Z)},y.prototype.raycastAll=function(D,et,Z,B){return Z.mode=_.ALL,Z.from=D,Z.to=et,Z.callback=B,R.intersectWorld(this,Z)},y.prototype.raycastAny=function(D,et,Z,B){return Z.mode=_.ANY,Z.from=D,Z.to=et,Z.result=B,R.intersectWorld(this,Z)},y.prototype.raycastClosest=function(D,et,Z,B){return Z.mode=_.CLOSEST,Z.from=D,Z.to=et,Z.result=B,R.intersectWorld(this,Z)},y.prototype.remove=function(D){D.world=null;var et=this.bodies.length-1,Z=this.bodies,B=Z.indexOf(D);if(B!==-1){Z.splice(B,1);for(var J=0;J!==Z.length;J++)Z[J].index=J;this.collisionMatrix.setNumObjects(et),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(D){this.materials.push(D)},y.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var L=Date.now();performance.timing&&performance.timing.navigationStart&&(L=performance.timing.navigationStart),performance.now=function(){return Date.now()-L}}var I=new s;y.prototype.step=function(D,et,Z){if(Z=Z||10,et=et||0,et===0)this.internalStep(D),this.time+=D;else{var B=Math.floor((this.time+et)/D)-Math.floor(this.time/D);B=Math.min(B,Z);for(var J=performance.now(),k=0;k!==B&&(this.internalStep(D),!(performance.now()-J>D*1e3));k++);this.time+=et;for(var T=this.time%D,C=T/D,G=I,j=this.bodies,nt=0;nt!==j.length;nt++){var q=j[nt];q.type!==v.STATIC&&q.sleepState!==v.SLEEPING?(q.position.vsub(q.previousPosition,G),G.scale(C,G),q.position.vadd(G,q.interpolatedPosition)):(q.interpolatedPosition.copy(q.position),q.interpolatedQuaternion.copy(q.quaternion))}}};var N={type:"postStep"},w={type:"preStep"},M={type:"collide",body:null,contact:null},b=[],O=[],F=[],Y=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var X=new o,K=new o,V=new s;y.prototype.internalStep=function(D){this.dt=D;var et=this.contacts,Z=F,B=Y,J=this.numObjects(),k=this.bodies,T=this.solver,C=this.gravity,G=this.doProfiling,j=this.profile,nt=v.DYNAMIC,q,st=this.constraints,pt=O;C.norm();var U=C.x,Tt=C.y,Mt=C.z,ht=0;for(G&&(q=performance.now()),ht=0;ht!==J;ht++){var ot=k[ht];if(ot.type&nt){var Kt=ot.force,At=ot.mass;Kt.x+=At*U,Kt.y+=At*Tt,Kt.z+=At*Mt}}for(var ht=0,kt=this.subsystems.length;ht!==kt;ht++)this.subsystems[ht].update();G&&(q=performance.now()),Z.length=0,B.length=0,this.broadphase.collisionPairs(this,Z,B),G&&(j.broadphase=performance.now()-q);var Yt=st.length;for(ht=0;ht!==Yt;ht++){var P=st[ht];if(!P.collideConnected)for(var A=Z.length-1;A>=0;A-=1)(P.bodyA===Z[A]&&P.bodyB===B[A]||P.bodyB===Z[A]&&P.bodyA===B[A])&&(Z.splice(A,1),B.splice(A,1))}this.collisionMatrixTick(),G&&(q=performance.now());var Q=b,dt=et.length;for(ht=0;ht!==dt;ht++)Q.push(et[ht]);et.length=0;var vt=this.frictionEquations.length;for(ht=0;ht!==vt;ht++)pt.push(this.frictionEquations[ht]);this.frictionEquations.length=0,this.narrowphase.getContacts(Z,B,this,et,Q,this.frictionEquations,pt),G&&(j.narrowphase=performance.now()-q),G&&(q=performance.now());for(var ht=0;ht<this.frictionEquations.length;ht++)T.addEquation(this.frictionEquations[ht]);for(var ut=et.length,Ot=0;Ot!==ut;Ot++){var P=et[Ot],ot=P.bi,yt=P.bj;P.si,P.sj;var Lt;if(ot.material&&yt.material?Lt=this.getContactMaterial(ot.material,yt.material)||this.defaultContactMaterial:Lt=this.defaultContactMaterial,Lt.friction,ot.material&&yt.material&&(ot.material.friction>=0&&yt.material.friction>=0&&ot.material.friction*yt.material.friction,ot.material.restitution>=0&&yt.material.restitution>=0&&(P.restitution=ot.material.restitution*yt.material.restitution)),T.addEquation(P),ot.allowSleep&&ot.type===v.DYNAMIC&&ot.sleepState===v.SLEEPING&&yt.sleepState===v.AWAKE&&yt.type!==v.STATIC){var jt=yt.velocity.norm2()+yt.angularVelocity.norm2(),wt=Math.pow(yt.sleepSpeedLimit,2);jt>=wt*2&&(ot._wakeUpAfterNarrowphase=!0)}if(yt.allowSleep&&yt.type===v.DYNAMIC&&yt.sleepState===v.SLEEPING&&ot.sleepState===v.AWAKE&&ot.type!==v.STATIC){var Vt=ot.velocity.norm2()+ot.angularVelocity.norm2(),ee=Math.pow(ot.sleepSpeedLimit,2);Vt>=ee*2&&(yt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ot,yt,!0),this.collisionMatrixPrevious.get(ot,yt)||(M.body=yt,M.contact=P,ot.dispatchEvent(M),M.body=ot,yt.dispatchEvent(M))}for(G&&(j.makeContactConstraints=performance.now()-q,q=performance.now()),ht=0;ht!==J;ht++){var ot=k[ht];ot._wakeUpAfterNarrowphase&&(ot.wakeUp(),ot._wakeUpAfterNarrowphase=!1)}var Yt=st.length;for(ht=0;ht!==Yt;ht++){var P=st[ht];P.update();for(var A=0,zt=P.equations.length;A!==zt;A++){var Jt=P.equations[A];T.addEquation(Jt)}}T.solve(D,this),G&&(j.solve=performance.now()-q),T.removeAllEquations();var Qt=Math.pow;for(ht=0;ht!==J;ht++){var ot=k[ht];if(ot.type&nt){var de=Qt(1-ot.linearDamping,D),S=ot.velocity;S.mult(de,S);var tt=ot.angularVelocity;if(tt){var it=Qt(1-ot.angularDamping,D);tt.mult(it,tt)}}}for(this.dispatchEvent(w),ht=0;ht!==J;ht++){var ot=k[ht];ot.preStep&&ot.preStep.call(ot)}G&&(q=performance.now());var ct=X,_t=K,Xt=this.stepnumber,te=v.DYNAMIC|v.KINEMATIC,me=Xt%(this.quatNormalizeSkip+1)===0,xe=this.quatNormalizeFast,ae=D*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ht=0;ht!==J;ht++){var he=k[ht],lt=he.force,ft=he.torque;if(he.type&te&&he.sleepState!==v.SLEEPING){var gt=he.velocity,xt=he.angularVelocity,Zt=he.position,Nt=he.quaternion,Rt=he.invMass,Ut=he.invInertiaWorld;gt.x+=lt.x*Rt*D,gt.y+=lt.y*Rt*D,gt.z+=lt.z*Rt*D,he.angularVelocity&&(Ut.vmult(ft,V),V.mult(D,V),V.vadd(xt,xt)),Zt.x+=gt.x*D,Zt.y+=gt.y*D,Zt.z+=gt.z*D,he.angularVelocity&&(ct.set(xt.x,xt.y,xt.z,0),ct.mult(Nt,_t),Nt.x+=ae*_t.x,Nt.y+=ae*_t.y,Nt.z+=ae*_t.z,Nt.w+=ae*_t.w,me&&(xe?Nt.normalizeFast():Nt.normalize())),he.aabb&&(he.aabbNeedsUpdate=!0),he.updateInertiaWorld&&he.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(j.integrate=performance.now()-q),this.time+=D,this.stepnumber+=1,this.dispatchEvent(N),ht=0;ht!==J;ht++){var ot=k[ht],rt=ot.postStep;rt&&rt.call(ot)}if(this.allowSleep)for(ht=0;ht!==J;ht++)k[ht].sleepTick(this.time)},y.prototype.clearForces=function(){for(var D=this.bodies,et=D.length,Z=0;Z!==et;Z++){var B=D[Z];B.force,B.torque,B.force.set(0,0,0),B.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(rl);var im=rl.exports;const Ve=nm(im),ha=new ca,Di={};Di.createSphere=()=>{cl(Math.random()*.5,{x:Math.random()-.5,y:3,z:Math.random()-.5})};ha.add(Di,"createSphere");Di.createBox=()=>{dm(Math.random(),Math.random(),Math.random(),{x:Math.random()-.5,y:3,z:Math.random()-.5})};ha.add(Di,"createBox");Di.reset=()=>{for(const i of Ei)i.body.removeEventListener("collide",al),hn.removeBodyEvent,Fn.remove(i.mesh);Ei.splice(0,Ei.length)};ha.add(Di,"reset");const sl=document.querySelector("canvas.webgl"),Fn=new Ip,fs=new Audio("/sounds/hit.mp3"),al=i=>{i.contact.getImpactVelocityAlongNormal()>1.5&&(fs.volume=Math.random(),fs.currentTime=0,fs.play())};new Fp;const rm=new Up,ua=rm.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),hn=new Ve.World;hn.broadphase=new Ve.SAPBroadphase(hn);hn.allowSleep=!0;hn.gravity.set(0,-9.82,0);const Xi=new Ve.Material("default"),sm=new Ve.ContactMaterial(Xi,Xi,{friction:.1,restitution:.7});hn.addContactMaterial(sm);const am=new Ve.Plane,ol=new Ve.Body({mass:0,shape:am,material:Xi});ol.quaternion.setFromAxisAngle(new Ve.Vec3(-1,0,0),Math.PI*.5);hn.addBody(ol);const da=new $e(new Ki(10,10),new la({color:"#777777",metalness:.3,roughness:.4,envMap:ua,envMapIntensity:.5}));da.receiveShadow=!0;da.rotation.x=-Math.PI*.5;Fn.add(da);const om=new Vp(16777215,2.1);Fn.add(om);const Mn=new zp(16777215,.6);Mn.castShadow=!0;Mn.shadow.mapSize.set(1024,1024);Mn.shadow.camera.far=15;Mn.shadow.camera.left=-7;Mn.shadow.camera.top=7;Mn.shadow.camera.right=7;Mn.shadow.camera.bottom=-7;Mn.position.set(5,5,5);Fn.add(Mn);const rn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{rn.width=window.innerWidth,rn.height=window.innerHeight,Ri.aspect=rn.width/rn.height,Ri.updateProjectionMatrix(),Zn.setSize(rn.width,rn.height),Zn.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Ri=new qe(75,rn.width/rn.height,.1,100);Ri.position.set(-3,3,3);Fn.add(Ri);const ll=new Gp(Ri,sl);ll.enableDamping=!0;const Zn=new Lp({canvas:sl});Zn.shadowMap.enabled=!0;Zn.shadowMap.type=So;Zn.setSize(rn.width,rn.height);Zn.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ei=[],lm=new oa(1,20,20),cm=new la({roughness:.4,metalness:.3,envMap:ua}),cl=(i,t)=>{const e=new $e(lm,cm);e.scale.set(i,i,i),e.castShadow=!0,e.position.copy(t),Fn.add(e);const n=new Ve.Sphere(i),a=new Ve.Body({mass:1,position:Ve.Vec3(0,3,0),shape:n,material:Xi});a.position.copy(t),hn.addBody(a),Ei.push({mesh:e,body:a})};cl(.5,{x:0,y:3,z:0});const hm=new Li(1,1,1),um=new la({roughness:.4,metalness:.3,envMap:ua}),dm=(i,t,e,n)=>{const a=new $e(hm,um);a.scale.set(i,t,e),a.castShadow=!0,a.position.copy(n),Fn.add(a);const r=new Ve.Box(new Ve.Vec3(i*.5,t*.5,e*.5)),s=new Ve.Body({mass:1,position:Ve.Vec3(0,3,0),shape:r,material:Xi});s.position.copy(n),s.addEventListener("collide",al),hn.addBody(s),Ei.push({mesh:a,body:s})},fm=new Hp;let yo=0;const hl=()=>{const i=fm.getElapsedTime(),t=i-yo;yo=i;for(const e of Ei)e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion);hn.step(1/60,t,3),ll.update(),Zn.render(Fn,Ri),window.requestAnimationFrame(hl)};hl();
//# sourceMappingURL=index-jsjMfa3N.js.map
