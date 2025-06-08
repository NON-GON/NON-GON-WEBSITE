/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="177",cy={ROTATE:0,DOLLY:1,PAN:2},ly={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},af=0,tc=1,hf=2,Wl=1,cf=2,Nn=3,ci=0,He=1,Fn=2,ri=0,gs=1,ec=2,nc=3,ic=4,lf=5,Ti=100,uf=101,ff=102,df=103,pf=104,mf=200,gf=201,xf=202,_f=203,Oa=204,Ba=205,yf=206,Mf=207,vf=208,Sf=209,wf=210,bf=211,Ef=212,Tf=213,Af=214,Va=0,ka=1,Ga=2,vs=3,Ha=4,Wa=5,Xa=6,qa=7,Xl=0,Rf=1,Cf=2,oi=0,Pf=1,Lf=2,Df=3,Uf=4,If=5,Nf=6,zf=7,ql=300,Ss=301,ws=302,$a=303,Ya=304,Ao=306,Za=1e3,Ri=1001,Ka=1002,gn=1003,Ff=1004,dr=1005,yn=1006,Io=1007,Ci=1008,vn=1009,$l=1010,Yl=1011,$s=1012,Lh=1013,Li=1014,On=1015,tr=1016,Dh=1017,Uh=1018,Ys=1020,Zl=35902,Kl=1021,jl=1022,mn=1023,Zs=1026,Ks=1027,Jl=1028,Ih=1029,Ql=1030,Nh=1031,zh=1033,oo=33776,ao=33777,ho=33778,co=33779,ja=35840,Ja=35841,Qa=35842,th=35843,eh=36196,nh=37492,ih=37496,sh=37808,rh=37809,oh=37810,ah=37811,hh=37812,ch=37813,lh=37814,uh=37815,fh=37816,dh=37817,ph=37818,mh=37819,gh=37820,xh=37821,lo=36492,_h=36494,yh=36495,tu=36283,Mh=36284,vh=36285,Sh=36286,Of=3200,Bf=3201,Vf=0,kf=1,ii="",tn="srgb",bs="srgb-linear",yo="linear",se="srgb",Oi=7680,sc=519,Gf=512,Hf=513,Wf=514,eu=515,Xf=516,qf=517,$f=518,Yf=519,rc=35044,oc="300 es",Bn=2e3,Mo=2001;let Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}};const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,wh=180/Math.PI;function er(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function Zf(s,t){return(s%t+t)%t}function No(s,t,e){return(1-e)*s+e*t}function Cs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fy={DEG2RAD:uo};let ee=class nu{constructor(t=0,e=0){nu.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let h=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||h!==f||c!==d||l!==m){let g=1-a;const p=h*f+c*d+l*m+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),E=Math.atan2(T,p*y);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}const _=a*y;if(h=h*g+f*_,c=c*g+d*_,l=l*g+m*_,u=u*g+x*_,g===1-a){const T=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=T,c*=T,l*=T,u*=T}}t[e]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],h=n[i+1],c=n[i+2],l=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+l*u+h*d-c*f,t[e+1]=h*m+l*f+c*u-a*d,t[e+2]=c*m+l*d+a*f-h*u,t[e+3]=l*m-a*u-h*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,c=a(n/2),l=a(i/2),u=a(r/2),f=h(n/2),d=h(i/2),m=h(r/2);switch(o){case"XYZ":this._x=f*l*u+c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u-f*d*m;break;case"YXZ":this._x=f*l*u+c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u+f*d*m;break;case"ZXY":this._x=f*l*u-c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u-f*d*m;break;case"ZYX":this._x=f*l*u-c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u+f*d*m;break;case"YZX":this._x=f*l*u+c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u-f*d*m;break;case"XZY":this._x=f*l*u-c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],h=e[9],c=e[2],l=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-h)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(l-h)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(h+l)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(h+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,h=e._y,c=e._z,l=e._w;return this._x=n*l+o*a+i*c-r*h,this._y=i*l+o*h+r*a-n*c,this._z=r*l+o*c+n*h-i*a,this._w=o*l-n*a-i*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(h),l=Math.atan2(c,a),u=Math.sin((1-e)*l)/c,f=Math.sin(e*l)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class iu{constructor(t=0,e=0,n=0){iu.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,h=t.w,c=2*(o*i-a*n),l=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+h*c+o*u-a*l,this.y=n+h*l+a*c-r*u,this.z=i+h*u+r*l-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const zo=new B,ac=new nr;let Vt=class su{constructor(t,e,n,i,r,o,a,h,c){su.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,c)}set(t,e,n,i,r,o,a,h,c){const l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=h,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],l=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],y=i[1],M=i[4],_=i[7],T=i[2],E=i[5],A=i[8];return r[0]=o*x+a*y+h*T,r[3]=o*g+a*M+h*E,r[6]=o*p+a*_+h*A,r[1]=c*x+l*y+u*T,r[4]=c*g+l*M+u*E,r[7]=c*p+l*_+u*A,r[2]=f*x+d*y+m*T,r[5]=f*g+d*M+m*E,r[8]=f*p+d*_+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],l=t[8];return e*o*l-e*a*c-n*r*l+n*a*h+i*r*c-i*o*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],l=t[8],u=l*o-a*c,f=a*h-l*r,d=c*r-o*h,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(l*e-i*h)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*h-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*o+c*a)+o+t,-i*c,i*h,-i*(-c*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Fo=new Vt;function ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kf(){const s=vo("canvas");return s.style.display="block",s}const hc={};function xs(s){s in hc||(hc[s]=!0,console.warn(s))}function jf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jf(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const cc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function td(){const s={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bs]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:se,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}const Yt=td();function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bi,ed=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=vo("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nd=0,Fh=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oo(i[o].image)):r.push(Oo(i[o]))}else r=Oo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ed.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let id=0;const Bo=new B;let Sn=class fo extends Ni{constructor(t=fo.DEFAULT_IMAGE,e=fo.DEFAULT_MAPPING,n=Ri,i=Ri,r=yn,o=Ci,a=mn,h=vn,c=fo.DEFAULT_ANISOTROPY,l=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=er(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bo).x}get height(){return this.source.getSize(Bo).y}get depth(){return this.source.getSize(Bo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=ql;Sn.DEFAULT_ANISOTROPY=1;let xe=class ou{constructor(t=0,e=0,n=0,i=1){ou.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const h=t.elements,c=h[0],l=h[4],u=h[8],f=h[1],d=h[5],m=h[9],x=h[2],g=h[6],p=h[10];if(Math.abs(l-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(d+1)/2,T=(p+1)/2,E=(l+f)/4,A=(u+x)/4,R=(m+g)/4;return M>_&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=A/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=R/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(f-l)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class sd extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Sn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Fh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends sd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class au extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ir=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),mr.subVectors(this.max,Ps),Vi.subVectors(t.a,Ps),ki.subVectors(t.b,Ps),Gi.subVectors(t.c,Ps),Xn.subVectors(ki,Vi),qn.subVectors(Gi,ki),mi.subVectors(Vi,Gi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!Vo(e,Vi,ki,Gi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Vi,ki,Gi,mr))?!1:(gr.crossVectors(Xn,qn),e=[gr.x,gr.y,gr.z],Vo(e,Vi,ki,Gi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}};const En=[new B,new B,new B,new B,new B,new B,new B,new B],rn=new B,pr=new ir,Vi=new B,ki=new B,Gi=new B,Xn=new B,qn=new B,mi=new B,Ps=new B,mr=new B,gr=new B,gi=new B;function Vo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gi.fromArray(s,r);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),h=t.dot(gi),c=e.dot(gi),l=n.dot(gi);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>a)return!1}return!0}const od=new ir,Ls=new B,ko=new B;let Ro=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):od.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(ko)),this.expandByPoint(Ls.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Tn=new B,Go=new B,xr=new B,$n=new B,Ho=new B,_r=new B,Wo=new B;let hu=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=$n.dot(this.direction),h=-$n.dot(xr),c=$n.lengthSq(),l=Math.abs(1-o*o);let u,f,d,m;if(l>0)if(u=o*h-a,f=o*a-h,m=r*l,u>=0)if(f>=-m)if(f<=m){const x=1/l;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*h)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-h),r),d=-u*u+f*(f+2*h)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-h),r),d=f*(f+2*h)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-h),r),d=-u*u+f*(f+2*h)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Go).addScaledVector(xr,f),d}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,h;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),l>=0?(r=(t.min.y-f.y)*l,o=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,o=(t.min.y-f.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){Ho.subVectors(e,t),_r.subVectors(n,t),Wo.crossVectors(Ho,_r);let o=this.direction.dot(Wo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const h=a*this.direction.dot(_r.crossVectors($n,_r));if(h<0)return null;const c=a*this.direction.dot(Ho.cross($n));if(c<0||h+c>o)return null;const l=-a*$n.dot(Wo);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class bh{constructor(t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g){bh.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g)}set(t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=c,p[6]=l,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bh().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*l,d=o*u,m=a*l,x=a*u;e[0]=h*l,e[4]=-h*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*h,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*h}else if(t.order==="YXZ"){const f=h*l,d=h*u,m=c*l,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*l,d=h*u,m=c*l,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*l,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*l,d=o*u,m=a*l,x=a*u;e[0]=h*l,e[4]=m*c-d,e[8]=f*c+x,e[1]=h*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*c,m=a*h,x=a*c;e[0]=h*l,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-c*l,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*h,d=o*c,m=a*h,x=a*c;e[0]=h*l,e[4]=-u,e[8]=c*l,e[1]=f*u+x,e[5]=o*l,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*l,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,hd)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Yn.crossVectors(n,Xe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Yn.crossVectors(n,Xe)),Yn.normalize(),yr.crossVectors(Xe,Yn),i[0]=Yn.x,i[4]=yr.x,i[8]=Xe.x,i[1]=Yn.y,i[5]=yr.y,i[9]=Xe.y,i[2]=Yn.z,i[6]=yr.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],l=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],_=n[11],T=n[15],E=i[0],A=i[4],R=i[8],w=i[12],v=i[1],P=i[5],O=i[9],N=i[13],k=i[2],Z=i[6],X=i[10],Q=i[14],H=i[3],it=i[7],rt=i[11],ut=i[15];return r[0]=o*E+a*v+h*k+c*H,r[4]=o*A+a*P+h*Z+c*it,r[8]=o*R+a*O+h*X+c*rt,r[12]=o*w+a*N+h*Q+c*ut,r[1]=l*E+u*v+f*k+d*H,r[5]=l*A+u*P+f*Z+d*it,r[9]=l*R+u*O+f*X+d*rt,r[13]=l*w+u*N+f*Q+d*ut,r[2]=m*E+x*v+g*k+p*H,r[6]=m*A+x*P+g*Z+p*it,r[10]=m*R+x*O+g*X+p*rt,r[14]=m*w+x*N+g*Q+p*ut,r[3]=y*E+M*v+_*k+T*H,r[7]=y*A+M*P+_*Z+T*it,r[11]=y*R+M*O+_*X+T*rt,r[15]=y*w+M*N+_*Q+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],h=t[9],c=t[13],l=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*h*u-i*c*u-r*a*f+n*c*f+i*a*d-n*h*d)+x*(+e*h*d-e*c*f+r*o*f-i*o*d+i*c*l-r*h*l)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*l-n*c*l)+p*(-i*a*l-e*h*u+e*a*f+i*o*u-n*o*f+n*h*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],l=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*c-x*f*c+x*h*d-a*g*d-u*h*p+a*f*p,M=m*f*c-l*g*c-m*h*d+o*g*d+l*h*p-o*f*p,_=l*x*c-m*u*c+m*a*d-o*x*d-l*a*p+o*u*p,T=m*u*h-l*x*h-m*a*f+o*x*f+l*a*g-o*u*g,E=e*y+n*M+i*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*p-n*f*p)*A,t[2]=(a*g*r-x*h*r+x*i*c-n*g*c-a*i*p+n*h*p)*A,t[3]=(u*h*r-a*f*r-u*i*c+n*f*c+a*i*d-n*h*d)*A,t[4]=M*A,t[5]=(l*g*r-m*f*r+m*i*d-e*g*d-l*i*p+e*f*p)*A,t[6]=(m*h*r-o*g*r-m*i*c+e*g*c+o*i*p-e*h*p)*A,t[7]=(o*f*r-l*h*r+l*i*c-e*f*c-o*i*d+e*h*d)*A,t[8]=_*A,t[9]=(m*u*r-l*x*r-m*n*d+e*x*d+l*n*p-e*u*p)*A,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*A,t[11]=(l*a*r-o*u*r-l*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=T*A,t[13]=(l*x*i-m*u*i+m*n*f-e*x*f-l*n*g+e*u*g)*A,t[14]=(m*a*i-o*x*i-m*n*h+e*x*h+o*n*g-e*a*g)*A,t[15]=(o*u*i-l*a*i+l*n*h-e*u*h-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-i*h,c*h+i*a,0,c*a+i*h,l*a+n,l*h-i*o,0,c*h-i*a,l*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,c=r+r,l=o+o,u=a+a,f=r*c,d=r*l,m=r*u,x=o*l,g=o*u,p=a*u,y=h*c,M=h*l,_=h*u,T=n.x,E=n.y,A=n.z;return i[0]=(1-(x+p))*T,i[1]=(d+_)*T,i[2]=(m-M)*T,i[3]=0,i[4]=(d-_)*E,i[5]=(1-(f+p))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(m+M)*A,i[9]=(g-y)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Hi.set(i[0],i[1],i[2]).length();const o=Hi.set(i[4],i[5],i[6]).length(),a=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,l=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=l,on.elements[5]*=l,on.elements[6]*=l,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Bn){const h=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Bn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Mo)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=l,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Bn){const h=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*l;let m,x;if(a===Bn)m=(o+r)*u,x=-2*u;else if(a===Mo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=x,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const Hi=new B,on=new pe,ad=new B(0,0,0),hd=new B(1,1,1),Yn=new B,yr=new B,Xe=new B,uc=new pe,fc=new nr;let Ui=class cu{constructor(t=0,e=0,n=0,i=cu.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],h=i[1],c=i[5],l=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";let lu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cd=0;const dc=new B,Wi=new nr,An=new pe,Mr=new B,Ds=new B,ld=new B,ud=new nr,pc=new B(1,0,0),mc=new B(0,1,0),gc=new B(0,0,1),xc={type:"added"},fd={type:"removed"},Xi={type:"childadded",child:null},Xo={type:"childremoved",child:null};let Ze=class po extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=po.DEFAULT_UP.clone();const t=new B,e=new Ui,n=new nr,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Vt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=po.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=po.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(pc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(gc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ds,Mr,this.up):An.lookAt(Mr,Ds,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(An),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){const u=h[c];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(t.materials,this.material[h]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),c=o(t.textures),l=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const h=[];for(const c in a){const l=a[c];delete l.metadata,h.push(l)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}};Ze.DEFAULT_UP=new B(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new B,Rn=new B,qo=new B,Cn=new B,qi=new B,$i=new B,_c=new B,$o=new B,Yo=new B,Zo=new B,Ko=new xe,jo=new xe,Jo=new xe;let Us=class ls{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),Rn.subVectors(n,e),qo.subVectors(t,e);const o=an.dot(an),a=an.dot(Rn),h=an.dot(qo),c=Rn.dot(Rn),l=Rn.dot(qo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*h-a*l)*f,m=(o*l-a*h)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,r,o,a,h){return this.getBarycoord(t,e,n,i,Cn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Cn.x),h.addScaledVector(o,Cn.y),h.addScaledVector(a,Cn.z),h)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ko.setScalar(0),jo.setScalar(0),Jo.setScalar(0),Ko.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Jo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ko,r.x),o.addScaledVector(jo,r.y),o.addScaledVector(Jo,r.z),o}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),Rn.subVectors(t,e),an.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ls.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ls.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ls.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ls.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ls.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;qi.subVectors(i,n),$i.subVectors(r,n),$o.subVectors(t,n);const h=qi.dot($o),c=$i.dot($o);if(h<=0&&c<=0)return e.copy(n);Yo.subVectors(t,i);const l=qi.dot(Yo),u=$i.dot(Yo);if(l>=0&&u<=l)return e.copy(i);const f=h*u-l*c;if(f<=0&&h>=0&&l<=0)return o=h/(h-l),e.copy(n).addScaledVector(qi,o);Zo.subVectors(t,r);const d=qi.dot(Zo),m=$i.dot(Zo);if(m>=0&&d<=m)return e.copy(r);const x=d*c-h*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector($i,a);const g=l*m-d*u;if(g<=0&&u-l>=0&&d-m>=0)return _c.subVectors(r,i),a=(u-l)/(u-l+(d-m)),e.copy(i).addScaledVector(_c,a);const p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(qi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Qo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}let Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Zf(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qo(o,r,t+1/3),this.g=Qo(o,r,t),this.b=Qo(o,r,t-1/3)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Yt.workingToColorSpace(Ce.copy(this),t),Math.round(Gt(Ce.r*255,0,255))*65536+Math.round(Gt(Ce.g*255,0,255))*256+Math.round(Gt(Ce.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let h,c;const l=(a+o)/2;if(a===o)h=0,c=0;else{const u=o-a;switch(c=l<=.5?u/(o+a):u/(2-o-a),o){case n:h=(i-r)/u+(i<r?6:0);break;case i:h=(r-n)/u+2;break;case r:h=(n-i)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=l,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=tn){Yt.workingToColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(vr);const n=No(Zn.h,vr.h,e),i=No(Zn.s,vr.s,e),r=No(Zn.l,vr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ce=new Xt;Xt.NAMES=uu;let dd=0,sr=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=er(),this.name="",this.type="Material",this.blending=gs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fu=class extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const me=new B,Sr=new ee;let pd=0,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}},du=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}},pu=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ai=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},md=0;const Je=new pe,ta=new Ze,Yi=new B,qe=new ir,Is=new ir,we=new B;let li=class mu extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?pu:du)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(qe.min,Is.min),qe.expandByPoint(we),we.addVectors(qe.max,Is.max),qe.expandByPoint(we)):(qe.expandByPoint(Is.min),qe.expandByPoint(Is.max))}qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)we.fromBufferAttribute(a,c),h&&(Yi.fromBufferAttribute(t,c),we.add(Yi)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let R=0;R<n.count;R++)a[R]=new B,h[R]=new B;const c=new B,l=new B,u=new B,f=new ee,d=new ee,m=new ee,x=new B,g=new B;function p(R,w,v){c.fromBufferAttribute(n,R),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),l.sub(c),u.sub(c),d.sub(f),m.sub(f);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(l,-m.x).multiplyScalar(P),a[R].add(x),a[w].add(x),a[v].add(x),h[R].add(g),h[w].add(g),h[v].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,w=y.length;R<w;++R){const v=y[R],P=v.start,O=v.count;for(let N=P,k=P+O;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new B,_=new B,T=new B,E=new B;function A(R){T.fromBufferAttribute(i,R),E.copy(T);const w=a[R];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);const P=_.dot(h[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,w=y.length;R<w;++R){const v=y[R],P=v.start,O=v.count;for(let N=P,k=P+O;N<k;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,r=new B,o=new B,a=new B,h=new B,c=new B,l=new B,u=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),l.subVectors(o,r),u.subVectors(i,r),l.cross(u),a.fromBufferAttribute(n,m),h.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(l),h.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,h.x,h.y,h.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),l.subVectors(o,r),u.subVectors(i,r),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,h){const c=a.array,l=a.itemSize,u=a.normalized,f=new c.constructor(h.length*l);let d=0,m=0;for(let x=0,g=h.length;x<g;x++){a.isInterleavedBufferAttribute?d=h[x]*a.data.stride+a.offset:d=h[x]*l;for(let p=0;p<l;p++)f[m++]=c[d++]}return new Te(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mu,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],c=t(h,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const h=[],c=r[a];for(let l=0,u=c.length;l<u;l++){const f=c[l],d=t(f,n);h.push(d)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const c=n[h];t.data.attributes[h]=c.toJSON(t.data)}const i={};let r=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],l=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];l.push(d.toJSON(t.data))}l.length>0&&(i[h]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],u=r[c];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,l=o.length;c<l;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const yc=new pe,xi=new hu,wr=new Ro,Mc=new B,br=new B,Er=new B,Tr=new B,ea=new B,Ar=new B,vc=new B,Rr=new B;let Vn=class extends Ze{constructor(t=new li,e=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let h=0,c=r.length;h<c;h++){const l=a[h],u=r[h];l!==0&&(ea.fromBufferAttribute(u,t),o?Ar.addScaledVector(ea,l):Ar.addScaledVector(ea.sub(e),l))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(wr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(wr,Mc)===null||xi.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(yc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=M;_<T;_+=3){const E=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);i=Cr(this,p,t,n,c,l,u,E,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const y=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);i=Cr(this,o,t,n,c,l,u,y,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(h.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=M;_<T;_+=3){const E=_,A=_+1,R=_+2;i=Cr(this,p,t,n,c,l,u,E,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const y=g,M=g+1,_=g+2;i=Cr(this,o,t,n,c,l,u,y,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function gd(s,t,e,n,i,r,o,a){let h;if(t.side===He?h=n.intersectTriangle(o,r,i,!0,a):h=n.intersectTriangle(i,r,o,t.side===ci,a),h===null)return null;Rr.copy(a),Rr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:s}}function Cr(s,t,e,n,i,r,o,a,h,c){s.getVertexPosition(a,br),s.getVertexPosition(h,Er),s.getVertexPosition(c,Tr);const l=gd(s,t,e,n,br,Er,Tr,vc);if(l){const u=new B;Us.getBarycoord(vc,br,Er,Tr,u),i&&(l.uv=Us.getInterpolatedAttribute(i,a,h,c,u,new ee)),r&&(l.uv1=Us.getInterpolatedAttribute(r,a,h,c,u,new ee)),o&&(l.normal=Us.getInterpolatedAttribute(o,a,h,c,u,new B),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:h,c,normal:new B,materialIndex:0};Us.getNormal(br,Er,Tr,f.normal),l.face=f,l.barycoord=u}return l}class rr extends li{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],c=[],l=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(l,3)),this.setAttribute("uv",new ai(u,2));function m(x,g,p,y,M,_,T,E,A,R,w){const v=_/A,P=T/R,O=_/2,N=T/2,k=E/2,Z=A+1,X=R+1;let Q=0,H=0;const it=new B;for(let rt=0;rt<X;rt++){const ut=rt*P-N;for(let Dt=0;Dt<Z;Dt++){const Ht=Dt*v-O;it[x]=Ht*y,it[g]=ut*M,it[p]=k,c.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=E>0?1:-1,l.push(it.x,it.y,it.z),u.push(Dt/A),u.push(1-rt/R),Q+=1}}for(let rt=0;rt<R;rt++)for(let ut=0;ut<A;ut++){const Dt=f+ut+Z*rt,Ht=f+ut+Z*(rt+1),$=f+(ut+1)+Z*(rt+1),st=f+(ut+1)+Z*rt;h.push(Dt,Ht,st),h.push(Ht,$,st),H+=6}a.addGroup(d,H,w),d+=H,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=Es(s[e]);for(const i in n)t[i]=n[i]}return t}function xd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const _d={clone:Es,merge:Ve};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new B,Sc=new ee,wc=new ee;class dn extends xu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Sc,wc),e.subVectors(wc,Sc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/h,e-=o.offsetY*n/c,i*=o.width/h,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ki=1;class vd extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Zi,Ki,t,e);i.layers=this.layers,this.add(i);const r=new dn(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const o=new dn(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new dn(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const h=new dn(Zi,Ki,t,e);h.layers=this.layers,this.add(h);const c=new dn(Zi,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,h]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,c,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,h),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _u extends Sn{constructor(t=[],e=Ss,n,i,r,o,a,h,c,l){super(t,e,n,i,r,o,a,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _u(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rr(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ri});r.uniforms.tEquirect.value=e;const o=new Vn(i,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=yn),new vd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Pr extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wd={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return a!==null&&(a.visible=i!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ry extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ia=new B,bd=new B,Ed=new Vt;let bi=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ia.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ed.getNormalMatrix(t),i=this.coplanarPoint(ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const _i=new Ro,Lr=new B;class Oh{constructor(t=new bi,e=new bi,n=new bi,i=new bi,r=new bi,o=new bi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],h=i[3],c=i[4],l=i[5],u=i[6],f=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],y=i[13],M=i[14],_=i[15];if(n[0].setComponents(h-r,f-c,g-d,_-p).normalize(),n[1].setComponents(h+r,f+c,g+d,_+p).normalize(),n[2].setComponents(h+o,f+l,g+m,_+y).normalize(),n[3].setComponents(h-o,f-l,g-m,_-y).normalize(),n[4].setComponents(h-a,f-u,g-x,_-M).normalize(),e===Bn)n[5].setComponents(h+a,f+u,g+x,_+M).normalize();else if(e===Mo)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}let Td=class extends sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};const So=new B,wo=new B,bc=new pe,Ns=new hu,Dr=new Ro,sa=new B,Ec=new B;let Ly=class extends Ze{constructor(t=new li,e=new Td){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)So.fromBufferAttribute(e,i-1),wo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=So.distanceTo(wo);t.setAttribute("lineDistance",new ai(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;bc.copy(i).invert(),Ns.copy(t.ray).applyMatrix4(bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=l.getX(x),y=l.getX(x+1),M=Ur(this,t,Ns,h,p,y,x);M&&e.push(M)}if(this.isLineLoop){const x=l.getX(m-1),g=l.getX(d),p=Ur(this,t,Ns,h,x,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=Ur(this,t,Ns,h,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=Ur(this,t,Ns,h,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ur(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(So.fromBufferAttribute(a,i),wo.fromBufferAttribute(a,r),e.distanceSqToSegment(So,wo,sa,Ec)>n)return;sa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(sa);if(!(c<t.near||c>t.far))return{distance:c,point:Ec.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class yu extends Sn{constructor(t,e,n=Li,i,r,o,a=gn,h=gn,c,l=Zs,u=1){if(l!==Zs&&l!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,h,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}let Mu=class vu extends li{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(i),c=a+1,l=h+1,u=t/a,f=e/h,d=[],m=[],x=[],g=[];for(let p=0;p<l;p++){const y=p*f-o;for(let M=0;M<c;M++){const _=M*u-r;m.push(_,-y,0),x.push(0,0,1),g.push(M/a),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let y=0;y<a;y++){const M=y+c*p,_=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(M,_,E),d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new ai(m,3)),this.setAttribute("normal",new ai(x,3)),this.setAttribute("uv",new ai(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.width,t.height,t.widthSegments,t.heightSegments)}};class Ad extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rd extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Su extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ra=new pe,Tc=new B,Ac=new B;class Cd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wu extends xu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,h=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,h=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pd extends Cd{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uy extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Pd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Iy extends Su{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ld extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ny{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zy extends Ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rc(s,t,e,n){const i=Dd(n);switch(e){case Kl:return s*t;case Jl:return s*t/i.components*i.byteLength;case Ih:return s*t/i.components*i.byteLength;case Ql:return s*t*2/i.components*i.byteLength;case Nh:return s*t*2/i.components*i.byteLength;case jl:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case zh:return s*t*4/i.components*i.byteLength;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ho:case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ja:case th:return Math.max(s,16)*Math.max(t,8)/4;case ja:case Qa:return Math.max(s,8)*Math.max(t,8)/2;case eh:case nh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ih:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ah:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ph:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case mh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case lo:case _h:case yh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tu:case Mh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vh:case Sh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dd(s){switch(s){case vn:case $l:return{byteLength:1,components:1};case $s:case Yl:case tr:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case Li:case Lh:case On:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ud(s){const t=new WeakMap;function e(a,h){const c=a.array,l=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,c,l),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,h,c){const l=h.array,u=h.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,l);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];s.bufferSubData(c,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(s.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,h),c.version=a.version}}return{get:i,remove:r,update:o}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ip=`#define PI 3.141592653589793
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rp=`vec3 transformedNormal = objectNormal;
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
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Dp=`struct PhysicalMaterial {
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
}`,Up=`
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,km=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Zm=`#define LAMBERT
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
}`,Km=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,Qm=`#define NORMAL
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
}`,tg=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,fg=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Id,alphahash_pars_fragment:Nd,alphamap_fragment:zd,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:Vd,aomap_pars_fragment:kd,batching_pars_vertex:Gd,batching_vertex:Hd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:$d,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:tp,color_pars_vertex:ep,color_vertex:np,common:ip,cube_uv_reflection_fragment:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:op,displacementmap_vertex:ap,emissivemap_fragment:hp,emissivemap_pars_fragment:cp,colorspace_fragment:lp,colorspace_pars_fragment:up,envmap_fragment:fp,envmap_common_pars_fragment:dp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:Tp,envmap_vertex:gp,fog_vertex:xp,fog_pars_vertex:_p,fog_fragment:yp,fog_pars_fragment:Mp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Sp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:bp,lights_pars_begin:Ep,lights_toon_fragment:Ap,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Pp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Up,lights_fragment_maps:Ip,lights_fragment_end:Np,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:Vp,map_pars_fragment:kp,map_particle_fragment:Gp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:$p,morphnormal_vertex:Yp,morphtarget_pars_vertex:Zp,morphtarget_vertex:Kp,normal_fragment_begin:jp,normal_fragment_maps:Jp,normal_pars_fragment:Qp,normal_pars_vertex:tm,normal_vertex:em,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:om,opaque_fragment:am,packing:hm,premultiplied_alpha_fragment:cm,project_vertex:lm,dithering_fragment:um,dithering_pars_fragment:fm,roughnessmap_fragment:dm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:xm,shadowmask_pars_fragment:_m,skinbase_vertex:ym,skinning_pars_vertex:Mm,skinning_vertex:vm,skinnormal_vertex:Sm,specularmap_fragment:wm,specularmap_pars_fragment:bm,tonemapping_fragment:Em,tonemapping_pars_fragment:Tm,transmission_fragment:Am,transmission_pars_fragment:Rm,uv_pars_fragment:Cm,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Um,background_frag:Im,backgroundCube_vert:Nm,backgroundCube_frag:zm,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:Vm,distanceRGBA_vert:km,distanceRGBA_frag:Gm,equirect_vert:Hm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:$m,meshbasic_frag:Ym,meshlambert_vert:Zm,meshlambert_frag:Km,meshmatcap_vert:jm,meshmatcap_frag:Jm,meshnormal_vert:Qm,meshnormal_frag:tg,meshphong_vert:eg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:hg,shadow_vert:cg,shadow_frag:lg,sprite_vert:ug,sprite_frag:fg},ot={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},_n={basic:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ve([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ve([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ve([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ve([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ve([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ve([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ve([ot.common,ot.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ve([ot.lights,ot.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};_n.physical={uniforms:Ve([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ir={r:0,b:0,g:0},yi=new Ui,dg=new pe;function pg(s,t,e,n,i,r,o){const a=new Xt(0);let h=r===!0?0:1,c,l,u=null,f=0,d=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const T=m(M);T===null?p(a,h):T&&T.isColor&&(p(T,1),_=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,_){const T=m(_);T&&(T.isCubeTexture||T.mapping===Ao)?(l===void 0&&(l=new Vn(new rr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Es(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),yi.copy(_.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),l.material.uniforms.envMap.value=T,l.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(yi)),l.material.toneMapped=Yt.getTransfer(T.colorSpace)!==se,(u!==T||f!==T.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Vn(new Mu(2,2),new Hn({name:"BackgroundMaterial",uniforms:Es(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(T.colorSpace)!==se,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Ir,gu(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,_,o)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),h=_,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,p(a,h)},render:x,addToRenderList:g,dispose:y}}function mg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(v,P,O,N,k){let Z=!1;const X=u(N,O,P);r!==X&&(r=X,c(r.object)),Z=d(v,N,O,k),Z&&m(v,N,O,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(v,P,O,N),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function l(v){return s.deleteVertexArray(v)}function u(v,P,O){const N=O.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let Z=k[P.id];Z===void 0&&(Z={},k[P.id]=Z);let X=Z[N];return X===void 0&&(X=f(h()),Z[N]=X),X}function f(v){const P=[],O=[],N=[];for(let k=0;k<e;k++)P[k]=0,O[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:N,object:v,attributes:{},index:null}}function d(v,P,O,N){const k=r.attributes,Z=P.attributes;let X=0;const Q=O.getAttributes();for(const H in Q)if(Q[H].location>=0){const rt=k[H];let ut=Z[H];if(ut===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),rt===void 0||rt.attribute!==ut||ut&&rt.data!==ut.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function m(v,P,O,N){const k={},Z=P.attributes;let X=0;const Q=O.getAttributes();for(const H in Q)if(Q[H].location>=0){let rt=Z[H];rt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor));const ut={};ut.attribute=rt,rt&&rt.data&&(ut.data=rt.data),k[H]=ut,X++}r.attributes=k,r.attributesNum=X,r.index=N}function x(){const v=r.newAttributes;for(let P=0,O=v.length;P<O;P++)v[P]=0}function g(v){p(v,0)}function p(v,P){const O=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;O[v]=1,N[v]===0&&(s.enableVertexAttribArray(v),N[v]=1),k[v]!==P&&(s.vertexAttribDivisor(v,P),k[v]=P)}function y(){const v=r.newAttributes,P=r.enabledAttributes;for(let O=0,N=P.length;O<N;O++)P[O]!==v[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function M(v,P,O,N,k,Z,X){X===!0?s.vertexAttribIPointer(v,P,O,k,Z):s.vertexAttribPointer(v,P,O,N,k,Z)}function _(v,P,O,N){x();const k=N.attributes,Z=O.getAttributes(),X=P.defaultAttributeValues;for(const Q in Z){const H=Z[Q];if(H.location>=0){let it=k[Q];if(it===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const rt=it.normalized,ut=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const Ht=Dt.buffer,$=Dt.type,st=Dt.bytesPerElement,St=$===s.INT||$===s.UNSIGNED_INT||it.gpuType===Lh;if(it.isInterleavedBufferAttribute){const ft=it.data,wt=ft.stride,Zt=it.offset;if(ft.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)p(H.location+Ct,ft.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let Ct=0;Ct<H.locationSize;Ct++)M(H.location+Ct,ut/H.locationSize,$,rt,wt*st,(Zt+ut/H.locationSize*Ct)*st,St)}else{if(it.isInstancedBufferAttribute){for(let ft=0;ft<H.locationSize;ft++)p(H.location+ft,it.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ft=0;ft<H.locationSize;ft++)g(H.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let ft=0;ft<H.locationSize;ft++)M(H.location+ft,ut/H.locationSize,$,rt,ut*st,ut/H.locationSize*ft*st,St)}}else if(X!==void 0){const rt=X[Q];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(H.location,rt);break;case 3:s.vertexAttrib3fv(H.location,rt);break;case 4:s.vertexAttrib4fv(H.location,rt);break;default:s.vertexAttrib1fv(H.location,rt)}}}}y()}function T(){R();for(const v in n){const P=n[v];for(const O in P){const N=P[O];for(const k in N)l(N[k].object),delete N[k];delete P[O]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const O in P){const N=P[O];for(const k in N)l(N[k].object),delete N[k];delete P[O]}delete n[v.id]}function A(v){for(const P in n){const O=n[P];if(O[v.id]===void 0)continue;const N=O[v.id];for(const k in N)l(N[k].object),delete N[k];delete O[v.id]}}function R(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function gg(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let m=0;m<u;m++)d+=l[m];e.update(d,n,1)}function h(c,l,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],l[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,l,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=l[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function xg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==vn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!R)}function h(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const l=h(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function _g(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new bi,a=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?l(null):c();else{const y=r?0:n,M=y*4;let _=p.clippingState||null;h.value=_,_=l(m,f,M,d);for(let T=0;T!==M;++T)_[T]=e[T];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=h.value,m!==!0||g===null){const p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=d;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function yg(s){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Ss:a===Ya&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Ya)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const c=new Sd(h.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const fs=4,Cc=[.125,.215,.35,.446,.526,.582],Ai=20,oa=new wu,Pc=new Xt;let aa=null,ha=0,ca=0,la=!1;const Ei=(1+Math.sqrt(5))/2,ji=1/Ei,Lc=[new B(-Ei,ji,0),new B(Ei,ji,0),new B(-ji,0,Ei),new B(ji,0,Ei),new B(0,Ei,-ji),new B(0,Ei,ji),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Mg=new B;class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Mg}=r;aa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,i,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,ha,ca),this._renderer.xr.enabled=la,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:tr,format:mn,colorSpace:bs,depthBuffer:!1},i=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(r)),this._blurMaterial=Sg(r,t,e)}return i}_compileMaterial(t){const e=new Vn(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,i,r){const h=new dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Pc),u.toneMapping=oi,u.autoClear=!1;const m=new fu({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),x=new Vn(new rr,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Pc),g=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(h.up.set(0,c[y],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+l[y],r.y,r.z)):M===1?(h.up.set(0,0,c[y]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+l[y],r.z)):(h.up.set(0,c[y],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+l[y]));const _=this._cubeSize;Nr(i,M*_,y>2?_:0,_,_),u.setRenderTarget(i),g&&u.render(x,h),u.render(t,h)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ss||t.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;Nr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lc[(i-r-1)%Lc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Vn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ai-1),x=r/m,g=isFinite(r)?1+Math.floor(l*x):Ai;g>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const p=[];let y=0;for(let A=0;A<Ai;++A){const R=A/x,w=Math.exp(-R*R/2);p.push(w),A===0?y+=w:A<g&&(y+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const _=this._sizeLods[i],T=3*_*(i>M-fs?i-M+fs:0),E=4*(this._cubeSize-_);Nr(e,T,E,3*_,2*_),h.setRenderTarget(e),h.render(u,oa)}}function vg(s){const t=[],e=[],n=[];let i=s;const r=s-fs+1+Cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let h=1/a;o>s-fs?h=Cc[o-s+fs-1]:o===0&&(h=0),n.push(h);const c=1/(a-2),l=-c,u=1+c,f=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*d),M=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,R=E>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(w,x*m*E),M.set(f,g*m*E);const v=[E,E,E,E,E,E];_.set(v,p*m*E)}const T=new li;T.setAttribute("position",new Te(y,x)),T.setAttribute("uv",new Te(M,g)),T.setAttribute("faceIndex",new Te(_,p)),t.push(T),i>fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(s,t,e){const n=new Di(s,t,e);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sg(s,t,e){const n=new Float32Array(Ai),i=new B(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ic(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Nc(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function wg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,c=h===$a||h===Ya,l=h===Ss||h===ws;if(c||l){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||l&&d&&i(d)?(e===null&&(e=new Dc(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let h=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&h++;return h===c}function r(a){const h=a.target;h.removeEventListener("dispose",r);const c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Eg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let M=0,_=y.length;M<_;M+=3){const T=y[M+0],E=y[M+1],A=y[M+2];f.push(T,E,E,A,A,T)}}else if(m!==void 0){const y=m.array;x=m.version;for(let M=0,_=y.length/3-1;M<_;M+=3){const T=M+0,E=M+1,A=M+2;f.push(T,E,E,A,A,T)}}else return;const g=new(ru(f)?pu:du)(f,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function l(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:l}}function Tg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function l(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Ag(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rg(s,t,e){const n=new WeakMap,i=new xe;function r(o,a,h){const c=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*T*4*u),A=new au(E,_,T,u);A.type=On,A.needsUpdate=!0;const R=M*4;for(let v=0;v<u;v++){const P=g[v],O=p[v],N=y[v],k=_*T*4*v;for(let Z=0;Z<P.count;Z++){const X=Z*R;d===!0&&(i.fromBufferAttribute(P,Z),E[k+X+0]=i.x,E[k+X+1]=i.y,E[k+X+2]=i.z,E[k+X+3]=0),m===!0&&(i.fromBufferAttribute(O,Z),E[k+X+4]=i.x,E[k+X+5]=i.y,E[k+X+6]=i.z,E[k+X+7]=0),x===!0&&(i.fromBufferAttribute(N,Z),E[k+X+8]=i.x,E[k+X+9]=i.y,E[k+X+10]=i.z,E[k+X+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new ee(_,T)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const m=a.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",m),h.getUniforms().setValue(s,"morphTargetInfluences",c)}h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Cg(s,t,e,n){let i=new WeakMap;function r(h){const c=n.render.frame,l=h.geometry,u=t.get(h,l);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),i.get(h)!==c&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(h){const c=h.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Eu=new Sn,zc=new yu(1,1),Tu=new au,Au=new rd,Ru=new _u,Fc=[],Oc=[],Bc=new Float32Array(16),Vc=new Float32Array(9),kc=new Float32Array(4);function As(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fc[i];if(r===void 0&&(r=new Float32Array(i),Fc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Co(s,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function Dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function Ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Ig(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ve(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),Se(e,n)}}function Ng(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ve(e,n))return;Vc.set(n),s.uniformMatrix3fv(this.addr,!1,Vc),Se(e,n)}}function zg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ve(e,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),Se(e,n)}}function Fg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function Bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function kg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Xg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zc.compareFunction=eu,r=zc):r=Eu,e.setTexture2D(t||r,i)}function qg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Au,i)}function $g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ru,i)}function Yg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Tu,i)}function Zg(s){switch(s){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ig;case 35675:return Ng;case 35676:return zg;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return Vg;case 5125:return kg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Yg}}function Kg(s,t){s.uniform1fv(this.addr,t)}function jg(s,t){const e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function Jg(s,t){const e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function Qg(s,t){const e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function t0(s,t){const e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function e0(s,t){const e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function n0(s,t){const e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function i0(s,t){s.uniform1iv(this.addr,t)}function s0(s,t){s.uniform2iv(this.addr,t)}function r0(s,t){s.uniform3iv(this.addr,t)}function o0(s,t){s.uniform4iv(this.addr,t)}function a0(s,t){s.uniform1uiv(this.addr,t)}function h0(s,t){s.uniform2uiv(this.addr,t)}function c0(s,t){s.uniform3uiv(this.addr,t)}function l0(s,t){s.uniform4uiv(this.addr,t)}function u0(s,t,e){const n=this.cache,i=t.length,r=Co(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Eu,r[o])}function f0(s,t,e){const n=this.cache,i=t.length,r=Co(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Au,r[o])}function d0(s,t,e){const n=this.cache,i=t.length,r=Co(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ru,r[o])}function p0(s,t,e){const n=this.cache,i=t.length,r=Co(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Tu,r[o])}function m0(s){switch(s){case 5126:return Kg;case 35664:return jg;case 35665:return Jg;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return h0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}}class _0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Gc(s,t){s.seq.push(t),s.map[t.id]=t}function y0(s,t,e){const n=s.name,i=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===i){Gc(e,c===void 0?new g0(a,s,t):new x0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new _0(a),Gc(e,u)),e=u}}}class mo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);y0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Hc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const M0=37297;let v0=0;function S0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wc=new Vt;function w0(s){Yt._getMatrix(Wc,Yt.workingColorSpace,s);const t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case yo:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+S0(s.getShaderSource(t),o)}else return i}function b0(s,t){const e=w0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function E0(s,t){let e;switch(t){case Pf:e="Linear";break;case Lf:e="Reinhard";break;case Df:e="Cineon";break;case Uf:e="ACESFilmic";break;case Nf:e="AgX";break;case zf:e="Neutral";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new B;function T0(){Yt.getLuminanceCoefficients(zr);const s=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function R0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ks(s){return s!==""}function qc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(s){return s.replace(P0,D0)}const L0=new Map;function D0(s,t){let e=Bt[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eh(e)}const U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(U0,I0)}function I0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function z0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case ws:t="ENVMAP_TYPE_CUBE";break;case Ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Rf:t="ENVMAP_BLENDING_MIX";break;case Cf:t="ENVMAP_BLENDING_ADD";break}return t}function B0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function V0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=N0(e),c=z0(e),l=F0(e),u=O0(e),f=B0(e),d=A0(e),m=R0(r),x=i.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==oi?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),o=Eh(o),o=qc(o,e),o=$c(o,e),a=Eh(a),a=qc(a,e),a=$c(a,e),o=Yc(o),a=Yc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+g+o,_=y+p+a,T=Hc(i,i.VERTEX_SHADER,M),E=Hc(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(T).trim(),k=i.getShaderInfoLog(E).trim();let Z=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,E);else{const Q=Xc(i,T,"vertex"),H=Xc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Q+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:Z,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(T),i.deleteShader(E),R=new mo(i,x),w=C0(i,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,M0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let k0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new H0(t),e.set(t,n)),n}}class H0{constructor(t){this.id=k0++,this.code=t,this.usedTimes=0}}function W0(s,t,e,n,i,r,o){const a=new lu,h=new G0,c=new Set,l=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,v,P,O,N){const k=O.fog,Z=N.geometry,X=w.isMeshStandardMaterial?O.environment:null,Q=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),H=Q&&Q.mapping===Ao?Q.image.height:null,it=m[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=rt!==void 0?rt.length:0;let Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let Ht,$,st,St;if(it){const ne=_n[it];Ht=ne.vertexShader,$=ne.fragmentShader}else Ht=w.vertexShader,$=w.fragmentShader,h.update(w),st=h.getVertexShaderID(w),St=h.getFragmentShaderID(w);const ft=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Zt=N.isInstancedMesh===!0,Ct=N.isBatchedMesh===!0,he=!!w.map,ce=!!w.matcap,Kt=!!Q,L=!!w.aoMap,ze=!!w.lightMap,jt=!!w.bumpMap,re=!!w.normalMap,yt=!!w.displacementMap,qt=!!w.emissiveMap,Et=!!w.metalnessMap,Ot=!!w.roughnessMap,ye=w.anisotropy>0,C=w.clearcoat>0,S=w.dispersion>0,z=w.iridescence>0,Y=w.sheen>0,j=w.transmission>0,q=ye&&!!w.anisotropyMap,Mt=C&&!!w.clearcoatMap,ht=C&&!!w.clearcoatNormalMap,_t=C&&!!w.clearcoatRoughnessMap,vt=z&&!!w.iridescenceMap,J=z&&!!w.iridescenceThicknessMap,dt=Y&&!!w.sheenColorMap,Rt=Y&&!!w.sheenRoughnessMap,At=!!w.specularMap,at=!!w.specularColorMap,Ut=!!w.specularIntensityMap,D=j&&!!w.transmissionMap,ct=j&&!!w.thicknessMap,tt=!!w.gradientMap,mt=!!w.alphaMap,et=w.alphaTest>0,K=!!w.alphaHash,gt=!!w.extensions;let It=oi;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(It=s.toneMapping);const oe={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:Ht,fragmentShader:$,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ct,batchingColor:Ct&&N._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&N.instanceColor!==null,instancingMorph:Zt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:bs,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:ce,envMap:Kt,envMapMode:Kt&&Q.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:ze,bumpMap:jt,normalMap:re,displacementMap:f&&yt,emissiveMap:qt,normalMapObjectSpace:re&&w.normalMapType===kf,normalMapTangentSpace:re&&w.normalMapType===Vf,metalnessMap:Et,roughnessMap:Ot,anisotropy:ye,anisotropyMap:q,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:_t,dispersion:S,iridescence:z,iridescenceMap:vt,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:dt,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:at,specularIntensityMap:Ut,transmission:j,transmissionMap:D,thicknessMap:ct,gradientMap:tt,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:et,alphaHash:K,combine:w.combine,mapUv:he&&x(w.map.channel),aoMapUv:L&&x(w.aoMap.channel),lightMapUv:ze&&x(w.lightMap.channel),bumpMapUv:jt&&x(w.bumpMap.channel),normalMapUv:re&&x(w.normalMap.channel),displacementMapUv:yt&&x(w.displacementMap.channel),emissiveMapUv:qt&&x(w.emissiveMap.channel),metalnessMapUv:Et&&x(w.metalnessMap.channel),roughnessMapUv:Ot&&x(w.roughnessMap.channel),anisotropyMapUv:q&&x(w.anisotropyMap.channel),clearcoatMapUv:Mt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(w.sheenRoughnessMap.channel),specularMapUv:At&&x(w.specularMap.channel),specularColorMapUv:at&&x(w.specularColorMap.channel),specularIntensityMapUv:Ut&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:ct&&x(w.thicknessMap.channel),alphaMapUv:mt&&x(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(re||ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(he||mt),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Yt.getTransfer(w.map.colorSpace)===se,decodeVideoTextureEmissive:qt&&w.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(w.emissiveMap.colorSpace)===se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fn,flipSided:w.side===He,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:gt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&w.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(v,w),M(v,w),v.push(s.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function y(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function M(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const v=m[w.type];let P;if(v){const O=_n[v];P=_d.clone(O.uniforms)}else P=w.uniforms;return P}function T(w,v){let P;for(let O=0,N=l.length;O<N;O++){const k=l[O];if(k.cacheKey===v){P=k,++P.usedTimes;break}}return P===void 0&&(P=new V0(s,v,w,r),l.push(P)),P}function E(w){if(--w.usedTimes===0){const v=l.indexOf(w);l[v]=l[l.length-1],l.pop(),w.destroy()}}function A(w){h.remove(w)}function R(){h.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:R}}function X0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,h){s.get(o)[a]=h}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function q0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function h(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||q0),n.length>1&&n.sort(f||Kc),i.length>1&&i.sort(f||Kc)}function l(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:h,finish:l,sort:c}}function $0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new jc,s.set(n,[o])):i>=r.length?(o=new jc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Xt};break;case"SpotLight":e={position:new B,direction:new B,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function Z0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let K0=0;function j0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function J0(s){const t=new Y0,e=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new pe,o=new pe;function a(c){let l=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,M=0,_=0,T=0,E=0,A=0;c.sort(j0);for(let w=0,v=c.length;w<v;w++){const P=c[w],O=P.color,N=P.intensity,k=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=O.r*N,u+=O.g*N,f+=O.b*N;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],N);A++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=X,d++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(N),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const Q=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=Q.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=Z,_++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(N),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=X,m++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(N),X.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=X,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=d,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=A,n.version=K0++)}function h(c,l){let u=0,f=0,d=0,m=0,x=0;const g=l.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:h,state:n}}function Jc(s){const t=new J0(s),e=[],n=[];function i(l){c.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function h(l){t.setupView(e,l)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function Q0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Jc(s),t.set(i,[a])):r>=o.length?(a=new Jc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function nx(s,t,e){let n=new Oh;const i=new ee,r=new ee,o=new xe,a=new Ad({depthPacking:Bf}),h=new Rd,c={},l=e.maxTextureSize,u={[ci]:He,[He]:ci,[Fn]:Fn},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new li;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vn(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(E,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const w=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ri),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==Nn&&this.type===Nn,k=p===Nn&&this.type!==Nn;for(let Z=0,X=E.length;Z<X;Z++){const Q=E[Z],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const it=H.getFrameExtents();if(i.multiply(it),r.copy(H.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/it.x),i.x=r.x*it.x,H.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/it.y),i.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||N===!0||k===!0){const ut=this.type!==Nn?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new Di(i.x,i.y,ut),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const rt=H.getViewportCount();for(let ut=0;ut<rt;ut++){const Dt=H.getViewport(ut);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),O.viewport(o),H.updateMatrices(Q,ut),n=H.getFrustum(),_(A,R,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Nn&&y(H,R),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,v,P)};function y(E,A){const R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Di(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,R,d,x,null)}function M(E,A,R,w){let v=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)v=P;else if(v=R.isPointLight===!0?h:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=v.uuid,N=A.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let Z=k[N];Z===void 0&&(Z=v.clone(),k[N]=Z,A.addEventListener("dispose",T)),v=Z}if(v.visible=A.visible,v.wireframe=A.wireframe,w===Nn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=s.properties.get(v);O.light=R}return v}function _(E,A,R,w,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=t.update(E),k=E.material;if(Array.isArray(k)){const Z=N.groups;for(let X=0,Q=Z.length;X<Q;X++){const H=Z[X],it=k[H.materialIndex];if(it&&it.visible){const rt=M(E,it,w,v);E.onBeforeShadow(s,E,A,R,N,rt,H),s.renderBufferDirect(R,null,N,rt,E,H),E.onAfterShadow(s,E,A,R,N,rt,H)}}}else if(k.visible){const Z=M(E,k,w,v);E.onBeforeShadow(s,E,A,R,N,Z,null),s.renderBufferDirect(R,null,N,Z,E,null),E.onAfterShadow(s,E,A,R,N,Z,null)}}const O=E.children;for(let N=0,k=O.length;N<k;N++)_(O[N],A,R,w,v)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const w=c[R],v=E.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const ix={[Va]:ka,[Ga]:Xa,[Ha]:qa,[vs]:Wa,[ka]:Va,[Xa]:Ga,[qa]:Ha,[Wa]:vs};function sx(s,t){function e(){let D=!1;const ct=new xe;let tt=null;const mt=new xe(0,0,0,0);return{setMask:function(et){tt!==et&&!D&&(s.colorMask(et,et,et,et),tt=et)},setLocked:function(et){D=et},setClear:function(et,K,gt,It,oe){oe===!0&&(et*=It,K*=It,gt*=It),ct.set(et,K,gt,It),mt.equals(ct)===!1&&(s.clearColor(et,K,gt,It),mt.copy(ct))},reset:function(){D=!1,tt=null,mt.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,tt=null,mt=null,et=null;return{setReversed:function(K){if(ct!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),ct=K;const It=et;et=null,this.setClear(It)}},getReversed:function(){return ct},setTest:function(K){K?ft(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(K){tt!==K&&!D&&(s.depthMask(K),tt=K)},setFunc:function(K){if(ct&&(K=ix[K]),mt!==K){switch(K){case Va:s.depthFunc(s.NEVER);break;case ka:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=K}},setLocked:function(K){D=K},setClear:function(K){et!==K&&(ct&&(K=1-K),s.clearDepth(K),et=K)},reset:function(){D=!1,tt=null,mt=null,et=null,ct=!1}}}function i(){let D=!1,ct=null,tt=null,mt=null,et=null,K=null,gt=null,It=null,oe=null;return{setTest:function(ne){D||(ne?ft(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(ne){ct!==ne&&!D&&(s.stencilMask(ne),ct=ne)},setFunc:function(ne,nn,bn){(tt!==ne||mt!==nn||et!==bn)&&(s.stencilFunc(ne,nn,bn),tt=ne,mt=nn,et=bn)},setOp:function(ne,nn,bn){(K!==ne||gt!==nn||It!==bn)&&(s.stencilOp(ne,nn,bn),K=ne,gt=nn,It=bn)},setLocked:function(ne){D=ne},setClear:function(ne){oe!==ne&&(s.clearStencil(ne),oe=ne)},reset:function(){D=!1,ct=null,tt=null,mt=null,et=null,K=null,gt=null,It=null,oe=null}}}const r=new e,o=new n,a=new i,h=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,y=null,M=null,_=null,T=null,E=null,A=new Xt(0,0,0),R=0,w=!1,v=null,P=null,O=null,N=null,k=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Q>=2);let it=null,rt={};const ut=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Ht=new xe().fromArray(ut),$=new xe().fromArray(Dt);function st(D,ct,tt,mt){const et=new Uint8Array(4),K=s.createTexture();s.bindTexture(D,K),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let gt=0;gt<tt;gt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(ct+gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return K}const St={};St[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),o.setFunc(vs),jt(!1),re(tc),ft(s.CULL_FACE),L(ri);function ft(D){l[D]!==!0&&(s.enable(D),l[D]=!0)}function wt(D){l[D]!==!1&&(s.disable(D),l[D]=!1)}function Zt(D,ct){return u[D]!==ct?(s.bindFramebuffer(D,ct),u[D]=ct,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ct(D,ct){let tt=d,mt=!1;if(D){tt=f.get(ct),tt===void 0&&(tt=[],f.set(ct,tt));const et=D.textures;if(tt.length!==et.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,gt=et.length;K<gt;K++)tt[K]=s.COLOR_ATTACHMENT0+K;tt.length=et.length,mt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,mt=!0);mt&&s.drawBuffers(tt)}function he(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const ce={[Ti]:s.FUNC_ADD,[uf]:s.FUNC_SUBTRACT,[ff]:s.FUNC_REVERSE_SUBTRACT};ce[df]=s.MIN,ce[pf]=s.MAX;const Kt={[mf]:s.ZERO,[gf]:s.ONE,[xf]:s.SRC_COLOR,[Oa]:s.SRC_ALPHA,[wf]:s.SRC_ALPHA_SATURATE,[vf]:s.DST_COLOR,[yf]:s.DST_ALPHA,[_f]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[Sf]:s.ONE_MINUS_DST_COLOR,[Mf]:s.ONE_MINUS_DST_ALPHA,[bf]:s.CONSTANT_COLOR,[Ef]:s.ONE_MINUS_CONSTANT_COLOR,[Tf]:s.CONSTANT_ALPHA,[Af]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,ct,tt,mt,et,K,gt,It,oe,ne){if(D===ri){x===!0&&(wt(s.BLEND),x=!1);return}if(x===!1&&(ft(s.BLEND),x=!0),D!==lf){if(D!==g||ne!==w){if((p!==Ti||_!==Ti)&&(s.blendEquation(s.FUNC_ADD),p=Ti,_=Ti),ne)switch(D){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFunc(s.ONE,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,T=null,E=null,A.set(0,0,0),R=0,g=D,w=ne}return}et=et||ct,K=K||tt,gt=gt||mt,(ct!==p||et!==_)&&(s.blendEquationSeparate(ce[ct],ce[et]),p=ct,_=et),(tt!==y||mt!==M||K!==T||gt!==E)&&(s.blendFuncSeparate(Kt[tt],Kt[mt],Kt[K],Kt[gt]),y=tt,M=mt,T=K,E=gt),(It.equals(A)===!1||oe!==R)&&(s.blendColor(It.r,It.g,It.b,oe),A.copy(It),R=oe),g=D,w=!1}function ze(D,ct){D.side===Fn?wt(s.CULL_FACE):ft(s.CULL_FACE);let tt=D.side===He;ct&&(tt=!tt),jt(tt),D.blending===gs&&D.transparent===!1?L(ri):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const mt=D.stencilWrite;a.setTest(mt),mt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function re(D){D!==af?(ft(s.CULL_FACE),D!==P&&(D===tc?s.cullFace(s.BACK):D===hf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),P=D}function yt(D){D!==O&&(X&&s.lineWidth(D),O=D)}function qt(D,ct,tt){D?(ft(s.POLYGON_OFFSET_FILL),(N!==ct||k!==tt)&&(s.polygonOffset(ct,tt),N=ct,k=tt)):wt(s.POLYGON_OFFSET_FILL)}function Et(D){D?ft(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Ot(D){D===void 0&&(D=s.TEXTURE0+Z-1),it!==D&&(s.activeTexture(D),it=D)}function ye(D,ct,tt){tt===void 0&&(it===null?tt=s.TEXTURE0+Z-1:tt=it);let mt=rt[tt];mt===void 0&&(mt={type:void 0,texture:void 0},rt[tt]=mt),(mt.type!==D||mt.texture!==ct)&&(it!==tt&&(s.activeTexture(tt),it=tt),s.bindTexture(D,ct||St[D]),mt.type=D,mt.texture=ct)}function C(){const D=rt[it];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(D){Ht.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ht.copy(D))}function Rt(D){$.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function At(D,ct){let tt=c.get(ct);tt===void 0&&(tt=new WeakMap,c.set(ct,tt));let mt=tt.get(D);mt===void 0&&(mt=s.getUniformBlockIndex(ct,D.name),tt.set(D,mt))}function at(D,ct){const mt=c.get(ct).get(D);h.get(ct)!==mt&&(s.uniformBlockBinding(ct,mt,D.__bindingPointIndex),h.set(ct,mt))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},it=null,rt={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,y=null,M=null,_=null,T=null,E=null,A=new Xt(0,0,0),R=0,w=!1,v=null,P=null,O=null,N=null,k=null,Ht.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:wt,bindFramebuffer:Zt,drawBuffers:Ct,useProgram:he,setBlending:L,setMaterial:ze,setFlipSided:jt,setCullFace:re,setLineWidth:yt,setPolygonOffset:qt,setScissorTest:Et,activeTexture:Ot,bindTexture:ye,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:vt,texImage3D:J,updateUBOMapping:At,uniformBlockBinding:at,texStorage2D:ht,texStorage3D:_t,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Mt,scissor:dt,viewport:Rt,reset:Ut}}function rx(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,l=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return d?new OffscreenCanvas(C,S):vo("canvas")}function x(C,S,z){let Y=1;const j=ye(C);if((j.width>z||j.height>z)&&(Y=z/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(Y*j.width),Mt=Math.floor(Y*j.height);u===void 0&&(u=m(q,Mt));const ht=S?m(q,Mt):u;return ht.width=q,ht.height=Mt,ht.getContext("2d").drawImage(C,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Mt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,z,Y,j=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=S;if(S===s.RED&&(z===s.FLOAT&&(q=s.R32F),z===s.HALF_FLOAT&&(q=s.R16F),z===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.R8UI),z===s.UNSIGNED_SHORT&&(q=s.R16UI),z===s.UNSIGNED_INT&&(q=s.R32UI),z===s.BYTE&&(q=s.R8I),z===s.SHORT&&(q=s.R16I),z===s.INT&&(q=s.R32I)),S===s.RG&&(z===s.FLOAT&&(q=s.RG32F),z===s.HALF_FLOAT&&(q=s.RG16F),z===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RG8UI),z===s.UNSIGNED_SHORT&&(q=s.RG16UI),z===s.UNSIGNED_INT&&(q=s.RG32UI),z===s.BYTE&&(q=s.RG8I),z===s.SHORT&&(q=s.RG16I),z===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(q=s.RGB16UI),z===s.UNSIGNED_INT&&(q=s.RGB32UI),z===s.BYTE&&(q=s.RGB8I),z===s.SHORT&&(q=s.RGB16I),z===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),z===s.UNSIGNED_INT&&(q=s.RGBA32UI),z===s.BYTE&&(q=s.RGBA8I),z===s.SHORT&&(q=s.RGBA16I),z===s.INT&&(q=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),S===s.RGBA){const Mt=j?yo:Yt.getTransfer(Y);z===s.FLOAT&&(q=s.RGBA32F),z===s.HALF_FLOAT&&(q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(q=Mt===se?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(C,S){let z;return C?S===null||S===Li||S===Ys?z=s.DEPTH24_STENCIL8:S===On?z=s.DEPTH32F_STENCIL8:S===$s&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===Ys?z=s.DEPTH_COMPONENT24:S===On?z=s.DEPTH_COMPONENT32F:S===$s&&(z=s.DEPTH_COMPONENT16),z}function T(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){const S=C.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&l.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),v(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const z=C.source,Y=f.get(z);if(Y){const j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(C),Object.keys(Y).length===0&&f.delete(z)}n.remove(C)}function w(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const z=C.source,Y=f.get(z);delete Y[S.__cacheKey],o.memory.textures--}function v(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let Y=0,j=z.length;Y<j;Y++){const q=n.get(z[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(C)}let P=0;function O(){P=0}function N(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){const z=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(z,C,S);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function X(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){St(z,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function Q(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){St(z,C,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function H(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){ft(z,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const it={[Za]:s.REPEAT,[Ri]:s.CLAMP_TO_EDGE,[Ka]:s.MIRRORED_REPEAT},rt={[gn]:s.NEAREST,[Ff]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[Io]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},ut={[Gf]:s.NEVER,[Yf]:s.ALWAYS,[Hf]:s.LESS,[eu]:s.LEQUAL,[Wf]:s.EQUAL,[$f]:s.GEQUAL,[Xf]:s.GREATER,[qf]:s.NOTEQUAL};function Dt(C,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===yn||S.magFilter===Io||S.magFilter===dr||S.magFilter===Ci||S.minFilter===yn||S.minFilter===Io||S.minFilter===dr||S.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,it[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,it[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,it[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,rt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==dr&&S.minFilter!==Ci||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ht(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));const Y=S.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const q=k(S);if(q!==C.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[q].usedTimes++;const Mt=j[C.__cacheKey];Mt!==void 0&&(j[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(S)),C.__cacheKey=q,C.__webglTexture=j[q].texture}return z}function $(C,S,z){return Math.floor(Math.floor(C/z)/S)}function st(C,S,z,Y){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,Y,S.data);else{q.sort((J,dt)=>J.start-dt.start);let Mt=0;for(let J=1;J<q.length;J++){const dt=q[Mt],Rt=q[J],At=dt.start+dt.count,at=$(Rt.start,S.width,4),Ut=$(dt.start,S.width,4);Rt.start<=At+1&&at===Ut&&$(Rt.start+Rt.count-1,S.width,4)===at?dt.count=Math.max(dt.count,Rt.start+Rt.count-dt.start):(++Mt,q[Mt]=Rt)}q.length=Mt+1;const ht=s.getParameter(s.UNPACK_ROW_LENGTH),_t=s.getParameter(s.UNPACK_SKIP_PIXELS),vt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let J=0,dt=q.length;J<dt;J++){const Rt=q[J],At=Math.floor(Rt.start/4),at=Math.ceil(Rt.count/4),Ut=At%S.width,D=Math.floor(At/S.width),ct=at,tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Ut,D,ct,tt,z,Y,S.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),s.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function St(C,S,z){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const j=Ht(C,S),q=S.source;e.bindTexture(Y,C.__webglTexture,s.TEXTURE0+z);const Mt=n.get(q);if(q.version!==Mt.__version||j===!0){e.activeTexture(s.TEXTURE0+z);const ht=Yt.getPrimaries(Yt.workingColorSpace),_t=S.colorSpace===ii?null:Yt.getPrimaries(S.colorSpace),vt=S.colorSpace===ii||ht===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let J=x(S.image,!1,i.maxTextureSize);J=Ot(S,J);const dt=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type);let At=M(S.internalFormat,dt,Rt,S.colorSpace,S.isVideoTexture);Dt(Y,S);let at;const Ut=S.mipmaps,D=S.isVideoTexture!==!0,ct=Mt.__version===void 0||j===!0,tt=q.dataReady,mt=T(S,J);if(S.isDepthTexture)At=_(S.format===Ks,S.type),ct&&(D?e.texStorage2D(s.TEXTURE_2D,1,At,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,At,J.width,J.height,0,dt,Rt,null));else if(S.isDataTexture)if(Ut.length>0){D&&ct&&e.texStorage2D(s.TEXTURE_2D,mt,At,Ut[0].width,Ut[0].height);for(let et=0,K=Ut.length;et<K;et++)at=Ut[et],D?tt&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,at.width,at.height,dt,Rt,at.data):e.texImage2D(s.TEXTURE_2D,et,At,at.width,at.height,0,dt,Rt,at.data);S.generateMipmaps=!1}else D?(ct&&e.texStorage2D(s.TEXTURE_2D,mt,At,J.width,J.height),tt&&st(S,J,dt,Rt)):e.texImage2D(s.TEXTURE_2D,0,At,J.width,J.height,0,dt,Rt,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,At,Ut[0].width,Ut[0].height,J.depth);for(let et=0,K=Ut.length;et<K;et++)if(at=Ut[et],S.format!==mn)if(dt!==null)if(D){if(tt)if(S.layerUpdates.size>0){const gt=Rc(at.width,at.height,S.format,S.type);for(const It of S.layerUpdates){const oe=at.data.subarray(It*gt/at.data.BYTES_PER_ELEMENT,(It+1)*gt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,It,at.width,at.height,1,dt,oe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,at.width,at.height,J.depth,dt,at.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,At,at.width,at.height,J.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,at.width,at.height,J.depth,dt,Rt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,At,at.width,at.height,J.depth,0,dt,Rt,at.data)}else{D&&ct&&e.texStorage2D(s.TEXTURE_2D,mt,At,Ut[0].width,Ut[0].height);for(let et=0,K=Ut.length;et<K;et++)at=Ut[et],S.format!==mn?dt!==null?D?tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,at.width,at.height,dt,at.data):e.compressedTexImage2D(s.TEXTURE_2D,et,At,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?tt&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,at.width,at.height,dt,Rt,at.data):e.texImage2D(s.TEXTURE_2D,et,At,at.width,at.height,0,dt,Rt,at.data)}else if(S.isDataArrayTexture)if(D){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,At,J.width,J.height,J.depth),tt)if(S.layerUpdates.size>0){const et=Rc(J.width,J.height,S.format,S.type);for(const K of S.layerUpdates){const gt=J.data.subarray(K*et/J.data.BYTES_PER_ELEMENT,(K+1)*et/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,dt,Rt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Rt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,dt,Rt,J.data);else if(S.isData3DTexture)D?(ct&&e.texStorage3D(s.TEXTURE_3D,mt,At,J.width,J.height,J.depth),tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Rt,J.data)):e.texImage3D(s.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,dt,Rt,J.data);else if(S.isFramebufferTexture){if(ct)if(D)e.texStorage2D(s.TEXTURE_2D,mt,At,J.width,J.height);else{let et=J.width,K=J.height;for(let gt=0;gt<mt;gt++)e.texImage2D(s.TEXTURE_2D,gt,At,et,K,0,dt,Rt,null),et>>=1,K>>=1}}else if(Ut.length>0){if(D&&ct){const et=ye(Ut[0]);e.texStorage2D(s.TEXTURE_2D,mt,At,et.width,et.height)}for(let et=0,K=Ut.length;et<K;et++)at=Ut[et],D?tt&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,dt,Rt,at):e.texImage2D(s.TEXTURE_2D,et,At,dt,Rt,at);S.generateMipmaps=!1}else if(D){if(ct){const et=ye(J);e.texStorage2D(s.TEXTURE_2D,mt,At,et.width,et.height)}tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Rt,J)}else e.texImage2D(s.TEXTURE_2D,0,At,dt,Rt,J);g(S)&&p(Y),Mt.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ft(C,S,z){if(S.image.length!==6)return;const Y=Ht(C,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const q=n.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+z);const Mt=Yt.getPrimaries(Yt.workingColorSpace),ht=S.colorSpace===ii?null:Yt.getPrimaries(S.colorSpace),_t=S.colorSpace===ii||Mt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const vt=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!vt&&!J?dt[K]=x(S.image[K],!0,i.maxCubemapSize):dt[K]=J?S.image[K].image:S.image[K],dt[K]=Ot(S,dt[K]);const Rt=dt[0],At=r.convert(S.format,S.colorSpace),at=r.convert(S.type),Ut=M(S.internalFormat,At,at,S.colorSpace),D=S.isVideoTexture!==!0,ct=q.__version===void 0||Y===!0,tt=j.dataReady;let mt=T(S,Rt);Dt(s.TEXTURE_CUBE_MAP,S);let et;if(vt){D&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Ut,Rt.width,Rt.height);for(let K=0;K<6;K++){et=dt[K].mipmaps;for(let gt=0;gt<et.length;gt++){const It=et[gt];S.format!==mn?At!==null?D?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,It.width,It.height,At,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ut,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,It.width,It.height,At,at,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ut,It.width,It.height,0,At,at,It.data)}}}else{if(et=S.mipmaps,D&&ct){et.length>0&&mt++;const K=ye(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Ut,K.width,K.height)}for(let K=0;K<6;K++)if(J){D?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,At,at,dt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,dt[K].width,dt[K].height,0,At,at,dt[K].data);for(let gt=0;gt<et.length;gt++){const oe=et[gt].image[K].image;D?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,oe.width,oe.height,At,at,oe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ut,oe.width,oe.height,0,At,at,oe.data)}}else{D?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,at,dt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,At,at,dt[K]);for(let gt=0;gt<et.length;gt++){const It=et[gt];D?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,At,at,It.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ut,At,at,It.image[K])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),q.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function wt(C,S,z,Y,j,q){const Mt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),_t=M(z.internalFormat,Mt,ht,z.colorSpace),vt=n.get(S),J=n.get(z);if(J.__renderTarget=S,!vt.__hasExternalTextures){const dt=Math.max(1,S.width>>q),Rt=Math.max(1,S.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,q,_t,dt,Rt,S.depth,0,Mt,ht,null):e.texImage2D(j,q,_t,dt,Rt,0,Mt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),qt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,J.__webglTexture,0,yt(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,J.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=_(S.stencilBuffer,j),Mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=yt(S);qt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,q,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,C)}else{const Y=S.textures;for(let j=0;j<Y.length;j++){const q=Y[j],Mt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),_t=M(q.internalFormat,Mt,ht,q.colorSpace),vt=yt(S);z&&qt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,_t,S.width,S.height):qt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const j=Y.__webglTexture,q=yt(S);if(S.depthTexture.format===Zs)qt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ks)qt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function he(C){const S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?Ct(S.__webglFramebuffer[0],C):Ct(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),Zt(S.__webglDepthbuffer[Y],C,!1);else{const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Zt(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(C,S,z){const Y=n.get(C);S!==void 0&&wt(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&he(C)}function Kt(C){const S=C.texture,z=n.get(C),Y=n.get(S);C.addEventListener("dispose",A);const j=C.textures,q=C.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let _t=0;_t<S.mipmaps.length;_t++)z.__webglFramebuffer[ht][_t]=s.createFramebuffer()}else z.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)z.__webglFramebuffer[ht]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ht=0,_t=j.length;ht<_t;ht++){const vt=n.get(j[ht]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){const _t=j[ht];z.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);const vt=r.convert(_t.format,_t.colorSpace),J=r.convert(_t.type),dt=M(_t.internalFormat,vt,J,_t.colorSpace,C.isXRRenderTarget===!0),Rt=yt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)wt(z.__webglFramebuffer[ht][_t],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else wt(z.__webglFramebuffer[ht],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,_t=j.length;ht<_t;ht++){const vt=j[ht],J=n.get(vt);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),Dt(s.TEXTURE_2D,vt),wt(z.__webglFramebuffer,C,vt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),g(vt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,Y.__webglTexture),Dt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)wt(z.__webglFramebuffer[_t],C,S,s.COLOR_ATTACHMENT0,ht,_t);else wt(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ht,0);g(S)&&p(ht),e.unbindTexture()}C.depthBuffer&&he(C)}function L(C){const S=C.textures;for(let z=0,Y=S.length;z<Y;z++){const j=S[z];if(g(j)){const q=y(C),Mt=n.get(j).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}const ze=[],jt=[];function re(C){if(C.samples>0){if(qt(C)===!1){const S=C.textures,z=C.width,Y=C.height;let j=s.COLOR_BUFFER_BIT;const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(C),ht=S.length>1;if(ht)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const _t=C.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const J=n.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,j,s.NEAREST),h===!0&&(ze.length=0,jt.length=0,ze.push(s.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ze.push(q),jt.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const J=n.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,J,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function yt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(C){const S=o.render.frame;l.get(C)!==S&&(l.set(C,S),C.update())}function Ot(C,S){const z=C.colorSpace,Y=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==bs&&z!==ii&&(Yt.getTransfer(z)===se?(Y!==mn||j!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=ce,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=qt}function ox(s,t){function e(n,i=ii){let r;const o=Yt.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===Dh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return s.BYTE;if(n===Yl)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===Lh)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===On)return s.FLOAT;if(n===tr)return s.HALF_FLOAT;if(n===Kl)return s.ALPHA;if(n===jl)return s.RGB;if(n===mn)return s.RGBA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===Ks)return s.DEPTH_STENCIL;if(n===Jl)return s.RED;if(n===Ih)return s.RED_INTEGER;if(n===Ql)return s.RG;if(n===Nh)return s.RG_INTEGER;if(n===zh)return s.RGBA_INTEGER;if(n===oo||n===ao||n===ho||n===co)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Ja||n===Qa||n===th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eh||n===nh||n===ih)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eh||n===nh)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ih)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sh||n===rh||n===oh||n===ah||n===hh||n===ch||n===lh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===xh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ah)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ch)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ph)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===_h||n===yh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===Mh||n===vh||n===Sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
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

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Sn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:ax,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vn(new Mu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lx extends Ni{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",h=1,c=null,l=null,u=null,f=null,d=null,m=null;const x=new cx,g=e.getContextAttributes();let p=null,y=null;const M=[],_=[],T=new ee;let E=null;const A=new dn;A.viewport=new xe;const R=new dn;R.viewport=new xe;const w=[A,R],v=new Ld;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=M[$];return st===void 0&&(st=new na,M[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=M[$];return st===void 0&&(st=new na,M[$]=st),st.getGripSpace()},this.getHand=function($){let st=M[$];return st===void 0&&(st=new na,M[$]=st),st.getHandSpace()};function N($){const st=_.indexOf($.inputSource);if(st===-1)return;const St=M[st];St!==void 0&&(St.update($.inputSource,$.frame,c||o),St.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<M.length;$++){const st=_[$];st!==null&&(_[$]=null,M[$].disconnect(st))}P=null,O=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,ft=null,wt=null;g.depth&&(wt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=g.stencil?Ks:Zs,ft=g.stencil?Ys:Li);const Zt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Di(f.textureWidth,f.textureHeight,{format:mn,type:vn,depthTexture:new yu(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Di(d.framebufferWidth,d.framebufferHeight,{format:mn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z($){for(let st=0;st<$.removed.length;st++){const St=$.removed[st],ft=_.indexOf(St);ft>=0&&(_[ft]=null,M[ft].disconnect(St))}for(let st=0;st<$.added.length;st++){const St=$.added[st];let ft=_.indexOf(St);if(ft===-1){for(let Zt=0;Zt<M.length;Zt++)if(Zt>=_.length){_.push(St),ft=Zt;break}else if(_[Zt]===null){_[Zt]=St,ft=Zt;break}if(ft===-1)break}const wt=M[ft];wt&&wt.connect(St)}}const X=new B,Q=new B;function H($,st,St){X.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);const ft=X.distanceTo(Q),wt=st.projectionMatrix.elements,Zt=St.projectionMatrix.elements,Ct=wt[14]/(wt[10]-1),he=wt[14]/(wt[10]+1),ce=(wt[9]+1)/wt[5],Kt=(wt[9]-1)/wt[5],L=(wt[8]-1)/wt[0],ze=(Zt[8]+1)/Zt[0],jt=Ct*L,re=Ct*ze,yt=ft/(-L+ze),qt=yt*-L;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qt),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Et=Ct+yt,Ot=he+yt,ye=jt-qt,C=re+(ft-qt),S=ce*he/Ot*Et,z=Kt*he/Ot*Et;$.projectionMatrix.makePerspective(ye,C,S,z,Et,Ot),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let st=$.near,St=$.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(St=x.depthFar)),v.near=R.near=A.near=st,v.far=R.far=A.far=St,(P!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,O=v.far),A.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,v.layers.mask=A.layers.mask|R.layers.mask;const ft=$.parent,wt=v.cameras;it(v,ft);for(let Zt=0;Zt<wt.length;Zt++)it(wt[Zt],ft);wt.length===2?H(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),rt($,v,ft)};function rt($,st,St){St===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function($){h=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ut=null;function Dt($,st){if(l=st.getViewerPose(c||o),m=st,l!==null){const St=l.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ft=!1;St.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Ct=0;Ct<St.length;Ct++){const he=St[Ct];let ce=null;if(d!==null)ce=d.getViewport(he);else{const L=u.getViewSubImage(f,he);ce=L.viewport,Ct===0&&(t.setRenderTargetTextures(y,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(y))}let Kt=w[Ct];Kt===void 0&&(Kt=new dn,Kt.layers.enable(Ct),Kt.viewport=new xe,w[Ct]=Kt),Kt.matrix.fromArray(he.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(he.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ce.x,ce.y,ce.width,ce.height),Ct===0&&(v.matrix.copy(Kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(Kt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Ct=u.getDepthInformation(St[0]);Ct&&Ct.isValid&&Ct.texture&&x.init(t,Ct,i.renderState)}}for(let St=0;St<M.length;St++){const ft=_[St],wt=M[St];ft!==null&&wt!==void 0&&wt.update(ft,st,c||o)}ut&&ut($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Ht=new bu;Ht.setAnimationLoop(Dt),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}}const Mi=new Ui,ux=new pe;function fx(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,gu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),l(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?h(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(g.envMap.value=M,Mi.copy(_),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Mi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,M){const _=M.program;n.uniformBlockBinding(y,_)}function c(y,M){let _=i[y.id];_===void 0&&(m(y),_=l(y),i[y.id]=_,y.addEventListener("dispose",g));const T=M.program;n.updateUBOMapping(y,T);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function l(y){const M=u();y.__bindingPointIndex=M;const _=s.createBuffer(),T=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=i[y.id],_=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,A=_.length;E<A;E++){const R=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,v=R.length;w<v;w++){const P=R[w];if(d(P,E,w,T)===!0){const O=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let Z=0;Z<N.length;Z++){const X=N[Z],Q=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+k,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,_,T){const E=y.value,A=M+"_"+_;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const R=T[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function m(y){const M=y.uniforms;let _=0;const T=16;for(let A=0,R=M.length;A<R;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,P=w.length;v<P;v++){const O=w[v],N=Array.isArray(O.value)?O.value:[O.value];for(let k=0,Z=N.length;k<Z;k++){const X=N[k],Q=x(X),H=_%T,it=H%Q.boundary,rt=H+it;_+=it,rt!==0&&T-rt<Q.storage&&(_+=T-rt),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Q.storage}}}const E=_%T;return E>0&&(_+=T-E),y.__size=_,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:h,update:c,dispose:p}}class Fy{constructor(t={}){const{canvas:e=Kf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=tn;let E=0,A=0,R=null,w=-1,v=null;const P=new xe,O=new xe;let N=null;const k=new Xt(0);let Z=0,X=e.width,Q=e.height,H=1,it=null,rt=null;const ut=new xe(0,0,X,Q),Dt=new xe(0,0,X,Q);let Ht=!1;const $=new Oh;let st=!1,St=!1;const ft=new pe,wt=new pe,Zt=new B,Ct=new xe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Kt(){return R===null?H:1}let L=n;function ze(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",K,!1),L===null){const U="webgl2";if(L=ze(U,b),L===null)throw ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let jt,re,yt,qt,Et,Ot,ye,C,S,z,Y,j,q,Mt,ht,_t,vt,J,dt,Rt,At,at,Ut,D;function ct(){jt=new bg(L),jt.init(),at=new ox(L,jt),re=new xg(L,jt,t,at),yt=new sx(L,jt),re.reverseDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),qt=new Ag(L),Et=new X0,Ot=new rx(L,jt,yt,Et,re,at,qt),ye=new yg(_),C=new wg(_),S=new Ud(L),Ut=new mg(L,S),z=new Eg(L,S,qt,Ut),Y=new Cg(L,z,S,qt),dt=new Rg(L,re,Ot),_t=new _g(Et),j=new W0(_,ye,C,jt,re,Ut,_t),q=new fx(_,Et),Mt=new $0,ht=new Q0(jt),J=new pg(_,ye,C,yt,Y,d,h),vt=new nx(_,Y,re),D=new dx(L,qt,re,yt),Rt=new gg(L,jt,qt),At=new Tg(L,jt,qt),qt.programs=j.programs,_.capabilities=re,_.extensions=jt,_.properties=Et,_.renderLists=Mt,_.shadowMap=vt,_.state=yt,_.info=qt}ct();const tt=new lx(_,L);this.xr=tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(X,Q,!1))},this.getSize=function(b){return b.set(X,Q)},this.setSize=function(b,U,V=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Q=U,e.width=Math.floor(b*H),e.height=Math.floor(U*H),V===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*H,Q*H).floor()},this.setDrawingBufferSize=function(b,U,V){X=b,Q=U,H=V,e.width=Math.floor(b*V),e.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,U,V,G){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,U,V,G),yt.viewport(P.copy(ut).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,U,V,G){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,U,V,G),yt.scissor(O.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(b){yt.setScissorTest(Ht=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,V=!0){let G=0;if(b){let I=!1;if(R!==null){const nt=R.texture.format;I=nt===zh||nt===Nh||nt===Ih}if(I){const nt=R.texture.type,lt=nt===vn||nt===Li||nt===$s||nt===Ys||nt===Dh||nt===Uh,xt=J.getClearColor(),pt=J.getClearAlpha(),Pt=xt.r,Lt=xt.g,bt=xt.b;lt?(m[0]=Pt,m[1]=Lt,m[2]=bt,m[3]=pt,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Pt,x[1]=Lt,x[2]=bt,x[3]=pt,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",K,!1),J.dispose(),Mt.dispose(),ht.dispose(),Et.dispose(),ye.dispose(),C.dispose(),Y.dispose(),Ut.dispose(),D.dispose(),j.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",$h),tt.removeEventListener("sessionend",Yh),di.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=qt.autoReset,U=vt.enabled,V=vt.autoUpdate,G=vt.needsUpdate,I=vt.type;ct(),qt.autoReset=b,vt.enabled=U,vt.autoUpdate=V,vt.needsUpdate=G,vt.type=I}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const U=b.target;U.removeEventListener("dispose",gt),It(U)}function It(b){oe(b),Et.remove(b)}function oe(b){const U=Et.get(b).programs;U!==void 0&&(U.forEach(function(V){j.releaseProgram(V)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,G,I,nt){U===null&&(U=he);const lt=I.isMesh&&I.matrixWorld.determinant()<0,xt=tf(b,U,V,G,I);yt.setMaterial(G,lt);let pt=V.index,Pt=1;if(G.wireframe===!0){if(pt=z.getWireframeAttribute(V),pt===void 0)return;Pt=2}const Lt=V.drawRange,bt=V.attributes.position;let Wt=Lt.start*Pt,ie=(Lt.start+Lt.count)*Pt;nt!==null&&(Wt=Math.max(Wt,nt.start*Pt),ie=Math.min(ie,(nt.start+nt.count)*Pt)),pt!==null?(Wt=Math.max(Wt,0),ie=Math.min(ie,pt.count)):bt!=null&&(Wt=Math.max(Wt,0),ie=Math.min(ie,bt.count));const le=ie-Wt;if(le<0||le===1/0)return;Ut.setup(I,G,xt,V,pt);let de,$t=Rt;if(pt!==null&&(de=S.get(pt),$t=At,$t.setIndex(de)),I.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*Kt()),$t.setMode(L.LINES)):$t.setMode(L.TRIANGLES);else if(I.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),yt.setLineWidth(Tt*Kt()),I.isLineSegments?$t.setMode(L.LINES):I.isLineLoop?$t.setMode(L.LINE_LOOP):$t.setMode(L.LINE_STRIP)}else I.isPoints?$t.setMode(L.POINTS):I.isSprite&&$t.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))$t.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Tt=I._multiDrawStarts,Ae=I._multiDrawCounts,Qt=I._multiDrawCount,sn=pt?S.get(pt).bytesPerElement:1,Fi=Et.get(G).currentProgram.getUniforms();for(let We=0;We<Qt;We++)Fi.setValue(L,"_gl_DrawID",We),$t.render(Tt[We]/sn,Ae[We])}else if(I.isInstancedMesh)$t.renderInstances(Wt,le,I.count);else if(V.isInstancedBufferGeometry){const Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ae=Math.min(V.instanceCount,Tt);$t.renderInstances(Wt,le,Ae)}else $t.render(Wt,le)};function ne(b,U,V){b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=He,b.needsUpdate=!0,fr(b,U,V),b.side=ci,b.needsUpdate=!0,fr(b,U,V),b.side=Fn):fr(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),p=ht.get(V),p.init(U),M.push(p),V.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),b!==V&&b.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const G=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const nt=I.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const xt=nt[lt];ne(xt,V,I),G.add(xt)}else ne(nt,V,I),G.add(nt)}),p=M.pop(),G},this.compileAsync=function(b,U,V=null){const G=this.compile(b,U,V);return new Promise(I=>{function nt(){if(G.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&G.delete(lt)}),G.size===0){I(b);return}setTimeout(nt,10)}jt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let nn=null;function bn(b){nn&&nn(b)}function $h(){di.stop()}function Yh(){di.start()}const di=new bu;di.setAnimationLoop(bn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){nn=b,tt.setAnimationLoop(b),b===null?di.stop():di.start()},tt.addEventListener("sessionstart",$h),tt.addEventListener("sessionend",Yh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,R),p=ht.get(b,M.length),p.init(U),M.push(p),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(wt),St=this.localClippingEnabled,st=_t.init(this.clippingPlanes,St),g=Mt.get(b,y.length),g.init(),y.push(g),tt.enabled===!0&&tt.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&Do(nt,U,-1/0,_.sortObjects)}Do(b,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(it,rt),ce=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ce&&J.addToRenderList(g,b),this.info.render.frame++,st===!0&&_t.beginShadows();const V=p.state.shadowsArray;vt.render(V,b,U),st===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,I=g.transmissive;if(p.setupLights(),U.isArrayCamera){const nt=U.cameras;if(I.length>0)for(let lt=0,xt=nt.length;lt<xt;lt++){const pt=nt[lt];Kh(G,I,b,pt)}ce&&J.render(b);for(let lt=0,xt=nt.length;lt<xt;lt++){const pt=nt[lt];Zh(g,b,pt,pt.viewport)}}else I.length>0&&Kh(G,I,b,U),ce&&J.render(b),Zh(g,b,U);R!==null&&A===0&&(Ot.updateMultisampleRenderTarget(R),Ot.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,U),Ut.resetDefaultState(),w=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&_t.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Do(b,U,V,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){G&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const lt=Y.update(b),xt=b.material;xt.visible&&g.push(b,lt,xt,V,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const lt=Y.update(b),xt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ct.copy(lt.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(xt)){const pt=lt.groups;for(let Pt=0,Lt=pt.length;Pt<Lt;Pt++){const bt=pt[Pt],Wt=xt[bt.materialIndex];Wt&&Wt.visible&&g.push(b,lt,Wt,V,Ct.z,bt)}}else xt.visible&&g.push(b,lt,xt,V,Ct.z,null)}}const nt=b.children;for(let lt=0,xt=nt.length;lt<xt;lt++)Do(nt[lt],U,V,G)}function Zh(b,U,V,G){const I=b.opaque,nt=b.transmissive,lt=b.transparent;p.setupLightsView(V),st===!0&&_t.setGlobalState(_.clippingPlanes,V),G&&yt.viewport(P.copy(G)),I.length>0&&ur(I,U,V),nt.length>0&&ur(nt,U,V),lt.length>0&&ur(lt,U,V),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Kh(b,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Di(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?tr:vn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[G.id],lt=G.viewport||P;nt.setSize(lt.z*_.transmissionResolutionScale,lt.w*_.transmissionResolutionScale);const xt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(k),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),ce&&J.render(V);const pt=_.toneMapping;_.toneMapping=oi;const Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),st===!0&&_t.setGlobalState(_.clippingPlanes,G),ur(b,V,G),Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let bt=0,Wt=U.length;bt<Wt;bt++){const ie=U[bt],le=ie.object,de=ie.geometry,$t=ie.material,Tt=ie.group;if($t.side===Fn&&le.layers.test(G.layers)){const Ae=$t.side;$t.side=He,$t.needsUpdate=!0,jh(le,V,G,de,$t,Tt),$t.side=Ae,$t.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt))}_.setRenderTarget(xt),_.setClearColor(k,Z),Pt!==void 0&&(G.viewport=Pt),_.toneMapping=pt}function ur(b,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let I=0,nt=b.length;I<nt;I++){const lt=b[I],xt=lt.object,pt=lt.geometry,Pt=lt.group;let Lt=lt.material;Lt.allowOverride===!0&&G!==null&&(Lt=G),xt.layers.test(V.layers)&&jh(xt,U,V,pt,Lt,Pt)}}function jh(b,U,V,G,I,nt){b.onBeforeRender(_,U,V,G,I,nt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(_,U,V,G,b,nt),I.transparent===!0&&I.side===Fn&&I.forceSinglePass===!1?(I.side=He,I.needsUpdate=!0,_.renderBufferDirect(V,U,G,I,b,nt),I.side=ci,I.needsUpdate=!0,_.renderBufferDirect(V,U,G,I,b,nt),I.side=Fn):_.renderBufferDirect(V,U,G,I,b,nt),b.onAfterRender(_,U,V,G,I,nt)}function fr(b,U,V){U.isScene!==!0&&(U=he);const G=Et.get(b),I=p.state.lights,nt=p.state.shadowsArray,lt=I.state.version,xt=j.getParameters(b,I.state,nt,U,V),pt=j.getProgramCacheKey(xt);let Pt=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?C:ye).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",gt),Pt=new Map,G.programs=Pt);let Lt=Pt.get(pt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===lt)return Qh(b,xt),Lt}else xt.uniforms=j.getUniforms(b),b.onBeforeCompile(xt,_),Lt=j.acquireProgram(xt,pt),Pt.set(pt,Lt),G.uniforms=xt.uniforms;const bt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=_t.uniform),Qh(b,xt),G.needsLights=nf(b),G.lightsStateVersion=lt,G.needsLights&&(bt.ambientLightColor.value=I.state.ambient,bt.lightProbe.value=I.state.probe,bt.directionalLights.value=I.state.directional,bt.directionalLightShadows.value=I.state.directionalShadow,bt.spotLights.value=I.state.spot,bt.spotLightShadows.value=I.state.spotShadow,bt.rectAreaLights.value=I.state.rectArea,bt.ltc_1.value=I.state.rectAreaLTC1,bt.ltc_2.value=I.state.rectAreaLTC2,bt.pointLights.value=I.state.point,bt.pointLightShadows.value=I.state.pointShadow,bt.hemisphereLights.value=I.state.hemi,bt.directionalShadowMap.value=I.state.directionalShadowMap,bt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,bt.spotShadowMap.value=I.state.spotShadowMap,bt.spotLightMatrix.value=I.state.spotLightMatrix,bt.spotLightMap.value=I.state.spotLightMap,bt.pointShadowMap.value=I.state.pointShadowMap,bt.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function Jh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=mo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Qh(b,U){const V=Et.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function tf(b,U,V,G,I){U.isScene!==!0&&(U=he),Ot.resetTextureUnits();const nt=U.fog,lt=G.isMeshStandardMaterial?U.environment:null,xt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bs,pt=(G.isMeshStandardMaterial?C:ye).get(G.envMap||lt),Pt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Lt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!V.morphAttributes.position,Wt=!!V.morphAttributes.normal,ie=!!V.morphAttributes.color;let le=oi;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=_.toneMapping);const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=de!==void 0?de.length:0,Tt=Et.get(G),Ae=p.state.lights;if(st===!0&&(St===!0||b!==v)){const Fe=b===v&&G.id===w;_t.setState(G,b,Fe)}let Qt=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ae.state.version||Tt.outputColorSpace!==xt||I.isBatchedMesh&&Tt.batching===!1||!I.isBatchedMesh&&Tt.batching===!0||I.isBatchedMesh&&Tt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Tt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Tt.instancing===!1||!I.isInstancedMesh&&Tt.instancing===!0||I.isSkinnedMesh&&Tt.skinning===!1||!I.isSkinnedMesh&&Tt.skinning===!0||I.isInstancedMesh&&Tt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Tt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Tt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Tt.instancingMorph===!1&&I.morphTexture!==null||Tt.envMap!==pt||G.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==_t.numPlanes||Tt.numIntersection!==_t.numIntersection)||Tt.vertexAlphas!==Pt||Tt.vertexTangents!==Lt||Tt.morphTargets!==bt||Tt.morphNormals!==Wt||Tt.morphColors!==ie||Tt.toneMapping!==le||Tt.morphTargetsCount!==$t)&&(Qt=!0):(Qt=!0,Tt.__version=G.version);let sn=Tt.currentProgram;Qt===!0&&(sn=fr(G,U,I));let Fi=!1,We=!1,Rs=!1;const ae=sn.getUniforms(),Ke=Tt.uniforms;if(yt.useProgram(sn.program)&&(Fi=!0,We=!0,Rs=!0),G.id!==w&&(w=G.id,We=!0),Fi||v!==b){yt.buffers.depth.getReversed()?(ft.copy(b.projectionMatrix),Jf(ft),Qf(ft),ae.setValue(L,"projectionMatrix",ft)):ae.setValue(L,"projectionMatrix",b.projectionMatrix),ae.setValue(L,"viewMatrix",b.matrixWorldInverse);const ke=ae.map.cameraPosition;ke!==void 0&&ke.setValue(L,Zt.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&ae.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ae.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,We=!0,Rs=!0)}if(I.isSkinnedMesh){ae.setOptional(L,I,"bindMatrix"),ae.setOptional(L,I,"bindMatrixInverse");const Fe=I.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ae.setValue(L,"boneTexture",Fe.boneTexture,Ot))}I.isBatchedMesh&&(ae.setOptional(L,I,"batchingTexture"),ae.setValue(L,"batchingTexture",I._matricesTexture,Ot),ae.setOptional(L,I,"batchingIdTexture"),ae.setValue(L,"batchingIdTexture",I._indirectTexture,Ot),ae.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&ae.setValue(L,"batchingColorTexture",I._colorsTexture,Ot));const je=V.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&dt.update(I,V,sn),(We||Tt.receiveShadow!==I.receiveShadow)&&(Tt.receiveShadow=I.receiveShadow,ae.setValue(L,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ke.envMap.value=pt,Ke.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Ke.envMapIntensity.value=U.environmentIntensity),We&&(ae.setValue(L,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&ef(Ke,Rs),nt&&G.fog===!0&&q.refreshFogUniforms(Ke,nt),q.refreshMaterialUniforms(Ke,G,H,Q,p.state.transmissionRenderTarget[b.id]),mo.upload(L,Jh(Tt),Ke,Ot)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(mo.upload(L,Jh(Tt),Ke,Ot),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ae.setValue(L,"center",I.center),ae.setValue(L,"modelViewMatrix",I.modelViewMatrix),ae.setValue(L,"normalMatrix",I.normalMatrix),ae.setValue(L,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Fe=G.uniformsGroups;for(let ke=0,Uo=Fe.length;ke<Uo;ke++){const pi=Fe[ke];D.update(pi,sn),D.bind(pi,sn)}}return sn}function ef(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function nf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,V){const G=Et.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Et.get(b.texture).__webglTexture=U,Et.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const V=Et.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const sf=L.createFramebuffer();this.setRenderTarget=function(b,U=0,V=0){R=b,E=U,A=V;let G=!0,I=null,nt=!1,lt=!1;if(b){const pt=Et.get(b);if(pt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(pt.__webglFramebuffer===void 0)Ot.setupRenderTarget(b);else if(pt.__hasExternalTextures)Ot.rebindTextures(b,Et.get(b.texture).__webglTexture,Et.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(pt.__boundDepthTexture!==bt){if(bt!==null&&Et.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const Lt=Et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?I=Lt[U][V]:I=Lt[U],nt=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?I=Et.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?I=Lt[V]:I=Lt,P.copy(b.viewport),O.copy(b.scissor),N=b.scissorTest}else P.copy(ut).multiplyScalar(H).floor(),O.copy(Dt).multiplyScalar(H).floor(),N=Ht;if(V!==0&&(I=sf),yt.bindFramebuffer(L.FRAMEBUFFER,I)&&G&&yt.drawBuffers(b,I),yt.viewport(P),yt.scissor(O),yt.setScissorTest(N),nt){const pt=Et.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,V)}else if(lt){const pt=Et.get(b.texture),Pt=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,V,Pt)}else if(b!==null&&V!==0){const pt=Et.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,V)}w=-1},this.readRenderTargetPixels=function(b,U,V,G,I,nt,lt,xt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){yt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const Pt=b.textures[xt],Lt=Pt.format,bt=Pt.type;if(!re.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&V>=0&&V<=b.height-I&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xt),L.readPixels(U,V,G,I,at.convert(Lt),at.convert(bt),nt))}finally{const Pt=R!==null?Et.get(R).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,G,I,nt,lt,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt)if(U>=0&&U<=b.width-G&&V>=0&&V<=b.height-I){yt.bindFramebuffer(L.FRAMEBUFFER,pt);const Pt=b.textures[xt],Lt=Pt.format,bt=Pt.type;if(!re.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xt),L.readPixels(U,V,G,I,at.convert(Lt),at.convert(bt),0);const ie=R!==null?Et.get(R).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,ie);const le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jf(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt),L.deleteBuffer(Wt),L.deleteSync(le),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,V=0){const G=Math.pow(2,-V),I=Math.floor(b.image.width*G),nt=Math.floor(b.image.height*G),lt=U!==null?U.x:0,xt=U!==null?U.y:0;Ot.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,lt,xt,I,nt),yt.unbindTexture()};const rf=L.createFramebuffer(),of=L.createFramebuffer();this.copyTextureToTexture=function(b,U,V=null,G=null,I=0,nt=null){nt===null&&(I!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=I,I=0):nt=0);let lt,xt,pt,Pt,Lt,bt,Wt,ie,le;const de=b.isCompressedTexture?b.mipmaps[nt]:b.image;if(V!==null)lt=V.max.x-V.min.x,xt=V.max.y-V.min.y,pt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Lt=V.min.y,bt=V.isBox3?V.min.z:0;else{const je=Math.pow(2,-I);lt=Math.floor(de.width*je),xt=Math.floor(de.height*je),b.isDataArrayTexture?pt=de.depth:b.isData3DTexture?pt=Math.floor(de.depth*je):pt=1,Pt=0,Lt=0,bt=0}G!==null?(Wt=G.x,ie=G.y,le=G.z):(Wt=0,ie=0,le=0);const $t=at.convert(U.format),Tt=at.convert(U.type);let Ae;U.isData3DTexture?(Ot.setTexture3D(U,0),Ae=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ot.setTexture2DArray(U,0),Ae=L.TEXTURE_2D_ARRAY):(Ot.setTexture2D(U,0),Ae=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fi=L.getParameter(L.UNPACK_SKIP_PIXELS),We=L.getParameter(L.UNPACK_SKIP_ROWS),Rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt);const ae=b.isDataArrayTexture||b.isData3DTexture,Ke=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const je=Et.get(b),Fe=Et.get(U),ke=Et.get(je.__renderTarget),Uo=Et.get(Fe.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,ke.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Uo.__webglFramebuffer);for(let pi=0;pi<pt;pi++)ae&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(b).__webglTexture,I,bt+pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,nt,le+pi)),L.blitFramebuffer(Pt,Lt,lt,xt,Wt,ie,lt,xt,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||Et.has(b)){const je=Et.get(b),Fe=Et.get(U);yt.bindFramebuffer(L.READ_FRAMEBUFFER,rf),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,of);for(let ke=0;ke<pt;ke++)ae?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,I,bt+ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,je.__webglTexture,I),Ke?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,nt,le+ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,nt),I!==0?L.blitFramebuffer(Pt,Lt,lt,xt,Wt,ie,lt,xt,L.COLOR_BUFFER_BIT,L.NEAREST):Ke?L.copyTexSubImage3D(Ae,nt,Wt,ie,le+ke,Pt,Lt,lt,xt):L.copyTexSubImage2D(Ae,nt,Wt,ie,Pt,Lt,lt,xt);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ke?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ae,nt,Wt,ie,le,lt,xt,pt,$t,Tt,de.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,nt,Wt,ie,le,lt,xt,pt,$t,de.data):L.texSubImage3D(Ae,nt,Wt,ie,le,lt,xt,pt,$t,Tt,de):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,nt,Wt,ie,lt,xt,$t,Tt,de.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,nt,Wt,ie,de.width,de.height,$t,de.data):L.texSubImage2D(L.TEXTURE_2D,nt,Wt,ie,lt,xt,$t,Tt,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fi),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rs),nt===0&&U.generateMipmaps&&L.generateMipmap(Ae),yt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,V=null,G=null,I=0){return xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,V,G,I)},this.initRenderTarget=function(b){Et.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,yt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const Oy={BACKGROUND:3619904,SHAPE1_COLOR_2D:1795998,SHAPE2_COLOR_2D:9055790,SHAPE1_COLOR_3D:3255039,SHAPE2_COLOR_3D:14700624,CONNECTION_COLOR:16776960,WHITE:16777215};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="174",Th=0,px=1,mx=2,Qc=1,tl=100,el=204,nl=205,il=3,Pu=0,Lu=300,sl=1e3,Fr=1001,rl=1002,gx=1006,xx=1008,_x=1009,yx=1015,Mx=1023,vx=0,Du="",fn="srgb",ol="srgb-linear",al="linear",fa="srgb",Ji=7680,hl=519,cl=35044,Or=2e3,ll=2001;class Po{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const Uu=Math.PI/180,Iu=180/Math.PI;function zi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function Vh(s,t){return(s%t+t)%t}function Sx(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function wx(s,t,e){return s!==t?(e-s)/(t-s):0}function Hs(s,t,e){return(1-e)*s+e*t}function bx(s,t,e,n){return Hs(s,t,1-Math.exp(-e*n))}function Ex(s,t=1){return t-Math.abs(Vh(s,t*2)-t)}function Tx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ax(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Rx(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Cx(s,t){return s+Math.random()*(t-s)}function Px(s){return s*(.5-Math.random())}function Lx(s){s!==void 0&&(ul=s);let t=ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dx(s){return s*Uu}function Ux(s){return s*Iu}function Ix(s){return(s&s-1)===0&&s!==0}function Nx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fx(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),c=r((t+n)/2),l=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*l,h*u,h*f,a*c);break;case"YZY":s.set(h*f,a*l,h*u,a*c);break;case"ZXZ":s.set(h*u,h*f,a*l,a*c);break;case"XZX":s.set(a*l,h*m,h*d,a*c);break;case"YXY":s.set(h*d,a*l,h*m,a*c);break;case"ZYZ":s.set(h*m,h*d,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function us(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const go={DEG2RAD:Uu,RAD2DEG:Iu,generateUUID:zi,clamp:kt,euclideanModulo:Vh,mapLinear:Sx,inverseLerp:wx,lerp:Hs,damp:bx,pingpong:Ex,smoothstep:Tx,smootherstep:Ax,randInt:Rx,randFloat:Cx,randFloatSpread:Px,seededRandom:Lx,degToRad:Dx,radToDeg:Ux,isPowerOfTwo:Ix,ceilPowerOfTwo:Nx,floorPowerOfTwo:zx,setQuaternionFromProperEuler:Fx,normalize:Oe,denormalize:us};let Ft=class Nu{constructor(t=0,e=0){Nu.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class ui{constructor(t,e,n,i,r,o,a,h,c){ui.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,c)}set(t,e,n,i,r,o,a,h,c){const l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=h,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],l=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],y=i[1],M=i[4],_=i[7],T=i[2],E=i[5],A=i[8];return r[0]=o*x+a*y+h*T,r[3]=o*g+a*M+h*E,r[6]=o*p+a*_+h*A,r[1]=c*x+l*y+u*T,r[4]=c*g+l*M+u*E,r[7]=c*p+l*_+u*A,r[2]=f*x+d*y+m*T,r[5]=f*g+d*M+m*E,r[8]=f*p+d*_+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],l=t[8];return e*o*l-e*a*c-n*r*l+n*a*h+i*r*c-i*o*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],l=t[8],u=l*o-a*c,f=a*h-l*r,d=c*r-o*h,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(l*e-i*h)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*h-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*o+c*a)+o+t,-i*c,i*h,-i*(-c*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new ui;function Ox(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const dl=new ui().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new ui().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bx(){const s={enabled:!0,workingColorSpace:ol,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fa&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fa&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Du?al:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ol]:{primaries:t,whitePoint:n,transfer:al,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:fa,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),s}const hn=Bx();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qi;class Vx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=fl("canvas")),Qi.width=t.width,Qi.height=t.height;const n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kx=0;class Gx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pa(i[o].image)):r.push(pa(i[o]))}else r=pa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hx=0;class Pi extends Po{constructor(t=Pi.DEFAULT_IMAGE,e=Pi.DEFAULT_MAPPING,n=Fr,i=Fr,r=gx,o=xx,a=Mx,h=_x,c=Pi.DEFAULT_ANISOTROPY,l=Du){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=zi(),this.name="",this.source=new Gx(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ui,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sl:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sl:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pi.DEFAULT_IMAGE=null;Pi.DEFAULT_MAPPING=Lu;Pi.DEFAULT_ANISOTROPY=1;class or{constructor(t=0,e=0,n=0,i=1){or.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const h=t.elements,c=h[0],l=h[4],u=h[8],f=h[1],d=h[5],m=h[9],x=h[2],g=h[6],p=h[10];if(Math.abs(l-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(d+1)/2,T=(p+1)/2,E=(l+f)/4,A=(u+x)/4,R=(m+g)/4;return M>_&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=A/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=R/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(f-l)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ar{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let h=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||h!==f||c!==d||l!==m){let g=1-a;const p=h*f+c*d+l*m+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),E=Math.atan2(T,p*y);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}const _=a*y;if(h=h*g+f*_,c=c*g+d*_,l=l*g+m*_,u=u*g+x*_,g===1-a){const T=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=T,c*=T,l*=T,u*=T}}t[e]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],h=n[i+1],c=n[i+2],l=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+l*u+h*d-c*f,t[e+1]=h*m+l*f+c*u-a*d,t[e+2]=c*m+l*d+a*f-h*u,t[e+3]=l*m-a*u-h*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,c=a(n/2),l=a(i/2),u=a(r/2),f=h(n/2),d=h(i/2),m=h(r/2);switch(o){case"XYZ":this._x=f*l*u+c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u-f*d*m;break;case"YXZ":this._x=f*l*u+c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u+f*d*m;break;case"ZXY":this._x=f*l*u-c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u-f*d*m;break;case"ZYX":this._x=f*l*u-c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u+f*d*m;break;case"YZX":this._x=f*l*u+c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u-f*d*m;break;case"XZY":this._x=f*l*u-c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],h=e[9],c=e[2],l=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-h)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(l-h)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(h+l)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(h+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,h=e._y,c=e._z,l=e._w;return this._x=n*l+o*a+i*c-r*h,this._y=i*l+o*h+r*a-n*c,this._z=r*l+o*c+n*h-i*a,this._w=o*l-n*a-i*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(h),l=Math.atan2(c,a),u=Math.sin((1-e)*l)/c,f=Math.sin(e*l)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}let F=class zu{constructor(t=0,e=0,n=0){zu.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,h=t.w,c=2*(o*i-a*n),l=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+h*c+o*u-a*l,this.y=n+h*l+a*c-r*u,this.z=i+h*u+r*l-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ma=new F,ml=new ar;class hr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Vr.subVectors(this.max,zs),ts.subVectors(t.a,zs),es.subVectors(t.b,zs),ns.subVectors(t.c,zs),jn.subVectors(es,ts),Jn.subVectors(ns,es),vi.subVectors(ts,ns);let e=[0,-jn.z,jn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,jn.z,0,-jn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-jn.y,jn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!ga(e,ts,es,ns,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,ts,es,ns,Vr))?!1:(kr.crossVectors(jn,Jn),e=[kr.x,kr.y,kr.z],ga(e,ts,es,ns,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,Br=new hr,ts=new F,es=new F,ns=new F,jn=new F,Jn=new F,vi=new F,zs=new F,Vr=new F,kr=new F,Si=new F;function ga(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Si.fromArray(s,r);const a=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),h=t.dot(Si),c=e.dot(Si),l=n.dot(Si);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>a)return!1}return!0}const Wx=new hr,Fs=new F,xa=new F;let kh=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(xa)),this.expandByPoint(Fs.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Ln=new F,_a=new F,Gr=new F,Qn=new F,ya=new F,Hr=new F,Ma=new F;class Fu{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_a.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(_a);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=Qn.dot(this.direction),h=-Qn.dot(Gr),c=Qn.lengthSq(),l=Math.abs(1-o*o);let u,f,d,m;if(l>0)if(u=o*h-a,f=o*a-h,m=r*l,u>=0)if(f>=-m)if(f<=m){const x=1/l;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*h)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-h),r),d=-u*u+f*(f+2*h)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-h),r),d=f*(f+2*h)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-h),r),d=-u*u+f*(f+2*h)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_a).addScaledVector(Gr,f),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,h;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),l>=0?(r=(t.min.y-f.y)*l,o=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,o=(t.min.y-f.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){ya.subVectors(e,t),Hr.subVectors(n,t),Ma.crossVectors(ya,Hr);let o=this.direction.dot(Ma),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const h=a*this.direction.dot(Hr.crossVectors(Qn,Hr));if(h<0)return null;const c=a*this.direction.dot(ya.cross(Qn));if(c<0||h+c>o)return null;const l=-a*Qn.dot(Ma);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g)}set(t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=c,p[6]=l,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*l,d=o*u,m=a*l,x=a*u;e[0]=h*l,e[4]=-h*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*h,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*h}else if(t.order==="YXZ"){const f=h*l,d=h*u,m=c*l,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*l,d=h*u,m=c*l,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*l,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*l,d=o*u,m=a*l,x=a*u;e[0]=h*l,e[4]=m*c-d,e[8]=f*c+x,e[1]=h*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*c,m=a*h,x=a*c;e[0]=h*l,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-c*l,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*h,d=o*c,m=a*h,x=a*c;e[0]=h*l,e[4]=-u,e[8]=c*l,e[1]=f*u+x,e[5]=o*l,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*l,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xx,t,qx)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ti.crossVectors(n,$e),ti.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ti.crossVectors(n,$e)),ti.normalize(),Wr.crossVectors($e,ti),i[0]=ti.x,i[4]=Wr.x,i[8]=$e.x,i[1]=ti.y,i[5]=Wr.y,i[9]=$e.y,i[2]=ti.z,i[6]=Wr.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],l=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],_=n[11],T=n[15],E=i[0],A=i[4],R=i[8],w=i[12],v=i[1],P=i[5],O=i[9],N=i[13],k=i[2],Z=i[6],X=i[10],Q=i[14],H=i[3],it=i[7],rt=i[11],ut=i[15];return r[0]=o*E+a*v+h*k+c*H,r[4]=o*A+a*P+h*Z+c*it,r[8]=o*R+a*O+h*X+c*rt,r[12]=o*w+a*N+h*Q+c*ut,r[1]=l*E+u*v+f*k+d*H,r[5]=l*A+u*P+f*Z+d*it,r[9]=l*R+u*O+f*X+d*rt,r[13]=l*w+u*N+f*Q+d*ut,r[2]=m*E+x*v+g*k+p*H,r[6]=m*A+x*P+g*Z+p*it,r[10]=m*R+x*O+g*X+p*rt,r[14]=m*w+x*N+g*Q+p*ut,r[3]=y*E+M*v+_*k+T*H,r[7]=y*A+M*P+_*Z+T*it,r[11]=y*R+M*O+_*X+T*rt,r[15]=y*w+M*N+_*Q+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],h=t[9],c=t[13],l=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*h*u-i*c*u-r*a*f+n*c*f+i*a*d-n*h*d)+x*(+e*h*d-e*c*f+r*o*f-i*o*d+i*c*l-r*h*l)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*l-n*c*l)+p*(-i*a*l-e*h*u+e*a*f+i*o*u-n*o*f+n*h*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],l=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*c-x*f*c+x*h*d-a*g*d-u*h*p+a*f*p,M=m*f*c-l*g*c-m*h*d+o*g*d+l*h*p-o*f*p,_=l*x*c-m*u*c+m*a*d-o*x*d-l*a*p+o*u*p,T=m*u*h-l*x*h-m*a*f+o*x*f+l*a*g-o*u*g,E=e*y+n*M+i*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*p-n*f*p)*A,t[2]=(a*g*r-x*h*r+x*i*c-n*g*c-a*i*p+n*h*p)*A,t[3]=(u*h*r-a*f*r-u*i*c+n*f*c+a*i*d-n*h*d)*A,t[4]=M*A,t[5]=(l*g*r-m*f*r+m*i*d-e*g*d-l*i*p+e*f*p)*A,t[6]=(m*h*r-o*g*r-m*i*c+e*g*c+o*i*p-e*h*p)*A,t[7]=(o*f*r-l*h*r+l*i*c-e*f*c-o*i*d+e*h*d)*A,t[8]=_*A,t[9]=(m*u*r-l*x*r-m*n*d+e*x*d+l*n*p-e*u*p)*A,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*A,t[11]=(l*a*r-o*u*r-l*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=T*A,t[13]=(l*x*i-m*u*i+m*n*f-e*x*f-l*n*g+e*u*g)*A,t[14]=(m*a*i-o*x*i-m*n*h+e*x*h+o*n*g-e*a*g)*A,t[15]=(o*u*i-l*a*i+l*n*h-e*u*h-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-i*h,c*h+i*a,0,c*a+i*h,l*a+n,l*h-i*o,0,c*h-i*a,l*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,c=r+r,l=o+o,u=a+a,f=r*c,d=r*l,m=r*u,x=o*l,g=o*u,p=a*u,y=h*c,M=h*l,_=h*u,T=n.x,E=n.y,A=n.z;return i[0]=(1-(x+p))*T,i[1]=(d+_)*T,i[2]=(m-M)*T,i[3]=0,i[4]=(d-_)*E,i[5]=(1-(f+p))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(m+M)*A,i[9]=(g-y)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=is.set(i[0],i[1],i[2]).length();const o=is.set(i[4],i[5],i[6]).length(),a=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);const c=1/r,l=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Or){const h=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Or)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ll)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=l,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Or){const h=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*l;let m,x;if(a===Or)m=(o+r)*u,x=-2*u;else if(a===ll)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=x,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const is=new F,ln=new te,Xx=new F(0,0,0),qx=new F(1,1,1),ti=new F,Wr=new F,$e=new F,gl=new te,xl=new ar;class ue{constructor(t=0,e=0,n=0,i=ue.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],h=i[1],c=i[5],l=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ue.DEFAULT_ORDER="XYZ";class $x{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yx=0;const _l=new F,ss=new ar,Dn=new te,Xr=new F,Os=new F,Zx=new F,Kx=new ar,yl=new F(1,0,0),Ml=new F(0,1,0),vl=new F(0,0,1),Sl={type:"added"},jx={type:"removed"},rs={type:"childadded",child:null},va={type:"childremoved",child:null};class Mn extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new F,e=new ue,n=new ar,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new ui}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Os,Xr,this.up):Dn.lookAt(Xr,Os,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Dn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jx),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Kx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){const u=h[c];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(t.materials,this.material[h]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),c=o(t.textures),l=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const h=[];for(const c in a){const l=a[c];delete l.metadata,h.push(l)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new F(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new F,Un=new F,Sa=new F,In=new F,os=new F,as=new F,wl=new F,wa=new F,ba=new F,Ea=new F,Ta=new or,Aa=new or,Ra=new or;class pn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){un.subVectors(i,e),Un.subVectors(n,e),Sa.subVectors(t,e);const o=un.dot(un),a=un.dot(Un),h=un.dot(Sa),c=Un.dot(Un),l=Un.dot(Sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*h-a*l)*f,m=(o*l-a*h)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,i,r,o,a,h){return this.getBarycoord(t,e,n,i,In)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,In.x),h.addScaledVector(o,In.y),h.addScaledVector(a,In.z),h)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ta.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Un.subVectors(t,e),un.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;os.subVectors(i,n),as.subVectors(r,n),wa.subVectors(t,n);const h=os.dot(wa),c=as.dot(wa);if(h<=0&&c<=0)return e.copy(n);ba.subVectors(t,i);const l=os.dot(ba),u=as.dot(ba);if(l>=0&&u<=l)return e.copy(i);const f=h*u-l*c;if(f<=0&&h>=0&&l<=0)return o=h/(h-l),e.copy(n).addScaledVector(os,o);Ea.subVectors(t,r);const d=os.dot(Ea),m=as.dot(Ea);if(m>=0&&d<=m)return e.copy(r);const x=d*c-h*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(as,a);const g=l*m-d*u;if(g<=0&&u-l>=0&&d-m>=0)return wl.subVectors(r,i),a=(u-l)/(u-l+(d-m)),e.copy(i).addScaledVector(wl,a);const p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class hi{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,hn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=hn.workingColorSpace){return this.r=t,this.g=e,this.b=n,hn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=hn.workingColorSpace){if(t=Vh(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return hn.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return hn.fromWorkingColorSpace(Le.copy(this),t),Math.round(kt(Le.r*255,0,255))*65536+Math.round(kt(Le.g*255,0,255))*256+Math.round(kt(Le.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=hn.workingColorSpace){hn.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let h,c;const l=(a+o)/2;if(a===o)h=0,c=0;else{const u=o-a;switch(c=l<=.5?u/(o+a):u/(2-o-a),o){case n:h=(i-r)/u+(i<r?6:0);break;case i:h=(r-n)/u+2;break;case r:h=(n-i)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=l,t}getRGB(t,e=hn.workingColorSpace){return hn.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=fn){hn.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(qr);const n=Hs(ei.h,qr.h,e),i=Hs(ei.s,qr.s,e),r=Hs(ei.l,qr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new hi;hi.NAMES=Ou;let Jx=0;class Gh extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Qc,this.side=Th,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=nl,this.blendEquation=tl,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new hi(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qc&&(n.blending=this.blending),this.side!==Th&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==tl&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xo extends Gh{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new hi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ue,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new F,$r=new Ft;let Qx=0;class Ms{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=yx,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class t_ extends Ms{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class e_ extends Ms{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Ms{constructor(t,e,n){super(new Float32Array(t),e,n)}}let n_=0;const Qe=new te,Pa=new Mn,hs=new F,Ye=new hr,Bs=new hr,be=new F;class _e extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ox(t)?e_:t_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ui().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ye.min,Bs.min),Ye.expandByPoint(be),be.addVectors(Ye.max,Bs.max),Ye.expandByPoint(be)):(Ye.expandByPoint(Bs.min),Ye.expandByPoint(Bs.max))}Ye.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)be.fromBufferAttribute(a,c),h&&(hs.fromBufferAttribute(t,c),be.add(hs)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ms(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let R=0;R<n.count;R++)a[R]=new F,h[R]=new F;const c=new F,l=new F,u=new F,f=new Ft,d=new Ft,m=new Ft,x=new F,g=new F;function p(R,w,v){c.fromBufferAttribute(n,R),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),l.sub(c),u.sub(c),d.sub(f),m.sub(f);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(l,-m.x).multiplyScalar(P),a[R].add(x),a[w].add(x),a[v].add(x),h[R].add(g),h[w].add(g),h[v].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,w=y.length;R<w;++R){const v=y[R],P=v.start,O=v.count;for(let N=P,k=P+O;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new F,_=new F,T=new F,E=new F;function A(R){T.fromBufferAttribute(i,R),E.copy(T);const w=a[R];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);const P=_.dot(h[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,w=y.length;R<w;++R){const v=y[R],P=v.start,O=v.count;for(let N=P,k=P+O;N<k;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ms(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,h=new F,c=new F,l=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),l.subVectors(o,r),u.subVectors(i,r),l.cross(u),a.fromBufferAttribute(n,m),h.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(l),h.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,h.x,h.y,h.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),l.subVectors(o,r),u.subVectors(i,r),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,h){const c=a.array,l=a.itemSize,u=a.normalized,f=new c.constructor(h.length*l);let d=0,m=0;for(let x=0,g=h.length;x<g;x++){a.isInterleavedBufferAttribute?d=h[x]*a.data.stride+a.offset:d=h[x]*l;for(let p=0;p<l;p++)f[m++]=c[d++]}return new Ms(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],c=t(h,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const h=[],c=r[a];for(let l=0,u=c.length;l<u;l++){const f=c[l],d=t(f,n);h.push(d)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const c=n[h];t.data.attributes[h]=c.toJSON(t.data)}const i={};let r=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],l=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];l.push(d.toJSON(t.data))}l.length>0&&(i[h]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],u=r[c];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,l=o.length;c<l;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new te,wi=new Fu,Yr=new kh,El=new F,Zr=new F,Kr=new F,jr=new F,La=new F,Jr=new F,Tl=new F,Qr=new F;class cs extends Mn{constructor(t=new _e,e=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let h=0,c=r.length;h<c;h++){const l=a[h],u=r[h];l!==0&&(La.fromBufferAttribute(u,t),o?Jr.addScaledVector(La,l):Jr.addScaledVector(La.sub(e),l))}e.add(Jr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Yr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Yr,El)===null||wi.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(bl.copy(r).invert(),wi.copy(t.ray).applyMatrix4(bl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=M;_<T;_+=3){const E=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);i=to(this,p,t,n,c,l,u,E,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const y=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);i=to(this,o,t,n,c,l,u,y,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(h.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=M;_<T;_+=3){const E=_,A=_+1,R=_+2;i=to(this,p,t,n,c,l,u,E,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const y=g,M=g+1,_=g+2;i=to(this,o,t,n,c,l,u,y,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function i_(s,t,e,n,i,r,o,a){let h;if(t.side===px?h=n.intersectTriangle(o,r,i,!0,a):h=n.intersectTriangle(i,r,o,t.side===Th,a),h===null)return null;Qr.copy(a),Qr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:s}}function to(s,t,e,n,i,r,o,a,h,c){s.getVertexPosition(a,Zr),s.getVertexPosition(h,Kr),s.getVertexPosition(c,jr);const l=i_(s,t,e,n,Zr,Kr,jr,Tl);if(l){const u=new F;pn.getBarycoord(Tl,Zr,Kr,jr,u),i&&(l.uv=pn.getInterpolatedAttribute(i,a,h,c,u,new Ft)),r&&(l.uv1=pn.getInterpolatedAttribute(r,a,h,c,u,new Ft)),o&&(l.normal=pn.getInterpolatedAttribute(o,a,h,c,u,new F),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:h,c,normal:new F,materialIndex:0};pn.getNormal(Zr,Kr,jr,f.normal),l.face=f,l.barycoord=u}return l}class Bu extends Gh{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new hi(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bo=new F,Eo=new F,Al=new te,Vs=new Fu,eo=new kh,Da=new F,Rl=new F;let s_=class extends Mn{constructor(t=new _e,e=new Bu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)bo.fromBufferAttribute(e,i-1),Eo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=bo.distanceTo(Eo);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;Al.copy(i).invert(),Vs.copy(t.ray).applyMatrix4(Al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=l.getX(x),y=l.getX(x+1),M=no(this,t,Vs,h,p,y,x);M&&e.push(M)}if(this.isLineLoop){const x=l.getX(m-1),g=l.getX(d),p=no(this,t,Vs,h,x,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=no(this,t,Vs,h,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=no(this,t,Vs,h,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function no(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(bo.fromBufferAttribute(a,i),Eo.fromBufferAttribute(a,r),e.distanceSqToSegment(bo,Eo,Da,Rl)>n)return;Da.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:Rl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,h=r-1,c;for(;a<=h;)if(i=Math.floor(a+(h-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)h=i-1;else{h=i;break}if(i=h,n[i]===o)return i/(r-1);const l=n[i],f=n[i+1]-l,d=(o-l)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),h=e||(o.isVector2?new Ft:new F);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,i=[],r=[],o=[],a=new F,h=new te;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(kt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(h.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(kt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(h.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cr extends wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e=new Ft){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let h=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,d=c-this.aY;h=f*l-d*u+this.aX,c=f*u+d*l+this.aY}return n.set(h,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class r_ extends cr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hh(){let s=0,t=0,e=0,n=0;function i(r,o,a,h){s=r,t=a,e=-3*r+3*o-2*a-h,n=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,c){i(o,a,c*(a-r),c*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,c,l,u){let f=(o-r)/c-(a-r)/(c+l)+(a-o)/l,d=(a-o)/l-(h-o)/(l+u)+(h-a)/u;f*=l,d*=l,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const io=new F,Ua=new Hh,Ia=new Hh,Na=new Hh;class o_ extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let c,l;this.closed||a>0?c=i[(a-1)%r]:(io.subVectors(i[0],i[1]).add(i[0]),c=io);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?l=i[(a+2)%r]:(io.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=io),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(l),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ua.initNonuniformCatmullRom(c.x,u.x,f.x,l.x,m,x,g),Ia.initNonuniformCatmullRom(c.y,u.y,f.y,l.y,m,x,g),Na.initNonuniformCatmullRom(c.z,u.z,f.z,l.z,m,x,g)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,u.x,f.x,l.x,this.tension),Ia.initCatmullRom(c.y,u.y,f.y,l.y,this.tension),Na.initCatmullRom(c.z,u.z,f.z,l.z,this.tension));return n.set(Ua.calc(h),Ia.calc(h),Na.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,h=s*a;return(2*e-2*n+r+o)*h+(-3*e+3*n-2*r-o)*a+r*s+e}function a_(s,t){const e=1-s;return e*e*t}function h_(s,t){return 2*(1-s)*s*t}function c_(s,t){return s*s*t}function Ws(s,t,e,n){return a_(s,t)+h_(s,e)+c_(s,n)}function l_(s,t){const e=1-s;return e*e*e*t}function u_(s,t){const e=1-s;return 3*e*e*s*t}function f_(s,t){return 3*(1-s)*s*s*t}function d_(s,t){return s*s*s*t}function Xs(s,t,e,n,i){return l_(s,t)+u_(s,e)+f_(s,n)+d_(s,i)}class Vu extends wn{constructor(t=new Ft,e=new Ft,n=new Ft,i=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ft){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,i.x,r.x,o.x,a.x),Xs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class p_ extends wn{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,i.x,r.x,o.x,a.x),Xs(t,i.y,r.y,o.y,a.y),Xs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ku extends wn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m_ extends wn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends wn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,i.x,r.x,o.x),Ws(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g_ extends wn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,i.x,r.x,o.x),Ws(t,i.y,r.y,o.y),Ws(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,h=i[o===0?o:o-1],c=i[o],l=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Cl(a,h.x,c.x,l.x,u.x),Cl(a,h.y,c.y,l.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ft().fromArray(i))}return this}}var Pl=Object.freeze({__proto__:null,ArcCurve:r_,CatmullRomCurve3:o_,CubicBezierCurve:Vu,CubicBezierCurve3:p_,EllipseCurve:cr,LineCurve:ku,LineCurve3:m_,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:g_,SplineCurve:Hu});class x_ extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],h=a.getLength(),c=h===0?0:1-o/h;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let c=0;c<h.length;c++){const l=h[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Pl[i.type]().fromJSON(i))}return this}}class Ll extends x_{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ku(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Gu(this.currentPoint.clone(),new Ft(t,e),new Ft(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Vu(this.currentPoint.clone(),new Ft(t,e),new Ft(n,i),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,h){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,o,a,h),this}absellipse(t,e,n,i,r,o,a,h){const c=new cr(t,e,n,i,r,o,a,h);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wh extends _e{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};const c=this;i=Math.floor(i),r=Math.floor(r);const l=[],u=[],f=[],d=[];let m=0;const x=[],g=n/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function y(){const _=new F,T=new F;let E=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const w=[],v=R/r,P=v*(e-t)+t;for(let O=0;O<=i;O++){const N=O/i,k=N*h+a,Z=Math.sin(k),X=Math.cos(k);T.x=P*Z,T.y=-v*n+g,T.z=P*X,u.push(T.x,T.y,T.z),_.set(Z,A,X).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-v),w.push(m++)}x.push(w)}for(let R=0;R<i;R++)for(let w=0;w<r;w++){const v=x[w][R],P=x[w+1][R],O=x[w+1][R+1],N=x[w][R+1];(t>0||w!==0)&&(l.push(v,P,N),E+=3),(e>0||w!==r-1)&&(l.push(P,O,N),E+=3)}c.addGroup(p,E,0),p+=E}function M(_){const T=m,E=new Ft,A=new F;let R=0;const w=_===!0?t:e,v=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;const P=m;for(let O=0;O<=i;O++){const k=O/i*h+a,Z=Math.cos(k),X=Math.sin(k);A.x=w*X,A.y=g*v,A.z=w*Z,u.push(A.x,A.y,A.z),f.push(0,v,0),E.x=Z*.5+.5,E.y=X*.5*v+.5,d.push(E.x,E.y),m++}for(let O=0;O<i;O++){const N=T+O,k=P+O;_===!0?l.push(k,k+1,N):l.push(k+1,k,N),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wu extends Ll{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ll().fromJSON(i))}return this}}class __{static triangulate(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Xu(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let h,c,l,u,f,d,m;if(i&&(o=w_(t,e,o,n)),t.length>80*n){h=l=t[0],c=u=t[1];for(let x=n;x<r;x+=n)f=t[x],d=t[x+1],f<h&&(h=f),d<c&&(c=d),f>l&&(l=f),d>u&&(u=d);m=Math.max(l-h,u-c),m=m!==0?32767/m:0}return js(o,a,n,h,c,m,0),a}}function Xu(s,t,e,n,i){let r,o;if(i===I_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Dl(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Dl(r,s[r],s[r+1],o);return o&&Lo(o,o.next)&&(Qs(o),o=o.next),o}function Ii(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||fe(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(s,t,e,n,i,r,o){if(!s)return;!o&&r&&R_(s,n,i,r);let a=s,h,c;for(;s.prev!==s.next;){if(h=s.prev,c=s.next,r?M_(s,n,i,r):y_(s)){t.push(h.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Qs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=v_(Ii(s),t,e),js(s,t,e,n,i,r,2)):o===2&&S_(s,t,e,n,i,r):js(Ii(s),t,e,n,i,r,1);break}}}function y_(s){const t=s.prev,e=s,n=s.next;if(fe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,h=e.y,c=n.y,l=i<r?i<o?i:o:r<o?r:o,u=a<h?a<c?a:c:h<c?h:c,f=i>r?i>o?i:o:r>o?r:o,d=a>h?a>c?a:c:h>c?h:c;let m=n.next;for(;m!==t;){if(m.x>=l&&m.x<=f&&m.y>=u&&m.y<=d&&ds(i,a,r,h,o,c,m.x,m.y)&&fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function M_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(fe(i,r,o)>=0)return!1;const a=i.x,h=r.x,c=o.x,l=i.y,u=r.y,f=o.y,d=a<h?a<c?a:c:h<c?h:c,m=l<u?l<f?l:f:u<f?u:f,x=a>h?a>c?a:c:h>c?h:c,g=l>u?l>f?l:f:u>f?u:f,p=Ah(d,m,t,e,n),y=Ah(x,g,t,e,n);let M=s.prevZ,_=s.nextZ;for(;M&&M.z>=p&&_&&_.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&ds(a,l,h,u,c,f,M.x,M.y)&&fe(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ds(a,l,h,u,c,f,_.x,_.y)&&fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&ds(a,l,h,u,c,f,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ds(a,l,h,u,c,f,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function v_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Lo(i,r)&&qu(i,n,n.next,r)&&Js(i,r)&&Js(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qs(n),Qs(n.next),n=s=r),n=n.next}while(n!==s);return Ii(n)}function S_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L_(o,a)){let h=$u(o,a);o=Ii(o,o.next),h=Ii(h,h.next),js(o,t,e,n,i,r,0),js(h,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function w_(s,t,e,n){const i=[];let r,o,a,h,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,h=r<o-1?t[r+1]*n:s.length,c=Xu(s,a,h,n,!1),c===c.next&&(c.steiner=!0),i.push(P_(c));for(i.sort(b_),r=0;r<i.length;r++)e=E_(i[r],e);return e}function b_(s,t){return s.x-t.x}function E_(s,t){const e=T_(s,t);if(!e)return t;const n=$u(e,s);return Ii(n,n.next),Ii(e,e.next)}function T_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,h=i.x,c=i.y;let l=1/0,u;e=i;do r>=e.x&&e.x>=h&&r!==e.x&&ds(o<c?r:n,o,h,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Js(e,s)&&(u<l||u===l&&(e.x>i.x||e.x===i.x&&A_(i,e)))&&(i=e,l=u)),e=e.next;while(e!==a);return i}function A_(s,t){return fe(s.prev,s,t.prev)<0&&fe(t.next,s,s.next)<0}function R_(s,t,e,n){let i=s;do i.z===0&&(i.z=Ah(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,C_(i)}function C_(s){let t,e,n,i,r,o,a,h,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(h=c;a>0||h>0&&n;)a!==0&&(h===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,h--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Ah(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function P_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ds(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function L_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!D_(s,t)&&(Js(s,t)&&Js(t,s)&&U_(s,t)&&(fe(s.prev,s,t.prev)||fe(s,t.prev,t))||Lo(s,t)&&fe(s.prev,s,s.next)>0&&fe(t.prev,t,t.next)>0)}function fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Lo(s,t){return s.x===t.x&&s.y===t.y}function qu(s,t,e,n){const i=ro(fe(s,t,e)),r=ro(fe(s,t,n)),o=ro(fe(e,n,s)),a=ro(fe(e,n,t));return!!(i!==r&&o!==a||i===0&&so(s,e,t)||r===0&&so(s,n,t)||o===0&&so(e,s,n)||a===0&&so(e,t,n))}function so(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ro(s){return s>0?1:s<0?-1:0}function D_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&qu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Js(s,t){return fe(s.prev,s,s.next)<0?fe(s,t,s.next)>=0&&fe(s,s.prev,t)>=0:fe(s,t,s.prev)<0||fe(s,s.next,t)<0}function U_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function $u(s,t){const e=new Rh(s.i,s.x,s.y),n=new Rh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dl(s,t,e,n){const i=new Rh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class qs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ul(t),Il(n,t);let o=t.length;e.forEach(Ul);for(let h=0;h<e.length;h++)i.push(o),o+=e[h].length,Il(n,e[h]);const a=__.triangulate(n,i);for(let h=0;h<a.length;h+=3)r.push(a.slice(h,h+3));return r}}function Ul(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Il(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Xh extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(i),c=a+1,l=h+1,u=t/a,f=e/h,d=[],m=[],x=[],g=[];for(let p=0;p<l;p++){const y=p*f-o;for(let M=0;M<c;M++){const _=M*u-r;m.push(_,-y,0),x.push(0,0,1),g.push(M/a),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let y=0;y<a;y++){const M=y+c*p,_=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(M,_,E),d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xh(t.width,t.height,t.widthSegments,t.heightSegments)}}class qh extends _e{constructor(t=new Wu([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,h=0;if(Array.isArray(t)===!1)c(t);else for(let l=0;l<t.length;l++)c(t[l]),this.addGroup(a,h,l),a+=h,h=0;this.setIndex(n),this.setAttribute("position",new Me(i,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(o,2));function c(l){const u=i.length/3,f=l.extractPoints(e);let d=f.shape;const m=f.holes;qs.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];qs.isClockWise(y)===!0&&(m[g]=y.reverse())}const x=qs.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){const y=d[g];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=x.length;g<p;g++){const y=x[g],M=y[0]+u,_=y[1]+u,T=y[2]+u;n.push(M,_,T),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return N_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new qh(n,t.curveSegments)}}function N_(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class lr extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+a,Math.PI);let c=0;const l=[],u=new F,f=new F,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&h===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const E=T/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+_,1-M),y.push(c++)}l.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=l[p][y+1],_=l[p][y],T=l[p+1][y],E=l[p+1][y+1];(p!==0||o>0)&&d.push(M,_,E),(p!==n-1||h<Math.PI)&&d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nl extends Gh{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new hi(16777215),this.specular=new hi(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new hi(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vx,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ue,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);const z_=Math.PI/180;function Nt(s){return s*z_}var F_=Object.defineProperty,O_=(s,t,e)=>t in s?F_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,Jt=(s,t,e)=>(O_(s,typeof t!="symbol"?t+"":t,e),e);function za(s,t,e,n,i){let r;if(s=s.subarray||s.slice?s:s.buffer,e=e.subarray||e.slice?e:e.buffer,s=t?s.subarray?s.subarray(t,i&&t+i):s.slice(t,i&&t+i):s,e.set)e.set(s,n);else for(r=0;r<s.length;r++)e[r+n]=s[r];return e}function B_(s){return s instanceof Float32Array?s:s instanceof li?s.getAttribute("position").array:s.map(t=>{const e=Array.isArray(t);return t instanceof B?[t.x,t.y,t.z]:t instanceof ee?[t.x,t.y,0]:e&&t.length===3?[t[0],t[1],t[2]]:e&&t.length===2?[t[0],t[1],0]:t}).flat()}class V_ extends li{constructor(){super(),Jt(this,"type","MeshLine"),Jt(this,"isMeshLine",!0),Jt(this,"positions",[]),Jt(this,"previous",[]),Jt(this,"next",[]),Jt(this,"side",[]),Jt(this,"width",[]),Jt(this,"indices_array",[]),Jt(this,"uvs",[]),Jt(this,"counters",[]),Jt(this,"widthCallback",null),Jt(this,"_attributes"),Jt(this,"_points",[]),Jt(this,"points"),Jt(this,"matrixWorld",new pe),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(t){this.setPoints(t,this.widthCallback)}}})}setMatrixWorld(t){this.matrixWorld=t}setPoints(t,e){if(t=B_(t),this._points=t,this.widthCallback=e??null,this.positions=[],this.counters=[],t.length&&t[0]instanceof B)for(let n=0;n<t.length;n++){const i=t[n],r=n/(t.length-1);this.positions.push(i.x,i.y,i.z),this.positions.push(i.x,i.y,i.z),this.counters.push(r),this.counters.push(r)}else for(let n=0;n<t.length;n+=3){const i=n/(t.length-1);this.positions.push(t[n],t[n+1],t[n+2]),this.positions.push(t[n],t[n+1],t[n+2]),this.counters.push(i),this.counters.push(i)}this.process()}compareV3(t,e){const n=t*6,i=e*6;return this.positions[n]===this.positions[i]&&this.positions[n+1]===this.positions[i+1]&&this.positions[n+2]===this.positions[i+2]}copyV3(t){const e=t*6;return[this.positions[e],this.positions[e+1],this.positions[e+2]]}process(){const t=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];let e,n;this.compareV3(0,t-1)?n=this.copyV3(t-2):n=this.copyV3(0),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);for(let i=0;i<t;i++){if(this.side.push(1),this.side.push(-1),this.widthCallback?e=this.widthCallback(i/(t-1)):e=1,this.width.push(e),this.width.push(e),this.uvs.push(i/(t-1),0),this.uvs.push(i/(t-1),1),i<t-1){n=this.copyV3(i),this.previous.push(n[0],n[1],n[2]),this.previous.push(n[0],n[1],n[2]);const r=i*2;this.indices_array.push(r,r+1,r+2),this.indices_array.push(r+2,r+1,r+3)}i>0&&(n=this.copyV3(i),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]))}this.compareV3(t-1,0)?n=this.copyV3(1):n=this.copyV3(t-1),this.next.push(n[0],n[1],n[2]),this.next.push(n[0],n[1],n[2]),!this._attributes||this._attributes.position.count!==this.counters.length?this._attributes={position:new Te(new Float32Array(this.positions),3),previous:new Te(new Float32Array(this.previous),3),next:new Te(new Float32Array(this.next),3),side:new Te(new Float32Array(this.side),1),width:new Te(new Float32Array(this.width),1),uv:new Te(new Float32Array(this.uvs),2),index:new Te(new Uint16Array(this.indices_array),1),counters:new Te(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:t,y:e,z:n}){const i=this._attributes.position.array,r=this._attributes.previous.array,o=this._attributes.next.array,a=i.length;za(i,0,r,0,a),za(i,6,i,0,a-6),i[a-6]=t,i[a-5]=e,i[a-4]=n,i[a-3]=t,i[a-2]=e,i[a-1]=n,za(i,6,o,0,a-6),o[a-6]=t,o[a-5]=e,o[a-4]=n,o[a-3]=t,o[a-2]=e,o[a-1]=n,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}const k_=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`,G_=parseInt(To.replace(/\D+/g,"")),H_=G_>=154?"colorspace_fragment":"encodings_fragment",W_=`
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${H_}>
  }
`;class X_ extends Hn{constructor(t){super({uniforms:{...ot.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new Xt(16777215)},gradient:{value:[new Xt(16711680),new Xt(65280)]},opacity:{value:1},resolution:{value:new ee(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new ee(1,1)}},vertexShader:k_,fragmentShader:W_}),Jt(this,"lineWidth"),Jt(this,"map"),Jt(this,"useMap"),Jt(this,"alphaMap"),Jt(this,"useAlphaMap"),Jt(this,"color"),Jt(this,"gradient"),Jt(this,"resolution"),Jt(this,"sizeAttenuation"),Jt(this,"dashArray"),Jt(this,"dashOffset"),Jt(this,"dashRatio"),Jt(this,"useDash"),Jt(this,"useGradient"),Jt(this,"visibility"),Jt(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(e){this.uniforms.lineWidth.value=e}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(e){this.uniforms.map.value=e}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(e){this.uniforms.useMap.value=e}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(e){this.uniforms.alphaMap.value=e}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(e){this.uniforms.useAlphaMap.value=e}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(e){this.uniforms.color.value=e}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(e){this.uniforms.gradient.value=e}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(e){this.uniforms.resolution.value.copy(e)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(e){this.uniforms.sizeAttenuation.value=e}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(e){this.uniforms.dashArray.value=e,this.useDash=e!==0?1:0}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(e){this.uniforms.dashOffset.value=e}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(e){this.uniforms.dashRatio.value=e}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(e){this.uniforms.useDash.value=e}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(e){this.uniforms.useGradient.value=e}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(e){this.uniforms.visibility.value=e}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(e){this.uniforms.alphaTest.value=e}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(e){this.uniforms.repeat.value.copy(e)}}}),this.setValues(t)}copy(t){return super.copy(t),this.lineWidth=t.lineWidth,this.map=t.map,this.useMap=t.useMap,this.alphaMap=t.alphaMap,this.useAlphaMap=t.useAlphaMap,this.color.copy(t.color),this.gradient=t.gradient,this.opacity=t.opacity,this.resolution.copy(t.resolution),this.sizeAttenuation=t.sizeAttenuation,this.dashArray=t.dashArray,this.dashOffset=t.dashOffset,this.dashRatio=t.dashRatio,this.useDash=t.useDash,this.useGradient=t.useGradient,this.visibility=t.visibility,this.alphaTest=t.alphaTest,this.repeat.copy(t.repeat),this}}var zt=class zn{constructor(t,e){this.x=t,this.y=e}toVector3(){return new W(this.x,this.y,0)}toVector2(){return new zn(this.x,this.y)}signedAngle(t){const e=Math.acos(this.dot(t)/(this.magnitude()*t.magnitude()));return Math.sign(this.x*t.y-this.y*t.x)*e}clone(){return new zn(this.x,this.y)}static Zero(){return new zn(0,0)}add(t){return new zn(this.x+t.x,this.y+t.y)}subtract(t){return new zn(this.x-t.x,this.y-t.y)}scale(t){return new zn(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const t=this.magnitude();return t===0?new zn(0,0):new zn(this.x/t,this.y/t)}equal(t){return this.x===t.x&&this.y===t.y}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},W=class Be{constructor(t,e,n){this.x=t,this.y=e,this.z=n}projectOnPlane(t){const e=this.dot(t);return new Be(this.x-e*t.x,this.y-e*t.y,this.z-e*t.z)}signedAngle(t,e){const n=this.angleTo(t),i=this.y*t.z-this.z*t.y,r=this.z*t.x-this.x*t.z,o=this.x*t.y-this.y*t.x,a=Math.sign(e.x*i+e.y*r+e.z*o);return n*a}toVector3(){return new Be(this.x,this.y,this.z)}toVector2(){return new zt(this.x,this.y)}clone(){return new Be(this.x,this.y,this.z)}static Zero(){return new Be(0,0,0)}add(t){return new Be(this.x+t.x,this.y+t.y,this.z+t.z)}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=1/(t[3]*e+t[7]*n+t[11]*i+t[15]),o=(t[0]*e+t[4]*n+t[8]*i+t[12])*r,a=(t[1]*e+t[5]*n+t[9]*i+t[13])*r,h=(t[2]*e+t[6]*n+t[10]*i+t[14])*r;return this.x=o,this.y=a,this.z=h,this}subtract(t){return new Be(this.x-t.x,this.y-t.y,this.z-t.z)}scale(t){return new Be(this.x*t,this.y*t,this.z*t)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}equal(t,e=1e-6){return Math.abs(this.x-t.x)<e&&Math.abs(this.y-t.y)<e&&Math.abs(this.z-t.z)<e}cross(t){return new Be(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}set(t,e,n){return t instanceof Be?(this.x=t.x,this.y=t.y,this.z=t.z):(this.x=t,this.y=e,this.z=n),this}angleTo(t){const e=this.dot(t),n=this.magnitude(),i=t.magnitude();return Math.acos(e/(n*i))}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2)+Math.pow(this.z-t.z,2))}static angle(t,e){const n=t.dot(e),i=t.magnitude(),r=e.magnitude();return Math.acos(n/(i*r))}normalize(){const t=this.magnitude();return t===0?new Be(0,0,0):new Be(this.x/t,this.y/t,this.z/t)}rotateX(t){const e=Math.cos(t),n=Math.sin(t);return new Be(this.x,this.y*e-this.z*n,this.y*n+this.z*e)}rotateY(t){const e=Math.cos(t),n=Math.sin(t);return new Be(this.x*e+this.z*n,this.y,-this.x*n+this.z*e)}rotateZ(t){const e=Math.cos(t),n=Math.sin(t);return new Be(this.x*e-this.y*n,this.x*n+this.y*e,this.z)}rotate(t){return this.rotateX(t.x).rotateY(t.y).rotateZ(t.z)}};function q_(s,t,e,n){const i=t.subtract(s),r=n.subtract(e);if(i.cross(r).magnitude()<.01)return{closestPointLineA:s,closestPointLineB:e};const a=s.subtract(e),h=i.dot(i),c=i.dot(r),l=r.dot(r),u=i.dot(a),f=r.dot(a),d=h*l-c*c,m=(c*f-l*u)/d,x=(h*f-c*u)/d,g=s.add(i.scale(m)),p=e.add(r.scale(x));return{closestPointLineA:g,closestPointLineB:p}}function Yu(s,t,e,n,i){function r(g){return g<0?-Math.pow(-g,1/3):Math.pow(g,1/3)}const o=e*e-3*t*n+12*s*i,a=2*e*e*e-9*t*e*n+27*t*t*i+27*s*n*n-72*s*e*i,h=(8*s*e-3*t*t)/(8*s*s),c=(t*t*t-4*s*t*e+8*s*s*n)/(8*s*s*s);let l=r(.5*(a+Math.sqrt(a*a-4*o*o*o))),u;if(isNaN(l)){const g=Math.acos(a/(2*Math.sqrt(o*o*o)));u=.5*Math.sqrt(-2/3*h+2/(3*s)*Math.sqrt(o)*Math.cos(g/3))}else u=.5*Math.sqrt(-.6666666666666666*h+1/(3*s)*(l+o/l));const f=[0,0,0,0],d=-.25*t/s,m=Math.sqrt(-4*u*u-2*h+c/u),x=Math.sqrt(-4*u*u-2*h-c/u);return f[0]=d-u+.5*m,f[1]=d-u-.5*m,f[2]=d+u+.5*x,f[3]=d+u-.5*x,f}function $_(s,t,e,n,i,r,o,a){let h=s*n,c=t*i,l=e*r,u=r-1;s===1&&(u=n-1),t===1&&(u=i-1),e===1&&(u=r-1);let f;o<0?f=0:f=-1+Math.sqrt(h*h+c*c+l*l);let d=0;for(let m=0;m<a&&(d=(u+f)/2,!(d===u||d===f));m++){let x=h/(d+s),g=c/(d+t),p=l/(d+e);if(o=x*x+g*g+p*p-1,o>0)u=d;else if(o<0)f=d;else break}return d}function ps(s,t,e,n){e=Number.MAX_VALUE,n=-Number.MAX_VALUE;for(let i=0;i<t.length;i++){const r=s.dot(t[i]);r<e&&(e=r),r>n&&(n=r)}return[e,n]}function Ch(s,t,e,n){return zl(e,s,t)||zl(s,e,n)}function zl(s,t,e){return t<=s&&s<=e}function ms(s){if(s.length!==3||s.some(e=>e.length!==3))throw new Error("Input must be a 3x3 matrix.");let t=0;for(let e=0;e<3;e++)t+=s[0][e]*(s[1][(e+1)%3]*s[2][(e+2)%3]-s[1][(e+2)%3]*s[2][(e+1)%3]);return t}function Fl(s){if(s.length!==4||s.some(n=>n.length!==4))throw new Error("Input must be a 4x4 matrix.");const t=(n,i)=>s.filter((r,o)=>o!==n).map(r=>r.filter((o,a)=>a!==i));return s[0][0]*ms(t(0,0))-s[1][0]*ms(t(1,0))+s[2][0]*ms(t(2,0))-s[3][0]*ms(t(3,0))}function Y_(s,t,e,n){return s<0&&t===0&&e>0&&n<0||s<0&&t>0&&e===0&&n<0||s<0&&t>0&&e<0&&n<0||s<0&&t>0&&e>0&&n<0||s<0&&t<0&&e>0&&n<0}function si(s,t,e,n,i){t=t.clone().normalize(),n=n.clone().normalize();const r=t.dot(n);if(Math.abs(r)>1e-5)return null;const o=t.dot(e.clone().subtract(s)),a=e.clone().subtract(t.clone().scale(o)),h=a.distanceTo(e);if(h>i)return[];if(Math.abs(h-i)<1e-6)return[a];{const c=Math.sqrt(i*i-h*h),l=t.clone().cross(n).normalize(),u=a.clone().add(l.clone().scale(c)),f=a.clone().subtract(l.clone().scale(c));return[u,f]}}function Zu(s,t){return De(s[0],s[1],t[0],t[1])||De(s[0],s[1],t[1],t[2])||De(s[0],s[1],t[2],t[3])||De(s[0],s[1],t[3],t[0])||De(s[1],s[2],t[0],t[1])||De(s[1],s[2],t[1],t[2])||De(s[1],s[2],t[2],t[3])||De(s[1],s[2],t[3],t[0])||De(s[2],s[3],t[0],t[1])||De(s[2],s[3],t[1],t[2])||De(s[2],s[3],t[2],t[3])||De(s[2],s[3],t[3],t[0])||De(s[3],s[0],t[0],t[1])||De(s[3],s[0],t[1],t[2])||De(s[3],s[0],t[2],t[3])||De(s[3],s[0],t[3],t[0])}function De(s,t,e,n){const i=t.subtract(s),r=n.subtract(e);if(i.cross(r).magnitude()<.001){const M=e.subtract(s).dot(i);return Math.abs(M)<.001}const a=s.subtract(e),h=i.dot(i),c=i.dot(r),l=r.dot(r),u=i.dot(a),f=r.dot(a),d=h*l-c*c,m=(c*f-l*u)/d,x=(h*f-c*u)/d,g=s.add(i.scale(m)),p=e.add(r.scale(x));return g.equal(p)}function Ol(s,t,e,n,i,r,o,a,h,c,l,u,f,d,m){if(s===0&&t===0&&Ee(e,n,f,d,i,r,m,o,a)||s===0&&t===2&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===0&&t===1){const g=Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===0&&t===3){const g=-Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===1&&t===0&&Ee(e,n,f,d,i,r,m,o,a)||s===1&&t===2&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===1&&t===1){const g=Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===1&&t===3){const g=-Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===2&&t===0&&Ee(e,n,f,d,i,r,m,o,a)||s===2&&t===2&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===2&&t===1){const g=Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===2&&t===3){const g=-Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===3&&t===0&&Ee(e,n,f,d,i,r,m,o,a)||s===3&&t===2&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===3&&t===1){const g=Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===3&&t===3){const g=-Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===0&&t===0&&Ee(e,n,f,d,i,r,m,o,a)||s===2&&t===0&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===1&&t===0){const g=-Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===3&&t===0){const g=-Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===0&&t===1&&Ee(e,n,f,d,i,r,m,o,a)||s===2&&t===1&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===1&&t===1){const g=Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===3&&t===1){const g=Math.cos(u),p=(l+r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===0&&t===2&&Ee(e,n,f,d,i,r,m,o,a)||s===2&&t===2&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===1&&t===2){const g=Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===3&&t===2){const g=Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===0&&t===3&&Ee(e,n,f,d,i,r,m,o,a)||s===2&&t===3&&Ee(e,n,f,d,i,r,m,o,a))return!0;if(s===1&&t===3){const g=-Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(-1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}if(s===3&&t===3){const g=-Math.cos(u),p=(l-r)*Math.sin(u);if(Ue(1,g,p,e,n,h,o,a,f,d,i,r,m))return!0}return!1}function Ue(s,t,e,n,i,r,o,a,h,c,l,u,f){const d=-Math.pow(s,4)+2*Math.pow(s,2)*Math.pow(t,2)-Math.pow(t,4),m=-4*r*Math.pow(s,2)*Math.pow(t,2)+4*r*Math.pow(t,4),x=2*Math.pow(o,2)*Math.pow(s,4)+2*Math.pow(r,2)*Math.pow(s,2)*Math.pow(t,2)-2*Math.pow(o,2)*Math.pow(s,2)*Math.pow(t,2)-2*Math.pow(o,2)*Math.pow(s,2)*Math.pow(t,2)-6*Math.pow(r,2)*Math.pow(t,4)+2*Math.pow(a,2)*Math.pow(t,4)-2*Math.pow(s,2)*Math.pow(e,2)-2*Math.pow(t,2)*Math.pow(e,2),g=4*r*Math.pow(o,2)*Math.pow(s,2)*Math.pow(t,2)+4*Math.pow(r,3)*Math.pow(t,4)-4*r*Math.pow(a,2)*Math.pow(t,4)+4*r*Math.pow(t,2)*Math.pow(e,2),p=-Math.pow(o,4)*Math.pow(s,4)-2*Math.pow(r,2)*Math.pow(o,2)*Math.pow(s,2)*Math.pow(t,2)+2*Math.pow(o,2)*Math.pow(a,2)*Math.pow(s,2)*Math.pow(t,2)-Math.pow(r,4)*Math.pow(t,4)+2*Math.pow(r,2)*Math.pow(a,2)*Math.pow(t,4)-Math.pow(a,4)*Math.pow(t,4)+2*Math.pow(o,2)*Math.pow(s,2)*Math.pow(e,2)-2*Math.pow(r,2)*Math.pow(t,2)*Math.pow(e,2)+2*Math.pow(a,2)*Math.pow(t,2)*Math.pow(e,2)-Math.pow(e,4),y=Yu(d,m,x,g,p);if(y.length===2){if((y[0]>=r-Math.min(o,a)&&y[0]<=r+Math.max(o,a)||y[1]>=r-Math.min(o,a)&&y[1]<=r+Math.max(o,a))&&Ee(n,i,h,c,l,u,f,o,a))return!0}else if(y.length===1&&y[0]>=r-Math.min(o,a)&&y[0]<=r+Math.max(o,a)&&Ee(n,i,h,c,l,u,f,o,a))return!0;return!1}function Ee(s,t,e,n,i,r,o,a,h){const c=e.getCenter(),l=n.getCenter(),u=c.add(e.forward().scale(i)),f=c.subtract(e.forward().scale(i)),d=l.add(n.forward().scale(r)),m=l.subtract(n.forward().scale(r)),x=c.add(o.scale(s)),g=l.add(o.scale(t)),p=si(x,o,u,e.forward(),a),y=si(x,o,f,e.forward(),a),M=si(g,o,d,n.forward(),h),_=si(g,o,m,n.forward(),h);if(p&&p.length===2&&y&&y.length===2&&M&&M.length===2&&_&&_.length===2){const T=[];p[1].distanceTo(y[0])<p[1].distanceTo(y[1])?T.push(p[0],p[1],y[0],y[1]):T.push(p[0],p[1],y[1],y[0]);const E=[];if(M[1].distanceTo(_[0])<M[1].distanceTo(_[1])?E.push(M[0],M[1],_[0],_[1]):E.push(M[0],M[1],_[1],_[0]),Zu(T,E))return console.log("Intersection detected by SAT in Vertex Edge Test"),!0}return!1}function Z_(s,t,e,n,i,r,o,a,h,c,l){const u=[new zt(1,1),new zt(-1,1),new zt(-1,-1),new zt(1,-1)],f=[new zt(1,1),new zt(-1,1),new zt(-1,-1),new zt(1,-1)];let d=0,m=0;for(const x of u){for(const g of f){const p=K_(x,g,s,t,r,o,a*(Math.PI/180)),y=i+Math.sqrt(Math.abs(Math.pow(n,2)-Math.pow(p.y,2))),M=i-Math.sqrt(Math.abs(Math.pow(n,2)-Math.pow(p.y,2))),_=y-i,T=M-i;if(!isNaN(y)&&y>=i-Math.min(e,n)&&y<=Math.max(e,n)&&Ol(d,m,y,_,s,t,e,n,i,r,o,a,h,c,l)||!isNaN(M)&&M>=i-Math.min(e,n)&&M<=Math.max(e,n)&&Ol(d,m,M,T,s,t,e,n,i,r,o,a,h,c,l))return!0;m++}d++,m=0}return!1}function K_(s,t,e,n,i,r,o){const a=s.y*e,h=t.y*n,c=t.x*((a-i-r*Math.cos(o)-h*Math.cos(o))/Math.sin(o)),l=s.x*(c*Math.cos(o)-h*Math.sin(o)-r*Math.sin(o));return new zt(l,c)}function j_(s,t,e,n,i){return s<0&&t>0&&e>0&&n>0&&i<0||s<0&&t<0&&e>0&&n<0&&i<0||s<0&&t<0&&e>0&&n>0&&i<0||s<0&&t<0&&e<0&&n>0&&i<0||s<0&&t>0&&e<0&&n<0&&i<0||s<0&&t>0&&e>0&&n<0&&i<0||s<0&&t>0&&e===0&&n<0&&i<0||s<0&&t===0&&e>0&&n<0&&i<0||s<0&&t>0&&e<0&&n===0&&i<0||s<0&&t<0&&e===0&&n>0&&i<0||s<0&&t<0&&e>0&&n===0&&i<0||s<0&&t===0&&e<0&&n>0&&i<0||s<0&&t>0&&e===0&&n===0&&i<0||s<0&&t===0&&e>0&&n===0&&i<0||s<0&&t===0&&e===0&&n>0&&i<0||s<0&&t>0&&e===0&&n>0&&i<0||s<0&&t>0&&e>0&&n===0&&i<0||s<0&&t===0&&e>0&&n>0&&i<0}function Bl(s,t,e){let n=e.subtract(s).normalize(),r=t.subtract(s).dot(n);return r>0&&r<s.distanceTo(e)}function Fa(s){return s*Math.PI/180}function Vl(s){return s*180/Math.PI}var kl=class Ph{static AABB_AABB2D(t,e,n,i,r,o){const a=t.x,h=t.y,c=e.x,l=e.y;return a<c+i&&a+n>c&&h<l+o&&h+r>l}static OBB_OBB2D(t,e,n,i){for(let r=0;r<t.length;r++){let o=0,a=0,h=0,c=0;const l=ps(t[r],n,o,a),u=ps(t[r],i,h,c);if(!Ch(l[0],l[1],u[0],u[1]))return!1}for(let r=0;r<e.length;r++){let o=0,a=0,h=0,c=0;const l=ps(e[r],n,o,a),u=ps(e[r],i,h,c);if(Ch(l[0],l[1],u[0],u[1]))return!1}return!0}static characteristicPolynomial(t,e){const n=Array.from({length:3},()=>Array(3).fill(0)),i=Array.from({length:3},()=>Array(3).fill(0)),r=t.getRotation().z*(Math.PI/180),o=Math.sin(r),a=Math.cos(r),h=t.xradius**2,c=t.yradius**2,l=h*o*o+c*a*a,u=(c-h)*o*a,f=h*a*a+c*o*o,d=-l*t.getCenter().x-u*t.getCenter().y,m=-u*t.getCenter().x-f*t.getCenter().y,x=l*t.getCenter().x**2+2*u*t.getCenter().x*t.getCenter().y+f*t.getCenter().y*t.getCenter().y-h*c;n[0][0]=l,n[0][1]=u,n[0][2]=d,n[1][0]=u,n[1][1]=f,n[1][2]=m,n[2][0]=d,n[2][1]=m,n[2][2]=x;const g=e.getRotation().z*(Math.PI/180),p=Math.sin(g),y=Math.cos(g),M=e.xradius*e.xradius,_=e.yradius*e.yradius,T=M*p*p+_*y*y,E=(_-M)*p*y,A=M*y*y+_*p*p,R=-T*e.xradius-E*e.yradius,w=-E*e.xradius-A*e.yradius,v=T*e.getCenter().x**2+2*E*t.getCenter().x*t.getCenter().y+A*t.getCenter().y**2-M*_;i[0][0]=T,i[0][1]=E,i[0][2]=R,i[1][0]=E,i[1][1]=A,i[1][2]=w,i[2][0]=R,i[2][1]=w,i[2][2]=v;const P=ms(n),O=1/3*(l*f*v+l*A*x+T*f*x+u*m*R+u*w*d+E*m*d+d*u*w+d*E*m+R*u*m-d*f*R-d*A*d-R*f*d-u*u*v-u*E*x-E*u*x-l*m*w-l*w*m-T*m*m),N=1/3*(l*A*v+T*f*v+T*A*x+u*w*R+E*m*R+E*w*d+d*E*w+R*u*w+R*E*m-d*A*R-R*f*R-R*A*d-u*E*v-E*u*v-E*E*x-l*w*w-T*m*w-T*w*m),k=ms(i);return[P,O,N,k]}static Ellipse_Ellipse_Caravantes(t,e){const n=Ph.characteristicPolynomial(t,e),i=n[0],r=n[1],o=n[2],a=n[3],h=i*(27*a*a*i*i-18*a*o*r*i+4*a*r*r*r+4*o*o*o*i-o*o*r*r);return Y_(i,r,o,a)?h<0:!0}static Ellipse_Ellipse_Alberich(t,e){const n=Ph.characteristicPolynomial(t,e),i=n[0],r=n[1],o=n[2],a=n[3],h=i*o-r*r,c=i*a-r*o,l=r*a-o*o,u=4*h*l-c*c;return u>=0&&(o>0||r>0)?!(u>0):!0}},Ts=class{static PointSphere3D(s,t,e){const n=s.x,i=s.y,r=s.z,o=t.x,a=t.y,h=t.z;return Math.sqrt((n-o)**2+(i-a)**2+(r-h)**2)<e}static Point_AABB3D(s,t,e,n,i){const r=s.x,o=s.y,a=s.z,h=t.x-e/2,c=t.x+e/2,l=t.y-i/2,u=t.y+i/2,f=t.z-n/2,d=t.z+n/2;return r>=h&&r<=c&&o>=l&&o<=u&&a>=f&&a<=d}static Sphere_AABB3D(s,t,e,n,i,r){const o=s.x-t/2,a=s.x+t/2,h=s.y-n/2,c=s.y+n/2,l=s.z-e/2,u=s.z+e/2,f=i.x,d=i.y,m=i.z,x=Math.max(o,Math.min(f,a)),g=Math.max(h,Math.min(d,c)),p=Math.max(l,Math.min(m,u));return Math.sqrt((x-f)**2+(g-d)**2+(p-m)**2)<r}static SphereSphere3D(s,t,e,n){const i=s.x,r=t.x,o=s.y,a=t.y,h=s.z,c=t.z;return Math.sqrt((i-r)**2+(o-a)**2+(h-c)**2)<e+n}static AABB_AABB3D(s,t,e,n,i,r,o,a){const h=s.x,c=s.y,l=s.z,u=t.x,f=t.y,d=t.z;return h<u+n&&h+e>u&&c<f+r&&c+i>f&&l<d+a&&l+o>d}static OBB_OBB3D(s,t,e){for(let n=0;n<s.length;n++){let i=0,r=0,o=0,a=0;const h=ps(s[n],t,i,r),c=ps(s[n],e,o,a);if(!Ch(h[0],h[1],c[0],c[1]))return!1}return!0}static getAllIntersectionPoints(s,t,e,n,i,r,o,a,h,c,l){const u=si(s,e,n,a,c.xradius),f=si(s,e,i,a,c.xradius),d=si(t,e,r,h,l.xradius),m=si(t,e,o,h,l.xradius);return[u,f,d,m]}static Cylinder_Cylinder_Chittawadigi(s,t){const e=s.getCenter(),n=t.getCenter(),i=s.forward(),r=t.forward();let o,a;const{closestPointLineA:h,closestPointLineB:c}=q_(e,e.add(i),n,n.add(r));o=h,a=c;const l=a.subtract(o);let u,f,d,m;if(o.equal(e)&&a.equal(n)){u=0,m=Math.abs(n.z-e.z);const p=new W(e.x,e.y,e.z+n.z-e.z);f=Math.abs(n.distanceTo(p)),d=0,console.log("[Parallel] Closest points are base points.")}else{u=o.distanceTo(e),f=l.magnitude();const p=o.add(l);d=Math.round(s.forward().angleTo(t.forward())*100)/100,d=Vl(d),d>90&&(d=180-d),m=p.distanceTo(n),console.log("[General Case] Closest points not at base.")}f<1e-5&&(f=0),u<1e-5&&(u=0),m<1e-5&&(m=0),Math.abs(d)<1e-5&&(d=0),console.log(`[Parameters] a: ${f}, b: ${u}, c: ${m}, alpha: ${d}`);const x=s.yradius/2,g=t.yradius/2;if((d===0||d===180)&&u===0){console.log("[Case] Parallel and aligned.");const p=x+g>=Math.abs(m)&&s.xradius+t.xradius>=Math.abs(f);return console.log("[Result] Parallel overlap:",p),p}else{if(Math.abs(u)<=x&&Math.abs(m)<=g&&Math.abs(f)<=s.xradius+t.xradius)return console.log("[Early Out] Bounding box overlap."),!0;{let p=!1;if(o.distanceTo(a)<=.001){const v=i.cross(r);a=a.add(v),l.set(a.subtract(o)),p=!0,console.log("[Intersection] Cylinder axes intersect.")}const y=e.add(i.scale(x)),M=e.subtract(i.scale(x)),_=n.add(r.scale(g)),T=n.subtract(r.scale(g)),E=this.getAllIntersectionPoints(e,n,l,y,M,_,T,i,r,s,t);if(!E[0]||!E[1]||!E[2]||!E[3])return console.log("[Failure] Intersection points could not be calculated."),!1;const A=[];E[0][1].distanceTo(E[1][0])<E[0][1].distanceTo(E[1][1])?A.push(E[0][0],E[0][1],E[1][0],E[1][1]):A.push(E[0][0],E[0][1],E[1][1],E[1][0]);const R=[];if(E[2][1].distanceTo(E[3][0])<E[2][1].distanceTo(E[3][1])?p?R.push(E[2][0],E[2][1],E[3][0],E[3][1]):R.push(E[2][0].subtract(l),E[2][1].subtract(l),E[3][0].subtract(l),E[3][1].subtract(l)):p?R.push(E[2][0],E[2][1],E[3][1],E[3][0]):R.push(E[2][0].subtract(l),E[2][1].subtract(l),E[3][1].subtract(l),E[3][0].subtract(l)),console.log("[SAT] Testing rectangle intersection."),!Zu(A,R))return console.log("[SAT] No intersection."),!1;console.log("[SAT] Rectangles intersect. Running VertexEdgeTest...");const w=Z_(x,g,s.xradius,t.xradius,f,u,m,d,s,t,l);return console.log("[VertexEdgeTest] Result:",w),w}}}static characteristicPolynomialEllipsoid(s,t){const e=Math.sin(s.getRotation().x*(Math.PI/180)),n=Math.sin(s.getRotation().y*(Math.PI/180)),i=Math.sin(s.getRotation().z*(Math.PI/180)),r=Math.cos(s.getRotation().x*(Math.PI/180)),o=Math.cos(s.getRotation().y*(Math.PI/180)),a=Math.cos(s.getRotation().z*(Math.PI/180)),h=Math.sin(t.getRotation().x*(Math.PI/180)),c=Math.sin(t.getRotation().y*(Math.PI/180)),l=Math.sin(t.getRotation().z*(Math.PI/180)),u=Math.cos(t.getRotation().x*(Math.PI/180)),f=Math.cos(t.getRotation().y*(Math.PI/180)),d=Math.cos(t.getRotation().z*(Math.PI/180)),m=Array(4).fill(0).map(()=>Array(4).fill(0)),x=Array(4).fill(0).map(()=>Array(4).fill(0)),g=s.xradius*s.xradius,p=s.yradius*s.yradius,y=s.zradius*s.zradius,M=t.xradius*t.xradius,_=t.yradius*t.yradius,T=t.zradius*t.zradius,E=o**2*a**2*p*y+o**2*i**2*g*y+n**2*g*p,A=(n*e*a+i*r)**2*p*y+(i*n*e+r*a)**2*g*y+(e*o)**2*g*p,R=(-n*r*a+e*i)*(-n*e*a+e*i)*p*y+(n*r*i+a*e)*(n*r*i+a*e)*g*y+o**2*r**2*g*p,w=(n*e*a*o*a+i*r*o*a)*p*y+(i*n*e*o*i-r*a*o*i)*g*y+-e*o*n*g*p,v=(-n*r*a+e*i)*(n*e*a+i*r)*p*y+(n*r*i+a*e)*(-i*n*e+r*a)*g*y+-o*r*o*e*g*p,P=(-n*r*a*o*a+e*i*o*a)*p*y+(-n+r*i*o*i-a*e*o*i)*g*y+o*r*n*g*p,O=-s.getCenter().x*E-s.getCenter().y*w-s.getCenter().z*P,N=-s.getCenter().x*w-s.getCenter().y*A-s.getCenter().z*v,k=-s.getCenter().x*P-s.getCenter().y*v-s.getCenter().z*R,Z=s.getCenter().x**2*E+s.getCenter().x*s.getCenter().y*2*w+s.getCenter().x*s.getCenter().z*2*P+s.getCenter().y**2*A+s.getCenter().y*s.getCenter().z*2*v+s.getCenter().z**2*R-g*p*y;m[0][0]=E,m[0][1]=w,m[0][2]=P,m[0][3]=O,m[1][0]=w,m[1][1]=A,m[1][2]=v,m[1][3]=N,m[2][0]=P,m[2][1]=v,m[2][2]=R,m[2][3]=k,m[3][0]=O,m[3][1]=N,m[3][2]=k,m[3][3]=Z;const X=f**2*d**2*_*T+f**2*l**2*M*T+c**2*M*_,Q=(c*h*d+l*u)**2*_*T+(l*c*h+u*d)**2*M*T+(h*f)**2*M*_,H=(-c*u*d+h*l)*(-c*h*d+h*l)*_*T+(c*u*l+d*h)*(c*u*l+d*h)*M*T+f**2*u**2*M*_,it=(c*h*d*f*d+l*u*f*d)*_*T+(l*c*h*f*l-u*d*f*l)*M*T+-h*f*c*M*_,rt=(-c*u*d+h*l)*(c*h*d+l*u)*_*T+(c*u*l+d*h)*(-l*c*h+u*d)*M*T+-f*u*f*h*M*_,ut=(-c*u*d*f*d+h*l*f*d)*_*T+(-c+u*l*f*l-d*h*f*l)*M*T+f*u*c*M*_,Dt=-t.getCenter().x*X-t.getCenter().y*it-t.getCenter().z*ut,Ht=-t.getCenter().x*it-t.getCenter().y*Q-t.getCenter().z*rt,$=-t.getCenter().x*ut-t.getCenter().y*rt-t.getCenter().z*H,st=t.getCenter().x**2*X+t.getCenter().x*t.getCenter().y*2*it+t.getCenter().x*t.getCenter().z*2*ut+t.getCenter().y**2*Q+t.getCenter().y*t.getCenter().z*2*rt+t.getCenter().z**2*H-M*_*T;return x[0][0]=X,x[0][1]=it,x[0][2]=ut,x[0][3]=Dt,x[1][0]=it,x[1][1]=Q,x[1][2]=rt,x[1][3]=Ht,x[2][0]=ut,x[2][1]=rt,x[2][2]=H,x[2][3]=$,x[3][0]=Dt,x[3][1]=Ht,x[3][2]=$,x[3][3]=st,this.calcCharacteristicPolynomial(m,x,E,A,R,w,v,P,O,N,k,Z,X,Q,H,it,rt,ut,Dt,Ht,$,st)}static calcCharacteristicPolynomial(s,t,e,n,i,r,o,a,h,c,l,u,f,d,m,x,g,p,y,M,_,T){let E=Fl(s),A=1/3*(e*n*i*T+e*n*m*u+e*d*i*u+f*n*i*u+(e*o*l*M+e*o*_*c+e*g*l*c+f*o*l*c)+(e*c*o*_+e*c*g*l+e*M*o*l+f*c*o*l)-(e*c*i*M+e*c*m*c+e*M*i*c+f*c*i*c)-(e*o*o*T+e*o*g*u+e*g*o*u+f*o*o*u)-(e*n*l*_+e*n*_*l+e*d*l*l+f*n*l*l)-(r*r*i*T+r*r*m*u+r*x*i*u+x*r*i*u)-(a*r*l*M+a*r*_*c+a*x*l*c+p*r*l*c)-(h*r*o*_+h*r*g*l+h*x*o*l+y*r*o*l)+(h*r*i*M+h*r*m*c+h*x*i*c+y*r*i*c)+(a*r*o*T+a*r*g*u+a*x*o*u+p*r*o*u)+(r*r*l*_+r*r*_*l+r*x*l*l+x*r*l*l)+(r*o*a*T+r*o*p*u+r*g*a*u+x*o*a*u)+(a*c*a*M+a*c*p*c+a*M*a*c+p*c*a*c)+(h*n*a*_+h*n*p*l+h*d*a*l+y*n*a*l)-(h*o*a*M+h*o*p*c+h*g*a*c+y*o*a*c)-(a*n*a*T+a*n*p*u+a*d*a*u+p*n*a*u)-(r*c*a*_+r*c*p*l+r*M*a*l+x*c*a*l)-(r*o*l*y+r*o*_*h+r*g*l*h+x*o*l*h)-(a*c*o*y+a*c*g*h+a*M*o*h+p*c*o*h)-(h*n*i*y+h*n*m*h+h*d*i*h+y*n*i*h)+(h*o*o*y+h*o*g*h+h*g*o*h+y*o*o*h)+(a*n*l*y+a*n*_*h+a*d*l*h+p*n*l*h)+(r*c*i*y+r*c*m*h+r*M*i*h+x*c*i*h)),R=1/3*(e*n*m*T+e*d*i*T+e*d*m*u+f*n*i*T+f*n*m*u+f*d*i*u+(e*o*_*M+e*g*l*M+e*g*_*c+f*o*l*M+f*o*_*c+f*g*l*c)+(e*c*g*_+e*M*o*_+e*M*g*l+f*c*o*_+f*c*g*l+f*M*o*l)-(e*c*m*M+e*M*i*M+e*M*m*c+f*c*i*M+f*c*m*c+f*M*i*c)-(e*o*g*T+e*g*o*T+e*g*g*u+f*o*o*T+f*o*g*u+f*g*o*u)-(e*n*_*_+e*d*l*_+e*d*_*l+f*n*l*_+f*n*_*l+f*d*l*l)-(r*r*m*T+r*x*i*T+r*x*m*u+x*r*i*T+x*r*m*u+x*x*i*u)-(a*r*_*M+a*x*l*M+a*x*_*c+p*r*l*M+p*r*_*c+p*x*l*c)-(h*r*g*_+h*x*o*_+h*x*g*l+y*r*o*_+y*r*g*l+y*x*o*l)+(h*r*m*M+h*x*i*M+h*x*m*c+y*r*i*M+y*r*m*c+y*x*i*c)+(a*r*g*T+a*x*o*T+a*x*g*u+p*r*o*T+p*r*g*u+p*x*o*u)+(r*r*_*_+r*x*l*_+r*x*_*l+x*r*l*_+x*r*_*l+x*x*l*l)+(r*o*p*T+r*g*a*T+r*g*p*u+x*o*a*T+x*o*p*u+x*g*a*u)+(a*c*p*M+a*M*a*M+a*M*p*c+p*c*a*M+p*c*p*c+p*M*a*c)+(h*n*p*_+h*d*a*_+h*d*p*l+y*n*a*_+y*n*p*l+y*d*a*l)-(h*o*p*M+h*g*a*M+h*g*p*c+y*o*a*M+y*o*p*c+y*g*a*c)-(a*n*p*T+a*d*a*T+a*d*p*u+p*n*a*T+p*n*p*u+p*d*a*u)-(r*c*p*_+r*M*a*_+r*M*p*l+x*c*a*_+x*c*p*l+x*M*a*l)-(r*o*_*y+r*g*l*y+r*g*_*h+x*o*l*y+x*o*_*h+x*g*l*h)-(a*c*g*y+a*M*o*y+a*M*g*h+p*c*o*y+p*c*g*h+p*M*o*h)-(h*n*m*y+h*d*i*y+h*d*m*h+y*n*i*y+y*n*m*h+y*d*i*h)+(h*o*g*y+h*g*o*y+h*g*g*h+y*o*o*y+y*o*g*h+y*g*o*h)+(a*n*_*y+a*d*l*y+a*d*_*h+p*n*l*y+p*n*_*h+p*d*l*h)+(r*c*m*y+r*M*i*y+r*M*m*h+x*c*i*y+x*c*m*h+x*M*i*h)),w=1/3*(e*d*m*T+f*n*m*T+f*d*i*T+f*d*m*u+(e*g*_*M+f*o*_*M+f*g*l*M+f*g*_*c)+(e*M*g*_+f*c*g*_+f*M*o*_+f*M*g*l)-(e*M*m*M+f*c*m*M+f*M*i*M+f*M*m*c)-(e*g*g*T+f*o*g*T+f*g*o*T+f*g*g*u)-(e*d*_*_+f*n*_*_+f*d*l*_+f*d*_*l)-(r*x*m*T+x*r*m*T+x*x*i*T+x*x*m*u)-(a*x*_*M+p*r*_*M+p*x*l*M+p*x*_*c)-(h*x*g*_+y*r*g*_+y*x*o*_+y*x*g*l)+(h*x*m*M+y*r*m*M+y*x*i*M+y*x*m*c)+(a*x*g*T+p*r*g*T+p*x*o*T+p*x*g*u)+(r*x*_*_+x*r*_*_+x*x*l*_+x*x*_*l)+(r*g*p*T+x*o*p*T+x*g*a*T+x*g*p*u)+(a*M*p*M+p*c*p*M+p*M*a*M+p*M*p*c)+(h*d*p*_+y*n*p*_+y*d*a*_+y*d*p*l)-(h*g*p*M+y*o*p*M+y*g*a*M+y*g*p*c)-(a*d*p*T+p*n*p*T+p*d*a*T+p*d*p*u)-(r*M*p*_+x*c*p*_+x*M*a*_+x*M*p*l)-(r*g*_*y+x*o*_*y+x*g*l*y+x*g*_*h)-(a*M*g*y+p*c*g*y+p*M*o*y+p*M*g*h)-(h*d*m*y+y*n*m*y+y*d*i*y+y*d*m*h)+(h*g*g*y+y*o*g*y+y*g*o*y+y*g*g*h)+(a*d*_*y+p*n*_*y+p*d*l*y+p*d*_*h)+(r*M*m*y+x*c*m*y+x*M*i*y+x*M*m*h)),v=Fl(t);return[E,A,R,w,v]}static Ellipsoid_Ellipsoid_Caravantes(s,t){const e=this.characteristicPolynomialEllipsoid(s,t),n=e[0],i=e[1],r=e[2],o=e[3],a=e[4];return!j_(n,i,r,o,a)}static characteristicPolynomialEllipsoidEllipticParaboloid(s,t){const e=Math.sin(s.getRotation().x*(Math.PI/180)),n=Math.sin(s.getRotation().y*(Math.PI/180)),i=Math.sin(s.getRotation().z*(Math.PI/180)),r=Math.cos(s.getRotation().x*(Math.PI/180)),o=Math.cos(s.getRotation().y*(Math.PI/180)),a=Math.cos(s.getRotation().z*(Math.PI/180)),h=Math.sin(t.getRotation().x*(Math.PI/180)),c=Math.sin(t.getRotation().y*(Math.PI/180)),l=Math.sin(t.getRotation().z*(Math.PI/180)),u=Math.cos(t.getRotation().x*(Math.PI/180)),f=Math.cos(t.getRotation().y*(Math.PI/180)),d=Math.cos(t.getRotation().z*(Math.PI/180)),m=Array(4).fill(0).map(()=>Array(4).fill(0)),x=Array(4).fill(0).map(()=>Array(4).fill(0)),g=s.xradius**2,p=s.yradius**2,y=s.zradius**2,M=t.xradius**2,_=t.yradius**2,T=o**2*a**2*p*y+o**2*i**2*g*y+n**2*g*p,E=(n*e*a+i*r)**2*p*y+(i*n*e+r*a)**2*g*y+(e*o)**2*g*p,A=(-n*r*a+e*i)**2*p*y+(n*r*i+a*e)**2*g*y+o**2*r**2*g*p,R=(n*e*a*o*a+i*r*o*a)*p*y+(i*n*e*o*i-r*a*o*i)*g*y+-e*o*n*g*p,w=(-n*r*a+e*i)*(n*e*a+i*r)*p*y+(n*r*i+a*e)*(-i*n*e+r*a)*g*y+-o*r*o*e*g*p,v=(-n*r*a*o*a+e*i*o*a)*p*y+(-n+r*i*o*i-a*e*o*i)*g*y+o*r*n*g*p,P=-s.getCenter().x*T-s.getCenter().y*R-s.getCenter().z*v,O=-s.getCenter().x*R-s.getCenter().y*E-s.getCenter().z*w,N=-s.getCenter().x*v-s.getCenter().y*w-s.getCenter().z*A,k=s.getCenter().x**2*T+s.getCenter().x*s.getCenter().y*2*R+s.getCenter().x*s.getCenter().z*2*v+s.getCenter().y**2*E+s.getCenter().y*s.getCenter().z*2*w+s.getCenter().z**2*A-g*p*y;m[0][0]=T,m[0][1]=R,m[0][2]=v,m[0][3]=P,m[1][0]=R,m[1][1]=E,m[1][2]=w,m[1][3]=O,m[2][0]=v,m[2][1]=w,m[2][2]=A,m[2][3]=N,m[3][0]=P,m[3][1]=O,m[3][2]=N,m[3][3]=k;const Z=f**2*d**2*_+f**2*l**2*M,X=(c*h*d+l*u)**2*_+(l*c*h+u*d)**2*M,Q=0,H=0,it=0,rt=0,ut=-t.getCenter().x*Z,Dt=-t.getCenter().y*X,Ht=-1,$=t.getCenter().x**2*Z+t.getCenter().y**2*X;return x[0][0]=Z,x[0][1]=H,x[0][2]=rt,x[0][3]=ut,x[1][0]=H,x[1][1]=X,x[1][2]=it,x[1][3]=Dt,x[2][0]=rt,x[2][1]=it,x[2][2]=Q,x[2][3]=Ht,x[3][0]=ut,x[3][1]=Dt,x[3][2]=Ht,x[3][3]=$,this.calcCharacteristicPolynomial(m,x,T,E,A,R,w,v,P,O,N,k,Z,X,Q,H,it,rt,ut,Dt,Ht,$)}static Ellipsoid_EllipticParaboloid_Brozos(s,t){const e=this.characteristicPolynomialEllipsoidEllipticParaboloid(s,t),n=e[0],i=e[1],r=e[2],o=e[3],a=e[4];return 256*a*a*a*n*n*n-192*a*a*o*i*n*n-128*a*a*r*r*n*n+144*a*a*r*i*i*n-27*a*a*i*i*i*i+144*a*o*o*r*n*n-6*a*o*o*i*i*n-80*a*o*r*r*i*n+18*a*o*r*i*i*i+16*a*r*r*r*r*n-4*a*r*r*r*i*i-27*o*o*o*o*n*n+18*o*o*o*r*i*n-4*o*o*o*i*i*i-4*o*o*r*r*r*n+o*o*r*r*i*i<0}static Hyperboloid_Plane(s,t){const e=s.height/2,n=s.forward(),i=t.getNormal(),r=n.dot(i),o=s.center,a=t.center,h=o.clone().add(n.clone().scale(e)),c=o.clone().subtract(n.clone().scale(e));if(Math.abs(r-1)<.001||Math.abs(r+1)<.001)return!Bl(h,a,c);if(Bl(h,a,c)){let l=Vl(n.angleTo(i));l>90&&(l=180-l);const u=o.distanceTo(a),f=u>=1?u*e:e;return l>40/f}else return console.log(""),!0}},en=class Gs{static pointEllipseObj(t,e){if(t instanceof zt&&(t=new W(t.x,t.y,0)),t instanceof zt)return[W.Zero(),W.Zero()];let n=[W.Zero(),W.Zero()],i=W.Zero(),r=e.InverseTransformPoint(t);if(console.log("Point_"+r.x+" "+r.y+" "+r.z),i=Gs.pointEllipse(r,e.xradius,e.yradius),console.log("T: "+i.x+" "+i.y+" "+i.z),isNaN(i.x)||isNaN(i.y))throw new Error("Invalid result from pointEllipse");return i=e.TransformPoint(i),console.log("T after transform: "+i.x+" "+i.y+" "+i.z),n[0]=t,n[1]=i,[n[0],n[1]]}static pointEllipse(t,e,n){let i=W.Zero(),r=t.x,o=t.y,a=1,h=1;if(o<0&&(o=-o,a=-1),o>0)if(r<0&&(r=-r,h=-1),r>0){let c=e*e,l=n*n,u=r*r,f=o*o,d=-c*c*l*l+c*u*l*l+f*l*c*c,m=2*l*u*c+2*c*l*f-2*c*l*l-2*l*c*c,x=c*u+l*f-l*l-c*c-4*c*l,g=-2*(l+c),p=Yu(-1,g,x,m,d),y=-1/0;for(let M=0;M<4;M++)y<p[M]&&!Number.isNaN(p[M])&&(y=p[M]);i.x=e*e*r/(y+e*e),i.y=n*n*o/(y+n*n)}else i.x=0,i.y=n;else r<(e*e-n*n)/e?(i.x=e*e*r/(e*e-n*n),i.y=n*Math.sqrt(1-i.x/e*(i.x/e))):(i.x=e,i.y=0);return i.x=i.x*h,i.y=i.y*a,i}static ellipseEllipse(t,e){let i=t.getCenter().toVector2(),r=Gs.pointEllipseObj(i,e)[1].toVector2();console.log("Point ellipse outside of while:"+i.x+" "+i.y);let o=i.distanceTo(r);for(;;){i=Gs.pointEllipseObj(r,t)[1].toVector2(),console.log("Point ellipse inside of while 1:"+i.x+" "+i.y),console.log(i);let a=i.distanceTo(r);if(Math.abs(o-a)<.1||(o=a,r=Gs.pointEllipseObj(i,e)[1].toVector2(),console.log("Point ellipse inside of while 2:"+r.x+" "+r.y),a=i.distanceTo(r),Math.abs(o-a)<.1))break;o=a}return[i.toVector2(),r]}static superellipseLine(t,e){let n=t.TransformDirection(new W(0,1,0));console.log("Normal: "+n.x+" "+n.y);let i=e.xradius,r=e.yradius,o=e.e;n=e.InverseTransformDirection(n);let a=n.x,h=n.y;console.log("Normal after inverse transform: "+a+" "+h);let c=Math.atan(Math.sign(h)*Math.pow(Math.abs(r*h),1/(2-o))/(Math.sign(a)*Math.pow(Math.abs(i*a),1/(2-o))));console.log("Phi: "+c);let l=Math.cos(c),u=Math.sin(c),f=new zt(Math.sign(l)*i*Math.pow(Math.abs(l),o),Math.sign(u)*r*Math.pow(Math.abs(u),o));console.log("T: "+f.x+" "+f.y);let d=f.clone().scale(-1);console.log("Ti: "+d.x+" "+d.y),f=e.TransformPoint(f.toVector3()).toVector2(),d=e.TransformPoint(d.toVector3()).toVector2(),console.log("T after transform: "+f.x+" "+f.y),console.log("Ti after transform: "+d.x+" "+d.y);let m=t.InverseTransformPoint(f.toVector3()),x=t.InverseTransformPoint(d.toVector3());return console.log("T_ after inverse transform: "+m.x+" "+m.y),console.log("Ti_ after inverse transform: "+x.x+" "+x.y),Math.abs(x.y)<Math.abs(m.y)&&(f=d,m=x),[t.TransformPoint(new W(m.x,0,0)),f.toVector3()]}static Convex_Line(t,e){let n=t.getCenter().toVector2(),i=e.InverseTransformPoint(n.toVector3()).toVector2(),r,o;i.y>0?o=t.TransformDirection(new W(0,1,0)).toVector2():o=t.TransformDirection(new W(0,-1,0)).toVector2(),o=e.InverseTransformDirection(o.toVector3()).toVector2();let a=go.degToRad(o.signedAngle(new zt(0,1))),h=t.f(a),c=t.fd(a),l=Math.sqrt(h**2+c**2),u=a+Math.atan(c/h)-Math.PI/2,f=new zt(Math.cos(u),Math.sin(u)).scale(l);f=t.TransformPoint(f.toVector3()).toVector2();let d=e.InverseTransformPoint(f.toVector3()).toVector2(),m;return i.y>0?m=e.TransformPoint(new W(d.x,0,0)).toVector2():m=e.TransformPoint(new W(-d.x,0,0)).toVector2(),r=[m.toVector3(),f.toVector3()],r}static ConvexCircle_Circle(t,e){let n=t.getCenter().toVector2(),i=e.getCenter().toVector2(),r=i.subtract(n).normalize(),o=t.InverseTransformDirection(r.toVector3()).toVector2().normalize(),a=Math.atan2(o.y,o.x),h=t.getRadius(),c=t.point(a,h),l=t.TransformPoint(c.toVector3()),u=l.toVector2().subtract(i).normalize(),f=i.add(u.scale(e.getRadius()));return[l,f.toVector3()]}},Ku=(s=>(s.Circle="Circle",s.ConvexCircle="ConvexCircle",s.ConvexLine="ConvexLine",s.Ellipse="Ellipse",s.Line="Line",s.Plane="Plane",s.Point="Point",s.Supperellipse="Supperellipse",s))(Ku||{}),ju=(s=>(s.Convex="Convex",s.Cylinder="Cylinder",s.Ellipsoid="Ellipsoid",s.EllipticParaboloid="EllipticParaboloid",s.Hyperboloid="Hyperboloid",s.Sphere="Sphere",s.Superellipsoid="Superellipsoid",s))(ju||{});function Ie(s){return Object.values(Ku).includes(s)}function Ne(s){return Object.values(ju).includes(s)}var fi=class{constructor(){this.center=new W(0,0,0),this.segments=100,this.geometry=null,this.rotation=new W(0,0,0)}getCenter(){return this.center}getSegments(){return this.segments}getRotation(){return this.rotation}getType(){return this.type}normalizeGeometry(){if(this.geometry!==null&&this.geometry!==void 0){const s=this.getCenter(),t=Nt(this.rotation.x),e=Nt(this.rotation.y),n=Nt(this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i);this.geometry.applyMatrix4(r),this.geometry.translate(s.x,s.y,s.z)}}ProximityQuery(s,t){throw new Error("Proximity query not implemented for this geometry type.")}ShortestDistance(s){throw new Error("Method not implemented.")}LocalSpaceToWorldSpace(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x+this.center.x,o.y+this.center.y,o.z+this.center.z)}WorldSpaceToLocalSpace(s){const t=new F(s.x-this.center.x,s.y-this.center.y,s.z-this.center.z),e=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),n=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),i=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),r=new ue(-e,-n,-i,"XYZ"),o=new te().makeRotationFromEuler(r);return t.applyMatrix4(o),new W(t.x,t.y,t.z)}TransformDirection(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x,o.y,o.z)}InverseTransformDirection(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(-t,-e,-n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x,o.y,o.z)}TransformPoint(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x+this.center.x,o.y+this.center.y,o.z+this.center.z)}InverseTransformPoint(s){const t=new F(s.x-this.center.x,s.y-this.center.y,s.z-this.center.z),e=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),n=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),i=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),r=new ue(-e,-n,-i,"XYZ"),o=new te().makeRotationFromEuler(r);return t.applyMatrix4(o),new W(t.x,t.y,t.z)}},Ju=class extends fi{constructor(s,t,e,n,i,r){super(),this.type="Ellipsoid",this.center=s,this.xradius=t,this.yradius=e,this.zradius=n,this.rotation=i,this.segments=r}ShortestDistance3D(s){switch(s.type){case"Ellipsoid":const t=xn.ellipsoidEllipsoid(this,s);return[t[0],t[1]];case"Sphere":const e=xn.ellipsoidEllipsoid(this,s);return[e[0],e[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance2D(s){switch(s.type){case"Point":let t=s;const e=xn.point_Ellipsoid(new W(t.center.x,t.center.y,t.center.z),this);return[e[0],e[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];return Ne(s.type)?t=this.ShortestDistance3D(s):Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}ProximityQuery(s,t){if(s.type==="Ellipsoid")return this.ProximityQueryEllipsoid(s,t===void 0?"Caravantes":t);if(s.type==="EllipticParaboloid"){if(t===void 0||t==="Brozos")return Ts.Ellipsoid_EllipticParaboloid_Brozos(this,s);throw new Error("Proximity query not implemented for this method.")}throw new Error("Proximity query not implemented for this pair of geometries.")}ProximityQueryEllipsoid(s,t){if(t=="Caravantes"||t==null)return Ts.Ellipsoid_Ellipsoid_Caravantes(this,s);throw new Error("Proximity query not implemented for this method.")}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Ellipsoid Geometry");const s=new lr(1,this.segments,this.segments);return s.scale(this.xradius,this.yradius,this.zradius),this.geometry=s,this.normalizeGeometry(),this.geometry}}},Qu=class extends fi{constructor(s,t,e,n){super(),this.type="Sphere",this.center=s,this.radius=t,this.rotation=e,this.segments=n}ShortestDistance3D(s){switch(s.type){case"Ellipsoid":const t=xn.ellipsoidEllipsoid(this,s);return[t[0],t[1]];case"Sphere":const e=xn.ellipsoidEllipsoid(this,s);return[e[0],e[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance2D(s){switch(s.type){case"Point":let t=s;const e=xn.point_Ellipsoid(new W(t.center.x,t.center.y,0),this);return[e[0],e[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];return Ne(s.type)?t=this.ShortestDistance3D(s):Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Ellipsoid Geometry");const s=new lr(this.radius,this.segments,this.segments);return this.geometry=s,this.normalizeGeometry(),this.geometry}}},xn=class _o{static point_Ellipsoid(t,e){const n=t.clone();let i=[new W(0,0,0),new W(0,0,0)],r=0,o=0,a=0;e instanceof Qu?(r=e.radius,o=e.radius,a=e.radius):e instanceof Ju&&(r=e.xradius,o=e.yradius,a=e.zradius);let h=e.WorldSpaceToLocalSpace(t),c=h.x,l=h.y,u=h.z,f=0,d=0,m=0,x=1,g=1,p=1;u<0&&(u=-u,p=-1),l<0&&(l=-l,g=-1),c<0&&(c=-c,x=-1);let y=Math.min(r,o,a);if(u>0)if(l>0)if(c>0){let _=c/r,T=l/o,E=u/a,A=_*_+T*T+E*E-1;if(A!==0){let R=r*r/(y*y),w=o*o/(y*y),v=a*a/(y*y),P=$_(R,w,v,_,T,E,A,200);f=R*c/(P+R),d=w*l/(P+w),m=v*u/(P+v)}else f=c,d=l,m=u}else{f=0;let _=en.pointEllipse(new zt(l,u).toVector3(),o,a);d=_.x,m=_.y}else if(d=0,c>0){let _=en.pointEllipse(new zt(c,u).toVector3(),r,a);f=_.x,m=_.y}else f=0,m=a;else{let _=r*r-a*a,T=o*o-a*a,E=r*c,A=o*l,R=!1;if(E<_&&A<T){let w=E/_,v=A/T,P=w*w,O=v*v,N=1-P-O;N>0&&(f=r*w,d=o*v,m=a*Math.sqrt(N),R=!0)}if(!R){m=0;let w=en.pointEllipse(new zt(c,l).toVector3(),r,o);f=w.x,d=w.y}}f=x*f,d=g*d,m=p*m,i[0]=n;let M=new W(f,d,m);return M=e.LocalSpaceToWorldSpace(M),i[1]=M,console.log("Shortest distance point to ellipsoid: "+i[0].x+" "+i[0].y+" "+i[0].z+"  -> "+i[1].x+" "+i[1].y+" "+i[1].z),i}static ellipsoidEllipsoid(t,e){let n=[new W(0,0,0),new W(0,0,0)],i=t.getCenter(),r=_o.point_Ellipsoid(i,e)[1],o=i.distanceTo(r),a,h=0;for(;i=r,r=_o.point_Ellipsoid(i,e)[1],a=i.distanceTo(r),i=r,o=a,r=_o.point_Ellipsoid(i,t)[1],a=i.distanceTo(r),!(Math.abs(o-a)<.1||h>15);)o=a,h++;return n[0]=r,n[1]=i,n}static superellipsoidPlane(t,e){let n=[W.Zero(),W.Zero()],i=e.getCenter();i=e.InverseTransformPoint(i);let r=t.TransformPoint(i);i=new W(r.x,r.y,0);let o;if(i.y>0){let y=t.TransformDirection(new W(0,1,0));y instanceof zt?o=new W(y.x,y.y,0):o=y}else{let y=t.TransformDirection(new W(0,-1,0));y instanceof zt?o=new W(y.x,y.y,0):o=y}o=e.InverseTransformDirection(o);const a=Math.pow(10,-6);let h,c;if(Math.abs(o.x)<=a&&Math.abs(o.y)<=a)h=Math.PI/2,c=Math.sign(o.z)*Math.PI/2;else if(Math.abs(o.x)<=a&&Math.abs(o.z)<=a)h=Math.PI+Math.sign(o.y)*Math.PI/2,c=0;else if(Math.abs(o.y)<=a&&Math.abs(o.z)<=a)h=Math.PI+Math.sign(o.x)*Math.PI,c=0;else{const y=Math.abs(e.xradius*o.x),M=Math.abs(e.yradius*o.y);if(h=Math.atan2(Math.sign(o.y)*Math.pow(M,1/(2-e.e1)),Math.sign(o.x)*Math.pow(y,1/(2-e.e1))),y>M){const _=Math.cos(h);c=Math.atan2(Math.sign(o.z)*Math.pow(Math.abs(e.zradius*o.z*Math.sign(_)*Math.pow(Math.abs(_),2-e.e1)),1/(2-e.e2)),Math.sign(o.x)*Math.pow(y,1/(2-e.e2)))}else{const _=Math.sin(h);c=Math.atan2(Math.sign(o.z)*Math.pow(Math.abs(e.zradius*o.z*Math.sign(_)*Math.pow(Math.abs(_),2-e.e1)),1/(2-e.e2)),Math.sign(o.y)*Math.pow(M,1/(2-e.e2)))}}const l=e.point(h,c),u=l.clone().scale(-1),f=e.LocalSpaceToWorldSpace(l.clone()),d=e.LocalSpaceToWorldSpace(u.clone()),m=t.WorldSpaceToLocalSpace(f.clone()),x=t.WorldSpaceToLocalSpace(d.clone()),g=Math.abs(m.y),p=Math.abs(x.y);return m.y=0,x.y=0,g<p?(n[0]=t.LocalSpaceToWorldSpace(m.clone()),n[1]=f):(n[0]=t.LocalSpaceToWorldSpace(x.clone()),n[1]=d),n}static AlmostConvexGeometryPlane(t,e){let n=e.TransformDirection(new W(0,1,0));n=t.InverseTransformDirection(n).scale(-1);let i=Math.PI/180*n.projectOnPlane(new W(0,0,1)).signedAngle(new W(1,0,0),new W(0,0,-1)),r=Math.PI/180*n.angleTo(new W(0,1,0)),o=t.point(i,r);o=t.TransformPoint(o);let a=e.InverseTransformPoint(o);return a=new W(a.x,0,a.z),a=e.TransformPoint(a),[a,o]}},Wn=class{constructor(){this.center=new W(0,0,0),this.segments=100,this.geometry=null,this.rotation=new W(0,0,0)}getCenter(){return this.center}getSegments(){return this.segments}getRotation(){return this.rotation}getType(){return this.type}normalizeGeometry(){if(this.geometry){const s=this.getCenter();this.geometry.translate(-s.x,-s.y,-s.z);const t=Nt(this.rotation.x),e=Nt(this.rotation.y),n=Nt(this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i);this.geometry.applyMatrix4(r),this.geometry.translate(s.x,s.y,s.z)}}ShortestDistance(s){throw new Error("Method not implemented.")}ProximityQuery(s,t){throw new Error("Method not implemented for this geometry.")}LocalSpaceToWorldSpace(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x+this.center.x,o.y+this.center.y,o.z+this.center.z)}WorldSpaceToLocalSpace(s){const t=new F(s.x-this.center.x,s.y-this.center.y,s.z-this.center.z),e=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),n=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),i=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),r=new ue(-e,-n,-i,"XYZ"),o=new te().makeRotationFromEuler(r);return t.applyMatrix4(o),new W(t.x,t.y,t.z)}TransformDirection(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x,o.y,o.z)}InverseTransformDirection(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(-t,-e,-n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x,o.y,o.z)}TransformPoint(s){const t=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),e=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),n=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),i=new ue(t,e,n,"XYZ"),r=new te().makeRotationFromEuler(i),o=new F(s.x,s.y,s.z);return o.applyMatrix4(r),new W(o.x+this.center.x,o.y+this.center.y,o.z+this.center.z)}InverseTransformPoint(s){const t=new F(s.x-this.center.x,s.y-this.center.y,s.z-this.center.z),e=Nt(isNaN(this.rotation.x)||this.rotation.x===void 0?0:this.rotation.x),n=Nt(isNaN(this.rotation.y)||this.rotation.y===void 0?0:this.rotation.y),i=Nt(isNaN(this.rotation.z)||this.rotation.z===void 0?0:this.rotation.z),r=new ue(-e,-n,-i,"XYZ"),o=new te().makeRotationFromEuler(r);return t.applyMatrix4(o),new W(t.x,t.y,t.z)}},J_=class extends Wn{constructor(s,t,e,n){super(),this.type="Circle",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=e instanceof zt?new W(e.x,e.y,0):e,this.radius=t,this.segments=n}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Ellipse Geometry");let s=new cr(this.center.x,this.center.y,this.radius,this.radius,0,2*Math.PI,!1,0);return this.geometry=new _e().setFromPoints(s.getPoints(this.segments)),this.normalizeGeometry(),this.geometry}}getRadius(){return this.radius}point(s){let t=this.radius*Math.cos(s)+this.center.x,e=this.radius*Math.sin(s)+this.center.y;return new W(t,e,0).rotate(this.rotation)}ShortestDistance2D(s){switch(s.type){case"ConvexCircle":let t=s,e=en.ConvexCircle_Circle(t,this);return[new W(e[0].x,e[0].y,0),new W(e[1].x,e[1].y,0)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance 3D not implemented for this geometry type.");return Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}},Q_=class extends Wn{constructor(s,t,e,n){super(),this.angle=-Math.PI/2,this.type="ConvexCircle",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=e instanceof zt?new W(e.x,e.y,0):e,this.radius=t,this.segments=n}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{const s=[];this.angle=-Math.PI/2;for(let t=0;t<=this.segments+1;t++){let e=this.f_c(this.angle,this.radius),n=this.fd_c(this.angle,this.radius),i=n*this.radius/Math.sqrt(e*e+n*n),r=e*this.radius/Math.sqrt(e*e+n*n)-e,o=Math.sqrt(i**2+r**2),a=this.angle-Math.atan(i/r),h=new zt(Math.cos(a),Math.sin(a));s.push(new Ft(h.x*o+this.center.x,h.y*o+this.center.y)),this.angle+=2*Math.PI/this.segments}return this.geometry=new _e().setFromPoints(s),this.normalizeGeometry(),this.geometry}}getRadius(){return this.radius}point(s,t){let e=this.f_c(s,t),n=this.fd_c(s,t),i=n*t/Math.sqrt(e*e+n*n),r=e*t/Math.sqrt(e*e+n*n)-e,o=Math.sqrt(i**2+r**2),a=s-Math.atan(i/r);return new zt(Math.cos(a),Math.sin(a)).scale(o)}f_c(s,t){let e;return s>0&&s<2/3*Math.PI?e=2*t+1/3*Math.pow(s,3)*Math.pow(2/3*Math.PI-s,4)*t:e=2*t,e}getAngle(){return this.angle}fd_c(s,t){let e;return s>0&&s<2/3*Math.PI?e=(Math.pow(s,2)*Math.pow(2/3*Math.PI-s,4)-4/3*Math.pow(2/3*Math.PI-s,3)*Math.pow(s,3))*t:e=0,e}ShortestDistance2D(s){switch(s.type){case"Circle":let t=s,e=en.ConvexCircle_Circle(this,t);return[new W(e[0].x,e[0].y,0),new W(e[1].x,e[1].y,0)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance 3D not implemented for this geometry type.");return Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}},ty=class extends Wn{constructor(s,t,e){super(),this.angle=-Math.PI/2,this.type="ConvexLine",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=t instanceof zt?new W(t.x,t.y,0):t,this.segments=e}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{this.angle=-Math.PI/2;const s=[];for(let t=0;t<=this.segments+1;t++){let e=Math.sqrt(Math.pow(this.f(this.angle),2)+Math.pow(this.fd(this.angle),2)),n=this.angle+Math.atan2(this.fd(this.angle),this.f(this.angle))-Math.PI/2,i=new zt(Math.cos(n),Math.sin(n));s.push(new Ft(i.x*e,i.y*e)),this.angle+=2*Math.PI/this.segments}return this.geometry=new _e().setFromPoints(s),this.normalizeGeometry(),this.geometry}}f(s){let t;return s>=-Math.PI/2&&s<=Math.PI/2?t=10*(1+.9*Math.cos(s-.2*Math.PI)+1/6*Math.sin(2*(s-.2*Math.PI))+1/15*Math.sin(3*(s-.2*Math.PI))):t=0,t}fd(s){let t;return s>=-Math.PI/2&&s<=Math.PI/2?t=10*(-.9*Math.sin(s-.2*Math.PI)+1/3*Math.cos(2*(s-.2*Math.PI))+.2*Math.cos(3*(s-.2*Math.PI))):t=0,t}ShortestDistance2D(s){switch(s.type){case"Line":let t=s,e=en.Convex_Line(this,t);return[new W(e[0].x,e[0].y,0),new W(e[1].x,e[1].y,0)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance 3D not implemented for this geometry type.");return Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}},ey=class extends Wn{constructor(s,t,e,n,i){super(),this.type="Ellipse",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=n instanceof zt?new W(n.x,n.y,0):n,this.xradius=t,this.yradius=e,this.segments=i}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Ellipse Geometry");let s=new cr(this.center.x,this.center.y,this.xradius,this.yradius,0,2*Math.PI,!1,0);return this.geometry=new _e().setFromPoints(s.getPoints(this.segments)),this.normalizeGeometry(),this.geometry}}ShortestDistance2D(s){switch(s.type){case"Point":let t=s,e=en.pointEllipseObj(new zt(t.center.x,t.center.y),this);return[new W(e[0].x,e[0].y,0),new W(e[1].x,e[1].y,0)];case"Ellipse":let n=s,i=en.ellipseEllipse(n,this);return[new W(i[0].x,i[0].y,0),new W(i[1].x,i[1].y,0)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance 3D not implemented for this geometry type.");return Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}ProximityQuery(s,t){if(t===void 0&&(t="Caravantes"),Ne(s.type))throw new Error("Proximity query 3D not implemented for this geometry type.");return Ie(s.type)?this.ProximityQuery2D(s,t):!1}ProximityQuery2D(s,t){if(t==="Caravantes")return kl.Ellipse_Ellipse_Caravantes(this,s);if(t==="Alberich")return kl.Ellipse_Ellipse_Alberich(this,s);throw new Error(`Proximity query not implemented for this method ${t}.`)}},ny=class extends Wn{constructor(s,t,e){super(),this.start=s instanceof zt?new W(s.x,s.y,0):s,this.end=t instanceof zt?new W(t.x,t.y,0):t,(this.start instanceof W||this.end instanceof W)&&(this.center=new W((s.x+t.x)/2,(s.y+t.y)/2,(s.toVector3().z+t.toVector3().z)/2)),this.segments=1,this.type="Line",this.rotation=e instanceof zt?new W(e.x,e.y,0):e}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Line Geometry"),console.log(this.start,this.end);let s=[new F(this.start.x,this.start.y,this.start.z),new F(this.end.x,this.end.y,this.end.z)];return this.geometry=new _e().setFromPoints(s),this.geometry}}ShortestDistance2D(s){let t=[W.Zero(),W.Zero()];switch(s.type){case"Supperellipse":return t=en.superellipseLine(this,s),[new W(t[0].x,t[0].y,0),new W(t[1].x,t[1].y,0)];case"ConvexLine":let e=s;return t=en.Convex_Line(e,this),[new W(t[0].x,t[0].y,0),new W(t[1].x,t[1].y,0)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance not implemented for 3D geometries.");if(Ie(s.type)){const e=this.ShortestDistance2D(s);t=[new W(e[0].x,e[0].y,0),new W(e[1].x,e[1].y,0)]}return[t[0],t[1]]}},Gl=class extends Wn{constructor(s,t,e){super(),this.type="Plane",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=t,this.segments=e,this.rotation=t,this.width=50,this.height=100}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))t=this.ShortestDistance3D(s);else if(Ie(s.type))throw new Error("Shortest distance not implemented for 2D geometries.");return[t[0],t[1]]}ShortestDistance3D(s){let t=[W.Zero(),W.Zero()];switch(s.type){case"Superellipsoid":return t=xn.superellipsoidPlane(this,s),[t[0],t[1]];case"Convex":let e=s;return t=xn.AlmostConvexGeometryPlane(e,this),[t[0],t[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ProximityQuery(s,t){if(Ne(s.type))return this.ProxmityQuery3D(s);if(Ie(s.type))throw new Error("Proximity query 2D not implemented for this geometry type.");return!1}ProxmityQuery3D(s){if(s.type==="Hyperboloid")return Ts.Hyperboloid_Plane(s,this);throw new Error("Proximity query not implemented for this geometry type.")}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Plane Geometry");let s=new Xh(this.width,this.height,this.segments,this.segments);s.rotateX(Math.PI/2),s.translate(this.center.x,this.center.y,this.center.z),this.geometry=s}return this.normalizeGeometry(),this.geometry}getNormal(){const s=new te().makeRotationFromEuler(new ue(this.rotation.x,this.rotation.y,this.rotation.z)),t=new F(0,0,1).applyMatrix4(s);return new W(t.x,t.y,t.z)}},Hl=class extends Wn{constructor(s){super(),this.segments=1,this.type="Point",this.center=s instanceof zt?new W(s.x,s.y,0):s}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Point Geometry"),console.log(this.center);const s=[this.center];return this.geometry=new _e().setFromPoints(s),this.geometry}}ShortestDistance3D(s){switch(s.type){case"Ellipsoid":let t=xn.point_Ellipsoid(this.center,s);return[t[0],t[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance2D(s){switch(s.type){case"Ellipse":let t=en.pointEllipseObj(this.center,s);return[new W(t[0].x,t[0].y,t[0].z),new W(t[1].x,t[1].y,t[1].z)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];return Ne(s.type)?t=this.ShortestDistance3D(s):Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}},iy=class extends Wn{constructor(s,t,e,n,i,r){super(),this.type="Supperellipse",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=i instanceof zt?new W(i.x,i.y,0):i,this.xradius=t,this.yradius=e,this.e=n,this.segments=r,this.geometry=null}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{const s=this.e??2,t=this.xradius??1,e=this.yradius??1,n=this.segments??64,i=[],r=a=>a<0?-1:1,o=(a,h)=>r(a)*Math.pow(Math.abs(a),h);for(let a=0;a<=n;a++){const h=a/n*2*Math.PI,c=t*o(Math.cos(h),s)+this.center.x,l=e*o(Math.sin(h),s)+this.center.y;i.push(new W(c,l,0))}return this.geometry=new _e().setFromPoints(i),this.normalizeGeometry(),this.geometry}}getRadius(){return new zt(this.xradius,this.yradius)}getExponent(){return this.e}ShortestDistance2D(s){switch(s.type){case"Line":const t=en.superellipseLine(s,this);return[new W(t[0].x,t[0].y,t[0].z),new W(t[1].x,t[1].y,t[1].z)];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance not implemented for 3D geometries.");return Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}},sy=class extends fi{constructor(s,t,e){super(),this.type="Convex",this.center=s instanceof zt?new W(s.x,s.y,0):s,this.rotation=t instanceof zt?new W(t.x,t.y,0):t,this.segments=e}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{const s=[],t=[];for(let e=0;e<=this.segments;e++){const n=-Math.PI+2*Math.PI*e/this.segments;for(let i=0;i<=this.segments;i++){const r=-Math.PI/2+Math.PI*i/this.segments;let o=this.point(n,r);o=o.add(this.center).rotate(this.rotation),s.push(o)}}for(let e=0;e<this.segments;e++)for(let n=0;n<this.segments;n++){const i=e*(this.segments+1)+n,r=e*(this.segments+1)+(n+1),o=(e+1)*(this.segments+1)+n,a=(e+1)*(this.segments+1)+(n+1);t.push(i,r,a),t.push(i,a,o)}return this.geometry=new _e,this.geometry.setAttribute("position",new Me(s.flatMap(e=>[e.x,e.y,e.z]),3)),this.geometry.setIndex(t),this.geometry.computeVertexNormals(),this.normalizeGeometry(),this.geometry}}point(s,t){let e=W.Zero(),n=new W(Math.cos(t)*Math.cos(s),Math.cos(t)*Math.sin(s),-Math.sin(t)).normalize(),i=new W(-Math.sin(s),Math.cos(s),0).normalize(),r=new W(Math.sin(t)*Math.cos(s),Math.sin(t)*Math.sin(s),Math.cos(t)).normalize();return t>0&&t<Math.PI?e=n.scale(this.fda(t,s)).add(i.scale(this.fdb(t,s)/Math.sin(t))).add(r.scale(this.f(t,s))):(t===0||t===Math.PI)&&(e=n.scale(this.fda(t,s)).add(i.scale(this.fdd(t,s)/Math.cos(t))).add(r.scale(this.f(t,s)))),e}f(s,t){let e=Math.sin(s),n=Math.cos(s),i=Math.sin(t),r=Math.cos(t);return Math.sqrt(100*e**2*r**2+900*e**2*i**2+400*n**2)}fda(s,t){let e=Math.sin(s),n=Math.cos(s),i=Math.sin(t),r=Math.cos(t);return(900*i*i+100*r*r-400)*n*e/Math.sqrt(900*i*i*e*e+100*r*r*e*e+400*n*n)}fdb(s,t){let e=Math.sin(s),n=Math.cos(s),i=Math.sin(t),r=Math.cos(t);return 800*e*e*r*i/Math.sqrt(900*i*i*e*e+100*r*r*e*e+400*n*n)}fdd(s,t){let e=Math.sin(s),n=Math.cos(s),i=Math.sin(t),r=Math.cos(t);return-800*e*e*i*i/Math.sqrt(900*i*i*e*e+100*r*r*e*e+400*n*n)+800*e*e*r*r/Math.sqrt(900*e*e*i*i+100*e*e*r*r+400*n*n)-800*e*e*r*i*(1800*e*e*r*i-200*e*e*r*i)/(2*Math.pow(900*e*e*i*i+100*e*e*r*r+400*n*n,3/2))}ShortestDistance2D(s){switch(s.type){case"Plane":let t=s;const e=xn.AlmostConvexGeometryPlane(this,t);return[e[0],e[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(console.log("ShortestDistance3D"),Ne(s.type))throw new Error("Not ShortestDistance3D for this geometry type");return Ie(s.type)&&this.ShortestDistance2D(s),[t[0],t[1]]}},ry=class extends fi{constructor(s,t,e,n,i,r){super(),this.type="Cylinder",this.center=s,this.xradius=t,this.yradius=e,this.height=n,this.rotation=i,this.segments=r}ShortestDistance(s){throw new Error("Shortest distance not implemented for this geometry type.")}ProximityQuery(s,t){if((t==null||t==null)&&(t="Chittawadigi"),t=="Chittawadigi"&&s.type=="Cylinder")return Ts.Cylinder_Cylinder_Chittawadigi(this,s);throw s.type!="Cylinder"?new Error("Proximity query not implemented for this pair of geometry type."):new Error("Proximity query not implemented for this method.")}forward(){const s=go.degToRad(this.rotation.x),t=go.degToRad(this.rotation.y),e=go.degToRad(this.rotation.z),n=new F(0,0,1),i=new ue(s,t,e,"XYZ");return n.applyEuler(i),new W(n.x,n.y,n.z).normalize()}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Cylinder Geometry");const s=new Wh(this.xradius,this.yradius/4,this.height,this.segments),t=new te().makeRotationX(-Math.PI/2);return s.applyMatrix4(t),this.geometry=s,this.normalizeGeometry(),this.geometry}}},oy=class extends fi{constructor(s,t,e,n,i,r){super(),this.type="EllipticParaboloid",this.center=s,this.xradius=t,this.yradius=e,this.height=n,this.rotation=i,this.segments=r}ShortestDistance(s){throw new Error("Shortest distance not implemented for this geometry type.")}ProximityQuery(s,t){if(s.type==="Ellipsoid"){if(t===void 0||t==="Brozos")return Ts.Ellipsoid_EllipticParaboloid_Brozos(s,this);throw new Error("Proximity query not implemented for this method.")}throw new Error("Proximity query not implemented for this pair of geometries.")}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Elliptic Paraboloid Geometry");const s=new _e,t=[],e=[],n=this.segments,i=this.segments;for(let r=0;r<=i;r++){const a=r/i*this.height,h=Math.sqrt(a)*this.xradius/Math.sqrt(this.height),c=Math.sqrt(a)*this.yradius/Math.sqrt(this.height);for(let l=0;l<=n;l++){const f=l/n*2*Math.PI,d=h*Math.cos(f),m=c*Math.sin(f);t.push(d,m,a)}}for(let r=0;r<i;r++)for(let o=0;o<n;o++){const a=o+(n+1)*r,h=o+(n+1)*(r+1),c=o+1+(n+1)*(r+1),l=o+1+(n+1)*r;e.push(a,h,l),e.push(h,c,l)}return s.setAttribute("position",new Me(t,3)),s.setIndex(e),s.computeVertexNormals(),this.geometry=s,this.normalizeGeometry(),this.geometry}}},ay=class extends fi{constructor(s,t,e,n,i,r,o="one-sheeted",a){super(),this.type="Hyperboloid",this.center=s,this.xradius=t,this.yradius=e,this.zfactor=n,this.height=i,this.rotation=r,this.hyperboloidType=o,this.segments=a}ShortestDistance(s){throw new Error("Shortest distance for Hyperboloid is not implemented yet.")}ProximityQuery(s,t){if(Ne(s.type))throw new Error("Proximity query 3D not implemented for this geometry type.");return Ie(s.type)?this.ProximityQuery2D(s):!1}ProximityQuery2D(s){if(s.type==="Plane")return Ts.Hyperboloid_Plane(this,s);throw new Error("Proximity query not implemented for this geometry type.")}forward(){let s=Fa(this.rotation.x),t=Fa(this.rotation.y),e=Fa(this.rotation.z);const n=new te().makeRotationFromEuler(new ue(s,t,e)),i=new F(0,0,1).applyMatrix4(n);return new W(i.x,i.y,i.z).normalize()}getHyperboloidTypeTwoSheeted(){const s=new _e,t=[],e=[],n=this.segments,i=this.segments,r=this.zfactor*1.01,o=this.height/2,a=h=>{const l=h*r,u=h>0?1e-4:-1e-4;t.push(u,0,l);const f=t.length/3-1;for(let m=0;m<=i;m++){const x=m/i,g=r+(o-r)*x,p=h*g,y=Math.sqrt(g*g/(this.zfactor*this.zfactor)-1),M=this.xradius*y,_=this.yradius*y;for(let T=0;T<=n;T++){const E=T/n*2*Math.PI,A=M*Math.cos(E),R=_*Math.sin(E);t.push(A,R,p)}}const d=f+1;for(let m=0;m<i;m++)for(let x=0;x<n;x++){const g=d+x+m*(n+1),p=d+x+(m+1)*(n+1),y=d+x+1+(m+1)*(n+1),M=d+x+1+m*(n+1);e.push(g,p,M),e.push(p,y,M)}for(let m=0;m<n;m++){const x=f,g=d+m,p=d+m+1;h>0?e.push(x,g,p):e.push(x,p,g)}};return a(1),a(-1),s.setAttribute("position",new Me(t,3)),s.setIndex(e),s.computeVertexNormals(),this.geometry=s,this.normalizeGeometry(),this.geometry}getHyperboloidTypeOneSheeted(){const s=new _e,t=[],e=[],n=this.segments,i=this.segments;for(let r=0;r<=i;r++){const a=(r/i-.5)*this.height,h=Math.sqrt(1+a*a/(this.zfactor*this.zfactor)),c=this.xradius*h,l=this.yradius*h;for(let u=0;u<=n;u++){const d=u/n*2*Math.PI,m=c*Math.cos(d),x=l*Math.sin(d);t.push(m,x,a)}}for(let r=0;r<i;r++)for(let o=0;o<n;o++){const a=o+(n+1)*r,h=o+(n+1)*(r+1),c=o+1+(n+1)*(r+1),l=o+1+(n+1)*r;e.push(a,h,l),e.push(h,c,l)}return s.setAttribute("position",new Me(t,3)),s.setIndex(e),s.computeVertexNormals(),this.geometry=s,this.normalizeGeometry(),this.geometry}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;if(this.hyperboloidType==="one-sheeted")return this.getHyperboloidTypeOneSheeted();if(this.hyperboloidType==="two-sheeted")return this.getHyperboloidTypeTwoSheeted()}},hy=class extends fi{constructor(s,t,e,n,i,r,o,a=80){super(),this.segmentsU=40,this.segmentsV=80,this.type="Superellipsoid",this.center=s,this.xradius=t,this.yradius=e,this.zradius=n,this.e1=i,this.e2=r,this.rotation=o,this.segments=a,this.segmentsU=a/2,this.segmentsV=a}ShortestDistance(s){let t=[W.Zero(),W.Zero()];if(Ne(s.type))throw new Error("Shortest distance 3D not implemented for this pairs of geometries.");return Ie(s.type)&&(t=this.ShortestDistance2D(s)),[t[0],t[1]]}ShortestDistance2D(s){switch(s.type){case"Plane":let t=xn.superellipsoidPlane(s,this);return[t[0],t[1]];default:throw new Error("Shortest distance not implemented for this geometry type.")}}getGeometry(){if(this.geometry!==null&&this.geometry!==void 0)return this.geometry;{console.log("Creating Superellipsoid Geometry"),console.log(this.segmentsU,this.segmentsV);const s=this.e1??2,t=this.e2??2,e=this.xradius??1,n=this.yradius??1,i=this.zradius??1,r=[],o=[],a=c=>c<0?-1:1,h=(c,l)=>a(c)*Math.pow(Math.abs(c),l);for(let c=0;c<=this.segmentsU;c++){const l=-Math.PI/2+c/this.segmentsU*Math.PI;for(let u=0;u<=this.segmentsV;u++){const f=-Math.PI+u/this.segmentsV*2*Math.PI,d=e*h(Math.cos(l),s)*h(Math.cos(f),t),m=n*h(Math.cos(l),s)*h(Math.sin(f),t),x=i*h(Math.sin(l),s);r.push(d,m,x)}}for(let c=0;c<this.segmentsU;c++)for(let l=0;l<this.segmentsV;l++){const u=c*(this.segmentsV+1)+l,f=c*(this.segmentsV+1)+(l+1),d=(c+1)*(this.segmentsV+1)+l,m=(c+1)*(this.segmentsV+1)+(l+1);o.push(u,f,m),o.push(u,m,d)}return this.geometry=new _e,this.geometry.setAttribute("position",new Me(r,3)),this.geometry.setIndex(o),this.geometry.computeVertexNormals(),this.normalizeGeometry(),this.geometry}}getExponent(){return[this.e1,this.e2]}point(s,t){const e=a=>a<0?-1:1,n=(a,h)=>e(a)*Math.pow(Math.abs(a),h),i=this.xradius*n(Math.cos(s),this.e1)*n(Math.cos(t),this.e2),r=this.yradius*n(Math.sin(s),this.e1)*n(Math.cos(t),this.e2),o=this.zradius*n(Math.sin(t),this.e2);return new W(i,r,o)}},ky=class ni{constructor(){if(this._geometries={},ni._instance)return ni._instance;ni._instance=this}addGeometry(t,e){this._geometries[t]=e}getGeometry(t){return this._geometries[t]}getGeometryMesh(t,e,n,i){let r=this._geometries[t];if(r){if(n=n??"line",n==="line"){if(i!==void 0){const h=r.getGeometry().attributes.position.array;let c=[];if(h.length===6){const d=new F(h[0],h[1],h[2]),m=new F(h[3],h[4],h[5]),x=32;for(let g=0;g<=x;g++){const p=g/x,y=new F().lerpVectors(d,m,p);c.push(y.x,y.y,y.z)}}else c=Array.from(h);const l=new V_;l.setPoints(c);const u=new X_({color:e,lineWidth:i,resolution:new Ft(window.innerWidth,window.innerHeight)}),f=new cs(l,u);return f.name=t,f}let o=new Bu({color:e,linewidth:i??1}),a=new s_(r.getGeometry(),o);return a.name=t,a}else if(n==="mesh"){if(r instanceof fi){let o=new Nl({color:e,side:2,shininess:1e3}),a=new cs(r.getGeometry(),o);return a.name=t,a}else if(r instanceof Wn){if(r instanceof Gl){const u=r.getGeometry(),f=new cs(u,new Nl({color:e,side:2,shininess:100}));return f.name=t,f}if(r instanceof Hl){const u=new lr(1),f=new xo({color:e}),d=new cs(u,f),m=r.getCenter();return d.position.set(m.x,m.y,m.z),d.name=t,d}const o=r.getGeometry().attributes.position.array,a=[];for(let u=0;u<o.length;u+=3)a.push(new Ft(o[u],o[u+1]));a[0].equals(a[a.length-1])||a.push(a[0]);const h=new Wu(a),c=new qh(h),l=new cs(c,new xo({color:e,side:mx}));return l.name=t,l}}}else throw new Error(`Geometry with id ${t} not found.`)}getAllGeometries(){return Object.values(this._geometries)}clearGeometries(){this._geometries={}}static getInstance(){return ni._instance||(ni._instance=new ni),ni._instance}createGeometry(t,e,n){let i=null;if(Ie(t))i=this.createGeometryByType2D(t,n);else if(Ne(t))i=this.createGeometryByType3D(t,n);else throw new Error(`Invalid geometry type: ${t}`);if(i){this.addGeometry(e,i);let r=new xo({color:65280});return new cs(i.getGeometry(),r)}else throw new Error(`Invalid parameters for geometry type: ${t}`)}createGeometryByType3D(t,e){switch(t){case"Cylinder":return new ry(e.center,e.xradius,e.yradius,e.height,e.rotation,e.segments);case"Ellipsoid":return new Ju(e.center,e.xradius,e.yradius,e.zradius,e.rotation,e.segments);case"EllipticParaboloid":return new oy(e.center,e.xradius,e.yradius,e.height,e.rotation,e.segments);case"Hyperboloid":return new ay(e.center,e.xradius,e.yradius,e.zfactor,e.height,e.rotation,e.hyperboloidType,e.segments);case"Sphere":return new Qu(e.center,e.radius,e.rotation,e.segments);case"Superellipsoid":return new hy(e.center,e.xradius,e.yradius,e.zradius,e.e1,e.e2,e.rotation,e.segments);case"Convex":return new sy(e.center,e.rotation,e.segments);default:return null}}createGeometryByType2D(t,e){switch(t){case"Ellipse":return new ey(e.center,e.xradius,e.yradius,e.rotation,e.segments);case"Line":return new ny(e.start,e.end,e.rotation);case"Plane":return new Gl(e.center,e.rotation,e.segments);case"Point":return new Hl(e.center);case"Supperellipse":return new iy(e.center,e.xradius,e.yradius,e.exponent,e.rotation,e.segments);case"Circle":return new J_(e.center,e.radius,e.rotation,e.segments);case"ConvexCircle":return new Q_(e.center,e.radius,e.rotation,e.segments);case"ConvexLine":return new ty(e.center,e.rotation,e.segments);default:return null}}calculateShortestDistance(t,e){let n=this.getGeometry(t),i=this.getGeometry(e);if(!n||!i)throw new Error(`One or both geometries with ids ${t} and ${e} not found.`);let r=n.ShortestDistance(i);return console.log(`Shortest distance between ${t} and ${e}: ${r[0].distanceTo(r[1])}`),r}calculateProximityQuery(t,e,n){let i=this.getGeometry(t),r=this.getGeometry(e),o=i.ProximityQuery(r,n);return console.log(`Proximity query between ${t} and ${e}: ${o}`),o}deletePreviousGeometry(t){let e=this.getGeometry(t);e.geometry=null}changeCenterX(t,e){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type==="Line")throw new Error("Cannot change center of a Line geometry.");let n=this.getGeometry(t);n.center=new W(e,n.center.y,n.center.z),n.geometry=null}changeCenterY(t,e){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type==="Line")throw new Error("Cannot change center of a Line geometry.");let n=this.getGeometry(t);n.center=new W(n.center.x,e,n.center.z),n.geometry=null}changeCenterZ(t,e){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type==="Line")throw new Error("Cannot change center of a Line geometry.");let n=this.getGeometry(t);n.center=new W(n.center.x,n.center.y,e),n.geometry=null}changeRotationX(t,e){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type==="Line")throw new Error("Cannot change rotation of a Line geometry.");console.log("changeRotationX",t,e);let n=this.getGeometry(t);n.rotation=new W(e,n.rotation.y,n.rotation.z),n.geometry=null}changeRotationY(t,e){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type==="Line")throw new Error("Cannot change rotation of a Line geometry.");console.log("changeRotationY",t,e);let n=this.getGeometry(t);n.rotation=new W(n.rotation.x,e,n.rotation.z),n.geometry=null}changeRotationZ(t,e){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type==="Line")throw new Error("Cannot change rotation of a Line geometry.");console.log("changeRotationZ",t,e);let n=this.getGeometry(t);n.rotation=new W(n.rotation.x,n.rotation.y,e),n.geometry=null}changePointsOfLine(t,e,n){if(this._geometries[t]===void 0)throw new Error(`Geometry with id ${t} not found.`);if(this._geometries[t].type!=="Line")throw new Error("Cannot change points of a non-Line geometry.");let i=this.getGeometry(t);const r=i.start,o=i.end;i.start=e?new W(e.x,e.y,e.z??0):r,i.end=n?new W(n.x,n.y,n.z??0):o,i.geometry=null}static isPlaneBetween(t,e,n){const i=n.clone().subtract(t).normalize(),o=e.clone().subtract(t).dot(i);return o>0&&o<t.distanceTo(n)}};export{Iy as A,li as B,Oy as C,Uy as D,Ku as G,Td as L,cy as M,dn as P,nr as Q,hu as R,Ry as S,ly as T,zt as V,Fy as W,W as a,ju as b,Xt as c,ky as d,B as e,Ly as f,zy as g,Ny as h,ee as i,bi as j,fy as k,X_ as l,V_ as m,Vn as n};
