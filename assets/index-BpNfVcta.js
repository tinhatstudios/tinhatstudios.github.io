var w0=Object.defineProperty;var Rc=et=>{throw TypeError(et)};var A0=(et,$e,st)=>$e in et?w0(et,$e,{enumerable:!0,configurable:!0,writable:!0,value:st}):et[$e]=st;var Nr=(et,$e,st)=>A0(et,typeof $e!="symbol"?$e+"":$e,st),R0=(et,$e,st)=>$e.has(et)||Rc("Cannot "+st);var Cc=(et,$e,st)=>$e.has(et)?Rc("Cannot add the same private member more than once"):$e instanceof WeakSet?$e.add(et):$e.set(et,st),Lc=(et,$e,st,rn)=>(R0(et,$e,"write to private field"),rn?rn.call(et,st):$e.set(et,st),st);let Rs,tn,C0=(async()=>{var na,_c,vc,xc,yc,bc;(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const et="160",$e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},st={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rn=0,Cs=1,Pc=2,Ls=1,Uc=2,ar=3,xr=0,Rt=1,Wt=2,Xt=0,ei=1,la=2,Ps=3,Us=4,Dc=5,Or=100,Ic=101,Nc=102,Ds=103,Is=104,Oc=200,Fc=201,Bc=202,zc=203,ca=204,ua=205,Hc=206,kc=207,Gc=208,Vc=209,Wc=210,Xc=211,jc=212,qc=213,Yc=214,Kc=0,Zc=1,Jc=2,nn=3,Qc=4,$c=5,eu=6,tu=7,ha=0,ru=1,iu=2,yr=0,nu=1,au=2,su=3,ou=4,lu=5,cu=6,Ns=300,ti=301,ri=302,da=303,pa=304,an=306,fa=1e3,jt=1001,ma=1002,Et=1003,Os=1004,ga=1005,Nt=1006,uu=1007,Bi=1008,br=1009,hu=1010,du=1011,_a=1012,Fs=1013,Er=1014,Mr=1015,Ot=1016,Bs=1017,zs=1018,Fr=1020,pu=1021,qt=1023,fu=1024,mu=1025,Br=1026,ii=1027,gu=1028,Hs=1029,_u=1030,ks=1031,Gs=1033,va=33776,xa=33777,ya=33778,ba=33779,Vs=35840,Ws=35841,Xs=35842,js=35843,qs=36196,Ys=37492,Ks=37496,Zs=37808,Js=37809,Qs=37810,$s=37811,eo=37812,to=37813,ro=37814,io=37815,no=37816,ao=37817,so=37818,oo=37819,lo=37820,co=37821,Ea=36492,uo=36494,ho=36495,vu=36283,po=36284,fo=36285,mo=36286,go=3e3,zr=3001,xu=3200,_o=3201,vo=0,yu=1,Ft="",ut="srgb",Bt="srgb-linear",Ma="display-p3",sn="display-p3-linear",on="linear",Je="srgb",ln="rec709",cn="p3",ni=7680,xo=519,bu=512,Eu=513,Mu=514,yo=515,Su=516,Tu=517,wu=518,Au=519,bo=35044,Eo="300 es",Sa=1035,sr=2e3,un=2001;class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mo=1234567;const zi=Math.PI/180,Hi=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Ta(i,e){return(i%e+e)%e}function Ru(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function Cu(i,e,t){return i!==e?(t-i)/(e-i):0}function ki(i,e,t){return(1-t)*i+t*e}function Lu(i,e,t,r){return ki(i,e,1-Math.exp(-t*r))}function Pu(i,e=1){return e-Math.abs(Ta(i,e*2)-e)}function Uu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nu(i,e){return i+Math.random()*(e-i)}function Ou(i){return i*(.5-Math.random())}function Fu(i){i!==void 0&&(Mo=i);let e=Mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bu(i){return i*zi}function zu(i){return i*Hi}function wa(i){return(i&i-1)===0&&i!==0}function Hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,e,t,r,n){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+r)/2),u=o((e+r)/2),f=a((e-r)/2),d=o((e-r)/2),p=a((r-e)/2),g=o((r-e)/2);switch(n){case"XYX":i.set(s*u,l*f,l*d,s*c);break;case"YZY":i.set(l*d,s*u,l*f,s*c);break;case"ZXZ":i.set(l*f,l*d,s*u,s*c);break;case"XZX":i.set(s*u,l*g,l*p,s*c);break;case"YXY":i.set(l*p,s*u,l*g,s*c);break;case"ZYZ":i.set(l*g,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gu={DEG2RAD:zi,RAD2DEG:Hi,generateUUID:ai,clamp:gt,euclideanModulo:Ta,mapLinear:Ru,inverseLerp:Cu,lerp:ki,damp:Lu,pingpong:Pu,smoothstep:Uu,smootherstep:Du,randInt:Iu,randFloat:Nu,randFloatSpread:Ou,seededRandom:Fu,degToRad:Bu,radToDeg:zu,isPowerOfTwo:wa,ceilPowerOfTwo:Hu,floorPowerOfTwo:hn,setQuaternionFromProperEuler:ku,normalize:Mt,denormalize:si};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,r,n,a,o,s,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c)}set(e,t,r,n,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],d=r[2],p=r[5],g=r[8],v=n[0],m=n[3],h=n[6],S=n[1],x=n[4],C=n[7],D=n[2],R=n[5],A=n[8];return a[0]=o*v+s*S+l*D,a[3]=o*m+s*x+l*R,a[6]=o*h+s*C+l*A,a[1]=c*v+u*S+f*D,a[4]=c*m+u*x+f*R,a[7]=c*h+u*C+f*A,a[2]=d*v+p*S+g*D,a[5]=d*m+p*x+g*R,a[8]=d*h+p*C+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-r*a*u+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,p=c*a-o*l,g=t*f+r*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(n*c-u*r)*v,e[2]=(s*r-n*o)*v,e[3]=d*v,e[4]=(u*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=p*v,e[7]=(r*l-c*t)*v,e[8]=(o*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new ke;function So(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){const i=dn("canvas");return i.style.display="block",i}const To={};function Gi(i){i in To||(To[i]=!0,console.warn(i))}const wo=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ao=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pn={[Bt]:{transfer:on,primaries:ln,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:Je,primaries:ln,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sn]:{transfer:on,primaries:cn,toReference:i=>i.applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(wo)},[Ma]:{transfer:Je,primaries:cn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(wo).convertLinearToSRGB()}},Wu=new Set([Bt,sn]),Ye={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=pn[e].toReference,n=pn[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return pn[i].primaries},getTransfer:function(i){return i===Ft?on:pn[i].transfer}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class Ro{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=dn("canvas")),li.width=e.width,li.height=e.height;const r=li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=oi(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(oi(t[r]/255)*255):t[r]=oi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class Co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Ca(n[o].image)):a.push(Ca(n[o]))}else a=Ca(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class Pt extends Hr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,r=jt,n=jt,a=Nt,o=Bi,s=qt,l=br,c=Pt.DEFAULT_ANISOTROPY,u=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ai(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===zr?ut:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ns)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?zr:go}set encoding(e){Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?ut:Ft}}Pt.DEFAULT_IMAGE=null,Pt.DEFAULT_MAPPING=Ns,Pt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],u=o[1],f=o[5],d=o[9],p=o[2],g=o[6],v=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(s+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(s+1)/2,S=(f+1)/2,x=(v+1)/2,C=(l+u)/4,D=(c+p)/4,R=(d+g)/4;return h>S&&h>x?h<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(h),n=C/r,a=D/r):S>x?S<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),r=C/n,a=R/n):x<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(x),r=D/a,n=R/a),this.set(r,n,a,t),this}let m=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(c-p)/m,this.z=(u-l)/m,this.w=Math.acos((s+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends Hr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===zr?ut:Ft),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Pt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class St extends qu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Lo extends Pt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yu extends Pt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const d=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-s;const h=l*d+c*p+u*g+f*v,S=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,h*S);m=Math.sin(m*R)/D,s=Math.sin(s*R)/D}const C=s*S;if(l=l*m+d*C,c=c*m+p*C,u=u*m+g*C,f=f*m+v*C,m===1-s){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=a[o],d=a[o+1],p=a[o+2],g=a[o+3];return e[t]=s*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-s*p,e[t+2]=c*g+u*p+s*d-l*f,e[t+3]=u*g-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(n/2),f=s(a/2),d=l(r/2),p=l(n/2),g=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=r+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-n)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(a-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(o-n)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*s+n*c-a*l,this._y=n*u+o*l+a*s-r*c,this._z=a*u+o*c+r*l-n*s,this._w=o*u-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*r+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=r*f+this._x*d,this._y=n*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,r=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),u=2*(s*t-a*n),f=2*(a*r-o*t);return this.x=t+l*c+o*f-s*u,this.y=r+l*u+s*c-a*f,this.z=n+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new P,Po=new kr;class Vi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(a,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fn.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fn.copy(r.boundingBox)),fn.applyMatrix4(e.matrixWorld),this.union(fn)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),mn.subVectors(this.max,Wi),ci.subVectors(e.a,Wi),ui.subVectors(e.b,Wi),hi.subVectors(e.c,Wi),Sr.subVectors(ui,ci),Tr.subVectors(hi,ui),Gr.subVectors(ci,hi);let t=[0,-Sr.z,Sr.y,0,-Tr.z,Tr.y,0,-Gr.z,Gr.y,Sr.z,0,-Sr.x,Tr.z,0,-Tr.x,Gr.z,0,-Gr.x,-Sr.y,Sr.x,0,-Tr.y,Tr.x,0,-Gr.y,Gr.x,0];return!Pa(t,ci,ui,hi,mn)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,ci,ui,hi,mn))?!1:(gn.crossVectors(Sr,Tr),t=[gn.x,gn.y,gn.z],Pa(t,ci,ui,hi,mn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const or=[new P,new P,new P,new P,new P,new P,new P,new P],Yt=new P,fn=new Vi,ci=new P,ui=new P,hi=new P,Sr=new P,Tr=new P,Gr=new P,Wi=new P,mn=new P,gn=new P,Vr=new P;function Pa(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){Vr.fromArray(i,a);const s=n.x*Math.abs(Vr.x)+n.y*Math.abs(Vr.y)+n.z*Math.abs(Vr.z),l=e.dot(Vr),c=t.dot(Vr),u=r.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Ku=new Vi,Xi=new P,Ua=new P;class _n{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ku.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Xi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Ua)),this.expandByPoint(Xi.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lr=new P,Da=new P,vn=new P,wr=new P,Ia=new P,xn=new P,Na=new P;class yn{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Da.copy(e).add(t).multiplyScalar(.5),vn.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Da);const a=e.distanceTo(t)*.5,o=-this.direction.dot(vn),s=wr.dot(this.direction),l=-wr.dot(vn),c=wr.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-s,d=o*s-l,g=a*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Da).addScaledVector(vn,d),p}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),n=lr.dot(lr)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,r,n,a){Ia.subVectors(t,e),xn.subVectors(r,e),Na.crossVectors(Ia,xn);let o=this.direction.dot(Na),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;wr.subVectors(this.origin,e);const l=s*this.direction.dot(xn.crossVectors(wr,xn));if(l<0)return null;const c=s*this.direction.dot(Ia.cross(wr));if(c<0||l+c>o)return null;const u=-s*wr.dot(Na);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,r,n,a,o,s,l,c,u,f,d,p,g,v,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c,u,f,d,p,g,v,m)}set(e,t,r,n,a,o,s,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=n,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/di.setFromMatrixColumn(e,0).length(),a=1/di.setFromMatrixColumn(e,1).length(),o=1/di.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,g=s*u,v=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*s,t[4]=g*s-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=p*s-g,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*s,t[4]=-o*f,t[8]=g+p*s,t[1]=p+g*s,t[5]=o*u,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=s*u,v=s*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=s*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zu,e,Ju)}lookAt(e,t,r){const n=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Ar.crossVectors(r,Ut),Ar.lengthSq()===0&&(Math.abs(r.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Ar.crossVectors(r,Ut)),Ar.normalize(),bn.crossVectors(Ut,Ar),n[0]=Ar.x,n[4]=bn.x,n[8]=Ut.x,n[1]=Ar.y,n[5]=bn.y,n[9]=Ut.y,n[2]=Ar.z,n[6]=bn.z,n[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],d=r[9],p=r[13],g=r[2],v=r[6],m=r[10],h=r[14],S=r[3],x=r[7],C=r[11],D=r[15],R=n[0],A=n[4],Z=n[8],E=n[12],M=n[1],k=n[5],G=n[9],ue=n[13],L=n[2],F=n[6],V=n[10],j=n[14],X=n[3],W=n[7],ee=n[11],re=n[15];return a[0]=o*R+s*M+l*L+c*X,a[4]=o*A+s*k+l*F+c*W,a[8]=o*Z+s*G+l*V+c*ee,a[12]=o*E+s*ue+l*j+c*re,a[1]=u*R+f*M+d*L+p*X,a[5]=u*A+f*k+d*F+p*W,a[9]=u*Z+f*G+d*V+p*ee,a[13]=u*E+f*ue+d*j+p*re,a[2]=g*R+v*M+m*L+h*X,a[6]=g*A+v*k+m*F+h*W,a[10]=g*Z+v*G+m*V+h*ee,a[14]=g*E+v*ue+m*j+h*re,a[3]=S*R+x*M+C*L+D*X,a[7]=S*A+x*k+C*F+D*W,a[11]=S*Z+x*G+C*V+D*ee,a[15]=S*E+x*ue+C*j+D*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+a*l*f-n*c*f-a*s*d+r*c*d+n*s*p-r*l*p)+v*(+t*l*p-t*c*d+a*o*d-n*o*p+n*c*u-a*l*u)+m*(+t*c*f-t*s*p-a*o*f+r*o*p+a*s*u-r*c*u)+h*(-n*s*u-t*l*f+t*s*d+n*o*f-r*o*d+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-s*m*p-f*l*h+s*d*h,x=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,C=u*v*c-g*f*c+g*s*p-o*v*p-u*s*h+o*f*h,D=g*f*l-u*v*l-g*s*d+o*v*d+u*s*m-o*f*m,R=t*S+r*x+n*C+a*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(v*d*a-f*m*a-v*n*p+r*m*p+f*n*h-r*d*h)*A,e[2]=(s*m*a-v*l*a+v*n*c-r*m*c-s*n*h+r*l*h)*A,e[3]=(f*l*a-s*d*a-f*n*c+r*d*c+s*n*p-r*l*p)*A,e[4]=x*A,e[5]=(u*m*a-g*d*a+g*n*p-t*m*p-u*n*h+t*d*h)*A,e[6]=(g*l*a-o*m*a-g*n*c+t*m*c+o*n*h-t*l*h)*A,e[7]=(o*d*a-u*l*a+u*n*c-t*d*c-o*n*p+t*l*p)*A,e[8]=C*A,e[9]=(g*f*a-u*v*a-g*r*p+t*v*p+u*r*h-t*f*h)*A,e[10]=(o*v*a-g*s*a+g*r*c-t*v*c-o*r*h+t*s*h)*A,e[11]=(u*s*a-o*f*a-u*r*c+t*f*c+o*r*p-t*s*p)*A,e[12]=D*A,e[13]=(u*v*n-g*f*n+g*r*d-t*v*d-u*r*m+t*f*m)*A,e[14]=(g*s*n-o*v*n-g*r*l+t*v*l+o*r*m-t*s*m)*A,e[15]=(o*f*n-u*s*n+u*r*l-t*f*l-o*r*d+t*s*d)*A,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+r,u*l-n*o,0,c*l-n*s,u*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,f=s+s,d=a*c,p=a*u,g=a*f,v=o*u,m=o*f,h=s*f,S=l*c,x=l*u,C=l*f,D=r.x,R=r.y,A=r.z;return n[0]=(1-(v+h))*D,n[1]=(p+C)*D,n[2]=(g-x)*D,n[3]=0,n[4]=(p-C)*R,n[5]=(1-(d+h))*R,n[6]=(m+S)*R,n[7]=0,n[8]=(g+x)*A,n[9]=(m-S)*A,n[10]=(1-(d+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=di.set(n[0],n[1],n[2]).length();const o=di.set(n[4],n[5],n[6]).length(),s=di.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Kt.copy(this);const l=1/a,c=1/o,u=1/s;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=c,Kt.elements[5]*=c,Kt.elements[6]*=c,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o,s=sr){const l=this.elements,c=2*a/(t-e),u=2*a/(r-n),f=(t+e)/(t-e),d=(r+n)/(r-n);let p,g;if(s===sr)p=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===un)p=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,o,s=sr){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(o-a),d=(t+e)*c,p=(r+n)*u;let g,v;if(s===sr)g=(o+a)*f,v=-2*f;else if(s===un)g=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const di=new P,Kt=new tt,Zu=new P(0,0,0),Ju=new P(1,1,1),Ar=new P,bn=new P,Ut=new P,Uo=new tt,Do=new kr;class En{constructor(e=0,t=0,r=0,n=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],f=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qu=0;const Io=new P,pi=new kr,cr=new tt,Mn=new P,ji=new P,$u=new P,eh=new kr,No=new P(1,0,0),Oo=new P(0,1,0),Fo=new P(0,0,1),th={type:"added"},rh={type:"removed"};class dt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new P,t=new En,r=new kr,n=new P(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new tt},normalMatrix:{value:new ke}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Mn.copy(e):Mn.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ji,Mn,this.up):cr.lookAt(Mn,ji,this.up),this.quaternion.setFromRotationMatrix(cr),n&&(cr.extractRotation(n.matrixWorld),pi.setFromRotationMatrix(cr),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=n,r;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}dt.DEFAULT_UP=new P(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new P,ur=new P,Fa=new P,hr=new P,fi=new P,mi=new P,Bo=new P,Ba=new P,za=new P,Ha=new P;let Sn=!1;class Jt{constructor(e=new P,t=new P,r=new P){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Zt.subVectors(e,t),n.cross(Zt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){Zt.subVectors(n,t),ur.subVectors(r,t),Fa.subVectors(e,t);const o=Zt.dot(Zt),s=Zt.dot(ur),l=Zt.dot(Fa),c=ur.dot(ur),u=ur.dot(Fa),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const d=1/f,p=(c*l-s*u)*d,g=(o*u-s*l)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getUV(e,t,r,n,a,o,s,l){return Sn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sn=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,hr.x),l.addScaledVector(o,hr.y),l.addScaledVector(s,hr.z),l)}static isFrontFacing(e,t,r,n){return Zt.subVectors(r,t),ur.subVectors(e,t),Zt.cross(ur).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Zt.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return Sn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sn=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return Jt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;fi.subVectors(n,r),mi.subVectors(a,r),Ba.subVectors(e,r);const l=fi.dot(Ba),c=mi.dot(Ba);if(l<=0&&c<=0)return t.copy(r);za.subVectors(e,n);const u=fi.dot(za),f=mi.dot(za);if(u>=0&&f<=u)return t.copy(n);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(fi,o);Ha.subVectors(e,a);const p=fi.dot(Ha),g=mi.dot(Ha);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(r).addScaledVector(mi,s);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Bo.subVectors(a,n),s=(f-u)/(f-u+(p-g)),t.copy(n).addScaledVector(Bo,s);const h=1/(m+v+d);return o=v*h,s=d*h,t.copy(r).addScaledVector(fi,o).addScaledVector(mi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Tn={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?i+(e-i)*6*t:t<.5?e:t<.6666666666666666?i+(e-i)*6*(.6666666666666666-t):i}class Ae{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ye.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=Ye.workingColorSpace){if(e=Ta(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=ka(o,a,e+.3333333333333333),this.g=ka(o,a,e),this.b=ka(o,a,e-.3333333333333333)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,t=ut){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const r=zo[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ye.fromWorkingColorSpace(_t.copy(this),e),Math.round(gt(_t.r*255,0,255))*65536+Math.round(gt(_t.g*255,0,255))*256+Math.round(gt(_t.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(_t.copy(this),t);const r=_t.r,n=_t.g,a=_t.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case r:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-r)/f+2;break;case a:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=ut){Ye.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,r=_t.g,n=_t.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Tn);const r=ki(Rr.h,Tn.h,t),n=ki(Rr.s,Tn.s,t),a=ki(Rr.l,Tn.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ae;Ae.NAMES=zo;let ih=0;class gi extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ei,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=nn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ca&&(r.blendSrc=this.blendSrc),this.blendDst!==ua&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==nn&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ga extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new P,wn=new be;class tr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXY(t,wn.x,wn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=si(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Mt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),n=Mt(n,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bo&&(e.usage=this.usage),e}}class Ho extends tr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ko extends tr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Tt extends tr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let nh=0;const zt=new tt,Va=new dt,_i=new P,Dt=new Vi,qi=new Vi,pt=new P;class Qt extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(So(e)?ko:Ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ke().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,r){return zt.makeTranslation(e,t,r),this.applyMatrix4(zt),this}scale(e,t,r){return zt.makeScale(e,t,r),this.applyMatrix4(zt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const r=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];qi.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(Dt.min,qi.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,qi.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(qi.min),Dt.expandByPoint(qi.max))}Dt.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)pt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(pt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)pt.fromBufferAttribute(s,c),l&&(_i.fromBufferAttribute(e,c),pt.add(_i)),n=Math.max(n,r.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<s;M++)c[M]=new P,u[M]=new P;const f=new P,d=new P,p=new P,g=new be,v=new be,m=new be,h=new P,S=new P;function x(M,k,G){f.fromArray(n,M*3),d.fromArray(n,k*3),p.fromArray(n,G*3),g.fromArray(o,M*2),v.fromArray(o,k*2),m.fromArray(o,G*2),d.sub(f),p.sub(f),v.sub(g),m.sub(g);const ue=1/(v.x*m.y-m.x*v.y);isFinite(ue)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ue),S.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(ue),c[M].add(h),c[k].add(h),c[G].add(h),u[M].add(S),u[k].add(S),u[G].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:r.length}]);for(let M=0,k=C.length;M<k;++M){const G=C[M],ue=G.start,L=G.count;for(let F=ue,V=ue+L;F<V;F+=3)x(r[F+0],r[F+1],r[F+2])}const D=new P,R=new P,A=new P,Z=new P;function E(M){A.fromArray(a,M*3),Z.copy(A);const k=c[M];D.copy(k),D.sub(A.multiplyScalar(A.dot(k))).normalize(),R.crossVectors(Z,k);const G=R.dot(u[M])<0?-1:1;l[M*4]=D.x,l[M*4+1]=D.y,l[M*4+2]=D.z,l[M*4+3]=G}for(let M=0,k=C.length;M<k;++M){const G=C[M],ue=G.start,L=G.count;for(let F=ue,V=ue+L;F<V;F+=3)E(r[F+0]),E(r[F+1]),E(r[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new tr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);const n=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),s.add(u),l.add(u),c.add(u),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new tr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,r);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new tt,Wr=new yn,An=new _n,Vo=new P,vi=new P,xi=new P,yi=new P,Wa=new P,Rn=new P,Cn=new be,Ln=new be,Pn=new be,Wo=new P,Xo=new P,jo=new P,Un=new P,Dn=new P;class It extends dt{constructor(e=new Qt,t=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Rn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(Wa.fromBufferAttribute(f,e),o?Rn.addScaledVector(Wa,u):Rn.addScaledVector(Wa.sub(t),u))}t.add(Rn)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),An.copy(r.boundingSphere),An.applyMatrix4(a),Wr.copy(e.ray).recast(e.near),!(An.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(An,Vo)===null||Wr.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Go.copy(a).invert(),Wr.copy(e.ray).applyMatrix4(Go),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let C=S,D=x;C<D;C+=3){const R=s.getX(C),A=s.getX(C+1),Z=s.getX(C+2);n=In(this,h,e,r,c,u,f,R,A,Z),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const S=s.getX(m),x=s.getX(m+1),C=s.getX(m+2);n=In(this,o,e,r,c,u,f,S,x,C),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let C=S,D=x;C<D;C+=3){const R=C,A=C+1,Z=C+2;n=In(this,h,e,r,c,u,f,R,A,Z),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const S=m,x=m+1,C=m+2;n=In(this,o,e,r,c,u,f,S,x,C),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ah(i,e,t,r,n,a,o,s){let l;if(e.side===Rt?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===xr,s),l===null)return null;Dn.copy(s),Dn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dn);return c<t.near||c>t.far?null:{distance:c,point:Dn.clone(),object:i}}function In(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,vi),i.getVertexPosition(l,xi),i.getVertexPosition(c,yi);const u=ah(i,e,t,r,vi,xi,yi,Un);if(u){n&&(Cn.fromBufferAttribute(n,s),Ln.fromBufferAttribute(n,l),Pn.fromBufferAttribute(n,c),u.uv=Jt.getInterpolation(Un,vi,xi,yi,Cn,Ln,Pn,new be)),a&&(Cn.fromBufferAttribute(a,s),Ln.fromBufferAttribute(a,l),Pn.fromBufferAttribute(a,c),u.uv1=Jt.getInterpolation(Un,vi,xi,yi,Cn,Ln,Pn,new be),u.uv2=u.uv1),o&&(Wo.fromBufferAttribute(o,s),Xo.fromBufferAttribute(o,l),jo.fromBufferAttribute(o,c),u.normal=Jt.getInterpolation(Un,vi,xi,yi,Wo,Xo,jo,new P),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new P,materialIndex:0};Jt.getNormal(vi,xi,yi,f.normal),u.face=f}return u}class Xr extends Qt{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,r,t,e,o,a,0),g("z","y","x",1,-1,r,t,-e,o,a,1),g("x","z","y",1,1,e,r,t,n,o,2),g("x","z","y",1,-1,e,r,-t,n,o,3),g("x","y","z",1,-1,e,t,r,n,a,4),g("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function g(v,m,h,S,x,C,D,R,A,Z,E){const M=C/A,k=D/Z,G=C/2,ue=D/2,L=R/2,F=A+1,V=Z+1;let j=0,X=0;const W=new P;for(let ee=0;ee<V;ee++){const re=ee*k-ue;for(let pe=0;pe<F;pe++){const z=pe*M-G;W[v]=z*S,W[m]=re*x,W[h]=L,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[h]=R>0?1:-1,u.push(W.x,W.y,W.z),f.push(pe/A),f.push(1-ee/Z),j+=1}}for(let ee=0;ee<Z;ee++)for(let re=0;re<A;re++){const pe=d+re+F*ee,z=d+re+F*(ee+1),K=d+(re+1)+F*(ee+1),me=d+(re+1)+F*ee;l.push(pe,z,me),l.push(z,K,me),X+=6}s.addGroup(p,X,E),p+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const r=bi(i[t]);for(const n in r)e[n]=r[n]}return e}function sh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qo(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Xa={clone:bi,merge:wt};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=sh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Yo extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Yo{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zi*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Mi=1;class ch extends dt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ht(Ei,Mi,e,t);n.layers=this.layers,this.add(n);const a=new Ht(Ei,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Ei,Mi,e,t);o.layers=this.layers,this.add(o);const s=new Ht(Ei,Mi,e,t);s.layers=this.layers,this.add(s);const l=new Ht(Ei,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Ei,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===un)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Ko extends Pt{constructor(e,t,r,n,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ti,super(e,t,r,n,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uh extends St{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zr?ut:Ft),this.texture=new Ko(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Xr(5,5,5),a=new Ct({name:"CubemapFromEquirect",uniforms:bi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rt,blending:Xt});a.uniforms.tEquirect.value=t;const o=new It(n,a),s=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Nt),new ch(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const ja=new P,hh=new P,dh=new ke;class Cr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ja.subVectors(r,t).cross(hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ja),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||dh.getNormalMatrix(e),n=this.coplanarPoint(ja).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new _n,Nn=new P;class qa{constructor(e=new Cr,t=new Cr,r=new Cr,n=new Cr,a=new Cr,o=new Cr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr){const r=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],f=n[6],d=n[7],p=n[8],g=n[9],v=n[10],m=n[11],h=n[12],S=n[13],x=n[14],C=n[15];if(r[0].setComponents(l-a,d-c,m-p,C-h).normalize(),r[1].setComponents(l+a,d+c,m+p,C+h).normalize(),r[2].setComponents(l+o,d+u,m+g,C+S).normalize(),r[3].setComponents(l-o,d-u,m-g,C-S).normalize(),r[4].setComponents(l-s,d-f,m-v,C-x).normalize(),t===sr)r[5].setComponents(l+s,d+f,m+v,C+x).normalize();else if(t===un)r[5].setComponents(s,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Nn.x=n.normal.x>0?e.max.x:e.min.x,Nn.y=n.normal.y>0?e.max.y:e.min.y,Nn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Nn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zo(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ph(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const f=c.array,d=c.usage,p=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function a(c,u,f){const d=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),p.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const h=g[v];t?i.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):i.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(i.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);if(f===void 0)r.set(c,n(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,u),f.version=c.version}}return{get:o,remove:s,update:l}}class On extends Qt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,u=l+1,f=e/s,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let x=0;x<c;x++){const C=x*f-a;g.push(C,-S,0),v.push(0,0,1),m.push(x/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<s;S++){const x=S+c*h,C=S+c*(h+1),D=S+1+c*(h+1),R=S+1+c*h;p.push(x,C,R),p.push(C,D,R)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
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
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
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
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,Rh=`#ifdef USE_BUMPMAP
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
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
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
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
}`,jh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
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
}`,rd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,fd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,bp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
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
}`,Op=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fp=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zp=`#define TOON
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
}`,Hp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
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
}`,jp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:fh,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:vh,alphatest_pars_fragment:xh,aomap_fragment:yh,aomap_pars_fragment:bh,batching_pars_vertex:Eh,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:Th,bsdfs:wh,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Uh,color_fragment:Dh,color_pars_fragment:Ih,color_pars_vertex:Nh,color_vertex:Oh,common:Fh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Hh,displacementmap_vertex:kh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Vh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:jh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:od,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:Qh,fog_fragment:$h,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_fragment:rd,lightmap_pars_fragment:id,lights_lambert_fragment:nd,lights_lambert_pars_fragment:ad,lights_pars_begin:sd,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:ud,lights_phong_pars_fragment:hd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:fd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:yd,map_fragment:bd,map_pars_fragment:Ed,map_particle_fragment:Md,map_particle_pars_fragment:Sd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:wd,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Ld,normal_fragment_begin:Pd,normal_fragment_maps:Ud,normal_pars_fragment:Dd,normal_pars_vertex:Id,normal_vertex:Nd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Hd,opaque_fragment:kd,packing:Gd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:jd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:$d,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:rp,specularmap_fragment:ip,specularmap_pars_fragment:np,tonemapping_fragment:ap,tonemapping_pars_fragment:sp,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:up,uv_vertex:hp,worldpos_vertex:dp,background_vert:pp,background_frag:fp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:yp,distanceRGBA_vert:bp,distanceRGBA_frag:Ep,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:Tp,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Lp,meshmatcap_vert:Pp,meshmatcap_frag:Up,meshnormal_vert:Dp,meshnormal_frag:Ip,meshphong_vert:Np,meshphong_frag:Op,meshphysical_vert:Fp,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Hp,points_vert:kp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:jp},oe={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},rr={basic:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:wt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:wt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:wt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:wt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:wt([oe.lights,oe.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};rr.physical={uniforms:wt([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Fn={r:0,b:0,g:0};function qp(i,e,t,r,n,a,o){const s=new Ae(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function g(m,h){let S=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?v(s,l):x&&x.isColor&&(v(x,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===an)?(u===void 0&&(u=new It(new Xr(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:bi(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(x.colorSpace)!==Je,(f!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new It(new On(2,2),new Ct({name:"BackgroundMaterial",uniforms:bi(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(Fn,qo(i)),r.buffers.color.setClear(Fn.r,Fn.g,Fn.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(s,l)},render:g}}function Yp(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(L,F,V,j,X){let W=!1;if(o){const ee=v(j,V,F);c!==ee&&(c=ee,p(c.object)),W=h(L,j,V,X),W&&S(L,j,V,X)}else{const ee=F.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==ee)&&(c.geometry=j.id,c.program=V.id,c.wireframe=ee,W=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,Z(L,F,V,j),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function p(L){return r.isWebGL2?i.bindVertexArray(L):a.bindVertexArrayOES(L)}function g(L){return r.isWebGL2?i.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function v(L,F,V){const j=V.wireframe===!0;let X=s[L.id];X===void 0&&(X={},s[L.id]=X);let W=X[F.id];W===void 0&&(W={},X[F.id]=W);let ee=W[j];return ee===void 0&&(ee=m(d()),W[j]=ee),ee}function m(L){const F=[],V=[],j=[];for(let X=0;X<n;X++)F[X]=0,V[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function h(L,F,V,j){const X=c.attributes,W=F.attributes;let ee=0;const re=V.getAttributes();for(const pe in re)if(re[pe].location>=0){const z=X[pe];let K=W[pe];if(K===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;ee++}return c.attributesNum!==ee||c.index!==j}function S(L,F,V,j){const X={},W=F.attributes;let ee=0;const re=V.getAttributes();for(const pe in re)if(re[pe].location>=0){let z=W[pe];z===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(z=L.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),X[pe]=K,ee++}c.attributes=X,c.attributesNum=ee,c.index=j}function x(){const L=c.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function C(L){D(L,0)}function D(L,F){const V=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),X[L]!==F&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),X[L]=F)}function R(){const L=c.newAttributes,F=c.enabledAttributes;for(let V=0,j=F.length;V<j;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(L,F,V,j,X,W,ee){ee===!0?i.vertexAttribIPointer(L,F,V,X,W):i.vertexAttribPointer(L,F,V,j,X,W)}function Z(L,F,V,j){if(r.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=j.attributes,W=V.getAttributes(),ee=F.defaultAttributeValues;for(const re in W){const pe=W[re];if(pe.location>=0){let z=X[re];if(z===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const K=z.normalized,me=z.itemSize,xe=t.get(z);if(xe===void 0)continue;const ve=xe.buffer,Pe=xe.type,De=xe.bytesPerElement,we=r.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||z.gpuType===Fs);if(z.isInterleavedBufferAttribute){const We=z.data,O=We.stride,ft=z.offset;if(We.isInstancedInterleavedBuffer){for(let Me=0;Me<pe.locationSize;Me++)D(pe.location+Me,We.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Me=0;Me<pe.locationSize;Me++)C(pe.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Me=0;Me<pe.locationSize;Me++)A(pe.location+Me,me/pe.locationSize,Pe,K,O*De,(ft+me/pe.locationSize*Me)*De,we)}else{if(z.isInstancedBufferAttribute){for(let We=0;We<pe.locationSize;We++)D(pe.location+We,z.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let We=0;We<pe.locationSize;We++)C(pe.location+We);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let We=0;We<pe.locationSize;We++)A(pe.location+We,me/pe.locationSize,Pe,K,me*De,me/pe.locationSize*We*De,we)}}else if(ee!==void 0){const K=ee[re];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(pe.location,K);break;case 3:i.vertexAttrib3fv(pe.location,K);break;case 4:i.vertexAttrib4fv(pe.location,K);break;default:i.vertexAttrib1fv(pe.location,K)}}}}R()}function E(){G();for(const L in s){const F=s[L];for(const V in F){const j=F[V];for(const X in j)g(j[X].object),delete j[X];delete F[V]}delete s[L]}}function M(L){if(s[L.id]===void 0)return;const F=s[L.id];for(const V in F){const j=F[V];for(const X in j)g(j[X].object),delete j[X];delete F[V]}delete s[L.id]}function k(L){for(const F in s){const V=s[F];if(V[L.id]===void 0)continue;const j=V[L.id];for(const X in j)g(j[X].object),delete j[X];delete V[L.id]}}function G(){ue(),u=!0,c!==l&&(c=l,p(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:ue,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:C,disableUnusedAttributes:R}}function Kp(i,e,t,r){const n=r.isWebGL2;let a;function o(u){a=u}function s(u,f){i.drawArrays(a,u,f),t.update(f,a,1)}function l(u,f,d){if(d===0)return;let p,g;if(n)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,u,f,d),t.update(f,a,d)}function c(u,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(a,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=f[v];t.update(g,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Zp(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,C=o||e.has("OES_texture_float"),D=x&&C,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:C,floatVertexTextures:D,maxSamples:R}}function Jp(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new Cr,s=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||r!==0||n;return n=d,r=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!n||g===null||g.length===0||a&&!m)a?u(null):c();else{const S=a?0:r,x=S*4;let C=h.clippingState||null;l.value=C,C=u(g,d,x,p);for(let D=0;D!==x;++D)C[D]=t[D];h.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;s.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,C=p;x!==v;++x,C+=4)o.copy(f[x]).applyMatrix4(S,s),o.normal.toArray(m,C),m[C+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Qp(i){let e=new WeakMap;function t(o,s){return s===da?o.mapping=ti:s===pa&&(o.mapping=ri),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===da||s===pa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uh(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Ya extends Yo{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,Jo=[.125,.215,.35,.446,.526,.582],qr=20,Ka=new Ya,Qo=new Ae;let Za=null,Ja=0,Qa=0;const Yr=(1+Math.sqrt(5))/2,Ti=1/Yr,$o=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Yr,Ti),new P(0,Yr,-Ti),new P(Ti,0,Yr),new P(-Ti,0,Yr),new P(Yr,Ti,0),new P(-Yr,Ti,0)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),e.scissorTest=!1,Bn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ti||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ot,format:qt,colorSpace:Bt,depthBuffer:!1},n=tl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(a)),this._blurMaterial=ef(a,e,t)}return n}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,r,n){const a=new Ht(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Qo),l.toneMapping=yr,l.autoClear=!1;const f=new Ga({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),d=new It(new Xr,f);let p=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,p=!0):(f.color.copy(Qo),p=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):m===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const h=this._cubeSize;Bn(n,m*h,v>2?h:0,h,h),l.setRenderTarget(n),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===ti||e.mapping===ri;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Bn(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,Ka)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=$o[(n-1)%$o.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new It(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[r]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qr-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):qr;m>qr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);const h=[];let S=0;for(let A=0;A<qr;++A){const Z=A/v,E=Math.exp(-Z*Z/2);h.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-r;const C=this._sizeLods[n],D=3*C*(n>x-Si?n-x+Si:0),R=4*(this._cubeSize-C);Bn(t,D,R,3*C,2*C),l.setRenderTarget(t),l.render(f,Ka)}}function $p(i){const e=[],t=[],r=[];let n=i;const a=i-Si+1+Jo.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-Si?l=Jo[o-i+Si-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,S=new Float32Array(v*g*p),x=new Float32Array(m*g*p),C=new Float32Array(h*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,Z=R>2?0:-1,E=[A,Z,0,A+2/3,Z,0,A+2/3,Z+1,0,A,Z,0,A+2/3,Z+1,0,A,Z+1,0];S.set(E,v*g*R),x.set(d,m*g*R);const M=[R,R,R,R,R,R];C.set(M,h*g*R)}const D=new Qt;D.setAttribute("position",new tr(S,v)),D.setAttribute("uv",new tr(x,m)),D.setAttribute("faceIndex",new tr(C,h)),e.push(D),n>Si&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function tl(i,e,t){const r=new St(i,e,t);return r.texture.mapping=an,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bn(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function ef(i,e,t){const r=new Float32Array(qr),n=new P(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function rl(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function il(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function tf(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===da||l===pa,u=l===ti||l===ri;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new el(i)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new el(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function rf(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function nf(i,e,t,r){const n={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete n[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let x=0,C=S.length;x<C;x+=3){const D=S[x+0],R=S[x+1],A=S[x+2];d.push(D,R,R,A,A,D)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,C=S.length/3-1;x<C;x+=3){const D=x+0,R=x+1,A=x+2;d.push(D,R,R,A,A,D)}}else return;const m=new(So(d)?ko:Ho)(d,1);m.version=v;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function af(i,e,t,r){const n=r.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,g){i.drawElements(a,g,s,p*l),t.update(g,a,1)}function f(p,g,v){if(v===0)return;let m,h;if(n)m=i,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](a,g,s,p*l,v),t.update(g,a,v)}function d(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(a,g,0,s,p,0,v);let h=0;for(let S=0;S<v;S++)h+=g[S];t.update(h,a,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function sf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function of(i,e){return i[0]-e[0]}function lf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cf(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new ht,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=a.get(u);if(v===void 0||v.count!==g){let S=function(){ue.dispose(),a.delete(u),u.removeEventListener("dispose",S)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,C=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],Z=u.morphAttributes.color||[];let E=0;x===!0&&(E=1),C===!0&&(E=2),D===!0&&(E=3);let M=u.attributes.position.count*E,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const G=new Float32Array(M*k*4*g),ue=new Lo(G,M,k,g);ue.type=Mr,ue.needsUpdate=!0;const L=E*4;for(let F=0;F<g;F++){const V=R[F],j=A[F],X=Z[F],W=M*k*4*F;for(let ee=0;ee<V.count;ee++){const re=ee*L;x===!0&&(o.fromBufferAttribute(V,ee),G[W+re+0]=o.x,G[W+re+1]=o.y,G[W+re+2]=o.z,G[W+re+3]=0),C===!0&&(o.fromBufferAttribute(j,ee),G[W+re+4]=o.x,G[W+re+5]=o.y,G[W+re+6]=o.z,G[W+re+7]=0),D===!0&&(o.fromBufferAttribute(X,ee),G[W+re+8]=o.x,G[W+re+9]=o.y,G[W+re+10]=o.z,G[W+re+11]=X.itemSize===4?o.w:1)}}v={count:g,texture:ue,size:new be(M,k)},a.set(u,v),u.addEventListener("dispose",S)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];const h=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",h),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let g=r[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];r[u.id]=g}for(let x=0;x<p;x++){const C=g[x];C[0]=x,C[1]=d[x]}g.sort(lf);for(let x=0;x<8;x++)x<p&&g[x][1]?(s[x][0]=g[x][0],s[x][1]=g[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(of);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const C=s[x],D=C[0],R=C[1];D!==Number.MAX_SAFE_INTEGER&&R?(v&&u.getAttribute("morphTarget"+x)!==v[D]&&u.setAttribute("morphTarget"+x,v[D]),m&&u.getAttribute("morphNormal"+x)!==m[D]&&u.setAttribute("morphNormal"+x,m[D]),n[x]=R,h+=R):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const S=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function uf(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class nl extends Pt{constructor(e,t,r,n,a,o,s,l,c,u){if(u=u!==void 0?u:Br,u!==Br&&u!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Br&&(r=Er),r===void 0&&u===ii&&(r=Fr),super(null,n,a,o,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const al=new Pt,sl=new nl(1,1);sl.compareFunction=yo;const ol=new Lo,ll=new Yu,cl=new Ko,ul=[],hl=[],dl=new Float32Array(16),pl=new Float32Array(9),fl=new Float32Array(4);function wi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=ul[n];if(a===void 0&&(a=new Float32Array(n),ul[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function zn(i,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function mf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;fl.set(r),i.uniformMatrix2fv(this.addr,!1,fl),lt(t,r)}}function gf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;pl.set(r),i.uniformMatrix3fv(this.addr,!1,pl),lt(t,r)}}function _f(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;dl.set(r),i.uniformMatrix4fv(this.addr,!1,dl),lt(t,r)}}function vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function wf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?sl:al;t.setTexture2D(e||a,n)}function Af(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||ll,n)}function Rf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||cl,n)}function Cf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||ol,n)}function Lf(i){switch(i){case 5126:return hf;case 35664:return df;case 35665:return pf;case 35666:return ff;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return yf;case 35669:case 35673:return bf;case 5125:return Ef;case 36294:return Mf;case 36295:return Sf;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}function Pf(i,e){i.uniform1fv(this.addr,e)}function Uf(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Df(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function If(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Nf(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Of(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ff(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bf(i,e){i.uniform1iv(this.addr,e)}function zf(i,e){i.uniform2iv(this.addr,e)}function Hf(i,e){i.uniform3iv(this.addr,e)}function kf(i,e){i.uniform4iv(this.addr,e)}function Gf(i,e){i.uniform1uiv(this.addr,e)}function Vf(i,e){i.uniform2uiv(this.addr,e)}function Wf(i,e){i.uniform3uiv(this.addr,e)}function Xf(i,e){i.uniform4uiv(this.addr,e)}function jf(i,e,t){const r=this.cache,n=e.length,a=zn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||al,a[o])}function qf(i,e,t){const r=this.cache,n=e.length,a=zn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||ll,a[o])}function Yf(i,e,t){const r=this.cache,n=e.length,a=zn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||cl,a[o])}function Kf(i,e,t){const r=this.cache,n=e.length,a=zn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||ol,a[o])}function Zf(i){switch(i){case 5126:return Pf;case 35664:return Uf;case 35665:return Df;case 35666:return If;case 35674:return Nf;case 35675:return Of;case 35676:return Ff;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return Hf;case 35669:case 35673:return kf;case 5125:return Gf;case 36294:return Vf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Kf}}class Jf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Lf(t.type)}}class Qf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zf(t.type)}}class $f{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const es=/(\w+)(\])?(\[|\.)?/g;function ml(i,e){i.seq.push(e),i.map[e.id]=e}function em(i,e,t){const r=i.name,n=r.length;for(es.lastIndex=0;;){const a=es.exec(r),o=es.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){ml(t,c===void 0?new Jf(s,i,e):new Qf(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new $f(s),ml(t,u)),t=u}}}class Hn{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);em(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function gl(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const tm=37297;let rm=0;function im(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function nm(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let r;switch(e===t?r="":e===cn&&t===ln?r="LinearDisplayP3ToLinearSRGB":e===ln&&t===cn&&(r="LinearSRGBToLinearDisplayP3"),i){case Bt:case sn:return[r,"LinearTransferOETF"];case ut:case Ma:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function _l(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+im(i.getShaderSource(e),o)}else return n}function am(i,e){const t=nm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sm(i,e){let t;switch(e){case nu:t="Linear";break;case au:t="Reinhard";break;case su:t="OptimizedCineon";break;case ou:t="ACESFilmic";break;case cu:t="AgX";break;case lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function om(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ai).join(`
`)}function cm(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function um(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Ai(i){return i!==""}function vl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ts(i){return i.replace(hm,pm)}const dm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pm(i,e){let t=Oe[e];if(t===void 0){const r=dm.get(e);if(r!==void 0)t=Oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ts(t)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(fm,mm)}function mm(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function bl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ls?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ti:case ri:e="ENVMAP_TYPE_CUBE";break;case an:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function xm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ha:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function ym(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function bm(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=gm(t),c=_m(t),u=vm(t),f=xm(t),d=ym(t),p=t.isWebGL2?"":om(t),g=lm(t),v=cm(a),m=n.createProgram();let h,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),h.length>0&&(h+=`
`),S=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),S.length>0&&(S+=`
`)):(h=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),S=[p,bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?Oe.tonemapping_pars_fragment:"",t.toneMapping!==yr?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),o=ts(o),o=vl(o,t),o=xl(o,t),s=ts(s),s=vl(s,t),s=xl(s,t),o=yl(o),s=yl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=x+h+o,D=x+S+s,R=gl(n,n.VERTEX_SHADER,C),A=gl(n,n.FRAGMENT_SHADER,D);n.attachShader(m,R),n.attachShader(m,A),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function Z(G){if(i.debug.checkShaderErrors){const ue=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(R).trim(),F=n.getShaderInfoLog(A).trim();let V=!0,j=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,m,R,A);else{const X=_l(n,R,"vertex"),W=_l(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+X+`
`+W)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(L===""||F==="")&&(j=!1);j&&(G.diagnostics={runnable:V,programLog:ue,vertexShader:{log:L,prefix:h},fragmentShader:{log:F,prefix:S}})}n.deleteShader(R),n.deleteShader(A),E=new Hn(n,m),M=um(n,m)}let E;this.getUniforms=function(){return E===void 0&&Z(this),E};let M;this.getAttributes=function(){return M===void 0&&Z(this),M};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(m,tm)),k},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let Em=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Sm(e),t.set(e,r)),r}}class Sm{constructor(e){this.id=Em++,this.code=e,this.usedTimes=0}}function Tm(i,e,t,r,n,a,o){const s=new Oa,l=new Mm,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,M,k,G,ue){const L=G.fog,F=ue.geometry,V=E.isMeshStandardMaterial?G.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),X=j&&j.mapping===an?j.image.height:null,W=g[E.type];E.precision!==null&&(p=n.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=ee!==void 0?ee.length:0;let pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let z,K,me,xe;if(W){const at=rr[W];z=at.vertexShader,K=at.fragmentShader}else z=E.vertexShader,K=E.fragmentShader,l.update(E),me=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const ve=i.getRenderTarget(),Pe=ue.isInstancedMesh===!0,De=ue.isBatchedMesh===!0,we=!!E.map,We=!!E.matcap,O=!!j,ft=!!E.aoMap,Me=!!E.lightMap,Le=!!E.bumpMap,ge=!!E.normalMap,Qe=!!E.displacementMap,Ie=!!E.emissiveMap,b=!!E.metalnessMap,_=!!E.roughnessMap,I=E.anisotropy>0,te=E.clearcoat>0,Q=E.iridescence>0,$=E.sheen>0,_e=E.transmission>0,he=I&&!!E.anisotropyMap,fe=te&&!!E.clearcoatMap,Te=te&&!!E.clearcoatNormalMap,Ne=te&&!!E.clearcoatRoughnessMap,J=Q&&!!E.iridescenceMap,Xe=Q&&!!E.iridescenceThicknessMap,T=$&&!!E.sheenColorMap,q=$&&!!E.sheenRoughnessMap,se=!!E.specularMap,ne=!!E.specularColorMap,Ee=!!E.specularIntensityMap,Fe=_e&&!!E.transmissionMap,je=_e&&!!E.thicknessMap,Be=!!E.gradientMap,ae=!!E.alphaMap,w=E.alphaTest>0,ie=!!E.alphaHash,de=!!E.extensions,Re=!!F.attributes.uv1,ye=!!F.attributes.uv2,qe=!!F.attributes.uv3;let Ke=yr;return E.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:u,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:K,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:De,instancing:Pe,instancingColor:Pe&&ue.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Bt,map:we,matcap:We,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:X,aoMap:ft,lightMap:Me,bumpMap:Le,normalMap:ge,displacementMap:d&&Qe,emissiveMap:Ie,normalMapObjectSpace:ge&&E.normalMapType===yu,normalMapTangentSpace:ge&&E.normalMapType===vo,metalnessMap:b,roughnessMap:_,anisotropy:I,anisotropyMap:he,clearcoat:te,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ne,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:Xe,sheen:$,sheenColorMap:T,sheenRoughnessMap:q,specularMap:se,specularColorMap:ne,specularIntensityMap:Ee,transmission:_e,transmissionMap:Fe,thicknessMap:je,gradientMap:Be,opaque:E.transparent===!1&&E.blending===ei,alphaMap:ae,alphaTest:w,alphaHash:ie,combine:E.combine,mapUv:we&&v(E.map.channel),aoMapUv:ft&&v(E.aoMap.channel),lightMapUv:Me&&v(E.lightMap.channel),bumpMapUv:Le&&v(E.bumpMap.channel),normalMapUv:ge&&v(E.normalMap.channel),displacementMapUv:Qe&&v(E.displacementMap.channel),emissiveMapUv:Ie&&v(E.emissiveMap.channel),metalnessMapUv:b&&v(E.metalnessMap.channel),roughnessMapUv:_&&v(E.roughnessMap.channel),anisotropyMapUv:he&&v(E.anisotropyMap.channel),clearcoatMapUv:fe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:T&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:q&&v(E.sheenRoughnessMap.channel),specularMapUv:se&&v(E.specularMap.channel),specularColorMapUv:ne&&v(E.specularColorMap.channel),specularIntensityMapUv:Ee&&v(E.specularIntensityMap.channel),transmissionMapUv:Fe&&v(E.transmissionMap.channel),thicknessMapUv:je&&v(E.thicknessMap.channel),alphaMapUv:ae&&v(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ge||I),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:ye,vertexUv3s:qe,pointsUvs:ue.isPoints===!0&&!!F.attributes.uv&&(we||ae),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wt,flipSided:E.side===Rt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:de&&E.extensions.derivatives===!0,extensionFragDepth:de&&E.extensions.fragDepth===!0,extensionDrawBuffers:de&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&E.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)M.push(k),M.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(S(M,E),x(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),E.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.useLegacyLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),E.push(s.mask)}function C(E){const M=g[E.type];let k;if(M){const G=rr[M];k=Xa.clone(G.uniforms)}else k=E.uniforms;return k}function D(E,M){let k;for(let G=0,ue=c.length;G<ue;G++){const L=c[G];if(L.cacheKey===M){k=L,++k.usedTimes;break}}return k===void 0&&(k=new bm(i,M,E,a),c.push(k)),k}function R(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:C,acquireProgram:D,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:Z}}function wm(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function El(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ml(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(f,d,p,g,v,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function s(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?r.push(h):p.transparent===!0?n.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?r.unshift(h):p.transparent===!0?n.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Am),r.length>1&&r.sort(d||El),n.length>1&&n.sort(d||El)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:u,sort:c}}function Rm(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new Ml,i.set(r,[o])):n>=a.length?(o=new Ml,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ae};break;case"SpotLight":t={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Lm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pm=0;function Um(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dm(i,e){const t=new Cm,r=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const a=new P,o=new tt,s=new tt;function l(u,f){let d=0,p=0,g=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let v=0,m=0,h=0,S=0,x=0,C=0,D=0,R=0,A=0,Z=0,E=0;u.sort(Um);const M=f===!0?Math.PI:1;for(let G=0,ue=u.length;G<ue;G++){const L=u[G],F=L.color,V=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*V*M,p+=F.g*V*M,g+=F.b*V*M;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],V);E++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const ee=L.shadow,re=r.get(L);re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.directionalShadow[v]=re,n.directionalShadowMap[v]=X,n.directionalShadowMatrix[v]=L.shadow.matrix,C++}n.directional[v]=W,v++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(V*M),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[h]=W;const ee=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,ee.updateMatrices(L),L.castShadow&&Z++),n.spotLightMatrix[h]=ee.matrix,L.castShadow){const re=r.get(L);re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.spotShadow[h]=re,n.spotShadowMap[h]=X,R++}h++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=W,S++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*M),W.distance=L.distance,W.decay=L.decay,L.castShadow){const ee=L.shadow,re=r.get(L);re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,re.shadowCameraNear=ee.camera.near,re.shadowCameraFar=ee.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=L.shadow.matrix,D++}n.point[m]=W,m++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(V*M),W.groundColor.copy(L.groundColor).multiplyScalar(V*M),n.hemi[x]=W,x++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==v||k.pointLength!==m||k.spotLength!==h||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==C||k.numPointShadows!==D||k.numSpotShadows!==R||k.numSpotMaps!==A||k.numLightProbes!==E)&&(n.directional.length=v,n.spot.length=h,n.rectArea.length=S,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=R+A-Z,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=Z,n.numLightProbes=E,k.directionalLength=v,k.pointLength=m,k.spotLength=h,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=C,k.numPointShadows=D,k.numSpotShadows=R,k.numSpotMaps=A,k.numLightProbes=E,n.version=Pm++)}function c(u,f){let d=0,p=0,g=0,v=0,m=0;const h=f.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const C=u[S];if(C.isDirectionalLight){const D=n.directional[d];D.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(h),d++}else if(C.isSpotLight){const D=n.spot[g];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(h),g++}else if(C.isRectAreaLight){const D=n.rectArea[v];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),s.identity(),o.copy(C.matrixWorld),o.premultiply(h),s.extractRotation(o),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),v++}else if(C.isPointLight){const D=n.point[p];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),p++}else if(C.isHemisphereLight){const D=n.hemi[m];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:n}}function Sl(i,e){const t=new Dm(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(u){r.push(u)}function s(u){n.push(u)}function l(u){t.setup(r,u)}function c(u){t.setupView(r,u)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Im(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Sl(i,e),t.set(a,[l])):o>=s.length?(l=new Sl(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class Tl extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function Bm(i,e,t){let r=new qa;const n=new be,a=new be,o=new ht,s=new Tl({depthPacking:_o}),l=new Nm,c={},u=t.maxTextureSize,f={[xr]:Rt,[Rt]:xr,[Wt]:Wt},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Om,fragmentShader:Fm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let h=this.type;this.render=function(R,A,Z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Xt),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ue=h!==ar&&this.type===ar,L=h===ar&&this.type!==ar;for(let F=0,V=R.length;F<V;F++){const j=R[F],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const W=X.getFrameExtents();if(n.multiply(W),a.copy(X.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/W.x),n.x=a.x*W.x,X.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/W.y),n.y=a.y*W.y,X.mapSize.y=a.y)),X.map===null||ue===!0||L===!0){const re=this.type!==ar?{minFilter:Et,magFilter:Et}:{};X.map!==null&&X.map.dispose(),X.map=new St(n.x,n.y,re),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ee=X.getViewportCount();for(let re=0;re<ee;re++){const pe=X.getViewport(re);o.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),G.viewport(o),X.updateMatrices(j,re),r=X.getFrustum(),C(A,Z,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===ar&&S(X,Z),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,k)};function S(R,A){const Z=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new St(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,Z,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,Z,p,v,null)}function x(R,A,Z,E){let M=null;const k=Z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)M=k;else if(M=Z.isPointLight===!0?l:s,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,ue=A.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let F=L[ue];F===void 0&&(F=M.clone(),L[ue]=F,A.addEventListener("dispose",D)),M=F}if(M.visible=A.visible,M.wireframe=A.wireframe,E===ar?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,Z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=Z}return M}function C(R,A,Z,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ar)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld);const G=e.update(R),ue=R.material;if(Array.isArray(ue)){const L=G.groups;for(let F=0,V=L.length;F<V;F++){const j=L[F],X=ue[j.materialIndex];if(X&&X.visible){const W=x(R,X,E,M);R.onBeforeShadow(i,R,A,Z,G,W,j),i.renderBufferDirect(Z,null,G,W,R,j),R.onAfterShadow(i,R,A,Z,G,W,j)}}}else if(ue.visible){const L=x(R,ue,E,M);R.onBeforeShadow(i,R,A,Z,G,L,null),i.renderBufferDirect(Z,null,G,L,R,null),R.onAfterShadow(i,R,A,Z,G,L,null)}}const k=R.children;for(let G=0,ue=k.length;G<ue;G++)C(k[G],A,Z,E,M)}function D(R){R.target.removeEventListener("dispose",D);for(const A in c){const Z=c[A],E=R.target.uuid;E in Z&&(Z[E].dispose(),delete Z[E])}}}function zm(i,e,t){const r=t.isWebGL2;function n(){let w=!1;const ie=new ht;let de=null;const Re=new ht(0,0,0,0);return{setMask:function(ye){de!==ye&&!w&&(i.colorMask(ye,ye,ye,ye),de=ye)},setLocked:function(ye){w=ye},setClear:function(ye,qe,Ke,at,kt){kt===!0&&(ye*=at,qe*=at,Ke*=at),ie.set(ye,qe,Ke,at),Re.equals(ie)===!1&&(i.clearColor(ye,qe,Ke,at),Re.copy(ie))},reset:function(){w=!1,de=null,Re.set(-1,0,0,0)}}}function a(){let w=!1,ie=null,de=null,Re=null;return{setTest:function(ye){ye?De(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ye){ie!==ye&&!w&&(i.depthMask(ye),ie=ye)},setFunc:function(ye){if(de!==ye){switch(ye){case Kc:i.depthFunc(i.NEVER);break;case Zc:i.depthFunc(i.ALWAYS);break;case Jc:i.depthFunc(i.LESS);break;case nn:i.depthFunc(i.LEQUAL);break;case Qc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case eu:i.depthFunc(i.GREATER);break;case tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ye}},setLocked:function(ye){w=ye},setClear:function(ye){Re!==ye&&(i.clearDepth(ye),Re=ye)},reset:function(){w=!1,ie=null,de=null,Re=null}}}function o(){let w=!1,ie=null,de=null,Re=null,ye=null,qe=null,Ke=null,at=null,kt=null;return{setTest:function(Ze){w||(Ze?De(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!w&&(i.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,At,nr){(de!==Ze||Re!==At||ye!==nr)&&(i.stencilFunc(Ze,At,nr),de=Ze,Re=At,ye=nr)},setOp:function(Ze,At,nr){(qe!==Ze||Ke!==At||at!==nr)&&(i.stencilOp(Ze,At,nr),qe=Ze,Ke=At,at=nr)},setLocked:function(Ze){w=Ze},setClear:function(Ze){kt!==Ze&&(i.clearStencil(Ze),kt=Ze)},reset:function(){w=!1,ie=null,de=null,Re=null,ye=null,qe=null,Ke=null,at=null,kt=null}}}const s=new n,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,h=!1,S=null,x=null,C=null,D=null,R=null,A=null,Z=null,E=new Ae(0,0,0),M=0,k=!1,G=null,ue=null,L=null,F=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ee)[1]),X=W>=1):ee.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),X=W>=2);let re=null,pe={};const z=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),me=new ht().fromArray(z),xe=new ht().fromArray(K);function ve(w,ie,de,Re){const ye=new Uint8Array(4),qe=i.createTexture();i.bindTexture(w,qe),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<de;Ke++)r&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(ie,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ie+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return qe}const Pe={};Pe[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Pe[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(nn),Ie(!1),b(Cs),De(i.CULL_FACE),ge(Xt);function De(w){d[w]!==!0&&(i.enable(w),d[w]=!0)}function we(w){d[w]!==!1&&(i.disable(w),d[w]=!1)}function We(w,ie){return p[w]!==ie?(i.bindFramebuffer(w,ie),p[w]=ie,r&&(w===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ie),w===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ie)),!0):!1}function O(w,ie){let de=v,Re=!1;if(w)if(de=g.get(ie),de===void 0&&(de=[],g.set(ie,de)),w.isWebGLMultipleRenderTargets){const ye=w.texture;if(de.length!==ye.length||de[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Ke=ye.length;qe<Ke;qe++)de[qe]=i.COLOR_ATTACHMENT0+qe;de.length=ye.length,Re=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Re=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Re=!0);Re&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function ft(w){return m!==w?(i.useProgram(w),m=w,!0):!1}const Me={[Or]:i.FUNC_ADD,[Ic]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};if(r)Me[Ds]=i.MIN,Me[Is]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(Me[Ds]=w.MIN_EXT,Me[Is]=w.MAX_EXT)}const Le={[Oc]:i.ZERO,[Fc]:i.ONE,[Bc]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[Wc]:i.SRC_ALPHA_SATURATE,[Gc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[zc]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[Vc]:i.ONE_MINUS_DST_COLOR,[kc]:i.ONE_MINUS_DST_ALPHA,[Xc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[qc]:i.CONSTANT_ALPHA,[Yc]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(w,ie,de,Re,ye,qe,Ke,at,kt,Ze){if(w===Xt){h===!0&&(we(i.BLEND),h=!1);return}if(h===!1&&(De(i.BLEND),h=!0),w!==Dc){if(w!==S||Ze!==k){if((x!==Or||R!==Or)&&(i.blendEquation(i.FUNC_ADD),x=Or,R=Or),Ze)switch(w){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.ONE,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Us:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Us:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}C=null,D=null,A=null,Z=null,E.set(0,0,0),M=0,S=w,k=Ze}return}ye=ye||ie,qe=qe||de,Ke=Ke||Re,(ie!==x||ye!==R)&&(i.blendEquationSeparate(Me[ie],Me[ye]),x=ie,R=ye),(de!==C||Re!==D||qe!==A||Ke!==Z)&&(i.blendFuncSeparate(Le[de],Le[Re],Le[qe],Le[Ke]),C=de,D=Re,A=qe,Z=Ke),(at.equals(E)===!1||kt!==M)&&(i.blendColor(at.r,at.g,at.b,kt),E.copy(at),M=kt),S=w,k=!1}function Qe(w,ie){w.side===Wt?we(i.CULL_FACE):De(i.CULL_FACE);let de=w.side===Rt;ie&&(de=!de),Ie(de),w.blending===ei&&w.transparent===!1?ge(Xt):ge(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),s.setMask(w.colorWrite);const Re=w.stencilWrite;c.setTest(Re),Re&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),I(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(w){G!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),G=w)}function b(w){w!==rn?(De(i.CULL_FACE),w!==ue&&(w===Cs?i.cullFace(i.BACK):w===Pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),ue=w}function _(w){w!==L&&(X&&i.lineWidth(w),L=w)}function I(w,ie,de){w?(De(i.POLYGON_OFFSET_FILL),(F!==ie||V!==de)&&(i.polygonOffset(ie,de),F=ie,V=de)):we(i.POLYGON_OFFSET_FILL)}function te(w){w?De(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Q(w){w===void 0&&(w=i.TEXTURE0+j-1),re!==w&&(i.activeTexture(w),re=w)}function $(w,ie,de){de===void 0&&(re===null?de=i.TEXTURE0+j-1:de=re);let Re=pe[de];Re===void 0&&(Re={type:void 0,texture:void 0},pe[de]=Re),(Re.type!==w||Re.texture!==ie)&&(re!==de&&(i.activeTexture(de),re=de),i.bindTexture(w,ie||Pe[w]),Re.type=w,Re.texture=ie)}function _e(){const w=pe[re];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function T(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ee(w){me.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),me.copy(w))}function Fe(w){xe.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),xe.copy(w))}function je(w,ie){let de=f.get(ie);de===void 0&&(de=new WeakMap,f.set(ie,de));let Re=de.get(w);Re===void 0&&(Re=i.getUniformBlockIndex(ie,w.name),de.set(w,Re))}function Be(w,ie){const de=f.get(ie).get(w);u.get(ie)!==de&&(i.uniformBlockBinding(ie,de,w.__bindingPointIndex),u.set(ie,de))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,pe={},p={},g=new WeakMap,v=[],m=null,h=!1,S=null,x=null,C=null,D=null,R=null,A=null,Z=null,E=new Ae(0,0,0),M=0,k=!1,G=null,ue=null,L=null,F=null,V=null,me.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:De,disable:we,bindFramebuffer:We,drawBuffers:O,useProgram:ft,setBlending:ge,setMaterial:Qe,setFlipSided:Ie,setCullFace:b,setLineWidth:_,setPolygonOffset:I,setScissorTest:te,activeTexture:Q,bindTexture:$,unbindTexture:_e,compressedTexImage2D:he,compressedTexImage3D:fe,texImage2D:se,texImage3D:ne,updateUBOMapping:je,uniformBlockBinding:Be,texStorage2D:T,texStorage3D:q,texSubImage2D:Te,texSubImage3D:Ne,compressedTexSubImage2D:J,compressedTexSubImage3D:Xe,scissor:Ee,viewport:Fe,reset:ae}}function Hm(i,e,t,r,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):dn("canvas")}function v(b,_,I,te){let Q=1;if((b.width>te||b.height>te)&&(Q=te/Math.max(b.width,b.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const $=_?hn:Math.floor,_e=$(Q*b.width),he=$(Q*b.height);f===void 0&&(f=g(_e,he));const fe=I?g(_e,he):f;return fe.width=_e,fe.height=he,fe.getContext("2d").drawImage(b,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+he+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return wa(b.width)&&wa(b.height)}function h(b){return s?!1:b.wrapS!==jt||b.wrapT!==jt||b.minFilter!==Et&&b.minFilter!==Nt}function S(b,_){return b.generateMipmaps&&_&&b.minFilter!==Et&&b.minFilter!==Nt}function x(b){i.generateMipmap(b)}function C(b,_,I,te,Q=!1){if(s===!1)return _;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=_;if(_===i.RED&&(I===i.FLOAT&&($=i.R32F),I===i.HALF_FLOAT&&($=i.R16F),I===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&($=i.R8UI),I===i.UNSIGNED_SHORT&&($=i.R16UI),I===i.UNSIGNED_INT&&($=i.R32UI),I===i.BYTE&&($=i.R8I),I===i.SHORT&&($=i.R16I),I===i.INT&&($=i.R32I)),_===i.RG&&(I===i.FLOAT&&($=i.RG32F),I===i.HALF_FLOAT&&($=i.RG16F),I===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RGBA){const _e=Q?on:Ye.getTransfer(te);I===i.FLOAT&&($=i.RGBA32F),I===i.HALF_FLOAT&&($=i.RGBA16F),I===i.UNSIGNED_BYTE&&($=_e===Je?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function D(b,_,I){return S(b,I)===!0||b.isFramebufferTexture&&b.minFilter!==Et&&b.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){return b===Et||b===Os||b===ga?i.NEAREST:i.LINEAR}function A(b){const _=b.target;_.removeEventListener("dispose",A),E(_),_.isVideoTexture&&u.delete(_)}function Z(b){const _=b.target;_.removeEventListener("dispose",Z),k(_)}function E(b){const _=r.get(b);if(_.__webglInit===void 0)return;const I=b.source,te=d.get(I);if(te){const Q=te[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(b),Object.keys(te).length===0&&d.delete(I)}r.remove(b)}function M(b){const _=r.get(b);i.deleteTexture(_.__webglTexture);const I=b.source,te=d.get(I);delete te[_.__cacheKey],o.memory.textures--}function k(b){const _=b.texture,I=r.get(b),te=r.get(_);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(I.__webglFramebuffer[Q]))for(let $=0;$<I.__webglFramebuffer[Q].length;$++)i.deleteFramebuffer(I.__webglFramebuffer[Q][$]);else i.deleteFramebuffer(I.__webglFramebuffer[Q]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Q])}else{if(Array.isArray(I.__webglFramebuffer))for(let Q=0;Q<I.__webglFramebuffer.length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[Q]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Q=0;Q<I.__webglColorRenderbuffer.length;Q++)I.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Q]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,$=_.length;Q<$;Q++){const _e=r.get(_[Q]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),r.remove(_[Q])}r.remove(_),r.remove(b)}let G=0;function ue(){G=0}function L(){const b=G;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),G+=1,b}function F(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function V(b,_){const I=r.get(b);if(b.isVideoTexture&&Qe(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,b,_);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function j(b,_){const I=r.get(b);if(b.version>0&&I.__version!==b.version){me(I,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function X(b,_){const I=r.get(b);if(b.version>0&&I.__version!==b.version){me(I,b,_);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function W(b,_){const I=r.get(b);if(b.version>0&&I.__version!==b.version){xe(I,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const ee={[fa]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},re={[Et]:i.NEAREST,[Os]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[uu]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},pe={[bu]:i.NEVER,[Au]:i.ALWAYS,[Eu]:i.LESS,[yo]:i.LEQUAL,[Mu]:i.EQUAL,[wu]:i.GEQUAL,[Su]:i.GREATER,[Tu]:i.NOTEQUAL};function z(b,_,I){if(I?(i.texParameteri(b,i.TEXTURE_WRAP_S,ee[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ee[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ee[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,re[_.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==jt||_.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==Et&&_.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Et||_.minFilter!==ga&&_.minFilter!==Bi||_.type===Mr&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===Ot&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||r.get(_).__currentAnisotropy)&&(i.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy)}}function K(b,_){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const te=_.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const $=F(_);if($!==b.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[$].usedTimes++;const _e=Q[b.__cacheKey];_e!==void 0&&(Q[b.__cacheKey].usedTimes--,_e.usedTimes===0&&M(_)),b.__cacheKey=$,b.__webglTexture=Q[$].texture}return I}function me(b,_,I){let te=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(te=i.TEXTURE_3D);const Q=K(b,_),$=_.source;t.bindTexture(te,b.__webglTexture,i.TEXTURE0+I);const _e=r.get($);if($.version!==_e.__version||Q===!0){t.activeTexture(i.TEXTURE0+I);const he=Ye.getPrimaries(Ye.workingColorSpace),fe=_.colorSpace===Ft?null:Ye.getPrimaries(_.colorSpace),Te=_.colorSpace===Ft||he===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ne=h(_)&&m(_.image)===!1;let J=v(_.image,Ne,!1,n.maxTextureSize);J=Ie(_,J);const Xe=m(J)||s,T=a.convert(_.format,_.colorSpace);let q=a.convert(_.type),se=C(_.internalFormat,T,q,_.colorSpace,_.isVideoTexture);z(te,_,Xe);let ne;const Ee=_.mipmaps,Fe=s&&_.isVideoTexture!==!0&&se!==qs,je=_e.__version===void 0||Q===!0,Be=D(_,J,Xe);if(_.isDepthTexture)se=i.DEPTH_COMPONENT,s?_.type===Mr?se=i.DEPTH_COMPONENT32F:_.type===Er?se=i.DEPTH_COMPONENT24:_.type===Fr?se=i.DEPTH24_STENCIL8:se=i.DEPTH_COMPONENT16:_.type===Mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Br&&se===i.DEPTH_COMPONENT&&_.type!==_a&&_.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Er,q=a.convert(_.type)),_.format===ii&&se===i.DEPTH_COMPONENT&&(se=i.DEPTH_STENCIL,_.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Fr,q=a.convert(_.type))),je&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,se,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,se,J.width,J.height,0,T,q,null));else if(_.isDataTexture)if(Ee.length>0&&Xe){Fe&&je&&t.texStorage2D(i.TEXTURE_2D,Be,se,Ee[0].width,Ee[0].height);for(let ae=0,w=Ee.length;ae<w;ae++)ne=Ee[ae],Fe?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ne.width,ne.height,T,q,ne.data):t.texImage2D(i.TEXTURE_2D,ae,se,ne.width,ne.height,0,T,q,ne.data);_.generateMipmaps=!1}else Fe?(je&&t.texStorage2D(i.TEXTURE_2D,Be,se,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,T,q,J.data)):t.texImage2D(i.TEXTURE_2D,0,se,J.width,J.height,0,T,q,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,se,Ee[0].width,Ee[0].height,J.depth);for(let ae=0,w=Ee.length;ae<w;ae++)ne=Ee[ae],_.format!==qt?T!==null?Fe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ne.width,ne.height,J.depth,T,ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,se,ne.width,ne.height,J.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ne.width,ne.height,J.depth,T,q,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,se,ne.width,ne.height,J.depth,0,T,q,ne.data)}else{Fe&&je&&t.texStorage2D(i.TEXTURE_2D,Be,se,Ee[0].width,Ee[0].height);for(let ae=0,w=Ee.length;ae<w;ae++)ne=Ee[ae],_.format!==qt?T!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ne.width,ne.height,T,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,se,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ne.width,ne.height,T,q,ne.data):t.texImage2D(i.TEXTURE_2D,ae,se,ne.width,ne.height,0,T,q,ne.data)}else if(_.isDataArrayTexture)Fe?(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,se,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,T,q,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,J.width,J.height,J.depth,0,T,q,J.data);else if(_.isData3DTexture)Fe?(je&&t.texStorage3D(i.TEXTURE_3D,Be,se,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,T,q,J.data)):t.texImage3D(i.TEXTURE_3D,0,se,J.width,J.height,J.depth,0,T,q,J.data);else if(_.isFramebufferTexture){if(je)if(Fe)t.texStorage2D(i.TEXTURE_2D,Be,se,J.width,J.height);else{let ae=J.width,w=J.height;for(let ie=0;ie<Be;ie++)t.texImage2D(i.TEXTURE_2D,ie,se,ae,w,0,T,q,null),ae>>=1,w>>=1}}else if(Ee.length>0&&Xe){Fe&&je&&t.texStorage2D(i.TEXTURE_2D,Be,se,Ee[0].width,Ee[0].height);for(let ae=0,w=Ee.length;ae<w;ae++)ne=Ee[ae],Fe?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,T,q,ne):t.texImage2D(i.TEXTURE_2D,ae,se,T,q,ne);_.generateMipmaps=!1}else Fe?(je&&t.texStorage2D(i.TEXTURE_2D,Be,se,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,T,q,J)):t.texImage2D(i.TEXTURE_2D,0,se,T,q,J);S(_,Xe)&&x(te),_e.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function xe(b,_,I){if(_.image.length!==6)return;const te=K(b,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+I);const $=r.get(Q);if(Q.version!==$.__version||te===!0){t.activeTexture(i.TEXTURE0+I);const _e=Ye.getPrimaries(Ye.workingColorSpace),he=_.colorSpace===Ft?null:Ye.getPrimaries(_.colorSpace),fe=_.colorSpace===Ft||_e===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,J=[];for(let ae=0;ae<6;ae++)!Te&&!Ne?J[ae]=v(_.image[ae],!1,!0,n.maxCubemapSize):J[ae]=Ne?_.image[ae].image:_.image[ae],J[ae]=Ie(_,J[ae]);const Xe=J[0],T=m(Xe)||s,q=a.convert(_.format,_.colorSpace),se=a.convert(_.type),ne=C(_.internalFormat,q,se,_.colorSpace),Ee=s&&_.isVideoTexture!==!0,Fe=$.__version===void 0||te===!0;let je=D(_,Xe,T);z(i.TEXTURE_CUBE_MAP,_,T);let Be;if(Te){Ee&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,ne,Xe.width,Xe.height);for(let ae=0;ae<6;ae++){Be=J[ae].mipmaps;for(let w=0;w<Be.length;w++){const ie=Be[w];_.format!==qt?q!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,0,0,ie.width,ie.height,q,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,0,0,ie.width,ie.height,q,se,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,ne,ie.width,ie.height,0,q,se,ie.data)}}}else{Be=_.mipmaps,Ee&&Fe&&(Be.length>0&&je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,je,ne,J[0].width,J[0].height));for(let ae=0;ae<6;ae++)if(Ne){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,J[ae].width,J[ae].height,q,se,J[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ne,J[ae].width,J[ae].height,0,q,se,J[ae].data);for(let w=0;w<Be.length;w++){const ie=Be[w].image[ae].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,0,0,ie.width,ie.height,q,se,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,ne,ie.width,ie.height,0,q,se,ie.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,q,se,J[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ne,q,se,J[ae]);for(let w=0;w<Be.length;w++){const ie=Be[w];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,0,0,q,se,ie.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,ne,q,se,ie.image[ae])}}}S(_,T)&&x(i.TEXTURE_CUBE_MAP),$.__version=Q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ve(b,_,I,te,Q,$){const _e=a.convert(I.format,I.colorSpace),he=a.convert(I.type),fe=C(I.internalFormat,_e,he,I.colorSpace);if(!r.get(_).__hasExternalTextures){const Te=Math.max(1,_.width>>$),Ne=Math.max(1,_.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,fe,Te,Ne,_.depth,0,_e,he,null):t.texImage2D(Q,$,fe,Te,Ne,0,_e,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ge(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,r.get(I).__webglTexture,0,Le(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,r.get(I).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(b,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer&&!_.stencilBuffer){let te=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||ge(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Mr?te=i.DEPTH_COMPONENT32F:Q.type===Er&&(te=i.DEPTH_COMPONENT24));const $=Le(_);ge(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,te,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,te,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(_.depthBuffer&&_.stencilBuffer){const te=Le(_);I&&ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,_.width,_.height):ge(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const te=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<te.length;Q++){const $=te[Q],_e=a.convert($.format,$.colorSpace),he=a.convert($.type),fe=C($.internalFormat,_e,he,$.colorSpace),Te=Le(_);I&&ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,fe,_.width,_.height):ge(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const I=r.get(_.depthTexture).__webglTexture,te=Le(_);if(_.depthTexture.format===Br)ge(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(_.depthTexture.format===ii)ge(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function we(b){const _=r.get(b),I=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");De(_.__webglFramebuffer,b)}else if(I){_.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[te]),_.__webglDepthbuffer[te]=i.createRenderbuffer(),Pe(_.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Pe(_.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(b,_,I){const te=r.get(b);_!==void 0&&ve(te.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&we(b)}function O(b){const _=b.texture,I=r.get(b),te=r.get(_);b.addEventListener("dispose",Z),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=_.version,o.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,$=b.isWebGLMultipleRenderTargets===!0,_e=m(b)||s;if(Q){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let fe=0;fe<_.mipmaps.length;fe++)I.__webglFramebuffer[he][fe]=i.createFramebuffer()}else I.__webglFramebuffer[he]=i.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)I.__webglFramebuffer[he]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if($)if(n.drawBuffers){const he=b.texture;for(let fe=0,Te=he.length;fe<Te;fe++){const Ne=r.get(he[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&ge(b)===!1){const he=$?_:[_];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const Te=he[fe];I.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const Ne=a.convert(Te.format,Te.colorSpace),J=a.convert(Te.type),Xe=C(Te.internalFormat,Ne,J,Te.colorSpace,b.isXRRenderTarget===!0),T=Le(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,Xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),z(i.TEXTURE_CUBE_MAP,_,_e);for(let he=0;he<6;he++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ve(I.__webglFramebuffer[he][fe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else ve(I.__webglFramebuffer[he],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(_,_e)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const he=b.texture;for(let fe=0,Te=he.length;fe<Te;fe++){const Ne=he[fe],J=r.get(Ne);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),z(i.TEXTURE_2D,Ne,_e),ve(I.__webglFramebuffer,b,Ne,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),S(Ne,_e)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),z(he,_,_e),s&&_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ve(I.__webglFramebuffer[fe],b,_,i.COLOR_ATTACHMENT0,he,fe);else ve(I.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,he,0);S(_,_e)&&x(he),t.unbindTexture()}b.depthBuffer&&we(b)}function ft(b){const _=m(b)||s,I=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,Q=I.length;te<Q;te++){const $=I[te];if(S($,_)){const _e=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=r.get($).__webglTexture;t.bindTexture(_e,he),x(_e),t.unbindTexture()}}}function Me(b){if(s&&b.samples>0&&ge(b)===!1){const _=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],I=b.width,te=b.height;let Q=i.COLOR_BUFFER_BIT;const $=[],_e=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=r.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){$.push(i.COLOR_ATTACHMENT0+Te),b.depthBuffer&&$.push(_e);const Ne=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ne===!1&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[Te]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),fe){const J=r.get(_[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,I,te,0,0,I,te,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,he.__webglColorRenderbuffer[Te]);const Ne=r.get(_[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(n.maxSamples,b.samples)}function ge(b){const _=r.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Qe(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Ie(b,_){const I=b.colorSpace,te=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Sa||I!==Bt&&I!==Ft&&(Ye.getTransfer(I)===Je?s===!1?e.has("EXT_sRGB")===!0&&te===qt?(b.format=Sa,b.minFilter=Nt,b.generateMipmaps=!1):_=Ro.sRGBToLinear(_):(te!==qt||Q!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=L,this.resetTextureUnits=ue,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ge}function km(i,e,t){const r=t.isWebGL2;function n(a,o=Ft){let s;const l=Ye.getTransfer(o);if(a===br)return i.UNSIGNED_BYTE;if(a===Bs)return i.UNSIGNED_SHORT_4_4_4_4;if(a===zs)return i.UNSIGNED_SHORT_5_5_5_1;if(a===hu)return i.BYTE;if(a===du)return i.SHORT;if(a===_a)return i.UNSIGNED_SHORT;if(a===Fs)return i.INT;if(a===Er)return i.UNSIGNED_INT;if(a===Mr)return i.FLOAT;if(a===Ot)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===pu)return i.ALPHA;if(a===qt)return i.RGBA;if(a===fu)return i.LUMINANCE;if(a===mu)return i.LUMINANCE_ALPHA;if(a===Br)return i.DEPTH_COMPONENT;if(a===ii)return i.DEPTH_STENCIL;if(a===Sa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===gu)return i.RED;if(a===Hs)return i.RED_INTEGER;if(a===_u)return i.RG;if(a===ks)return i.RG_INTEGER;if(a===Gs)return i.RGBA_INTEGER;if(a===va||a===xa||a===ya||a===ba)if(l===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Vs||a===Ws||a===Xs||a===js)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Vs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Xs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===js)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===qs)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ys||a===Ks)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Ys)return l===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Ks)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Zs||a===Js||a===Qs||a===$s||a===eo||a===to||a===ro||a===io||a===no||a===ao||a===so||a===oo||a===lo||a===co)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Zs)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Js)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Qs)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$s)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===eo)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===to)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ro)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===io)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===no)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ao)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===so)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===oo)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lo)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===co)return l===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ea||a===uo||a===ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ea)return l===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===uo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===vu||a===po||a===fo||a===mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(a===po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Fr?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class Gm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ri;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Wm extends Hr{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const S=[],x=[],C=new be;let D=null;const R=new Ht;R.layers.enable(1),R.viewport=new ht;const A=new Ht;A.layers.enable(2),A.viewport=new ht;const Z=[R,A],E=new Gm;E.layers.enable(1),E.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=S[z];return K===void 0&&(K=new rs,S[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=S[z];return K===void 0&&(K=new rs,S[z]=K),K.getGripSpace()},this.getHand=function(z){let K=S[z];return K===void 0&&(K=new rs,S[z]=K),K.getHandSpace()};function G(z){const K=x.indexOf(z.inputSource);if(K===-1)return;const me=S[K];me!==void 0&&(me.update(z.inputSource,z.frame,c||o),me.dispatchEvent({type:z.type,data:z.inputSource}))}function ue(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",ue),n.removeEventListener("inputsourceschange",L);for(let z=0;z<S.length;z++){const K=x[z];K!==null&&(x[z]=null,S[z].disconnect(K))}M=null,k=null,e.setRenderTarget(m),p=null,d=null,f=null,n=null,h=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",ue),n.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new St(p.framebufferWidth,p.framebufferHeight,{format:qt,type:br,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,me=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?ii:Br,me=v.stencil?Fr:Er);const ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};f=new XRWebGLBinding(n,t),d=f.createProjectionLayer(ve),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new St(d.textureWidth,d.textureHeight,{format:qt,type:br,depthTexture:new nl(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Pe=e.properties.get(h);Pe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),pe.setContext(n),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(z){for(let K=0;K<z.removed.length;K++){const me=z.removed[K],xe=x.indexOf(me);xe>=0&&(x[xe]=null,S[xe].disconnect(me))}for(let K=0;K<z.added.length;K++){const me=z.added[K];let xe=x.indexOf(me);if(xe===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=x.length){x.push(me),xe=Pe;break}else if(x[Pe]===null){x[Pe]=me,xe=Pe;break}if(xe===-1)break}const ve=S[xe];ve&&ve.connect(me)}}const F=new P,V=new P;function j(z,K,me){F.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const xe=F.distanceTo(V),ve=K.projectionMatrix.elements,Pe=me.projectionMatrix.elements,De=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],O=(ve[9]-1)/ve[5],ft=(ve[8]-1)/ve[0],Me=(Pe[8]+1)/Pe[0],Le=De*ft,ge=De*Me,Qe=xe/(-ft+Me),Ie=Qe*-ft;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ie),z.translateZ(Qe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const b=De+Qe,_=we+Qe,I=Le-Ie,te=ge+(xe-Ie),Q=We*we/_*b,$=O*we/_*b;z.projectionMatrix.makePerspective(I,te,Q,$,b,_),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;E.near=A.near=R.near=z.near,E.far=A.far=R.far=z.far,(M!==E.near||k!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,k=E.far);const K=z.parent,me=E.cameras;X(E,K);for(let xe=0;xe<me.length;xe++)X(me[xe],K);me.length===2?j(E,R,A):E.projectionMatrix.copy(R.projectionMatrix),W(z,E,K)};function W(z,K,me){me===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(me.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Hi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let ee=null;function re(z,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let xe=!1;me.length!==E.cameras.length&&(E.cameras.length=0,xe=!0);for(let ve=0;ve<me.length;ve++){const Pe=me[ve];let De=null;if(p!==null)De=p.getViewport(Pe);else{const We=f.getViewSubImage(d,Pe);De=We.viewport,ve===0&&(e.setRenderTargetTextures(h,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(h))}let we=Z[ve];we===void 0&&(we=new Ht,we.layers.enable(ve),we.viewport=new ht,Z[ve]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),ve===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xe===!0&&E.cameras.push(we)}}for(let me=0;me<S.length;me++){const xe=x[me],ve=S[me];xe!==null&&ve!==void 0&&ve.update(xe,K,c||o)}ee&&ee(z,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),g=null}const pe=new Zo;pe.setAnimationLoop(re),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}function Xm(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,qo(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function n(m,h,S,x,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,C)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,S,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Rt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Rt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function jm(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const C=x.program;r.uniformBlockBinding(S,C)}function c(S,x){let C=n[S.id];C===void 0&&(g(S),C=u(S),n[S.id]=C,S.addEventListener("dispose",m));const D=x.program;r.updateUBOMapping(S,D);const R=e.render.frame;a[S.id]!==R&&(d(S),a[S.id]=R)}function u(S){const x=f();S.__bindingPointIndex=x;const C=i.createBuffer(),D=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,C),C}function f(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=n[S.id],C=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=C.length;R<A;R++){const Z=Array.isArray(C[R])?C[R]:[C[R]];for(let E=0,M=Z.length;E<M;E++){const k=Z[E];if(p(k,R,E,D)===!0){const G=k.__offset,ue=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let F=0;F<ue.length;F++){const V=ue[F],j=v(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,C,D){const R=S.value,A=x+"_"+C;if(D[A]===void 0)return typeof R=="number"||typeof R=="boolean"?D[A]=R:D[A]=R.clone(),!0;{const Z=D[A];if(typeof R=="number"||typeof R=="boolean"){if(Z!==R)return D[A]=R,!0}else if(Z.equals(R)===!1)return Z.copy(R),!0}return!1}function g(S){const x=S.uniforms;let C=0;const D=16;for(let A=0,Z=x.length;A<Z;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,k=E.length;M<k;M++){const G=E[M],ue=Array.isArray(G.value)?G.value:[G.value];for(let L=0,F=ue.length;L<F;L++){const V=ue[L],j=v(V),X=C%D;X!==0&&D-X<j.boundary&&(C+=D-X),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=C,C+=j.storage}}}const R=C%D;return R>0&&(C+=D-R),S.__size=C,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const C=o.indexOf(x.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function h(){for(const S in n)i.deleteBuffer(n[S]);o=[],n={},a={}}return{bind:l,update:c,dispose:h}}class wl{constructor(e={}){const{canvas:t=Vu(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;const x=this;let C=!1,D=0,R=0,A=null,Z=-1,E=null;const M=new ht,k=new ht;let G=null;const ue=new Ae(0);let L=0,F=t.width,V=t.height,j=1,X=null,W=null;const ee=new ht(0,0,F,V),re=new ht(0,0,F,V);let pe=!1;const z=new qa;let K=!1,me=!1,xe=null;const ve=new tt,Pe=new be,De=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?j:1}let O=r;function ft(y,U){for(let B=0;B<y.length;B++){const H=y[B],N=t.getContext(H,U);if(N!==null)return N}return null}try{const y={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${et}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),O=ft(U,y),O===null)throw ft(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Me,Le,ge,Qe,Ie,b,_,I,te,Q,$,_e,he,fe,Te,Ne,J,Xe,T,q,se,ne,Ee,Fe;function je(){Me=new rf(O),Le=new Zp(O,Me,e),Me.init(Le),ne=new km(O,Me,Le),ge=new zm(O,Me,Le),Qe=new sf(O),Ie=new wm,b=new Hm(O,Me,ge,Ie,Le,ne,Qe),_=new Qp(x),I=new tf(x),te=new ph(O,Le),Ee=new Yp(O,Me,te,Le),Q=new nf(O,te,Qe,Ee),$=new uf(O,Q,te,Qe),T=new cf(O,Le,b),Ne=new Jp(Ie),_e=new Tm(x,_,I,Me,Le,Ee,Ne),he=new Xm(x,Ie),fe=new Rm,Te=new Im(Me,Le),Xe=new qp(x,_,I,ge,$,d,l),J=new Bm(x,$,Le),Fe=new jm(O,Qe,Le,ge),q=new Kp(O,Me,Qe,Le),se=new af(O,Me,Qe,Le),Qe.programs=_e.programs,x.capabilities=Le,x.extensions=Me,x.properties=Ie,x.renderLists=fe,x.shadowMap=J,x.state=ge,x.info=Qe}je();const Be=new Wm(x,O);this.xr=Be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=Me.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Me.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(F,V,!1))},this.getSize=function(y){return y.set(F,V)},this.setSize=function(y,U,B=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=y,V=U,t.width=Math.floor(y*j),t.height=Math.floor(U*j),B===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(F*j,V*j).floor()},this.setDrawingBufferSize=function(y,U,B){F=y,V=U,j=B,t.width=Math.floor(y*B),t.height=Math.floor(U*B),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(ee)},this.setViewport=function(y,U,B,H){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,U,B,H),ge.viewport(M.copy(ee).multiplyScalar(j).floor())},this.getScissor=function(y){return y.copy(re)},this.setScissor=function(y,U,B,H){y.isVector4?re.set(y.x,y.y,y.z,y.w):re.set(y,U,B,H),ge.scissor(k.copy(re).multiplyScalar(j).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(y){ge.setScissorTest(pe=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){W=y},this.getClearColor=function(y){return y.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(y=!0,U=!0,B=!0){let H=0;if(y){let N=!1;if(A!==null){const ce=A.texture.format;N=ce===Gs||ce===ks||ce===Hs}if(N){const ce=A.texture.type,Se=ce===br||ce===Er||ce===_a||ce===Fr||ce===Bs||ce===zs,Ce=Xe.getClearColor(),Ue=Xe.getClearAlpha(),Ve=Ce.r,ze=Ce.g,He=Ce.b;Se?(p[0]=Ve,p[1]=ze,p[2]=He,p[3]=Ue,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Ve,g[1]=ze,g[2]=He,g[3]=Ue,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT),B&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),fe.dispose(),Te.dispose(),Ie.dispose(),_.dispose(),I.dispose(),$.dispose(),Ee.dispose(),Fe.dispose(),_e.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",kt),Be.removeEventListener("sessionend",Ze),xe&&(xe.dispose(),xe=null),At.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=Qe.autoReset,U=J.enabled,B=J.autoUpdate,H=J.needsUpdate,N=J.type;je(),Qe.autoReset=y,J.enabled=U,J.autoUpdate=B,J.needsUpdate=H,J.type=N}function ie(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function de(y){const U=y.target;U.removeEventListener("dispose",de),Re(U)}function Re(y){ye(y),Ie.remove(y)}function ye(y){const U=Ie.get(y).programs;U!==void 0&&(U.forEach(function(B){_e.releaseProgram(B)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,B,H,N,ce){U===null&&(U=we);const Se=N.isMesh&&N.matrixWorld.determinant()<0,Ce=E0(y,U,B,H,N);ge.setMaterial(H,Se);let Ue=B.index,Ve=1;if(H.wireframe===!0){if(Ue=Q.getWireframeAttribute(B),Ue===void 0)return;Ve=2}const ze=B.drawRange,He=B.attributes.position;let yt=ze.start*Ve,ct=(ze.start+ze.count)*Ve;ce!==null&&(yt=Math.max(yt,ce.start*Ve),ct=Math.min(ct,(ce.start+ce.count)*Ve)),Ue!==null?(yt=Math.max(yt,0),ct=Math.min(ct,Ue.count)):He!=null&&(yt=Math.max(yt,0),ct=Math.min(ct,He.count));const Gt=ct-yt;if(Gt<0||Gt===1/0)return;Ee.setup(N,H,Ce,B,Ue);let vr,it=q;if(Ue!==null&&(vr=te.get(Ue),it=se,it.setIndex(vr)),N.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*We()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(N.isLine){let Ge=H.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*We()),N.isLineSegments?it.setMode(O.LINES):N.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else N.isPoints?it.setMode(O.POINTS):N.isSprite&&it.setMode(O.TRIANGLES);if(N.isBatchedMesh)it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)it.renderInstances(yt,Gt,N.count);else if(B.isInstancedBufferGeometry){const Ge=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ms=Math.min(B.instanceCount,Ge);it.renderInstances(yt,Gt,Ms)}else it.render(yt,Gt)};function qe(y,U,B){y.transparent===!0&&y.side===Wt&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,sa(y,U,B),y.side=xr,y.needsUpdate=!0,sa(y,U,B),y.side=Wt):sa(y,U,B)}this.compile=function(y,U,B=null){B===null&&(B=y),m=Te.get(B),m.init(),S.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),y!==B&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(x._useLegacyLights);const H=new Set;return y.traverse(function(N){const ce=N.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const Ce=ce[Se];qe(Ce,B,N),H.add(Ce)}else qe(ce,B,N),H.add(ce)}),S.pop(),m=null,H},this.compileAsync=function(y,U,B=null){const H=this.compile(y,U,B);return new Promise(N=>{function ce(){if(H.forEach(function(Se){Ie.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){N(y);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ke=null;function at(y){Ke&&Ke(y)}function kt(){At.stop()}function Ze(){At.start()}const At=new Zo;At.setAnimationLoop(at),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(y){Ke=y,Be.setAnimationLoop(y),y===null?At.stop():At.start()},Be.addEventListener("sessionstart",kt),Be.addEventListener("sessionend",Ze),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(U),U=Be.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,U,A),m=Te.get(y,S.length),m.init(),S.push(m),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(ve),me=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,me),v=fe.get(y,h.length),v.init(),h.push(v),nr(y,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,W),this.info.render.frame++,K===!0&&Ne.beginShadows();const B=m.state.shadowsArray;if(J.render(B,y,U),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(v,y),m.setupLights(x._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let N=0,ce=H.length;N<ce;N++){const Se=H[N];Ec(v,y,Se,Se.viewport)}}else Ec(v,y,U);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(x,y,U),Ee.resetDefaultState(),Z=-1,E=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function nr(y,U,B,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||z.intersectsSprite(y)){H&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);const ce=$.update(y),Se=y.material;Se.visible&&v.push(y,ce,Se,B,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||z.intersectsObject(y))){const ce=$.update(y),Se=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(Se)){const Ce=ce.groups;for(let Ue=0,Ve=Ce.length;Ue<Ve;Ue++){const ze=Ce[Ue],He=Se[ze.materialIndex];He&&He.visible&&v.push(y,ce,He,B,De.z,ze)}}else Se.visible&&v.push(y,ce,Se,B,De.z,null)}}const N=y.children;for(let ce=0,Se=N.length;ce<Se;ce++)nr(N[ce],U,B,H)}function Ec(y,U,B,H){const N=y.opaque,ce=y.transmissive,Se=y.transparent;m.setupLightsView(B),K===!0&&Ne.setGlobalState(x.clippingPlanes,B),ce.length>0&&b0(N,ce,U,B),H&&ge.viewport(M.copy(H)),N.length>0&&aa(N,U,B),ce.length>0&&aa(ce,U,B),Se.length>0&&aa(Se,U,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function b0(y,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const N=Le.isWebGL2;xe===null&&(xe=new St(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ot:br,minFilter:Bi,samples:N?4:0})),x.getDrawingBufferSize(Pe),N?xe.setSize(Pe.x,Pe.y):xe.setSize(hn(Pe.x),hn(Pe.y));const ce=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(ue),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=yr,aa(y,B,H),b.updateMultisampleRenderTarget(xe),b.updateRenderTargetMipmap(xe);let Ce=!1;for(let Ue=0,Ve=U.length;Ue<Ve;Ue++){const ze=U[Ue],He=ze.object,yt=ze.geometry,ct=ze.material,Gt=ze.group;if(ct.side===Wt&&He.layers.test(H.layers)){const vr=ct.side;ct.side=Rt,ct.needsUpdate=!0,Mc(He,B,H,yt,ct,Gt),ct.side=vr,ct.needsUpdate=!0,Ce=!0}}Ce===!0&&(b.updateMultisampleRenderTarget(xe),b.updateRenderTargetMipmap(xe)),x.setRenderTarget(ce),x.setClearColor(ue,L),x.toneMapping=Se}function aa(y,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ce=y.length;N<ce;N++){const Se=y[N],Ce=Se.object,Ue=Se.geometry,Ve=H===null?Se.material:H,ze=Se.group;Ce.layers.test(B.layers)&&Mc(Ce,U,B,Ue,Ve,ze)}}function Mc(y,U,B,H,N,ce){y.onBeforeRender(x,U,B,H,N,ce),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,U,B,H,y,ce),N.transparent===!0&&N.side===Wt&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,y,ce),N.side=xr,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,y,ce),N.side=Wt):x.renderBufferDirect(B,U,H,N,y,ce),y.onAfterRender(x,U,B,H,N,ce)}function sa(y,U,B){U.isScene!==!0&&(U=we);const H=Ie.get(y),N=m.state.lights,ce=m.state.shadowsArray,Se=N.state.version,Ce=_e.getParameters(y,N.state,ce,U,B),Ue=_e.getProgramCacheKey(Ce);let Ve=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?I:_).get(y.envMap||H.environment),Ve===void 0&&(y.addEventListener("dispose",de),Ve=new Map,H.programs=Ve);let ze=Ve.get(Ue);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Se)return Tc(y,Ce),ze}else Ce.uniforms=_e.getUniforms(y),y.onBuild(B,Ce,x),y.onBeforeCompile(Ce,x),ze=_e.acquireProgram(Ce,Ue),Ve.set(Ue,ze),H.uniforms=Ce.uniforms;const He=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(He.clippingPlanes=Ne.uniform),Tc(y,Ce),H.needsLights=S0(y),H.lightsStateVersion=Se,H.needsLights&&(He.ambientLightColor.value=N.state.ambient,He.lightProbe.value=N.state.probe,He.directionalLights.value=N.state.directional,He.directionalLightShadows.value=N.state.directionalShadow,He.spotLights.value=N.state.spot,He.spotLightShadows.value=N.state.spotShadow,He.rectAreaLights.value=N.state.rectArea,He.ltc_1.value=N.state.rectAreaLTC1,He.ltc_2.value=N.state.rectAreaLTC2,He.pointLights.value=N.state.point,He.pointLightShadows.value=N.state.pointShadow,He.hemisphereLights.value=N.state.hemi,He.directionalShadowMap.value=N.state.directionalShadowMap,He.directionalShadowMatrix.value=N.state.directionalShadowMatrix,He.spotShadowMap.value=N.state.spotShadowMap,He.spotLightMatrix.value=N.state.spotLightMatrix,He.spotLightMap.value=N.state.spotLightMap,He.pointShadowMap.value=N.state.pointShadowMap,He.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function Sc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Hn.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Tc(y,U){const B=Ie.get(y);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function E0(y,U,B,H,N){U.isScene!==!0&&(U=we),b.resetTextureUnits();const ce=U.fog,Se=H.isMeshStandardMaterial?U.environment:null,Ce=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bt,Ue=(H.isMeshStandardMaterial?I:_).get(H.envMap||Se),Ve=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),He=!!B.morphAttributes.position,yt=!!B.morphAttributes.normal,ct=!!B.morphAttributes.color;let Gt=yr;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Gt=x.toneMapping);const vr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=vr!==void 0?vr.length:0,Ge=Ie.get(H),Ms=m.state.lights;if(K===!0&&(me===!0||y!==E)){const Vt=y===E&&H.id===Z;Ne.setState(H,y,Vt)}let Ss=!1;H.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ms.state.version||Ge.outputColorSpace!==Ce||N.isBatchedMesh&&Ge.batching===!1||!N.isBatchedMesh&&Ge.batching===!0||N.isInstancedMesh&&Ge.instancing===!1||!N.isInstancedMesh&&Ge.instancing===!0||N.isSkinnedMesh&&Ge.skinning===!1||!N.isSkinnedMesh&&Ge.skinning===!0||N.isInstancedMesh&&Ge.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ge.instancingColor===!1&&N.instanceColor!==null||Ge.envMap!==Ue||H.fog===!0&&Ge.fog!==ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ne.numPlanes||Ge.numIntersection!==Ne.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==ze||Ge.morphTargets!==He||Ge.morphNormals!==yt||Ge.morphColors!==ct||Ge.toneMapping!==Gt||Le.isWebGL2===!0&&Ge.morphTargetsCount!==it)&&(Ss=!0):(Ss=!0,Ge.__version=H.version);let Qr=Ge.currentProgram;Ss===!0&&(Qr=sa(H,U,N));let wc=!1,en=!1,Ts=!1;const bt=Qr.getUniforms(),$r=Ge.uniforms;if(ge.useProgram(Qr.program)&&(wc=!0,en=!0,Ts=!0),H.id!==Z&&(Z=H.id,en=!0),wc||E!==y){bt.setValue(O,"projectionMatrix",y.projectionMatrix),bt.setValue(O,"viewMatrix",y.matrixWorldInverse);const Vt=bt.map.cameraPosition;Vt!==void 0&&Vt.setValue(O,De.setFromMatrixPosition(y.matrixWorld)),Le.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,en=!0,Ts=!0)}if(N.isSkinnedMesh){bt.setOptional(O,N,"bindMatrix"),bt.setOptional(O,N,"bindMatrixInverse");const Vt=N.skeleton;Vt&&(Le.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),bt.setValue(O,"boneTexture",Vt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(bt.setOptional(O,N,"batchingTexture"),bt.setValue(O,"batchingTexture",N._matricesTexture,b));const ws=B.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&Le.isWebGL2===!0)&&T.update(N,B,Qr),(en||Ge.receiveShadow!==N.receiveShadow)&&(Ge.receiveShadow=N.receiveShadow,bt.setValue(O,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&($r.envMap.value=Ue,$r.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),en&&(bt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&M0($r,Ts),ce&&H.fog===!0&&he.refreshFogUniforms($r,ce),he.refreshMaterialUniforms($r,H,j,V,xe),Hn.upload(O,Sc(Ge),$r,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Hn.upload(O,Sc(Ge),$r,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(O,"center",N.center),bt.setValue(O,"modelViewMatrix",N.modelViewMatrix),bt.setValue(O,"normalMatrix",N.normalMatrix),bt.setValue(O,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Vt=H.uniformsGroups;for(let As=0,T0=Vt.length;As<T0;As++)if(Le.isWebGL2){const Ac=Vt[As];Fe.update(Ac,Qr),Fe.bind(Ac,Qr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qr}function M0(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function S0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,U,B){Ie.get(y.texture).__webglTexture=U,Ie.get(y.depthTexture).__webglTexture=B;const H=Ie.get(y);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const B=Ie.get(y);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,B=0){A=y,D=U,R=B;let H=!0,N=null,ce=!1,Se=!1;if(y){const Ce=Ie.get(y);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Ce.__webglFramebuffer===void 0?b.setupRenderTarget(y):Ce.__hasExternalTextures&&b.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Se=!0);const Ve=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?N=Ve[U][B]:N=Ve[U],ce=!0):Le.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?N=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[B]:N=Ve,M.copy(y.viewport),k.copy(y.scissor),G=y.scissorTest}else M.copy(ee).multiplyScalar(j).floor(),k.copy(re).multiplyScalar(j).floor(),G=pe;if(ge.bindFramebuffer(O.FRAMEBUFFER,N)&&Le.drawBuffers&&H&&ge.drawBuffers(y,N),ge.viewport(M),ge.scissor(k),ge.setScissorTest(G),ce){const Ce=Ie.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,B)}else if(Se){const Ce=Ie.get(y.texture),Ue=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,B||0,Ue)}Z=-1},this.readRenderTargetPixels=function(y,U,B,H,N,ce,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){ge.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Ue=y.texture,Ve=Ue.format,ze=Ue.type;if(Ve!==qt&&ne.convert(Ve)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===Ot&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(ze!==br&&ne.convert(ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Mr&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&B>=0&&B<=y.height-N&&O.readPixels(U,B,H,N,ne.convert(Ve),ne.convert(ze),ce)}finally{const Ue=A!==null?Ie.get(A).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(y,U,B=0){const H=Math.pow(2,-B),N=Math.floor(U.image.width*H),ce=Math.floor(U.image.height*H);b.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,y.x,y.y,N,ce),ge.unbindTexture()},this.copyTextureToTexture=function(y,U,B,H=0){const N=U.image.width,ce=U.image.height,Se=ne.convert(B.format),Ce=ne.convert(B.type);b.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,y.x,y.y,N,ce,Se,Ce,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,y.x,y.y,Se,Ce,U.image),H===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(y,U,B,H,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=y.max.x-y.min.x+1,Se=y.max.y-y.min.y+1,Ce=y.max.z-y.min.z+1,Ue=ne.convert(H.format),Ve=ne.convert(H.type);let ze;if(H.isData3DTexture)b.setTexture3D(H,0),ze=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)b.setTexture2DArray(H,0),ze=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const He=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ct=O.getParameter(O.UNPACK_SKIP_PIXELS),Gt=O.getParameter(O.UNPACK_SKIP_ROWS),vr=O.getParameter(O.UNPACK_SKIP_IMAGES),it=B.isCompressedTexture?B.mipmaps[N]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,it.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,y.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,y.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,y.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(ze,N,U.x,U.y,U.z,ce,Se,Ce,Ue,Ve,it.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(ze,N,U.x,U.y,U.z,ce,Se,Ce,Ue,it.data)):O.texSubImage3D(ze,N,U.x,U.y,U.z,ce,Se,Ce,Ue,Ve,it),O.pixelStorei(O.UNPACK_ROW_LENGTH,He),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,vr),N===0&&H.generateMipmaps&&O.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){D=0,R=0,A=null,ge.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ma?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===sn?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?zr:go}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?ut:Bt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qm extends wl{}qm.prototype.isWebGL1Renderer=!0;class Ym extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class is extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Al=new P,Rl=new P,Cl=new tt,ns=new yn,kn=new _n;class Km extends dt{constructor(e=new Qt,t=new is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,a=t.count;n<a;n++)Al.fromBufferAttribute(t,n-1),Rl.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=Al.distanceTo(Rl);e.setAttribute("lineDistance",new Tt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kn.copy(r.boundingSphere),kn.applyMatrix4(n),kn.radius+=a,e.ray.intersectsSphere(kn)===!1)return;Cl.copy(n).invert(),ns.copy(e.ray).applyMatrix4(Cl);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new P,u=new P,f=new P,d=new P,p=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const m=Math.max(0,o.start),h=Math.min(g.count,o.start+o.count);for(let S=m,x=h-1;S<x;S+=p){const C=g.getX(S),D=g.getX(S+1);if(c.fromBufferAttribute(v,C),u.fromBufferAttribute(v,D),ns.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),h=Math.min(v.count,o.start+o.count);for(let S=m,x=h-1;S<x;S+=p){if(c.fromBufferAttribute(v,S),u.fromBufferAttribute(v,S+1),ns.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}const Ll=new P,Pl=new P;class Ul extends Km{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,a=t.count;n<a;n+=2)Ll.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Ll.distanceTo(Pl);e.setAttribute("lineDistance",new Tt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dr extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dl extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Zm extends Dl{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const as=new tt,Il=new P,Nl=new P;class Jm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),as.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(as),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(as)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qm extends Jm{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $m extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ol(){return(typeof performance>"u"?Date:performance).now()}class tg{constructor(e,t,r=0,n=1/0){this.ray=new yn(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return ss(e,this,r,t),r.sort(Fl),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)ss(e[n],this,r,t);return r.sort(Fl),r}}function Fl(i,e){return i.distance-e.distance}function ss(i,e,t,r){if(i.layers.test(e.layers)&&i.raycast(e,t),r===!0){const n=i.children;for(let a=0,o=n.length;a<o;a++)ss(n[a],e,t,!0)}}class Bl{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rg extends Ul{constructor(e=10,t=10,r=4473924,n=8947848){r=new Ae(r),n=new Ae(n);const a=t/2,o=e/t,s=e/2,l=[],c=[];for(let d=0,p=0,g=-s;d<=t;d++,g+=o){l.push(-s,0,g,s,0,g),l.push(g,0,-s,g,0,s);const v=d===a?r:n;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Qt;u.setAttribute("position",new Tt(l,3)),u.setAttribute("color",new Tt(c,3));const f=new is({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ig extends Ul{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Qt;n.setAttribute("position",new Tt(t,3)),n.setAttribute("color",new Tt(r,3));const a=new is({vertexColors:!0,toneMapped:!1});super(n,a),this.type="AxesHelper"}setColors(e,t,r){const n=new Ae,a=this.geometry.attributes.color.array;return n.set(e),n.toArray(a,0),n.toArray(a,3),n.set(t),n.toArray(a,6),n.toArray(a,9),n.set(r),n.toArray(a,12),n.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:et}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=et);const Ci=document.getElementById("c");Ci.getContext("webgl2");const zl={type:"change"},os={type:"start"},Hl={type:"end"},Gn=new yn,kl=new Cr,ng=Math.cos(70*Gu.DEG2RAD);class ag extends Hr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$e.ROTATE,MIDDLE:$e.DOLLY,RIGHT:$e.PAN},this.touches={ONE:st.ROTATE,TWO:st.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",$),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(zl),r.update(),a=n.NONE},this.update=function(){const T=new P,q=new kr().setFromUnitVectors(e.up,new P(0,1,0)),se=q.clone().invert(),ne=new P,Ee=new kr,Fe=new P,je=2*Math.PI;return function(Be=null){const ae=r.object.position;T.copy(ae).sub(r.target),T.applyQuaternion(q),s.setFromVector3(T),r.autoRotate&&a===n.NONE&&k(E(Be)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let w=r.minAzimuthAngle,ie=r.maxAzimuthAngle;isFinite(w)&&isFinite(ie)&&(w<-Math.PI?w+=je:w>Math.PI&&(w-=je),ie<-Math.PI?ie+=je:ie>Math.PI&&(ie-=je),w<=ie?s.theta=Math.max(w,Math.min(ie,s.theta)):s.theta=s.theta>(w+ie)/2?Math.max(w,s.theta):Math.min(ie,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(u,r.dampingFactor):r.target.add(u),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&R||r.object.isOrthographicCamera?s.radius=W(s.radius):s.radius=W(s.radius*c),T.setFromSpherical(s),T.applyQuaternion(se),ae.copy(r.target).add(T),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,u.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let de=!1;if(r.zoomToCursor&&R){let Re=null;if(r.object.isPerspectiveCamera){const ye=T.length();Re=W(ye*c);const qe=ye-Re;r.object.position.addScaledVector(C,qe),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const ye=new P(D.x,D.y,0);ye.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),de=!0;const qe=new P(D.x,D.y,0);qe.unproject(r.object),r.object.position.sub(qe).add(ye),r.object.updateMatrixWorld(),Re=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Re!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Re).add(r.object.position):(Gn.origin.copy(r.object.position),Gn.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Gn.direction))<ng?e.lookAt(r.target):(kl.setFromNormalAndCoplanarPoint(r.object.up,r.target),Gn.intersectPlane(kl,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),de=!0);return c=1,R=!1,de||ne.distanceToSquared(r.object.position)>o||8*(1-Ee.dot(r.object.quaternion))>o||Fe.distanceToSquared(r.target)>0?(r.dispatchEvent(zl),ne.copy(r.object.position),Ee.copy(r.object.quaternion),Fe.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",fe),r.domElement.removeEventListener("pointerdown",Ie),r.domElement.removeEventListener("pointercancel",_),r.domElement.removeEventListener("wheel",Q),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",_),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",$),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new Bl,l=new Bl;let c=1;const u=new P,f=new be,d=new be,p=new be,g=new be,v=new be,m=new be,h=new be,S=new be,x=new be,C=new P,D=new be;let R=!1;const A=[],Z={};function E(T){return T!==null?2*Math.PI/60*r.autoRotateSpeed*T:2*Math.PI/60/60*r.autoRotateSpeed}function M(T){const q=Math.abs(T)/(100*(window.devicePixelRatio|0));return Math.pow(.95,r.zoomSpeed*q)}function k(T){l.theta-=T}function G(T){l.phi-=T}const ue=function(){const T=new P;return function(q,se){T.setFromMatrixColumn(se,0),T.multiplyScalar(-q),u.add(T)}}(),L=function(){const T=new P;return function(q,se){r.screenSpacePanning===!0?T.setFromMatrixColumn(se,1):(T.setFromMatrixColumn(se,0),T.crossVectors(r.object.up,T)),T.multiplyScalar(q),u.add(T)}}(),F=function(){const T=new P;return function(q,se){const ne=r.domElement;if(r.object.isPerspectiveCamera){const Ee=r.object.position;T.copy(Ee).sub(r.target);let Fe=T.length();Fe*=Math.tan(r.object.fov/2*Math.PI/180),ue(2*q*Fe/ne.clientHeight,r.object.matrix),L(2*se*Fe/ne.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(ue(q*(r.object.right-r.object.left)/r.object.zoom/ne.clientWidth,r.object.matrix),L(se*(r.object.top-r.object.bottom)/r.object.zoom/ne.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function V(T){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function j(T){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function X(T,q){if(!r.zoomToCursor)return;R=!0;const se=r.domElement.getBoundingClientRect(),ne=T-se.left,Ee=q-se.top,Fe=se.width,je=se.height;D.x=ne/Fe*2-1,D.y=-(Ee/je)*2+1,C.set(D.x,D.y,1).unproject(r.object).sub(r.object.position).normalize()}function W(T){return Math.max(r.minDistance,Math.min(r.maxDistance,T))}function ee(T){f.set(T.clientX,T.clientY)}function re(T){X(T.clientX,T.clientX),h.set(T.clientX,T.clientY)}function pe(T){g.set(T.clientX,T.clientY)}function z(T){d.set(T.clientX,T.clientY),p.subVectors(d,f).multiplyScalar(r.rotateSpeed);const q=r.domElement;k(2*Math.PI*p.x/q.clientHeight),G(2*Math.PI*p.y/q.clientHeight),f.copy(d),r.update()}function K(T){S.set(T.clientX,T.clientY),x.subVectors(S,h),x.y>0?V(M(x.y)):x.y<0&&j(M(x.y)),h.copy(S),r.update()}function me(T){v.set(T.clientX,T.clientY),m.subVectors(v,g).multiplyScalar(r.panSpeed),F(m.x,m.y),g.copy(v),r.update()}function xe(T){X(T.clientX,T.clientY),T.deltaY<0?j(M(T.deltaY)):T.deltaY>0&&V(M(T.deltaY)),r.update()}function ve(T){let q=!1;switch(T.code){case r.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?G(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(0,r.keyPanSpeed),q=!0;break;case r.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?G(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(0,-r.keyPanSpeed),q=!0;break;case r.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?k(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(r.keyPanSpeed,0),q=!0;break;case r.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?k(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(-r.keyPanSpeed,0),q=!0;break}q&&(T.preventDefault(),r.update())}function Pe(T){if(A.length===1)f.set(T.pageX,T.pageY);else{const q=Xe(T),se=.5*(T.pageX+q.x),ne=.5*(T.pageY+q.y);f.set(se,ne)}}function De(T){if(A.length===1)g.set(T.pageX,T.pageY);else{const q=Xe(T),se=.5*(T.pageX+q.x),ne=.5*(T.pageY+q.y);g.set(se,ne)}}function we(T){const q=Xe(T),se=T.pageX-q.x,ne=T.pageY-q.y,Ee=Math.sqrt(se*se+ne*ne);h.set(0,Ee)}function We(T){r.enableZoom&&we(T),r.enablePan&&De(T)}function O(T){r.enableZoom&&we(T),r.enableRotate&&Pe(T)}function ft(T){if(A.length==1)d.set(T.pageX,T.pageY);else{const se=Xe(T),ne=.5*(T.pageX+se.x),Ee=.5*(T.pageY+se.y);d.set(ne,Ee)}p.subVectors(d,f).multiplyScalar(r.rotateSpeed);const q=r.domElement;k(2*Math.PI*p.x/q.clientHeight),G(2*Math.PI*p.y/q.clientHeight),f.copy(d)}function Me(T){if(A.length===1)v.set(T.pageX,T.pageY);else{const q=Xe(T),se=.5*(T.pageX+q.x),ne=.5*(T.pageY+q.y);v.set(se,ne)}m.subVectors(v,g).multiplyScalar(r.panSpeed),F(m.x,m.y),g.copy(v)}function Le(T){const q=Xe(T),se=T.pageX-q.x,ne=T.pageY-q.y,Ee=Math.sqrt(se*se+ne*ne);S.set(0,Ee),x.set(0,Math.pow(S.y/h.y,r.zoomSpeed)),V(x.y),h.copy(S);const Fe=(T.pageX+q.x)*.5,je=(T.pageY+q.y)*.5;X(Fe,je)}function ge(T){r.enableZoom&&Le(T),r.enablePan&&Me(T)}function Qe(T){r.enableZoom&&Le(T),r.enableRotate&&ft(T)}function Ie(T){r.enabled!==!1&&(A.length===0&&(r.domElement.setPointerCapture(T.pointerId),r.domElement.addEventListener("pointermove",b),r.domElement.addEventListener("pointerup",_)),Te(T),T.pointerType==="touch"?_e(T):I(T))}function b(T){r.enabled!==!1&&(T.pointerType==="touch"?he(T):te(T))}function _(T){Ne(T),A.length===0&&(r.domElement.releasePointerCapture(T.pointerId),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",_)),r.dispatchEvent(Hl),a=n.NONE}function I(T){let q;switch(T.button){case 0:q=r.mouseButtons.LEFT;break;case 1:q=r.mouseButtons.MIDDLE;break;case 2:q=r.mouseButtons.RIGHT;break;default:q=-1}switch(q){case $e.DOLLY:if(r.enableZoom===!1)return;re(T),a=n.DOLLY;break;case $e.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(r.enablePan===!1)return;pe(T),a=n.PAN}else{if(r.enableRotate===!1)return;ee(T),a=n.ROTATE}break;case $e.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(r.enableRotate===!1)return;ee(T),a=n.ROTATE}else{if(r.enablePan===!1)return;pe(T),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(os)}function te(T){switch(a){case n.ROTATE:if(r.enableRotate===!1)return;z(T);break;case n.DOLLY:if(r.enableZoom===!1)return;K(T);break;case n.PAN:if(r.enablePan===!1)return;me(T);break}}function Q(T){r.enabled===!1||r.enableZoom===!1||a!==n.NONE||(T.preventDefault(),r.dispatchEvent(os),xe(T),r.dispatchEvent(Hl))}function $(T){r.enabled===!1||r.enablePan===!1||ve(T)}function _e(T){switch(J(T),A.length){case 1:switch(r.touches.ONE){case st.ROTATE:if(r.enableRotate===!1)return;Pe(T),a=n.TOUCH_ROTATE;break;case st.PAN:if(r.enablePan===!1)return;De(T),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(r.touches.TWO){case st.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;We(T),a=n.TOUCH_DOLLY_PAN;break;case st.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;O(T),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(os)}function he(T){switch(J(T),a){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;ft(T),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;Me(T),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ge(T),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Qe(T),r.update();break;default:a=n.NONE}}function fe(T){r.enabled!==!1&&T.preventDefault()}function Te(T){A.push(T.pointerId)}function Ne(T){delete Z[T.pointerId];for(let q=0;q<A.length;q++)if(A[q]==T.pointerId){A.splice(q,1);return}}function J(T){let q=Z[T.pointerId];q===void 0&&(q=new be,Z[T.pointerId]=q),q.set(T.pageX,T.pageY)}function Xe(T){const q=T.pointerId===A[0]?A[1]:A[0];return Z[q]}r.domElement.addEventListener("contextmenu",fe),r.domElement.addEventListener("pointerdown",Ie),r.domElement.addEventListener("pointercancel",_),r.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}}class Yi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sg=new Ya(-1,1,1,-1,0,1);class og extends Qt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}}const lg=new og;class Gl{constructor(e){this._mesh=new It(lg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Vl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cg extends Yi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xa.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gl(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wl extends Yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class ug extends Yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new be);this._width=r.width,this._height=r.height,t=new St(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ot}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cg(Vl),this.copyPass.material.blending=Xt,this.clock=new eg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,a=this.passes.length;n<a;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),o.needsSwap){if(r){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Wl!==void 0&&(o instanceof Wl?r=!0:o instanceof ug&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lr extends Yi{constructor(e,t,r,n){super(),this.renderScene=t,this.renderCamera=r,this.selectedObjects=n!==void 0?n:[],this.visibleEdgeColor=new Ae(1,1,1),this.hiddenEdgeColor=new Ae(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256);const a=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new St(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Tl,this.depthMaterial.side=Wt,this.depthMaterial.depthPacking=_o,this.depthMaterial.blending=Xt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Wt,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new St(this.resolution.x,this.resolution.y,{type:Ot}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new St(a,o,{type:Ot}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new St(a,o,{type:Ot}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new St(Math.round(a/2),Math.round(o/2),{type:Ot}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new St(a,o,{type:Ot}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new St(Math.round(a/2),Math.round(o/2),{type:Ot}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const s=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(s),this.separableBlurMaterial1.uniforms.texSize.value.set(a,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(a/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Vl;this.copyUniforms=Xa.clone(c.uniforms),this.materialCopy=new Ct({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Xt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.fsQuad=new Gl(null),this.tempPulseColor1=new Ae,this.tempPulseColor2=new Ae,this.textureMatrix=new tt;function u(f,d){const p=d.isPerspectiveCamera?"perspective":"orthographic";return f.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let r=Math.round(e/this.downSampleRatio),n=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(r,n),this.renderTargetBlurBuffer1.setSize(r,n),this.renderTargetEdgeBuffer1.setSize(r,n),this.separableBlurMaterial1.uniforms.texSize.value.set(r,n),r=Math.round(r/2),n=Math.round(n/2),this.renderTargetBlurBuffer2.setSize(r,n),this.renderTargetEdgeBuffer2.setSize(r,n),this.separableBlurMaterial2.uniforms.texSize.value.set(r,n)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function r(n){n.isMesh&&(e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e))}for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(r)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,r=[];function n(o){o.isMesh&&r.push(o)}for(let o=0;o<this.selectedObjects.length;o++)this.selectedObjects[o].traverse(n);function a(o){if(o.isMesh||o.isSprite){let s=!1;for(let l=0;l<r.length;l++)if(r[l].id===o.id){s=!0;break}if(s===!1){const l=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,l)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(a)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,r,n,a){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,a&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const s=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=s,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Lr.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Lr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Lr.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Lr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(r),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=r.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Ct({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new be(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new Ct({uniforms:{maskTexture:{value:null},texSize:{value:new be(.5,.5)},visibleEdgeColor:{value:new P(1,1,1)},hiddenEdgeColor:{value:new P(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new Ct({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new Ct({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:la,depthTest:!1,depthWrite:!1,transparent:!0})}}Lr.BlurDirectionX=new be(1,0),Lr.BlurDirectionY=new be(0,1);class dg extends Yi{constructor(e,t,r=null,n=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const pr=new Ym,Ki=new Ri,Pr=new Ri;pr.add(Ki),Ki.add(Pr);const fr=new Ht(45,window.innerWidth/window.innerHeight,1,1e4);fr.position.set(1500,1e3,1500),fr.lookAt(500,0,500),Ye.enabled=!0;const Zi=new wl({antialias:!0,canvas:Ci});Zi.setSize(window.innerWidth,window.innerHeight),Zi.setPixelRatio(Math.min(window.devicePixelRatio,2));const Vn=new hg(Zi),pg=new dg(pr,fr);Vn.addPass(pg);const Kr=new Lr(new be(window.innerWidth,window.innerHeight),pr,fr,[]);Kr.selectedObjects=[],Kr.edgeStrength=10,Kr.edgeThickness=1,Kr.visibleEdgeColor=new Ae(0,0,0),Vn.addPass(Kr);class fg{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=ls(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=mg.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=ls()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:ls())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta,this}}function ls(){return(typeof performance>"u"?Date:performance).now()}function mg(){document.hidden===!1&&this.reset()}const cs=new ag(fr,Ci);cs.target.set(500,0,500),cs.enableDamping=!0,new fg;let Xl=performance.now();const jl=()=>{const i=performance.now(),e=(i-Xl)/1e3;Xl=i,Vn.render(),cs.update(e),requestAnimationFrame(jl)},gg=new ig,us=new rg(1e5,2e3);us.raycast=()=>{},us.position.set(500,0,500);const ql=document.getElementById("voxelColor");function _g(i,e){return Math.abs(i.r-e.r)<=Number.EPSILON&&Math.abs(i.g-e.g)<=Number.EPSILON&&Math.abs(i.b-e.b)<=Number.EPSILON}function Li(){const i=ql.value,e=parseInt(i.substring(1,3),16),t=parseInt(i.substring(3,5),16),r=parseInt(i.substring(5,7),16);return{r:e,g:t,b:r}}function Pi(i){let e=i>>16&255,t=i>>8&255,r=i&255,n=new Ae;return n.setRGB(e/255,t/255,r/255,Bt),{r:n.r*255,g:n.g*255,b:n.b*255}}function Yl(i){const{r:e,g:t,b:r}=i;let n=new Ae;n.setRGB(e/255,t/255,r/255,Bt);let a=Math.floor(n.r*255),o=Math.floor(n.g*255),s=Math.floor(n.b*255);return a<<16|o<<8|s}function mr(i){const{r:e,g:t,b:r}=i;return new Ae().setRGB(e/255,t/255,r/255,ut)}function vg(i){let e={r:0,g:0,b:0};return i.getRGB(e,Bt),{r:e.r*255,g:e.g*255,b:e.b*255}}function xg(i){ql.value="#"+i.toString(16)}new Xr(50,50,50);const Kl=new Xr(50,50,50);let Zl=new dr({color:mr(Li())});const gr=new It(Kl,Zl);gr.raycast=()=>{};const Jl=new It(Kl,Zl),Ql=new On(1e5,1e5);Ql.rotateX(-Math.PI/2);const Ui=new It(Ql,new Ga({visible:!1}));Ui.position.set(500,0,500);const yg="/assets/voxel_bg-CD5cke65.wasm",bg=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(r,"base64");else if(typeof atob=="function"){const a=atob(r);n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,i)}else{const r=await fetch(e),n=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const a=await r.arrayBuffer();t=await WebAssembly.instantiate(a,i)}}return t.instance.exports};let Y;function Eg(i){Y=i}let Wn=null;function Di(){return(Wn===null||Wn.byteLength===0)&&(Wn=new Uint8Array(Y.memory.buffer)),Wn}function hs(i,e){return i=i>>>0,Di().subarray(i/1,i/1+e)}function ir(i){const e=Y.__externref_table_alloc();return Y.__wbindgen_export_2.set(e,i),e}function $l(i,e){try{return i.apply(this,e)}catch(t){const r=ir(t);Y.__wbindgen_exn_store(r)}}function $t(i){return i==null}const Mg=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let ec=new Mg("utf-8",{ignoreBOM:!0,fatal:!0});ec.decode();function Zr(i,e){return i=i>>>0,ec.decode(Di().subarray(i,i+e))}let vt=0;const Sg=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let Xn=new Sg("utf-8");const Tg=typeof Xn.encodeInto=="function"?function(i,e){return Xn.encodeInto(i,e)}:function(i,e){const t=Xn.encode(i);return e.set(t),{read:i.length,written:t.length}};function Ii(i,e,t){if(t===void 0){const s=Xn.encode(i),l=e(s.length,1)>>>0;return Di().subarray(l,l+s.length).set(s),vt=s.length,l}let r=i.length,n=e(r,1)>>>0;const a=Di();let o=0;for(;o<r;o++){const s=i.charCodeAt(o);if(s>127)break;a[n+o]=s}if(o!==r){o!==0&&(i=i.slice(o)),n=t(n,r,r=o+i.length*3,1)>>>0;const s=Di().subarray(n+o,n+r),l=Tg(i,s);o+=l.written,n=t(n,r,o,1)>>>0}return vt=o,n}let Ni=null;function _r(){return(Ni===null||Ni.buffer.detached===!0||Ni.buffer.detached===void 0&&Ni.buffer!==Y.memory.buffer)&&(Ni=new DataView(Y.memory.buffer)),Ni}let jn=null;function tc(){return(jn===null||jn.byteLength===0)&&(jn=new Float32Array(Y.memory.buffer)),jn}function qn(i,e){return i=i>>>0,tc().subarray(i/4,i/4+e)}function ds(i){const e=typeof i;if(e=="number"||e=="boolean"||i==null)return`${i}`;if(e=="string")return`"${i}"`;if(e=="symbol"){const n=i.description;return n==null?"Symbol":`Symbol(${n})`}if(e=="function"){const n=i.name;return typeof n=="string"&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(i)){const n=i.length;let a="[";n>0&&(a+=ds(i[0]));for(let o=1;o<n;o++)a+=", "+ds(i[o]);return a+="]",a}const t=/\[object ([^\]]+)\]/.exec(toString.call(i));let r;if(t&&t.length>1)r=t[1];else return toString.call(i);if(r=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:r}function ps(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`)}function wg(i,e){const t=Ii(i,Y.__wbindgen_malloc,Y.__wbindgen_realloc),r=vt;ps(e,Zn);const n=Y.exportGeometryToZip(t,r,e.__wbg_ptr);var a=hs(n[0],n[1]).slice();return Y.__wbindgen_free(n[0],n[1]*1,1),a}function rc(i){const e=Y.__wbindgen_export_2.get(i);return Y.__externref_table_dealloc(i),e}function ic(i){let e,t;try{ps(i,Oi);const a=Y.saveToString(i.__wbg_ptr);var r=a[0],n=a[1];if(a[3])throw r=0,n=0,rc(a[2]);return e=r,t=n,Zr(r,n)}finally{Y.__wbindgen_free(e,t,1)}}function nc(i){const e=Ii(i,Y.__wbindgen_malloc,Y.__wbindgen_realloc),t=vt,r=Y.loadFromString(e,t);if(r[2])throw rc(r[1]);return Oi.__wrap(r[0])}function fs(i,e){const t=e(i.length*4,4)>>>0;return tc().set(i,t/4),vt=i.length,t}let Yn=null;function Ag(){return(Yn===null||Yn.byteLength===0)&&(Yn=new Int32Array(Y.memory.buffer)),Yn}function Rg(i,e){return i=i>>>0,Ag().subarray(i/4,i/4+e)}let Kn=null;function Cg(){return(Kn===null||Kn.byteLength===0)&&(Kn=new Uint32Array(Y.memory.buffer)),Kn}function Lg(i,e){const t=e(i.length*4,4)>>>0;return Cg().set(i,t/4),vt=i.length,t}function Pg(i,e){const t=e(i.length*1,1)>>>0;return Di().set(i,t/1),vt=i.length,t}function Ug(i,e){i=i>>>0;const t=_r(),r=[];for(let n=i;n<i+4*e;n+=4)r.push(Y.__wbindgen_export_2.get(t.getUint32(n,!0)));return Y.__externref_drop_slice(i,e),r}function Dg(){Y.setup()}typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_basicshader_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_camera_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_cube_free(i>>>0,1));const ac=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>Y.__wbg_geometry_free(i>>>0,1));class Zn{static __wrap(e){e=e>>>0;const t=Object.create(Zn.prototype);return t.__wbg_ptr=e,ac.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ac.unregister(this),e}free(){const e=this.__destroy_into_raw();Y.__wbg_geometry_free(e,0)}get vertices(){const e=Y.__wbg_get_geometry_vertices(this.__wbg_ptr);var t=qn(e[0],e[1]).slice();return Y.__wbindgen_free(e[0],e[1]*4,4),t}set vertices(e){const t=fs(e,Y.__wbindgen_malloc),r=vt;Y.__wbg_set_geometry_vertices(this.__wbg_ptr,t,r)}get indices(){const e=Y.__wbg_get_geometry_indices(this.__wbg_ptr);var t=Rg(e[0],e[1]).slice();return Y.__wbindgen_free(e[0],e[1]*4,4),t}set indices(e){const t=Lg(e,Y.__wbindgen_malloc),r=vt;Y.__wbg_set_geometry_indices(this.__wbg_ptr,t,r)}get normals(){const e=Y.__wbg_get_geometry_normals(this.__wbg_ptr);var t=qn(e[0],e[1]).slice();return Y.__wbindgen_free(e[0],e[1]*4,4),t}set normals(e){const t=fs(e,Y.__wbindgen_malloc),r=vt;Y.__wbg_set_geometry_normals(this.__wbg_ptr,t,r)}get uvs(){const e=Y.__wbg_get_geometry_uvs(this.__wbg_ptr);var t=qn(e[0],e[1]).slice();return Y.__wbindgen_free(e[0],e[1]*4,4),t}set uvs(e){const t=fs(e,Y.__wbindgen_malloc),r=vt;Y.__wbg_set_geometry_uvs(this.__wbg_ptr,t,r)}get color_data(){const e=Y.__wbg_get_geometry_color_data(this.__wbg_ptr);var t=hs(e[0],e[1]).slice();return Y.__wbindgen_free(e[0],e[1]*1,1),t}set color_data(e){const t=Pg(e,Y.__wbindgen_malloc),r=vt;Y.__wbg_set_geometry_color_data(this.__wbg_ptr,t,r)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_mesh_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_mouseevent_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_palette_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>Y.__wbg_scene_free(i>>>0,1));const sc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>Y.__wbg_voxel_free(i>>>0,1));class Ji{static __wrap(e){e=e>>>0;const t=Object.create(Ji.prototype);return t.__wbg_ptr=e,sc.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,sc.unregister(this),e}free(){const e=this.__destroy_into_raw();Y.__wbg_voxel_free(e,0)}get x(){return Y.__wbg_get_voxel_x(this.__wbg_ptr)>>>0}set x(e){Y.__wbg_set_voxel_x(this.__wbg_ptr,e)}get y(){return Y.__wbg_get_voxel_y(this.__wbg_ptr)>>>0}set y(e){Y.__wbg_set_voxel_y(this.__wbg_ptr,e)}get z(){return Y.__wbg_get_voxel_z(this.__wbg_ptr)>>>0}set z(e){Y.__wbg_set_voxel_z(this.__wbg_ptr,e)}}const ms=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>Y.__wbg_voxelmap_free(i>>>0,1));class Oi{static __wrap(e){e=e>>>0;const t=Object.create(Oi.prototype);return t.__wbg_ptr=e,ms.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ms.unregister(this),e}free(){const e=this.__destroy_into_raw();Y.__wbg_voxelmap_free(e,0)}get width(){return Y.__wbg_get_voxelmap_width(this.__wbg_ptr)>>>0}set width(e){Y.__wbg_set_voxelmap_width(this.__wbg_ptr,e)}get height(){return Y.__wbg_get_voxelmap_height(this.__wbg_ptr)>>>0}set height(e){Y.__wbg_set_voxelmap_height(this.__wbg_ptr,e)}get depth(){return Y.__wbg_get_voxelmap_depth(this.__wbg_ptr)>>>0}set depth(e){Y.__wbg_set_voxelmap_depth(this.__wbg_ptr,e)}get undoStatusCallback(){return Y.__wbg_get_voxelmap_undoStatusCallback(this.__wbg_ptr)}set undoStatusCallback(e){Y.__wbg_set_voxelmap_undoStatusCallback(this.__wbg_ptr,$t(e)?0:ir(e))}get removeVoxelCallback(){return Y.__wbg_get_voxelmap_removeVoxelCallback(this.__wbg_ptr)}set removeVoxelCallback(e){Y.__wbg_set_voxelmap_removeVoxelCallback(this.__wbg_ptr,$t(e)?0:ir(e))}get setVoxelCallback(){return Y.__wbg_get_voxelmap_setVoxelCallback(this.__wbg_ptr)}set setVoxelCallback(e){Y.__wbg_set_voxelmap_setVoxelCallback(this.__wbg_ptr,$t(e)?0:ir(e))}get paletteColorSwapCallback(){return Y.__wbg_get_voxelmap_paletteColorSwapCallback(this.__wbg_ptr)}set paletteColorSwapCallback(e){Y.__wbg_set_voxelmap_paletteColorSwapCallback(this.__wbg_ptr,$t(e)?0:ir(e))}constructor(e,t,r){const n=Y.voxelmap_create_voxel_map(e,t,r);return this.__wbg_ptr=n>>>0,ms.register(this,this.__wbg_ptr,this),this}getVoxels(){const e=Y.voxelmap_getVoxels(this.__wbg_ptr);var t=Ug(e[0],e[1]).slice();return Y.__wbindgen_free(e[0],e[1]*4,4),t}getVoxelColor(e){ps(e,Ji);var t=e.__destroy_into_raw();const r=Y.voxelmap_getVoxelColor(this.__wbg_ptr,t);return r===4294967297?void 0:r}changeColor(e,t){Y.voxelmap_changeColor(this.__wbg_ptr,e,t)}getVoxel(e,t,r){const n=Y.voxelmap_getVoxel(this.__wbg_ptr,e,t,r);return n===0?void 0:Ji.__wrap(n)}generate_mesh(e,t,r){const n=Y.voxelmap_generate_mesh(this.__wbg_ptr,e,t,r);return Zn.__wrap(n)}paintVoxel(e,t,r,n){Y.voxelmap_paintVoxel(this.__wbg_ptr,e,t,r,n)}paintFlood(e,t,r,n){Y.voxelmap_paintFlood(this.__wbg_ptr,e,t,r,n)}setVoxel(e,t,r,n){Y.voxelmap_setVoxel(this.__wbg_ptr,e,t,r,n)}removeVoxel(e,t,r){Y.voxelmap_removeVoxel(this.__wbg_ptr,e,t,r)}undo(){Y.voxelmap_undo(this.__wbg_ptr)}redo(){Y.voxelmap_redo(this.__wbg_ptr)}}function Ig(i,e,t){i.attachShader(e,t)}function Ng(i,e,t){i.bindBuffer(e>>>0,t)}function Og(i,e){i.bindVertexArray(e)}function Fg(i,e,t,r,n){i.bufferData(e>>>0,hs(t,r),n>>>0)}function Bg(){return $l(function(i,e,t,r){return i.call(e,t,r)},arguments)}function zg(){return $l(function(i,e,t,r,n){return i.call(e,t,r,n)},arguments)}function Hg(i,e,t,r,n){i.clearColor(e,t,r,n)}function kg(i,e){i.clear(e>>>0)}function Gg(i,e){i.compileShader(e)}function Vg(i){const e=i.createBuffer();return $t(e)?0:ir(e)}function Wg(i){const e=i.createProgram();return $t(e)?0:ir(e)}function Xg(i,e){const t=i.createShader(e>>>0);return $t(t)?0:ir(t)}function jg(i){const e=i.createVertexArray();return $t(e)?0:ir(e)}function qg(i,e,t,r,n){i.drawElements(e>>>0,t,r>>>0,n)}function Yg(i,e){i.enableVertexAttribArray(e>>>0)}function Kg(i,e){i.enable(e>>>0)}function Zg(i,e){let t,r;try{t=i,r=e,console.error(Zr(i,e))}finally{Y.__wbindgen_free(t,r,1)}}function Jg(i,e,t){const r=e.getProgramInfoLog(t);var n=$t(r)?0:Ii(r,Y.__wbindgen_malloc,Y.__wbindgen_realloc),a=vt;_r().setInt32(i+4,a,!0),_r().setInt32(i+0,n,!0)}function Qg(i,e,t){return i.getProgramParameter(e,t>>>0)}function $g(i,e,t){const r=e.getShaderInfoLog(t);var n=$t(r)?0:Ii(r,Y.__wbindgen_malloc,Y.__wbindgen_realloc),a=vt;_r().setInt32(i+4,a,!0),_r().setInt32(i+0,n,!0)}function e_(i,e,t){return i.getShaderParameter(e,t>>>0)}function t_(i,e,t,r){const n=i.getUniformLocation(e,Zr(t,r));return $t(n)?0:ir(n)}function r_(i,e){i.linkProgram(e)}function i_(i,e){console.log(Zr(i,e))}function n_(){return new Array}function a_(){return new Error}function s_(i,e){return i.push(e)}function o_(i,e,t,r){i.shaderSource(e,Zr(t,r))}function l_(i,e){const t=e.stack,r=Ii(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),n=vt;_r().setInt32(i+4,n,!0),_r().setInt32(i+0,r,!0)}function c_(i,e,t,r,n){i.uniform3f(e,t,r,n)}function u_(i,e,t,r,n){i.uniformMatrix4fv(e,t!==0,qn(r,n))}function h_(i,e){i.useProgram(e)}function d_(i,e,t,r,n,a,o){i.vertexAttribPointer(e>>>0,t,r>>>0,n!==0,a,o)}function p_(i){return Ji.__wrap(i)}function f_(i){const e=i;return typeof e=="boolean"?e?1:0:2}function m_(i,e){const t=ds(e),r=Ii(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),n=vt;_r().setInt32(i+4,n,!0),_r().setInt32(i+0,r,!0)}function g_(){const i=Y.__wbindgen_export_2,e=i.grow(4);i.set(0,void 0),i.set(e+0,void 0),i.set(e+1,null),i.set(e+2,!0),i.set(e+3,!1)}function __(i){return i}function v_(i,e){return Zr(i,e)}function x_(i,e){throw new Error(Zr(i,e))}URL=globalThis.URL;const le=await bg({"./voxel_bg.js":{__wbindgen_number_new:__,__wbg_voxel_new:p_,__wbindgen_boolean_get:f_,__wbg_log_eb255972e71130b4:i_,__wbindgen_string_new:v_,__wbg_new_8a6f238a6ece86ea:a_,__wbg_stack_0ed75d68575b0f3c:l_,__wbg_error_7534b8e9a36f1ab4:Zg,__wbg_bindVertexArray_67a807a1cd64976a:Og,__wbg_bufferData_049295bf6c0e35af:Fg,__wbg_createVertexArray_68ae270682fc14aa:jg,__wbg_uniformMatrix4fv_fa5c91b7cee9bfd5:u_,__wbg_attachShader_9b79a4896fee779d:Ig,__wbg_bindBuffer_e9412cc77f8130d6:Ng,__wbg_clear_c182acb53176ea8b:kg,__wbg_clearColor_7e5806f100e4cd7a:Hg,__wbg_compileShader_fab2df50ae89c5e1:Gg,__wbg_createBuffer_8692729b8ac9caaf:Vg,__wbg_createProgram_b8f69529220fb50b:Wg,__wbg_createShader_809bd3abe629ad7a:Xg,__wbg_drawElements_28e4f5037fe8c665:qg,__wbg_enable_a7767e03f7973ca8:Kg,__wbg_enableVertexAttribArray_211547224fc25327:Yg,__wbg_getProgramInfoLog_760af7d6753bc699:Jg,__wbg_getProgramParameter_8a6b724d42d813b3:Qg,__wbg_getShaderInfoLog_da62e75d61fbf8a8:$g,__wbg_getShaderParameter_f9c66f7ac8114c69:e_,__wbg_getUniformLocation_b9be4fbca76ab9a4:t_,__wbg_linkProgram_bcf6286423b25b5c:r_,__wbg_shaderSource_3bbf44221529c149:o_,__wbg_uniform3f_97385279cd44963d:c_,__wbg_useProgram_1a5a4be134db012a:h_,__wbg_vertexAttribPointer_1f280ac2d8994592:d_,__wbg_new_254fa9eac11932ae:n_,__wbg_push_6edad0df4b546b2c:s_,__wbg_call_3b770f0d6eb4720e:Bg,__wbg_call_9bd6f269d4835e33:zg,__wbindgen_debug_string:m_,__wbindgen_throw:x_,__wbindgen_init_externref_table:g_}},yg),y_=le.memory,b_=le.exportJpeg,E_=le.exportGeometryToZip,M_=le.exportPng,S_=le.__wbg_mouseevent_free,T_=le.mouseevent_create,w_=le.__wbg_scene_free,A_=le.scene_create,R_=le.scene_update,C_=le.scene_mouseMove,L_=le.scene_click,P_=le.__wbg_mesh_free,U_=le.__wbg_cube_free,D_=le.cube_create,I_=le.__wbg_basicshader_free,N_=le.basicshader_create,O_=le.__wbg_camera_free,F_=le.camera_create_camera,B_=le.draw,z_=le.scene_mouseUp,H_=le.scene_mouseDown,k_=le.saveToString,G_=le.loadFromString,V_=le.__wbg_geometry_free,W_=le.__wbg_get_geometry_vertices,X_=le.__wbg_set_geometry_vertices,j_=le.__wbg_get_geometry_indices,q_=le.__wbg_set_geometry_indices,Y_=le.__wbg_get_geometry_normals,K_=le.__wbg_set_geometry_normals,Z_=le.__wbg_get_geometry_uvs,J_=le.__wbg_set_geometry_uvs,Q_=le.__wbg_get_geometry_color_data,$_=le.__wbg_set_geometry_color_data,ev=le.__wbg_voxel_free,tv=le.__wbg_get_voxel_x,rv=le.__wbg_set_voxel_x,iv=le.__wbg_get_voxel_y,nv=le.__wbg_set_voxel_y,av=le.__wbg_get_voxel_z,sv=le.__wbg_set_voxel_z,ov=le.__wbg_palette_free,lv=le.__wbg_voxelmap_free,cv=le.__wbg_get_voxelmap_width,uv=le.__wbg_set_voxelmap_width,hv=le.__wbg_get_voxelmap_height,dv=le.__wbg_set_voxelmap_height,pv=le.__wbg_get_voxelmap_depth,fv=le.__wbg_set_voxelmap_depth,mv=le.__wbg_get_voxelmap_undoStatusCallback,gv=le.__wbg_set_voxelmap_undoStatusCallback,_v=le.__wbg_get_voxelmap_removeVoxelCallback,vv=le.__wbg_set_voxelmap_removeVoxelCallback,xv=le.__wbg_get_voxelmap_setVoxelCallback,yv=le.__wbg_set_voxelmap_setVoxelCallback,bv=le.__wbg_get_voxelmap_paletteColorSwapCallback,Ev=le.__wbg_set_voxelmap_paletteColorSwapCallback,Mv=le.voxelmap_create_voxel_map,Sv=le.voxelmap_getVoxels,Tv=le.voxelmap_getVoxelColor,wv=le.voxelmap_changeColor,Av=le.voxelmap_getVoxel,Rv=le.voxelmap_generate_mesh,Cv=le.voxelmap_paintVoxel,Lv=le.voxelmap_paintFlood,Pv=le.voxelmap_setVoxel,Uv=le.voxelmap_removeVoxel,Dv=le.voxelmap_undo,Iv=le.voxelmap_redo,Nv=le.setup,Ov=le.__wbindgen_exn_store,Fv=le.__externref_table_alloc,Bv=le.__wbindgen_export_2,zv=le.__wbindgen_free,Hv=le.__wbindgen_malloc,kv=le.__wbindgen_realloc,Gv=le.__externref_table_dealloc,Vv=le.__externref_drop_slice,oc=le.__wbindgen_start,Wv=Object.freeze(Object.defineProperty({__proto__:null,__externref_drop_slice:Vv,__externref_table_alloc:Fv,__externref_table_dealloc:Gv,__wbg_basicshader_free:I_,__wbg_camera_free:O_,__wbg_cube_free:U_,__wbg_geometry_free:V_,__wbg_get_geometry_color_data:Q_,__wbg_get_geometry_indices:j_,__wbg_get_geometry_normals:Y_,__wbg_get_geometry_uvs:Z_,__wbg_get_geometry_vertices:W_,__wbg_get_voxel_x:tv,__wbg_get_voxel_y:iv,__wbg_get_voxel_z:av,__wbg_get_voxelmap_depth:pv,__wbg_get_voxelmap_height:hv,__wbg_get_voxelmap_paletteColorSwapCallback:bv,__wbg_get_voxelmap_removeVoxelCallback:_v,__wbg_get_voxelmap_setVoxelCallback:xv,__wbg_get_voxelmap_undoStatusCallback:mv,__wbg_get_voxelmap_width:cv,__wbg_mesh_free:P_,__wbg_mouseevent_free:S_,__wbg_palette_free:ov,__wbg_scene_free:w_,__wbg_set_geometry_color_data:$_,__wbg_set_geometry_indices:q_,__wbg_set_geometry_normals:K_,__wbg_set_geometry_uvs:J_,__wbg_set_geometry_vertices:X_,__wbg_set_voxel_x:rv,__wbg_set_voxel_y:nv,__wbg_set_voxel_z:sv,__wbg_set_voxelmap_depth:fv,__wbg_set_voxelmap_height:dv,__wbg_set_voxelmap_paletteColorSwapCallback:Ev,__wbg_set_voxelmap_removeVoxelCallback:vv,__wbg_set_voxelmap_setVoxelCallback:yv,__wbg_set_voxelmap_undoStatusCallback:gv,__wbg_set_voxelmap_width:uv,__wbg_voxel_free:ev,__wbg_voxelmap_free:lv,__wbindgen_exn_store:Ov,__wbindgen_export_2:Bv,__wbindgen_free:zv,__wbindgen_malloc:Hv,__wbindgen_realloc:kv,__wbindgen_start:oc,basicshader_create:N_,camera_create_camera:F_,cube_create:D_,draw:B_,exportGeometryToZip:E_,exportJpeg:b_,exportPng:M_,loadFromString:G_,memory:y_,mouseevent_create:T_,saveToString:k_,scene_click:L_,scene_create:A_,scene_mouseDown:H_,scene_mouseMove:C_,scene_mouseUp:z_,scene_update:R_,setup:Nv,voxelmap_changeColor:wv,voxelmap_create_voxel_map:Mv,voxelmap_generate_mesh:Rv,voxelmap_getVoxel:Av,voxelmap_getVoxelColor:Tv,voxelmap_getVoxels:Sv,voxelmap_paintFlood:Lv,voxelmap_paintVoxel:Cv,voxelmap_redo:Iv,voxelmap_removeVoxel:Uv,voxelmap_setVoxel:Pv,voxelmap_undo:Dv},Symbol.toStringTag,{value:"Module"}));Eg(Wv),oc();class Xv{constructor(e){Nr(this,"value");Nr(this,"listeners",[]);this.value=e}listen(e){this.listeners.push(e);const t=this.listeners;return()=>{let r=t.indexOf(e);r!=-1&&t.splice(r,1)}}setValue(e){this.value=e,this.listeners.forEach(t=>{t(e)})}}const jv=document.getElementById("paint"),qv=document.getElementById("place"),Yv=document.getElementById("delete"),Kv=document.getElementById("eyedropper");var er=(i=>(i[i.Place=0]="Place",i[i.Delete=1]="Delete",i[i.Paint=2]="Paint",i[i.Eyedropper=3]="Eyedropper",i))(er||{});let Ur=new Xv(0);jv.addEventListener("click",()=>{Ur.setValue(2)}),qv.addEventListener("click",()=>{Ur.setValue(0)}),Yv.addEventListener("click",()=>{Ur.setValue(1)}),Kv.addEventListener("click",()=>{Ur.setValue(3)});let lc=document.getElementById("toolLabel");var Jn;(i=>{i.autosave="voxel__autosave"})(Jn||(Jn={}));const Lt=1e7,Qn=50;let rt=Zv();function Zv(){const i=localStorage.getItem(Jn.autosave);if(i){console.log("Loaded autosave!");const e=nc(i);return gs(e),e}else return new Oi(Lt,Lt,Lt)}function Jv(){let i=new Oi(Lt,Lt,Lt);gs(i),rt=i}function Qv(i){gs(i),rt=i}function gs(i){Pr.clear();const e=i.getVoxels();for(const t of e){const r=t.x,n=t.y,a=t.z,o=new P(r,n,a).subScalar(Lt/2).multiplyScalar(Qn).addScalar(25),s=i.getVoxelColor(t),l=Jl.clone(!0);l.visible=!0;let c=mr(Pi(s));const u=new dr({color:c});l.material=u,l.position.copy(o),Pr.add(l)}}const $v="modulepreload",e0=function(i){return"/"+i},cc={},xt=function(i,e,t){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(s=>{if(s=e0(s),s in cc)return;cc[s]=!0;const l=s.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":$v,l||(u.as="script"),u.crossOrigin="",u.href=s,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return i().catch(n)})},t0={accepts:[]},uc=globalThis.showOpenFilePicker;async function r0(i={}){const e={...t0,...i};if(uc&&!i._preferPolyfill)return uc(e);const t=document.createElement("input");t.type="file",t.multiple=e.multiple,t.accept=(e.accepts||[]).map(n=>[...(n.extensions||[]).map(a=>"."+a),...n.mimeTypes||[]]).flat().join(","),Object.assign(t.style,{position:"fixed",top:"-100000px",left:"-100000px"}),document.body.appendChild(t);const r=xt(()=>Promise.resolve().then(()=>s0),void 0);return await new Promise(n=>{t.addEventListener("change",n,{once:!0}),t.click()}),t.remove(),r.then(n=>n.getFileHandlesFromInput(t))}const hc=globalThis.showSaveFilePicker;async function dc(i={}){if(hc&&!i._preferPolyfill)return hc(i);i._name&&(console.warn("deprecated _name, spec now have `suggestedName`"),i.suggestedName=i._name);const{FileSystemFileHandle:e}=await xt(async()=>{const{FileSystemFileHandle:r}=await Promise.resolve().then(()=>Fi);return{FileSystemFileHandle:r}},void 0),{FileHandle:t}=await xt(async()=>{const{FileHandle:r}=await import("./downloader-5b9B6rCo.js").then(async n=>(await n.__tla,n));return{FileHandle:r}},[]);return new e(new t(i.suggestedName))}globalThis.DataTransferItem&&!DataTransferItem.prototype.getAsFileSystemHandle&&(DataTransferItem.prototype.getAsFileSystemHandle=async function(){const i=this.webkitGetAsEntry(),[{FileHandle:e,FolderHandle:t},{FileSystemDirectoryHandle:r},{FileSystemFileHandle:n}]=await Promise.all([xt(()=>import("./sandbox-ClGys_jp.js").then(async a=>(await a.__tla,a)),[]),xt(()=>Promise.resolve().then(()=>vs),void 0),xt(()=>Promise.resolve().then(()=>Fi),void 0)]);return i.isFile?new n(new e(i,!1)):new r(new t(i,!1))});let pc;Rs={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File},{WritableStream:pc}=Rs;const Es=class Es extends pc{constructor(t){super(t);Cc(this,na);Lc(this,na,t),Object.setPrototypeOf(this,Es.prototype),this._closed=!1}async close(){this._closed=!0;const t=this.getWriter(),r=t.close();return t.releaseLock(),r}seek(t){return this.write({type:"seek",position:t})}truncate(t){return this.write({type:"truncate",size:t})}write(t){if(this._closed)return Promise.reject(new TypeError("Cannot write to a CLOSED writable stream"));const r=this.getWriter(),n=r.write(t);return r.releaseLock(),n}};na=new WeakMap;let Jr=Es;Object.defineProperty(Jr.prototype,Symbol.toStringTag,{value:"FileSystemWritableFileStream",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(Jr.prototype,{close:{enumerable:!0},seek:{enumerable:!0},truncate:{enumerable:!0},write:{enumerable:!0}}),globalThis.FileSystemFileHandle&&!globalThis.FileSystemFileHandle.prototype.createWritable&&!globalThis.FileSystemWritableFileStream&&(globalThis.FileSystemWritableFileStream=Jr);const Dr=Symbol("adapter");_c=Dr;class _s{constructor(e){Nr(this,_c);Nr(this,"name");Nr(this,"kind");this.kind=e.kind,this.name=e.name,this[Dr]=e}async queryPermission(e={}){const{mode:t="read"}=e,r=this[Dr];if(r.queryPermission)return r.queryPermission({mode:t});if(t==="read")return"granted";if(t==="readwrite")return r.writable?"granted":"denied";throw new TypeError(`Mode ${t} must be 'read' or 'readwrite'`)}async requestPermission({mode:e="read"}={}){const t=this[Dr];if(t.requestPermission)return t.requestPermission({mode:e});if(e==="read")return"granted";if(e==="readwrite")return t.writable?"granted":"denied";throw new TypeError(`Mode ${e} must be 'read' or 'readwrite'`)}async remove(e={}){await this[Dr].remove(e)}async isSameEntry(e){return this===e?!0:!e||typeof e!="object"||this.kind!==e.kind||!e[Dr]?!1:this[Dr].isSameEntry(e[Dr])}}Object.defineProperty(_s.prototype,Symbol.toStringTag,{value:"FileSystemHandle",writable:!1,enumerable:!1,configurable:!0}),globalThis.FileSystemHandle&&((vc=globalThis.FileSystemHandle.prototype).queryPermission??(vc.queryPermission=function(i){return"granted"}));let fc;tn={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:i=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${i}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},fc={writable:globalThis.WritableStream};async function i0(i){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");const[e,t,r]=await Promise.all([xt(()=>import("./memory-Dc56_Y4B.js").then(async a=>(await a.__tla,a)),[]),xt(()=>import("./sandbox-ClGys_jp.js").then(async a=>(await a.__tla,a)),[]),xt(()=>Promise.resolve().then(()=>vs),void 0)]),n=new e.FolderHandle("",!1);return n._entries=i.map(a=>a.isFile?new t.FileHandle(a,!1):new t.FolderHandle(a,!1)),new r.FileSystemDirectoryHandle(n)}async function n0(i){const{FolderHandle:e,FileHandle:t}=await xt(async()=>{const{FolderHandle:s,FileHandle:l}=await import("./memory-Dc56_Y4B.js").then(async c=>(await c.__tla,c));return{FolderHandle:s,FileHandle:l}},[]),{FileSystemDirectoryHandle:r}=await xt(async()=>{const{FileSystemDirectoryHandle:s}=await Promise.resolve().then(()=>vs);return{FileSystemDirectoryHandle:s}},void 0),n=Array.from(i.files),a=n[0].webkitRelativePath.split("/",1)[0],o=new e(a,!1);return n.forEach(s=>{const l=s.webkitRelativePath.split("/");l.shift();const c=l.pop(),u=l.reduce((f,d)=>(f._entries[d]||(f._entries[d]=new e(d,!1)),f._entries[d]),o);u._entries[c]=new t(s.name,s,!1)}),new r(o)}async function a0(i){const{FileHandle:e}=await xt(async()=>{const{FileHandle:r}=await import("./memory-Dc56_Y4B.js").then(async n=>(await n.__tla,n));return{FileHandle:r}},[]),{FileSystemFileHandle:t}=await xt(async()=>{const{FileSystemFileHandle:r}=await Promise.resolve().then(()=>Fi);return{FileSystemFileHandle:r}},void 0);return Array.from(i.files).map(r=>new t(new e(r.name,r,!1)))}const s0=Object.freeze(Object.defineProperty({__proto__:null,config:fc,errors:tn,fromDataTransfer:i0,getDirHandlesFromInput:n0,getFileHandlesFromInput:a0},Symbol.toStringTag,{value:"Module"})),{GONE:o0,MOD_ERR:l0}=tn,Ir=Symbol("adapter");let $n=class oa extends _s{constructor(t){super(t);Nr(this,xc);this[Ir]=t}async getDirectoryHandle(t,r={}){if(t==="")throw new TypeError("Name can't be an empty string.");if(t==="."||t===".."||t.includes("/"))throw new TypeError("Name contains invalid characters.");r.create=!!r.create;const n=await this[Ir].getDirectoryHandle(t,r);return new oa(n)}async*entries(){const{FileSystemFileHandle:t}=await xt(async()=>{const{FileSystemFileHandle:r}=await Promise.resolve().then(()=>Fi);return{FileSystemFileHandle:r}},void 0);for await(const[r,n]of this[Ir].entries())yield[n.name,n.kind==="file"?new t(n):new oa(n)]}async*getEntries(){const{FileSystemFileHandle:t}=await xt(async()=>{const{FileSystemFileHandle:r}=await Promise.resolve().then(()=>Fi);return{FileSystemFileHandle:r}},void 0);console.warn("deprecated, use .entries() instead");for await(let r of this[Ir].entries())yield r.kind==="file"?new t(r):new oa(r)}async getFileHandle(t,r={}){const{FileSystemFileHandle:n}=await xt(async()=>{const{FileSystemFileHandle:o}=await Promise.resolve().then(()=>Fi);return{FileSystemFileHandle:o}},void 0);if(t==="")throw new TypeError("Name can't be an empty string.");if(t==="."||t===".."||t.includes("/"))throw new TypeError("Name contains invalid characters.");r.create=!!r.create;const a=await this[Ir].getFileHandle(t,r);return new n(a)}async removeEntry(t,r={}){if(t==="")throw new TypeError("Name can't be an empty string.");if(t==="."||t===".."||t.includes("/"))throw new TypeError("Name contains invalid characters.");return r.recursive=!!r.recursive,this[Ir].removeEntry(t,r)}async resolve(t){if(await t.isSameEntry(this))return[];const r=[{handle:this,path:[]}];for(;r.length;){let{handle:n,path:a}=r.pop();for await(const o of n.values()){if(await o.isSameEntry(t))return[...a,o.name];o.kind==="directory"&&r.push({handle:o,path:[...a,o.name]})}}return null}async*keys(){for await(const[t]of this[Ir].entries())yield t}async*values(){for await(const[t,r]of this)yield r}[(xc=Ir,Symbol.asyncIterator)](){return this.entries()}};if(Object.defineProperty($n.prototype,Symbol.toStringTag,{value:"FileSystemDirectoryHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties($n.prototype,{getDirectoryHandle:{enumerable:!0},entries:{enumerable:!0},getFileHandle:{enumerable:!0},removeEntry:{enumerable:!0}}),globalThis.FileSystemDirectoryHandle){const i=globalThis.FileSystemDirectoryHandle.prototype;i.resolve=async function(n){if(await n.isSameEntry(this))return[];const a=[{handle:this,path:[]}];for(;a.length;){let{handle:o,path:s}=a.pop();for await(const l of o.values()){if(await l.isSameEntry(n))return[...s,l.name];l.kind==="directory"&&a.push({handle:l,path:[...s,l.name]})}}return null};async function e(n){if(await(await navigator.storage.getDirectory()).resolve(n)===null)throw new DOMException(...o0)}const t=i.entries;i.entries=async function*(){await e(this),yield*t.call(this)},i[Symbol.asyncIterator]=async function*(){yield*this.entries()};const r=i.removeEntry;i.removeEntry=async function(n,a={}){return r.call(this,n,a).catch(async o=>{throw o instanceof DOMException&&o.name==="UnknownError"&&!a.recursive&&!(await t.call(this).next()).done?new DOMException(...l0):o})}}const vs=Object.freeze(Object.defineProperty({__proto__:null,FileSystemDirectoryHandle:$n,default:$n},Symbol.toStringTag,{value:"Module"})),{INVALID:c0,SYNTAX:xs,GONE:u0}=tn,ea=Symbol("adapter");class ta extends(bc=_s,yc=ea,bc){constructor(t){super(t);Nr(this,yc);this[ea]=t}async createWritable(t={}){return new Jr(await this[ea].createWritable(t))}async getFile(){return this[ea].getFile()}}if(Object.defineProperty(ta.prototype,Symbol.toStringTag,{value:"FileSystemFileHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(ta.prototype,{createWritable:{enumerable:!0},getFile:{enumerable:!0}}),globalThis.FileSystemFileHandle&&!globalThis.FileSystemFileHandle.prototype.createWritable){const i=new WeakMap;let e;const t=()=>{let n,a;onmessage=async o=>{const s=o.ports[0],l=o.data;switch(l.type){case"open":const c=l.name;let u=await navigator.storage.getDirectory();for(const f of l.path)u=await u.getDirectoryHandle(f);n=await u.getFileHandle(c),a=await n.createSyncAccessHandle();break;case"write":a.write(l.data,{at:l.position}),a.flush();break;case"truncate":a.truncate(l.size);break;case"abort":case"close":a.close();break}s.postMessage(0)}};globalThis.FileSystemFileHandle.prototype.createWritable=async function(n){if(!e){const p=`(${t.toString()})()`,g=new Blob([p],{type:"text/javascript"});e=URL.createObjectURL(g)}const a=new Worker(e,{type:"module"});let o=0;const s=new TextEncoder;let l=await this.getFile().then(p=>p.size);const c=p=>new Promise((g,v)=>{const m=new MessageChannel;m.port1.onmessage=h=>{h.data instanceof Error?v(h.data):g(h.data),m.port1.close(),m.port2.close(),m.port1.onmessage=null},a.postMessage(p,[m.port2])}),u=await navigator.storage.getDirectory(),f=await i.get(this),d=await u.resolve(f);if(d===null)throw new DOMException(...u0);return await c({type:"open",path:d,name:this.name}),(n==null?void 0:n.keepExistingData)===!1&&(await c({type:"truncate",size:0}),l=0),new Jr({start:p=>{},async write(p){if((p==null?void 0:p.constructor)===Object?p={...p}:p={type:"write",data:p,position:o},p.type==="write"){if(!("data"in p))throw await c({type:"close"}),new DOMException(...xs("write requires a data argument"));if(p.position??(p.position=o),typeof p.data=="string")p.data=s.encode(p.data);else if(p.data instanceof ArrayBuffer)p.data=new Uint8Array(p.data);else if(!(p.data instanceof Uint8Array)&&ArrayBuffer.isView(p.data))p.data=new Uint8Array(p.data.buffer,p.data.byteOffset,p.data.byteLength);else if(!(p.data instanceof Uint8Array)){const g=await new Response(p.data).arrayBuffer();p.data=new Uint8Array(g)}Number.isInteger(p.position)&&p.position>=0&&(o=p.position),o+=p.data.byteLength,l+=p.data.byteLength}else if(p.type==="seek")if(Number.isInteger(p.position)&&p.position>=0){if(l<p.position)throw new DOMException(...c0);console.log("seeking",p),o=p.position;return}else throw await c({type:"close"}),new DOMException(...xs("seek requires a position argument"));else if(p.type==="truncate")if(Number.isInteger(p.size)&&p.size>=0)l=p.size,o>l&&(o=l);else throw await c({type:"close"}),new DOMException(...xs("truncate requires a size argument"));await c(p)},async close(){await c({type:"close"}),a.terminate()},async abort(p){await c({type:"abort",reason:p}),a.terminate()}})};const r=FileSystemDirectoryHandle.prototype.getFileHandle;FileSystemDirectoryHandle.prototype.getFileHandle=async function(...n){const a=await r.call(this,...n);return i.set(a,this),a}}const Fi=Object.freeze(Object.defineProperty({__proto__:null,FileSystemFileHandle:ta,default:ta},Symbol.toStringTag,{value:"Module"})),h0=document.getElementById("newFile"),d0=document.getElementById("loadFile"),p0=document.getElementById("saveFile"),f0=document.getElementById("exportFile");let Qi="unnamed",m0=5*60*1e3;setInterval(()=>{console.log("Autosaving...");const i=ic(rt);localStorage.setItem(Jn.autosave,i),console.log("Autosaving complete!")},m0),h0.addEventListener("click",()=>{Jv()}),d0.addEventListener("click",async()=>{const[i]=await r0({accepts:[{accept:{"application/json":[".json"]}}],multiple:!1});Qi=i.name.split(".")[0];const e=await(await i.getFile()).text(),t=nc(e);Qv(t)}),p0.addEventListener("click",async()=>{const i=await dc({suggestedName:`${Qi}.json`,types:[{accept:{"application/json":[".json"]}}]});Qi=i.name.split(".")[0];const e=ic(rt),t=await i.createWritable();await t.write(e),await t.close()}),f0.addEventListener("click",async()=>{const i=rt.generate_mesh(1,1024,50),e=wg(Qi,i),t=await(await dc({suggestedName:`${Qi}.zip`,types:[{accept:{"application/zip":[".zip"]}}]})).createWritable();await t.write(e),await t.close()});const ys=document.getElementById("undoButton"),bs=document.getElementById("redoButton");ys.disabled=!0,bs.disabled=!0,rt.undoStatusCallback=(i,e)=>{ys.disabled=i,bs.disabled=e},ys.addEventListener("click",()=>{rt.undo()}),bs.addEventListener("click",()=>{rt.redo()});const g0=document.getElementById("swap");g0.onclick=()=>{rt.changeColor(12345678,0)},Dg();let ra=new tg,ia=new be;lc.innerText=`Current Tool: ${er[Ur.value]}`,Ur.listen(i=>{lc.innerText=`Current Tool: ${er[i]}`});function mc(i){const e=Ci.getBoundingClientRect();return{x:i.clientX-e.left,y:i.clientY-e.top}}function _0(){const i=new Zm(16777215,16777215,3);i.color.setRGB(.6,.6,.6),i.position.set(0,50,0),pr.add(i);const e=new $m(new Ae(1,1,1),6);e.position.set(-1,1.75,1),e.position.multiplyScalar(30),e.lookAt(new P(0,0,0)),pr.add(e),pr.add(gg),pr.add(us),pr.background=new Ae(.95,.95,.95),pr.add(gr),Ki.add(Ui),document.addEventListener("pointermove",x0),document.addEventListener("pointerdown",y0),window.addEventListener("resize",v0),jl()}function v0(){fr.aspect=window.innerWidth/window.innerHeight,fr.updateProjectionMatrix(),Zi.setSize(window.innerWidth,window.innerHeight),Zi.setPixelRatio(Math.min(window.devicePixelRatio,2)),Vn.setSize(window.innerWidth,window.innerHeight)}function gc(i,e,t=1e-4){return Math.abs(i.x-e.x)<t&&Math.abs(i.y-e.y)<t&&Math.abs(i.z-e.z)<t}rt.removeVoxelCallback=(i,e,t)=>{let r=new P(i,e,t).multiplyScalar(Qn).addScalar(Lt/2).addScalar(25);for(const n of Pr.children)if(gc(n.position,r)){Pr.remove(n);break}},rt.setVoxelCallback=(i,e)=>{let[t,r,n]=i,a=new P(t,r,n).subScalar(Lt/2).multiplyScalar(Qn).addScalar(25);for(const c of Pr.children)if(gc(c.position,a)){let u=mr(Pi(e));const f=new dr({color:u});let d=c;d.material=f;return}const o=Jl.clone(!0);o.visible=!0;let s=mr(Pi(e));const l=new dr({color:s});o.material=l,o.position.copy(a),Pr.add(o)},rt.paletteColorSwapCallback=(i,e)=>{let t=Pi(i),r=Pi(e);for(const n of Pr.children)if(n instanceof It){const a=n.material,o=vg(a.color);_g(r,o)&&(a.color=mr(t))}};let $i=null;function x0(i){var r;if(i.target!==Ci)return;let e=mc(i);ia.set(e.x/window.innerWidth*2-1,-(e.y/window.innerHeight)*2+1),ra.setFromCamera(ia,fr);const t=ra.intersectObjects(Ki.children,!0);if(Kr.selectedObjects=[],$i){let n=$i.position.clone().divideScalar(50).floor();n.addScalar(Lt/2);let a=rt.getVoxel(n.x,n.y,n.z);if(a){const o=rt.getVoxelColor(a);let s=mr(Pi(o));const l=new dr({color:s});$i.material=l}$i=null}if(t.length>0){const n=t[0];switch(Ur.value){case er.Place:if(gr.material=new dr({color:mr(Li())}),gr.position.copy(n.point).add((r=n.face)==null?void 0:r.normal),gr.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25),gr.position.y<0){gr.visible=!1;break}gr.visible=!0;break;case er.Paint:{let a=n.object;if(a!==Ui){const o=new dr({color:mr(Li())});a.material=o}break}case er.Delete:{let a=n.object;if(a!==Ui){const o=new dr({color:16711680});a.material=o}break}case er.Eyedropper:{let a=n.object;a!==Ui&&(Kr.selectedObjects=[a]);break}}n.object!==Ui&&($i=n.object)}else gr.visible=!1}function y0(i){var r;if(i.button!==0||i.target!==Ci)return;let e=mc(i);ia.set(e.x/window.innerWidth*2-1,-(e.y/window.innerHeight)*2+1),ra.setFromCamera(ia,fr);const t=ra.intersectObjects(Ki.children,!0);if(t.length>0){const n=t[0];switch(Ur.value){case er.Place:let a=n.point.add((r=n.face)==null?void 0:r.normal);if(a.divideScalar(Qn).floor(),a.y<0)break;a.addScalar(Lt/2),rt.setVoxel(a.x,a.y,a.z,Yl(Li()));break;case er.Paint:{const o=n.object;let s=o.position.clone().divideScalar(50).floor();if(s.addScalar(Lt/2),rt.getVoxel(s.x,s.y,s.z)){rt.paintVoxel(s.x,s.y,s.z,Yl(Li()));const l=new dr({color:mr(Li())});o.material=l}break}case er.Delete:{const o=n.object;let s=o.position.clone().divideScalar(50).floor();s.addScalar(Lt/2),rt.getVoxel(s.x,s.y,s.z)&&(o.removeFromParent(),rt.removeVoxel(s.x,s.y,s.z));break}case er.Eyedropper:{let o=n.object.position.clone().divideScalar(50).floor();o.addScalar(Lt/2);let s=rt.getVoxel(o.x,o.y,o.z);if(s){let l=rt.getVoxelColor(s);xg(l)}break}}}}_0()})();export{C0 as __tla,Rs as c,tn as e};
