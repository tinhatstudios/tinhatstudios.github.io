let Ms,Zi,t0=(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const ea="160",Zr={ROTATE:0,DOLLY:1,PAN:2},Jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vc=0,Ss=1,xc=2,Es=1,bc=2,rr=3,gr=0,Tt=1,kt=2,Gt=0,Qr=1,ta=2,Ts=3,ws=4,yc=5,Ur=100,Mc=101,Sc=102,As=103,Rs=104,Ec=200,Tc=201,wc=202,Ac=203,ra=204,ia=205,Rc=206,Cc=207,Lc=208,Pc=209,Uc=210,Dc=211,Ic=212,Nc=213,Oc=214,Fc=0,Bc=1,zc=2,Ji=3,Hc=4,kc=5,Gc=6,Vc=7,na=0,Wc=1,Xc=2,_r=0,jc=1,qc=2,Yc=3,Kc=4,Zc=5,Jc=6,Cs=300,$r=301,ei=302,aa=303,sa=304,Qi=306,oa=1e3,Vt=1001,la=1002,xt=1003,Ls=1004,ca=1005,Ut=1006,Qc=1007,Ii=1008,vr=1009,$c=1010,eu=1011,ua=1012,Ps=1013,xr=1014,br=1015,Dt=1016,Us=1017,Ds=1018,Dr=1020,tu=1021,Wt=1023,ru=1024,iu=1025,Ir=1026,ti=1027,nu=1028,Is=1029,au=1030,Ns=1031,Os=1033,ha=33776,da=33777,pa=33778,fa=33779,Fs=35840,Bs=35841,zs=35842,Hs=35843,ks=36196,Gs=37492,Vs=37496,Ws=37808,Xs=37809,js=37810,qs=37811,Ys=37812,Ks=37813,Zs=37814,Js=37815,Qs=37816,$s=37817,eo=37818,to=37819,ro=37820,io=37821,ma=36492,no=36494,ao=36495,su=36283,so=36284,oo=36285,lo=36286,co=3e3,Nr=3001,ou=3200,uo=3201,ho=0,lu=1,It="",ot="srgb",Nt="srgb-linear",ga="display-p3",$i="display-p3-linear",en="linear",Qe="srgb",tn="rec709",rn="p3",ri=7680,po=519,cu=512,uu=513,hu=514,fo=515,du=516,pu=517,fu=518,mu=519,mo=35044,go="300 es",_a=1035,ir=2e3,nn=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],an=Math.PI/180,va=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function gu(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function _o(i){return(i&i-1)===0&&i!==0}function ba(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _u={DEG2RAD:an};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,r,n,a,o,s,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c)}set(e,t,r,n,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],u=r[4],m=r[7],d=r[2],p=r[5],g=r[8],v=n[0],f=n[3],h=n[6],T=n[1],x=n[4],C=n[7],D=n[2],R=n[5],A=n[8];return a[0]=o*v+s*T+l*D,a[3]=o*f+s*x+l*R,a[6]=o*h+s*C+l*A,a[1]=c*v+u*T+m*D,a[4]=c*f+u*x+m*R,a[7]=c*h+u*C+m*A,a[2]=d*v+p*T+g*D,a[5]=d*f+p*x+g*R,a[8]=d*h+p*C+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-r*a*u+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],m=u*o-s*c,d=s*l-u*a,p=c*a-o*l,g=t*m+r*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=m*v,e[1]=(n*c-u*r)*v,e[2]=(s*r-n*o)*v,e[3]=d*v,e[4]=(u*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=p*v,e[7]=(r*l-c*t)*v,e[8]=(o*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Ge;function vo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=sn("canvas");return i.style.display="block",i}const xo={};function Fi(i){i in xo||(xo[i]=!0,console.warn(i))}const bo=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),on={[Nt]:{transfer:en,primaries:tn,toReference:i=>i,fromReference:i=>i},[ot]:{transfer:Qe,primaries:tn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$i]:{transfer:en,primaries:rn,toReference:i=>i.applyMatrix3(yo),fromReference:i=>i.applyMatrix3(bo)},[ga]:{transfer:Qe,primaries:rn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(yo),fromReference:i=>i.applyMatrix3(bo).convertLinearToSRGB()}},xu=new Set([Nt,$i]),Ze={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=on[e].toReference,n=on[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return on[i].primaries},getTransfer:function(i){return i===It?en:on[i].transfer}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class Mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=sn("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ii(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ii(t[r]/255)*255):t[r]=ii(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bu=0;class So{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Sa(n[o].image)):a.push(Sa(n[o]))}else a=Sa(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class Rt extends Or{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,r=Vt,n=Vt,a=Ut,o=Ii,s=Wt,l=vr,c=Rt.DEFAULT_ANISOTROPY,u=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ni(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Nr?ot:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Nr:co}set encoding(e){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?ot:It}}Rt.DEFAULT_IMAGE=null,Rt.DEFAULT_MAPPING=Cs,Rt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,r=0,n=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],u=o[1],m=o[5],d=o[9],p=o[2],g=o[6],v=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(s+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(s+1)/2,T=(m+1)/2,x=(v+1)/2,C=(l+u)/4,D=(c+p)/4,R=(d+g)/4;return h>T&&h>x?h<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(h),n=C/r,a=D/r):T>x?T<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(T),r=C/n,a=R/n):x<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(x),r=D/a,n=R/a),this.set(r,n,a,t),this}let f=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(g-d)/f,this.y=(c-p)/f,this.z=(u-l)/f,this.w=Math.acos((s+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends Or{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Nr?ot:It),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Rt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new So(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yt extends Mu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Eo extends Rt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=xt,this.minFilter=xt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Su extends Rt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=xt,this.minFilter=xt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],u=r[n+2],m=r[n+3];const d=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(m!==v||l!==d||c!==p||u!==g){let f=1-s;const h=l*d+c*p+u*g+m*v,T=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,h*T);f=Math.sin(f*R)/D,s=Math.sin(s*R)/D}const C=s*T;if(l=l*f+d*C,c=c*f+p*C,u=u*f+g*C,m=m*f+v*C,f===1-s){const D=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=D,c*=D,u*=D,m*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],u=r[n+3],m=a[o],d=a[o+1],p=a[o+2],g=a[o+3];return e[t]=s*g+u*m+l*p-c*d,e[t+1]=l*g+u*d+c*m-s*p,e[t+2]=c*g+u*p+s*d-l*m,e[t+3]=u*g-s*m-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(n/2),m=s(a/2),d=l(r/2),p=l(n/2),g=l(a/2);switch(o){case"XYZ":this._x=d*u*m+c*p*g,this._y=c*p*m-d*u*g,this._z=c*u*g+d*p*m,this._w=c*u*m-d*p*g;break;case"YXZ":this._x=d*u*m+c*p*g,this._y=c*p*m-d*u*g,this._z=c*u*g-d*p*m,this._w=c*u*m+d*p*g;break;case"ZXY":this._x=d*u*m-c*p*g,this._y=c*p*m+d*u*g,this._z=c*u*g+d*p*m,this._w=c*u*m-d*p*g;break;case"ZYX":this._x=d*u*m-c*p*g,this._y=c*p*m+d*u*g,this._z=c*u*g-d*p*m,this._w=c*u*m+d*p*g;break;case"YZX":this._x=d*u*m+c*p*g,this._y=c*p*m+d*u*g,this._z=c*u*g-d*p*m,this._w=c*u*m-d*p*g;break;case"XZY":this._x=d*u*m-c*p*g,this._y=c*p*m-d*u*g,this._z=c*u*g+d*p*m,this._w=c*u*m+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],m=t[10],d=r+s+m;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-n)*p}else if(r>s&&r>m){const p=2*Math.sqrt(1+r-s-m);this._w=(u-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(a+c)/p}else if(s>m){const p=2*Math.sqrt(1+s-r-m);this._w=(a-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+m-r-s);this._w=(o-n)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*s+n*c-a*l,this._y=n*u+o*l+a*s-r*c,this._z=a*u+o*c+r*l-n*s,this._w=o*u-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*r+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),m=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*m+this._w*d,this._x=r*m+this._x*d,this._y=n*m+this._y*d,this._z=a*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,r=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),u=2*(s*t-a*n),m=2*(a*r-o*t);return this.x=t+l*c+o*m-s*u,this.y=r+l*u+s*c-a*m,this.z=n+l*m+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new P,To=new Fr;class Bi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(a,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ln.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ln.copy(r.boundingBox)),ln.applyMatrix4(e.matrixWorld),this.union(ln)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),cn.subVectors(this.max,zi),ai.subVectors(e.a,zi),si.subVectors(e.b,zi),oi.subVectors(e.c,zi),yr.subVectors(si,ai),Mr.subVectors(oi,si),Br.subVectors(ai,oi);let t=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-Br.z,Br.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,Br.z,0,-Br.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-Br.y,Br.x,0];return!Ta(t,ai,si,oi,cn)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,ai,si,oi,cn))?!1:(un.crossVectors(yr,Mr),t=[un.x,un.y,un.z],Ta(t,ai,si,oi,cn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,ln=new Bi,ai=new P,si=new P,oi=new P,yr=new P,Mr=new P,Br=new P,zi=new P,cn=new P,un=new P,zr=new P;function Ta(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){zr.fromArray(i,a);const s=n.x*Math.abs(zr.x)+n.y*Math.abs(zr.y)+n.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=r.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Eu=new Bi,Hi=new P,wa=new P;class hn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Eu.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Hi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(wa)),this.expandByPoint(Hi.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ar=new P,Aa=new P,dn=new P,Sr=new P,Ra=new P,pn=new P,Ca=new P;class fn{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Aa.copy(e).add(t).multiplyScalar(.5),dn.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(Aa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(dn),s=Sr.dot(this.direction),l=-Sr.dot(dn),c=Sr.lengthSq(),u=Math.abs(1-o*o);let m,d,p,g;if(u>0)if(m=o*l-s,d=o*s-l,g=a*u,m>=0)if(d>=-g)if(d<=g){const v=1/u;m*=v,d*=v,p=m*(m+o*d+2*s)+d*(o*m+d+2*l)+c}else d=a,m=Math.max(0,-(o*d+s)),p=-m*m+d*(d+2*l)+c;else d=-a,m=Math.max(0,-(o*d+s)),p=-m*m+d*(d+2*l)+c;else d<=-g?(m=Math.max(0,-(-o*a+s)),d=m>0?-a:Math.min(Math.max(-a,-l),a),p=-m*m+d*(d+2*l)+c):d<=g?(m=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(m=Math.max(0,-(o*a+s)),d=m>0?a:Math.min(Math.max(-a,-l),a),p=-m*m+d*(d+2*l)+c);else d=o>0?-a:a,m=Math.max(0,-(o*d+s)),p=-m*m+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,m),n&&n.copy(Aa).addScaledVector(dn,d),p}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),n=ar.dot(ar)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),m>=0?(s=(e.min.z-d.z)*m,l=(e.max.z-d.z)*m):(s=(e.max.z-d.z)*m,l=(e.min.z-d.z)*m),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,n,a){Ra.subVectors(t,e),pn.subVectors(r,e),Ca.crossVectors(Ra,pn);let o=this.direction.dot(Ca),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Sr.subVectors(this.origin,e);const l=s*this.direction.dot(pn.crossVectors(Sr,pn));if(l<0)return null;const c=s*this.direction.dot(Ra.cross(Sr));if(c<0||l+c>o)return null;const u=-s*Sr.dot(Ca);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,r,n,a,o,s,l,c,u,m,d,p,g,v,f){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c,u,m,d,p,g,v,f)}set(e,t,r,n,a,o,s,l,c,u,m,d,p,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=n,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=m,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/li.setFromMatrixColumn(e,0).length(),a=1/li.setFromMatrixColumn(e,1).length(),o=1/li.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*m,g=s*u,v=s*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*m,g=c*u,v=c*m;t[0]=d+v*s,t[4]=g*s-p,t[8]=o*c,t[1]=o*m,t[5]=o*u,t[9]=-s,t[2]=p*s-g,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*m,g=c*u,v=c*m;t[0]=d-v*s,t[4]=-o*m,t[8]=g+p*s,t[1]=p+g*s,t[5]=o*u,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*m,g=s*u,v=s*m;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*m,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=v-d*m,t[8]=g*m+p,t[1]=m,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*m+g,t[10]=d-v*m}else if(e.order==="XZY"){const d=o*l,p=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=d*m+v,t[5]=o*u,t[9]=p*m-g,t[2]=g*m-p,t[6]=s*u,t[10]=v*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tu,e,wu)}lookAt(e,t,r){const n=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),Er.crossVectors(r,Ct),Er.lengthSq()===0&&(Math.abs(r.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),Er.crossVectors(r,Ct)),Er.normalize(),mn.crossVectors(Ct,Er),n[0]=Er.x,n[4]=mn.x,n[8]=Ct.x,n[1]=Er.y,n[5]=mn.y,n[9]=Ct.y,n[2]=Er.z,n[6]=mn.z,n[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],u=r[1],m=r[5],d=r[9],p=r[13],g=r[2],v=r[6],f=r[10],h=r[14],T=r[3],x=r[7],C=r[11],D=r[15],R=n[0],A=n[4],K=n[8],y=n[12],E=n[1],k=n[5],G=n[9],le=n[13],L=n[2],z=n[6],V=n[10],j=n[14],X=n[3],W=n[7],J=n[11],re=n[15];return a[0]=o*R+s*E+l*L+c*X,a[4]=o*A+s*k+l*z+c*W,a[8]=o*K+s*G+l*V+c*J,a[12]=o*y+s*le+l*j+c*re,a[1]=u*R+m*E+d*L+p*X,a[5]=u*A+m*k+d*z+p*W,a[9]=u*K+m*G+d*V+p*J,a[13]=u*y+m*le+d*j+p*re,a[2]=g*R+v*E+f*L+h*X,a[6]=g*A+v*k+f*z+h*W,a[10]=g*K+v*G+f*V+h*J,a[14]=g*y+v*le+f*j+h*re,a[3]=T*R+x*E+C*L+D*X,a[7]=T*A+x*k+C*z+D*W,a[11]=T*K+x*G+C*V+D*J,a[15]=T*y+x*le+C*j+D*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],m=e[6],d=e[10],p=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+a*l*m-n*c*m-a*s*d+r*c*d+n*s*p-r*l*p)+v*(+t*l*p-t*c*d+a*o*d-n*o*p+n*c*u-a*l*u)+f*(+t*c*m-t*s*p-a*o*m+r*o*p+a*s*u-r*c*u)+h*(-n*s*u-t*l*m+t*s*d+n*o*m-r*o*d+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],m=e[9],d=e[10],p=e[11],g=e[12],v=e[13],f=e[14],h=e[15],T=m*f*c-v*d*c+v*l*p-s*f*p-m*l*h+s*d*h,x=g*d*c-u*f*c-g*l*p+o*f*p+u*l*h-o*d*h,C=u*v*c-g*m*c+g*s*p-o*v*p-u*s*h+o*m*h,D=g*m*l-u*v*l-g*s*d+o*v*d+u*s*f-o*m*f,R=t*T+r*x+n*C+a*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(v*d*a-m*f*a-v*n*p+r*f*p+m*n*h-r*d*h)*A,e[2]=(s*f*a-v*l*a+v*n*c-r*f*c-s*n*h+r*l*h)*A,e[3]=(m*l*a-s*d*a-m*n*c+r*d*c+s*n*p-r*l*p)*A,e[4]=x*A,e[5]=(u*f*a-g*d*a+g*n*p-t*f*p-u*n*h+t*d*h)*A,e[6]=(g*l*a-o*f*a-g*n*c+t*f*c+o*n*h-t*l*h)*A,e[7]=(o*d*a-u*l*a+u*n*c-t*d*c-o*n*p+t*l*p)*A,e[8]=C*A,e[9]=(g*m*a-u*v*a-g*r*p+t*v*p+u*r*h-t*m*h)*A,e[10]=(o*v*a-g*s*a+g*r*c-t*v*c-o*r*h+t*s*h)*A,e[11]=(u*s*a-o*m*a-u*r*c+t*m*c+o*r*p-t*s*p)*A,e[12]=D*A,e[13]=(u*v*n-g*m*n+g*r*d-t*v*d-u*r*f+t*m*f)*A,e[14]=(g*s*n-o*v*n-g*r*l+t*v*l+o*r*f-t*s*f)*A,e[15]=(o*m*n-u*s*n+u*r*l-t*m*l-o*r*d+t*s*d)*A,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+r,u*l-n*o,0,c*l-n*s,u*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,m=s+s,d=a*c,p=a*u,g=a*m,v=o*u,f=o*m,h=s*m,T=l*c,x=l*u,C=l*m,D=r.x,R=r.y,A=r.z;return n[0]=(1-(v+h))*D,n[1]=(p+C)*D,n[2]=(g-x)*D,n[3]=0,n[4]=(p-C)*R,n[5]=(1-(d+h))*R,n[6]=(f+T)*R,n[7]=0,n[8]=(g+x)*A,n[9]=(f-T)*A,n[10]=(1-(d+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=li.set(n[0],n[1],n[2]).length();const o=li.set(n[4],n[5],n[6]).length(),s=li.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],jt.copy(this);const l=1/a,c=1/o,u=1/s;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=c,jt.elements[5]*=c,jt.elements[6]*=c,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o,s=ir){const l=this.elements,c=2*a/(t-e),u=2*a/(r-n),m=(t+e)/(t-e),d=(r+n)/(r-n);let p,g;if(s===ir)p=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===nn)p=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,o,s=ir){const l=this.elements,c=1/(t-e),u=1/(r-n),m=1/(o-a),d=(t+e)*c,p=(r+n)*u;let g,v;if(s===ir)g=(o+a)*m,v=-2*m;else if(s===nn)g=a*m,v=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const li=new P,jt=new et,Tu=new P(0,0,0),wu=new P(1,1,1),Er=new P,mn=new P,Ct=new P,wo=new et,Ao=new Fr;class gn{constructor(e=0,t=0,r=0,n=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],m=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Au=0;const Ro=new P,ci=new Fr,sr=new et,_n=new P,ki=new P,Ru=new P,Cu=new Fr,Co=new P(1,0,0),Lo=new P(0,1,0),Po=new P(0,0,1),Lu={type:"added"},Pu={type:"removed"};class ct extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new P,t=new gn,r=new Fr,n=new P(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new et},normalMatrix:{value:new Ge}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_n.copy(e):_n.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(ki,_n,this.up):sr.lookAt(_n,ki,this.up),this.quaternion.setFromRotationMatrix(sr),n&&(sr.extractRotation(n.matrixWorld),ci.setFromRotationMatrix(sr),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const m=l[c];a(e.shapes,m)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),m=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),m.length>0&&(r.shapes=m),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=n,r;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}ct.DEFAULT_UP=new P(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new P,or=new P,Pa=new P,lr=new P,ui=new P,hi=new P,Uo=new P,Ua=new P,Da=new P,Ia=new P;let vn=!1;class Yt{constructor(e=new P,t=new P,r=new P){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),qt.subVectors(e,t),n.cross(qt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){qt.subVectors(n,t),or.subVectors(r,t),Pa.subVectors(e,t);const o=qt.dot(qt),s=qt.dot(or),l=qt.dot(Pa),c=or.dot(or),u=or.dot(Pa),m=o*c-s*s;if(m===0)return a.set(0,0,0),null;const d=1/m,p=(c*l-s*u)*d,g=(o*u-s*l)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getUV(e,t,r,n,a,o,s,l){return vn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vn=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(s,lr.z),l)}static isFrontFacing(e,t,r,n){return qt.subVectors(r,t),or.subVectors(e,t),qt.cross(or).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),or.subVectors(this.a,this.b),qt.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return vn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vn=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return Yt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;ui.subVectors(n,r),hi.subVectors(a,r),Ua.subVectors(e,r);const l=ui.dot(Ua),c=hi.dot(Ua);if(l<=0&&c<=0)return t.copy(r);Da.subVectors(e,n);const u=ui.dot(Da),m=hi.dot(Da);if(u>=0&&m<=u)return t.copy(n);const d=l*m-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(ui,o);Ia.subVectors(e,a);const p=ui.dot(Ia),g=hi.dot(Ia);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(r).addScaledVector(hi,s);const f=u*g-p*m;if(f<=0&&m-u>=0&&p-g>=0)return Uo.subVectors(a,n),s=(m-u)/(m-u+(p-g)),t.copy(n).addScaledVector(Uo,s);const h=1/(f+v+d);return o=v*h,s=d*h,t.copy(r).addScaledVector(ui,o).addScaledVector(hi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Do={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},xn={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?i+(e-i)*6*t:t<.5?e:t<.6666666666666666?i+(e-i)*6*(.6666666666666666-t):i}class Re{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ze.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=Ze.workingColorSpace){if(e=gu(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=Na(o,a,e+.3333333333333333),this.g=Na(o,a,e),this.b=Na(o,a,e-.3333333333333333)}return Ze.toWorkingColorSpace(this,n),this}setStyle(e,t=ot){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const r=Do[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Ze.fromWorkingColorSpace(ft.copy(this),e),Math.round(bt(ft.r*255,0,255))*65536+Math.round(bt(ft.g*255,0,255))*256+Math.round(bt(ft.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(ft.copy(this),t);const r=ft.r,n=ft.g,a=ft.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const m=o-s;switch(c=u<=.5?m/(o+s):m/(2-o-s),o){case r:l=(n-a)/m+(n<a?6:0);break;case n:l=(a-r)/m+2;break;case a:l=(r-n)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=ot){Ze.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,r=ft.g,n=ft.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(xn);const r=xa(Tr.h,xn.h,t),n=xa(Tr.s,xn.s,t),a=xa(Tr.l,xn.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Re;Re.NAMES=Do;let Uu=0;class di extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Qr,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=ia,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ra&&(r.blendSrc=this.blendSrc),this.blendDst!==ia&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oa extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new P,bn=new Me;class Qt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXY(t,bn.x,bn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=wt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),n=wt(n,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),e}}class Io extends Qt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class No extends Qt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mt extends Qt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Du=0;const Ot=new et,Fa=new ct,pi=new P,Lt=new Bi,Gi=new Bi,ut=new P;class Kt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vo(e)?No:Io)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ge().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,r){return Ot.makeTranslation(e,t,r),this.applyMatrix4(Ot),this}scale(e,t,r){return Ot.makeScale(e,t,r),this.applyMatrix4(Ot),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Lt.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const r=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Gi.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(Lt.min,Gi.min),Lt.expandByPoint(ut),ut.addVectors(Lt.max,Gi.max),Lt.expandByPoint(ut)):(Lt.expandByPoint(Gi.min),Lt.expandByPoint(Gi.max))}Lt.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)ut.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(ut));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ut.fromBufferAttribute(s,c),l&&(pi.fromBufferAttribute(e,c),ut.add(pi)),n=Math.max(n,r.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<s;E++)c[E]=new P,u[E]=new P;const m=new P,d=new P,p=new P,g=new Me,v=new Me,f=new Me,h=new P,T=new P;function x(E,k,G){m.fromArray(n,E*3),d.fromArray(n,k*3),p.fromArray(n,G*3),g.fromArray(o,E*2),v.fromArray(o,k*2),f.fromArray(o,G*2),d.sub(m),p.sub(m),v.sub(g),f.sub(g);const le=1/(v.x*f.y-f.x*v.y);isFinite(le)&&(h.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(le),T.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(le),c[E].add(h),c[k].add(h),c[G].add(h),u[E].add(T),u[k].add(T),u[G].add(T))}let C=this.groups;C.length===0&&(C=[{start:0,count:r.length}]);for(let E=0,k=C.length;E<k;++E){const G=C[E],le=G.start,L=G.count;for(let z=le,V=le+L;z<V;z+=3)x(r[z+0],r[z+1],r[z+2])}const D=new P,R=new P,A=new P,K=new P;function y(E){A.fromArray(a,E*3),K.copy(A);const k=c[E];D.copy(k),D.sub(A.multiplyScalar(A.dot(k))).normalize(),R.crossVectors(K,k);const G=R.dot(u[E])<0?-1:1;l[E*4]=D.x,l[E*4+1]=D.y,l[E*4+2]=D.z,l[E*4+3]=G}for(let E=0,k=C.length;E<k;++E){const G=C[E],le=G.start,L=G.count;for(let z=le,V=le+L;z<V;z+=3)y(r[z+0]),y(r[z+1]),y(r[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);const n=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,m=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,a),m.subVectors(n,a),u.cross(m),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,f),s.add(u),l.add(u),c.add(u),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),m.subVectors(n,a),u.cross(m),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,m=s.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Qt(d,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,m=c.length;u<m;u++){const d=c[u],p=e(d,r);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let m=0,d=c.length;m<d;m++){const p=c[m];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],m=a[c];for(let d=0,p=m.length;d<p;d++)u.push(m[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new et,Hr=new fn,yn=new hn,Fo=new P,fi=new P,mi=new P,gi=new P,Ba=new P,Mn=new P,Sn=new Me,En=new Me,Tn=new Me,Bo=new P,zo=new P,Ho=new P,wn=new P,An=new P;class Pt extends ct{constructor(e=new Kt,t=new Oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Mn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],m=a[l];u!==0&&(Ba.fromBufferAttribute(m,e),o?Mn.addScaledVector(Ba,u):Mn.addScaledVector(Ba.sub(t),u))}t.add(Mn)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yn.copy(r.boundingSphere),yn.applyMatrix4(a),Hr.copy(e.ray).recast(e.near),!(yn.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(yn,Fo)===null||Hr.origin.distanceToSquared(Fo)>(e.far-e.near)**2))&&(Oo.copy(a).invert(),Hr.copy(e.ray).applyMatrix4(Oo),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,r){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,m=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const f=d[g],h=o[f.materialIndex],T=Math.max(f.start,p.start),x=Math.min(s.count,Math.min(f.start+f.count,p.start+p.count));for(let C=T,D=x;C<D;C+=3){const R=s.getX(C),A=s.getX(C+1),K=s.getX(C+2);n=Rn(this,h,e,r,c,u,m,R,A,K),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let f=g,h=v;f<h;f+=3){const T=s.getX(f),x=s.getX(f+1),C=s.getX(f+2);n=Rn(this,o,e,r,c,u,m,T,x,C),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const f=d[g],h=o[f.materialIndex],T=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let C=T,D=x;C<D;C+=3){const R=C,A=C+1,K=C+2;n=Rn(this,h,e,r,c,u,m,R,A,K),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,h=v;f<h;f+=3){const T=f,x=f+1,C=f+2;n=Rn(this,o,e,r,c,u,m,T,x,C),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function Iu(i,e,t,r,n,a,o,s){let l;if(e.side===Tt?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===gr,s),l===null)return null;An.copy(s),An.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(An);return c<t.near||c>t.far?null:{distance:c,point:An.clone(),object:i}}function Rn(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,fi),i.getVertexPosition(l,mi),i.getVertexPosition(c,gi);const u=Iu(i,e,t,r,fi,mi,gi,wn);if(u){n&&(Sn.fromBufferAttribute(n,s),En.fromBufferAttribute(n,l),Tn.fromBufferAttribute(n,c),u.uv=Yt.getInterpolation(wn,fi,mi,gi,Sn,En,Tn,new Me)),a&&(Sn.fromBufferAttribute(a,s),En.fromBufferAttribute(a,l),Tn.fromBufferAttribute(a,c),u.uv1=Yt.getInterpolation(wn,fi,mi,gi,Sn,En,Tn,new Me),u.uv2=u.uv1),o&&(Bo.fromBufferAttribute(o,s),zo.fromBufferAttribute(o,l),Ho.fromBufferAttribute(o,c),u.normal=Yt.getInterpolation(wn,fi,mi,gi,Bo,zo,Ho,new P),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const m={a:s,b:l,c,normal:new P,materialIndex:0};Yt.getNormal(fi,mi,gi,m.normal),u.face=m}return u}class kr extends Kt{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],m=[];let d=0,p=0;g("z","y","x",-1,-1,r,t,e,o,a,0),g("z","y","x",1,-1,r,t,-e,o,a,1),g("x","z","y",1,1,e,r,t,n,o,2),g("x","z","y",1,-1,e,r,-t,n,o,3),g("x","y","z",1,-1,e,t,r,n,a,4),g("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(m,2));function g(v,f,h,T,x,C,D,R,A,K,y){const E=C/A,k=D/K,G=C/2,le=D/2,L=R/2,z=A+1,V=K+1;let j=0,X=0;const W=new P;for(let J=0;J<V;J++){const re=J*k-le;for(let he=0;he<z;he++){const B=he*E-G;W[v]=B*T,W[f]=re*x,W[h]=L,c.push(W.x,W.y,W.z),W[v]=0,W[f]=0,W[h]=R>0?1:-1,u.push(W.x,W.y,W.z),m.push(he/A),m.push(1-J/K),j+=1}}for(let J=0;J<K;J++)for(let re=0;re<A;re++){const he=d+re+z*J,B=d+re+z*(J+1),Y=d+(re+1)+z*(J+1),me=d+(re+1)+z*J;l.push(he,B,me),l.push(B,Y,me),X+=6}s.addGroup(p,X,y),p+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const r=_i(i[t]);for(const n in r)e[n]=r[n]}return e}function Nu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ko(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}const za={clone:_i,merge:St};var Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Go extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Go{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(an*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(an*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(an*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class Bu extends ct{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ft(vi,xi,e,t);n.layers=this.layers,this.add(n);const a=new Ft(vi,xi,e,t);a.layers=this.layers,this.add(a);const o=new Ft(vi,xi,e,t);o.layers=this.layers,this.add(o);const s=new Ft(vi,xi,e,t);s.layers=this.layers,this.add(s);const l=new Ft(vi,xi,e,t);l.layers=this.layers,this.add(l);const c=new Ft(vi,xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nn)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(m,d,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Vo extends Rt{constructor(e,t,r,n,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,r,n,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zu extends yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Nr?ot:It),this.texture=new Vo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new kr(5,5,5),a=new At({name:"CubemapFromEquirect",uniforms:_i(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tt,blending:Gt});a.uniforms.tEquirect.value=t;const o=new Pt(n,a),s=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Ut),new Bu(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const Ha=new P,Hu=new P,ku=new Ge;class wr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Ha.subVectors(r,t).cross(Hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ha),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ku.getNormalMatrix(e),n=this.coplanarPoint(Ha).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new hn,Cn=new P;class ka{constructor(e=new wr,t=new wr,r=new wr,n=new wr,a=new wr,o=new wr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ir){const r=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],m=n[6],d=n[7],p=n[8],g=n[9],v=n[10],f=n[11],h=n[12],T=n[13],x=n[14],C=n[15];if(r[0].setComponents(l-a,d-c,f-p,C-h).normalize(),r[1].setComponents(l+a,d+c,f+p,C+h).normalize(),r[2].setComponents(l+o,d+u,f+g,C+T).normalize(),r[3].setComponents(l-o,d-u,f-g,C-T).normalize(),r[4].setComponents(l-s,d-m,f-v,C-x).normalize(),t===ir)r[5].setComponents(l+s,d+m,f+v,C+x).normalize();else if(t===nn)r[5].setComponents(s,m,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Cn.x=n.normal.x>0?e.max.x:e.min.x,Cn.y=n.normal.y>0?e.max.y:e.min.y,Cn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Cn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wo(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Gu(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const m=c.array,d=c.usage,p=m.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,m,d),c.onUploadCallback();let v;if(m instanceof Float32Array)v=i.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)v=i.SHORT;else if(m instanceof Uint32Array)v=i.UNSIGNED_INT;else if(m instanceof Int32Array)v=i.INT;else if(m instanceof Int8Array)v=i.BYTE;else if(m instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:v,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:p}}function a(c,u,m){const d=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(m,c),p.count===-1&&g.length===0&&i.bufferSubData(m,0,d),g.length!==0){for(let v=0,f=g.length;v<f;v++){const h=g[v];t?i.bufferSubData(m,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):i.bufferSubData(m,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(m,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(m,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(i.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const m=r.get(c);if(m===void 0)r.set(c,n(c,u));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,c,u),m.version=c.version}}return{get:o,remove:s,update:l}}class Ln extends Kt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,u=l+1,m=e/s,d=t/l,p=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const T=h*d-o;for(let x=0;x<c;x++){const C=x*m-a;g.push(C,-T,0),v.push(0,0,1),f.push(x/s),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<s;T++){const x=T+c*h,C=T+c*(h+1),D=T+1+c*(h+1),R=T+1+c*h;p.push(x,C,R),p.push(C,D,R)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
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
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
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
#endif`,Qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rh=`#ifdef USE_IRIDESCENCE
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
#endif`,ih=`#ifdef USE_BUMPMAP
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
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dh=`#define PI 3.141592653589793
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
} // validated`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fh=`vec3 transformedNormal = objectNormal;
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
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`
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
}`,yh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lh=`#ifdef USE_GRADIENTMAP
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
}`,Ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
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
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
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
#endif`,Gh=`struct PhysicalMaterial {
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
}`,Vh=`
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$h=`#if defined( USE_POINTS_UV )
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
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
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
#endif`,nd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ad=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
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
}`,Kd=`#if DEPTH_PACKING == 3200
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
}`,Zd=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ap=`#define LAMBERT
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
}`,sp=`#define MATCAP
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
}`,op=`#define MATCAP
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
}`,lp=`#define NORMAL
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
}`,cp=`#define NORMAL
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
}`,up=`#define PHONG
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
}`,hp=`#define PHONG
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
}`,dp=`#define STANDARD
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
}`,pp=`#define STANDARD
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
}`,fp=`#define TOON
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
}`,mp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,bp=`uniform float rotation;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Vu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:ju,alphatest_fragment:qu,alphatest_pars_fragment:Yu,aomap_fragment:Ku,aomap_pars_fragment:Zu,batching_pars_vertex:Ju,batching_vertex:Qu,begin_vertex:$u,beginnormal_vertex:eh,bsdfs:th,iridescence_fragment:rh,bumpmap_pars_fragment:ih,clipping_planes_fragment:nh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:sh,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:uh,color_vertex:hh,common:dh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:fh,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:_h,emissivemap_pars_fragment:vh,colorspace_fragment:xh,colorspace_pars_fragment:bh,envmap_fragment:yh,envmap_common_pars_fragment:Mh,envmap_pars_fragment:Sh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Oh,envmap_vertex:Th,fog_vertex:wh,fog_pars_vertex:Ah,fog_fragment:Rh,fog_pars_fragment:Ch,gradientmap_pars_fragment:Lh,lightmap_fragment:Ph,lightmap_pars_fragment:Uh,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Nh,lights_toon_fragment:Fh,lights_toon_pars_fragment:Bh,lights_phong_fragment:zh,lights_phong_pars_fragment:Hh,lights_physical_fragment:kh,lights_physical_pars_fragment:Gh,lights_fragment_begin:Vh,lights_fragment_maps:Wh,lights_fragment_end:Xh,logdepthbuf_fragment:jh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Kh,map_fragment:Zh,map_pars_fragment:Jh,map_particle_fragment:Qh,map_particle_pars_fragment:$h,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphcolor_vertex:rd,morphnormal_vertex:id,morphtarget_pars_vertex:nd,morphtarget_vertex:ad,normal_fragment_begin:sd,normal_fragment_maps:od,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:_d,premultiplied_alpha_fragment:vd,project_vertex:xd,dithering_fragment:bd,dithering_pars_fragment:yd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Td,shadowmap_vertex:wd,shadowmask_pars_fragment:Ad,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Ld,skinnormal_vertex:Pd,specularmap_fragment:Ud,specularmap_pars_fragment:Dd,tonemapping_fragment:Id,tonemapping_pars_fragment:Nd,transmission_fragment:Od,transmission_pars_fragment:Fd,uv_pars_fragment:Bd,uv_pars_vertex:zd,uv_vertex:Hd,worldpos_vertex:kd,background_vert:Gd,background_frag:Vd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:jd,cube_frag:qd,depth_vert:Yd,depth_frag:Kd,distanceRGBA_vert:Zd,distanceRGBA_frag:Jd,equirect_vert:Qd,equirect_frag:$d,linedashed_vert:ep,linedashed_frag:tp,meshbasic_vert:rp,meshbasic_frag:ip,meshlambert_vert:np,meshlambert_frag:ap,meshmatcap_vert:sp,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:hp,meshphysical_vert:dp,meshphysical_frag:pp,meshtoon_vert:fp,meshtoon_frag:mp,points_vert:gp,points_frag:_p,shadow_vert:vp,shadow_frag:xp,sprite_vert:bp,sprite_frag:yp},ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},$t={basic:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:St([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:St([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:St([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:St([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:St([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:St([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:St([ae.lights,ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$t.physical={uniforms:St([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Pn={r:0,b:0,g:0};function Mp(i,e,t,r,n,a,o){const s=new Re(0);let l=a===!0?0:1,c,u,m=null,d=0,p=null;function g(f,h){let T=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?v(s,l):x&&x.isColor&&(v(x,1),T=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qi)?(u===void 0&&(u=new Pt(new kr(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:_i($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==Qe,(m!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,m=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pt(new Ln(2,2),new At({name:"BackgroundMaterial",uniforms:_i($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,m=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,h){f.getRGB(Pn,ko(i)),r.buffers.color.setClear(Pn.r,Pn.g,Pn.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(f,h=1){s.set(f),l=h,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:g}}function Sp(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=f(null);let c=l,u=!1;function m(L,z,V,j,X){let W=!1;if(o){const J=v(j,V,z);c!==J&&(c=J,p(c.object)),W=h(L,j,V,X),W&&T(L,j,V,X)}else{const J=z.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=j.id,c.program=V.id,c.wireframe=J,W=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,K(L,z,V,j),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function p(L){return r.isWebGL2?i.bindVertexArray(L):a.bindVertexArrayOES(L)}function g(L){return r.isWebGL2?i.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function v(L,z,V){const j=V.wireframe===!0;let X=s[L.id];X===void 0&&(X={},s[L.id]=X);let W=X[z.id];W===void 0&&(W={},X[z.id]=W);let J=W[j];return J===void 0&&(J=f(d()),W[j]=J),J}function f(L){const z=[],V=[],j=[];for(let X=0;X<n;X++)z[X]=0,V[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function h(L,z,V,j){const X=c.attributes,W=z.attributes;let J=0;const re=V.getAttributes();for(const he in re)if(re[he].location>=0){const B=X[he];let Y=W[he];if(Y===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;J++}return c.attributesNum!==J||c.index!==j}function T(L,z,V,j){const X={},W=z.attributes;let J=0;const re=V.getAttributes();for(const he in re)if(re[he].location>=0){let B=W[he];B===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));const Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),X[he]=Y,J++}c.attributes=X,c.attributesNum=J,c.index=j}function x(){const L=c.newAttributes;for(let z=0,V=L.length;z<V;z++)L[z]=0}function C(L){D(L,0)}function D(L,z){const V=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),X[L]!==z&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),X[L]=z)}function R(){const L=c.newAttributes,z=c.enabledAttributes;for(let V=0,j=z.length;V<j;V++)z[V]!==L[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function A(L,z,V,j,X,W,J){J===!0?i.vertexAttribIPointer(L,z,V,X,W):i.vertexAttribPointer(L,z,V,j,X,W)}function K(L,z,V,j){if(r.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=j.attributes,W=V.getAttributes(),J=z.defaultAttributeValues;for(const re in W){const he=W[re];if(he.location>=0){let B=X[re];if(B===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),B!==void 0){const Y=B.normalized,me=B.itemSize,ye=t.get(B);if(ye===void 0)continue;const be=ye.buffer,Ie=ye.type,Ne=ye.bytesPerElement,Ae=r.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||B.gpuType===Ps);if(B.isInterleavedBufferAttribute){const We=B.data,O=We.stride,dt=B.offset;if(We.isInstancedInterleavedBuffer){for(let Ee=0;Ee<he.locationSize;Ee++)D(he.location+Ee,We.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ee=0;Ee<he.locationSize;Ee++)C(he.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Ee=0;Ee<he.locationSize;Ee++)A(he.location+Ee,me/he.locationSize,Ie,Y,O*Ne,(dt+me/he.locationSize*Ee)*Ne,Ae)}else{if(B.isInstancedBufferAttribute){for(let We=0;We<he.locationSize;We++)D(he.location+We,B.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let We=0;We<he.locationSize;We++)C(he.location+We);i.bindBuffer(i.ARRAY_BUFFER,be);for(let We=0;We<he.locationSize;We++)A(he.location+We,me/he.locationSize,Ie,Y,me*Ne,me/he.locationSize*We*Ne,Ae)}}else if(J!==void 0){const Y=J[re];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(he.location,Y);break;case 3:i.vertexAttrib3fv(he.location,Y);break;case 4:i.vertexAttrib4fv(he.location,Y);break;default:i.vertexAttrib1fv(he.location,Y)}}}}R()}function y(){G();for(const L in s){const z=s[L];for(const V in z){const j=z[V];for(const X in j)g(j[X].object),delete j[X];delete z[V]}delete s[L]}}function E(L){if(s[L.id]===void 0)return;const z=s[L.id];for(const V in z){const j=z[V];for(const X in j)g(j[X].object),delete j[X];delete z[V]}delete s[L.id]}function k(L){for(const z in s){const V=s[z];if(V[L.id]===void 0)continue;const j=V[L.id];for(const X in j)g(j[X].object),delete j[X];delete V[L.id]}}function G(){le(),u=!0,c!==l&&(c=l,p(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:G,resetDefaultState:le,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:C,disableUnusedAttributes:R}}function Ep(i,e,t,r){const n=r.isWebGL2;let a;function o(u){a=u}function s(u,m){i.drawArrays(a,u,m),t.update(m,a,1)}function l(u,m,d){if(d===0)return;let p,g;if(n)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,u,m,d),t.update(m,a,d)}function c(u,m,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],m[g]);else{p.multiDrawArraysWEBGL(a,u,0,m,0,d);let g=0;for(let v=0;v<d;v++)g+=m[v];t.update(g,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Tp(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,C=o||e.has("OES_texture_float"),D=x&&C,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:m,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:x,floatFragmentTextures:C,floatVertexTextures:D,maxSamples:R}}function wp(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new wr,s=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const p=m.length!==0||d||r!==0||n;return n=d,r=m.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,d){t=u(m,d,0)},this.setState=function(m,d,p){const g=m.clippingPlanes,v=m.clipIntersection,f=m.clipShadows,h=i.get(m);if(!n||g===null||g.length===0||a&&!f)a?u(null):c();else{const T=a?0:r,x=T*4;let C=h.clippingState||null;l.value=C,C=u(g,d,x,p);for(let D=0;D!==x;++D)C[D]=t[D];h.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(m,d,p,g){const v=m!==null?m.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const h=p+v*4,T=d.matrixWorldInverse;s.getNormalMatrix(T),(f===null||f.length<h)&&(f=new Float32Array(h));for(let x=0,C=p;x!==v;++x,C+=4)o.copy(m[x]).applyMatrix4(T,s),o.normal.toArray(f,C),f[C+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Ap(i){let e=new WeakMap;function t(o,s){return s===aa?o.mapping=$r:s===sa&&(o.mapping=ei),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===aa||s===sa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zu(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Ga extends Go{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bi=4,Xo=[.125,.215,.35,.446,.526,.582],Vr=20,Va=new Ga,jo=new Re;let Wa=null,Xa=0,ja=0;const Wr=(1+Math.sqrt(5))/2,yi=1/Wr,qo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Wr,yi),new P(0,Wr,-yi),new P(yi,0,Wr),new P(-yi,0,Wr),new P(Wr,yi,0),new P(-Wr,yi,0)];class Yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,ja),e.scissorTest=!1,Un(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Dt,format:Wt,colorSpace:Nt,depthBuffer:!1},n=Ko(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(a)),this._blurMaterial=Cp(a,e,t)}return n}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,r,n){const a=new Ft(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(jo),l.toneMapping=_r,l.autoClear=!1;const m=new Oa({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),d=new Pt(new kr,m);let p=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,p=!0):(m.color.copy(jo),p=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const h=this._cubeSize;Un(n,f*h,v>2?h:0,h,h),l.setRenderTarget(n),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===$r||e.mapping===ei;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Un(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,Va)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=qo[(n-1)%qo.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new Pt(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[r]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),v=a/g,f=isFinite(a)?1+Math.floor(u*v):Vr;f>Vr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vr}`);const h=[];let T=0;for(let A=0;A<Vr;++A){const K=A/v,y=Math.exp(-K*K/2);h.push(y),A===0?T+=y:A<f&&(T+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/T;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-r;const C=this._sizeLods[n],D=3*C*(n>x-bi?n-x+bi:0),R=4*(this._cubeSize-C);Un(t,D,R,3*C,2*C),l.setRenderTarget(t),l.render(m,Va)}}function Rp(i){const e=[],t=[],r=[];let n=i;const a=i-bi+1+Xo.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-bi?l=Xo[o-i+bi-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,m=1+c,d=[u,u,m,u,m,m,u,u,m,m,u,m],p=6,g=6,v=3,f=2,h=1,T=new Float32Array(v*g*p),x=new Float32Array(f*g*p),C=new Float32Array(h*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,K=R>2?0:-1,y=[A,K,0,A+2/3,K,0,A+2/3,K+1,0,A,K,0,A+2/3,K+1,0,A,K+1,0];T.set(y,v*g*R),x.set(d,f*g*R);const E=[R,R,R,R,R,R];C.set(E,h*g*R)}const D=new Kt;D.setAttribute("position",new Qt(T,v)),D.setAttribute("uv",new Qt(x,f)),D.setAttribute("faceIndex",new Qt(C,h)),e.push(D),n>bi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ko(i,e,t){const r=new yt(i,e,t);return r.texture.mapping=Qi,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Un(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Cp(i,e,t){const r=new Float32Array(Vr),n=new P(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function Zo(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function Jo(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function Lp(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===aa||l===sa,u=l===$r||l===ei;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let m=e.get(s);return t===null&&(t=new Yo(i)),m=c?t.fromEquirectangular(s,m):t.fromCubemap(s,m),e.set(s,m),m.texture}else{if(e.has(s))return e.get(s).texture;{const m=s.image;if(c&&m&&m.height>0||u&&m&&n(m)){t===null&&(t=new Yo(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Pp(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Up(i,e,t,r){const n={},a=new WeakMap;function o(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,h=v.length;f<h;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(m,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(m){const d=m.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=m.morphAttributes;for(const g in p){const v=p[g];for(let f=0,h=v.length;f<h;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(m){const d=[],p=m.index,g=m.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let x=0,C=T.length;x<C;x+=3){const D=T[x+0],R=T[x+1],A=T[x+2];d.push(D,R,R,A,A,D)}}else if(g!==void 0){const T=g.array;v=g.version;for(let x=0,C=T.length/3-1;x<C;x+=3){const D=x+0,R=x+1,A=x+2;d.push(D,R,R,A,A,D)}}else return;const f=new(vo(d)?No:Io)(d,1);f.version=v;const h=a.get(m);h&&e.remove(h),a.set(m,f)}function u(m){const d=a.get(m);if(d){const p=m.index;p!==null&&d.version<p.version&&c(m)}else c(m);return a.get(m)}return{get:s,update:l,getWireframeAttribute:u}}function Dp(i,e,t,r){const n=r.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,g){i.drawElements(a,g,s,p*l),t.update(g,a,1)}function m(p,g,v){if(v===0)return;let f,h;if(n)f=i,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](a,g,s,p*l,v),t.update(g,a,v)}function d(p,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<v;h++)this.render(p[h]/l,g[h]);else{f.multiDrawElementsWEBGL(a,g,0,s,p,0,v);let h=0;for(let T=0;T<v;T++)h+=g[T];t.update(h,a,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=m,this.renderMultiDraw=d}function Ip(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Np(i,e){return i[0]-e[0]}function Op(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Fp(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new lt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,m){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=a.get(u);if(v===void 0||v.count!==g){let T=function(){le.dispose(),a.delete(u),u.removeEventListener("dispose",T)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,C=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],K=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),C===!0&&(y=2),D===!0&&(y=3);let E=u.attributes.position.count*y,k=1;E>e.maxTextureSize&&(k=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*k*4*g),le=new Eo(G,E,k,g);le.type=br,le.needsUpdate=!0;const L=y*4;for(let z=0;z<g;z++){const V=R[z],j=A[z],X=K[z],W=E*k*4*z;for(let J=0;J<V.count;J++){const re=J*L;x===!0&&(o.fromBufferAttribute(V,J),G[W+re+0]=o.x,G[W+re+1]=o.y,G[W+re+2]=o.z,G[W+re+3]=0),C===!0&&(o.fromBufferAttribute(j,J),G[W+re+4]=o.x,G[W+re+5]=o.y,G[W+re+6]=o.z,G[W+re+7]=0),D===!0&&(o.fromBufferAttribute(X,J),G[W+re+8]=o.x,G[W+re+9]=o.y,G[W+re+10]=o.z,G[W+re+11]=X.itemSize===4?o.w:1)}}v={count:g,texture:le,size:new Me(E,k)},a.set(u,v),u.addEventListener("dispose",T)}let f=0;for(let T=0;T<d.length;T++)f+=d[T];const h=u.morphTargetsRelative?1:1-f;m.getUniforms().setValue(i,"morphTargetBaseInfluence",h),m.getUniforms().setValue(i,"morphTargetInfluences",d),m.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let g=r[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];r[u.id]=g}for(let x=0;x<p;x++){const C=g[x];C[0]=x,C[1]=d[x]}g.sort(Op);for(let x=0;x<8;x++)x<p&&g[x][1]?(s[x][0]=g[x][0],s[x][1]=g[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(Np);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const C=s[x],D=C[0],R=C[1];D!==Number.MAX_SAFE_INTEGER&&R?(v&&u.getAttribute("morphTarget"+x)!==v[D]&&u.setAttribute("morphTarget"+x,v[D]),f&&u.getAttribute("morphNormal"+x)!==f[D]&&u.setAttribute("morphNormal"+x,f[D]),n[x]=R,h+=R):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),f&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const T=u.morphTargetsRelative?1:1-h;m.getUniforms().setValue(i,"morphTargetBaseInfluence",T),m.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function Bp(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,m=e.get(l,u);if(n.get(m)!==c&&(e.update(m),n.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return m}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class Qo extends Rt{constructor(e,t,r,n,a,o,s,l,c,u){if(u=u!==void 0?u:Ir,u!==Ir&&u!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ir&&(r=xr),r===void 0&&u===ti&&(r=Dr),super(null,n,a,o,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $o=new Rt,el=new Qo(1,1);el.compareFunction=fo;const tl=new Eo,rl=new Su,il=new Vo,nl=[],al=[],sl=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function Mi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=nl[n];if(a===void 0&&(a=new Float32Array(n),nl[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function nt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Dn(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function Vp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(nt(t,r))return;ll.set(r),i.uniformMatrix2fv(this.addr,!1,ll),at(t,r)}}function Wp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(nt(t,r))return;ol.set(r),i.uniformMatrix3fv(this.addr,!1,ol),at(t,r)}}function Xp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(nt(t,r))return;sl.set(r),i.uniformMatrix4fv(this.addr,!1,sl),at(t,r)}}function jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function ef(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?el:$o;t.setTexture2D(e||a,n)}function tf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||rl,n)}function rf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||il,n)}function nf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||tl,n)}function af(i){switch(i){case 5126:return zp;case 35664:return Hp;case 35665:return kp;case 35666:return Gp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return nf}}function sf(i,e){i.uniform1fv(this.addr,e)}function of(i,e){const t=Mi(e,this.size,2);i.uniform2fv(this.addr,t)}function lf(i,e){const t=Mi(e,this.size,3);i.uniform3fv(this.addr,t)}function cf(i,e){const t=Mi(e,this.size,4);i.uniform4fv(this.addr,t)}function uf(i,e){const t=Mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hf(i,e){const t=Mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function df(i,e){const t=Mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pf(i,e){i.uniform1iv(this.addr,e)}function ff(i,e){i.uniform2iv(this.addr,e)}function mf(i,e){i.uniform3iv(this.addr,e)}function gf(i,e){i.uniform4iv(this.addr,e)}function _f(i,e){i.uniform1uiv(this.addr,e)}function vf(i,e){i.uniform2uiv(this.addr,e)}function xf(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function yf(i,e,t){const r=this.cache,n=e.length,a=Dn(t,n);nt(r,a)||(i.uniform1iv(this.addr,a),at(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||$o,a[o])}function Mf(i,e,t){const r=this.cache,n=e.length,a=Dn(t,n);nt(r,a)||(i.uniform1iv(this.addr,a),at(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||rl,a[o])}function Sf(i,e,t){const r=this.cache,n=e.length,a=Dn(t,n);nt(r,a)||(i.uniform1iv(this.addr,a),at(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||il,a[o])}function Ef(i,e,t){const r=this.cache,n=e.length,a=Dn(t,n);nt(r,a)||(i.uniform1iv(this.addr,a),at(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||tl,a[o])}function Tf(i){switch(i){case 5126:return sf;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return uf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return pf;case 35667:case 35671:return ff;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return xf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}class wf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=af(t.type)}}class Af{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tf(t.type)}}class Rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function cl(i,e){i.seq.push(e),i.map[e.id]=e}function Cf(i,e,t){const r=i.name,n=r.length;for(Ya.lastIndex=0;;){const a=Ya.exec(r),o=Ya.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){cl(t,c===void 0?new wf(s,i,e):new Af(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new Rf(s),cl(t,u)),t=u}}}class In{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);Cf(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function ul(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Lf=37297;let Pf=0;function Uf(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function Df(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let r;switch(e===t?r="":e===rn&&t===tn?r="LinearDisplayP3ToLinearSRGB":e===tn&&t===rn&&(r="LinearSRGBToLinearDisplayP3"),i){case Nt:case $i:return[r,"LinearTransferOETF"];case ot:case ga:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function hl(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Uf(i.getShaderSource(e),o)}else return n}function If(i,e){const t=Df(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nf(i,e){let t;switch(e){case jc:t="Linear";break;case qc:t="Reinhard";break;case Yc:t="OptimizedCineon";break;case Kc:t="ACESFilmic";break;case Jc:t="AgX";break;case Zc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Of(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function Ff(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Si).join(`
`)}function Bf(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function zf(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Si(i){return i!==""}function dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(Hf,Gf)}const kf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gf(i,e){let t=Be[e];if(t===void 0){const r=kf.get(e);if(r!==void 0)t=Be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(Vf,Wf)}function Wf(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function ml(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Es?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function jf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $r:case ei:e="ENVMAP_TYPE_CUBE";break;case Qi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ei:e="ENVMAP_MODE_REFRACTION";break}return e}function Yf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case Wc:e="ENVMAP_BLENDING_MIX";break;case Xc:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Zf(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Xf(t),c=jf(t),u=qf(t),m=Yf(t),d=Kf(t),p=t.isWebGL2?"":Of(t),g=Ff(t),v=Bf(a),f=n.createProgram();let h,T,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Si).join(`
`),h.length>0&&(h+=`
`),T=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Si).join(`
`),T.length>0&&(T+=`
`)):(h=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),T=[p,ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?Be.tonemapping_pars_fragment:"",t.toneMapping!==_r?Nf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,If("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Si).join(`
`)),o=Ka(o),o=dl(o,t),o=pl(o,t),s=Ka(s),s=dl(s,t),s=pl(s,t),o=fl(o),s=fl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const C=x+h+o,D=x+T+s,R=ul(n,n.VERTEX_SHADER,C),A=ul(n,n.FRAGMENT_SHADER,D);n.attachShader(f,R),n.attachShader(f,A),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function K(G){if(i.debug.checkShaderErrors){const le=n.getProgramInfoLog(f).trim(),L=n.getShaderInfoLog(R).trim(),z=n.getShaderInfoLog(A).trim();let V=!0,j=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,f,R,A);else{const X=hl(n,R,"vertex"),W=hl(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+X+`
`+W)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(L===""||z==="")&&(j=!1);j&&(G.diagnostics={runnable:V,programLog:le,vertexShader:{log:L,prefix:h},fragmentShader:{log:z,prefix:T}})}n.deleteShader(R),n.deleteShader(A),y=new In(n,f),E=zf(n,f)}let y;this.getUniforms=function(){return y===void 0&&K(this),y};let E;this.getAttributes=function(){return E===void 0&&K(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(f,Lf)),k},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=A,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new $f(e),t.set(e,r)),r}}class $f{constructor(e){this.id=Jf++,this.code=e,this.usedTimes=0}}function em(i,e,t,r,n,a,o){const s=new La,l=new Qf,c=[],u=n.isWebGL2,m=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function f(y,E,k,G,le){const L=G.fog,z=le.geometry,V=y.isMeshStandardMaterial?G.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),X=j&&j.mapping===Qi?j.image.height:null,W=g[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=J!==void 0?J.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let B,Y,me,ye;if(W){const Je=$t[W];B=Je.vertexShader,Y=Je.fragmentShader}else B=y.vertexShader,Y=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const be=i.getRenderTarget(),Ie=le.isInstancedMesh===!0,Ne=le.isBatchedMesh===!0,Ae=!!y.map,We=!!y.matcap,O=!!j,dt=!!y.aoMap,Ee=!!y.lightMap,Le=!!y.bumpMap,ge=!!y.normalMap,$e=!!y.displacementMap,Oe=!!y.emissiveMap,M=!!y.metalnessMap,_=!!y.roughnessMap,I=y.anisotropy>0,ie=y.clearcoat>0,Q=y.iridescence>0,$=y.sheen>0,ve=y.transmission>0,ce=I&&!!y.anisotropyMap,pe=ie&&!!y.clearcoatMap,Te=ie&&!!y.clearcoatNormalMap,Fe=ie&&!!y.clearcoatRoughnessMap,Z=Q&&!!y.iridescenceMap,qe=Q&&!!y.iridescenceThicknessMap,ze=$&&!!y.sheenColorMap,Pe=$&&!!y.sheenRoughnessMap,Se=!!y.specularMap,de=!!y.specularColorMap,S=!!y.specularIntensityMap,ee=ve&&!!y.transmissionMap,xe=ve&&!!y.thicknessMap,fe=!!y.gradientMap,te=!!y.alphaMap,w=y.alphaTest>0,ne=!!y.alphaHash,ue=!!y.extensions,Ue=!!z.attributes.uv1,_e=!!z.attributes.uv2,Xe=!!z.attributes.uv3;let Ke=_r;return y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:u,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:Y,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ne,instancing:Ie,instancingColor:Ie&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Nt,map:Ae,matcap:We,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:Ee,bumpMap:Le,normalMap:ge,displacementMap:d&&$e,emissiveMap:Oe,normalMapObjectSpace:ge&&y.normalMapType===lu,normalMapTangentSpace:ge&&y.normalMapType===ho,metalnessMap:M,roughnessMap:_,anisotropy:I,anisotropyMap:ce,clearcoat:ie,clearcoatMap:pe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Fe,iridescence:Q,iridescenceMap:Z,iridescenceThicknessMap:qe,sheen:$,sheenColorMap:ze,sheenRoughnessMap:Pe,specularMap:Se,specularColorMap:de,specularIntensityMap:S,transmission:ve,transmissionMap:ee,thicknessMap:xe,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Qr,alphaMap:te,alphaTest:w,alphaHash:ne,combine:y.combine,mapUv:Ae&&v(y.map.channel),aoMapUv:dt&&v(y.aoMap.channel),lightMapUv:Ee&&v(y.lightMap.channel),bumpMapUv:Le&&v(y.bumpMap.channel),normalMapUv:ge&&v(y.normalMap.channel),displacementMapUv:$e&&v(y.displacementMap.channel),emissiveMapUv:Oe&&v(y.emissiveMap.channel),metalnessMapUv:M&&v(y.metalnessMap.channel),roughnessMapUv:_&&v(y.roughnessMap.channel),anisotropyMapUv:ce&&v(y.anisotropyMap.channel),clearcoatMapUv:pe&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(y.sheenRoughnessMap.channel),specularMapUv:Se&&v(y.specularMap.channel),specularColorMapUv:de&&v(y.specularColorMap.channel),specularIntensityMapUv:S&&v(y.specularIntensityMap.channel),transmissionMapUv:ee&&v(y.transmissionMap.channel),thicknessMapUv:xe&&v(y.thicknessMap.channel),alphaMapUv:te&&v(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ge||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:_e,vertexUv3s:Xe,pointsUvs:le.isPoints===!0&&!!z.attributes.uv&&(Ae||te),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:le.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:he,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kt,flipSided:y.side===Tt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&y.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(T(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),y.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),y.push(s.mask)}function C(y){const E=g[y.type];let k;if(E){const G=$t[E];k=za.clone(G.uniforms)}else k=y.uniforms;return k}function D(y,E){let k;for(let G=0,le=c.length;G<le;G++){const L=c[G];if(L.cacheKey===E){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Zf(i,E,y,a),c.push(k)),k}function R(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:C,acquireProgram:D,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:K}}function tm(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _l(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(m,d,p,g,v,f){let h=i[e];return h===void 0?(h={id:m.id,object:m,geometry:d,material:p,groupOrder:g,renderOrder:m.renderOrder,z:v,group:f},i[e]=h):(h.id=m.id,h.object=m,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=m.renderOrder,h.z=v,h.group=f),e++,h}function s(m,d,p,g,v,f){const h=o(m,d,p,g,v,f);p.transmission>0?r.push(h):p.transparent===!0?n.push(h):t.push(h)}function l(m,d,p,g,v,f){const h=o(m,d,p,g,v,f);p.transmission>0?r.unshift(h):p.transparent===!0?n.unshift(h):t.unshift(h)}function c(m,d){t.length>1&&t.sort(m||rm),r.length>1&&r.sort(d||gl),n.length>1&&n.sort(d||gl)}function u(){for(let m=e,d=i.length;m<d;m++){const p=i[m];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:u,sort:c}}function im(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new _l,i.set(r,[o])):n>=a.length?(o=new _l,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sm=0;function om(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lm(i,e){const t=new nm,r=am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const a=new P,o=new et,s=new et;function l(u,m){let d=0,p=0,g=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let v=0,f=0,h=0,T=0,x=0,C=0,D=0,R=0,A=0,K=0,y=0;u.sort(om);const E=m===!0?Math.PI:1;for(let G=0,le=u.length;G<le;G++){const L=u[G],z=L.color,V=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*V*E,p+=z.g*V*E,g+=z.b*V*E;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],V);y++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const J=L.shadow,re=r.get(L);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.directionalShadow[v]=re,n.directionalShadowMap[v]=X,n.directionalShadowMatrix[v]=L.shadow.matrix,C++}n.directional[v]=W,v++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(V*E),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[h]=W;const J=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&K++),n.spotLightMatrix[h]=J.matrix,L.castShadow){const re=r.get(L);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.spotShadow[h]=re,n.spotShadowMap[h]=X,R++}h++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=W,T++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),W.distance=L.distance,W.decay=L.decay,L.castShadow){const J=L.shadow,re=r.get(L);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,n.pointShadow[f]=re,n.pointShadowMap[f]=X,n.pointShadowMatrix[f]=L.shadow.matrix,D++}n.point[f]=W,f++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(V*E),W.groundColor.copy(L.groundColor).multiplyScalar(V*E),n.hemi[x]=W,x++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==v||k.pointLength!==f||k.spotLength!==h||k.rectAreaLength!==T||k.hemiLength!==x||k.numDirectionalShadows!==C||k.numPointShadows!==D||k.numSpotShadows!==R||k.numSpotMaps!==A||k.numLightProbes!==y)&&(n.directional.length=v,n.spot.length=h,n.rectArea.length=T,n.point.length=f,n.hemi.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=R+A-K,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=K,n.numLightProbes=y,k.directionalLength=v,k.pointLength=f,k.spotLength=h,k.rectAreaLength=T,k.hemiLength=x,k.numDirectionalShadows=C,k.numPointShadows=D,k.numSpotShadows=R,k.numSpotMaps=A,k.numLightProbes=y,n.version=sm++)}function c(u,m){let d=0,p=0,g=0,v=0,f=0;const h=m.matrixWorldInverse;for(let T=0,x=u.length;T<x;T++){const C=u[T];if(C.isDirectionalLight){const D=n.directional[d];D.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(h),d++}else if(C.isSpotLight){const D=n.spot[g];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(h),g++}else if(C.isRectAreaLight){const D=n.rectArea[v];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),s.identity(),o.copy(C.matrixWorld),o.premultiply(h),s.extractRotation(o),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),v++}else if(C.isPointLight){const D=n.point[p];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(h),p++}else if(C.isHemisphereLight){const D=n.hemi[f];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(h),f++}}}return{setup:l,setupView:c,state:n}}function vl(i,e){const t=new lm(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(u){r.push(u)}function s(u){n.push(u)}function l(u){t.setup(r,u)}function c(u){t.setupView(r,u)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function cm(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new vl(i,e),t.set(a,[l])):o>=s.length?(l=new vl(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class xl extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class um extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
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
}`;function pm(i,e,t){let r=new ka;const n=new Me,a=new Me,o=new lt,s=new xl({depthPacking:uo}),l=new um,c={},u=t.maxTextureSize,m={[gr]:Tt,[Tt]:gr,[kt]:kt},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:hm,fragmentShader:dm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let h=this.type;this.render=function(R,A,K){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Gt),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const le=h!==rr&&this.type===rr,L=h===rr&&this.type!==rr;for(let z=0,V=R.length;z<V;z++){const j=R[z],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const W=X.getFrameExtents();if(n.multiply(W),a.copy(X.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/W.x),n.x=a.x*W.x,X.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/W.y),n.y=a.y*W.y,X.mapSize.y=a.y)),X.map===null||le===!0||L===!0){const re=this.type!==rr?{minFilter:xt,magFilter:xt}:{};X.map!==null&&X.map.dispose(),X.map=new yt(n.x,n.y,re),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const J=X.getViewportCount();for(let re=0;re<J;re++){const he=X.getViewport(re);o.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),G.viewport(o),X.updateMatrices(j,re),r=X.getFrustum(),C(A,K,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===rr&&T(X,K),X.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(y,E,k)};function T(R,A){const K=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new yt(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,K,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,K,p,v,null)}function x(R,A,K,y){let E=null;const k=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)E=k;else if(E=K.isPointLight===!0?l:s,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,le=A.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let z=L[le];z===void 0&&(z=E.clone(),L[le]=z,A.addEventListener("dispose",D)),E=z}if(E.visible=A.visible,E.wireframe=A.wireframe,y===rr?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:m[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=i.properties.get(E);G.light=K}return E}function C(R,A,K,y,E){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===rr)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);const G=e.update(R),le=R.material;if(Array.isArray(le)){const L=G.groups;for(let z=0,V=L.length;z<V;z++){const j=L[z],X=le[j.materialIndex];if(X&&X.visible){const W=x(R,X,y,E);R.onBeforeShadow(i,R,A,K,G,W,j),i.renderBufferDirect(K,null,G,W,R,j),R.onAfterShadow(i,R,A,K,G,W,j)}}}else if(le.visible){const L=x(R,le,y,E);R.onBeforeShadow(i,R,A,K,G,L,null),i.renderBufferDirect(K,null,G,L,R,null),R.onAfterShadow(i,R,A,K,G,L,null)}}const k=R.children;for(let G=0,le=k.length;G<le;G++)C(k[G],A,K,y,E)}function D(R){R.target.removeEventListener("dispose",D);for(const A in c){const K=c[A],y=R.target.uuid;y in K&&(K[y].dispose(),delete K[y])}}}function fm(i,e,t){const r=t.isWebGL2;function n(){let w=!1;const ne=new lt;let ue=null;const Ue=new lt(0,0,0,0);return{setMask:function(_e){ue!==_e&&!w&&(i.colorMask(_e,_e,_e,_e),ue=_e)},setLocked:function(_e){w=_e},setClear:function(_e,Xe,Ke,Je,ht){ht===!0&&(_e*=Je,Xe*=Je,Ke*=Je),ne.set(_e,Xe,Ke,Je),Ue.equals(ne)===!1&&(i.clearColor(_e,Xe,Ke,Je),Ue.copy(ne))},reset:function(){w=!1,ue=null,Ue.set(-1,0,0,0)}}}function a(){let w=!1,ne=null,ue=null,Ue=null;return{setTest:function(_e){_e?Ne(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(_e){ne!==_e&&!w&&(i.depthMask(_e),ne=_e)},setFunc:function(_e){if(ue!==_e){switch(_e){case Fc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Hc:i.depthFunc(i.EQUAL);break;case kc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=_e}},setLocked:function(_e){w=_e},setClear:function(_e){Ue!==_e&&(i.clearDepth(_e),Ue=_e)},reset:function(){w=!1,ne=null,ue=null,Ue=null}}}function o(){let w=!1,ne=null,ue=null,Ue=null,_e=null,Xe=null,Ke=null,Je=null,ht=null;return{setTest:function(Ye){w||(Ye?Ne(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!w&&(i.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,Et,tr){(ue!==Ye||Ue!==Et||_e!==tr)&&(i.stencilFunc(Ye,Et,tr),ue=Ye,Ue=Et,_e=tr)},setOp:function(Ye,Et,tr){(Xe!==Ye||Ke!==Et||Je!==tr)&&(i.stencilOp(Ye,Et,tr),Xe=Ye,Ke=Et,Je=tr)},setLocked:function(Ye){w=Ye},setClear:function(Ye){ht!==Ye&&(i.clearStencil(Ye),ht=Ye)},reset:function(){w=!1,ne=null,ue=null,Ue=null,_e=null,Xe=null,Ke=null,Je=null,ht=null}}}const s=new n,l=new a,c=new o,u=new WeakMap,m=new WeakMap;let d={},p={},g=new WeakMap,v=[],f=null,h=!1,T=null,x=null,C=null,D=null,R=null,A=null,K=null,y=new Re(0,0,0),E=0,k=!1,G=null,le=null,L=null,z=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let re=null,he={};const B=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),me=new lt().fromArray(B),ye=new lt().fromArray(Y);function be(w,ne,ue,Ue){const _e=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(w,Xe),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ue;Ke++)r&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(ne,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ne+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Xe}const Ie={};Ie[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ie[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(Ji),Oe(!1),M(Ss),Ne(i.CULL_FACE),ge(Gt);function Ne(w){d[w]!==!0&&(i.enable(w),d[w]=!0)}function Ae(w){d[w]!==!1&&(i.disable(w),d[w]=!1)}function We(w,ne){return p[w]!==ne?(i.bindFramebuffer(w,ne),p[w]=ne,r&&(w===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ne),w===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ne)),!0):!1}function O(w,ne){let ue=v,Ue=!1;if(w)if(ue=g.get(ne),ue===void 0&&(ue=[],g.set(ne,ue)),w.isWebGLMultipleRenderTargets){const _e=w.texture;if(ue.length!==_e.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,Ke=_e.length;Xe<Ke;Xe++)ue[Xe]=i.COLOR_ATTACHMENT0+Xe;ue.length=_e.length,Ue=!0}}else ue[0]!==i.COLOR_ATTACHMENT0&&(ue[0]=i.COLOR_ATTACHMENT0,Ue=!0);else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function dt(w){return f!==w?(i.useProgram(w),f=w,!0):!1}const Ee={[Ur]:i.FUNC_ADD,[Mc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};if(r)Ee[As]=i.MIN,Ee[Rs]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(Ee[As]=w.MIN_EXT,Ee[Rs]=w.MAX_EXT)}const Le={[Ec]:i.ZERO,[Tc]:i.ONE,[wc]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Rc]:i.DST_ALPHA,[Ac]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[Pc]:i.ONE_MINUS_DST_COLOR,[Cc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Ic]:i.ONE_MINUS_CONSTANT_COLOR,[Nc]:i.CONSTANT_ALPHA,[Oc]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(w,ne,ue,Ue,_e,Xe,Ke,Je,ht,Ye){if(w===Gt){h===!0&&(Ae(i.BLEND),h=!1);return}if(h===!1&&(Ne(i.BLEND),h=!0),w!==yc){if(w!==T||Ye!==k){if((x!==Ur||R!==Ur)&&(i.blendEquation(i.FUNC_ADD),x=Ur,R=Ur),Ye)switch(w){case Qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.ONE,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}C=null,D=null,A=null,K=null,y.set(0,0,0),E=0,T=w,k=Ye}return}_e=_e||ne,Xe=Xe||ue,Ke=Ke||Ue,(ne!==x||_e!==R)&&(i.blendEquationSeparate(Ee[ne],Ee[_e]),x=ne,R=_e),(ue!==C||Ue!==D||Xe!==A||Ke!==K)&&(i.blendFuncSeparate(Le[ue],Le[Ue],Le[Xe],Le[Ke]),C=ue,D=Ue,A=Xe,K=Ke),(Je.equals(y)===!1||ht!==E)&&(i.blendColor(Je.r,Je.g,Je.b,ht),y.copy(Je),E=ht),T=w,k=!1}function $e(w,ne){w.side===kt?Ae(i.CULL_FACE):Ne(i.CULL_FACE);let ue=w.side===Tt;ne&&(ue=!ue),Oe(ue),w.blending===Qr&&w.transparent===!1?ge(Gt):ge(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),s.setMask(w.colorWrite);const Ue=w.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),I(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(w){G!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),G=w)}function M(w){w!==vc?(Ne(i.CULL_FACE),w!==le&&(w===Ss?i.cullFace(i.BACK):w===xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),le=w}function _(w){w!==L&&(X&&i.lineWidth(w),L=w)}function I(w,ne,ue){w?(Ne(i.POLYGON_OFFSET_FILL),(z!==ne||V!==ue)&&(i.polygonOffset(ne,ue),z=ne,V=ue)):Ae(i.POLYGON_OFFSET_FILL)}function ie(w){w?Ne(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function Q(w){w===void 0&&(w=i.TEXTURE0+j-1),re!==w&&(i.activeTexture(w),re=w)}function $(w,ne,ue){ue===void 0&&(re===null?ue=i.TEXTURE0+j-1:ue=re);let Ue=he[ue];Ue===void 0&&(Ue={type:void 0,texture:void 0},he[ue]=Ue),(Ue.type!==w||Ue.texture!==ne)&&(re!==ue&&(i.activeTexture(ue),re=ue),i.bindTexture(w,ne||Ie[w]),Ue.type=w,Ue.texture=ne)}function ve(){const w=he[re];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function S(w){me.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),me.copy(w))}function ee(w){ye.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),ye.copy(w))}function xe(w,ne){let ue=m.get(ne);ue===void 0&&(ue=new WeakMap,m.set(ne,ue));let Ue=ue.get(w);Ue===void 0&&(Ue=i.getUniformBlockIndex(ne,w.name),ue.set(w,Ue))}function fe(w,ne){const ue=m.get(ne).get(w);u.get(ne)!==ue&&(i.uniformBlockBinding(ne,ue,w.__bindingPointIndex),u.set(ne,ue))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,he={},p={},g=new WeakMap,v=[],f=null,h=!1,T=null,x=null,C=null,D=null,R=null,A=null,K=null,y=new Re(0,0,0),E=0,k=!1,G=null,le=null,L=null,z=null,V=null,me.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ne,disable:Ae,bindFramebuffer:We,drawBuffers:O,useProgram:dt,setBlending:ge,setMaterial:$e,setFlipSided:Oe,setCullFace:M,setLineWidth:_,setPolygonOffset:I,setScissorTest:ie,activeTexture:Q,bindTexture:$,unbindTexture:ve,compressedTexImage2D:ce,compressedTexImage3D:pe,texImage2D:Se,texImage3D:de,updateUBOMapping:xe,uniformBlockBinding:fe,texStorage2D:ze,texStorage3D:Pe,texSubImage2D:Te,texSubImage3D:Fe,compressedTexSubImage2D:Z,compressedTexSubImage3D:qe,scissor:S,viewport:ee,reset:te}}function mm(i,e,t,r,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let m;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):sn("canvas")}function v(M,_,I,ie){let Q=1;if((M.width>ie||M.height>ie)&&(Q=ie/Math.max(M.width,M.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const $=_?ba:Math.floor,ve=$(Q*M.width),ce=$(Q*M.height);m===void 0&&(m=g(ve,ce));const pe=I?g(ve,ce):m;return pe.width=ve,pe.height=ce,pe.getContext("2d").drawImage(M,0,0,ve,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ve+"x"+ce+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return _o(M.width)&&_o(M.height)}function h(M){return s?!1:M.wrapS!==Vt||M.wrapT!==Vt||M.minFilter!==xt&&M.minFilter!==Ut}function T(M,_){return M.generateMipmaps&&_&&M.minFilter!==xt&&M.minFilter!==Ut}function x(M){i.generateMipmap(M)}function C(M,_,I,ie,Q=!1){if(s===!1)return _;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=_;if(_===i.RED&&(I===i.FLOAT&&($=i.R32F),I===i.HALF_FLOAT&&($=i.R16F),I===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&($=i.R8UI),I===i.UNSIGNED_SHORT&&($=i.R16UI),I===i.UNSIGNED_INT&&($=i.R32UI),I===i.BYTE&&($=i.R8I),I===i.SHORT&&($=i.R16I),I===i.INT&&($=i.R32I)),_===i.RG&&(I===i.FLOAT&&($=i.RG32F),I===i.HALF_FLOAT&&($=i.RG16F),I===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RGBA){const ve=Q?en:Ze.getTransfer(ie);I===i.FLOAT&&($=i.RGBA32F),I===i.HALF_FLOAT&&($=i.RGBA16F),I===i.UNSIGNED_BYTE&&($=ve===Qe?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function D(M,_,I){return T(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==xt&&M.minFilter!==Ut?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function R(M){return M===xt||M===Ls||M===ca?i.NEAREST:i.LINEAR}function A(M){const _=M.target;_.removeEventListener("dispose",A),y(_),_.isVideoTexture&&u.delete(_)}function K(M){const _=M.target;_.removeEventListener("dispose",K),k(_)}function y(M){const _=r.get(M);if(_.__webglInit===void 0)return;const I=M.source,ie=d.get(I);if(ie){const Q=ie[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(M),Object.keys(ie).length===0&&d.delete(I)}r.remove(M)}function E(M){const _=r.get(M);i.deleteTexture(_.__webglTexture);const I=M.source,ie=d.get(I);delete ie[_.__cacheKey],o.memory.textures--}function k(M){const _=M.texture,I=r.get(M),ie=r.get(_);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(I.__webglFramebuffer[Q]))for(let $=0;$<I.__webglFramebuffer[Q].length;$++)i.deleteFramebuffer(I.__webglFramebuffer[Q][$]);else i.deleteFramebuffer(I.__webglFramebuffer[Q]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Q])}else{if(Array.isArray(I.__webglFramebuffer))for(let Q=0;Q<I.__webglFramebuffer.length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[Q]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Q=0;Q<I.__webglColorRenderbuffer.length;Q++)I.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Q]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,$=_.length;Q<$;Q++){const ve=r.get(_[Q]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),r.remove(_[Q])}r.remove(_),r.remove(M)}let G=0;function le(){G=0}function L(){const M=G;return M>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+n.maxTextures),G+=1,M}function z(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function V(M,_){const I=r.get(M);if(M.isVideoTexture&&$e(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const ie=M.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,M,_);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function j(M,_){const I=r.get(M);if(M.version>0&&I.__version!==M.version){me(I,M,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function X(M,_){const I=r.get(M);if(M.version>0&&I.__version!==M.version){me(I,M,_);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function W(M,_){const I=r.get(M);if(M.version>0&&I.__version!==M.version){ye(I,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const J={[oa]:i.REPEAT,[Vt]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},re={[xt]:i.NEAREST,[Ls]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Qc]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},he={[cu]:i.NEVER,[mu]:i.ALWAYS,[uu]:i.LESS,[fo]:i.LEQUAL,[hu]:i.EQUAL,[fu]:i.GEQUAL,[du]:i.GREATER,[pu]:i.NOTEQUAL};function B(M,_,I){if(I?(i.texParameteri(M,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,J[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,re[_.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Vt||_.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==xt&&_.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===xt||_.minFilter!==ca&&_.minFilter!==Ii||_.type===br&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===Dt&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||r.get(_).__currentAnisotropy)&&(i.texParameterf(M,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy)}}function Y(M,_){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));const ie=_.source;let Q=d.get(ie);Q===void 0&&(Q={},d.set(ie,Q));const $=z(_);if($!==M.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[$].usedTimes++;const ve=Q[M.__cacheKey];ve!==void 0&&(Q[M.__cacheKey].usedTimes--,ve.usedTimes===0&&E(_)),M.__cacheKey=$,M.__webglTexture=Q[$].texture}return I}function me(M,_,I){let ie=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=i.TEXTURE_3D);const Q=Y(M,_),$=_.source;t.bindTexture(ie,M.__webglTexture,i.TEXTURE0+I);const ve=r.get($);if($.version!==ve.__version||Q===!0){t.activeTexture(i.TEXTURE0+I);const ce=Ze.getPrimaries(Ze.workingColorSpace),pe=_.colorSpace===It?null:Ze.getPrimaries(_.colorSpace),Te=_.colorSpace===It||ce===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Fe=h(_)&&f(_.image)===!1;let Z=v(_.image,Fe,!1,n.maxTextureSize);Z=Oe(_,Z);const qe=f(Z)||s,ze=a.convert(_.format,_.colorSpace);let Pe=a.convert(_.type),Se=C(_.internalFormat,ze,Pe,_.colorSpace,_.isVideoTexture);B(ie,_,qe);let de;const S=_.mipmaps,ee=s&&_.isVideoTexture!==!0&&Se!==ks,xe=ve.__version===void 0||Q===!0,fe=D(_,Z,qe);if(_.isDepthTexture)Se=i.DEPTH_COMPONENT,s?_.type===br?Se=i.DEPTH_COMPONENT32F:_.type===xr?Se=i.DEPTH_COMPONENT24:_.type===Dr?Se=i.DEPTH24_STENCIL8:Se=i.DEPTH_COMPONENT16:_.type===br&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ir&&Se===i.DEPTH_COMPONENT&&_.type!==ua&&_.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=xr,Pe=a.convert(_.type)),_.format===ti&&Se===i.DEPTH_COMPONENT&&(Se=i.DEPTH_STENCIL,_.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Dr,Pe=a.convert(_.type))),xe&&(ee?t.texStorage2D(i.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Se,Z.width,Z.height,0,ze,Pe,null));else if(_.isDataTexture)if(S.length>0&&qe){ee&&xe&&t.texStorage2D(i.TEXTURE_2D,fe,Se,S[0].width,S[0].height);for(let te=0,w=S.length;te<w;te++)de=S[te],ee?t.texSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,ze,Pe,de.data):t.texImage2D(i.TEXTURE_2D,te,Se,de.width,de.height,0,ze,Pe,de.data);_.generateMipmaps=!1}else ee?(xe&&t.texStorage2D(i.TEXTURE_2D,fe,Se,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ze,Pe,Z.data)):t.texImage2D(i.TEXTURE_2D,0,Se,Z.width,Z.height,0,ze,Pe,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ee&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Se,S[0].width,S[0].height,Z.depth);for(let te=0,w=S.length;te<w;te++)de=S[te],_.format!==Wt?ze!==null?ee?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,Z.depth,ze,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Se,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,Z.depth,ze,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Se,de.width,de.height,Z.depth,0,ze,Pe,de.data)}else{ee&&xe&&t.texStorage2D(i.TEXTURE_2D,fe,Se,S[0].width,S[0].height);for(let te=0,w=S.length;te<w;te++)de=S[te],_.format!==Wt?ze!==null?ee?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,ze,de.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?t.texSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,ze,Pe,de.data):t.texImage2D(i.TEXTURE_2D,te,Se,de.width,de.height,0,ze,Pe,de.data)}else if(_.isDataArrayTexture)ee?(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ze,Pe,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,ze,Pe,Z.data);else if(_.isData3DTexture)ee?(xe&&t.texStorage3D(i.TEXTURE_3D,fe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ze,Pe,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,ze,Pe,Z.data);else if(_.isFramebufferTexture){if(xe)if(ee)t.texStorage2D(i.TEXTURE_2D,fe,Se,Z.width,Z.height);else{let te=Z.width,w=Z.height;for(let ne=0;ne<fe;ne++)t.texImage2D(i.TEXTURE_2D,ne,Se,te,w,0,ze,Pe,null),te>>=1,w>>=1}}else if(S.length>0&&qe){ee&&xe&&t.texStorage2D(i.TEXTURE_2D,fe,Se,S[0].width,S[0].height);for(let te=0,w=S.length;te<w;te++)de=S[te],ee?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ze,Pe,de):t.texImage2D(i.TEXTURE_2D,te,Se,ze,Pe,de);_.generateMipmaps=!1}else ee?(xe&&t.texStorage2D(i.TEXTURE_2D,fe,Se,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Pe,Z)):t.texImage2D(i.TEXTURE_2D,0,Se,ze,Pe,Z);T(_,qe)&&x(ie),ve.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ye(M,_,I){if(_.image.length!==6)return;const ie=Y(M,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+I);const $=r.get(Q);if(Q.version!==$.__version||ie===!0){t.activeTexture(i.TEXTURE0+I);const ve=Ze.getPrimaries(Ze.workingColorSpace),ce=_.colorSpace===It?null:Ze.getPrimaries(_.colorSpace),pe=_.colorSpace===It||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let te=0;te<6;te++)!Te&&!Fe?Z[te]=v(_.image[te],!1,!0,n.maxCubemapSize):Z[te]=Fe?_.image[te].image:_.image[te],Z[te]=Oe(_,Z[te]);const qe=Z[0],ze=f(qe)||s,Pe=a.convert(_.format,_.colorSpace),Se=a.convert(_.type),de=C(_.internalFormat,Pe,Se,_.colorSpace),S=s&&_.isVideoTexture!==!0,ee=$.__version===void 0||ie===!0;let xe=D(_,qe,ze);B(i.TEXTURE_CUBE_MAP,_,ze);let fe;if(Te){S&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,de,qe.width,qe.height);for(let te=0;te<6;te++){fe=Z[te].mipmaps;for(let w=0;w<fe.length;w++){const ne=fe[w];_.format!==Wt?Pe!==null?S?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,0,0,ne.width,ne.height,Pe,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,de,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,0,0,ne.width,ne.height,Pe,Se,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,de,ne.width,ne.height,0,Pe,Se,ne.data)}}}else{fe=_.mipmaps,S&&ee&&(fe.length>0&&xe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,de,Z[0].width,Z[0].height));for(let te=0;te<6;te++)if(Fe){S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Z[te].width,Z[te].height,Pe,Se,Z[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,Z[te].width,Z[te].height,0,Pe,Se,Z[te].data);for(let w=0;w<fe.length;w++){const ne=fe[w].image[te].image;S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,0,0,ne.width,ne.height,Pe,Se,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,de,ne.width,ne.height,0,Pe,Se,ne.data)}}else{S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,Se,Z[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,Pe,Se,Z[te]);for(let w=0;w<fe.length;w++){const ne=fe[w];S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,0,0,Pe,Se,ne.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,de,Pe,Se,ne.image[te])}}}T(_,ze)&&x(i.TEXTURE_CUBE_MAP),$.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function be(M,_,I,ie,Q,$){const ve=a.convert(I.format,I.colorSpace),ce=a.convert(I.type),pe=C(I.internalFormat,ve,ce,I.colorSpace);if(!r.get(_).__hasExternalTextures){const Te=Math.max(1,_.width>>$),Fe=Math.max(1,_.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,pe,Te,Fe,_.depth,0,ve,ce,null):t.texImage2D(Q,$,pe,Te,Fe,0,ve,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),ge(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Q,r.get(I).__webglTexture,0,Le(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,Q,r.get(I).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(M,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let ie=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||ge(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===br?ie=i.DEPTH_COMPONENT32F:Q.type===xr&&(ie=i.DEPTH_COMPONENT24));const $=Le(_);ge(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,ie,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,ie,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const ie=Le(_);I&&ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,_.width,_.height):ge(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ie=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<ie.length;Q++){const $=ie[Q],ve=a.convert($.format,$.colorSpace),ce=a.convert($.type),pe=C($.internalFormat,ve,ce,$.colorSpace),Te=Le(_);I&&ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,pe,_.width,_.height):ge(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const I=r.get(_.depthTexture).__webglTexture,ie=Le(_);if(_.depthTexture.format===Ir)ge(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(_.depthTexture.format===ti)ge(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ae(M){const _=r.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ne(_.__webglFramebuffer,M)}else if(I){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ie(_.__webglDepthbuffer[ie],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Ie(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(M,_,I){const ie=r.get(M);_!==void 0&&be(ie.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ae(M)}function O(M){const _=M.texture,I=r.get(M),ie=r.get(_);M.addEventListener("dispose",K),M.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=_.version,o.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,$=M.isWebGLMultipleRenderTargets===!0,ve=f(M)||s;if(Q){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let pe=0;pe<_.mipmaps.length;pe++)I.__webglFramebuffer[ce][pe]=i.createFramebuffer()}else I.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)I.__webglFramebuffer[ce]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if($)if(n.drawBuffers){const ce=M.texture;for(let pe=0,Te=ce.length;pe<Te;pe++){const Fe=r.get(ce[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&M.samples>0&&ge(M)===!1){const ce=$?_:[_];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<ce.length;pe++){const Te=ce[pe];I.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Fe=a.convert(Te.format,Te.colorSpace),Z=a.convert(Te.type),qe=C(Te.internalFormat,Fe,Z,Te.colorSpace,M.isXRRenderTarget===!0),ze=Le(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,qe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),B(i.TEXTURE_CUBE_MAP,_,ve);for(let ce=0;ce<6;ce++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)be(I.__webglFramebuffer[ce][pe],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else be(I.__webglFramebuffer[ce],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);T(_,ve)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const ce=M.texture;for(let pe=0,Te=ce.length;pe<Te;pe++){const Fe=ce[pe],Z=r.get(Fe);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),B(i.TEXTURE_2D,Fe,ve),be(I.__webglFramebuffer,M,Fe,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),T(Fe,ve)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(s?ce=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ie.__webglTexture),B(ce,_,ve),s&&_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)be(I.__webglFramebuffer[pe],M,_,i.COLOR_ATTACHMENT0,ce,pe);else be(I.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,ce,0);T(_,ve)&&x(ce),t.unbindTexture()}M.depthBuffer&&Ae(M)}function dt(M){const _=f(M)||s,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0,Q=I.length;ie<Q;ie++){const $=I[ie];if(T($,_)){const ve=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=r.get($).__webglTexture;t.bindTexture(ve,ce),x(ve),t.unbindTexture()}}}function Ee(M){if(s&&M.samples>0&&ge(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,ie=M.height;let Q=i.COLOR_BUFFER_BIT;const $=[],ve=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=r.get(M),pe=M.isWebGLMultipleRenderTargets===!0;if(pe)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){$.push(i.COLOR_ATTACHMENT0+Te),M.depthBuffer&&$.push(ve);const Fe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Fe===!1&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Te]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),pe){const Z=r.get(_[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,I,ie,0,0,I,ie,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Te]);const Fe=r.get(_[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(M){return Math.min(n.maxSamples,M.samples)}function ge(M){const _=r.get(M);return s&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $e(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function Oe(M,_){const I=M.colorSpace,ie=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===_a||I!==Nt&&I!==It&&(Ze.getTransfer(I)===Qe?s===!1?e.has("EXT_sRGB")===!0&&ie===Wt?(M.format=_a,M.minFilter=Ut,M.generateMipmaps=!1):_=Mo.sRGBToLinear(_):(ie!==Wt||Q!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=L,this.resetTextureUnits=le,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=O,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ge}function gm(i,e,t){const r=t.isWebGL2;function n(a,o=It){let s;const l=Ze.getTransfer(o);if(a===vr)return i.UNSIGNED_BYTE;if(a===Us)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Ds)return i.UNSIGNED_SHORT_5_5_5_1;if(a===$c)return i.BYTE;if(a===eu)return i.SHORT;if(a===ua)return i.UNSIGNED_SHORT;if(a===Ps)return i.INT;if(a===xr)return i.UNSIGNED_INT;if(a===br)return i.FLOAT;if(a===Dt)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===tu)return i.ALPHA;if(a===Wt)return i.RGBA;if(a===ru)return i.LUMINANCE;if(a===iu)return i.LUMINANCE_ALPHA;if(a===Ir)return i.DEPTH_COMPONENT;if(a===ti)return i.DEPTH_STENCIL;if(a===_a)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===nu)return i.RED;if(a===Is)return i.RED_INTEGER;if(a===au)return i.RG;if(a===Ns)return i.RG_INTEGER;if(a===Os)return i.RGBA_INTEGER;if(a===ha||a===da||a===pa||a===fa)if(l===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fs||a===Bs||a===zs||a===Hs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ks)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Gs||a===Vs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Gs)return l===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Vs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ws||a===Xs||a===js||a===qs||a===Ys||a===Ks||a===Zs||a===Js||a===Qs||a===$s||a===eo||a===to||a===ro||a===io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ws)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===js)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ys)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ks)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Js)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Qs)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===$s)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===eo)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===to)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ro)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===io)return l===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ma||a===no||a===ao)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===ma)return l===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===no)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===su||a===so||a===oo||a===lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(a===so)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Dr?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class _m extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vm={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,r),h=this._getHandJoint(c,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=u.position.distanceTo(m.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ei;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class xm extends Or{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,m=null,d=null,p=null,g=null;const v=t.getContextAttributes();let f=null,h=null;const T=[],x=[],C=new Me;let D=null;const R=new Ft;R.layers.enable(1),R.viewport=new lt;const A=new Ft;A.layers.enable(2),A.viewport=new lt;const K=[R,A],y=new _m;y.layers.enable(1),y.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=T[B];return Y===void 0&&(Y=new Za,T[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=T[B];return Y===void 0&&(Y=new Za,T[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=T[B];return Y===void 0&&(Y=new Za,T[B]=Y),Y.getHandSpace()};function G(B){const Y=x.indexOf(B.inputSource);if(Y===-1)return;const me=T[Y];me!==void 0&&(me.update(B.inputSource,B.frame,c||o),me.dispatchEvent({type:B.type,data:B.inputSource}))}function le(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",le),n.removeEventListener("inputsourceschange",L);for(let B=0;B<T.length;B++){const Y=x[B];Y!==null&&(x[B]=null,T[B].disconnect(Y))}E=null,k=null,e.setRenderTarget(f),p=null,d=null,m=null,n=null,h=null,he.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",le),n.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,Y),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new yt(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,me=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?ti:Ir,me=v.stencil?Dr:xr);const be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};m=new XRWebGLBinding(n,t),d=m.createProjectionLayer(be),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new yt(d.textureWidth,d.textureHeight,{format:Wt,type:vr,depthTexture:new Qo(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ie=e.properties.get(h);Ie.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),he.setContext(n),he.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(B){for(let Y=0;Y<B.removed.length;Y++){const me=B.removed[Y],ye=x.indexOf(me);ye>=0&&(x[ye]=null,T[ye].disconnect(me))}for(let Y=0;Y<B.added.length;Y++){const me=B.added[Y];let ye=x.indexOf(me);if(ye===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=x.length){x.push(me),ye=Ie;break}else if(x[Ie]===null){x[Ie]=me,ye=Ie;break}if(ye===-1)break}const be=T[ye];be&&be.connect(me)}}const z=new P,V=new P;function j(B,Y,me){z.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const ye=z.distanceTo(V),be=Y.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Ne=be[14]/(be[10]-1),Ae=be[14]/(be[10]+1),We=(be[9]+1)/be[5],O=(be[9]-1)/be[5],dt=(be[8]-1)/be[0],Ee=(Ie[8]+1)/Ie[0],Le=Ne*dt,ge=Ne*Ee,$e=ye/(-dt+Ee),Oe=$e*-dt;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Oe),B.translateZ($e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const M=Ne+$e,_=Ae+$e,I=Le-Oe,ie=ge+(ye-Oe),Q=We*Ae/_*M,$=O*Ae/_*M;B.projectionMatrix.makePerspective(I,ie,Q,$,M,_),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function X(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;y.near=A.near=R.near=B.near,y.far=A.far=R.far=B.far,(E!==y.near||k!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,k=y.far);const Y=B.parent,me=y.cameras;X(y,Y);for(let ye=0;ye<me.length;ye++)X(me[ye],Y);me.length===2?j(y,R,A):y.projectionMatrix.copy(R.projectionMatrix),W(B,y,Y)};function W(B,Y,me){me===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(me.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=va*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let J=null;function re(B,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ye=!1;me.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let be=0;be<me.length;be++){const Ie=me[be];let Ne=null;if(p!==null)Ne=p.getViewport(Ie);else{const We=m.getViewSubImage(d,Ie);Ne=We.viewport,be===0&&(e.setRenderTargetTextures(h,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(h))}let Ae=K[be];Ae===void 0&&(Ae=new Ft,Ae.layers.enable(be),Ae.viewport=new lt,K[be]=Ae),Ae.matrix.fromArray(Ie.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ie.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),be===0&&(y.matrix.copy(Ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(Ae)}}for(let me=0;me<T.length;me++){const ye=x[me],be=T[me];ye!==null&&be!==void 0&&be.update(ye,Y,c||o)}J&&J(B,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),g=null}const he=new Wo;he.setAnimationLoop(re),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function bm(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function r(f,h){h.color.getRGB(f.fogColor.value,ko(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function n(f,h,T,x,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(f,h):h.isMeshToonMaterial?(a(f,h),m(f,h)):h.isMeshPhongMaterial?(a(f,h),u(f,h)):h.isMeshStandardMaterial?(a(f,h),d(f,h),h.isMeshPhysicalMaterial&&p(f,h,C)):h.isMeshMatcapMaterial?(a(f,h),g(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),v(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&s(f,h)):h.isPointsMaterial?l(f,h,T,x):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Tt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Tt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const T=e.get(h).envMap;if(T&&(f.envMap.value=T,f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function s(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,T,x){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*T,f.scale.value=x*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function m(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,T){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const T=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function ym(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,x){const C=x.program;r.uniformBlockBinding(T,C)}function c(T,x){let C=n[T.id];C===void 0&&(g(T),C=u(T),n[T.id]=C,T.addEventListener("dispose",f));const D=x.program;r.updateUBOMapping(T,D);const R=e.render.frame;a[T.id]!==R&&(d(T),a[T.id]=R)}function u(T){const x=m();T.__bindingPointIndex=x;const C=i.createBuffer(),D=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,C),C}function m(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const x=n[T.id],C=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=C.length;R<A;R++){const K=Array.isArray(C[R])?C[R]:[C[R]];for(let y=0,E=K.length;y<E;y++){const k=K[y];if(p(k,R,y,D)===!0){const G=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let z=0;z<le.length;z++){const V=le[z],j=v(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,x,C,D){const R=T.value,A=x+"_"+C;if(D[A]===void 0)return typeof R=="number"||typeof R=="boolean"?D[A]=R:D[A]=R.clone(),!0;{const K=D[A];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return D[A]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function g(T){const x=T.uniforms;let C=0;const D=16;for(let A=0,K=x.length;A<K;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,k=y.length;E<k;E++){const G=y[E],le=Array.isArray(G.value)?G.value:[G.value];for(let L=0,z=le.length;L<z;L++){const V=le[L],j=v(V),X=C%D;X!==0&&D-X<j.boundary&&(C+=D-X),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=C,C+=j.storage}}}const R=C%D;return R>0&&(C+=D-R),T.__size=C,T.__cache={},this}function v(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function f(T){const x=T.target;x.removeEventListener("dispose",f);const C=o.indexOf(x.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function h(){for(const T in n)i.deleteBuffer(n[T]);o=[],n={},a={}}return{bind:l,update:c,dispose:h}}class bl{constructor(e={}){const{canvas:t=vu(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const x=this;let C=!1,D=0,R=0,A=null,K=-1,y=null;const E=new lt,k=new lt;let G=null;const le=new Re(0);let L=0,z=t.width,V=t.height,j=1,X=null,W=null;const J=new lt(0,0,z,V),re=new lt(0,0,z,V);let he=!1;const B=new ka;let Y=!1,me=!1,ye=null;const be=new et,Ie=new Me,Ne=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?j:1}let O=r;function dt(b,U){for(let F=0;F<b.length;F++){const H=b[F],N=t.getContext(H,U);if(N!==null)return N}return null}try{const b={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",ne,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),O=dt(U,b),O===null)throw dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,Le,ge,$e,Oe,M,_,I,ie,Q,$,ve,ce,pe,Te,Fe,Z,qe,ze,Pe,Se,de,S,ee;function xe(){Ee=new Pp(O),Le=new Tp(O,Ee,e),Ee.init(Le),de=new gm(O,Ee,Le),ge=new fm(O,Ee,Le),$e=new Ip(O),Oe=new tm,M=new mm(O,Ee,ge,Oe,Le,de,$e),_=new Ap(x),I=new Lp(x),ie=new Gu(O,Le),S=new Sp(O,Ee,ie,Le),Q=new Up(O,ie,$e,S),$=new Bp(O,Q,ie,$e),ze=new Fp(O,Le,M),Fe=new wp(Oe),ve=new em(x,_,I,Ee,Le,S,Fe),ce=new bm(x,Oe),pe=new im,Te=new cm(Ee,Le),qe=new Mp(x,_,I,ge,$,d,l),Z=new pm(x,$,Le),ee=new ym(O,$e,Le,ge),Pe=new Ep(O,Ee,$e,Le),Se=new Dp(O,Ee,$e,Le),$e.programs=ve.programs,x.capabilities=Le,x.extensions=Ee,x.properties=Oe,x.renderLists=pe,x.shadowMap=Z,x.state=ge,x.info=$e}xe();const fe=new xm(x,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(z,V,!1))},this.getSize=function(b){return b.set(z,V)},this.setSize=function(b,U,F=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,V=U,t.width=Math.floor(b*j),t.height=Math.floor(U*j),F===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(z*j,V*j).floor()},this.setDrawingBufferSize=function(b,U,F){z=b,V=U,j=F,t.width=Math.floor(b*F),t.height=Math.floor(U*F),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,U,F,H){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,U,F,H),ge.viewport(E.copy(J).multiplyScalar(j).floor())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,U,F,H){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,U,F,H),ge.scissor(k.copy(re).multiplyScalar(j).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){ge.setScissorTest(he=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(b=!0,U=!0,F=!0){let H=0;if(b){let N=!1;if(A!==null){const oe=A.texture.format;N=oe===Os||oe===Ns||oe===Is}if(N){const oe=A.texture.type,we=oe===vr||oe===xr||oe===ua||oe===Dr||oe===Us||oe===Ds,Ce=qe.getClearColor(),De=qe.getClearAlpha(),je=Ce.r,He=Ce.g,ke=Ce.b;we?(p[0]=je,p[1]=He,p[2]=ke,p[3]=De,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=je,g[1]=He,g[2]=ke,g[3]=De,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT),F&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),pe.dispose(),Te.dispose(),Oe.dispose(),_.dispose(),I.dispose(),$.dispose(),S.dispose(),ee.dispose(),ve.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ht),fe.removeEventListener("sessionend",Ye),ye&&(ye.dispose(),ye=null),Et.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=$e.autoReset,U=Z.enabled,F=Z.autoUpdate,H=Z.needsUpdate,N=Z.type;xe(),$e.autoReset=b,Z.enabled=U,Z.autoUpdate=F,Z.needsUpdate=H,Z.type=N}function ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const U=b.target;U.removeEventListener("dispose",ue),Ue(U)}function Ue(b){_e(b),Oe.remove(b)}function _e(b){const U=Oe.get(b).programs;U!==void 0&&(U.forEach(function(F){ve.releaseProgram(F)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,F,H,N,oe){U===null&&(U=Ae);const we=N.isMesh&&N.matrixWorld.determinant()<0,Ce=Jv(b,U,F,H,N);ge.setMaterial(H,we);let De=F.index,je=1;if(H.wireframe===!0){if(De=Q.getWireframeAttribute(F),De===void 0)return;je=2}const He=F.drawRange,ke=F.attributes.position;let _t=He.start*je,st=(He.start+He.count)*je;oe!==null&&(_t=Math.max(_t,oe.start*je),st=Math.min(st,(oe.start+oe.count)*je)),De!==null?(_t=Math.max(_t,0),st=Math.min(st,De.count)):ke!=null&&(_t=Math.max(_t,0),st=Math.min(st,ke.count));const zt=st-_t;if(zt<0||zt===1/0)return;S.setup(N,H,Ce,F,De);let mr,rt=Pe;if(De!==null&&(mr=ie.get(De),rt=Se,rt.setIndex(mr)),N.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*We()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(N.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),ge.setLineWidth(Ve*We()),N.isLineSegments?rt.setMode(O.LINES):N.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else N.isPoints?rt.setMode(O.POINTS):N.isSprite&&rt.setMode(O.TRIANGLES);if(N.isBatchedMesh)rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)rt.renderInstances(_t,zt,N.count);else if(F.isInstancedBufferGeometry){const Ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,_s=Math.min(F.instanceCount,Ve);rt.renderInstances(_t,zt,_s)}else rt.render(_t,zt)};function Xe(b,U,F){b.transparent===!0&&b.side===kt&&b.forceSinglePass===!1?(b.side=Tt,b.needsUpdate=!0,Qn(b,U,F),b.side=gr,b.needsUpdate=!0,Qn(b,U,F),b.side=kt):Qn(b,U,F)}this.compile=function(b,U,F=null){F===null&&(F=b),f=Te.get(F),f.init(),T.push(f),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==F&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(x._useLegacyLights);const H=new Set;return b.traverse(function(N){const oe=N.material;if(oe)if(Array.isArray(oe))for(let we=0;we<oe.length;we++){const Ce=oe[we];Xe(Ce,F,N),H.add(Ce)}else Xe(oe,F,N),H.add(oe)}),T.pop(),f=null,H},this.compileAsync=function(b,U,F=null){const H=this.compile(b,U,F);return new Promise(N=>{function oe(){if(H.forEach(function(we){Oe.get(we).currentProgram.isReady()&&H.delete(we)}),H.size===0){N(b);return}setTimeout(oe,10)}Ee.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ke=null;function Je(b){Ke&&Ke(b)}function ht(){Et.stop()}function Ye(){Et.start()}const Et=new Wo;Et.setAnimationLoop(Je),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(b){Ke=b,fe.setAnimationLoop(b),b===null?Et.stop():Et.start()},fe.addEventListener("sessionstart",ht),fe.addEventListener("sessionend",Ye),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),f=Te.get(b,T.length),f.init(),T.push(f),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(be),me=this.localClippingEnabled,Y=Fe.init(this.clippingPlanes,me),v=pe.get(b,h.length),v.init(),h.push(v),tr(b,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,W),this.info.render.frame++,Y===!0&&Fe.beginShadows();const F=f.state.shadowsArray;if(Z.render(F,b,U),Y===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(v,b),f.setupLights(x._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let N=0,oe=H.length;N<oe;N++){const we=H[N];dc(v,b,we,we.viewport)}}else dc(v,b,U);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),S.resetDefaultState(),K=-1,y=null,T.pop(),T.length>0?f=T[T.length-1]:f=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function tr(b,U,F,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){H&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const oe=$.update(b),we=b.material;we.visible&&v.push(b,oe,we,F,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){const oe=$.update(b),we=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ne.copy(oe.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(we)){const Ce=oe.groups;for(let De=0,je=Ce.length;De<je;De++){const He=Ce[De],ke=we[He.materialIndex];ke&&ke.visible&&v.push(b,oe,ke,F,Ne.z,He)}}else we.visible&&v.push(b,oe,we,F,Ne.z,null)}}const N=b.children;for(let oe=0,we=N.length;oe<we;oe++)tr(N[oe],U,F,H)}function dc(b,U,F,H){const N=b.opaque,oe=b.transmissive,we=b.transparent;f.setupLightsView(F),Y===!0&&Fe.setGlobalState(x.clippingPlanes,F),oe.length>0&&Zv(N,oe,U,F),H&&ge.viewport(E.copy(H)),N.length>0&&Jn(N,U,F),oe.length>0&&Jn(oe,U,F),we.length>0&&Jn(we,U,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Zv(b,U,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const N=Le.isWebGL2;ye===null&&(ye=new yt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Dt:vr,minFilter:Ii,samples:N?4:0})),x.getDrawingBufferSize(Ie),N?ye.setSize(Ie.x,Ie.y):ye.setSize(ba(Ie.x),ba(Ie.y));const oe=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(le),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=_r,Jn(b,F,H),M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye);let Ce=!1;for(let De=0,je=U.length;De<je;De++){const He=U[De],ke=He.object,_t=He.geometry,st=He.material,zt=He.group;if(st.side===kt&&ke.layers.test(H.layers)){const mr=st.side;st.side=Tt,st.needsUpdate=!0,pc(ke,F,H,_t,st,zt),st.side=mr,st.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye)),x.setRenderTarget(oe),x.setClearColor(le,L),x.toneMapping=we}function Jn(b,U,F){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,oe=b.length;N<oe;N++){const we=b[N],Ce=we.object,De=we.geometry,je=H===null?we.material:H,He=we.group;Ce.layers.test(F.layers)&&pc(Ce,U,F,De,je,He)}}function pc(b,U,F,H,N,oe){b.onBeforeRender(x,U,F,H,N,oe),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,F,H,b,oe),N.transparent===!0&&N.side===kt&&N.forceSinglePass===!1?(N.side=Tt,N.needsUpdate=!0,x.renderBufferDirect(F,U,H,N,b,oe),N.side=gr,N.needsUpdate=!0,x.renderBufferDirect(F,U,H,N,b,oe),N.side=kt):x.renderBufferDirect(F,U,H,N,b,oe),b.onAfterRender(x,U,F,H,N,oe)}function Qn(b,U,F){U.isScene!==!0&&(U=Ae);const H=Oe.get(b),N=f.state.lights,oe=f.state.shadowsArray,we=N.state.version,Ce=ve.getParameters(b,N.state,oe,U,F),De=ve.getProgramCacheKey(Ce);let je=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?I:_).get(b.envMap||H.environment),je===void 0&&(b.addEventListener("dispose",ue),je=new Map,H.programs=je);let He=je.get(De);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===we)return mc(b,Ce),He}else Ce.uniforms=ve.getUniforms(b),b.onBuild(F,Ce,x),b.onBeforeCompile(Ce,x),He=ve.acquireProgram(Ce,De),je.set(De,He),H.uniforms=Ce.uniforms;const ke=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Fe.uniform),mc(b,Ce),H.needsLights=$v(b),H.lightsStateVersion=we,H.needsLights&&(ke.ambientLightColor.value=N.state.ambient,ke.lightProbe.value=N.state.probe,ke.directionalLights.value=N.state.directional,ke.directionalLightShadows.value=N.state.directionalShadow,ke.spotLights.value=N.state.spot,ke.spotLightShadows.value=N.state.spotShadow,ke.rectAreaLights.value=N.state.rectArea,ke.ltc_1.value=N.state.rectAreaLTC1,ke.ltc_2.value=N.state.rectAreaLTC2,ke.pointLights.value=N.state.point,ke.pointLightShadows.value=N.state.pointShadow,ke.hemisphereLights.value=N.state.hemi,ke.directionalShadowMap.value=N.state.directionalShadowMap,ke.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ke.spotShadowMap.value=N.state.spotShadowMap,ke.spotLightMatrix.value=N.state.spotLightMatrix,ke.spotLightMap.value=N.state.spotLightMap,ke.pointShadowMap.value=N.state.pointShadowMap,ke.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function fc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=In.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function mc(b,U){const F=Oe.get(b);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function Jv(b,U,F,H,N){U.isScene!==!0&&(U=Ae),M.resetTextureUnits();const oe=U.fog,we=H.isMeshStandardMaterial?U.environment:null,Ce=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nt,De=(H.isMeshStandardMaterial?I:_).get(H.envMap||we),je=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,He=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!F.morphAttributes.position,_t=!!F.morphAttributes.normal,st=!!F.morphAttributes.color;let zt=_r;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(zt=x.toneMapping);const mr=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=mr!==void 0?mr.length:0,Ve=Oe.get(H),_s=f.state.lights;if(Y===!0&&(me===!0||b!==y)){const Ht=b===y&&H.id===K;Fe.setState(H,b,Ht)}let vs=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==_s.state.version||Ve.outputColorSpace!==Ce||N.isBatchedMesh&&Ve.batching===!1||!N.isBatchedMesh&&Ve.batching===!0||N.isInstancedMesh&&Ve.instancing===!1||!N.isInstancedMesh&&Ve.instancing===!0||N.isSkinnedMesh&&Ve.skinning===!1||!N.isSkinnedMesh&&Ve.skinning===!0||N.isInstancedMesh&&Ve.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ve.instancingColor===!1&&N.instanceColor!==null||Ve.envMap!==De||H.fog===!0&&Ve.fog!==oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==He||Ve.morphTargets!==ke||Ve.morphNormals!==_t||Ve.morphColors!==st||Ve.toneMapping!==zt||Le.isWebGL2===!0&&Ve.morphTargetsCount!==rt)&&(vs=!0):(vs=!0,Ve.__version=H.version);let Yr=Ve.currentProgram;vs===!0&&(Yr=Qn(H,U,N));let gc=!1,Ki=!1,xs=!1;const vt=Yr.getUniforms(),Kr=Ve.uniforms;if(ge.useProgram(Yr.program)&&(gc=!0,Ki=!0,xs=!0),H.id!==K&&(K=H.id,Ki=!0),gc||y!==b){vt.setValue(O,"projectionMatrix",b.projectionMatrix),vt.setValue(O,"viewMatrix",b.matrixWorldInverse);const Ht=vt.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,Ne.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ki=!0,xs=!0)}if(N.isSkinnedMesh){vt.setOptional(O,N,"bindMatrix"),vt.setOptional(O,N,"bindMatrixInverse");const Ht=N.skeleton;Ht&&(Le.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(O,"boneTexture",Ht.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(vt.setOptional(O,N,"batchingTexture"),vt.setValue(O,"batchingTexture",N._matricesTexture,M));const bs=F.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&Le.isWebGL2===!0)&&ze.update(N,F,Yr),(Ki||Ve.receiveShadow!==N.receiveShadow)&&(Ve.receiveShadow=N.receiveShadow,vt.setValue(O,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kr.envMap.value=De,Kr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ki&&(vt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Qv(Kr,xs),oe&&H.fog===!0&&ce.refreshFogUniforms(Kr,oe),ce.refreshMaterialUniforms(Kr,H,j,V,ye),In.upload(O,fc(Ve),Kr,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(In.upload(O,fc(Ve),Kr,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(O,"center",N.center),vt.setValue(O,"modelViewMatrix",N.modelViewMatrix),vt.setValue(O,"normalMatrix",N.normalMatrix),vt.setValue(O,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let ys=0,e0=Ht.length;ys<e0;ys++)if(Le.isWebGL2){const _c=Ht[ys];ee.update(_c,Yr),ee.bind(_c,Yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yr}function Qv(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function $v(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,F){Oe.get(b.texture).__webglTexture=U,Oe.get(b.depthTexture).__webglTexture=F;const H=Oe.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=F===void 0,H.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){const F=Oe.get(b);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,F=0){A=b,D=U,R=F;let H=!0,N=null,oe=!1,we=!1;if(b){const Ce=Oe.get(b);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(b):Ce.__hasExternalTextures&&M.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);const je=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[U])?N=je[U][F]:N=je[U],oe=!0):Le.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?N=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?N=je[F]:N=je,E.copy(b.viewport),k.copy(b.scissor),G=b.scissorTest}else E.copy(J).multiplyScalar(j).floor(),k.copy(re).multiplyScalar(j).floor(),G=he;if(ge.bindFramebuffer(O.FRAMEBUFFER,N)&&Le.drawBuffers&&H&&ge.drawBuffers(b,N),ge.viewport(E),ge.scissor(k),ge.setScissorTest(G),oe){const Ce=Oe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,F)}else if(we){const Ce=Oe.get(b.texture),De=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,F||0,De)}K=-1},this.readRenderTargetPixels=function(b,U,F,H,N,oe,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ge.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const De=b.texture,je=De.format,He=De.type;if(je!==Wt&&de.convert(je)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=He===Dt&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(He!==vr&&de.convert(He)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===br&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&F>=0&&F<=b.height-N&&O.readPixels(U,F,H,N,de.convert(je),de.convert(He),oe)}finally{const De=A!==null?Oe.get(A).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(b,U,F=0){const H=Math.pow(2,-F),N=Math.floor(U.image.width*H),oe=Math.floor(U.image.height*H);M.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,F,0,0,b.x,b.y,N,oe),ge.unbindTexture()},this.copyTextureToTexture=function(b,U,F,H=0){const N=U.image.width,oe=U.image.height,we=de.convert(F.format),Ce=de.convert(F.type);M.setTexture2D(F,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,b.x,b.y,N,oe,we,Ce,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,we,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,b.x,b.y,we,Ce,U.image),H===0&&F.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,U,F,H,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,De=de.convert(H.format),je=de.convert(H.type);let He;if(H.isData3DTexture)M.setTexture3D(H,0),He=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)M.setTexture2DArray(H,0),He=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const ke=O.getParameter(O.UNPACK_ROW_LENGTH),_t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),st=O.getParameter(O.UNPACK_SKIP_PIXELS),zt=O.getParameter(O.UNPACK_SKIP_ROWS),mr=O.getParameter(O.UNPACK_SKIP_IMAGES),rt=F.isCompressedTexture?F.mipmaps[N]:F.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),F.isDataTexture||F.isData3DTexture?O.texSubImage3D(He,N,U.x,U.y,U.z,oe,we,Ce,De,je,rt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(He,N,U.x,U.y,U.z,oe,we,Ce,De,rt.data)):O.texSubImage3D(He,N,U.x,U.y,U.z,oe,we,Ce,De,je,rt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,st),O.pixelStorei(O.UNPACK_SKIP_ROWS,zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,mr),N===0&&H.generateMipmaps&&O.generateMipmap(He),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){D=0,R=0,A=null,ge.reset(),S.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ga?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===$i?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Nr:co}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?ot:Nt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Mm extends bl{}Mm.prototype.isWebGL1Renderer=!0;class Sm extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ja extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yl=new P,Ml=new P,Sl=new et,Qa=new fn,Nn=new hn;class Em extends ct{constructor(e=new Kt,t=new Ja){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,a=t.count;n<a;n++)yl.fromBufferAttribute(t,n-1),Ml.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=yl.distanceTo(Ml);e.setAttribute("lineDistance",new Mt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nn.copy(r.boundingSphere),Nn.applyMatrix4(n),Nn.radius+=a,e.ray.intersectsSphere(Nn)===!1)return;Sl.copy(n).invert(),Qa.copy(e.ray).applyMatrix4(Sl);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new P,u=new P,m=new P,d=new P,p=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const f=Math.max(0,o.start),h=Math.min(g.count,o.start+o.count);for(let T=f,x=h-1;T<x;T+=p){const C=g.getX(T),D=g.getX(T+1);if(c.fromBufferAttribute(v,C),u.fromBufferAttribute(v,D),Qa.distanceSqToSegment(c,u,d,m)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:m.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),h=Math.min(v.count,o.start+o.count);for(let T=f,x=h-1;T<x;T+=p){if(c.fromBufferAttribute(v,T),u.fromBufferAttribute(v,T+1),Qa.distanceSqToSegment(c,u,d,m)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:m.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}const El=new P,Tl=new P;class wl extends Em{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,a=t.count;n<a;n+=2)El.fromBufferAttribute(t,n),Tl.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+El.distanceTo(Tl);e.setAttribute("lineDistance",new Mt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cr extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Al extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Tm extends Al{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $a=new et,Rl=new P,Cl=new P;class wm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Am extends wm{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends Al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Am}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ll();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ll(){return(typeof performance>"u"?Date:performance).now()}class Lm{constructor(e,t,r=0,n=1/0){this.ray=new fn(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return es(e,this,r,t),r.sort(Pl),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)es(e[n],this,r,t);return r.sort(Pl),r}}function Pl(i,e){return i.distance-e.distance}function es(i,e,t,r){if(i.layers.test(e.layers)&&i.raycast(e,t),r===!0){const n=i.children;for(let a=0,o=n.length;a<o;a++)es(n[a],e,t,!0)}}class Ul{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pm extends wl{constructor(e=10,t=10,r=4473924,n=8947848){r=new Re(r),n=new Re(n);const a=t/2,o=e/t,s=e/2,l=[],c=[];for(let d=0,p=0,g=-s;d<=t;d++,g+=o){l.push(-s,0,g,s,0,g),l.push(g,0,-s,g,0,s);const v=d===a?r:n;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Kt;u.setAttribute("position",new Mt(l,3)),u.setAttribute("color",new Mt(c,3));const m=new Ja({vertexColors:!0,toneMapped:!1});super(u,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Um extends wl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Kt;n.setAttribute("position",new Mt(t,3)),n.setAttribute("color",new Mt(r,3));const a=new Ja({vertexColors:!0,toneMapped:!1});super(n,a),this.type="AxesHelper"}setColors(e,t,r){const n=new Re,a=this.geometry.attributes.color.array;return n.set(e),n.toArray(a,0),n.toArray(a,3),n.set(t),n.toArray(a,6),n.toArray(a,9),n.set(r),n.toArray(a,12),n.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);const Ti=document.getElementById("c");Ti.getContext("webgl2");const Dl={type:"change"},ts={type:"start"},Il={type:"end"},On=new fn,Nl=new wr,Dm=Math.cos(70*_u.DEG2RAD);class Im extends Or{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Jr.ROTATE,TWO:Jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Te),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Dl),r.update(),a=n.NONE},this.update=function(){const S=new P,ee=new Fr().setFromUnitVectors(e.up,new P(0,1,0)),xe=ee.clone().invert(),fe=new P,te=new Fr,w=new P,ne=2*Math.PI;return function(ue=null){const Ue=r.object.position;S.copy(Ue).sub(r.target),S.applyQuaternion(ee),s.setFromVector3(S),r.autoRotate&&a===n.NONE&&G(E(ue)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let _e=r.minAzimuthAngle,Xe=r.maxAzimuthAngle;isFinite(_e)&&isFinite(Xe)&&(_e<-Math.PI?_e+=ne:_e>Math.PI&&(_e-=ne),Xe<-Math.PI?Xe+=ne:Xe>Math.PI&&(Xe-=ne),_e<=Xe?s.theta=Math.max(_e,Math.min(Xe,s.theta)):s.theta=s.theta>(_e+Xe)/2?Math.max(_e,s.theta):Math.min(Xe,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(u,r.dampingFactor):r.target.add(u),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&R||r.object.isOrthographicCamera?s.radius=J(s.radius):s.radius=J(s.radius*c),S.setFromSpherical(s),S.applyQuaternion(xe),Ue.copy(r.target).add(S),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,u.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ke=!1;if(r.zoomToCursor&&R){let Je=null;if(r.object.isPerspectiveCamera){const ht=S.length();Je=J(ht*c);const Ye=ht-Je;r.object.position.addScaledVector(C,Ye),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const ht=new P(D.x,D.y,0);ht.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),Ke=!0;const Ye=new P(D.x,D.y,0);Ye.unproject(r.object),r.object.position.sub(Ye).add(ht),r.object.updateMatrixWorld(),Je=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Je!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Je).add(r.object.position):(On.origin.copy(r.object.position),On.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(On.direction))<Dm?e.lookAt(r.target):(Nl.setFromNormalAndCoplanarPoint(r.object.up,r.target),On.intersectPlane(Nl,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),Ke=!0);return c=1,R=!1,Ke||fe.distanceToSquared(r.object.position)>o||8*(1-te.dot(r.object.quaternion))>o||w.distanceToSquared(r.target)>0?(r.dispatchEvent(Dl),fe.copy(r.object.position),te.copy(r.object.quaternion),w.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",qe),r.domElement.removeEventListener("pointerdown",M),r.domElement.removeEventListener("pointercancel",I),r.domElement.removeEventListener("wheel",$),r.domElement.removeEventListener("pointermove",_),r.domElement.removeEventListener("pointerup",I),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Te),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new Ul,l=new Ul;let c=1;const u=new P,m=new Me,d=new Me,p=new Me,g=new Me,v=new Me,f=new Me,h=new Me,T=new Me,x=new Me,C=new P,D=new Me;let R=!1;const A=[],K={};let y=!1;function E(S){return S!==null?2*Math.PI/60*r.autoRotateSpeed*S:2*Math.PI/60/60*r.autoRotateSpeed}function k(S){const ee=Math.abs(S*.01);return Math.pow(.95,r.zoomSpeed*ee)}function G(S){l.theta-=S}function le(S){l.phi-=S}const L=function(){const S=new P;return function(ee,xe){S.setFromMatrixColumn(xe,0),S.multiplyScalar(-ee),u.add(S)}}(),z=function(){const S=new P;return function(ee,xe){r.screenSpacePanning===!0?S.setFromMatrixColumn(xe,1):(S.setFromMatrixColumn(xe,0),S.crossVectors(r.object.up,S)),S.multiplyScalar(ee),u.add(S)}}(),V=function(){const S=new P;return function(ee,xe){const fe=r.domElement;if(r.object.isPerspectiveCamera){const te=r.object.position;S.copy(te).sub(r.target);let w=S.length();w*=Math.tan(r.object.fov/2*Math.PI/180),L(2*ee*w/fe.clientHeight,r.object.matrix),z(2*xe*w/fe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(L(ee*(r.object.right-r.object.left)/r.object.zoom/fe.clientWidth,r.object.matrix),z(xe*(r.object.top-r.object.bottom)/r.object.zoom/fe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function j(S){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function X(S){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function W(S,ee){if(!r.zoomToCursor)return;R=!0;const xe=r.domElement.getBoundingClientRect(),fe=S-xe.left,te=ee-xe.top,w=xe.width,ne=xe.height;D.x=fe/w*2-1,D.y=-(te/ne)*2+1,C.set(D.x,D.y,1).unproject(r.object).sub(r.object.position).normalize()}function J(S){return Math.max(r.minDistance,Math.min(r.maxDistance,S))}function re(S){m.set(S.clientX,S.clientY)}function he(S){W(S.clientX,S.clientX),h.set(S.clientX,S.clientY)}function B(S){g.set(S.clientX,S.clientY)}function Y(S){d.set(S.clientX,S.clientY),p.subVectors(d,m).multiplyScalar(r.rotateSpeed);const ee=r.domElement;G(2*Math.PI*p.x/ee.clientHeight),le(2*Math.PI*p.y/ee.clientHeight),m.copy(d),r.update()}function me(S){T.set(S.clientX,S.clientY),x.subVectors(T,h),x.y>0?j(k(x.y)):x.y<0&&X(k(x.y)),h.copy(T),r.update()}function ye(S){v.set(S.clientX,S.clientY),f.subVectors(v,g).multiplyScalar(r.panSpeed),V(f.x,f.y),g.copy(v),r.update()}function be(S){W(S.clientX,S.clientY),S.deltaY<0?X(k(S.deltaY)):S.deltaY>0&&j(k(S.deltaY)),r.update()}function Ie(S){let ee=!1;switch(S.code){case r.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?le(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,r.keyPanSpeed),ee=!0;break;case r.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?le(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,-r.keyPanSpeed),ee=!0;break;case r.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?G(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(r.keyPanSpeed,0),ee=!0;break;case r.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?G(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(-r.keyPanSpeed,0),ee=!0;break}ee&&(S.preventDefault(),r.update())}function Ne(S){if(A.length===1)m.set(S.pageX,S.pageY);else{const ee=de(S),xe=.5*(S.pageX+ee.x),fe=.5*(S.pageY+ee.y);m.set(xe,fe)}}function Ae(S){if(A.length===1)g.set(S.pageX,S.pageY);else{const ee=de(S),xe=.5*(S.pageX+ee.x),fe=.5*(S.pageY+ee.y);g.set(xe,fe)}}function We(S){const ee=de(S),xe=S.pageX-ee.x,fe=S.pageY-ee.y,te=Math.sqrt(xe*xe+fe*fe);h.set(0,te)}function O(S){r.enableZoom&&We(S),r.enablePan&&Ae(S)}function dt(S){r.enableZoom&&We(S),r.enableRotate&&Ne(S)}function Ee(S){if(A.length==1)d.set(S.pageX,S.pageY);else{const xe=de(S),fe=.5*(S.pageX+xe.x),te=.5*(S.pageY+xe.y);d.set(fe,te)}p.subVectors(d,m).multiplyScalar(r.rotateSpeed);const ee=r.domElement;G(2*Math.PI*p.x/ee.clientHeight),le(2*Math.PI*p.y/ee.clientHeight),m.copy(d)}function Le(S){if(A.length===1)v.set(S.pageX,S.pageY);else{const ee=de(S),xe=.5*(S.pageX+ee.x),fe=.5*(S.pageY+ee.y);v.set(xe,fe)}f.subVectors(v,g).multiplyScalar(r.panSpeed),V(f.x,f.y),g.copy(v)}function ge(S){const ee=de(S),xe=S.pageX-ee.x,fe=S.pageY-ee.y,te=Math.sqrt(xe*xe+fe*fe);T.set(0,te),x.set(0,Math.pow(T.y/h.y,r.zoomSpeed)),j(x.y),h.copy(T);const w=(S.pageX+ee.x)*.5,ne=(S.pageY+ee.y)*.5;W(w,ne)}function $e(S){r.enableZoom&&ge(S),r.enablePan&&Le(S)}function Oe(S){r.enableZoom&&ge(S),r.enableRotate&&Ee(S)}function M(S){r.enabled!==!1&&(A.length===0&&(r.domElement.setPointerCapture(S.pointerId),r.domElement.addEventListener("pointermove",_),r.domElement.addEventListener("pointerup",I)),ze(S),S.pointerType==="touch"?Fe(S):ie(S))}function _(S){r.enabled!==!1&&(S.pointerType==="touch"?Z(S):Q(S))}function I(S){Pe(S),A.length===0&&(r.domElement.releasePointerCapture(S.pointerId),r.domElement.removeEventListener("pointermove",_),r.domElement.removeEventListener("pointerup",I)),r.dispatchEvent(Il),a=n.NONE}function ie(S){let ee;switch(S.button){case 0:ee=r.mouseButtons.LEFT;break;case 1:ee=r.mouseButtons.MIDDLE;break;case 2:ee=r.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Zr.DOLLY:if(r.enableZoom===!1)return;he(S),a=n.DOLLY;break;case Zr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(r.enablePan===!1)return;B(S),a=n.PAN}else{if(r.enableRotate===!1)return;re(S),a=n.ROTATE}break;case Zr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(r.enableRotate===!1)return;re(S),a=n.ROTATE}else{if(r.enablePan===!1)return;B(S),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(ts)}function Q(S){switch(a){case n.ROTATE:if(r.enableRotate===!1)return;Y(S);break;case n.DOLLY:if(r.enableZoom===!1)return;me(S);break;case n.PAN:if(r.enablePan===!1)return;ye(S);break}}function $(S){r.enabled===!1||r.enableZoom===!1||a!==n.NONE||(S.preventDefault(),r.dispatchEvent(ts),be(ve(S)),r.dispatchEvent(Il))}function ve(S){const ee=S.deltaMode,xe={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(ee){case 1:xe.deltaY*=16;break;case 2:xe.deltaY*=100;break}return S.ctrlKey&&!y&&(xe.deltaY*=10),xe}function ce(S){S.key==="Control"&&(y=!0,document.addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(S){S.key==="Control"&&(y=!1,document.removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Te(S){r.enabled===!1||r.enablePan===!1||Ie(S)}function Fe(S){switch(Se(S),A.length){case 1:switch(r.touches.ONE){case Jr.ROTATE:if(r.enableRotate===!1)return;Ne(S),a=n.TOUCH_ROTATE;break;case Jr.PAN:if(r.enablePan===!1)return;Ae(S),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(r.touches.TWO){case Jr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;O(S),a=n.TOUCH_DOLLY_PAN;break;case Jr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;dt(S),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(ts)}function Z(S){switch(Se(S),a){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;Ee(S),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;Le(S),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;$e(S),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Oe(S),r.update();break;default:a=n.NONE}}function qe(S){r.enabled!==!1&&S.preventDefault()}function ze(S){A.push(S.pointerId)}function Pe(S){delete K[S.pointerId];for(let ee=0;ee<A.length;ee++)if(A[ee]==S.pointerId){A.splice(ee,1);return}}function Se(S){let ee=K[S.pointerId];ee===void 0&&(ee=new Me,K[S.pointerId]=ee),ee.set(S.pageX,S.pageY)}function de(S){const ee=S.pointerId===A[0]?A[1]:A[0];return K[ee]}r.domElement.addEventListener("contextmenu",qe),r.domElement.addEventListener("pointerdown",M),r.domElement.addEventListener("pointercancel",I),r.domElement.addEventListener("wheel",$,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}class Nm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=rs(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=Om.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=rs()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:rs())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta,this}}function rs(){return(typeof performance>"u"?Date:performance).now()}function Om(){document.hidden===!1&&this.reset()}class Vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fm=new Ga(-1,1,1,-1,0,1);class Bm extends Kt{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const zm=new Bm;class Ol{constructor(e){this._mesh=new Pt(zm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hm extends Vi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=za.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ol(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bl extends Vi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class km extends Vi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new Me);this._width=r.width,this._height=r.height,t=new yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hm(Fl),this.copyPass.material.blending=Gt,this.clock=new Cm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,a=this.passes.length;n<a;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),o.needsSwap){if(r){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Bl!==void 0&&(o instanceof Bl?r=!0:o instanceof km&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ar extends Vi{constructor(e,t,r,n){super(),this.renderScene=t,this.renderCamera=r,this.selectedObjects=n!==void 0?n:[],this.visibleEdgeColor=new Re(1,1,1),this.hiddenEdgeColor=new Re(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256);const a=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new yt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new xl,this.depthMaterial.side=kt,this.depthMaterial.depthPacking=uo,this.depthMaterial.blending=Gt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=kt,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new yt(this.resolution.x,this.resolution.y,{type:Dt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new yt(a,o,{type:Dt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new yt(a,o,{type:Dt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new yt(Math.round(a/2),Math.round(o/2),{type:Dt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new yt(a,o,{type:Dt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new yt(Math.round(a/2),Math.round(o/2),{type:Dt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const s=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(s),this.separableBlurMaterial1.uniforms.texSize.value.set(a,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(a/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Fl;this.copyUniforms=za.clone(c.uniforms),this.materialCopy=new At({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.fsQuad=new Ol(null),this.tempPulseColor1=new Re,this.tempPulseColor2=new Re,this.textureMatrix=new et;function u(m,d){const p=d.isPerspectiveCamera?"perspective":"orthographic";return m.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let r=Math.round(e/this.downSampleRatio),n=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(r,n),this.renderTargetBlurBuffer1.setSize(r,n),this.renderTargetEdgeBuffer1.setSize(r,n),this.separableBlurMaterial1.uniforms.texSize.value.set(r,n),r=Math.round(r/2),n=Math.round(n/2),this.renderTargetBlurBuffer2.setSize(r,n),this.renderTargetEdgeBuffer2.setSize(r,n),this.separableBlurMaterial2.uniforms.texSize.value.set(r,n)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function r(n){n.isMesh&&(e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e))}for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(r)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,r=[];function n(o){o.isMesh&&r.push(o)}for(let o=0;o<this.selectedObjects.length;o++)this.selectedObjects[o].traverse(n);function a(o){if(o.isMesh||o.isSprite){let s=!1;for(let l=0;l<r.length;l++)if(r[l].id===o.id){s=!0;break}if(s===!1){const l=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,l)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(a)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,r,n,a){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,a&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const s=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=s,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ar.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ar.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ar.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ar.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(r),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=r.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new At({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Me(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new At({uniforms:{maskTexture:{value:null},texSize:{value:new Me(.5,.5)},visibleEdgeColor:{value:new P(1,1,1)},hiddenEdgeColor:{value:new P(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new At({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new At({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:ta,depthTest:!1,depthWrite:!1,transparent:!0})}}Ar.BlurDirectionX=new Me(1,0),Ar.BlurDirectionY=new Me(0,1);class Vm extends Vi{constructor(e,t,r=null,n=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const ur=new Sm,Wi=new Ei,Rr=new Ei;ur.add(Wi),Wi.add(Rr);const hr=new Ft(45,window.innerWidth/window.innerHeight,1,1e4);hr.position.set(1500,1e3,1500),hr.lookAt(500,0,500),Ze.enabled=!0;const Xi=new bl({antialias:!0,canvas:Ti});Xi.setSize(window.innerWidth,window.innerHeight),Xi.setPixelRatio(Math.min(window.devicePixelRatio,2));const Fn=new Gm(Xi),Wm=new Vm(ur,hr);Fn.addPass(Wm);const Xr=new Ar(new Me(window.innerWidth,window.innerHeight),ur,hr,[]);Xr.selectedObjects=[],Xr.edgeStrength=10,Xr.edgeThickness=1,Xr.visibleEdgeColor=new Re(0,0,0),Fn.addPass(Xr);const is=new Im(hr,Ti);is.target.set(500,0,500),is.enableDamping=!0,new Nm;let zl=performance.now();const Hl=()=>{const i=performance.now(),e=(i-zl)/1e3;zl=i,Fn.render(),is.update(e),requestAnimationFrame(Hl)},Xm=new Um,ns=new Pm(1e5,2e3);ns.raycast=()=>{},ns.position.set(500,0,500);const kl=document.getElementById("voxelColor");function jm(i,e){return Math.abs(i.r-e.r)<=Number.EPSILON&&Math.abs(i.g-e.g)<=Number.EPSILON&&Math.abs(i.b-e.b)<=Number.EPSILON}function wi(){const i=kl.value,e=parseInt(i.substring(1,3),16),t=parseInt(i.substring(3,5),16),r=parseInt(i.substring(5,7),16);return{r:e,g:t,b:r}}function Ai(i){let e=i>>16&255,t=i>>8&255,r=i&255,n=new Re;return n.setRGB(e/255,t/255,r/255,Nt),{r:n.r*255,g:n.g*255,b:n.b*255}}function Gl(i){const{r:e,g:t,b:r}=i;let n=new Re;n.setRGB(e/255,t/255,r/255,Nt);let a=Math.floor(n.r*255),o=Math.floor(n.g*255),s=Math.floor(n.b*255);return a<<16|o<<8|s}function dr(i){const{r:e,g:t,b:r}=i;return new Re().setRGB(e/255,t/255,r/255,ot)}function qm(i){let e={r:0,g:0,b:0};return i.getRGB(e,Nt),{r:e.r*255,g:e.g*255,b:e.b*255}}function Ym(i){kl.value="#"+i.toString(16)}new kr(50,50,50);const Vl=new kr(50,50,50);let Wl=new cr({color:dr(wi())});const pr=new Pt(Vl,Wl);pr.raycast=()=>{};const Xl=new Pt(Vl,Wl),jl=new Ln(1e5,1e5);jl.rotateX(-Math.PI/2);const Ri=new Pt(jl,new Oa({visible:!1}));Ri.position.set(500,0,500);const Km="/assets/voxel_bg-lwayk0Uo.wasm",Zm=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(r,"base64");else if(typeof atob=="function"){const a=atob(r);n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,i)}else{const r=await fetch(e),n=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const a=await r.arrayBuffer();t=await WebAssembly.instantiate(a,i)}}return t.instance.exports};let q;function Jm(i){q=i}let Bn=null;function Ci(){return(Bn===null||Bn.byteLength===0)&&(Bn=new Uint8Array(q.memory.buffer)),Bn}function as(i,e){return i=i>>>0,Ci().subarray(i/1,i/1+e)}function er(i){const e=q.__externref_table_alloc();return q.__wbindgen_export_2.set(e,i),e}function ql(i,e){try{return i.apply(this,e)}catch(t){const r=er(t);q.__wbindgen_exn_store(r)}}function Zt(i){return i==null}const Qm=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Yl=new Qm("utf-8",{ignoreBOM:!0,fatal:!0});Yl.decode();function jr(i,e){return i=i>>>0,Yl.decode(Ci().subarray(i,i+e))}let mt=0;const $m=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let zn=new $m("utf-8");const eg=typeof zn.encodeInto=="function"?function(i,e){return zn.encodeInto(i,e)}:function(i,e){const t=zn.encode(i);return e.set(t),{read:i.length,written:t.length}};function Li(i,e,t){if(t===void 0){const s=zn.encode(i),l=e(s.length,1)>>>0;return Ci().subarray(l,l+s.length).set(s),mt=s.length,l}let r=i.length,n=e(r,1)>>>0;const a=Ci();let o=0;for(;o<r;o++){const s=i.charCodeAt(o);if(s>127)break;a[n+o]=s}if(o!==r){o!==0&&(i=i.slice(o)),n=t(n,r,r=o+i.length*3,1)>>>0;const s=Ci().subarray(n+o,n+r),l=eg(i,s);o+=l.written,n=t(n,r,o,1)>>>0}return mt=o,n}let Pi=null;function fr(){return(Pi===null||Pi.buffer.detached===!0||Pi.buffer.detached===void 0&&Pi.buffer!==q.memory.buffer)&&(Pi=new DataView(q.memory.buffer)),Pi}let Hn=null;function Kl(){return(Hn===null||Hn.byteLength===0)&&(Hn=new Float32Array(q.memory.buffer)),Hn}function kn(i,e){return i=i>>>0,Kl().subarray(i/4,i/4+e)}function ss(i){const e=typeof i;if(e=="number"||e=="boolean"||i==null)return`${i}`;if(e=="string")return`"${i}"`;if(e=="symbol"){const n=i.description;return n==null?"Symbol":`Symbol(${n})`}if(e=="function"){const n=i.name;return typeof n=="string"&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(i)){const n=i.length;let a="[";n>0&&(a+=ss(i[0]));for(let o=1;o<n;o++)a+=", "+ss(i[o]);return a+="]",a}const t=/\[object ([^\]]+)\]/.exec(toString.call(i));let r;if(t&&t.length>1)r=t[1];else return toString.call(i);if(r=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:r}function os(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`)}function tg(i,e){const t=Li(i,q.__wbindgen_malloc,q.__wbindgen_realloc),r=mt;os(e,Wn);const n=q.exportGeometryToZip(t,r,e.__wbg_ptr);var a=as(n[0],n[1]).slice();return q.__wbindgen_free(n[0],n[1]*1,1),a}function Zl(i){const e=q.__wbindgen_export_2.get(i);return q.__externref_table_dealloc(i),e}function Jl(i){let e,t;try{os(i,Ui);const a=q.saveToString(i.__wbg_ptr);var r=a[0],n=a[1];if(a[3])throw r=0,n=0,Zl(a[2]);return e=r,t=n,jr(r,n)}finally{q.__wbindgen_free(e,t,1)}}function Ql(i){const e=Li(i,q.__wbindgen_malloc,q.__wbindgen_realloc),t=mt,r=q.loadFromString(e,t);if(r[2])throw Zl(r[1]);return Ui.__wrap(r[0])}function ls(i,e){const t=e(i.length*4,4)>>>0;return Kl().set(i,t/4),mt=i.length,t}let Gn=null;function rg(){return(Gn===null||Gn.byteLength===0)&&(Gn=new Int32Array(q.memory.buffer)),Gn}function ig(i,e){return i=i>>>0,rg().subarray(i/4,i/4+e)}let Vn=null;function ng(){return(Vn===null||Vn.byteLength===0)&&(Vn=new Uint32Array(q.memory.buffer)),Vn}function ag(i,e){const t=e(i.length*4,4)>>>0;return ng().set(i,t/4),mt=i.length,t}function sg(i,e){const t=e(i.length*1,1)>>>0;return Ci().set(i,t/1),mt=i.length,t}function og(i,e){i=i>>>0;const t=fr(),r=[];for(let n=i;n<i+4*e;n+=4)r.push(q.__wbindgen_export_2.get(t.getUint32(n,!0)));return q.__externref_drop_slice(i,e),r}function lg(){q.setup()}typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_basicshader_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_camera_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_cube_free(i>>>0,1));const $l=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>q.__wbg_geometry_free(i>>>0,1));class Wn{static __wrap(e){e=e>>>0;const t=Object.create(Wn.prototype);return t.__wbg_ptr=e,$l.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$l.unregister(this),e}free(){const e=this.__destroy_into_raw();q.__wbg_geometry_free(e,0)}get vertices(){const e=q.__wbg_get_geometry_vertices(this.__wbg_ptr);var t=kn(e[0],e[1]).slice();return q.__wbindgen_free(e[0],e[1]*4,4),t}set vertices(e){const t=ls(e,q.__wbindgen_malloc),r=mt;q.__wbg_set_geometry_vertices(this.__wbg_ptr,t,r)}get indices(){const e=q.__wbg_get_geometry_indices(this.__wbg_ptr);var t=ig(e[0],e[1]).slice();return q.__wbindgen_free(e[0],e[1]*4,4),t}set indices(e){const t=ag(e,q.__wbindgen_malloc),r=mt;q.__wbg_set_geometry_indices(this.__wbg_ptr,t,r)}get normals(){const e=q.__wbg_get_geometry_normals(this.__wbg_ptr);var t=kn(e[0],e[1]).slice();return q.__wbindgen_free(e[0],e[1]*4,4),t}set normals(e){const t=ls(e,q.__wbindgen_malloc),r=mt;q.__wbg_set_geometry_normals(this.__wbg_ptr,t,r)}get uvs(){const e=q.__wbg_get_geometry_uvs(this.__wbg_ptr);var t=kn(e[0],e[1]).slice();return q.__wbindgen_free(e[0],e[1]*4,4),t}set uvs(e){const t=ls(e,q.__wbindgen_malloc),r=mt;q.__wbg_set_geometry_uvs(this.__wbg_ptr,t,r)}get color_data(){const e=q.__wbg_get_geometry_color_data(this.__wbg_ptr);var t=as(e[0],e[1]).slice();return q.__wbindgen_free(e[0],e[1]*1,1),t}set color_data(e){const t=sg(e,q.__wbindgen_malloc),r=mt;q.__wbg_set_geometry_color_data(this.__wbg_ptr,t,r)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_mesh_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_mouseevent_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_palette_free(i>>>0,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>q.__wbg_scene_free(i>>>0,1));const ec=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>q.__wbg_voxel_free(i>>>0,1));class ji{static __wrap(e){e=e>>>0;const t=Object.create(ji.prototype);return t.__wbg_ptr=e,ec.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ec.unregister(this),e}free(){const e=this.__destroy_into_raw();q.__wbg_voxel_free(e,0)}get x(){return q.__wbg_get_voxel_x(this.__wbg_ptr)>>>0}set x(e){q.__wbg_set_voxel_x(this.__wbg_ptr,e)}get y(){return q.__wbg_get_voxel_y(this.__wbg_ptr)>>>0}set y(e){q.__wbg_set_voxel_y(this.__wbg_ptr,e)}get z(){return q.__wbg_get_voxel_z(this.__wbg_ptr)>>>0}set z(e){q.__wbg_set_voxel_z(this.__wbg_ptr,e)}}const cs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>q.__wbg_voxelmap_free(i>>>0,1));class Ui{static __wrap(e){e=e>>>0;const t=Object.create(Ui.prototype);return t.__wbg_ptr=e,cs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,cs.unregister(this),e}free(){const e=this.__destroy_into_raw();q.__wbg_voxelmap_free(e,0)}get width(){return q.__wbg_get_voxelmap_width(this.__wbg_ptr)>>>0}set width(e){q.__wbg_set_voxelmap_width(this.__wbg_ptr,e)}get height(){return q.__wbg_get_voxelmap_height(this.__wbg_ptr)>>>0}set height(e){q.__wbg_set_voxelmap_height(this.__wbg_ptr,e)}get depth(){return q.__wbg_get_voxelmap_depth(this.__wbg_ptr)>>>0}set depth(e){q.__wbg_set_voxelmap_depth(this.__wbg_ptr,e)}get undoStatusCallback(){return q.__wbg_get_voxelmap_undoStatusCallback(this.__wbg_ptr)}set undoStatusCallback(e){q.__wbg_set_voxelmap_undoStatusCallback(this.__wbg_ptr,Zt(e)?0:er(e))}get removeVoxelCallback(){return q.__wbg_get_voxelmap_removeVoxelCallback(this.__wbg_ptr)}set removeVoxelCallback(e){q.__wbg_set_voxelmap_removeVoxelCallback(this.__wbg_ptr,Zt(e)?0:er(e))}get setVoxelCallback(){return q.__wbg_get_voxelmap_setVoxelCallback(this.__wbg_ptr)}set setVoxelCallback(e){q.__wbg_set_voxelmap_setVoxelCallback(this.__wbg_ptr,Zt(e)?0:er(e))}get paletteColorSwapCallback(){return q.__wbg_get_voxelmap_paletteColorSwapCallback(this.__wbg_ptr)}set paletteColorSwapCallback(e){q.__wbg_set_voxelmap_paletteColorSwapCallback(this.__wbg_ptr,Zt(e)?0:er(e))}constructor(e,t,r){const n=q.voxelmap_create_voxel_map(e,t,r);return this.__wbg_ptr=n>>>0,cs.register(this,this.__wbg_ptr,this),this}getVoxels(){const e=q.voxelmap_getVoxels(this.__wbg_ptr);var t=og(e[0],e[1]).slice();return q.__wbindgen_free(e[0],e[1]*4,4),t}getVoxelColor(e){os(e,ji);var t=e.__destroy_into_raw();const r=q.voxelmap_getVoxelColor(this.__wbg_ptr,t);return r===4294967297?void 0:r}changeColor(e,t){q.voxelmap_changeColor(this.__wbg_ptr,e,t)}getVoxel(e,t,r){const n=q.voxelmap_getVoxel(this.__wbg_ptr,e,t,r);return n===0?void 0:ji.__wrap(n)}generate_mesh(e,t,r){const n=q.voxelmap_generate_mesh(this.__wbg_ptr,e,t,r);return Wn.__wrap(n)}paintVoxel(e,t,r,n){q.voxelmap_paintVoxel(this.__wbg_ptr,e,t,r,n)}paintFlood(e,t,r,n){q.voxelmap_paintFlood(this.__wbg_ptr,e,t,r,n)}setVoxel(e,t,r,n){q.voxelmap_setVoxel(this.__wbg_ptr,e,t,r,n)}removeVoxel(e,t,r){q.voxelmap_removeVoxel(this.__wbg_ptr,e,t,r)}undo(){q.voxelmap_undo(this.__wbg_ptr)}redo(){q.voxelmap_redo(this.__wbg_ptr)}}function cg(i,e,t){i.attachShader(e,t)}function ug(i,e,t){i.bindBuffer(e>>>0,t)}function hg(i,e){i.bindVertexArray(e)}function dg(i,e,t,r,n){i.bufferData(e>>>0,as(t,r),n>>>0)}function pg(){return ql(function(i,e,t,r){return i.call(e,t,r)},arguments)}function fg(){return ql(function(i,e,t,r,n){return i.call(e,t,r,n)},arguments)}function mg(i,e,t,r,n){i.clearColor(e,t,r,n)}function gg(i,e){i.clear(e>>>0)}function _g(i,e){i.compileShader(e)}function vg(i){const e=i.createBuffer();return Zt(e)?0:er(e)}function xg(i){const e=i.createProgram();return Zt(e)?0:er(e)}function bg(i,e){const t=i.createShader(e>>>0);return Zt(t)?0:er(t)}function yg(i){const e=i.createVertexArray();return Zt(e)?0:er(e)}function Mg(i,e,t,r,n){i.drawElements(e>>>0,t,r>>>0,n)}function Sg(i,e){i.enableVertexAttribArray(e>>>0)}function Eg(i,e){i.enable(e>>>0)}function Tg(i,e){let t,r;try{t=i,r=e,console.error(jr(i,e))}finally{q.__wbindgen_free(t,r,1)}}function wg(i,e,t){const r=e.getProgramInfoLog(t);var n=Zt(r)?0:Li(r,q.__wbindgen_malloc,q.__wbindgen_realloc),a=mt;fr().setInt32(i+4,a,!0),fr().setInt32(i+0,n,!0)}function Ag(i,e,t){return i.getProgramParameter(e,t>>>0)}function Rg(i,e,t){const r=e.getShaderInfoLog(t);var n=Zt(r)?0:Li(r,q.__wbindgen_malloc,q.__wbindgen_realloc),a=mt;fr().setInt32(i+4,a,!0),fr().setInt32(i+0,n,!0)}function Cg(i,e,t){return i.getShaderParameter(e,t>>>0)}function Lg(i,e,t,r){const n=i.getUniformLocation(e,jr(t,r));return Zt(n)?0:er(n)}function Pg(i,e){i.linkProgram(e)}function Ug(i,e){console.log(jr(i,e))}function Dg(){return new Array}function Ig(){return new Error}function Ng(i,e){return i.push(e)}function Og(i,e,t,r){i.shaderSource(e,jr(t,r))}function Fg(i,e){const t=e.stack,r=Li(t,q.__wbindgen_malloc,q.__wbindgen_realloc),n=mt;fr().setInt32(i+4,n,!0),fr().setInt32(i+0,r,!0)}function Bg(i,e,t,r,n){i.uniform3f(e,t,r,n)}function zg(i,e,t,r,n){i.uniformMatrix4fv(e,t!==0,kn(r,n))}function Hg(i,e){i.useProgram(e)}function kg(i,e,t,r,n,a,o){i.vertexAttribPointer(e>>>0,t,r>>>0,n!==0,a,o)}function Gg(i){return ji.__wrap(i)}function Vg(i){const e=i;return typeof e=="boolean"?e?1:0:2}function Wg(i,e){const t=ss(e),r=Li(t,q.__wbindgen_malloc,q.__wbindgen_realloc),n=mt;fr().setInt32(i+4,n,!0),fr().setInt32(i+0,r,!0)}function Xg(){const i=q.__wbindgen_export_2,e=i.grow(4);i.set(0,void 0),i.set(e+0,void 0),i.set(e+1,null),i.set(e+2,!0),i.set(e+3,!1)}function jg(i){return i}function qg(i,e){return jr(i,e)}function Yg(i,e){throw new Error(jr(i,e))}URL=globalThis.URL;const se=await Zm({"./voxel_bg.js":{__wbindgen_number_new:jg,__wbg_voxel_new:Gg,__wbindgen_boolean_get:Vg,__wbg_log_eb255972e71130b4:Ug,__wbindgen_string_new:qg,__wbg_new_8a6f238a6ece86ea:Ig,__wbg_stack_0ed75d68575b0f3c:Fg,__wbg_error_7534b8e9a36f1ab4:Tg,__wbg_bindVertexArray_67a807a1cd64976a:hg,__wbg_bufferData_049295bf6c0e35af:dg,__wbg_createVertexArray_68ae270682fc14aa:yg,__wbg_uniformMatrix4fv_fa5c91b7cee9bfd5:zg,__wbg_attachShader_9b79a4896fee779d:cg,__wbg_bindBuffer_e9412cc77f8130d6:ug,__wbg_clear_c182acb53176ea8b:gg,__wbg_clearColor_7e5806f100e4cd7a:mg,__wbg_compileShader_fab2df50ae89c5e1:_g,__wbg_createBuffer_8692729b8ac9caaf:vg,__wbg_createProgram_b8f69529220fb50b:xg,__wbg_createShader_809bd3abe629ad7a:bg,__wbg_drawElements_28e4f5037fe8c665:Mg,__wbg_enable_a7767e03f7973ca8:Eg,__wbg_enableVertexAttribArray_211547224fc25327:Sg,__wbg_getProgramInfoLog_760af7d6753bc699:wg,__wbg_getProgramParameter_8a6b724d42d813b3:Ag,__wbg_getShaderInfoLog_da62e75d61fbf8a8:Rg,__wbg_getShaderParameter_f9c66f7ac8114c69:Cg,__wbg_getUniformLocation_b9be4fbca76ab9a4:Lg,__wbg_linkProgram_bcf6286423b25b5c:Pg,__wbg_shaderSource_3bbf44221529c149:Og,__wbg_uniform3f_97385279cd44963d:Bg,__wbg_useProgram_1a5a4be134db012a:Hg,__wbg_vertexAttribPointer_1f280ac2d8994592:kg,__wbg_new_254fa9eac11932ae:Dg,__wbg_push_6edad0df4b546b2c:Ng,__wbg_call_3b770f0d6eb4720e:pg,__wbg_call_9bd6f269d4835e33:fg,__wbindgen_debug_string:Wg,__wbindgen_throw:Yg,__wbindgen_init_externref_table:Xg}},Km),Kg=se.memory,Zg=se.exportJpeg,Jg=se.exportGeometryToZip,Qg=se.exportPng,$g=se.__wbg_mouseevent_free,e_=se.mouseevent_create,t_=se.__wbg_scene_free,r_=se.scene_create,i_=se.scene_update,n_=se.scene_mouseMove,a_=se.scene_click,s_=se.__wbg_mesh_free,o_=se.__wbg_cube_free,l_=se.cube_create,c_=se.__wbg_basicshader_free,u_=se.basicshader_create,h_=se.__wbg_camera_free,d_=se.camera_create_camera,p_=se.draw,f_=se.scene_mouseUp,m_=se.scene_mouseDown,g_=se.saveToString,__=se.loadFromString,v_=se.__wbg_geometry_free,x_=se.__wbg_get_geometry_vertices,b_=se.__wbg_set_geometry_vertices,y_=se.__wbg_get_geometry_indices,M_=se.__wbg_set_geometry_indices,S_=se.__wbg_get_geometry_normals,E_=se.__wbg_set_geometry_normals,T_=se.__wbg_get_geometry_uvs,w_=se.__wbg_set_geometry_uvs,A_=se.__wbg_get_geometry_color_data,R_=se.__wbg_set_geometry_color_data,C_=se.__wbg_voxel_free,L_=se.__wbg_get_voxel_x,P_=se.__wbg_set_voxel_x,U_=se.__wbg_get_voxel_y,D_=se.__wbg_set_voxel_y,I_=se.__wbg_get_voxel_z,N_=se.__wbg_set_voxel_z,O_=se.__wbg_palette_free,F_=se.__wbg_voxelmap_free,B_=se.__wbg_get_voxelmap_width,z_=se.__wbg_set_voxelmap_width,H_=se.__wbg_get_voxelmap_height,k_=se.__wbg_set_voxelmap_height,G_=se.__wbg_get_voxelmap_depth,V_=se.__wbg_set_voxelmap_depth,W_=se.__wbg_get_voxelmap_undoStatusCallback,X_=se.__wbg_set_voxelmap_undoStatusCallback,j_=se.__wbg_get_voxelmap_removeVoxelCallback,q_=se.__wbg_set_voxelmap_removeVoxelCallback,Y_=se.__wbg_get_voxelmap_setVoxelCallback,K_=se.__wbg_set_voxelmap_setVoxelCallback,Z_=se.__wbg_get_voxelmap_paletteColorSwapCallback,J_=se.__wbg_set_voxelmap_paletteColorSwapCallback,Q_=se.voxelmap_create_voxel_map,$_=se.voxelmap_getVoxels,ev=se.voxelmap_getVoxelColor,tv=se.voxelmap_changeColor,rv=se.voxelmap_getVoxel,iv=se.voxelmap_generate_mesh,nv=se.voxelmap_paintVoxel,av=se.voxelmap_paintFlood,sv=se.voxelmap_setVoxel,ov=se.voxelmap_removeVoxel,lv=se.voxelmap_undo,cv=se.voxelmap_redo,uv=se.setup,hv=se.__wbindgen_exn_store,dv=se.__externref_table_alloc,pv=se.__wbindgen_export_2,fv=se.__wbindgen_free,mv=se.__wbindgen_malloc,gv=se.__wbindgen_realloc,_v=se.__externref_table_dealloc,vv=se.__externref_drop_slice,tc=se.__wbindgen_start,xv=Object.freeze(Object.defineProperty({__proto__:null,__externref_drop_slice:vv,__externref_table_alloc:dv,__externref_table_dealloc:_v,__wbg_basicshader_free:c_,__wbg_camera_free:h_,__wbg_cube_free:o_,__wbg_geometry_free:v_,__wbg_get_geometry_color_data:A_,__wbg_get_geometry_indices:y_,__wbg_get_geometry_normals:S_,__wbg_get_geometry_uvs:T_,__wbg_get_geometry_vertices:x_,__wbg_get_voxel_x:L_,__wbg_get_voxel_y:U_,__wbg_get_voxel_z:I_,__wbg_get_voxelmap_depth:G_,__wbg_get_voxelmap_height:H_,__wbg_get_voxelmap_paletteColorSwapCallback:Z_,__wbg_get_voxelmap_removeVoxelCallback:j_,__wbg_get_voxelmap_setVoxelCallback:Y_,__wbg_get_voxelmap_undoStatusCallback:W_,__wbg_get_voxelmap_width:B_,__wbg_mesh_free:s_,__wbg_mouseevent_free:$g,__wbg_palette_free:O_,__wbg_scene_free:t_,__wbg_set_geometry_color_data:R_,__wbg_set_geometry_indices:M_,__wbg_set_geometry_normals:E_,__wbg_set_geometry_uvs:w_,__wbg_set_geometry_vertices:b_,__wbg_set_voxel_x:P_,__wbg_set_voxel_y:D_,__wbg_set_voxel_z:N_,__wbg_set_voxelmap_depth:V_,__wbg_set_voxelmap_height:k_,__wbg_set_voxelmap_paletteColorSwapCallback:J_,__wbg_set_voxelmap_removeVoxelCallback:q_,__wbg_set_voxelmap_setVoxelCallback:K_,__wbg_set_voxelmap_undoStatusCallback:X_,__wbg_set_voxelmap_width:z_,__wbg_voxel_free:C_,__wbg_voxelmap_free:F_,__wbindgen_exn_store:hv,__wbindgen_export_2:pv,__wbindgen_free:fv,__wbindgen_malloc:mv,__wbindgen_realloc:gv,__wbindgen_start:tc,basicshader_create:u_,camera_create_camera:d_,cube_create:l_,draw:p_,exportGeometryToZip:Jg,exportJpeg:Zg,exportPng:Qg,loadFromString:__,memory:Kg,mouseevent_create:e_,saveToString:g_,scene_click:a_,scene_create:r_,scene_mouseDown:m_,scene_mouseMove:n_,scene_mouseUp:f_,scene_update:i_,setup:uv,voxelmap_changeColor:tv,voxelmap_create_voxel_map:Q_,voxelmap_generate_mesh:iv,voxelmap_getVoxel:rv,voxelmap_getVoxelColor:ev,voxelmap_getVoxels:$_,voxelmap_paintFlood:av,voxelmap_paintVoxel:nv,voxelmap_redo:cv,voxelmap_removeVoxel:ov,voxelmap_setVoxel:sv,voxelmap_undo:lv},Symbol.toStringTag,{value:"Module"}));Jm(xv),tc();class bv{value;listeners=[];constructor(e){this.value=e}listen(e){this.listeners.push(e);const t=this.listeners;return()=>{let r=t.indexOf(e);r!=-1&&t.splice(r,1)}}setValue(e){this.value=e,this.listeners.forEach(t=>{t(e)})}}const yv=document.getElementById("paint"),Mv=document.getElementById("place"),Sv=document.getElementById("delete"),Ev=document.getElementById("eyedropper");var Jt=(i=>(i[i.Place=0]="Place",i[i.Delete=1]="Delete",i[i.Paint=2]="Paint",i[i.Eyedropper=3]="Eyedropper",i))(Jt||{});let Cr=new bv(0);yv.addEventListener("click",()=>{Cr.setValue(2)}),Mv.addEventListener("click",()=>{Cr.setValue(0)}),Sv.addEventListener("click",()=>{Cr.setValue(1)}),Ev.addEventListener("click",()=>{Cr.setValue(3)});let rc=document.getElementById("toolLabel");var Xn;(i=>{i.autosave="voxel__autosave"})(Xn||(Xn={}));const Bt=1e7,ic=50;let tt=Tv();function us(i,e,t){return new P(i,e,t).subScalar(Bt/2).multiplyScalar(ic).addScalar(25)}function Tv(){const i=localStorage.getItem(Xn.autosave);if(i){console.log("Loaded autosave!");const e=Ql(i);return hs(e),e}else return new Ui(Bt,Bt,Bt)}function wv(){let i=new Ui(Bt,Bt,Bt);hs(i),tt=i}function Av(i){hs(i),tt=i}function hs(i){Rr.clear();const e=i.getVoxels();for(const t of e){const r=t.x,n=t.y,a=t.z,o=us(r,n,a),s=i.getVoxelColor(t),l=Xl.clone(!0);l.visible=!0;let c=dr(Ai(s));const u=new cr({color:c});l.material=u,l.position.copy(o),Rr.add(l)}}const Rv="modulepreload",Cv=function(i){return"/"+i},nc={},gt=function(i,e,t){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(e.map(s=>{if(s=Cv(s),s in nc)return;nc[s]=!0;const l=s.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Rv,l||(u.as="script"),u.crossOrigin="",u.href=s,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((m,d)=>{u.addEventListener("load",m),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return i().catch(n)})},Lv={accepts:[]},ac=globalThis.showOpenFilePicker;async function Pv(i={}){const e={...Lv,...i};if(ac&&!i._preferPolyfill)return ac(e);const t=document.createElement("input");t.type="file",t.multiple=e.multiple,t.accept=(e.accepts||[]).map(n=>[...(n.extensions||[]).map(a=>"."+a),...n.mimeTypes||[]]).flat().join(","),Object.assign(t.style,{position:"fixed",top:"-100000px",left:"-100000px"}),document.body.appendChild(t);const r=gt(()=>Promise.resolve().then(()=>Nv),void 0);return await new Promise(n=>{t.addEventListener("change",n,{once:!0}),t.click()}),t.remove(),r.then(n=>n.getFileHandlesFromInput(t))}const sc=globalThis.showSaveFilePicker;async function oc(i={}){if(sc&&!i._preferPolyfill)return sc(i);i._name&&(console.warn("deprecated _name, spec now have `suggestedName`"),i.suggestedName=i._name);const{FileSystemFileHandle:e}=await gt(async()=>{const{FileSystemFileHandle:r}=await Promise.resolve().then(()=>Di);return{FileSystemFileHandle:r}},void 0),{FileHandle:t}=await gt(async()=>{const{FileHandle:r}=await import("./downloader-Chj__yXH.js").then(async n=>(await n.__tla,n));return{FileHandle:r}},[]);return new e(new t(i.suggestedName))}globalThis.DataTransferItem&&!DataTransferItem.prototype.getAsFileSystemHandle&&(DataTransferItem.prototype.getAsFileSystemHandle=async function(){const i=this.webkitGetAsEntry(),[{FileHandle:e,FolderHandle:t},{FileSystemDirectoryHandle:r},{FileSystemFileHandle:n}]=await Promise.all([gt(()=>import("./sandbox-CAWteEda.js").then(async a=>(await a.__tla,a)),[]),gt(()=>Promise.resolve().then(()=>ps),void 0),gt(()=>Promise.resolve().then(()=>Di),void 0)]);return i.isFile?new n(new e(i,!1)):new r(new t(i,!1))});let lc;Ms={WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File},{WritableStream:lc}=Ms;class qr extends lc{#e;constructor(e){super(e),this.#e=e,Object.setPrototypeOf(this,qr.prototype),this._closed=!1}async close(){this._closed=!0;const e=this.getWriter(),t=e.close();return e.releaseLock(),t}seek(e){return this.write({type:"seek",position:e})}truncate(e){return this.write({type:"truncate",size:e})}write(e){if(this._closed)return Promise.reject(new TypeError("Cannot write to a CLOSED writable stream"));const t=this.getWriter(),r=t.write(e);return t.releaseLock(),r}}Object.defineProperty(qr.prototype,Symbol.toStringTag,{value:"FileSystemWritableFileStream",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(qr.prototype,{close:{enumerable:!0},seek:{enumerable:!0},truncate:{enumerable:!0},write:{enumerable:!0}}),globalThis.FileSystemFileHandle&&!globalThis.FileSystemFileHandle.prototype.createWritable&&!globalThis.FileSystemWritableFileStream&&(globalThis.FileSystemWritableFileStream=qr);const Lr=Symbol("adapter");class ds{[Lr];name;kind;constructor(e){this.kind=e.kind,this.name=e.name,this[Lr]=e}async queryPermission(e={}){const{mode:t="read"}=e,r=this[Lr];if(r.queryPermission)return r.queryPermission({mode:t});if(t==="read")return"granted";if(t==="readwrite")return r.writable?"granted":"denied";throw new TypeError(`Mode ${t} must be 'read' or 'readwrite'`)}async requestPermission({mode:e="read"}={}){const t=this[Lr];if(t.requestPermission)return t.requestPermission({mode:e});if(e==="read")return"granted";if(e==="readwrite")return t.writable?"granted":"denied";throw new TypeError(`Mode ${e} must be 'read' or 'readwrite'`)}async remove(e={}){await this[Lr].remove(e)}async isSameEntry(e){return this===e?!0:!e||typeof e!="object"||this.kind!==e.kind||!e[Lr]?!1:this[Lr].isSameEntry(e[Lr])}}Object.defineProperty(ds.prototype,Symbol.toStringTag,{value:"FileSystemHandle",writable:!1,enumerable:!1,configurable:!0}),globalThis.FileSystemHandle&&(globalThis.FileSystemHandle.prototype.queryPermission??=function(i){return"granted"});let cc;Zi={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:i=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${i}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},cc={writable:globalThis.WritableStream};async function Uv(i){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");const[e,t,r]=await Promise.all([gt(()=>import("./memory-BPUlcptK.js").then(async a=>(await a.__tla,a)),[]),gt(()=>import("./sandbox-CAWteEda.js").then(async a=>(await a.__tla,a)),[]),gt(()=>Promise.resolve().then(()=>ps),void 0)]),n=new e.FolderHandle("",!1);return n._entries=i.map(a=>a.isFile?new t.FileHandle(a,!1):new t.FolderHandle(a,!1)),new r.FileSystemDirectoryHandle(n)}async function Dv(i){const{FolderHandle:e,FileHandle:t}=await gt(async()=>{const{FolderHandle:s,FileHandle:l}=await import("./memory-BPUlcptK.js").then(async c=>(await c.__tla,c));return{FolderHandle:s,FileHandle:l}},[]),{FileSystemDirectoryHandle:r}=await gt(async()=>{const{FileSystemDirectoryHandle:s}=await Promise.resolve().then(()=>ps);return{FileSystemDirectoryHandle:s}},void 0),n=Array.from(i.files),a=n[0].webkitRelativePath.split("/",1)[0],o=new e(a,!1);return n.forEach(s=>{const l=s.webkitRelativePath.split("/");l.shift();const c=l.pop(),u=l.reduce((m,d)=>(m._entries[d]||(m._entries[d]=new e(d,!1)),m._entries[d]),o);u._entries[c]=new t(s.name,s,!1)}),new r(o)}async function Iv(i){const{FileHandle:e}=await gt(async()=>{const{FileHandle:r}=await import("./memory-BPUlcptK.js").then(async n=>(await n.__tla,n));return{FileHandle:r}},[]),{FileSystemFileHandle:t}=await gt(async()=>{const{FileSystemFileHandle:r}=await Promise.resolve().then(()=>Di);return{FileSystemFileHandle:r}},void 0);return Array.from(i.files).map(r=>new t(new e(r.name,r,!1)))}const Nv=Object.freeze(Object.defineProperty({__proto__:null,config:cc,errors:Zi,fromDataTransfer:Uv,getDirHandlesFromInput:Dv,getFileHandlesFromInput:Iv},Symbol.toStringTag,{value:"Module"})),{GONE:Ov,MOD_ERR:Fv}=Zi,Pr=Symbol("adapter");let jn=class $n extends ds{[Pr];constructor(e){super(e),this[Pr]=e}async getDirectoryHandle(e,t={}){if(e==="")throw new TypeError("Name can't be an empty string.");if(e==="."||e===".."||e.includes("/"))throw new TypeError("Name contains invalid characters.");t.create=!!t.create;const r=await this[Pr].getDirectoryHandle(e,t);return new $n(r)}async*entries(){const{FileSystemFileHandle:e}=await gt(async()=>{const{FileSystemFileHandle:t}=await Promise.resolve().then(()=>Di);return{FileSystemFileHandle:t}},void 0);for await(const[t,r]of this[Pr].entries())yield[r.name,r.kind==="file"?new e(r):new $n(r)]}async*getEntries(){const{FileSystemFileHandle:e}=await gt(async()=>{const{FileSystemFileHandle:t}=await Promise.resolve().then(()=>Di);return{FileSystemFileHandle:t}},void 0);console.warn("deprecated, use .entries() instead");for await(let t of this[Pr].entries())yield t.kind==="file"?new e(t):new $n(t)}async getFileHandle(e,t={}){const{FileSystemFileHandle:r}=await gt(async()=>{const{FileSystemFileHandle:a}=await Promise.resolve().then(()=>Di);return{FileSystemFileHandle:a}},void 0);if(e==="")throw new TypeError("Name can't be an empty string.");if(e==="."||e===".."||e.includes("/"))throw new TypeError("Name contains invalid characters.");t.create=!!t.create;const n=await this[Pr].getFileHandle(e,t);return new r(n)}async removeEntry(e,t={}){if(e==="")throw new TypeError("Name can't be an empty string.");if(e==="."||e===".."||e.includes("/"))throw new TypeError("Name contains invalid characters.");return t.recursive=!!t.recursive,this[Pr].removeEntry(e,t)}async resolve(e){if(await e.isSameEntry(this))return[];const t=[{handle:this,path:[]}];for(;t.length;){let{handle:r,path:n}=t.pop();for await(const a of r.values()){if(await a.isSameEntry(e))return[...n,a.name];a.kind==="directory"&&t.push({handle:a,path:[...n,a.name]})}}return null}async*keys(){for await(const[e]of this[Pr].entries())yield e}async*values(){for await(const[e,t]of this)yield t}[Symbol.asyncIterator](){return this.entries()}};if(Object.defineProperty(jn.prototype,Symbol.toStringTag,{value:"FileSystemDirectoryHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(jn.prototype,{getDirectoryHandle:{enumerable:!0},entries:{enumerable:!0},getFileHandle:{enumerable:!0},removeEntry:{enumerable:!0}}),globalThis.FileSystemDirectoryHandle){const i=globalThis.FileSystemDirectoryHandle.prototype;i.resolve=async function(n){if(await n.isSameEntry(this))return[];const a=[{handle:this,path:[]}];for(;a.length;){let{handle:o,path:s}=a.pop();for await(const l of o.values()){if(await l.isSameEntry(n))return[...s,l.name];l.kind==="directory"&&a.push({handle:l,path:[...s,l.name]})}}return null};async function e(n){if(await(await navigator.storage.getDirectory()).resolve(n)===null)throw new DOMException(...Ov)}const t=i.entries;i.entries=async function*(){await e(this),yield*t.call(this)},i[Symbol.asyncIterator]=async function*(){yield*this.entries()};const r=i.removeEntry;i.removeEntry=async function(n,a={}){return r.call(this,n,a).catch(async o=>{throw o instanceof DOMException&&o.name==="UnknownError"&&!a.recursive&&!(await t.call(this).next()).done?new DOMException(...Fv):o})}}const ps=Object.freeze(Object.defineProperty({__proto__:null,FileSystemDirectoryHandle:jn,default:jn},Symbol.toStringTag,{value:"Module"})),{INVALID:Bv,SYNTAX:fs,GONE:zv}=Zi,qn=Symbol("adapter");class Yn extends ds{[qn];constructor(e){super(e),this[qn]=e}async createWritable(e={}){return new qr(await this[qn].createWritable(e))}async getFile(){return this[qn].getFile()}}if(Object.defineProperty(Yn.prototype,Symbol.toStringTag,{value:"FileSystemFileHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(Yn.prototype,{createWritable:{enumerable:!0},getFile:{enumerable:!0}}),globalThis.FileSystemFileHandle&&!globalThis.FileSystemFileHandle.prototype.createWritable){const i=new WeakMap;let e;const t=()=>{let n,a;onmessage=async o=>{const s=o.ports[0],l=o.data;switch(l.type){case"open":const c=l.name;let u=await navigator.storage.getDirectory();for(const m of l.path)u=await u.getDirectoryHandle(m);n=await u.getFileHandle(c),a=await n.createSyncAccessHandle();break;case"write":a.write(l.data,{at:l.position}),a.flush();break;case"truncate":a.truncate(l.size);break;case"abort":case"close":a.close();break}s.postMessage(0)}};globalThis.FileSystemFileHandle.prototype.createWritable=async function(n){if(!e){const p=`(${t.toString()})()`,g=new Blob([p],{type:"text/javascript"});e=URL.createObjectURL(g)}const a=new Worker(e,{type:"module"});let o=0;const s=new TextEncoder;let l=await this.getFile().then(p=>p.size);const c=p=>new Promise((g,v)=>{const f=new MessageChannel;f.port1.onmessage=h=>{h.data instanceof Error?v(h.data):g(h.data),f.port1.close(),f.port2.close(),f.port1.onmessage=null},a.postMessage(p,[f.port2])}),u=await navigator.storage.getDirectory(),m=await i.get(this),d=await u.resolve(m);if(d===null)throw new DOMException(...zv);return await c({type:"open",path:d,name:this.name}),n?.keepExistingData===!1&&(await c({type:"truncate",size:0}),l=0),new qr({start:p=>{},async write(p){if(p?.constructor===Object?p={...p}:p={type:"write",data:p,position:o},p.type==="write"){if(!("data"in p))throw await c({type:"close"}),new DOMException(...fs("write requires a data argument"));if(p.position??=o,typeof p.data=="string")p.data=s.encode(p.data);else if(p.data instanceof ArrayBuffer)p.data=new Uint8Array(p.data);else if(!(p.data instanceof Uint8Array)&&ArrayBuffer.isView(p.data))p.data=new Uint8Array(p.data.buffer,p.data.byteOffset,p.data.byteLength);else if(!(p.data instanceof Uint8Array)){const g=await new Response(p.data).arrayBuffer();p.data=new Uint8Array(g)}Number.isInteger(p.position)&&p.position>=0&&(o=p.position),o+=p.data.byteLength,l+=p.data.byteLength}else if(p.type==="seek")if(Number.isInteger(p.position)&&p.position>=0){if(l<p.position)throw new DOMException(...Bv);console.log("seeking",p),o=p.position;return}else throw await c({type:"close"}),new DOMException(...fs("seek requires a position argument"));else if(p.type==="truncate")if(Number.isInteger(p.size)&&p.size>=0)l=p.size,o>l&&(o=l);else throw await c({type:"close"}),new DOMException(...fs("truncate requires a size argument"));await c(p)},async close(){await c({type:"close"}),a.terminate()},async abort(p){await c({type:"abort",reason:p}),a.terminate()}})};const r=FileSystemDirectoryHandle.prototype.getFileHandle;FileSystemDirectoryHandle.prototype.getFileHandle=async function(...n){const a=await r.call(this,...n);return i.set(a,this),a}}const Di=Object.freeze(Object.defineProperty({__proto__:null,FileSystemFileHandle:Yn,default:Yn},Symbol.toStringTag,{value:"Module"})),Hv=document.getElementById("newFile"),kv=document.getElementById("loadFile"),Gv=document.getElementById("saveFile"),Vv=document.getElementById("exportFile");let qi="unnamed",Wv=5*60*1e3;setInterval(()=>{console.log("Autosaving...");const i=Jl(tt);localStorage.setItem(Xn.autosave,i),console.log("Autosaving complete!")},Wv),Hv.addEventListener("click",()=>{wv()}),kv.addEventListener("click",async()=>{const[i]=await Pv({accepts:[{accept:{"application/json":[".json"]}}],multiple:!1});qi=i.name.split(".")[0];const e=await(await i.getFile()).text(),t=Ql(e);Av(t)}),Gv.addEventListener("click",async()=>{const i=await oc({suggestedName:`${qi}.json`,types:[{accept:{"application/json":[".json"]}}]});qi=i.name.split(".")[0];const e=Jl(tt),t=await i.createWritable();await t.write(e),await t.close()}),Vv.addEventListener("click",async()=>{const i=tt.generate_mesh(1,1024,50),e=tg(qi,i),t=await(await oc({suggestedName:`${qi}.zip`,types:[{accept:{"application/zip":[".zip"]}}]})).createWritable();await t.write(e),await t.close()});const ms=document.getElementById("undoButton"),gs=document.getElementById("redoButton");ms.disabled=!0,gs.disabled=!0,tt.undoStatusCallback=(i,e)=>{ms.disabled=i,gs.disabled=e},ms.addEventListener("click",()=>{tt.undo()}),gs.addEventListener("click",()=>{tt.redo()});const Xv=document.getElementById("swap");Xv.onclick=()=>{tt.changeColor(12345678,0)},lg();let Kn=new Lm,Zn=new Me;rc.innerText=`Current Tool: ${Jt[Cr.value]}`,Cr.listen(i=>{rc.innerText=`Current Tool: ${Jt[i]}`});function uc(i){const e=Ti.getBoundingClientRect();return{x:i.clientX-e.left,y:i.clientY-e.top}}function jv(){const i=new Tm(16777215,16777215,3);i.color.setRGB(.6,.6,.6),i.position.set(0,50,0),ur.add(i);const e=new Rm(new Re(1,1,1),6);e.position.set(-1,1.75,1),e.position.multiplyScalar(30),e.lookAt(new P(0,0,0)),ur.add(e),ur.add(Xm),ur.add(ns),ur.background=new Re(.95,.95,.95),ur.add(pr),Wi.add(Ri),document.addEventListener("pointermove",Yv),document.addEventListener("pointerdown",Kv),window.addEventListener("resize",qv),Hl()}function qv(){hr.aspect=window.innerWidth/window.innerHeight,hr.updateProjectionMatrix(),Xi.setSize(window.innerWidth,window.innerHeight),Xi.setPixelRatio(Math.min(window.devicePixelRatio,2)),Fn.setSize(window.innerWidth,window.innerHeight)}function hc(i,e,t=1e-4){return Math.abs(i.x-e.x)<t&&Math.abs(i.y-e.y)<t&&Math.abs(i.z-e.z)<t}tt.removeVoxelCallback=(i,e,t)=>{let r=us(i,e,t);for(const n of Rr.children)if(hc(n.position,r)){Rr.remove(n);break}},tt.setVoxelCallback=(i,e)=>{let[t,r,n]=i,a=us(t,r,n);for(const c of Rr.children)if(hc(c.position,a)){let u=dr(Ai(e));const m=new cr({color:u});let d=c;d.material=m;return}const o=Xl.clone(!0);o.visible=!0;let s=dr(Ai(e));const l=new cr({color:s});o.material=l,o.position.copy(a),Rr.add(o)},tt.paletteColorSwapCallback=(i,e)=>{let t=Ai(i),r=Ai(e);for(const n of Rr.children)if(n instanceof Pt){const a=n.material,o=qm(a.color);jm(r,o)&&(a.color=dr(t))}};let Yi=null;function Yv(i){if(i.target!==Ti)return;let e=uc(i);Zn.set(e.x/window.innerWidth*2-1,-(e.y/window.innerHeight)*2+1),Kn.setFromCamera(Zn,hr);const t=Kn.intersectObjects(Wi.children,!0);if(Xr.selectedObjects=[],Yi){let r=Yi.position.clone().divideScalar(50).floor();r.addScalar(Bt/2);let n=tt.getVoxel(r.x,r.y,r.z);if(n){const a=tt.getVoxelColor(n);let o=dr(Ai(a));const s=new cr({color:o});Yi.material=s}Yi=null}if(t.length>0){const r=t[0];switch(Cr.value){case Jt.Place:if(pr.material=new cr({color:dr(wi())}),pr.position.copy(r.point).add(r.face?.normal),pr.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25),pr.position.y<0){pr.visible=!1;break}pr.visible=!0;break;case Jt.Paint:{let n=r.object;if(n!==Ri){const a=new cr({color:dr(wi())});n.material=a}break}case Jt.Delete:{let n=r.object;if(n!==Ri){const a=new cr({color:16711680});n.material=a}break}case Jt.Eyedropper:{let n=r.object;n!==Ri&&(Xr.selectedObjects=[n]);break}}r.object!==Ri&&(Yi=r.object)}else pr.visible=!1}function Kv(i){if(i.button!==0||i.target!==Ti)return;let e=uc(i);Zn.set(e.x/window.innerWidth*2-1,-(e.y/window.innerHeight)*2+1),Kn.setFromCamera(Zn,hr);const t=Kn.intersectObjects(Wi.children,!0);if(t.length>0){const r=t[0];switch(Cr.value){case Jt.Place:let n=r.point.add(r.face?.normal);if(n.divideScalar(ic).floor(),n.y<0)break;n.addScalar(Bt/2),tt.setVoxel(n.x,n.y,n.z,Gl(wi()));break;case Jt.Paint:{const a=r.object;let o=a.position.clone().divideScalar(50).floor();if(o.addScalar(Bt/2),tt.getVoxel(o.x,o.y,o.z)){tt.paintVoxel(o.x,o.y,o.z,Gl(wi()));const s=new cr({color:dr(wi())});a.material=s}break}case Jt.Delete:{const a=r.object;let o=a.position.clone().divideScalar(50).floor();o.addScalar(Bt/2),tt.getVoxel(o.x,o.y,o.z)&&(a.removeFromParent(),tt.removeVoxel(o.x,o.y,o.z));break}case Jt.Eyedropper:{let a=r.object.position.clone().divideScalar(50).floor();a.addScalar(Bt/2);let o=tt.getVoxel(a.x,a.y,a.z);if(o){let s=tt.getVoxelColor(o);Ym(s)}break}}}}jv()})();export{t0 as __tla,Ms as c,Zi as e};
