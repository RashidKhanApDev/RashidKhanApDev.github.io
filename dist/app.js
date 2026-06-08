(()=>{var T_=Object.create;var Pd=Object.defineProperty;var w_=Object.getOwnPropertyDescriptor;var E_=Object.getOwnPropertyNames;var A_=Object.getPrototypeOf,C_=Object.prototype.hasOwnProperty;var gr=(r,e)=>()=>(r&&(e=r(r=0)),e);var Id=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var R_=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of E_(e))!C_.call(r,i)&&i!==t&&Pd(r,i,{get:()=>e[i],enumerable:!(n=w_(e,i))||n.enumerable});return r};var P_=(r,e,t)=>(t=r!=null?T_(A_(r)):{},R_(e||!r||!r.__esModule?Pd(t,"default",{value:r,enumerable:!0}):t,r));var Dd=Id(()=>{(function(){"use strict";let r=null;function e(){if(r)return r.state==="suspended"&&r.resume().catch(function(){}),r;try{var l=window.AudioContext||window.webkitAudioContext;return l?(r=new l,r.state==="suspended"&&r.resume().catch(function(){}),r):null}catch(c){return console.warn("[sounds.js] Web Audio API is not available:",c),null}}function t(){if(!document.hidden){var l=e();if(l){var c=l.currentTime,u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=2e3,u.Q.value=1,u.connect(l.destination),s&&u.connect(s);var d=l.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(.15,c+.005),d.gain.exponentialRampToValueAtTime(1e-4,c+.055),d.connect(u);var h=l.createOscillator();h.type="sine",h.frequency.setValueAtTime(800,c),h.frequency.exponentialRampToValueAtTime(500,c+.055);var f=l.createGain();f.gain.value=1,h.connect(f),f.connect(d);var g=l.createOscillator();g.type="sine",g.frequency.setValueAtTime(1600,c),g.frequency.exponentialRampToValueAtTime(1e3,c+.04);var _=l.createGain();_.gain.setValueAtTime(.3,c),_.gain.exponentialRampToValueAtTime(1e-4,c+.03),g.connect(_),_.connect(d),h.start(c),h.stop(c+.06),g.start(c),g.stop(c+.06),h.onended=function(){h.disconnect(),f.disconnect(),g.disconnect(),_.disconnect(),d.disconnect(),u.disconnect()}}}}function n(){if(!document.hidden){var l=e();if(l){var c=l.currentTime,u=(Math.random()-.5)*200,d=.9+Math.random()*.2,h=.12*d,f=l.createBiquadFilter();f.type="highpass",f.frequency.value=600,f.Q.value=.7,f.connect(l.destination),s&&f.connect(s);var g=l.createGain();g.gain.setValueAtTime(1e-4,c),g.gain.linearRampToValueAtTime(h,c+.002),g.gain.exponentialRampToValueAtTime(1e-4,c+.035),g.connect(f);var _=l.createOscillator();_.type="triangle",_.frequency.setValueAtTime(1200+u,c),_.frequency.exponentialRampToValueAtTime(800+u*.5,c+.035),_.connect(g);var p=l.createOscillator();p.type="square",p.frequency.setValueAtTime(4e3+u*2,c);var m=l.createGain();m.gain.setValueAtTime(.03*d,c),m.gain.exponentialRampToValueAtTime(1e-4,c+.008),p.connect(m),m.connect(f),_.start(c),_.stop(c+.04),p.start(c),p.stop(c+.04),_.onended=function(){_.disconnect(),g.disconnect(),p.disconnect(),m.disconnect(),f.disconnect()}}}}function i(){if(!document.hidden){var l=e();if(l){var c=l.currentTime,u=l.createGain();u.gain.value=.2,u.connect(l.destination),s&&u.connect(s);var d=l.createOscillator(),h=l.createGain();d.type="sine",d.frequency.setValueAtTime(200,c),d.frequency.exponentialRampToValueAtTime(800,c+1.5),h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(.05,c+.2),h.gain.exponentialRampToValueAtTime(.001,c+1.5),d.connect(h),h.connect(u),d.start(c),d.stop(c+1.5);for(let v=0;v<15;v++){var f=c+Math.random()*1.5,g=l.createOscillator(),_=l.createGain();g.type="square",g.frequency.value=2e3+Math.random()*3e3,_.gain.setValueAtTime(0,f),_.gain.linearRampToValueAtTime(.01,f+.001),_.gain.exponentialRampToValueAtTime(.001,f+.03),g.connect(_),_.connect(u),g.start(f),g.stop(f+.04)}var p=c+1.8,m=[523.25,659.25,783.99,1046.5];m.forEach((v,b)=>{var M=l.createOscillator(),E=l.createGain();M.type="sine",M.frequency.value=v;var S=p+b*.05;E.gain.setValueAtTime(0,S),E.gain.linearRampToValueAtTime(.04,S+.02),E.gain.exponentialRampToValueAtTime(.001,S+1.5),M.connect(E),E.connect(u),M.start(S),M.stop(S+1.5)})}}}window.initAudioContext=function(){var l=e();if(l){l.state==="suspended"&&l.resume().catch(function(){});var c=l.createOscillator(),u=l.createGain();u.gain.value=0,c.connect(u),u.connect(l.destination),c.start(l.currentTime),c.stop(l.currentTime+.001)}};var s=null;function a(){var l=e();return l?(s||(s=l.createAnalyser(),s.fftSize=256),s):null}function o(l){if(!document.hidden){var c=e();if(c){var u=l||523.25,d=c.currentTime,h=c.createGain();h.gain.setValueAtTime(0,d),h.gain.linearRampToValueAtTime(.3,d+.01),h.gain.exponentialRampToValueAtTime(.001,d+1.2);var f=c.createBiquadFilter();f.type="lowpass",f.frequency.value=3e3,h.connect(f),f.connect(c.destination),s&&f.connect(s);var g=c.createOscillator();g.type="sine",g.frequency.value=u;var _=c.createGain();_.gain.value=1,g.connect(_),_.connect(h);var p=c.createOscillator();p.type="triangle",p.frequency.value=u*2;var m=c.createGain();m.gain.value=.3,p.connect(m),m.connect(h);var v=c.createOscillator();v.type="sine",v.frequency.value=u*3;var b=c.createGain();b.gain.value=.1,v.connect(b),b.connect(h),g.start(d),p.start(d),v.start(d),g.stop(d+1.3),p.stop(d+1.3),v.stop(d+1.3)}}}window.playClickSound=t,window.playTypeSound=n,window.playBootSound=i,window.playPianoSound=o,window.getAudioAnalyser=a})()});function I_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function D_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lp(){let r=Oa("canvas");return r.style.display="block",r}function Uh(...r){let e="THREE."+r.shift();Ws?Ws("log",e,...r):console.log(e,...r)}function Np(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ke(...r){r=Np(r);let e="THREE."+r.shift();if(Ws)Ws("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=Np(r);let e="THREE."+r.shift();if(Ws)Ws("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Al(...r){let e=r.join(" ");e in Ld||(Ld[e]=!0,ke(...r))}function Fp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function oo(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function L_(r,e){return(r%e+e)%e}function Ou(r,e,t){return(1-t)*r+t*e}function Ca(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}function N_(){let r={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nr?Fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Na]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:Fd,fromXYZ:Ud,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Fd,fromXYZ:Ud,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),r}function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function zu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}function Hu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ku(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Kr.fromArray(r,s);let o=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function Z_(r,e,t,n,i,s,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===er,o),l===null)return null;al.copy(o),al.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:r}}function ol(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,nl),r.getVertexPosition(l,il),r.getVertexPosition(c,rl);let u=Z_(r,e,t,n,nl,il,rl,Yd);if(u){let d=new W;br.getBarycoord(Yd,nl,il,rl,d),i&&(u.uv=br.getInterpolatedAttribute(i,o,l,c,d,new ft)),s&&(u.uv1=br.getInterpolatedAttribute(s,o,l,c,d,new ft)),a&&(u.normal=br.getInterpolatedAttribute(a,o,l,c,d,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new W,materialIndex:0};br.getNormal(nl,il,rl,h.normal),u.face=h,u.barycoord=d}return u}function Jd(r,e,t,n,i,s,a){let o=hh.distanceSqToPoint(r);if(o<t){let l=new W;hh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function os(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if($d(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if($d(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function xn(r){let e={};for(let t=0;t<r.length;t++){let n=os(r[t]);for(let i in n)e[i]=n[i]}return e}function $d(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Q_(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Oh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function hl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ep(r,e){return r.distance-e.distance}function dh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)dh(s[a],e,t,!0)}}function zh(r,e,t,n){let i=c0(n);switch(t){case Ih:return r*e;case Lh:return r*e/i.components*i.byteLength;case nc:return r*e/i.components*i.byteLength;case Fr:return r*e*2/i.components*i.byteLength;case ic:return r*e*2/i.components*i.byteLength;case Dh:return r*e*3/i.components*i.byteLength;case pi:return r*e*4/i.components*i.byteLength;case rc:return r*e*4/i.components*i.byteLength;case to:case no:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ac:case lc:return Math.max(r,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(r,8)*Math.max(e,8)/2;case cc:case uc:case fc:case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hc:case so:case pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Pc:case Ic:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Dc:case Lc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ao:case Nc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(r){switch(r){case ti:case Ah:return{byteLength:1,components:1};case ea:case Ch:case Bi:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ei:case jl:case Ai:return{byteLength:4,components:1};case Rh:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}var tp,mh,np,Qa,ip,Qs,er,Pn,di,Oi,ns,js,gh,_h,rp,Tr,sp,ap,op,lp,cp,up,hp,fp,ml,gl,dp,pp,mp,gp,_p,xp,vp,yp,Mp,_l,xl,vl,is,yl,Ml,Sl,bl,xh,Sp,bp,wi,vh,yh,Mh,Sh,bh,Th,wh,Eh,Dr,as,$l,Kl,ja,Tl,Li,wl,an,Tp,eo,cn,Ql,Lr,ti,Ah,Ch,ea,jl,Ei,Ai,Bi,ec,tc,ta,Rh,Ph,Ih,Dh,pi,Ni,Nr,Lh,nc,Fr,ic,rc,to,no,io,ro,sc,ac,oc,lc,cc,uc,hc,fc,dc,so,pc,mc,gc,_c,xc,vc,yc,Mc,Sc,bc,Tc,wc,Ec,Ac,Cc,Rc,Pc,Ic,Dc,Lc,ao,Nc,La,El,pl,sh,ah,oh,lh,wp,Nh,Ep,nr,$n,Na,Fa,mt,es,ch,Ap,Cp,Rp,Fc,Pp,Ip,Uc,Dp,uh,Fh,Ti,Ua,Ld,Ws,Up,Fi,mn,Uu,Cl,Vh,ft,Ui,Gh,W,Bu,Nd,Hh,Ye,ku,Fd,Ud,ot,Is,Rl,F_,Xs,U_,Vu,Cn,Wh,Ot,Pl,Kn,Ba,Il,Jl,Ut,Ds,Mi,O_,B_,_r,qo,Zn,Od,Bd,wr,qs,k_,kd,Ls,Zi,Yo,Ra,z_,V_,zd,Vd,Gd,Hd,G_,Ns,Gu,Qn,ts,H_,Ys,Op,xr,Zo,dt,gn,ka,Si,Ji,Wu,$i,Fs,Us,Wd,Xu,qu,Yu,Zu,Ju,$u,br,Er,Ki,bi,Jo,Os,Bs,ks,vr,yr,$r,Pa,$o,Ko,Kr,Yt,Qo,W_,En,za,Va,An,X_,Ia,Qu,rs,q_,fi,ju,zs,Jn,Da,sn,zn,Y_,Ar,Qi,eh,jo,Mr,th,el,nh,Zs,Cr,Xd,Qr,tl,qd,nl,il,rl,ih,sl,Yd,al,Rn,Dl,rh,J_,$_,Di,jr,K_,ll,Ga,Js,Zd,hh,cl,ul,Ha,Wa,$s,tr,Ll,Xa,Ks,qa,ss,Bp,j_,e0,jn,Nl,Fl,Ul,Rr,Ol,Bl,kl,zl,ei,Pr,Vl,Gl,Hl,Ya,Ir,Wl,Xl,kp,ql,fl,dl,Ii,Za,Sr,Kd,Qd,_n,Ja,Vs,Gs,Yl,Zl,Bh,t0,kh,n0,i0,r0,s0,a0,o0,l0,fh,At,lT,jd,$a,Ka,Xh,ph,qh=gr(()=>{tp=0,mh=1,np=2,Qa=1,ip=2,Qs=3,er=0,Pn=1,di=2,Oi=0,ns=1,js=2,gh=3,_h=4,rp=5,Tr=100,sp=101,ap=102,op=103,lp=104,cp=200,up=201,hp=202,fp=203,ml=204,gl=205,dp=206,pp=207,mp=208,gp=209,_p=210,xp=211,vp=212,yp=213,Mp=214,_l=0,xl=1,vl=2,is=3,yl=4,Ml=5,Sl=6,bl=7,xh=0,Sp=1,bp=2,wi=0,vh=1,yh=2,Mh=3,Sh=4,bh=5,Th=6,wh=7,Eh=300,Dr=301,as=302,$l=303,Kl=304,ja=306,Tl=1e3,Li=1001,wl=1002,an=1003,Tp=1004,eo=1005,cn=1006,Ql=1007,Lr=1008,ti=1009,Ah=1010,Ch=1011,ea=1012,jl=1013,Ei=1014,Ai=1015,Bi=1016,ec=1017,tc=1018,ta=1020,Rh=35902,Ph=35899,Ih=1021,Dh=1022,pi=1023,Ni=1026,Nr=1027,Lh=1028,nc=1029,Fr=1030,ic=1031,rc=1033,to=33776,no=33777,io=33778,ro=33779,sc=35840,ac=35841,oc=35842,lc=35843,cc=36196,uc=37492,hc=37496,fc=37488,dc=37489,so=37490,pc=37491,mc=37808,gc=37809,_c=37810,xc=37811,vc=37812,yc=37813,Mc=37814,Sc=37815,bc=37816,Tc=37817,wc=37818,Ec=37819,Ac=37820,Cc=37821,Rc=36492,Pc=36494,Ic=36495,Dc=36283,Lc=36284,ao=36285,Nc=36286,La=2300,El=2301,pl=2302,sh=2303,ah=2400,oh=2401,lh=2402,wp=3200,Nh=0,Ep=1,nr="",$n="srgb",Na="srgb-linear",Fa="linear",mt="srgb",es=7680,ch=519,Ap=512,Cp=513,Rp=514,Fc=515,Pp=516,Ip=517,Uc=518,Dp=519,uh=35044,Fh="300 es",Ti=2e3,Ua=2001;Ld={},Ws=null;Up={[_l]:xl,[vl]:Sl,[yl]:bl,[is]:Ml,[xl]:_l,[Sl]:vl,[bl]:yl,[Ml]:is},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Cl=180/Math.PI;Vh=class Vh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;ft=Vh,Ui=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gh=class Gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;W=Gh,Bu=new W,Nd=new Ui,Hh=class Hh{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],b=i[4],M=i[7],E=i[2],S=i[5],A=i[8];return s[0]=a*_+o*v+l*E,s[3]=a*p+o*b+l*S,s[6]=a*m+o*M+l*A,s[1]=c*_+u*v+d*E,s[4]=c*p+u*b+d*S,s[7]=c*m+u*M+d*A,s[2]=h*_+f*v+g*E,s[5]=h*p+f*b+g*S,s[8]=h*m+f*M+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ku.makeScale(e,t)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;Ye=Hh,ku=new Ye,Fd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ud=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=N_();Rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Oa("canvas")),Is.width=e.width,Is.height=e.height;let i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F_=0,Xs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(zu(i[a].image)):s.push(zu(i[a]))}else s=zu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};U_=0,Vu=new W,Cn=class r extends Fi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Li,i=Li,s=cn,a=Lr,o=pi,l=ti,c=r.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=oo(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Eh;Cn.DEFAULT_ANISOTROPY=1;Wh=class Wh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,E=(m+1)/2,S=(u+h)/4,A=(d+_)/4,x=(g+p)/4;return b>M&&b>E?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=S/n,s=A/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=S/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;Ot=Wh,Pl=class extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Cn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Il=class extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jl=class Jl{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,B_)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),_r.crossVectors(n,Zn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),_r.crossVectors(n,Zn)),_r.normalize(),qo.crossVectors(Zn,_r),i[0]=_r.x,i[4]=qo.x,i[8]=Zn.x,i[1]=_r.y,i[5]=qo.y,i[9]=Zn.y,i[2]=_r.z,i[6]=qo.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],b=n[7],M=n[11],E=n[15],S=i[0],A=i[4],x=i[8],T=i[12],R=i[1],P=i[5],I=i[9],V=i[13],B=i[2],L=i[6],O=i[10],U=i[14],Z=i[3],j=i[7],D=i[11],de=i[15];return s[0]=a*S+o*R+l*B+c*Z,s[4]=a*A+o*P+l*L+c*j,s[8]=a*x+o*I+l*O+c*D,s[12]=a*T+o*V+l*U+c*de,s[1]=u*S+d*R+h*B+f*Z,s[5]=u*A+d*P+h*L+f*j,s[9]=u*x+d*I+h*O+f*D,s[13]=u*T+d*V+h*U+f*de,s[2]=g*S+_*R+p*B+m*Z,s[6]=g*A+_*P+p*L+m*j,s[10]=g*x+_*I+p*O+m*D,s[14]=g*T+_*V+p*U+m*de,s[3]=v*S+b*R+M*B+E*Z,s[7]=v*A+b*P+M*L+E*j,s[11]=v*x+b*I+M*O+E*D,s[15]=v*T+b*V+M*U+E*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*f-c*h,b=o*f-c*d,M=o*h-l*d,E=a*f-c*u,S=a*h-l*u,A=a*d-o*u;return t*(_*v-p*b+m*M)-n*(g*v-p*E+m*S)+i*(g*b-_*E+m*A)-s*(g*M-_*S+p*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*o-n*a,b=t*l-i*a,M=t*c-s*a,E=n*l-i*o,S=n*c-s*o,A=i*c-s*l,x=u*_-d*g,T=u*p-h*g,R=u*m-f*g,P=d*p-h*_,I=d*m-f*_,V=h*m-f*p,B=v*V-b*I+M*P+E*R-S*T+A*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/B;return e[0]=(o*V-l*I+c*P)*L,e[1]=(i*I-n*V-s*P)*L,e[2]=(_*A-p*S+m*E)*L,e[3]=(h*S-d*A-f*E)*L,e[4]=(l*R-a*V-c*T)*L,e[5]=(t*V-i*R+s*T)*L,e[6]=(p*M-g*A-m*b)*L,e[7]=(u*A-h*M+f*b)*L,e[8]=(a*I-o*R+c*x)*L,e[9]=(n*R-t*I-s*x)*L,e[10]=(g*S-_*M+m*v)*L,e[11]=(d*M-u*S-f*v)*L,e[12]=(o*T-a*P-l*x)*L,e[13]=(t*P-n*T+i*x)*L,e[14]=(_*b-g*E-p*v)*L,e[15]=(u*E-d*b+h*v)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,p=a*d,m=o*d,v=l*c,b=l*u,M=l*d,E=n.x,S=n.y,A=n.z;return i[0]=(1-(_+m))*E,i[1]=(f+M)*E,i[2]=(g-b)*E,i[3]=0,i[4]=(f-M)*S,i[5]=(1-(h+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+b)*A,i[9]=(p-v)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(i[0],i[1],i[2]).length(),o=Ds.set(i[4],i[5],i[6]).length(),l=Ds.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Mi.copy(this);let c=1/a,u=1/o,d=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ti,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Ti)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ua)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ti,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Ti)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ua)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jl.prototype.isMatrix4=!0;Ut=Jl,Ds=new W,Mi=new Ut,O_=new W(0,0,0),B_=new W(1,1,1),_r=new W,qo=new W,Zn=new W,Od=new Ut,Bd=new Ui,wr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wr.DEFAULT_ORDER="XYZ";qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},k_=0,kd=new W,Ls=new Ui,Zi=new Ut,Yo=new W,Ra=new W,z_=new W,V_=new Ui,zd=new W(1,0,0),Vd=new W(0,1,0),Gd=new W(0,0,1),Hd={type:"added"},G_={type:"removed"},Ns={type:"childadded",child:null},Gu={type:"childremoved",child:null},Qn=class r extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new W,t=new wr,n=new Ui,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ye}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ra,Yo,this.up):Zi.lookAt(Yo,Ra,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G_),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Qn.DEFAULT_UP=new W(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ts=class extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},H_={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Zo={h:0,s:0,l:0};dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=L_(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){let n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return ot.workingToColorSpace(gn.copy(this),e),Math.round(ct(gn.r*255,0,255))*65536+Math.round(ct(gn.g*255,0,255))*256+Math.round(ct(gn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(gn.copy(this),t);let n=gn.r,i=gn.g,s=gn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=$n){ot.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,i=gn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Zo);let n=Ou(xr.h,Zo.h,t),i=Ou(xr.s,Zo.s,t),s=Ou(xr.l,Zo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new dt;dt.NAMES=Op;ka=class extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Si=new W,Ji=new W,Wu=new W,$i=new W,Fs=new W,Us=new W,Wd=new W,Xu=new W,qu=new W,Yu=new W,Zu=new Ot,Ju=new Ot,$u=new Ot,br=class r{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Si.subVectors(i,t),Ji.subVectors(n,t),Wu.subVectors(e,t);let a=Si.dot(Si),o=Si.dot(Ji),l=Si.dot(Wu),c=Ji.dot(Ji),u=Ji.dot(Wu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Zu.setScalar(0),Ju.setScalar(0),$u.setScalar(0),Zu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Zu,s.x),a.addScaledVector(Ju,s.y),a.addScaledVector($u,s.z),a}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),Ji.subVectors(e,t),Si.cross(Ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Fs.subVectors(i,n),Us.subVectors(s,n),Xu.subVectors(e,n);let l=Fs.dot(Xu),c=Us.dot(Xu);if(l<=0&&c<=0)return t.copy(n);qu.subVectors(e,i);let u=Fs.dot(qu),d=Us.dot(qu);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Fs,a);Yu.subVectors(e,s);let f=Fs.dot(Yu),g=Us.dot(Yu);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Us,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Wd.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Wd,o);let m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Fs,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Er=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),$o.subVectors(this.max,Pa),Os.subVectors(e.a,Pa),Bs.subVectors(e.b,Pa),ks.subVectors(e.c,Pa),vr.subVectors(Bs,Os),yr.subVectors(ks,Bs),$r.subVectors(Os,ks);let t=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-$r.z,$r.y,vr.z,0,-vr.x,yr.z,0,-yr.x,$r.z,0,-$r.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-$r.y,$r.x,0];return!Ku(t,Os,Bs,ks,$o)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,Os,Bs,ks,$o))?!1:(Ko.crossVectors(vr,yr),t=[Ko.x,Ko.y,Ko.z],Ku(t,Os,Bs,ks,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new W,new W,new W,new W,new W,new W,new W,new W],bi=new W,Jo=new Er,Os=new W,Bs=new W,ks=new W,vr=new W,yr=new W,$r=new W,Pa=new W,$o=new W,Ko=new W,Kr=new W;Yt=new W,Qo=new ft,W_=0,En=class extends Fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ca(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},za=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Va=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}},An=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}},X_=new Er,Ia=new W,Qu=new W,rs=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):X_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);let t=Ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Qu)),this.expandByPoint(Ia.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},q_=0,fi=new Ut,ju=new Qn,zs=new W,Jn=new Er,Da=new Er,sn=new W,zn=class r extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?Va:za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new An(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Jn.min,Da.min),Jn.expandByPoint(sn),sn.addVectors(Jn.max,Da.max),Jn.expandByPoint(sn)):(Jn.expandByPoint(Da.min),Jn.expandByPoint(Da.max))}Jn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(e,c),sn.add(zs)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new W,l[x]=new W;let c=new W,u=new W,d=new W,h=new ft,f=new ft,g=new ft,_=new W,p=new W;function m(x,T,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(_),o[T].add(_),o[R].add(_),l[x].add(p),l[T].add(p),l[R].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,T=v.length;x<T;++x){let R=v[x],P=R.start,I=R.count;for(let V=P,B=P+I;V<B;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new W,M=new W,E=new W,S=new W;function A(x){E.fromBufferAttribute(i,x),S.copy(E);let T=o[x];b.copy(T),b.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(S,T);let P=M.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,T=v.length;x<T;++x){let R=v[x],P=R.start,I=R.count;for(let V=P,B=P+I;V<B;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new En(h,u,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Y_=0,Ar=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=ns,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==er&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qi=new W,eh=new W,jo=new W,Mr=new W,th=new W,el=new W,nh=new W,Zs=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){eh.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(eh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(jo),o=Mr.dot(this.direction),l=-Mr.dot(jo),c=Mr.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(eh).addScaledVector(jo,h),f}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);let n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,i,s){th.subVectors(t,e),el.subVectors(n,e),nh.crossVectors(th,el);let a=this.direction.dot(nh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mr.subVectors(this.origin,e);let l=o*this.direction.dot(el.crossVectors(Mr,el));if(l<0)return null;let c=o*this.direction.dot(th.cross(Mr));if(c<0||l+c>a)return null;let u=-o*Mr.dot(nh);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cr=class extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xd=new Ut,Qr=new Zs,tl=new rs,qd=new W,nl=new W,il=new W,rl=new W,ih=new W,sl=new W,Yd=new W,al=new W,Rn=class extends Qn{constructor(e=new zn,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(ih.fromBufferAttribute(d,e),a?sl.addScaledVector(ih,u):sl.addScaledVector(ih.sub(t),u))}t.add(sl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(tl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(tl,qd)===null||Qr.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Xd.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,E=b;M<E;M+=3){let S=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);i=ol(this,m,e,n,c,u,d,S,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let v=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);i=ol(this,a,e,n,c,u,d,v,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,E=b;M<E;M+=3){let S=M,A=M+1,x=M+2;i=ol(this,m,e,n,c,u,d,S,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let v=p,b=p+1,M=p+2;i=ol(this,a,e,n,c,u,d,v,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};Dl=class extends Cn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=an,u=an,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rh=new W,J_=new W,$_=new Ye,Di=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=rh.subVectors(n,t).cross(J_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(rh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$_.getNormalMatrix(e),i=this.coplanarPoint(rh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jr=new rs,K_=new ft(.5,.5),ll=new W,Ga=class{constructor(e=new Di,t=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],b=s[13],M=s[14],E=s[15];if(i[0].setComponents(c-a,f-u,m-g,E-v).normalize(),i[1].setComponents(c+a,f+u,m+g,E+v).normalize(),i[2].setComponents(c+o,f+d,m+_,E+b).normalize(),i[3].setComponents(c-o,f-d,m-_,E-b).normalize(),n)i[4].setComponents(l,h,p,M).normalize(),i[5].setComponents(c-l,f-h,m-p,E-M).normalize();else if(i[4].setComponents(c-l,f-h,m-p,E-M).normalize(),t===Ti)i[5].setComponents(c+l,f+h,m+p,E+M).normalize();else if(t===Ua)i[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);let t=K_.distanceTo(e.center);return jr.radius=.7071067811865476+t,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ll.x=i.normal.x>0?e.max.x:e.min.x,ll.y=i.normal.y>0?e.max.y:e.min.y,ll.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Js=class extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zd=new Ut,hh=new Zs,cl=new rs,ul=new W,Ha=class extends Qn{constructor(e=new zn,t=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;Zd.copy(i).invert(),hh.copy(e.ray).applyMatrix4(Zd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){let p=c.getX(g);ul.fromBufferAttribute(d,p),Jd(ul,p,l,i,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)ul.fromBufferAttribute(d,g),Jd(ul,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};Wa=class extends Cn{constructor(e=[],t=Dr,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$s=class extends Cn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tr=class extends Cn{constructor(e,t,n=Ei,i,s,a,o=an,l=an,c,u=Ni,d=1){if(u!==Ni&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ll=class extends tr{constructor(e,t=Ei,n=Dr,i,s,a=an,o=an,l,c=Ni){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xa=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ks=class r extends zn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(d,2));function g(_,p,m,v,b,M,E,S,A,x,T){let R=M/A,P=E/x,I=M/2,V=E/2,B=S/2,L=A+1,O=x+1,U=0,Z=0,j=new W;for(let D=0;D<O;D++){let de=D*P-V;for(let be=0;be<L;be++){let Xe=be*R-I;j[_]=Xe*v,j[p]=de*b,j[m]=B,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=S>0?1:-1,u.push(j.x,j.y,j.z),d.push(be/A),d.push(1-D/x),U+=1}}for(let D=0;D<x;D++)for(let de=0;de<A;de++){let be=h+de+L*D,Xe=h+de+L*(D+1),Oe=h+(de+1)+L*(D+1),Ie=h+(de+1)+L*D;l.push(be,Xe,Ie),l.push(Xe,Oe,Ie),Z+=6}o.addGroup(f,Z,T),f+=Z,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qa=class r extends zn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],d=[],h=[],f=[],g=0,_=[],p=n/2,m=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new An(d,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(f,2));function v(){let M=new W,E=new W,S=0,A=(t-e)/n;for(let x=0;x<=s;x++){let T=[],R=x/s,P=R*(t-e)+e;for(let I=0;I<=i;I++){let V=I/i,B=V*l+o,L=Math.sin(B),O=Math.cos(B);E.x=P*L,E.y=-R*n+p,E.z=P*O,d.push(E.x,E.y,E.z),M.set(L,A,O).normalize(),h.push(M.x,M.y,M.z),f.push(V,1-R),T.push(g++)}_.push(T)}for(let x=0;x<i;x++)for(let T=0;T<s;T++){let R=_[T][x],P=_[T+1][x],I=_[T+1][x+1],V=_[T][x+1];(e>0||T!==0)&&(u.push(R,P,V),S+=3),(t>0||T!==s-1)&&(u.push(P,I,V),S+=3)}c.addGroup(m,S,0),m+=S}function b(M){let E=g,S=new ft,A=new W,x=0,T=M===!0?e:t,R=M===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,p*R,0),h.push(0,R,0),f.push(.5,.5),g++;let P=g;for(let I=0;I<=i;I++){let B=I/i*l+o,L=Math.cos(B),O=Math.sin(B);A.x=T*O,A.y=p*R,A.z=T*L,d.push(A.x,A.y,A.z),h.push(0,R,0),S.x=L*.5+.5,S.y=O*.5*R+.5,f.push(S.x,S.y),g++}for(let I=0;I<i;I++){let V=E+I,B=P+I;M===!0?u.push(B,B+1,V):u.push(B+1,B,V),x+=3}c.addGroup(m,x,M===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ss=class r extends zn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let v=m*h-a;for(let b=0;b<c;b++){let M=b*d-s;g.push(M,-v,0),_.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let b=v+c*m,M=v+c*(m+1),E=v+1+c*(m+1),S=v+1+c*m;f.push(b,M,S),f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};Bp={clone:os,merge:xn},j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Nl=class extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fl=class extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ul=class extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Rr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ol=class extends Rr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oh:s=e,o=2*t-n;break;case lh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:a=e,l=2*n-t;break;case lh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,v=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,b=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let E=0;E!==o;++E)s[E]=m*a[u+E]+v*a[c+E]+b*a[l+E]+M*a[d+E];return s}},Bl=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},kl=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},zl=class extends Rr{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){let _=(n-t)/(i-t),p=1-_;for(let m=0;m!==o;++m)s[m]=a[c+m]*p+a[l+m]*_;return s}let f=o*2,g=e-1;for(let _=0;_!==o;++_){let p=a[c+_],m=a[l+_],v=g*f+_*2,b=h[v],M=h[v+1],E=e*f+_*2,S=d[E],A=d[E+1],x=(n-t)/(i-t),T,R,P,I,V;for(let B=0;B<8;B++){T=x*x,R=T*x,P=1-x,I=P*P,V=I*P;let O=V*t+3*I*x*b+3*P*T*S+R*i-n;if(Math.abs(O)<1e-10)break;let U=3*I*(b-t)+6*P*x*(S-b)+3*T*(i-S);if(Math.abs(U)<1e-10)break;x=x-O/U,x=Math.max(0,Math.min(1,x))}s[_]=V*p+3*I*x*M+3*P*T*A+R*m}return s}},ei=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hl(t,this.TimeBufferType),this.values=hl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hl(e.times,Array),values:hl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&D_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=El;Pr=class extends ei{constructor(e,t,n){super(e,t,n)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=La;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;Vl=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};Vl.prototype.ValueTypeName="color";Gl=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};Gl.prototype.ValueTypeName="number";Hl=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ui.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ya=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;Ir=class extends ei{constructor(e,t,n){super(e,t,n)}};Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=La;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;Wl=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};Wl.prototype.ValueTypeName="vector";Xl=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kp=new Xl,ql=class{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";fl=new W,dl=new Ui,Ii=new W,Za=class extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,dl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(fl,dl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sr=new W,Kd=new ft,Qd=new ft,_n=class extends Za{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Kd,Qd),t.subVectors(Qd,Kd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Uu*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ja=class extends Za{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vs=-90,Gs=1,Yl=class extends Qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _n(Vs,Gs,e,t);i.layers=this.layers,this.add(i);let s=new _n(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let a=new _n(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new _n(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new _n(Vs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new _n(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zl=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Bh="\\[\\]\\.:\\/",t0=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",n0="[^"+Bh.replace("\\.","")+"]",i0=/((?:WC+[\/:])*)/.source.replace("WC",kh),r0=/(WCOD+)?/.source.replace("WCOD",n0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),a0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),o0=new RegExp("^"+i0+r0+s0+a0+"$"),l0=["material","materials","bones","map"],fh=class{constructor(e,t,n){let i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(e){let t=o0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);l0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=fh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];lT=new Float32Array(1),jd=new Ut,$a=class{constructor(e,t,n=0,i=1/0){this.ray=new Zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jd),this}intersectObject(e,t=!0,n=[]){return dh(e,this,n,t),n.sort(ep),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)dh(e[i],this,n,t);return n.sort(ep),n}};Ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ke("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Xh=class Xh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Xh.prototype.isMatrix2=!0;ph=Xh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184")});function lm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function h0(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}function Yv(r,e,t,n,i,s){let a=new dt(0),o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(v){let b=!1,M=f(v);M===null?p(a,o):M&&M.isColor&&(p(M,1),b=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===ja)?(c===void 0&&(c=new Rn(new Ks(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:os(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cm),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==mt,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Rn(new ss(2,2),new jn({name:"BackgroundMaterial",uniforms:os(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(Oc,Oh(r)),t.buffers.color.setClear(Oc.r,Oc.g,Oc.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Zv(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(P,I,V,B,L){let O=!1,U=d(P,B,V,I);s!==U&&(s=U,c(s.object)),O=f(P,B,V,L),O&&g(P,B,V,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(P,I,V,B),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function d(P,I,V,B){let L=B.wireframe===!0,O=n[I.id];O===void 0&&(O={},n[I.id]=O);let U=P.isInstancedMesh===!0?P.id:0,Z=O[U];Z===void 0&&(Z={},O[U]=Z);let j=Z[V.id];j===void 0&&(j={},Z[V.id]=j);let D=j[L];return D===void 0&&(D=h(l()),j[L]=D),D}function h(P){let I=[],V=[],B=[];for(let L=0;L<t;L++)I[L]=0,V[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:B,object:P,attributes:{},index:null}}function f(P,I,V,B){let L=s.attributes,O=I.attributes,U=0,Z=V.getAttributes();for(let j in Z)if(Z[j].location>=0){let de=L[j],be=O[j];if(be===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;U++}return s.attributesNum!==U||s.index!==B}function g(P,I,V,B){let L={},O=I.attributes,U=0,Z=V.getAttributes();for(let j in Z)if(Z[j].location>=0){let de=O[j];de===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(de=P.instanceColor));let be={};be.attribute=de,de&&de.data&&(be.data=de.data),L[j]=be,U++}s.attributes=L,s.attributesNum=U,s.index=B}function _(){let P=s.newAttributes;for(let I=0,V=P.length;I<V;I++)P[I]=0}function p(P){m(P,0)}function m(P,I){let V=s.newAttributes,B=s.enabledAttributes,L=s.attributeDivisors;V[P]=1,B[P]===0&&(r.enableVertexAttribArray(P),B[P]=1),L[P]!==I&&(r.vertexAttribDivisor(P,I),L[P]=I)}function v(){let P=s.newAttributes,I=s.enabledAttributes;for(let V=0,B=I.length;V<B;V++)I[V]!==P[V]&&(r.disableVertexAttribArray(V),I[V]=0)}function b(P,I,V,B,L,O,U){U===!0?r.vertexAttribIPointer(P,I,V,L,O):r.vertexAttribPointer(P,I,V,B,L,O)}function M(P,I,V,B){_();let L=B.attributes,O=V.getAttributes(),U=I.defaultAttributeValues;for(let Z in O){let j=O[Z];if(j.location>=0){let D=L[Z];if(D===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){let de=D.normalized,be=D.itemSize,Xe=e.get(D);if(Xe===void 0)continue;let Oe=Xe.buffer,Ie=Xe.type,K=Xe.bytesPerElement,oe=Ie===r.INT||Ie===r.UNSIGNED_INT||D.gpuType===jl;if(D.isInterleavedBufferAttribute){let se=D.data,Ee=se.stride,Ue=D.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<j.locationSize;Ce++)m(j.location+Ce,se.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<j.locationSize;Ce++)p(j.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ce=0;Ce<j.locationSize;Ce++)b(j.location+Ce,be/j.locationSize,Ie,de,Ee*K,(Ue+be/j.locationSize*Ce)*K,oe)}else{if(D.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)m(j.location+se,D.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<j.locationSize;se++)p(j.location+se);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let se=0;se<j.locationSize;se++)b(j.location+se,be/j.locationSize,Ie,de,be*K,be/j.locationSize*se*K,oe)}}else if(U!==void 0){let de=U[Z];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(j.location,de);break;case 3:r.vertexAttrib3fv(j.location,de);break;case 4:r.vertexAttrib4fv(j.location,de);break;default:r.vertexAttrib1fv(j.location,de)}}}}v()}function E(){T();for(let P in n){let I=n[P];for(let V in I){let B=I[V];for(let L in B){let O=B[L];for(let U in O)u(O[U].object),delete O[U];delete B[L]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let V in I){let B=I[V];for(let L in B){let O=B[L];for(let U in O)u(O[U].object),delete O[U];delete B[L]}}delete n[P.id]}function A(P){for(let I in n){let V=n[I];for(let B in V){let L=V[B];if(L[P.id]===void 0)continue;let O=L[P.id];for(let U in O)u(O[U].object),delete O[U];delete L[P.id]}}}function x(P){for(let I in n){let V=n[I],B=P.isInstancedMesh===!0?P.id:0,L=V[B];if(L!==void 0){for(let O in L){let U=L[O];for(let Z in U)u(U[Z].object),delete U[Z];delete L[O]}delete V[B],Object.keys(V).length===0&&delete n[I]}}}function T(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Jv(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function $v(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==pi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ai&&!x)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:E,samples:S}}function Kv(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Di,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let v=s?0:n,b=v*4,M=m.clippingState||null;l.value=M,M=u(g,h,b,f);for(let E=0;E!==b;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,M=f;b!==_;++b,M+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ey(r){let e=[],t=[],n=[],i=r,s=r-Ur+1+zp.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ur?l=zp[a-r+Ur-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),b=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,x=S>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(T,_*g*S),b.set(h,p*g*S);let R=[S,S,S,S,S,S];M.set(R,m*g*S)}let E=new zn;E.setAttribute("position",new En(v,_)),E.setAttribute("uv",new En(b,p)),E.setAttribute("faceIndex",new En(M,m)),n.push(new Rn(E,null)),i>Ur&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gp(r,e,t){let n=new Kn(r,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ty(r,e,t){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ny(r,e,t){let n=new Float32Array(ls),i=new W(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Hp(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Wp(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function iy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===$l||f===Kl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new zc(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===$l||f===Kl,_=f===Dr||f===as;if(g||_){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new kc(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new kc(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===$l?h.mapping=Dr:f===Kl&&(h.mapping=as),h}function l(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ry(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Al("WebGLRenderer: "+n+" extension not supported."),i}}}function sy(r,e,t,n){let i={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let v=f.array;_=f.version;for(let b=0,M=v.length;b<M;b+=3){let E=v[b+0],S=v[b+1],A=v[b+2];h.push(E,S,S,A,A,E)}}else{let v=g.array;_=g.version;for(let b=0,M=v.length/3-1;b<M;b+=3){let E=b+0,S=b+1,A=b+2;h.push(E,S,S,A,A,E)}}let p=new(g.count>=65535?Va:za)(h,1);p.version=_;let m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ay(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function oy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ly(r,e,t){let n=new WeakMap,i=new Ot;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let M=o.attributes.position.count*b,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*E*4*d),A=new Ba(S,M,E,d);A.type=Ai,A.needsUpdate=!0;let x=b*4;for(let R=0;R<d;R++){let P=p[R],I=m[R],V=v[R],B=M*E*4*R;for(let L=0;L<P.count;L++){let O=L*x;f===!0&&(i.fromBufferAttribute(P,L),S[B+O+0]=i.x,S[B+O+1]=i.y,S[B+O+2]=i.z,S[B+O+3]=0),g===!0&&(i.fromBufferAttribute(I,L),S[B+O+4]=i.x,S[B+O+5]=i.y,S[B+O+6]=i.z,S[B+O+7]=0),_===!0&&(i.fromBufferAttribute(V,L),S[B+O+8]=i.x,S[B+O+9]=i.y,S[B+O+10]=i.z,S[B+O+11]=V.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new ft(M,E)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function cy(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}function hy(r,e,t,n,i){let s=new Kn(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new tr(e,t):void 0}),a=new Kn(e,t,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),o=new zn;o.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new An([0,2,0,0,2,0],2));let l=new Nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Rn(o,l),u=new Ja(-1,1,1,-1,0,1),d=null,h=null,f=!1,g,_=null,p=[],m=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let M=0;M<p.length;M++){let E=p[M];E.setSize&&E.setSize(v,b)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;let b=s.width,M=s.height;for(let E=0;E<p.length;E++){let S=p[E];S.setSize&&S.setSize(b,M)}},this.begin=function(v,b){if(f||v.toneMapping===wi&&p.length===0)return!1;if(_=b,b!==null){let M=b.width,E=b.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return m===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=wi,!0},this.hasRenderPass=function(){return m},this.end=function(v,b){v.toneMapping=g,f=!0;let M=s,E=a;for(let S=0;S<p.length;S++){let A=p[S];if(A.enabled!==!1&&(A.render(v,E,M,b),A.needsSwap!==!1)){let x=M;M=E,E=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},ot.getTransfer(d)===mt&&(l.defines.SRGB_TRANSFER="");let S=uy[h];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}function ra(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Xp[i];if(s===void 0&&(s=new Float32Array(i),Xp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hc(r,e){let t=qp[e];t===void 0&&(t=new Int32Array(e),qp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function py(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function my(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function gy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Jp.set(n),r.uniformMatrix2fv(this.addr,!1,Jp),Qt(t,n)}}function _y(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Zp.set(n),r.uniformMatrix3fv(this.addr,!1,Zp),Qt(t,n)}}function xy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Yp.set(n),r.uniformMatrix4fv(this.addr,!1,Yp),Qt(t,n)}}function vy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function My(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function Sy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function by(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ty(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function wy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function Ey(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function Ay(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?Uc:Fc,s=jh):s=um,t.setTexture2D(e||s,i)}function Cy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fm,i)}function Ry(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dm,i)}function Py(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hm,i)}function Iy(r){switch(r){case 5126:return fy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return xy;case 5124:case 35670:return vy;case 35667:case 35671:return yy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return Ty;case 36295:return wy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Py}}function Dy(r,e){r.uniform1fv(this.addr,e)}function Ly(r,e){let t=ra(e,this.size,2);r.uniform2fv(this.addr,t)}function Ny(r,e){let t=ra(e,this.size,3);r.uniform3fv(this.addr,t)}function Fy(r,e){let t=ra(e,this.size,4);r.uniform4fv(this.addr,t)}function Uy(r,e){let t=ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Oy(r,e){let t=ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function By(r,e){let t=ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ky(r,e){r.uniform1iv(this.addr,e)}function zy(r,e){r.uniform2iv(this.addr,e)}function Vy(r,e){r.uniform3iv(this.addr,e)}function Gy(r,e){r.uniform4iv(this.addr,e)}function Hy(r,e){r.uniform1uiv(this.addr,e)}function Wy(r,e){r.uniform2uiv(this.addr,e)}function Xy(r,e){r.uniform3uiv(this.addr,e)}function qy(r,e){r.uniform4uiv(this.addr,e)}function Yy(r,e,t){let n=this.cache,i=e.length,s=Hc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=jh:a=um;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Zy(r,e,t){let n=this.cache,i=e.length,s=Hc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||fm,s[a])}function Jy(r,e,t){let n=this.cache,i=e.length,s=Hc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||dm,s[a])}function $y(r,e,t){let n=this.cache,i=e.length,s=Hc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hm,s[a])}function Ky(r){switch(r){case 5126:return Dy;case 35664:return Ly;case 35665:return Ny;case 35666:return Fy;case 35674:return Uy;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Hy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return $y}}function $p(r,e){r.seq.push(e),r.map[e.id]=e}function Qy(r,e,t){let n=r.name,i=n.length;for(Kh.lastIndex=0;;){let s=Kh.exec(n),a=Kh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$p(t,c===void 0?new ef(o,r,e):new tf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new nf(o),$p(t,d)),t=d}}}function Kp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function tM(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function nM(r){ot._getMatrix(Qp,ot.workingColorSpace,r);let e=`mat3( ${Qp.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case Fa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+tM(r.getShaderSource(e),o)}else return s}function iM(r,e){let t=nM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sM(r,e){let t=rM[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aM(){ot.getLuminanceCoefficients(Bc);let r=Bc.x.toFixed(4),e=Bc.y.toFixed(4),t=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function lM(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cM(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function uo(r){return r!==""}function em(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function rf(r){return r.replace(uM,fM)}function fM(r,e){let t=Qe[e];if(t===void 0){let n=hM.get(e);if(n!==void 0)t=Qe[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rf(t)}function nm(r){return r.replace(dM,pM)}function pM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function im(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gM(r){return mM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function xM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_M[r.envMapMode]||"ENVMAP_TYPE_CUBE"}function yM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}function SM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MM[r.combine]||"ENVMAP_BLENDING_NONE"}function bM(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function TM(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gM(t),c=xM(t),u=yM(t),d=SM(t),h=bM(t),f=oM(t),g=lM(s),_=i.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`)):(p=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),m=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==wi?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,iM("linearToOutputTexel",t.outputColorSpace),aM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),a=rf(a),a=em(a,t),a=tm(a,t),o=rf(o),o=em(o,t),o=tm(o,t),a=nm(a),o=nm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+p+a,M=v+m+o,E=Kp(i,i.VERTEX_SHADER,b),S=Kp(i,i.FRAGMENT_SHADER,M);i.attachShader(_,E),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(E)||"",B=i.getShaderInfoLog(S)||"",L=I.trim(),O=V.trim(),U=B.trim(),Z=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,S);else{let D=jp(i,E,"vertex"),de=jp(i,S,"fragment");Ve("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+D+`
`+de)}else L!==""?ke("WebGLProgram: Program Info Log:",L):(O===""||U==="")&&(j=!1);j&&(P.diagnostics={runnable:Z,programLog:L,vertexShader:{log:O,prefix:p},fragmentShader:{log:U,prefix:m}})}i.deleteShader(E),i.deleteShader(S),x=new ia(i,_),T=cM(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,jy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}function EM(r){return r===Fr||r===so||r===ao}function AM(r,e,t,n,i,s){let a=new qs,o=new sf,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,P,I,V){let B=P.fog,L=I.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||O,U),j=Z&&Z.mapping===ja?Z.image.height:null,D=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let de=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,be=de!==void 0?de.length:0,Xe=0;L.morphAttributes.position!==void 0&&(Xe=1),L.morphAttributes.normal!==void 0&&(Xe=2),L.morphAttributes.color!==void 0&&(Xe=3);let Oe,Ie,K,oe;if(D){let ue=zi[D];Oe=ue.vertexShader,Ie=ue.fragmentShader}else Oe=x.vertexShader,Ie=x.fragmentShader,o.update(x),K=o.getVertexShaderID(x),oe=o.getFragmentShaderID(x);let se=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,je=!!x.map,Te=!!x.matcap,ze=!!Z,Ke=!!x.aoMap,Be=!!x.lightMap,X=!!x.bumpMap,at=!!x.normalMap,It=!!x.displacementMap,F=!!x.emissiveMap,Ze=!!x.metalnessMap,We=!!x.roughnessMap,lt=x.anisotropy>0,pe=x.clearcoat>0,$e=x.dispersion>0,C=x.iridescence>0,y=x.sheen>0,z=x.transmission>0,J=lt&&!!x.anisotropyMap,ee=pe&&!!x.clearcoatMap,he=pe&&!!x.clearcoatNormalMap,ne=pe&&!!x.clearcoatRoughnessMap,Y=C&&!!x.iridescenceMap,Q=C&&!!x.iridescenceThicknessMap,ge=y&&!!x.sheenColorMap,Se=y&&!!x.sheenRoughnessMap,fe=!!x.specularMap,le=!!x.specularColorMap,me=!!x.specularIntensityMap,Ge=z&&!!x.transmissionMap,qe=z&&!!x.thicknessMap,N=!!x.gradientMap,ae=!!x.alphaMap,$=x.alphaTest>0,xe=!!x.alphaHash,ce=!!x.extensions,te=wi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=r.toneMapping);let re={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:Ie,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:Te,envMap:ze,envMapMode:ze&&Z.mapping,envMapCubeUVHeight:j,aoMap:Ke,lightMap:Be,bumpMap:X,normalMap:at,displacementMap:It,emissiveMap:F,normalMapObjectSpace:at&&x.normalMapType===Ep,normalMapTangentSpace:at&&x.normalMapType===Nh,packedNormalMap:at&&x.normalMapType===Nh&&EM(x.normalMap.format),metalnessMap:Ze,roughnessMap:We,anisotropy:lt,anisotropyMap:J,clearcoat:pe,clearcoatMap:ee,clearcoatNormalMap:he,clearcoatRoughnessMap:ne,dispersion:$e,iridescence:C,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:ge,sheenRoughnessMap:Se,specularMap:fe,specularColorMap:le,specularIntensityMap:me,transmission:z,transmissionMap:Ge,thicknessMap:qe,gradientMap:N,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:$,alphaHash:xe,combine:x.combine,mapUv:je&&g(x.map.channel),aoMapUv:Ke&&g(x.aoMap.channel),lightMapUv:Be&&g(x.lightMap.channel),bumpMapUv:X&&g(x.bumpMap.channel),normalMapUv:at&&g(x.normalMap.channel),displacementMapUv:It&&g(x.displacementMap.channel),emissiveMapUv:F&&g(x.emissiveMap.channel),metalnessMapUv:Ze&&g(x.metalnessMap.channel),roughnessMapUv:We&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ee&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:me&&g(x.specularIntensityMap.channel),transmissionMapUv:Ge&&g(x.transmissionMap.channel),thicknessMapUv:qe&&g(x.thicknessMap.channel),alphaMapUv:ae&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(at||lt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(je||ae),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&at===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:F&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(T,x),v(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function b(x){let T=f[x.type],R;if(T){let P=zi[T];R=Bp.clone(P.uniforms)}else R=x.uniforms;return R}function M(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new TM(r,T,x,i),c.push(R),u.set(T,R)),R}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:M,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:A}}function CM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function RM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,p,m){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=m),e++,v}function l(h,f,g,_,p,m){let v=o(h,f,g,_,p,m);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function c(h,f,g,_,p,m){let v=o(h,f,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||RM),n.length>1&&n.sort(f||rm),i.length>1&&i.sort(f||rm)}function d(){for(let h=e,f=r.length;h<f;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function PM(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new sm,r.set(n,[a])):i>=s.length?(a=new sm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function IM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new dt};break;case"SpotLight":t={position:new W,direction:new W,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function DM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function NM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FM(r){let e=new IM,t=DM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let i=new W,s=new Ut,a=new Ut;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,b=0,M=0,E=0,S=0,A=0;c.sort(NM);for(let T=0,R=c.length;T<R;T++){let P=c[T],I=P.color,V=P.intensity,B=P.distance,L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fr?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*V,d+=I.g*V,h+=I.b*V;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],V);A++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let U=P.shadow,Z=t.get(P);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=O,f++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(I).multiplyScalar(V),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[_]=O;let U=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,U.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[_]=U.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=L,M++}_++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(I).multiplyScalar(V),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=O,p++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let U=P.shadow,Z=t.get(P);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,Z.shadowCameraNear=U.camera.near,Z.shadowCameraFar=U.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=O,g++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(V),O.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[m]=O,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==E||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=E,x.numLightProbes=A,n.version=LM++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let b=c[m];if(b.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function am(r){let e=new FM(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function UM(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new am(r),e.set(i,[o])):s>=a.length?(o=new am(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function VM(r,e,t){let n=new Ga,i=new ft,s=new ft,a=new Ot,o=new Fl,l=new Ul,c={},u=t.maxTextureSize,d={[er]:Pn,[Pn]:er,[di]:di},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:OM,fragmentShader:BM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new zn;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Rn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let m=this.type;this.render=function(S,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===ip&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qa);let T=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Oi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let V=m!==this.type;V&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(L=>L.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,L=S.length;B<L;B++){let O=S[B],U=O.shadow;if(U===void 0){ke("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let Z=U.getFrameExtents();i.multiply(Z),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,U.mapSize.y=s.y));let j=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=j,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Qs){if(O.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Kn(i.x,i.y,{format:Fr,type:Bi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new tr(i.x,i.y,Ai),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=Ni,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an}else O.isPointLight?(U.map=new zc(i.x),U.map.depthTexture=new Ll(i.x,Ei)):(U.map=new Kn(i.x,i.y),U.map.depthTexture=new tr(i.x,i.y,Ei)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=Ni,this.type===Qa?(U.map.depthTexture.compareFunction=j?Uc:Fc,U.map.depthTexture.minFilter=cn,U.map.depthTexture.magFilter=cn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an);U.camera.updateProjectionMatrix()}let D=U.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<D;de++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,de),r.clear();else{de===0&&(r.setRenderTarget(U.map),r.clear());let be=U.getViewport(de);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),I.viewport(a)}if(O.isPointLight){let be=U.camera,Xe=U.matrix,Oe=O.distance||be.far;Oe!==be.far&&(be.far=Oe,be.updateProjectionMatrix()),co.setFromMatrixPosition(O.matrixWorld),be.position.copy(co),Qh.copy(be.position),Qh.add(kM[de]),be.up.copy(zM[de]),be.lookAt(Qh),be.updateMatrixWorld(),Xe.makeTranslation(-co.x,-co.y,-co.z),om.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),U._frustum.setFromProjectionMatrix(om,be.coordinateSystem,be.reversedDepth)}else U.updateMatrices(O);n=U.getFrustum(),M(A,x,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Qs&&v(U,x),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,R,P)};function v(S,A){let x=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Kn(i.x,i.y,{format:Fr,type:Bi})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,x,f,_,null)}function b(S,A,x,T){let R=null,P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=R.uuid,V=A.uuid,B=c[I];B===void 0&&(B={},c[I]=B);let L=B[V];L===void 0&&(L=R.clone(),B[V]=L,A.addEventListener("dispose",E)),R=L}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Qs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=r.properties.get(R);I.light=x}return R}function M(S,A,x,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Qs)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let V=e.update(S),B=S.material;if(Array.isArray(B)){let L=V.groups;for(let O=0,U=L.length;O<U;O++){let Z=L[O],j=B[Z.materialIndex];if(j&&j.visible){let D=b(S,j,T,R);S.onBeforeShadow(r,S,A,x,V,D,Z),r.renderBufferDirect(x,null,V,D,S,Z),S.onAfterShadow(r,S,A,x,V,D,Z)}}}else if(B.visible){let L=b(S,B,T,R);S.onBeforeShadow(r,S,A,x,V,L,null),r.renderBufferDirect(x,null,V,L,S,null),S.onAfterShadow(r,S,A,x,V,L,null)}}let I=S.children;for(let V=0,B=I.length;V<B;V++)M(I[V],A,x,T,R)}function E(S){S.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function GM(r,e){function t(){let N=!1,ae=new Ot,$=null,xe=new Ot(0,0,0,0);return{setMask:function(ce){$!==ce&&!N&&(r.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){N=ce},setClear:function(ce,te,re,ue,Ne){Ne===!0&&(ce*=ue,te*=ue,re*=ue),ae.set(ce,te,re,ue),xe.equals(ae)===!1&&(r.clearColor(ce,te,re,ue),xe.copy(ae))},reset:function(){N=!1,$=null,xe.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,$=null,xe=null,ce=null;return{setReversed:function(te){if(ae!==te){let re=e.get("EXT_clip_control");te?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),ae=te;let ue=ce;ce=null,this.setClear(ue)}},getReversed:function(){return ae},setTest:function(te){te?se(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(te){$!==te&&!N&&(r.depthMask(te),$=te)},setFunc:function(te){if(ae&&(te=Up[te]),xe!==te){switch(te){case _l:r.depthFunc(r.NEVER);break;case xl:r.depthFunc(r.ALWAYS);break;case vl:r.depthFunc(r.LESS);break;case is:r.depthFunc(r.LEQUAL);break;case yl:r.depthFunc(r.EQUAL);break;case Ml:r.depthFunc(r.GEQUAL);break;case Sl:r.depthFunc(r.GREATER);break;case bl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=te}},setLocked:function(te){N=te},setClear:function(te){ce!==te&&(ce=te,ae&&(te=1-te),r.clearDepth(te))},reset:function(){N=!1,$=null,xe=null,ce=null,ae=!1}}}function i(){let N=!1,ae=null,$=null,xe=null,ce=null,te=null,re=null,ue=null,Ne=null;return{setTest:function(ie){N||(ie?se(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(ie){ae!==ie&&!N&&(r.stencilMask(ie),ae=ie)},setFunc:function(ie,Fe,Re){($!==ie||xe!==Fe||ce!==Re)&&(r.stencilFunc(ie,Fe,Re),$=ie,xe=Fe,ce=Re)},setOp:function(ie,Fe,Re){(te!==ie||re!==Fe||ue!==Re)&&(r.stencilOp(ie,Fe,Re),te=ie,re=Fe,ue=Re)},setLocked:function(ie){N=ie},setClear:function(ie){Ne!==ie&&(r.clearStencil(ie),Ne=ie)},reset:function(){N=!1,ae=null,$=null,xe=null,ce=null,te=null,re=null,ue=null,Ne=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,b=null,M=null,E=null,S=null,A=null,x=new dt(0,0,0),T=0,R=!1,P=null,I=null,V=null,B=null,L=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Z=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=Z>=2);let D=null,de={},be=r.getParameter(r.SCISSOR_BOX),Xe=r.getParameter(r.VIEWPORT),Oe=new Ot().fromArray(be),Ie=new Ot().fromArray(Xe);function K(N,ae,$,xe){let ce=new Uint8Array(4),te=r.createTexture();r.bindTexture(N,te),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<$;re++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ae+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return te}let oe={};oe[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(is),X(!1),at(mh),se(r.CULL_FACE),Ke(Oi);function se(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function Ee(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function Ue(N,ae){return h[N]!==ae?(r.bindFramebuffer(N,ae),h[N]=ae,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(N,ae){let $=g,xe=!1;if(N){$=f.get(ae),$===void 0&&($=[],f.set(ae,$));let ce=N.textures;if($.length!==ce.length||$[0]!==r.COLOR_ATTACHMENT0){for(let te=0,re=ce.length;te<re;te++)$[te]=r.COLOR_ATTACHMENT0+te;$.length=ce.length,xe=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,xe=!0);xe&&r.drawBuffers($)}function je(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Te={[Tr]:r.FUNC_ADD,[sp]:r.FUNC_SUBTRACT,[ap]:r.FUNC_REVERSE_SUBTRACT};Te[op]=r.MIN,Te[lp]=r.MAX;let ze={[cp]:r.ZERO,[up]:r.ONE,[hp]:r.SRC_COLOR,[ml]:r.SRC_ALPHA,[_p]:r.SRC_ALPHA_SATURATE,[mp]:r.DST_COLOR,[dp]:r.DST_ALPHA,[fp]:r.ONE_MINUS_SRC_COLOR,[gl]:r.ONE_MINUS_SRC_ALPHA,[gp]:r.ONE_MINUS_DST_COLOR,[pp]:r.ONE_MINUS_DST_ALPHA,[xp]:r.CONSTANT_COLOR,[vp]:r.ONE_MINUS_CONSTANT_COLOR,[yp]:r.CONSTANT_ALPHA,[Mp]:r.ONE_MINUS_CONSTANT_ALPHA};function Ke(N,ae,$,xe,ce,te,re,ue,Ne,ie){if(N===Oi){p===!0&&(Ee(r.BLEND),p=!1);return}if(p===!1&&(se(r.BLEND),p=!0),N!==rp){if(N!==m||ie!==R){if((v!==Tr||E!==Tr)&&(r.blendEquation(r.FUNC_ADD),v=Tr,E=Tr),ie)switch(N){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case js:r.blendFunc(r.ONE,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _h:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",N);break}else switch(N){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",N);break}b=null,M=null,S=null,A=null,x.set(0,0,0),T=0,m=N,R=ie}return}ce=ce||ae,te=te||$,re=re||xe,(ae!==v||ce!==E)&&(r.blendEquationSeparate(Te[ae],Te[ce]),v=ae,E=ce),($!==b||xe!==M||te!==S||re!==A)&&(r.blendFuncSeparate(ze[$],ze[xe],ze[te],ze[re]),b=$,M=xe,S=te,A=re),(ue.equals(x)===!1||Ne!==T)&&(r.blendColor(ue.r,ue.g,ue.b,Ne),x.copy(ue),T=Ne),m=N,R=!1}function Be(N,ae){N.side===di?Ee(r.CULL_FACE):se(r.CULL_FACE);let $=N.side===Pn;ae&&($=!$),X($),N.blending===ns&&N.transparent===!1?Ke(Oi):Ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let xe=N.stencilWrite;o.setTest(xe),xe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),F(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(N){P!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),P=N)}function at(N){N!==tp?(se(r.CULL_FACE),N!==I&&(N===mh?r.cullFace(r.BACK):N===np?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),I=N}function It(N){N!==V&&(U&&r.lineWidth(N),V=N)}function F(N,ae,$){N?(se(r.POLYGON_OFFSET_FILL),(B!==ae||L!==$)&&(B=ae,L=$,a.getReversed()&&(ae=-ae),r.polygonOffset(ae,$))):Ee(r.POLYGON_OFFSET_FILL)}function Ze(N){N?se(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function We(N){N===void 0&&(N=r.TEXTURE0+O-1),D!==N&&(r.activeTexture(N),D=N)}function lt(N,ae,$){$===void 0&&(D===null?$=r.TEXTURE0+O-1:$=D);let xe=de[$];xe===void 0&&(xe={type:void 0,texture:void 0},de[$]=xe),(xe.type!==N||xe.texture!==ae)&&(D!==$&&(r.activeTexture($),D=$),r.bindTexture(N,ae||oe[N]),xe.type=N,xe.texture=ae)}function pe(){let N=de[D];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $e(){try{r.compressedTexImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function y(){try{r.texSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function z(){try{r.texSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function J(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ee(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function he(){try{r.texStorage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ne(){try{r.texStorage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Y(){try{r.texImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Q(){try{r.texImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ge(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Se(N,ae){d[N]!==ae&&(r.pixelStorei(N,ae),d[N]=ae)}function fe(N){Oe.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Oe.copy(N))}function le(N){Ie.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Ie.copy(N))}function me(N,ae){let $=c.get(ae);$===void 0&&($=new WeakMap,c.set(ae,$));let xe=$.get(N);xe===void 0&&(xe=r.getUniformBlockIndex(ae,N.name),$.set(N,xe))}function Ge(N,ae){let xe=c.get(ae).get(N);l.get(ae)!==xe&&(r.uniformBlockBinding(ae,xe,N.__bindingPointIndex),l.set(ae,xe))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},D=null,de={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,b=null,M=null,E=null,S=null,A=null,x=new dt(0,0,0),T=0,R=!1,P=null,I=null,V=null,B=null,L=null,Oe.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Ee,bindFramebuffer:Ue,drawBuffers:Ce,useProgram:je,setBlending:Ke,setMaterial:Be,setFlipSided:X,setCullFace:at,setLineWidth:It,setPolygonOffset:F,setScissorTest:Ze,activeTexture:We,bindTexture:lt,unbindTexture:pe,compressedTexImage2D:$e,compressedTexImage3D:C,texImage2D:Y,texImage3D:Q,pixelStorei:Se,getParameter:ge,updateUBOMapping:me,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:ne,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:J,compressedTexSubImage3D:ee,scissor:fe,viewport:le,reset:qe}}function HM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return g?new OffscreenCanvas(C,y):Oa("canvas")}function p(C,y,z){let J=1,ee=$e(C);if((ee.width>z||ee.height>z)&&(J=z/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(J*ee.width),ne=Math.floor(J*ee.height);h===void 0&&(h=_(he,ne));let Y=y?_(he,ne):h;return Y.width=he,Y.height=ne,Y.getContext("2d").drawImage(C,0,0,he,ne),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+he+"x"+ne+")."),Y}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function v(C){r.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,y,z,J,ee,he=!1){if(C!==null){if(r[C]!==void 0)return r[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne;J&&(ne=e.get("EXT_texture_norm16"),ne||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===r.RED&&(z===r.FLOAT&&(Y=r.R32F),z===r.HALF_FLOAT&&(Y=r.R16F),z===r.UNSIGNED_BYTE&&(Y=r.R8),z===r.UNSIGNED_SHORT&&ne&&(Y=ne.R16_EXT),z===r.SHORT&&ne&&(Y=ne.R16_SNORM_EXT)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.R8UI),z===r.UNSIGNED_SHORT&&(Y=r.R16UI),z===r.UNSIGNED_INT&&(Y=r.R32UI),z===r.BYTE&&(Y=r.R8I),z===r.SHORT&&(Y=r.R16I),z===r.INT&&(Y=r.R32I)),y===r.RG&&(z===r.FLOAT&&(Y=r.RG32F),z===r.HALF_FLOAT&&(Y=r.RG16F),z===r.UNSIGNED_BYTE&&(Y=r.RG8),z===r.UNSIGNED_SHORT&&ne&&(Y=ne.RG16_EXT),z===r.SHORT&&ne&&(Y=ne.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RG8UI),z===r.UNSIGNED_SHORT&&(Y=r.RG16UI),z===r.UNSIGNED_INT&&(Y=r.RG32UI),z===r.BYTE&&(Y=r.RG8I),z===r.SHORT&&(Y=r.RG16I),z===r.INT&&(Y=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),z===r.UNSIGNED_INT&&(Y=r.RGB32UI),z===r.BYTE&&(Y=r.RGB8I),z===r.SHORT&&(Y=r.RGB16I),z===r.INT&&(Y=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),z===r.UNSIGNED_INT&&(Y=r.RGBA32UI),z===r.BYTE&&(Y=r.RGBA8I),z===r.SHORT&&(Y=r.RGBA16I),z===r.INT&&(Y=r.RGBA32I)),y===r.RGB&&(z===r.UNSIGNED_SHORT&&ne&&(Y=ne.RGB16_EXT),z===r.SHORT&&ne&&(Y=ne.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),y===r.RGBA){let Q=he?Fa:ot.getTransfer(ee);z===r.FLOAT&&(Y=r.RGBA32F),z===r.HALF_FLOAT&&(Y=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Y=Q===mt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ne&&(Y=ne.RGBA16_EXT),z===r.SHORT&&ne&&(Y=ne.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(C,y){let z;return C?y===null||y===Ei||y===ta?z=r.DEPTH24_STENCIL8:y===Ai?z=r.DEPTH32F_STENCIL8:y===ea&&(z=r.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===ta?z=r.DEPTH_COMPONENT24:y===Ai?z=r.DEPTH_COMPONENT32F:y===ea&&(z=r.DEPTH_COMPONENT16),z}function S(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),P(y)}function T(C){let y=n.get(C);if(y.__webglInit===void 0)return;let z=C.source,J=f.get(z);if(J){let ee=J[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(J).length===0&&f.delete(z)}n.remove(C)}function R(C){let y=n.get(C);r.deleteTexture(y.__webglTexture);let z=C.source,J=f.get(z);delete J[y.__cacheKey],a.memory.textures--}function P(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ee=0;ee<y.__webglFramebuffer[J].length;ee++)r.deleteFramebuffer(y.__webglFramebuffer[J][ee]);else r.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)r.deleteFramebuffer(y.__webglFramebuffer[J]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let J=0,ee=z.length;J<ee;J++){let he=n.get(z[J]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(C)}let I=0;function V(){I=0}function B(){return I}function L(C){I=C}function O(){let C=I;return C>=i.maxTextures&&ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function U(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Z(C,y){let z=n.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let J=C.image;if(J===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function j(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Ee(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function D(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Ee(z,C,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function de(C,y){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Ue(z,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}let be={[Tl]:r.REPEAT,[Li]:r.CLAMP_TO_EDGE,[wl]:r.MIRRORED_REPEAT},Xe={[an]:r.NEAREST,[Tp]:r.NEAREST_MIPMAP_NEAREST,[eo]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Ql]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},Oe={[Ap]:r.NEVER,[Dp]:r.ALWAYS,[Cp]:r.LESS,[Fc]:r.LEQUAL,[Rp]:r.EQUAL,[Uc]:r.GEQUAL,[Pp]:r.GREATER,[Ip]:r.NOTEQUAL};function Ie(C,y){if(y.type===Ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===cn||y.magFilter===Ql||y.magFilter===eo||y.magFilter===Lr||y.minFilter===cn||y.minFilter===Ql||y.minFilter===eo||y.minFilter===Lr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,be[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,be[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,be[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Xe[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Xe[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==eo&&y.minFilter!==Lr||y.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function K(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let J=y.source,ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));let he=U(y);if(he!==C.__cacheKey){ee[he]===void 0&&(ee[he]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[he].usedTimes++;let ne=ee[C.__cacheKey];ne!==void 0&&(ee[C.__cacheKey].usedTimes--,ne.usedTimes===0&&R(y)),C.__cacheKey=he,C.__webglTexture=ee[he].texture}return z}function oe(C,y,z){return Math.floor(Math.floor(C/z)/y)}function se(C,y,z,J){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,z,J,y.data);else{he.sort((Se,fe)=>Se.start-fe.start);let ne=0;for(let Se=1;Se<he.length;Se++){let fe=he[ne],le=he[Se],me=fe.start+fe.count,Ge=oe(le.start,y.width,4),qe=oe(fe.start,y.width,4);le.start<=me+1&&Ge===qe&&oe(le.start+le.count-1,y.width,4)===Ge?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++ne,he[ne]=le)}he.length=ne+1;let Y=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),ge=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Se=0,fe=he.length;Se<fe;Se++){let le=he[Se],me=Math.floor(le.start/4),Ge=Math.ceil(le.count/4),qe=me%y.width,N=Math.floor(me/y.width),ae=Ge,$=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,qe,N,ae,$,z,J,y.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Y),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,ge)}}function Ee(C,y,z){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);let ee=K(C,y),he=y.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+z);let ne=n.get(he);if(he.version!==ne.__version||ee===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let $=ot.getPrimaries(ot.workingColorSpace),xe=y.colorSpace===nr?null:ot.getPrimaries(y.colorSpace),ce=y.colorSpace===nr||$===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=p(y.image,!1,i.maxTextureSize);Q=pe(y,Q);let ge=s.convert(y.format,y.colorSpace),Se=s.convert(y.type),fe=M(y.internalFormat,ge,Se,y.normalized,y.colorSpace,y.isVideoTexture);Ie(J,y);let le,me=y.mipmaps,Ge=y.isVideoTexture!==!0,qe=ne.__version===void 0||ee===!0,N=he.dataReady,ae=S(y,Q);if(y.isDepthTexture)fe=E(y.format===Nr,y.type),qe&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,fe,Q.width,Q.height,0,ge,Se,null));else if(y.isDataTexture)if(me.length>0){Ge&&qe&&t.texStorage2D(r.TEXTURE_2D,ae,fe,me[0].width,me[0].height);for(let $=0,xe=me.length;$<xe;$++)le=me[$],Ge?N&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,le.width,le.height,ge,Se,le.data):t.texImage2D(r.TEXTURE_2D,$,fe,le.width,le.height,0,ge,Se,le.data);y.generateMipmaps=!1}else Ge?(qe&&t.texStorage2D(r.TEXTURE_2D,ae,fe,Q.width,Q.height),N&&se(y,Q,ge,Se)):t.texImage2D(r.TEXTURE_2D,0,fe,Q.width,Q.height,0,ge,Se,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,fe,me[0].width,me[0].height,Q.depth);for(let $=0,xe=me.length;$<xe;$++)if(le=me[$],y.format!==pi)if(ge!==null)if(Ge){if(N)if(y.layerUpdates.size>0){let ce=zh(le.width,le.height,y.format,y.type);for(let te of y.layerUpdates){let re=le.data.subarray(te*ce/le.data.BYTES_PER_ELEMENT,(te+1)*ce/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,te,le.width,le.height,1,ge,re)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,Q.depth,ge,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,fe,le.width,le.height,Q.depth,0,le.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,Q.depth,ge,Se,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,fe,le.width,le.height,Q.depth,0,ge,Se,le.data)}else{Ge&&qe&&t.texStorage2D(r.TEXTURE_2D,ae,fe,me[0].width,me[0].height);for(let $=0,xe=me.length;$<xe;$++)le=me[$],y.format!==pi?ge!==null?Ge?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(r.TEXTURE_2D,$,fe,le.width,le.height,0,le.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?N&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,le.width,le.height,ge,Se,le.data):t.texImage2D(r.TEXTURE_2D,$,fe,le.width,le.height,0,ge,Se,le.data)}else if(y.isDataArrayTexture)if(Ge){if(qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,fe,Q.width,Q.height,Q.depth),N)if(y.layerUpdates.size>0){let $=zh(Q.width,Q.height,y.format,y.type);for(let xe of y.layerUpdates){let ce=Q.data.subarray(xe*$/Q.data.BYTES_PER_ELEMENT,(xe+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Q.width,Q.height,1,ge,Se,ce)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Se,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,ge,Se,Q.data);else if(y.isData3DTexture)Ge?(qe&&t.texStorage3D(r.TEXTURE_3D,ae,fe,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Se,Q.data)):t.texImage3D(r.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,ge,Se,Q.data);else if(y.isFramebufferTexture){if(qe)if(Ge)t.texStorage2D(r.TEXTURE_2D,ae,fe,Q.width,Q.height);else{let $=Q.width,xe=Q.height;for(let ce=0;ce<ae;ce++)t.texImage2D(r.TEXTURE_2D,ce,fe,$,xe,0,ge,Se,null),$>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let $=r.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),d.add(y),$.onpaint=ue=>{let Ne=ue.changedElements;for(let ie of d)Ne.includes(ie.image)&&(ie.needsUpdate=!0)},$.requestPaint();return}let xe=0,ce=r.RGBA,te=r.RGBA,re=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,xe,ce,te,re,Q),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(me.length>0){if(Ge&&qe){let $=$e(me[0]);t.texStorage2D(r.TEXTURE_2D,ae,fe,$.width,$.height)}for(let $=0,xe=me.length;$<xe;$++)le=me[$],Ge?N&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ge,Se,le):t.texImage2D(r.TEXTURE_2D,$,fe,ge,Se,le);y.generateMipmaps=!1}else if(Ge){if(qe){let $=$e(Q);t.texStorage2D(r.TEXTURE_2D,ae,fe,$.width,$.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Se,Q)}else t.texImage2D(r.TEXTURE_2D,0,fe,ge,Se,Q);m(y)&&v(J),ne.__version=he.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ue(C,y,z){if(y.image.length!==6)return;let J=K(C,y),ee=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);let he=n.get(ee);if(ee.version!==he.__version||J===!0){t.activeTexture(r.TEXTURE0+z);let ne=ot.getPrimaries(ot.workingColorSpace),Y=y.colorSpace===nr?null:ot.getPrimaries(y.colorSpace),Q=y.colorSpace===nr||ne===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ge=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!ge&&!Se?fe[te]=p(y.image[te],!0,i.maxCubemapSize):fe[te]=Se?y.image[te].image:y.image[te],fe[te]=pe(y,fe[te]);let le=fe[0],me=s.convert(y.format,y.colorSpace),Ge=s.convert(y.type),qe=M(y.internalFormat,me,Ge,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,ae=he.__version===void 0||J===!0,$=ee.dataReady,xe=S(y,le);Ie(r.TEXTURE_CUBE_MAP,y);let ce;if(ge){N&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,qe,le.width,le.height);for(let te=0;te<6;te++){ce=fe[te].mipmaps;for(let re=0;re<ce.length;re++){let ue=ce[re];y.format!==pi?me!==null?N?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ue.width,ue.height,me,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,qe,ue.width,ue.height,0,ue.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ue.width,ue.height,me,Ge,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,qe,ue.width,ue.height,0,me,Ge,ue.data)}}}else{if(ce=y.mipmaps,N&&ae){ce.length>0&&xe++;let te=$e(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,qe,te.width,te.height)}for(let te=0;te<6;te++)if(Se){N?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,me,Ge,fe[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,fe[te].width,fe[te].height,0,me,Ge,fe[te].data);for(let re=0;re<ce.length;re++){let Ne=ce[re].image[te].image;N?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,Ne.width,Ne.height,me,Ge,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,qe,Ne.width,Ne.height,0,me,Ge,Ne.data)}}else{N?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me,Ge,fe[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,me,Ge,fe[te]);for(let re=0;re<ce.length;re++){let ue=ce[re];N?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,me,Ge,ue.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,qe,me,Ge,ue.image[te])}}}m(y)&&v(r.TEXTURE_CUBE_MAP),he.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ce(C,y,z,J,ee,he){let ne=s.convert(z.format,z.colorSpace),Y=s.convert(z.type),Q=M(z.internalFormat,ne,Y,z.normalized,z.colorSpace),ge=n.get(y),Se=n.get(z);if(Se.__renderTarget=y,!ge.__hasExternalTextures){let fe=Math.max(1,y.width>>he),le=Math.max(1,y.height>>he);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,he,Q,fe,le,y.depth,0,ne,Y,null):t.texImage2D(ee,he,Q,fe,le,0,ne,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),We(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ee,Se.__webglTexture,0,Ze(y)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ee,Se.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(C,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){let J=y.depthTexture,ee=J&&J.isDepthTexture?J.type:null,he=E(y.stencilBuffer,ee),ne=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze(y),he,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze(y),he,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,he,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,C)}else{let J=y.textures;for(let ee=0;ee<J.length;ee++){let he=J[ee],ne=s.convert(he.format,he.colorSpace),Y=s.convert(he.type),Q=M(he.internalFormat,ne,Y,he.normalized,he.colorSpace);We(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze(y),Q,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze(y),Q,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Q,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(C,y,z){let J=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,y.depthTexture);let ge=s.convert(y.depthTexture.format),Se=s.convert(y.depthTexture.type),fe;y.depthTexture.format===Ni?fe=r.DEPTH_COMPONENT24:y.depthTexture.format===Nr&&(fe=r.DEPTH24_STENCIL8);for(let le=0;le<6;le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,fe,y.width,y.height,0,ge,Se,null)}}else Z(y.depthTexture,0);let he=ee.__webglTexture,ne=Ze(y),Y=J?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,Q=y.depthTexture.format===Nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ni)We(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Y,he,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,Q,Y,he,0);else if(y.depthTexture.format===Nr)We(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Y,he,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,Q,Y,he,0);else throw new Error("Unknown depthTexture format")}function ze(C){let y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)Te(y.__webglFramebuffer[J],C,J);else{let J=C.texture.mipmaps;J&&J.length>0?Te(y.__webglFramebuffer[0],C,0):Te(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=r.createRenderbuffer(),je(y.__webglDepthbuffer[J],C,!1);else{let ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,he)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),je(y.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(C,y,z){let J=n.get(C);y!==void 0&&Ce(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ze(C)}function Be(C){let y=C.texture,z=n.get(C),J=n.get(y);C.addEventListener("dispose",x);let ee=C.textures,he=C.isWebGLCubeRenderTarget===!0,ne=ee.length>1;if(ne||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,a.memory.textures++),he){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[Y][Q]=r.createFramebuffer()}else z.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)z.__webglFramebuffer[Y]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ne)for(let Y=0,Q=ee.length;Y<Q;Y++){let ge=n.get(ee[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){let Q=ee[Y];z.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let ge=s.convert(Q.format,Q.colorSpace),Se=s.convert(Q.type),fe=M(Q.internalFormat,ge,Se,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),le=Ze(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,le,fe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),je(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Ce(z.__webglFramebuffer[Y][Q],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Ce(z.__webglFramebuffer[Y],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(y)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let Y=0,Q=ee.length;Y<Q;Y++){let ge=ee[Y],Se=n.get(ge),fe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Se.__webglTexture),Ie(fe,ge),Ce(z.__webglFramebuffer,C,ge,r.COLOR_ATTACHMENT0+Y,fe,0),m(ge)&&v(fe)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Y,J.__webglTexture),Ie(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Ce(z.__webglFramebuffer[Q],C,y,r.COLOR_ATTACHMENT0,Y,Q);else Ce(z.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,Y,0);m(y)&&v(Y),t.unbindTexture()}C.depthBuffer&&ze(C)}function X(C){let y=C.textures;for(let z=0,J=y.length;z<J;z++){let ee=y[z];if(m(ee)){let he=b(C),ne=n.get(ee).__webglTexture;t.bindTexture(he,ne),v(he),t.unbindTexture()}}}let at=[],It=[];function F(C){if(C.samples>0){if(We(C)===!1){let y=C.textures,z=C.width,J=C.height,ee=r.COLOR_BUFFER_BIT,he=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=n.get(C),Y=y.length>1;if(Y)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ge]);let Se=n.get(y[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,z,J,0,0,z,J,ee,r.NEAREST),l===!0&&(at.length=0,It.length=0,at.push(r.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(he),It.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,It)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ge]);let Se=n.get(y[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ze(C){return Math.min(i.maxSamples,C.samples)}function We(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function pe(C,y){let z=C.colorSpace,J=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Na&&z!==nr&&(ot.getTransfer(z)===mt?(J!==pi||ee!==ti)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",z)),y}function $e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.getTextureUnits=B,this.setTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=D,this.setTextureCube=de,this.rebindTextures=Ke,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WM(r,e){function t(n,i=nr){let s,a=ot.getTransfer(i);if(n===ti)return r.UNSIGNED_BYTE;if(n===ec)return r.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return r.BYTE;if(n===Ch)return r.SHORT;if(n===ea)return r.UNSIGNED_SHORT;if(n===jl)return r.INT;if(n===Ei)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===Ih)return r.ALPHA;if(n===Dh)return r.RGB;if(n===pi)return r.RGBA;if(n===Ni)return r.DEPTH_COMPONENT;if(n===Nr)return r.DEPTH_STENCIL;if(n===Lh)return r.RED;if(n===nc)return r.RED_INTEGER;if(n===Fr)return r.RG;if(n===ic)return r.RG_INTEGER;if(n===rc)return r.RGBA_INTEGER;if(n===to||n===no||n===io||n===ro)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===ac||n===oc||n===lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===uc||n===hc||n===fc||n===dc||n===so||n===pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cc||n===uc)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fc)return s.COMPRESSED_R11_EAC;if(n===dc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===so)return s.COMPRESSED_RG11_EAC;if(n===pc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Tc||n===wc||n===Ec||n===Ac||n===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Pc||n===Ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Rc)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Lc||n===ao||n===Nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ta?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}function ZM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Oh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,M=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JM(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let M=b.program;n.uniformBlockBinding(v,M)}function c(v,b){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(v,E);let S=e.render.frame;s[v.id]!==S&&(h(v),s[v.id]=S)}function u(v){let b=d();v.__bindingPointIndex=b;let M=r.createBuffer(),E=v.__size,S=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=i[v.id],M=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let S=0,A=M.length;S<A;S++){let x=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,R=x.length;T<R;T++){let P=x[T];if(f(P,S,T,E)===!0){let I=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],B=0;for(let L=0;L<V.length;L++){let O=V[L],U=_(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,I+B,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):ArrayBuffer.isView(O)?P.__data.set(new O.constructor(O.buffer,O.byteOffset,P.__data.length)):(O.toArray(P.__data,B),B+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,b,M,E){let S=v.value,A=b+"_"+M;if(E[A]===void 0)return typeof S=="number"||typeof S=="boolean"?E[A]=S:ArrayBuffer.isView(S)?E[A]=S.slice():E[A]=S.clone(),!0;{let x=E[A];if(typeof S=="number"||typeof S=="boolean"){if(x!==S)return E[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(x.equals(S)===!1)return x.copy(S),!0}}return!1}function g(v){let b=v.uniforms,M=0,E=16;for(let A=0,x=b.length;A<x;A++){let T=Array.isArray(b[A])?b[A]:[b[A]];for(let R=0,P=T.length;R<P;R++){let I=T[R],V=Array.isArray(I.value)?I.value:[I.value];for(let B=0,L=V.length;B<L;B++){let O=V[B],U=_(O),Z=M%E,j=Z%U.boundary,D=Z+j;M+=j,D!==0&&E-D<U.storage&&(M+=E-D),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=U.storage}}}let S=M%E;return S>0&&(M+=E-S),v.__size=M,v.__cache={},this}function _(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){let b=v.target;b.removeEventListener("dispose",p);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}function KM(){return ki===null&&(ki=new Dl($M,16,16,Fr,Bi),ki.name="DFG_LUT",ki.minFilter=cn,ki.magFilter=cn,ki.wrapS=Li,ki.wrapT=Li,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var f0,d0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,T0,w0,E0,A0,C0,R0,P0,I0,D0,L0,N0,F0,U0,O0,B0,k0,z0,V0,G0,H0,W0,X0,q0,Y0,Z0,J0,$0,K0,Q0,j0,ex,tx,nx,ix,rx,sx,ax,ox,lx,cx,ux,hx,fx,dx,px,mx,gx,_x,xx,vx,yx,Mx,Sx,bx,Tx,wx,Ex,Ax,Cx,Rx,Px,Ix,Dx,Lx,Nx,Fx,Ux,Ox,Bx,kx,zx,Vx,Gx,Hx,Wx,Xx,qx,Yx,Zx,Jx,$x,Kx,Qx,jx,ev,tv,nv,iv,rv,sv,av,ov,lv,cv,uv,hv,fv,dv,pv,mv,gv,_v,xv,vv,yv,Mv,Sv,bv,Tv,wv,Ev,Av,Cv,Rv,Pv,Iv,Dv,Lv,Nv,Fv,Uv,Ov,Bv,kv,zv,Vv,Gv,Hv,Wv,Xv,Qe,ye,zi,Oc,qv,cm,Ur,zp,ls,Qv,lo,Vp,Yh,Zh,Jh,$h,jv,kc,zc,uy,um,jh,hm,fm,dm,Xp,qp,Yp,Zp,Jp,ef,tf,nf,Kh,ia,jy,eM,Qp,rM,Bc,uM,hM,dM,mM,_M,vM,MM,wM,sf,af,LM,OM,BM,kM,zM,om,co,Qh,XM,qM,of,lf,YM,pm,$M,ki,Vc,mm=gr(()=>{qh();qh();f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,rx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ux=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hx=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Kx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yv=`#define DISTANCE
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
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`uniform float scale;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,Cv=`#define LAMBERT
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
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Pv=`#define MATCAP
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
}`,Iv=`#define MATCAP
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
}`,Dv=`#define NORMAL
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
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
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
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Uv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Bv=`#define TOON
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
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,zv=`uniform float size;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Hv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Wv=`uniform float rotation;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:f0,alphahash_pars_fragment:d0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:x0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:M0,begin_vertex:S0,beginnormal_vertex:b0,bsdfs:T0,iridescence_fragment:w0,bumpmap_pars_fragment:E0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:P0,color_fragment:I0,color_pars_fragment:D0,color_pars_vertex:L0,color_vertex:N0,common:F0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:k0,emissivemap_fragment:z0,emissivemap_pars_fragment:V0,colorspace_fragment:G0,colorspace_pars_fragment:H0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:rx,envmap_vertex:Z0,fog_vertex:J0,fog_pars_vertex:$0,fog_fragment:K0,fog_pars_fragment:Q0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:sx,lights_toon_pars_fragment:ax,lights_phong_fragment:ox,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:ux,lights_fragment_begin:hx,lights_fragment_maps:fx,lights_fragment_end:dx,lightprobes_pars_fragment:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:xx,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Tx,morphinstance_vertex:wx,morphcolor_vertex:Ex,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Rx,normal_fragment_begin:Px,normal_fragment_maps:Ix,normal_pars_fragment:Dx,normal_pars_vertex:Lx,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:kx,opaque_fragment:zx,packing:Vx,premultiplied_alpha_fragment:Gx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Jx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:Qx,skinning_pars_vertex:jx,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:av,transmission_pars_fragment:ov,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,worldpos_vertex:hv,background_vert:fv,background_frag:dv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:xv,depth_frag:vv,distance_vert:yv,distance_frag:Mv,equirect_vert:Sv,equirect_frag:bv,linedashed_vert:Tv,linedashed_frag:wv,meshbasic_vert:Ev,meshbasic_frag:Av,meshlambert_vert:Cv,meshlambert_frag:Rv,meshmatcap_vert:Pv,meshmatcap_frag:Iv,meshnormal_vert:Dv,meshnormal_frag:Lv,meshphong_vert:Nv,meshphong_frag:Fv,meshphysical_vert:Uv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:kv,points_vert:zv,points_frag:Vv,shadow_vert:Gv,shadow_frag:Hv,sprite_vert:Wv,sprite_frag:Xv},ye={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},zi={basic:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:xn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:xn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:xn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:xn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:xn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:xn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:xn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:xn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:xn([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:xn([ye.lights,ye.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zi.physical={uniforms:xn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};Oc={r:0,b:0,g:0},qv=new Ut,cm=new Ye;cm.set(-1,0,0,0,1,0,0,0,1);Ur=4,zp=[.125,.215,.35,.446,.526,.582],ls=20,Qv=256,lo=new Ja,Vp=new dt,Yh=null,Zh=0,Jh=0,$h=!1,jv=new W,kc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=jv}=s;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,Zh,Jh),this._renderer.xr.enabled=$h,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Bi,format:pi,colorSpace:Na,depthBuffer:!1},i=Gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ey(s)),this._blurMaterial=ny(s,e,t),this._ggxMaterial=ty(s,e,t)}return i}_compileMaterial(e){let t=new Rn(new zn,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,i,s){let l=new _n(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Vp),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new Ks,new Cr({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(Vp),m=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let E=this._cubeSize;na(i,M*E,b>2?E:0,E,E),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Dr||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ur?n-g+Ur:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,na(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,lo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,na(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,lo)}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[i];d.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ls;p>ls&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);let m=[],v=0;for(let A=0;A<ls;++A){let x=A/_,T=Math.exp(-x*x/2);m.push(T),A===0?v+=T:A<p&&(v+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;let M=this._sizeLods[i],E=3*M*(i>b-Ur?i-b+Ur:0),S=4*(this._cubeSize-M);na(t,E,S,3*M,2*M),l.setRenderTarget(t),l.render(d,lo)}};zc=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ks(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Oi});s.uniforms.tEquirect.value=t;let a=new Rn(i,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=cn),new Yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};uy={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[wh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};um=new Cn,jh=new tr(1,1),hm=new Ba,fm=new Il,dm=new Wa,Xp=[],qp=[],Yp=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);ef=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}},tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ky(t.type)}},nf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;ia=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Qy(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};jy=37297,eM=0;Qp=new Ye;rM={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[Sh]:"ACESFilmic",[Th]:"AgX",[wh]:"Neutral",[bh]:"Custom"};Bc=new W;uM=/^[ \t]*#include +<([\w\d./]+)>/gm;hM=new Map;dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;mM={[Qa]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};_M={[Dr]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};vM={[as]:"ENVMAP_MODE_REFRACTION"};MM={[xh]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};wM=0,sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new af(e),t.set(e,n)),n}},af=class{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}};LM=0;OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kM=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],zM=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],om=new Ut,co=new W,Qh=new W;XM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qM=`
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

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:XM,fragmentShader:qM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lf=class extends Fi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new of,m={},v=t.getContextAttributes(),b=null,M=null,E=[],S=[],A=new ft,x=null,T=new _n;T.viewport=new Ot;let R=new _n;R.viewport=new Ot;let P=[T,R],I=new Zl,V=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=E[K];return oe===void 0&&(oe=new Ys,E[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=E[K];return oe===void 0&&(oe=new Ys,E[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=E[K];return oe===void 0&&(oe=new Ys,E[K]=oe),oe.getHandSpace()};function L(K){let oe=S.indexOf(K.inputSource);if(oe===-1)return;let se=E[oe];se!==void 0&&(se.update(K.inputSource,K.frame,c||a),se.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",U);for(let K=0;K<E.length;K++){let oe=S[K];oe!==null&&(S[K]=null,E[K].disconnect(oe))}V=null,B=null,p.reset();for(let K in m)delete m[K];e.setRenderTarget(b),f=null,h=null,d=null,i=null,M=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",O),i.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ee=null,Ue=null;v.depth&&(Ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?Nr:Ni,Ee=v.stencil?ta:Ei);let Ce={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Kn(h.textureWidth,h.textureHeight,{format:pi,type:ti,depthTexture:new tr(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Kn(f.framebufferWidth,f.framebufferHeight,{format:pi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(K){for(let oe=0;oe<K.removed.length;oe++){let se=K.removed[oe],Ee=S.indexOf(se);Ee>=0&&(S[Ee]=null,E[Ee].disconnect(se))}for(let oe=0;oe<K.added.length;oe++){let se=K.added[oe],Ee=S.indexOf(se);if(Ee===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=S.length){S.push(se),Ee=Ce;break}else if(S[Ce]===null){S[Ce]=se,Ee=Ce;break}if(Ee===-1)break}let Ue=E[Ee];Ue&&Ue.connect(se)}}let Z=new W,j=new W;function D(K,oe,se){Z.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);let Ee=Z.distanceTo(j),Ue=oe.projectionMatrix.elements,Ce=se.projectionMatrix.elements,je=Ue[14]/(Ue[10]-1),Te=Ue[14]/(Ue[10]+1),ze=(Ue[9]+1)/Ue[5],Ke=(Ue[9]-1)/Ue[5],Be=(Ue[8]-1)/Ue[0],X=(Ce[8]+1)/Ce[0],at=je*Be,It=je*X,F=Ee/(-Be+X),Ze=F*-Be;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(F),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let We=je+F,lt=Te+F,pe=at-Ze,$e=It+(Ee-Ze),C=ze*Te/lt*We,y=Ke*Te/lt*We;K.projectionMatrix.makePerspective(pe,$e,C,y,We,lt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let oe=K.near,se=K.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(se=p.depthFar)),I.near=R.near=T.near=oe,I.far=R.far=T.far=se,(V!==I.near||B!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,B=I.far),I.layers.mask=K.layers.mask|6,T.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let Ee=K.parent,Ue=I.cameras;de(I,Ee);for(let Ce=0;Ce<Ue.length;Ce++)de(Ue[Ce],Ee);Ue.length===2?D(I,T,R):I.projectionMatrix.copy(T.projectionMatrix),be(K,I,Ee)};function be(K,oe,se){se===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(K){return m[K]};let Xe=null;function Oe(K,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){let se=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ee=!1;se.length!==I.cameras.length&&(I.cameras.length=0,Ee=!0);for(let Te=0;Te<se.length;Te++){let ze=se[Te],Ke=null;if(f!==null)Ke=f.getViewport(ze);else{let X=d.getViewSubImage(h,ze);Ke=X.viewport,Te===0&&(e.setRenderTargetTextures(M,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(M))}let Be=P[Te];Be===void 0&&(Be=new _n,Be.layers.enable(Te),Be.viewport=new Ot,P[Te]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(I.matrix.copy(Be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ee===!0&&I.cameras.push(Be)}let Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Te=d.getDepthInformation(se[0]);Te&&Te.isValid&&Te.texture&&p.init(Te,i.renderState)}if(Ue&&Ue.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Te=0;Te<se.length;Te++){let ze=se[Te].camera;if(ze){let Ke=m[ze];Ke||(Ke=new Xa,m[ze]=Ke);let Be=d.getCameraImage(ze);Ke.sourceTexture=Be}}}}for(let se=0;se<E.length;se++){let Ee=S[se],Ue=E[se];Ee!==null&&Ue!==void 0&&Ue.update(Ee,oe,c||a)}Xe&&Xe(K,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ie=new lm;Ie.setAnimationLoop(Oe),this.setAnimationLoop=function(K){Xe=K},this.dispose=function(){}}},YM=new Ut,pm=new Ye;pm.set(-1,0,0,0,1,0,0,0,1);$M=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;Vc=class{constructor(e={}){let{canvas:t=Lp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ti}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([rc,ic,nc]),m=new Set([ti,Ei,ea,ta,ec,tc]),v=new Uint32Array(4),b=new Int32Array(4),M=new W,E=null,S=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,I=null;this._outputColorSpace=$n;let V=0,B=0,L=null,O=-1,U=null,Z=new Ot,j=new Ot,D=null,de=new dt(0),be=0,Xe=t.width,Oe=t.height,Ie=1,K=null,oe=null,se=new Ot(0,0,Xe,Oe),Ee=new Ot(0,0,Xe,Oe),Ue=!1,Ce=new Ga,je=!1,Te=!1,ze=new Ut,Ke=new W,Be=new Ot,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function It(){return L===null?Ie:1}let F=n;function Ze(w,k){return t.getContext(w,k)}try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ue,!1),F===null){let k="webgl2";if(F=Ze(k,w),F===null)throw Ze(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ve("WebGLRenderer: "+w.message),w}let We,lt,pe,$e,C,y,z,J,ee,he,ne,Y,Q,ge,Se,fe,le,me,Ge,qe,N,ae,$;function xe(){We=new ry(F),We.init(),N=new WM(F,We),lt=new $v(F,We,e,N),pe=new GM(F,We),lt.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),$e=new oy(F),C=new CM,y=new HM(F,We,pe,C,lt,N,$e),z=new iy(R),J=new h0(F),ae=new Zv(F,J),ee=new sy(F,J,$e,ae),he=new cy(F,ee,J,ae,$e),me=new ly(F,lt,y),Se=new Kv(C),ne=new AM(R,z,We,lt,ae,Se),Y=new ZM(R,C),Q=new PM,ge=new UM(We),le=new Yv(R,z,pe,he,g,l),fe=new VM(R,he,lt),$=new JM(F,$e,lt,pe),Ge=new Jv(F,We,$e),qe=new ay(F,We,$e),$e.programs=ne.programs,R.capabilities=lt,R.extensions=We,R.properties=C,R.renderLists=Q,R.shadowMap=fe,R.state=pe,R.info=$e}xe(),_!==ti&&(T=new hy(_,t.width,t.height,i,s));let ce=new lf(R,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=We.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=We.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(w){w!==void 0&&(Ie=w,this.setSize(Xe,Oe,!1))},this.getSize=function(w){return w.set(Xe,Oe)},this.setSize=function(w,k,q=!0){if(ce.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=w,Oe=k,t.width=Math.floor(w*Ie),t.height=Math.floor(k*Ie),q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Xe*Ie,Oe*Ie).floor()},this.setDrawingBufferSize=function(w,k,q){Xe=w,Oe=k,Ie=q,t.width=Math.floor(w*q),t.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(_===ti){Ve("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,k,q,G){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,k,q,G),pe.viewport(Z.copy(se).multiplyScalar(Ie).round())},this.getScissor=function(w){return w.copy(Ee)},this.setScissor=function(w,k,q,G){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,k,q,G),pe.scissor(j.copy(Ee).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){pe.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,q=!0){let G=0;if(w){let H=!1;if(L!==null){let _e=L.texture.format;H=p.has(_e)}if(H){let _e=L.texture.type,ve=m.has(_e),Me=le.getClearColor(),Pe=le.getClearAlpha(),De=Me.r,Je=Me.g,et=Me.b;ve?(v[0]=De,v[1]=Je,v[2]=et,v[3]=Pe,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=De,b[1]=Je,b[2]=et,b[3]=Pe,F.clearBufferiv(F.COLOR,0,b))}else G|=F.COLOR_BUFFER_BIT}k&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),le.dispose(),Q.dispose(),ge.dispose(),C.dispose(),z.dispose(),he.dispose(),ae.dispose(),$.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",it),ce.removeEventListener("sessionend",Ct),Rt.stop()};function te(w){w.preventDefault(),Uh("WebGLRenderer: Context Lost."),P=!0}function re(){Uh("WebGLRenderer: Context Restored."),P=!1;let w=$e.autoReset,k=fe.enabled,q=fe.autoUpdate,G=fe.needsUpdate,H=fe.type;xe(),$e.autoReset=w,fe.enabled=k,fe.autoUpdate=q,fe.needsUpdate=G,fe.type=H}function ue(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){let k=w.target;k.removeEventListener("dispose",Ne),ie(k)}function ie(w){Fe(w),C.remove(w)}function Fe(w){let k=C.get(w).programs;k!==void 0&&(k.forEach(function(q){ne.releaseProgram(q)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,G,H,_e){k===null&&(k=X);let ve=H.isMesh&&H.matrixWorld.determinant()<0,Me=nn(w,k,q,G,H);pe.setMaterial(G,ve);let Pe=q.index,De=1;if(G.wireframe===!0){if(Pe=ee.getWireframeAttribute(q),Pe===void 0)return;De=2}let Je=q.drawRange,et=q.attributes.position,Le=Je.start*De,xt=(Je.start+Je.count)*De;_e!==null&&(Le=Math.max(Le,_e.start*De),xt=Math.min(xt,(_e.start+_e.count)*De)),Pe!==null?(Le=Math.max(Le,0),xt=Math.min(xt,Pe.count)):et!=null&&(Le=Math.max(Le,0),xt=Math.min(xt,et.count));let Gt=xt-Le;if(Gt<0||Gt===1/0)return;ae.setup(H,G,Me,q,Pe);let Ft,yt=Ge;if(Pe!==null&&(Ft=J.get(Pe),yt=qe,yt.setIndex(Ft)),H.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*It()),yt.setMode(F.LINES)):yt.setMode(F.TRIANGLES);else if(H.isLine){let pn=G.linewidth;pn===void 0&&(pn=1),pe.setLineWidth(pn*It()),H.isLineSegments?yt.setMode(F.LINES):H.isLineLoop?yt.setMode(F.LINE_LOOP):yt.setMode(F.LINE_STRIP)}else H.isPoints?yt.setMode(F.POINTS):H.isSprite&&yt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(We.get("WEBGL_multi_draw"))yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let pn=H._multiDrawStarts,we=H._multiDrawCounts,Yn=H._multiDrawCount,ht=Pe?J.get(Pe).bytesPerElement:1,hi=C.get(G).currentProgram.getUniforms();for(let Pi=0;Pi<Yn;Pi++)hi.setValue(F,"_gl_DrawID",Pi),yt.render(pn[Pi]/ht,we[Pi])}else if(H.isInstancedMesh)yt.renderInstances(Le,Gt,H.count);else if(q.isInstancedBufferGeometry){let pn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,we=Math.min(q.instanceCount,pn);yt.renderInstances(Le,Gt,we)}else yt.render(Le,Gt)};function Re(w,k,q){w.transparent===!0&&w.side===di&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,tn(w,k,q),w.side=er,w.needsUpdate=!0,tn(w,k,q),w.side=di):tn(w,k,q)}this.compile=function(w,k,q=null){q===null&&(q=w),S=ge.get(q),S.init(k),x.push(S),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights();let G=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let _e=H.material;if(_e)if(Array.isArray(_e))for(let ve=0;ve<_e.length;ve++){let Me=_e[ve];Re(Me,q,H),G.add(Me)}else Re(_e,q,H),G.add(_e)}),S=x.pop(),G},this.compileAsync=function(w,k,q=null){let G=this.compile(w,k,q);return new Promise(H=>{function _e(){if(G.forEach(function(ve){C.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){H(w);return}setTimeout(_e,10)}We.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let He=null;function Xt(w){He&&He(w)}function it(){Rt.stop()}function Ct(){Rt.start()}let Rt=new lm;Rt.setAnimationLoop(Xt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(w){He=w,ce.setAnimationLoop(w),w===null?Rt.stop():Rt.start()},ce.addEventListener("sessionstart",it),ce.addEventListener("sessionend",Ct),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(w,k);let q=ce.enabled===!0&&ce.isPresenting===!0,G=T!==null&&(L===null||q)&&T.begin(R,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,k,L),S=ge.get(w,x.length),S.init(k),S.state.textureUnits=y.getTextureUnits(),x.push(S),ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ce.setFromProjectionMatrix(ze,Ti,k.reversedDepth),Te=this.localClippingEnabled,je=Se.init(this.clippingPlanes,Te),E=Q.get(w,A.length),E.init(),A.push(E),ce.enabled===!0&&ce.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();ve!==null&&Tt(ve,k,-1/0,R.sortObjects)}Tt(w,k,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(K,oe),at=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,at&&le.addToRenderList(E,w),this.info.render.frame++,je===!0&&Se.beginShadows();let H=S.state.shadowsArray;if(fe.render(H,w,k),je===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&T.hasRenderPass())===!1){let ve=E.opaque,Me=E.transmissive;if(S.setupLights(),k.isArrayCamera){let Pe=k.cameras;if(Me.length>0)for(let De=0,Je=Pe.length;De<Je;De++){let et=Pe[De];pt(ve,Me,w,et)}at&&le.render(w);for(let De=0,Je=Pe.length;De<Je;De++){let et=Pe[De];vt(E,w,et,et.viewport)}}else Me.length>0&&pt(ve,Me,w,k),at&&le.render(w),vt(E,w,k)}L!==null&&B===0&&(y.updateMultisampleRenderTarget(L),y.updateRenderTargetMipmap(L)),G&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,k),ae.resetDefaultState(),O=-1,U=null,x.pop(),x.length>0?(S=x[x.length-1],y.setTextureUnits(S.state.textureUnits),je===!0&&Se.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,I!==null&&I.renderEnd()};function Tt(w,k,q,G){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ce.intersectsSprite(w)){G&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ze);let ve=he.update(w),Me=w.material;Me.visible&&E.push(w,ve,Me,q,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ce.intersectsObject(w))){let ve=he.update(w),Me=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Be.copy(ve.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(ze)),Array.isArray(Me)){let Pe=ve.groups;for(let De=0,Je=Pe.length;De<Je;De++){let et=Pe[De],Le=Me[et.materialIndex];Le&&Le.visible&&E.push(w,ve,Le,q,Be.z,et)}}else Me.visible&&E.push(w,ve,Me,q,Be.z,null)}}let _e=w.children;for(let ve=0,Me=_e.length;ve<Me;ve++)Tt(_e[ve],k,q,G)}function vt(w,k,q,G){let{opaque:H,transmissive:_e,transparent:ve}=w;S.setupLightsView(q),je===!0&&Se.setGlobalState(R.clippingPlanes,q),G&&pe.viewport(Z.copy(G)),H.length>0&&dn(H,k,q),_e.length>0&&dn(_e,k,q),ve.length>0&&dn(ve,k,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function pt(w,k,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let Le=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new Kn(1,1,{generateMipmaps:!0,type:Le?Bi:ti,minFilter:Lr,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let _e=S.state.transmissionRenderTarget[G.id],ve=G.viewport||Z;_e.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Pe=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(de),be=R.getClearAlpha(),be<1&&R.setClearColor(16777215,.5),R.clear(),at&&le.render(q);let Je=R.toneMapping;R.toneMapping=wi;let et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),je===!0&&Se.setGlobalState(R.clippingPlanes,G),dn(w,q,G),y.updateMultisampleRenderTarget(_e),y.updateRenderTargetMipmap(_e),We.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let xt=0,Gt=k.length;xt<Gt;xt++){let Ft=k[xt],{object:yt,geometry:pn,material:we,group:Yn}=Ft;if(we.side===di&&yt.layers.test(G.layers)){let ht=we.side;we.side=Pn,we.needsUpdate=!0,wt(yt,q,G,pn,we,Yn),we.side=ht,we.needsUpdate=!0,Le=!0}}Le===!0&&(y.updateMultisampleRenderTarget(_e),y.updateRenderTargetMipmap(_e))}R.setRenderTarget(Me,Pe,De),R.setClearColor(de,be),et!==void 0&&(G.viewport=et),R.toneMapping=Je}function dn(w,k,q){let G=k.isScene===!0?k.overrideMaterial:null;for(let H=0,_e=w.length;H<_e;H++){let ve=w[H],{object:Me,geometry:Pe,group:De}=ve,Je=ve.material;Je.allowOverride===!0&&G!==null&&(Je=G),Me.layers.test(q.layers)&&wt(Me,k,q,Pe,Je,De)}}function wt(w,k,q,G,H,_e){w.onBeforeRender(R,k,q,G,H,_e),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(R,k,q,G,w,_e),H.transparent===!0&&H.side===di&&H.forceSinglePass===!1?(H.side=Pn,H.needsUpdate=!0,R.renderBufferDirect(q,k,G,H,w,_e),H.side=er,H.needsUpdate=!0,R.renderBufferDirect(q,k,G,H,w,_e),H.side=di):R.renderBufferDirect(q,k,G,H,w,_e),w.onAfterRender(R,k,q,G,H,_e)}function tn(w,k,q){k.isScene!==!0&&(k=X);let G=C.get(w),H=S.state.lights,_e=S.state.shadowsArray,ve=H.state.version,Me=ne.getParameters(w,H.state,_e,k,q,S.state.lightProbeGridArray),Pe=ne.getProgramCacheKey(Me),De=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,G.fog=k.fog;let Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=z.get(w.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Ne),De=new Map,G.programs=De);let et=De.get(Pe);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===ve)return qt(w,Me),et}else Me.uniforms=ne.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,q,Me),w.onBeforeCompile(Me,R),et=ne.acquireProgram(Me,Pe),De.set(Pe,et),G.uniforms=Me.uniforms;let Le=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=Se.uniform),qt(w,Me),G.needsLights=Cs(w),G.lightsStateVersion=ve,G.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function qn(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=ia.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function qt(w,k){let q=C.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function $t(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let q=0,G=w.length;q<G;q++){let H=w[q];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function nn(w,k,q,G,H){k.isScene!==!0&&(k=X),y.resetTextureUnits();let _e=k.fog,ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?k.environment:null,Me=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ot.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=z.get(G.envMap||ve,Pe),Je=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,Gt=!!q.morphAttributes.color,Ft=wi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=R.toneMapping);let yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pn=yt!==void 0?yt.length:0,we=C.get(G),Yn=S.state.lights;if(je===!0&&(Te===!0||w!==U)){let Et=w===U&&G.id===O;Se.setState(G,w,Et)}let ht=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Yn.state.version||we.outputColorSpace!==Me||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==De||G.fog===!0&&we.fog!==_e||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Se.numPlanes||we.numIntersection!==Se.numIntersection)||we.vertexAlphas!==Je||we.vertexTangents!==et||we.morphTargets!==Le||we.morphNormals!==xt||we.morphColors!==Gt||we.toneMapping!==Ft||we.morphTargetsCount!==pn||!!we.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,we.__version=G.version);let hi=we.currentProgram;ht===!0&&(hi=tn(G,k,H),I&&G.isNodeMaterial&&I.onUpdateProgram(G,hi,we));let Pi=!1,dr=!1,Rs=!1,Mt=hi.getUniforms(),Ht=we.uniforms;if(pe.useProgram(hi.program)&&(Pi=!0,dr=!0,Rs=!0),G.id!==O&&(O=G.id,dr=!0),we.needsLights){let Et=$t(S.state.lightProbeGridArray,H);we.lightProbeGrid!==Et&&(we.lightProbeGrid=Et,dr=!0)}if(Pi||U!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(F,"projectionMatrix",w.projectionMatrix),Mt.setValue(F,"viewMatrix",w.matrixWorldInverse);let mr=Mt.map.cameraPosition;mr!==void 0&&mr.setValue(F,Ke.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,dr=!0,Rs=!0)}if(we.needsLights&&(Yn.state.directionalShadowMap.length>0&&Mt.setValue(F,"directionalShadowMap",Yn.state.directionalShadowMap,y),Yn.state.spotShadowMap.length>0&&Mt.setValue(F,"spotShadowMap",Yn.state.spotShadowMap,y),Yn.state.pointShadowMap.length>0&&Mt.setValue(F,"pointShadowMap",Yn.state.pointShadowMap,y)),H.isSkinnedMesh){Mt.setOptional(F,H,"bindMatrix"),Mt.setOptional(F,H,"bindMatrixInverse");let Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),Mt.setValue(F,"boneTexture",Et.boneTexture,y))}H.isBatchedMesh&&(Mt.setOptional(F,H,"batchingTexture"),Mt.setValue(F,"batchingTexture",H._matricesTexture,y),Mt.setOptional(F,H,"batchingIdTexture"),Mt.setValue(F,"batchingIdTexture",H._indirectTexture,y),Mt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(F,"batchingColorTexture",H._colorsTexture,y));let pr=q.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&me.update(H,q,hi),(dr||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,Mt.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&k.environment!==null&&(Ht.envMapIntensity.value=k.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=KM()),dr){if(Mt.setValue(F,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Yi(Ht,Rs),_e&&G.fog===!0&&Y.refreshFogUniforms(Ht,_e),Y.refreshMaterialUniforms(Ht,G,Ie,Oe,S.state.transmissionRenderTarget[w.id]),we.needsLights&&we.lightProbeGrid){let Et=we.lightProbeGrid;Ht.probesSH.value=Et.texture,Ht.probesMin.value.copy(Et.boundingBox.min),Ht.probesMax.value.copy(Et.boundingBox.max),Ht.probesResolution.value.copy(Et.resolution)}ia.upload(F,qn(we),Ht,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ia.upload(F,qn(we),Ht,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(F,"center",H.center),Mt.setValue(F,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(F,"normalMatrix",H.normalMatrix),Mt.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let Et=G.uniformsGroups;for(let mr=0,Ps=Et.length;mr<Ps;mr++){let Rd=Et[mr];$.update(Rd,hi),$.bind(Rd,hi)}}return hi}function Yi(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Cs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,k,q){let G=C.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),C.get(w.texture).__webglTexture=k,C.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let q=C.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let rn=F.createFramebuffer();this.setRenderTarget=function(w,k=0,q=0){L=w,V=k,B=q;let G=null,H=!1,_e=!1;if(w){let Me=C.get(w);if(Me.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),Z.copy(w.viewport),j.copy(w.scissor),D=w.scissorTest,pe.viewport(Z),pe.scissor(j),pe.setScissorTest(D),O=-1;return}else if(Me.__webglFramebuffer===void 0)y.setupRenderTarget(w);else if(Me.__hasExternalTextures)y.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Je=w.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&C.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(w)}}let Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(_e=!0);let De=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[k])?G=De[k][q]:G=De[k],H=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?G=C.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[q]:G=De,Z.copy(w.viewport),j.copy(w.scissor),D=w.scissorTest}else Z.copy(se).multiplyScalar(Ie).floor(),j.copy(Ee).multiplyScalar(Ie).floor(),D=Ue;if(q!==0&&(G=rn),pe.bindFramebuffer(F.FRAMEBUFFER,G)&&pe.drawBuffers(w,G),pe.viewport(Z),pe.scissor(j),pe.setScissorTest(D),H){let Me=C.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,q)}else if(_e){let Me=k;for(let Pe=0;Pe<w.textures.length;Pe++){let De=C.get(w.textures[Pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pe,De.__webglTexture,q,Me)}}else if(w!==null&&q!==0){let Me=C.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,q)}O=-1},this.readRenderTargetPixels=function(w,k,q,G,H,_e,ve,Me=0){if(!(w&&w.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){pe.bindFramebuffer(F.FRAMEBUFFER,Pe);try{let De=w.textures[Me],Je=De.format,et=De.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),!lt.textureFormatReadable(Je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(et)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-G&&q>=0&&q<=w.height-H&&F.readPixels(k,q,G,H,N.convert(Je),N.convert(et),_e)}finally{let De=L!==null?C.get(L).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,G,H,_e,ve,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe)if(k>=0&&k<=w.width-G&&q>=0&&q<=w.height-H){pe.bindFramebuffer(F.FRAMEBUFFER,Pe);let De=w.textures[Me],Je=De.format,et=De.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),!lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(k,q,G,H,N.convert(Je),N.convert(et),0);let xt=L!==null?C.get(L).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,xt);let Gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fp(F,Gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.deleteBuffer(Le),F.deleteSync(Gt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,q=0){let G=Math.pow(2,-q),H=Math.floor(w.image.width*G),_e=Math.floor(w.image.height*G),ve=k!==null?k.x:0,Me=k!==null?k.y:0;y.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ve,Me,H,_e),pe.unbindTexture()};let Vt=F.createFramebuffer(),ui=F.createFramebuffer();this.copyTextureToTexture=function(w,k,q=null,G=null,H=0,_e=0){let ve,Me,Pe,De,Je,et,Le,xt,Gt,Ft=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(q!==null)ve=q.max.x-q.min.x,Me=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Je=q.min.y,et=q.isBox3?q.min.z:0;else{let Ht=Math.pow(2,-H);ve=Math.floor(Ft.width*Ht),Me=Math.floor(Ft.height*Ht),w.isDataArrayTexture?Pe=Ft.depth:w.isData3DTexture?Pe=Math.floor(Ft.depth*Ht):Pe=1,De=0,Je=0,et=0}G!==null?(Le=G.x,xt=G.y,Gt=G.z):(Le=0,xt=0,Gt=0);let yt=N.convert(k.format),pn=N.convert(k.type),we;k.isData3DTexture?(y.setTexture3D(k,0),we=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(y.setTexture2DArray(k,0),we=F.TEXTURE_2D_ARRAY):(y.setTexture2D(k,0),we=F.TEXTURE_2D),pe.activeTexture(F.TEXTURE0),pe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),pe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),pe.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Yn=pe.getParameter(F.UNPACK_ROW_LENGTH),ht=pe.getParameter(F.UNPACK_IMAGE_HEIGHT),hi=pe.getParameter(F.UNPACK_SKIP_PIXELS),Pi=pe.getParameter(F.UNPACK_SKIP_ROWS),dr=pe.getParameter(F.UNPACK_SKIP_IMAGES);pe.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),pe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),pe.pixelStorei(F.UNPACK_SKIP_PIXELS,De),pe.pixelStorei(F.UNPACK_SKIP_ROWS,Je),pe.pixelStorei(F.UNPACK_SKIP_IMAGES,et);let Rs=w.isDataArrayTexture||w.isData3DTexture,Mt=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ht=C.get(w),pr=C.get(k),Et=C.get(Ht.__renderTarget),mr=C.get(pr.__renderTarget);pe.bindFramebuffer(F.READ_FRAMEBUFFER,Et.__webglFramebuffer),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let Ps=0;Ps<Pe;Ps++)Rs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(w).__webglTexture,H,et+Ps),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(k).__webglTexture,_e,Gt+Ps)),F.blitFramebuffer(De,Je,ve,Me,Le,xt,ve,Me,F.DEPTH_BUFFER_BIT,F.NEAREST);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||C.has(w)){let Ht=C.get(w),pr=C.get(k);pe.bindFramebuffer(F.READ_FRAMEBUFFER,Vt),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,ui);for(let Et=0;Et<Pe;Et++)Rs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,H,et+Et):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,H),Mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pr.__webglTexture,_e,Gt+Et):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pr.__webglTexture,_e),H!==0?F.blitFramebuffer(De,Je,ve,Me,Le,xt,ve,Me,F.COLOR_BUFFER_BIT,F.NEAREST):Mt?F.copyTexSubImage3D(we,_e,Le,xt,Gt+Et,De,Je,ve,Me):F.copyTexSubImage2D(we,_e,Le,xt,De,Je,ve,Me);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(we,_e,Le,xt,Gt,ve,Me,Pe,yt,pn,Ft.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(we,_e,Le,xt,Gt,ve,Me,Pe,yt,Ft.data):F.texSubImage3D(we,_e,Le,xt,Gt,ve,Me,Pe,yt,pn,Ft):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_e,Le,xt,ve,Me,yt,pn,Ft.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_e,Le,xt,Ft.width,Ft.height,yt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,_e,Le,xt,ve,Me,yt,pn,Ft);pe.pixelStorei(F.UNPACK_ROW_LENGTH,Yn),pe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),pe.pixelStorei(F.UNPACK_SKIP_PIXELS,hi),pe.pixelStorei(F.UNPACK_SKIP_ROWS,Pi),pe.pixelStorei(F.UNPACK_SKIP_IMAGES,dr),_e===0&&k.generateMipmaps&&F.generateMipmap(we),pe.unbindTexture()},this.initRenderTarget=function(w){C.get(w).__webglFramebuffer===void 0&&y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){V=0,B=0,L=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}});function Sm(){if(gm)return;let r=document.getElementById("space-canvas");if(!r)return;gm=!0,ho=new Vc({canvas:r,alpha:!0,antialias:!0}),ho.setSize(window.innerWidth,window.innerHeight),ho.setPixelRatio(window.devicePixelRatio),sa=new ka;let e=new _n(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.z=400,cf=new zn;let t=4e3,n=new Float32Array(t*3);for(let p=0;p<t*3;p++)n[p]=(Math.random()-.5)*1500;cf.setAttribute("position",new En(n,3));let i=()=>{let p=document.createElement("canvas");p.width=16,p.height=16;let m=p.getContext("2d");if(m){let v=m.createRadialGradient(8,8,0,8,8,8);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(.2,"rgba(210,230,255,0.8)"),v.addColorStop(.5,"rgba(100,150,255,0.2)"),v.addColorStop(1,"rgba(0,0,0,0)"),m.fillStyle=v,m.fillRect(0,0,16,16)}return new $s(p)};uf=new Js({size:2,map:i(),transparent:!0,opacity:.9,color:16777215,blending:js,depthWrite:!1}),Wc=new Ha(cf,uf),sa.add(Wc),_m=new qa(.8,0,150,8),xm=new Cr({color:16777215,transparent:!0,opacity:.9,blending:js,depthWrite:!1}),Or=new Rn(_m,xm),sa.add(Or);let s=new W(-10,-5,-8),a=s.clone().normalize();Or.quaternion.setFromUnitVectors(new W(0,1,0),a);let o=()=>{Or.position.set(Math.random()*1e3+800,Math.random()*800+500,(Math.random()-.5)*1e3)};o(),[{name:"Python",color:"#3776AB"},{name:"Rust",color:"#DEA584"},{name:"Go",color:"#00ADD8"},{name:"FastAPI",color:"#009688"}].forEach((p,m)=>{let v=document.createElement("canvas");v.width=256,v.height=256;let b=v.getContext("2d");b&&(b.fillStyle=p.color,b.beginPath(),b.arc(128,128,120,0,Math.PI*2),b.fill(),b.fillStyle="white",b.font="bold 40px Inter, sans-serif",b.textAlign="center",b.textBaseline="middle",b.fillText(p.name,128,128));let M=new $s(v),E=new ss(30,30),S=new Cr({map:M,transparent:!0,opacity:.8,side:di,depthWrite:!1}),A=new Rn(E,S);A.position.set((Math.random()-.5)*400,(Math.random()-.5)*400,(Math.random()-.5)*200-100),sa.add(A),Xc.push(A)});let c=0,u=0,d=new $a,h=new ft;vm=p=>{c=p.clientX/window.innerWidth-.5,u=p.clientY/window.innerHeight-.5},document.addEventListener("mousemove",vm);let f=new Ka,g=new Uint8Array(128),_=()=>{let p=f.getElapsedTime(),m=1;if(window.getAudioAnalyser){let b=window.getAudioAnalyser();if(b){b.getByteFrequencyData(g);let M=0;for(let S=0;S<g.length;S++)M+=g[S];m=1+M/g.length/256*1.5}}uf.size=2*m,Or.scale.set(m,m,m),Wc.rotation.y=p*.005,Wc.rotation.x=p*.002,Or.position.add(s),(Or.position.x<-1500||Or.position.y<-1e3)&&Math.random()<.02&&o(),e.position.x+=(c*50-e.position.x)*.05,e.position.y+=(-u*50-e.position.y)*.05,e.lookAt(sa.position),d.setFromCamera(h,e);let v=d.intersectObjects(Xc);if(Xc.forEach((b,M)=>{b.position.y+=Math.sin(p*2+M)*.2,b.rotation.y=Math.sin(p*.5+M)*.5,b.material.opacity=.6}),v.length>0){let b=v[0].object;b.material.opacity=1,b.scale.set(1.2,1.2,1.2),document.body.style.cursor="pointer"}else Xc.forEach(b=>b.scale.set(1,1,1)),document.body.style.cursor="default";ho.render(sa,e),jM=window.requestAnimationFrame(_)};if(ym=p=>{h.x=p.clientX/window.innerWidth*2-1,h.y=-(p.clientY/window.innerHeight)*2+1},document.addEventListener("mousemove",ym),_(),Mm=()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),ho.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",Mm),window.gsap&&window.ScrollTrigger){let p=window.gsap;p.registerPlugin(window.ScrollTrigger),p.to(e.position,{z:50,ease:"none",scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.5}})}}var gm,jM,sa,ho,cf,uf,Wc,_m,xm,Or,Xc,vm,ym,Mm,bm=gr(()=>{mm();gm=!1,jM=0,Xc=[],vm=null,ym=null,Mm=null});function ir(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Dm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Wn,xo,Cf,un,Pt,gi,bt,xf,eS,tS,Lm,nS,iS,jt,Bt,sr,tu,Hi,Hn,Rf,qc,Nm,yn,rS,sS,Tm,Pf,fs,hf,If,aS,oS,Lt,Vi,vf,Df,ii,$c,Fm,Um,nu,vo,Om,yo,lS,Yc,cS,Lf,kr,yf,Bm,Vn,ff,wm,Zc,Nf,Ff,zr,Uf,In,kt,Dt,ds,uS,Kc,Of,km,zm,Vm,ri,hS,oa,Em,Qc,mo,fS,Gm,iu,Vr,cs,dS,Mf,pS,Am,la,jc,ru,su,Hm,Gi,Wm,Xm,mS,Sf,gS,_S,ca,Cm,xS,mi,go,Gr,bo,hn,vS,bf,qm,yS,_i,Tf,Ym,Zm,wf,Jm,$m,MS,SS,bS,Km,TS,wS,ha,Qm,ES,Rm,ni,fo,aa,jm,eg,St,po,df,tg,ng,Pm,rr,AS,Bf,Mo,Gn,ua,ut,CS,RS,PS,IS,DS,LS,us,ps,ig,pf,mf,kf,So,vn,NS,zf,FS,Vf,Br,Ef,Gf,US,OS,BS,_o,rg,sg,Wt,Hf,ag,kS,zS,au,og,VS,Wf,Xf,GS,HS,WS,qf,Dn,hs,Jc,XS,Im,qS,gf,Af,lg,YS,eu,ZS,JS,_f,Mn,$S,KS,QS,jS,eb,tb,nb,ib,rb,sb,ab,ob,lb,cb,ub,hb,fb,db,Yf=gr(()=>{Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xo={duration:.5,overwrite:!1,delay:0},gi=1e8,bt=1/gi,xf=Math.PI*2,eS=xf/4,tS=0,Lm=Math.sqrt,nS=Math.cos,iS=Math.sin,jt=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},tu=function(e){return typeof e>"u"},Hi=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},Rf=function(){return typeof window<"u"},qc=function(e){return Bt(e)||jt(e)},Nm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yn=Array.isArray,rS=/random\([^)]+\)/g,sS=/,\s*/g,Tm=/(?:-?\.?\d|\.)+/gi,Pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,If=/[+-]=-?[.\d]+/,aS=/[^,'"\[\]\s]+/gi,oS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ii={},$c={},Um=function(e){return($c=oa(e,ii))&&Mn},nu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vo=function(e,t){return!t&&console.warn(e)},Om=function(e,t){return e&&(ii[e]=t)&&$c&&($c[e]=t)||ii},yo=function(){return 0},lS={suppressEvents:!0,isStart:!0,kill:!1},Yc={suppressEvents:!0,kill:!1},cS={suppressEvents:!0},Lf={},kr=[],yf={},Vn={},ff={},wm=30,Zc=[],Nf="",Ff=function(e){var t=e[0],n,i;if(Hi(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zc.length;i--&&!Zc[i].targetTest(t););n=Zc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new kf(e[i],n)))||e.splice(i,1);return e},zr=function(e){return e._gsap||Ff(_i(e))[0]._gsap},Uf=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():tu(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},uS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Kc=function(){var e=kr.length,t=kr.slice(0),n,i;for(yf={},kr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Of=function(e){return!!(e._initted||e._startAt||e.add)},km=function(e,t,n,i){kr.length&&!un&&Kc(),e.render(t,n,i||!!(un&&t<0&&Of(e))),kr.length&&!un&&Kc()},zm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(aS).length<2?t:jt(e)?e.trim():e},Vm=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},oa=function(e,t){for(var n in t)e[n]=t[n];return e},Em=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Qc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},mo=function(e){var t=e.parent||Lt,n=e.keyframes?hS(yn(e.keyframes)):ri;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},fS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Gm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},iu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},dS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mf=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(Yc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},pS=function r(e){return!e||e._ts&&r(e.parent)},Am=function(e){return e._repeat?la(e._tTime,e=e.duration()+e._rDelay)*e:0},la=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ru=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},su=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ru(e),n._dirty||cs(n,e)),e},Hm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jc(e.rawTime(),t),(!t._dur||bo(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Gi=function(e,t,n,i){return t.parent&&Vr(t),t._start=Dt((sr(n)?n:n||e!==Lt?mi(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gm(e,t,"_first","_last",e._sort?"_start":0),Sf(t)||(e._recent=t),i||Hm(e,t),e._ts<0&&su(e,e._tTime),e},Wm=function(e,t){return(ii.ScrollTrigger||nu("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},Xm=function(e,t,n,i,s){if(Gf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bm!==Gn.frame)return kr.push(e),e._lazy=[s,i],1},mS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Sf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&mS(e)&&!(!e._initted&&Sf(e))||(e._ts<0||e._dp._ts<0)&&!Sf(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=bo(0,e._tDur,t),u=la(l,o),e._yoyo&&u&1&&(a=1-a),u!==la(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||un||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Xm(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Mf(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Vr(e,1),!n&&!un&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_S=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ca=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&su(e,e._tTime=e._tDur*o),e.parent&&ru(e),n||cs(e.parent,e),e},Cm=function(e){return e instanceof vn?cs(e):ca(e,e._dur)},xS={_start:0,endTime:yo,totalDuration:yo},mi=function r(e,t,n){var i=e.labels,s=e._recent||xS,a=e.duration()>=gi?s.endTime(!1):e._dur,o,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(yn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},go=function(e,t,n){var i=sr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;a.immediateRender=Hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},Gr=function(e,t){return e||e===0?t(e):t},bo=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!jt(e)||!(t=oS.exec(e))?"":t[1]},vS=function(e,t,n){return Gr(n,function(i){return bo(e,t,i)})},bf=[].slice,qm=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==Vi},yS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||qm(i,1)?(s=n).push.apply(s,_i(i)):n.push(i)})||n},_i=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):jt(e)&&!n&&(vf||!ua())?bf.call((t||Df).querySelectorAll(e),0):yn(e)?yS(e,n):qm(e)?bf.call(e,0):e?[e]:[]},Tf=function(e){return e=_i(e)[0]||vo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _i(t,n.querySelectorAll?n:n===e?vo("Invalid scope")||Df.createElement("div"):e)}},Ym=function(e){return e.sort(function(){return .5-Math.random()})},Zm=function(e){if(Bt(e))return e;var t=Hi(e)?e:{each:e},n=us(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return jt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,p=a[_],m,v,b,M,E,S,A,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,gi])[1],!T){for(A=-gi;A<(A=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=a[_]=[],m=l?Math.min(T,_)*u-.5:i%T,v=T===gi?0:l?_*d/T-.5:i/T|0,A=0,x=gi,S=0;S<_;S++)b=S%T-m,M=v-(S/T|0),p[S]=E=c?Math.abs(c==="y"?M:b):Lm(b*b+M*M),E>A&&(A=E),E<x&&(x=E);i==="random"&&Ym(p),p.max=A-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=hn(t.amount||t.each)||0,n=n&&_<0?LS(n):n}return _=(p[h]-p.min)/p.max||0,Dt(p.b+(n?n(_):_)*p.v)+p.u}},wf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(sr(n)?0:hn(n))}},Jm=function(e,t){var n=yn(e),i,s;return!n&&Hi(e)&&(i=n=e.radius||gi,e.values?(e=_i(e.values),(s=!sr(e[0]))&&(i*=i)):e=wf(e.increment)),Gr(t,n?Bt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gi,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||sr(a)?u:u+hn(a)}:wf(e))},$m=function(e,t,n,i){return Gr(yn(e)?!t:n===!0?!!(n=0):!i,function(){return yn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},MS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},SS=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},bS=function(e,t,n){return Qm(e,t,0,1,n)},Km=function(e,t,n){return Gr(n,function(i){return e[~~t(i)]})},TS=function r(e,t,n){var i=t-e;return yn(e)?Km(e,r(0,e.length),t):Gr(n,function(s){return(i+(s-e)%i)%i+e})},wS=function r(e,t,n){var i=t-e,s=i*2;return yn(e)?Km(e,r(0,e.length-1),t):Gr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ha=function(e){return e.replace(rS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(sS);return $m(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qm=function(e,t,n,i,s){var a=t-e,o=i-n;return Gr(s,function(l){return n+((l-e)/a*o||0)})},ES=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=jt(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(yn(e)&&!yn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=oa(yn(e)?[]:{},e));if(!u){for(l in t)zf.call(o,e,l,"get",t[l]);s=function(g){return Xf(g,o)||(a?e.p:e)}}}return Gr(n,s)},Rm=function(e,t,n){var i=e.labels,s=gi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ni=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&kr.length&&Kc(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},fo=function(e){return Vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&ni(e,"onInterrupt"),e},jm=[],eg=function(e){if(e)if(e=!e.name&&e.default||e,Rf()||e.headless){var t=e.name,n=Bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:yo,render:Xf,add:zf,kill:HS,modifier:GS,rawVars:0},a={targetTest:0,get:0,getSetter:au,aliases:{},register:0};if(ua(),e!==i){if(Vn[t])return;ri(i,ri(Qc(e,s),a)),oa(i.prototype,oa(s,Qc(e,a))),Vn[i.prop=t]=i,e.targetTest&&(Zc.push(i),Lf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Om(t,i),e.register&&e.register(Mn,i,Dn)}else jm.push(e)},St=255,po={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},df=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},tg=function(e,t,n){var i=e?sr(e)?[e>>16,e>>8&St,e&St]:0:po.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),po[e])i=po[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Tm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=df(l+1/3,s,a),i[1]=df(l,s,a),i[2]=df(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Pf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Tm)||po.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/St,a=i[1]/St,o=i[2]/St,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ng=function(e){var t=[],n=[],i=-1;return e.split(rr).forEach(function(s){var a=s.match(fs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Pm=function(e,t,n){var i="",s=(e+i).match(rr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=tg(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=ng(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rr,"1").split(fs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(rr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in po)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),AS=/hsl[a]?\(/,Bf=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=AS.test(t),e[1]=Pm(e[1],n),e[0]=Pm(e[0],n,ng(e[1])),!0},Gn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(p){var m=r()-i,v=p===!0,b,M,E,S;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,b=E-a,(b>0||v)&&(S=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,a+=b+(b>=s?4:s-b),M=1),v||(l=c(_)),M)for(f=0;f<o.length;f++)o[f](E,h,S,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Fm&&(!vf&&Rf()&&(Vi=vf=window,Df=Vi.document||{},ii.gsap=Mn,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(Mn.version),Um($c||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),jm.forEach(eg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Mo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Mo=0,c=yo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,v){var b=m?function(M,E,S,A){p(M,E,S,A),d.remove(b)}:p;return d.remove(p),o[v?"unshift":"push"](b),ua(),b},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),ua=function(){return!Mo&&Gn.wake()},ut={},CS=/^[\d.\-M][\d.\-,\s]/,RS=/["']/g,PS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(RS,"").trim():+c,i=l.substr(o+1).trim();return t},IS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},DS=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[PS(t[1])]:IS(e).split(",").map(zm)):ut._CE&&CS.test(e)?ut._CE("",e):n},LS=function(e){return function(t){return 1-e(1-t)}},us=function(e,t){return e&&(Bt(e)?e:ut[e]||DS(e))||t},ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return In(e,function(o){ut[o]=ii[o]=s,ut[a=o.toLowerCase()]=n;for(var l in s)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=s[l]}),s},ig=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/xf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*iS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:ig(o);return s=xf/s,l.config=function(c,u){return r(e,c,u)},l},mf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ig(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;ps("Elastic",pf("in"),pf("out"),pf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ps("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ps("Circ",function(r){return-(Lm(1-r*r)-1)});ps("Sine",function(r){return r===1?1:-nS(r*eS)+1});ps("Back",mf("in"),mf("out"),mf());ut.SteppedEase=ut.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((i*bo(0,a,o)|0)+s)*n}}};xo.ease=ut["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nf+=r+","+r+"Params,"});kf=function(e,t){this.id=tS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Uf,this.set=t?t.getSetter:au},So=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ca(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Mo||Gn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ca(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ua(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(su(this,n),!s._dp||s.parent||Hm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),km(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Am(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Am(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?la(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ru(this),dS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ua(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cS);var i=un;return un=n,Of(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mi(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Bt(n)?n:Vm,l=function(){var u=i.then;i.then=null,s&&s(),Bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){fo(this)},r})();ri(So.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});vn=(function(r){Dm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Lt&&Gi(n.parent||Lt,ir(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wm(ir(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return go(0,arguments,this),this},t.from=function(i,s,a){return go(1,arguments,this),this},t.fromTo=function(i,s,a,o){return go(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,mi(this,a),1),this},t.call=function(i,s,a){return Gi(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(i,a,mi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,mo(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,mo(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,v,b,M,E,S,A;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,b=this._ts,m=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Dt(u%p),u===l?(_=this._repeat,h=c):(E=Dt(u/p),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=la(this._tTime,p),!o&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),S&&_&1&&(h=c-h,A=1),_!==E&&!this._lock){var x=S&&E&1,T=x===(S&&_&1);if(_<E&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Dt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_S(this,Dt(o),Dt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(ni(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-bt);break}}f=g}else{f=this._last;for(var R=i<0?i:h;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||un&&Of(f)),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=R?-bt:bt);break}}f=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-bt)._zTime=h>=o?1:-1,this._ts))return this._start=M,ru(this),this.render(i,s,a);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(sr(s)||(s=mi(this,s,i)),!(i instanceof So)){if(yn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(jt(i))return this.addLabel(i,s);if(Bt(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Gi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return jt(i)?this.removeLabel(i):Bt(i)?this.killTweensOf(i):(i.parent===this&&iu(this,i),i===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=mi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||yo,a);return o.data="isPause",this._hasPause=1,Gi(this,o,mi(this,i))},t.removePause=function(i){var s=this._first;for(i=mi(this,i);s;)s._start===i&&s.data==="isPause"&&Vr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Br!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=_i(i),l=this._first,c=sr(s),u;l;)l instanceof Wt?uS(l._targets,o)&&(c?(!Br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=mi(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Wt.to(a,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ca(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ri({startAt:{time:mi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Rm(this,mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Rm(this,mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return cs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),cs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=gi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ca(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Lt._ts&&(km(Lt,jc(i,Lt)),Bm=Gn.frame),Gn.frame>=wm){wm+=Wn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Wn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e})(So);ri(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});NS=function(e,t,n,i,s,a,o){var l=new Dn(this._pt,e,t,0,1,Wf,null,s),c=0,u=0,d,h,f,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ha(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(hf)||[];d=hf.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ds(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=hf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(If.test(i)||m)&&(l.e=0),this._pt=l,l},zf=function(e,t,n,i,s,a,o,l,c,u){Bt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Bt(d)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Bt(d)?c?kS:ag:Hf,g;if(jt(i)&&(~i.indexOf("random(")&&(i=ha(i)),i.charAt(1)==="="&&(g=ds(h,i)+(hn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ef)return!isNaN(h*i)&&i!==""?(g=new Dn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?VS:og,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&nu(t,i),NS.call(this,e,t,h,i,f,l||Wn.stringFilter,c))},FS=function(e,t,n,i,s){if(Bt(e)&&(e=_o(e,s,t,n,i)),!Hi(e)||e.style&&e.nodeType||yn(e)||Nm(e))return jt(e)?_o(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=_o(e[o],s,t,n,i);return a},Vf=function(e,t,n,i,s,a){var o,l,c,u;if(Vn[e]&&(o=new Vn[e]).init(s,o.rawVars?t[e]:FS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Dn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==aa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Gf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,b=e._overwrite==="auto"&&!Cf,M=e.timeline,E=i.easeReverse||d,S,A,x,T,R,P,I,V,B,L,O,U,Z;if(M&&(!h||!s)&&(s="none"),e._ease=us(s,xo.ease),e._rEase=E&&(us(E)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(V=p[0]?zr(p[0]).harness:0,U=V&&i[V.prop],S=Qc(i,Lf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Yc:lS),_._lazy=0),a){if(Vr(e._startAt=Wt.set(p,ri({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!o&&!f)&&e._startAt.revert(Yc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),x=ri({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Hn(l),immediateRender:o,stagger:0,parent:m},S),U&&(x[V.prop]=U),Vr(e._startAt=Wt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(Yc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Hn(l)||l&&!g,A=0;A<p.length;A++){if(R=p[A],I=R._gsap||Ff(p)[A]._gsap,e._ptLookup[A]=L={},yf[I.id]&&kr.length&&Kc(),O=v===p?A:v.indexOf(R),V&&(B=new V).init(R,U||S,e,O,v)!==!1&&(e._pt=T=new Dn(e._pt,R,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(j){L[j]=T}),B.priority&&(P=1)),!V||U)for(x in S)Vn[x]&&(B=Vf(x,S,e,O,R,v))?B.priority&&(P=1):L[x]=T=zf.call(e,R,x,"get",S[x],O,v,0,i.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),b&&e._pt&&(Br=e,Lt.killTweensOf(R,L,e.globalTime(t)),Z=!e.parent,Br=0),e._pt&&l&&(yf[I.id]=1)}P&&qf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&t<=0&&M.render(gi,!0,!0)},US=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ef=1,e.vars[t]="+=0",Gf(e,o),Ef=0,l?vo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=kt(n)+hn(d.e)),d.b&&(d.b=u.s+hn(d.b))},OS=function(e,t){var n=e[0]?zr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=oa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},BS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(yn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},_o=function(e,t,n,i,s){return Bt(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?ha(e):e},rg=Nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sg={};In(rg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return sg[r]=1});Wt=(function(r){Dm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:mo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Lt,v=(yn(n)||Nm(n)?sr(n[0]):"length"in i)?[n]:_i(n),b,M,E,S,A,x,T,R;if(o._targets=v.length?Ff(v):vo("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||qc(c)||qc(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(b=o.timeline=new vn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),b.kill(),b.parent=b._dp=ir(o),b._start=0,h||qc(c)||qc(u)){if(S=v.length,T=h&&Zm(h),Hi(h))for(A in h)~rg.indexOf(A)&&(R||(R={}),R[A]=h[A]);for(M=0;M<S;M++)E=Qc(i,sg),E.stagger=0,P&&(E.easeReverse=P),R&&oa(E,R),x=v[M],E.duration=+_o(c,ir(o),M,x,v),E.delay=(+_o(u,ir(o),M,x,v)||0)-o._delay,!h&&S===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),b.to(x,E,T?T(M,x,v):0),b._ease=ut.none;b.duration()?c=u=0:o.timeline=0}else if(g){mo(ri(b.vars.defaults,{ease:"none"})),b._ease=us(g.ease||i.ease||"none");var I=0,V,B,L;if(yn(g))g.forEach(function(O){return b.to(v,O,">")}),b.duration();else{E={};for(A in g)A==="ease"||A==="easeEach"||BS(A,g[A],E,g.easeEach);for(A in E)for(V=E[A].sort(function(O,U){return O.t-U.t}),I=0,M=0;M<V.length;M++)B=V[M],L={ease:B.e,duration:(B.t-(M?V[M-1].t:0))/100*c},L[A]=B.v,b.to(v,L,I),I+=L.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!Cf&&(Br=ir(o),Lt.killTweensOf(v),Br=0),Gi(m,ir(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Dt(m._time)&&Hn(d)&&pS(ir(o))&&m.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-u)||0)),p&&Wm(ir(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-bt&&!u?l:i<bt?0:i,h,f,g,_,p,m,v,b;if(!c)gS(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Dt(d%_),d===l?(g=this._repeat,h=c):(p=Dt(d/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=la(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Xm(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var E=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(M?-1:1)/E:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ni(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Mf(this,i,s,a),ni(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Mf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Vr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(ni(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Mo||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Gf(this,c),u=this._ease(c/this._dur),US(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(su(this,0),this.parent||Gm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Br&&Br.vars.overwrite!==!0)._first||fo(this),this.parent&&a!==this.timeline.totalDuration()&&ca(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_i(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&fS(o,l))return s==="all"&&(this._pt=0),fo(this);for(d=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},In(s,function(v){return _[v]=1}),s=_),s=OS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&iu(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&fo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return go(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return go(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Lt.killTweensOf(i,s,a)},e})(So);ri(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new vn,t=bf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});Hf=function(e,t,n){return e[t]=n},ag=function(e,t,n){return e[t](n)},kS=function(e,t,n,i){return e[t](i.fp,n)},zS=function(e,t,n){return e.setAttribute(t,n)},au=function(e,t){return Bt(e[t])?ag:tu(e[t])&&e.setAttribute?zS:Hf},og=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},VS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},GS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},HS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?iu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},WS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qf=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Dn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||og,this.d=l||this,this.set=c||Hf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=WS,this.m=n,this.mt=s,this.tween=i},r})();In(Nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Lf[r]=1});ii.TweenMax=ii.TweenLite=Wt;ii.TimelineLite=ii.TimelineMax=vn;Lt=new vn({sortChildren:!1,defaults:xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=Bf;hs=[],Jc={},XS=[],Im=0,qS=0,gf=function(e){return(Jc[e]||XS).map(function(t){return t()})},Af=function(){var e=Date.now(),t=[];e-Im>2&&(gf("matchMediaInit"),hs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Vi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),gf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Im=e,gf("matchMedia"))},lg=(function(){function r(t,n){this.selector=n&&Tf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Bt(n)&&(s=i,i=n,n=Bt);var a=this,o=function(){var c=Pt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Tf(s)),Pt=a,d=i.apply(a,arguments),Bt(d)&&a._r.push(d),Pt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=hs.length;a--;)hs[a].id===this.id&&hs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),YS=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Hi(n)||(n={matches:n});var a=new lg(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Vi.matchMedia(n[c]),l&&(hs.indexOf(a)<0&&hs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Af):l.addEventListener("change",Af)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),eu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return eg(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=_i(e)[0]);var s=zr(e||{}).get,a=n?Vm:zm;return n==="native"&&(n=""),e&&(t?a((Vn[t]&&Vn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Vn[o]&&Vn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=_i(e),e.length>1){var i=e.map(function(u){return Mn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Vn[t],o=zr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;aa._pt=0,d.init(e,n?u+n:u,aa,0,[e]),d.render(1,d),aa._pt&&Xf(1,aa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Mn.to(e,ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=us(e.ease,xo.ease)),Em(xo,e||{})},config:function(e){return Em(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Vn[o]&&!ii[o]&&vo(t+" effect requires "+o+" plugin.")}),ff[t]=function(o,l,c){return n(_i(o),ri(l||{},s),c)},a&&(vn.prototype[t]=function(o,l,c){return this.add(ff[t](o,Hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=us(t)},parseEase:function(e,t){return arguments.length?us(e,t):ut},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,s;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Gi(n,i,i._start-i._delay),i=s;return Gi(Lt,n,0),n},context:function(e,t){return e?new lg(e,t):Pt},matchMedia:function(e){return new YS(e)},matchMediaRefresh:function(){return hs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Af()},addEventListener:function(e,t){var n=Jc[e]||(Jc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:TS,wrapYoyo:wS,distribute:Zm,random:$m,snap:Jm,normalize:bS,getUnit:hn,clamp:vS,splitColor:tg,toArray:_i,selector:Tf,mapRange:Qm,pipe:MS,unitize:SS,interpolate:ES,shuffle:Ym},install:Um,effects:ff,ticker:Gn,updateRoot:vn.updateRoot,plugins:Vn,globalTimeline:Lt,core:{PropTween:Dn,globals:Om,Tween:Wt,Timeline:vn,Animation:So,getCache:zr,_removeLinkedListItem:iu,reverting:function(){return un},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Cf=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return eu[r]=Wt[r]});Gn.add(vn.updateRoot);aa=eu.to({},{duration:0});ZS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},JS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ZS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},_f=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(jt(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}JS(o,s)}}}},Mn=eu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_f("roundProps",wf),_f("modifiers"),_f("snap",Jm))||eu;Wt.version=vn.version=Mn.version="3.15.0";Fm=1;Rf()&&ua();$S=ut.Power0,KS=ut.Power1,QS=ut.Power2,jS=ut.Power3,eb=ut.Power4,tb=ut.Linear,nb=ut.Quad,ib=ut.Cubic,rb=ut.Quart,sb=ut.Quint,ab=ut.Strong,ob=ut.Elastic,lb=ut.Back,cb=ut.SteppedEase,ub=ut.Bounce,hb=ut.Sine,fb=ut.Expo,db=ut.Circ});var cg,Hr,da,jf,xs,pb,ug,ed,mb,or,_s,pa,fa,hg,td,gb,_b,Wi,Jf,xb,vb,yb,Mb,vg,yg,Sb,bb,Tb,wb,Eb,Ab,Nt,Xn,Cb,Mg,Rb,Sg,bg,$f,si,fg,ma,Kf,dg,pg,Tg,wg,Xr,Wr,mg,Pb,qr,ar,Ib,gg,Db,Lb,ou,wo,Eg,Ag,_g,nd,Qf,Eo,lu,Zf,Nb,ms,To,gs,Cg,Fb,Ub,xg,Ob,id,Rg=gr(()=>{Yf();mb=function(){return typeof window<"u"},or={},_s=180/Math.PI,pa=Math.PI/180,fa=Math.atan2,hg=1e8,td=/([A-Z])/g,gb=/(left|right|width|margin|padding|x)/i,_b=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Sb=function(e,t,n){return e.style[t]=n},bb=function(e,t,n){return e.style.setProperty(t,n)},Tb=function(e,t,n){return e._gsap[t]=n},wb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Eb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Ab=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Nt="transform",Xn=Nt+"Origin",Cb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ar(i,o)}):this.tfm[e]=a.x?a[e]:ar(i,e),e===Xn&&(this.tfm.zOrigin=a.zOrigin);else return Wi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Nt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},Mg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(td,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ed(),(!s||!s.isStart)&&!n[Nt]&&(Mg(n),i.zOrigin&&n[Xn]&&(n[Xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Sg=function(e,t){var n={target:e,props:[],revert:Rb,save:Cb};return e._gsap||Mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},$f=function(e,t){var n=Hr.createElementNS?Hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hr.createElement(e);return n&&n.style?n:Hr.createElement(e)},si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(td,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ma(t)||t,1)||""},fg="O,Moz,ms,Ms,Webkit".split(","),ma=function(e,t,n){var i=t||xs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(fg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?fg[a]:"")+e},Kf=function(){mb()&&window.document&&(cg=window,Hr=cg.document,da=Hr.documentElement,xs=$f("div")||{style:{}},pb=$f("div"),Nt=ma(Nt),Xn=Nt+"Origin",xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!ma("perspective"),ed=Mn.core.reverting,jf=1)},dg=function(e){var t=e.ownerSVGElement,n=$f("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),da.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),da.removeChild(n),s},pg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Tg=function(e){var t,n;try{t=e.getBBox()}catch{t=dg(e),n=1}return t&&(t.width||t.height)||n||(t=dg(e)),t&&!t.width&&!t.x&&!t.y?{x:+pg(e,["x","cx","x1"])||0,y:+pg(e,["y","cy","y1"])||0,width:0,height:0}:t},wg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tg(e))},Xr=function(e,t){if(t){var n=e.style,i;t in or&&t!==Xn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(td,"-$1").toLowerCase())):n.removeAttribute(t)}},Wr=function(e,t,n,i,s,a){var o=new Dn(e._pt,t,n,0,1,a?yg:vg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},mg={deg:1,rad:1,turn:1},Pb={grid:1,flex:1},qr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=xs.style,l=gb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||mg[i]||mg[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&wg(e),(f||a==="%")&&(or[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],kt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Hr||!_.appendChild)&&(_=Hr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Gn.time&&!p.uncache)return kt(s/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,g=e[u],v?e.style[t]=v:Xr(e,t)}else(f||a==="%")&&!Pb[si(_,"display")]&&(o.position=si(e,"position")),_===e&&(o.position="static"),_.appendChild(xs),g=xs[u],_.removeChild(xs),o.position="absolute";return l&&f&&(p=zr(_),p.time=Gn.time,p.width=_[u]),kt(h?g*s/d:g&&s?d/g*s:0)},ar=function(e,t,n,i){var s;return jf||Kf(),t in Wi&&t!=="transform"&&(t=Wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=Eo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:lu(si(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ou[t]&&ou[t](e,t,n)||si(e,t)||Uf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qr(e,t,s,n)+n:s},Ib=function(e,t,n,i){if(!n||n==="none"){var s=ma(t,e,1),a=s&&si(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=si(e,"borderTopColor"))}var o=new Dn(this._pt,e.style,t,0,1,Wf),l=0,c=0,u,d,h,f,g,_,p,m,v,b,M,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=si(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=si(e,t)||i,_?e.style[t]=_:Xr(e,t)),u=[n,i],Bf(u),n=u[0],i=u[1],h=n.match(fs)||[],E=i.match(fs)||[],E.length){for(;d=fs.exec(i);)p=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),p.charAt(1)==="="&&(p=ds(f,p)+M),m=parseFloat(p),b=p.substr((m+"").length),l=fs.lastIndex-b.length,b||(b=b||Wn.units[t]||M,l===i.length&&(i+=b,o.e+=b)),M!==b&&(f=qr(e,t,_,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?yg:vg;return If.test(i)&&(o.e=0),this._pt=o,o},gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Db=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=gg[n]||n,t[1]=gg[i]||i,t.join(" ")},Lb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],or[o]&&(l=1,o=o==="transformOrigin"?Xn:Nt),Xr(n,o);l&&(Xr(n,Nt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Eo(n,1),a.uncache=1,Mg(i)))}},ou={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Dn(e._pt,t,n,0,0,Lb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},wo=[1,0,0,1,0,0],Eg={},Ag=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_g=function(e){var t=si(e,Nt);return Ag(t)?wo:t.substr(7).match(Pf).map(kt)},nd=function(e,t){var n=e._gsap||zr(e),i=e.style,s=_g(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?wo:s):(s===wo&&!e.offsetParent&&e!==da&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,da.appendChild(e)),s=_g(e),l?i.display=l:Xr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):da.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qf=function(e,t,n,i,s,a){var o=e._gsap,l=s||nd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],b=t.split(" "),M=parseFloat(b[0])||0,E=parseFloat(b[1])||0,S,A,x,T;n?l!==wo&&(A=f*p-g*_)&&(x=M*(p/A)+E*(-_/A)+(_*v-p*m)/A,T=M*(-g/A)+E*(f/A)-(f*v-g*m)/A,M=x,E=T):(S=Tg(e),M=S.x+(~b[0].indexOf("%")?M/100*S.width:M),E=S.y+(~(b[1]||b[0]).indexOf("%")?E/100*S.height:E)),i||i!==!1&&o.smooth?(m=M-c,v=E-u,o.xOffset=d+(m*f+v*_)-m,o.yOffset=h+(m*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Xn]="0px 0px",a&&(Wr(a,o,"xOrigin",c,M),Wr(a,o,"yOrigin",u,E),Wr(a,o,"xOffset",d,o.xOffset),Wr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+E)},Eo=function(e,t){var n=e._gsap||new kf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=si(e,Xn)||"0",u,d,h,f,g,_,p,m,v,b,M,E,S,A,x,T,R,P,I,V,B,L,O,U,Z,j,D,de,be,Xe,Oe,Ie;return u=d=h=_=p=m=v=b=M=0,f=g=1,n.svg=!!(e.getCTM&&wg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),A=nd(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Qf(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,S=n.yOrigin||0,A!==wo&&(P=A[0],I=A[1],V=A[2],B=A[3],u=L=A[4],d=O=A[5],A.length===6?(f=Math.sqrt(P*P+I*I),g=Math.sqrt(B*B+V*V),_=P||I?fa(I,P)*_s:0,v=V||B?fa(V,B)*_s+_:0,v&&(g*=Math.abs(Math.cos(v*pa))),n.svg&&(u-=E-(E*P+S*V),d-=S-(E*I+S*B))):(Ie=A[6],Xe=A[7],D=A[8],de=A[9],be=A[10],Oe=A[11],u=A[12],d=A[13],h=A[14],x=fa(Ie,be),p=x*_s,x&&(T=Math.cos(-x),R=Math.sin(-x),U=L*T+D*R,Z=O*T+de*R,j=Ie*T+be*R,D=L*-R+D*T,de=O*-R+de*T,be=Ie*-R+be*T,Oe=Xe*-R+Oe*T,L=U,O=Z,Ie=j),x=fa(-V,be),m=x*_s,x&&(T=Math.cos(-x),R=Math.sin(-x),U=P*T-D*R,Z=I*T-de*R,j=V*T-be*R,Oe=B*R+Oe*T,P=U,I=Z,V=j),x=fa(I,P),_=x*_s,x&&(T=Math.cos(x),R=Math.sin(x),U=P*T+I*R,Z=L*T+O*R,I=I*T-P*R,O=O*T-L*R,P=U,L=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=kt(Math.sqrt(P*P+I*I+V*V)),g=kt(Math.sqrt(O*O+Ie*Ie)),x=fa(L,O),v=Math.abs(x)>2e-4?x*_s:0,M=Oe?1/(Oe<0?-Oe:Oe):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ag(si(e,Nt)),U&&e.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=kt(f),n.scaleY=kt(g),n.rotation=kt(_)+o,n.rotationX=kt(p)+o,n.rotationY=kt(m)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xn]=lu(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?Fb:bg?Cg:Nb,n.uncache=0,n},lu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zf=function(e,t,n){var i=hn(t);return kt(parseFloat(t)+parseFloat(qr(e,"x",n+"px",i)))+i},Nb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cg(e,t)},ms="0deg",To="0px",gs=") ",Cg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,b=n.zOrigin,M="",E=m==="auto"&&e&&e!==1||m===!0;if(b&&(d!==ms||u!==ms)){var S=parseFloat(u)*pa,A=Math.sin(S),x=Math.cos(S),T;S=parseFloat(d)*pa,T=Math.cos(S),a=Zf(v,a,A*T*-b),o=Zf(v,o,-Math.sin(S)*-b),l=Zf(v,l,x*T*-b+b)}p!==To&&(M+="perspective("+p+gs),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||a!==To||o!==To||l!==To)&&(M+=l!==To||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gs),c!==ms&&(M+="rotate("+c+gs),u!==ms&&(M+="rotateY("+u+gs),d!==ms&&(M+="rotateX("+d+gs),(h!==ms||f!==ms)&&(M+="skew("+h+", "+f+gs),(g!==1||_!==1)&&(M+="scale("+g+", "+_+gs),v.style[Nt]=M||"translate(0, 0)"},Fb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,b=parseFloat(a),M=parseFloat(o),E,S,A,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pa,c*=pa,E=Math.cos(l)*d,S=Math.sin(l)*d,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=pa,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),E*=T,S*=T)),E=kt(E),S=kt(S),A=kt(A),x=kt(x)):(E=d,x=h,S=A=0),(b&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(b=qr(f,"x",a,"px"),M=qr(f,"y",o,"px")),(g||_||p||m)&&(b=kt(b+g-(g*E+_*A)+p),M=kt(M+_-(g*S+_*x)+m)),(i||s)&&(T=f.getBBox(),b=kt(b+i/100*T.width),M=kt(M+s/100*T.height)),T="matrix("+E+","+S+","+A+","+x+","+b+","+M+")",f.setAttribute("transform",T),v&&(f.style[Nt]=T)},Ub=function(e,t,n,i,s){var a=360,o=jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?_s:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*hg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*hg)%a-~~(c/a)*a)),e._pt=h=new Dn(e._pt,t,n,i,c,xb),h.e=u,h.u="deg",e._props.push(n),h},xg=function(e,t){for(var n in t)e[n]=t[n];return e},Ob=function(e,t,n){var i=xg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Nt]=t,o=Eo(n,1),Xr(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],a[Nt]=t,o=Eo(n,1),a[Nt]=c);for(l in or)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=hn(c),g=hn(u),d=f!==g?qr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Dn(e._pt,o,l,d,h-d,Jf),e._pt.u=g||0,e._props.push(l));xg(o,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ou[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return ar(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});id={name:"css",register:Kf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,v,b,M,E,S,A,x,T;jf||Kf(),this.styles=this.styles||Sg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Vn[_]&&Vf(_,t,n,i,e,s)))){if(f=typeof u,g=ou[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ha(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(p=hn(c),m=hn(u),m?p!==m&&(c=qr(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],jt(c)&&~c.indexOf("random(")&&(c=ha(c)),hn(c+"")||c==="auto"||(c+=Wn.units[_]||hn(ar(e,_))||""),(c+"").charAt(1)==="="&&(c=ar(e,_))):c=ar(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in Wi&&(_==="autoAlpha"&&(h===1&&ar(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),Wr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Wi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in or,b){if(this.styles.save(_),T=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=si(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=si(e,"perspective"),R?e.style.perspective=R:Xr(e,"perspective")}d=parseFloat(u)}if(M||(E=e._gsap,E.renderTransform&&!t.parseTransform||Eo(e,t.parseTransform),S=t.smoothOrigin!==!1&&E.smooth,M=this._pt=new Dn(this._pt,o,Nt,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new Dn(this._pt,E,"scaleY",E.scaleY,(v?ds(E.scaleY,v+d):d)-E.scaleY||0,Jf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Xn,0,o[Xn]),u=Db(u),E.svg?Qf(e,u,0,S,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Wr(this,E,"zOrigin",E.zOrigin,m),Wr(this,o,_,lu(c),lu(u)));continue}else if(_==="svgOrigin"){Qf(e,u,1,S,0,this);continue}else if(_ in Eg){Ub(this,E,_,h,v?ds(h,v+u):u);continue}else if(_==="smoothOrigin"){Wr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){Ob(this,u,e);continue}}else _ in o||(_=ma(_)||_);if(b||(d||d===0)&&(h||h===0)&&!_b.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),m=hn(u)||(_ in Wn.units?Wn.units[_]:p),p!==m&&(h=qr(e,_,c,m)),this._pt=new Dn(this._pt,b?E:o,_,h,(v?ds(h,v+d):d)-h,!b&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Mb:Jf),this._pt.u=m||0,b&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=yb):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=vb);else if(_ in o)Ib.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){nu(_,u);continue}b||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}A&&qf(this)},render:function(e,t){if(t.tween._time||!ed())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ar,aliases:Wi,getSetter:function(e,t,n){var i=Wi[t];return i&&i.indexOf(",")<0&&(t=i),t in or&&t!==Xn&&(e._gsap.x||ar(e,"x"))?n&&ug===n?t==="scale"?wb:Tb:(ug=n||{})&&(t==="scale"?Eb:Ab):e.style&&!tu(e.style[t])?Sb:~t.indexOf("-")?bb:au(e,t)},core:{_removeProperty:Xr,_getMatrix:nd}};Mn.utils.checkPrefix=ma;Mn.core.getStyleSaver=Sg;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){or[s]=1});In(e,function(s){Wn.units[s]="deg",Eg[s]=1}),Wi[i[13]]=r+","+e,In(n,function(s){var a=s.split(":");Wi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Mn.registerPlugin(id)});var Ao,QE,Pg=gr(()=>{Yf();Rg();Ao=Mn.registerPlugin(id)||Mn,QE=Ao.core.Tween});function Ig(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Bb(r,e,t){return e&&Ig(r.prototype,e),t&&Ig(r,t),r}var fn,hu,kb,ai,Yr,Zr,_a,Lg,vs,xa,Ng,lr,Ci,Fg,Ug,Og,ga,tt,Ri,Ro,rd,zb,ur,Po,Nn,Ln,cu,uu,sd,fu,Sn,Zt,Fn,Vb,cr,du,Co,Dg,Bg,kg,zt,zg=gr(()=>{Ug=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},Og=1,ga=[],tt=[],Ri=[],Ro=Date.now,rd=function(e,t){return t},zb=function(){var e=xa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,Ri),tt=n,Ri=i,rd=function(a,o){return t[a](o)}},ur=function(e,t){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][t]},Po=function(e){return!!~Ng.indexOf(e)},Nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cu="scrollLeft",uu="scrollTop",sd=function(){return lr&&lr.isPressed||tt.cache++},fu=function(e,t){var n=function i(s){if(s||s===0){Og&&(ai.history.scrollRestoration="manual");var a=lr&&lr.isPressed;s=i.v=Math.round(s)||(lr&&lr.iOS?1:0),e(s),i.cacheID=tt.cache,a&&rd("ss",s)}else(t||tt.cache!==i.cacheID||rd("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:cu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fu(function(r){return arguments.length?ai.scrollTo(r,Zt.sc()):ai.pageXOffset||Yr[cu]||Zr[cu]||_a[cu]||0})},Zt={s:uu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:fu(function(r){return arguments.length?ai.scrollTo(Sn.sc(),r):ai.pageYOffset||Yr[uu]||Zr[uu]||_a[uu]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cr=function(e,t){var n=t.s,i=t.sc;Po(e)&&(e=Yr.scrollingElement||Zr);var s=tt.indexOf(e),a=i===Zt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||Nn(e,"scroll",sd);var o=tt[s+a],l=o||(tt[s+a]=fu(ur(e,n),!0)||(Po(e)?i:fu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),l},du=function(e,t,n){var i=e,s=e,a=Ro(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Ro();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=Ro();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Co=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Dg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Bg=function(){xa=fn.core.globals().ScrollTrigger,xa&&xa.core&&zb()},kg=function(e){return fn=e||Ug(),!hu&&fn&&typeof document<"u"&&document.body&&(ai=window,Yr=document,Zr=Yr.documentElement,_a=Yr.body,Ng=[ai,Yr,Zr,_a],kb=fn.utils.clamp,Fg=fn.core.context||function(){},vs="onpointerenter"in _a?"pointer":"mouse",Lg=zt.isTouch=ai.matchMedia&&ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=zt.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Og=0},500),hu=1),xa||Bg(),hu};Sn.op=Zt;tt.cache=0;zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){hu||kg(fn)||console.warn("Please gsap.registerPlugin(Observer)"),xa||Bg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,b=n.onPress,M=n.onRelease,E=n.onRight,S=n.onLeft,A=n.onUp,x=n.onDown,T=n.onChangeX,R=n.onChangeY,P=n.onChange,I=n.onToggleX,V=n.onToggleY,B=n.onHover,L=n.onHoverEnd,O=n.onMove,U=n.ignoreCheck,Z=n.isNormalizer,j=n.onGestureStart,D=n.onGestureEnd,de=n.onWheel,be=n.onEnable,Xe=n.onDisable,Oe=n.onClick,Ie=n.scrollSpeed,K=n.capture,oe=n.allowClicks,se=n.lockAxis,Ee=n.onLockAxis;this.target=o=Fn(o)||Zr,this.vars=n,f&&(f=fn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Ie=Ie||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ai.getComputedStyle(_a).lineHeight)||22);var Ue,Ce,je,Te,ze,Ke,Be,X=this,at=0,It=0,F=n.passive||!u&&n.passive!==!1,Ze=cr(o,Sn),We=cr(o,Zt),lt=Ze(),pe=We(),$e=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ci[0]==="pointerdown",C=Po(o),y=o.ownerDocument||Yr,z=[0,0,0],J=[0,0,0],ee=0,he=function(){return ee=Ro()},ne=function(ue,Ne){return(X.event=ue)&&f&&Vb(ue.target,f)||Ne&&$e&&ue.pointerType!=="touch"||U&&U(ue,Ne)},Y=function(){X._vx.reset(),X._vy.reset(),Ce.pause(),d&&d(X)},Q=function(){var ue=X.deltaX=Dg(z),Ne=X.deltaY=Dg(J),ie=Math.abs(ue)>=i,Fe=Math.abs(Ne)>=i;P&&(ie||Fe)&&P(X,ue,Ne,z,J),ie&&(E&&X.deltaX>0&&E(X),S&&X.deltaX<0&&S(X),T&&T(X),I&&X.deltaX<0!=at<0&&I(X),at=X.deltaX,z[0]=z[1]=z[2]=0),Fe&&(x&&X.deltaY>0&&x(X),A&&X.deltaY<0&&A(X),R&&R(X),V&&X.deltaY<0!=It<0&&V(X),It=X.deltaY,J[0]=J[1]=J[2]=0),(Te||je)&&(O&&O(X),je&&(p&&je===1&&p(X),v&&v(X),je=0),Te=!1),Ke&&!(Ke=!1)&&Ee&&Ee(X),ze&&(de(X),ze=!1),Ue=0},ge=function(ue,Ne,ie){z[ie]+=ue,J[ie]+=Ne,X._vx.update(ue),X._vy.update(Ne),c?Ue||(Ue=requestAnimationFrame(Q)):Q()},Se=function(ue,Ne){se&&!Be&&(X.axis=Be=Math.abs(ue)>Math.abs(Ne)?"x":"y",Ke=!0),Be!=="y"&&(z[2]+=ue,X._vx.update(ue,!0)),Be!=="x"&&(J[2]+=Ne,X._vy.update(Ne,!0)),c?Ue||(Ue=requestAnimationFrame(Q)):Q()},fe=function(ue){if(!ne(ue,1)){ue=Co(ue,u);var Ne=ue.clientX,ie=ue.clientY,Fe=Ne-X.x,Re=ie-X.y,He=X.isDragging;X.x=Ne,X.y=ie,(He||(Fe||Re)&&(Math.abs(X.startX-Ne)>=s||Math.abs(X.startY-ie)>=s))&&(je||(je=He?2:1),He||(X.isDragging=!0),Se(Fe,Re))}},le=X.onPress=function(re){ne(re,1)||re&&re.button||(X.axis=Be=null,Ce.pause(),X.isPressed=!0,re=Co(re),at=It=0,X.startX=X.x=re.clientX,X.startY=X.y=re.clientY,X._vx.reset(),X._vy.reset(),Nn(Z?o:y,Ci[1],fe,F,!0),X.deltaX=X.deltaY=0,b&&b(X))},me=X.onRelease=function(re){if(!ne(re,1)){Ln(Z?o:y,Ci[1],fe,!0);var ue=!isNaN(X.y-X.startY),Ne=X.isDragging,ie=Ne&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Fe=Co(re);!ie&&ue&&(X._vx.reset(),X._vy.reset(),u&&oe&&fn.delayedCall(.08,function(){if(Ro()-ee>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(y.createEvent){var Re=y.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,ai,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(Re)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&Ne&&!Z&&Ce.restart(!0),je&&Q(),m&&Ne&&m(X),M&&M(X,ie)}},Ge=function(ue){return ue.touches&&ue.touches.length>1&&(X.isGesturing=!0)&&j(ue,X.isDragging)},qe=function(){return(X.isGesturing=!1)||D(X)},N=function(ue){if(!ne(ue)){var Ne=Ze(),ie=We();ge((Ne-lt)*Ie,(ie-pe)*Ie,1),lt=Ne,pe=ie,d&&Ce.restart(!0)}},ae=function(ue){if(!ne(ue)){ue=Co(ue,u),de&&(ze=!0);var Ne=(ue.deltaMode===1?l:ue.deltaMode===2?ai.innerHeight:1)*g;ge(ue.deltaX*Ne,ue.deltaY*Ne,0),d&&!Z&&Ce.restart(!0)}},$=function(ue){if(!ne(ue)){var Ne=ue.clientX,ie=ue.clientY,Fe=Ne-X.x,Re=ie-X.y;X.x=Ne,X.y=ie,Te=!0,d&&Ce.restart(!0),(Fe||Re)&&Se(Fe,Re)}},xe=function(ue){X.event=ue,B(X)},ce=function(ue){X.event=ue,L(X)},te=function(ue){return ne(ue)||Co(ue,u)&&Oe(X)};Ce=X._dc=fn.delayedCall(h||.25,Y).pause(),X.deltaX=X.deltaY=0,X._vx=du(0,50,!0),X._vy=du(0,50,!0),X.scrollX=Ze,X.scrollY=We,X.isDragging=X.isGesturing=X.isPressed=!1,Fg(this),X.enable=function(re){return X.isEnabled||(Nn(C?y:o,"scroll",sd),a.indexOf("scroll")>=0&&Nn(C?y:o,"scroll",N,F,K),a.indexOf("wheel")>=0&&Nn(o,"wheel",ae,F,K),(a.indexOf("touch")>=0&&Lg||a.indexOf("pointer")>=0)&&(Nn(o,Ci[0],le,F,K),Nn(y,Ci[2],me),Nn(y,Ci[3],me),oe&&Nn(o,"click",he,!0,!0),Oe&&Nn(o,"click",te),j&&Nn(y,"gesturestart",Ge),D&&Nn(y,"gestureend",qe),B&&Nn(o,vs+"enter",xe),L&&Nn(o,vs+"leave",ce),O&&Nn(o,vs+"move",$)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Te=je=!1,X._vx.reset(),X._vy.reset(),lt=Ze(),pe=We(),re&&re.type&&le(re),be&&be(X)),X},X.disable=function(){X.isEnabled&&(ga.filter(function(re){return re!==X&&Po(re.target)}).length||Ln(C?y:o,"scroll",sd),X.isPressed&&(X._vx.reset(),X._vy.reset(),Ln(Z?o:y,Ci[1],fe,!0)),Ln(C?y:o,"scroll",N,K),Ln(o,"wheel",ae,K),Ln(o,Ci[0],le,K),Ln(y,Ci[2],me),Ln(y,Ci[3],me),Ln(o,"click",he,!0),Ln(o,"click",te),Ln(y,"gesturestart",Ge),Ln(y,"gestureend",qe),Ln(o,vs+"enter",xe),Ln(o,vs+"leave",ce),Ln(o,vs+"move",$),X.isEnabled=X.isPressed=X.isDragging=!1,Xe&&Xe(X))},X.kill=X.revert=function(){X.disable();var re=ga.indexOf(X);re>=0&&ga.splice(re,1),lr===X&&(lr=0)},ga.push(X),Z&&Po(o)&&(lr=X),X.enable(_)},Bb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();zt.version="3.15.0";zt.create=function(r){return new zt(r)};zt.register=kg;zt.getAll=function(){return ga.slice()};zt.getById=function(r){return ga.filter(function(e){return e.vars.id===r})[0]};Ug()&&fn.registerPlugin(zt)});var Ae,Sa,rt,_t,ci,gt,vd,Ru,Wo,Oo,Do,pu,bn,Du,fd,On,Vg,Gg,ba,r_,ad,s_,Un,dd,a_,o_,Jr,pd,yd,Ta,Md,Bo,md,od,mu,Tn,ld,yi,Lo,Hg,Wg,Gb,Xg,qg,Xi,No,l_,c_,ws,u_,h_,Hb,Wb,qi,gu,li,wn,Fo,ys,Io,va,ya,f_,d_,Sd,bd,Ss,bs,ko,zo,Vo,Go,Jt,xi,Ea,Td,en,vi,Xb,Yg,hr,Pu,p_,qb,wd,Yb,_u,ln,on,xu,Zg,vu,Iu,Tu,yu,wu,nt,gd,Xo,Jg,Ma,cd,Uo,Es,Zb,m_,As,oi,g_,__,Ed,x_,Bn,Ts,$g,Jb,v_,Kg,Ms,_d,Eu,Ho,fr,xd,Au,$b,ud,Kb,wa,Mu,Qb,Cu,Qg,jb,jg,y_,Su,e_,st,t_,hd,bu,eT,M_,tT,n_,i_,nT,S_=gr(()=>{zg();mu=1,Tn=Date.now,ld=Tn(),yi=0,Lo=0,Hg=function(e,t,n){var i=li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wg=function(e,t){return t&&(!li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Gb=function r(){return Lo&&requestAnimationFrame(r)},Xg=function(){return Du=1},qg=function(){return Du=0},Xi=function(e){return e},No=function(e){return Math.round(e*1e5)/1e5||0},l_=function(){return typeof window<"u"},c_=function(){return Ae||l_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},ws=function(e){return!!~vd.indexOf(e)},u_=function(e){return(e==="Height"?Md:rt["inner"+e])||ci["client"+e]||gt["client"+e]},h_=function(e){return ur(e,"getBoundingClientRect")||(ws(e)?function(){return Cu.width=rt.innerWidth,Cu.height=Md,Cu}:function(){return hr(e)})},Hb=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ur(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?u_(s):e["client"+s])||0}},Wb=function(e,t){return!t||~Ri.indexOf(e)?h_(e):function(){return Cu}},qi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ur(e,n))?a()-h_(e)()[s]:ws(e)?(ci[n]||gt[n])-u_(i):e[n]-e["offset"+i])},gu=function(e,t){for(var n=0;n<ba.length;n+=3)(!t||~t.indexOf(ba[n+1]))&&e(ba[n],ba[n+1],ba[n+2])},li=function(e){return typeof e=="string"},wn=function(e){return typeof e=="function"},Fo=function(e){return typeof e=="number"},ys=function(e){return typeof e=="object"},Io=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},va=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ya=Math.abs,f_="left",d_="top",Sd="right",bd="bottom",Ss="width",bs="height",ko="Right",zo="Left",Vo="Top",Go="Bottom",Jt="padding",xi="margin",Ea="Width",Td="Height",en="px",vi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Xb=function(e){var t=vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Yg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hr=function(e,t){var n=t&&vi(e)[fd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},p_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},qb=function(e){return function(t){return Ae.utils.snap(p_(e),t)}},wd=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Yb=function(e){return function(t,n){return wd(p_(e))(t,n.direction)}},_u=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Zg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vu={toggleActions:"play",anticipatePin:0},Iu={top:0,left:0,center:.5,bottom:1,right:1},Tu=function(e,t){if(li(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Iu?Iu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yu=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=_t.createElement("div"),_=ws(n)||ur(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,b=v?c:u,M="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(M+=(i===Zt?Sd:bd)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],wu(g,0,i,v),g},wu=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ea]=1,s["border"+o+Ea]=0,s[n.p]=t+"px",Ae.set(e,s)},nt=[],gd={},Jg=function(){return Tn()-yi>34&&(Xo||(Xo=requestAnimationFrame(fr)))},Ma=function(){(!Un||!Un.isPressed||Un.startX>gt.clientWidth)&&(tt.cache++,Un?Xo||(Xo=requestAnimationFrame(fr)):fr(),yi||As("scrollStart"),yi=Tn())},cd=function(){o_=rt.innerWidth,a_=rt.innerHeight},Uo=function(e){tt.cache++,(e===!0||!bn&&!s_&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!dd||o_!==rt.innerWidth||Math.abs(rt.innerHeight-a_)>rt.innerHeight*.25))&&Ru.restart(!0)},Es={},Zb=[],m_=function r(){return on(st,"scrollEnd",r)||Ms(!0)},As=function(e){return Es[e]&&Es[e].map(function(t){return t()})||Zb},oi=[],g_=function(e){for(var t=0;t<oi.length;t+=5)(!e||oi[t+4]&&oi[t+4].query===e)&&(oi[t].style.cssText=oi[t+1],oi[t].getBBox&&oi[t].setAttribute("transform",oi[t+2]||""),oi[t+3].uncache=1)},__=function(){return tt.forEach(function(e){return wn(e)&&++e.cacheID&&(e.rec=e())})},Ed=function(e,t){var n;for(On=0;On<nt.length;On++)n=nt[On],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Bo=!0,t&&g_(t),t||As("revert")},x_=function(e,t){tt.cache++,(t||!Bn)&&tt.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),li(e)&&(rt.history.scrollRestoration=yd=e)},Ts=0,Jb=function(){if($g!==Ts){var e=$g=Ts;requestAnimationFrame(function(){return e===Ts&&Ms(!0)})}},v_=function(){gt.appendChild(Ta),Md=!Un&&Ta.offsetHeight||rt.innerHeight,gt.removeChild(Ta)},Kg=function(e){return Wo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ms=function(e,t){if(ci=_t.documentElement,gt=_t.body,vd=[rt,_t,ci,gt],yi&&!e&&!Bo){ln(st,"scrollEnd",m_);return}v_(),Bn=st.isRefreshing=!0,Bo||__();var n=As("refreshInit");r_&&st.sort(),t||Ed(),tt.forEach(function(i){wn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),Bo=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),md=1,Kg(!0),nt.forEach(function(i){var s=qi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Kg(!1),md=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){wn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),x_(yd,1),Ru.pause(),Ts++,Bn=2,fr(2),nt.forEach(function(i){return wn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=st.isRefreshing=!1,As("refresh")},_d=0,Eu=1,fr=function(e){if(e===2||!Bn&&!Bo){st.isUpdating=!0,Ho&&Ho.update(0);var t=nt.length,n=Tn(),i=n-ld>=50,s=t&&nt[0].scroll();if(Eu=_d>s?-1:1,Bn||(_d=s),i&&(yi&&!Du&&n-yi>200&&(yi=0,As("scrollEnd")),Do=ld,ld=n),Eu<0){for(On=t;On-- >0;)nt[On]&&nt[On].update(0,i);Eu=1}else for(On=0;On<t;On++)nt[On]&&nt[On].update(0,i);st.isUpdating=!1}Xo=0},xd=[f_,d_,bd,Sd,xi+Go,xi+ko,xi+Vo,xi+zo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Au=xd.concat([Ss,bs,"boxSizing","max"+Ea,"max"+Td,"position",xi,Jt,Jt+Vo,Jt+ko,Jt+Go,Jt+zo]),$b=function(e,t,n){wa(n);var i=e._gsap;if(i.spacerIsNative)wa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ud=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=xd.length,a=t.style,o=e.style,l;s--;)l=xd[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[bd]=o[Sd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ss]=Pu(e,Sn)+en,a[bs]=Pu(e,Zt)+en,a[Jt]=o[xi]=o[d_]=o[f_]="0",wa(i),o[Ss]=o["max"+Ea]=n[Ss],o[bs]=o["max"+Td]=n[bs],o[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Kb=/([A-Z])/g,wa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Kb,"-$1").toLowerCase())}},Mu=function(e){for(var t=Au.length,n=e.style,i=[],s=0;s<t;s++)i.push(Au[s],n[Au[s]]);return i.t=e,i},Qb=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Cu={left:0,top:0},Qg=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){wn(e)&&(e=e(l)),li(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Tu("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Fo(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&wu(o,n,i,!0);else{wn(t)&&(t=t(l));var b=(e||"0").split(" "),M,E,S,A;v=Fn(t,l)||gt,M=hr(v)||{},(!M||!M.left&&!M.top)&&vi(v).display==="none"&&(A=v.style.display,v.style.display="block",M=hr(v),A?v.style.display=A:v.style.removeProperty("display")),E=Tu(b[0],M[i.d]),S=Tu(b[1]||"0",n),e=M[i.p]-c[i.p]-u+E+s-S,o&&wu(o,S,i,n-S<20||o._isStart&&S>20),n-=n-S}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,T=a._isStart;p="scroll"+i.d2,wu(a,x,i,T&&x>20||!T&&(d?Math.max(gt[p],ci[p]):a.parentNode[p])<=x+1),d&&(c=hr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+en))}return f&&v&&(p=hr(v),f.seek(h),m=hr(v),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},jb=/(webkit|moz|length|cssText|inset)/i,jg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=vi(e);for(a in o)!+a&&!jb.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},y_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Su=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},e_=function(e,t){var n=cr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=y_(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&fr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ae.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",n.wheelHandler),st.isTouch&&ln(e,"touchmove",n.wheelHandler),s},st=(function(){function r(t,n){Sa||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Lo){this.update=this.refresh=this.kill=Xi;return}n=Yg(li(n)||Fo(n)||n.nodeType?{trigger:n}:n,vu);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,b=s.once,M=s.snap,E=s.pinReparent,S=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Zt,P=!d&&d!==0,I=Fn(n.scroller||rt),V=Ae.core.getCache(I),B=ws(I),L=("pinType"in n?n.pinType:ur(I,"pinType")||B&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=P&&n.toggleActions.split(" "),Z="markers"in n?n.markers:vu.markers,j=B?0:parseFloat(vi(I)["border"+R.p2+Ea])||0,D=this,de=n.onRefreshInit&&function(){return n.onRefreshInit(D)},be=Hb(I,B,R),Xe=Wb(I,B),Oe=0,Ie=0,K=0,oe=cr(I,R),se,Ee,Ue,Ce,je,Te,ze,Ke,Be,X,at,It,F,Ze,We,lt,pe,$e,C,y,z,J,ee,he,ne,Y,Q,ge,Se,fe,le,me,Ge,qe,N,ae,$,xe,ce;if(D._startClamp=D._endClamp=!1,D._dir=R,p*=45,D.scroller=I,D.scroll=A?A.time.bind(A):oe,Ce=oe(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(r_=1,n.refreshPriority===-9999&&(Ho=D)),V.tweenScroll=V.tweenScroll||{top:e_(I,Zt),left:e_(I,Sn)},D.tweenTo=se=V.tweenScroll[R.p],D.scrubDuration=function(ie){Ge=Fo(ie)&&ie,Ge?me?me.duration(ie):me=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ge,paused:!0,onComplete:function(){return m&&m(D)}}):(me&&me.progress(1).kill(),me=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),fe=0,l||(l=i.vars.id)),M&&((!ys(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in gt.style&&Ae.set(B?[gt,ci]:I,{scrollBehavior:"auto"}),tt.forEach(function(ie){return wn(ie)&&ie.target===(B?_t.scrollingElement||ci:I)&&(ie.smooth=!1)}),Ue=wn(M.snapTo)?M.snapTo:M.snapTo==="labels"?qb(i):M.snapTo==="labelsDirectional"?Yb(i):M.directional!==!1?function(ie,Fe){return wd(M.snapTo)(ie,Tn()-Ie<500?0:Fe.direction)}:Ae.utils.snap(M.snapTo),qe=M.duration||{min:.1,max:2},qe=ys(qe)?Oo(qe.min,qe.max):Oo(qe,qe),N=Ae.delayedCall(M.delay||Ge/2||.1,function(){var ie=oe(),Fe=Tn()-Ie<500,Re=se.tween;if((Fe||Math.abs(D.getVelocity())<10)&&!Re&&!Du&&Oe!==ie){var He=(ie-Te)/Ze,Xt=i&&!P?i.totalProgress():He,it=Fe?0:(Xt-le)/(Tn()-Do)*1e3||0,Ct=Ae.utils.clamp(-He,1-He,ya(it/2)*it/.185),Rt=He+(M.inertia===!1?0:Ct),Tt,vt,pt=M,dn=pt.onStart,wt=pt.onInterrupt,tn=pt.onComplete;if(Tt=Ue(Rt,D),Fo(Tt)||(Tt=Rt),vt=Math.max(0,Math.round(Te+Tt*Ze)),ie<=ze&&ie>=Te&&vt!==ie){if(Re&&!Re._initted&&Re.data<=ya(vt-ie))return;M.inertia===!1&&(Ct=Tt-He),se(vt,{duration:qe(ya(Math.max(ya(Rt-Xt),ya(Tt-Xt))*.185/it/.05||0)),ease:M.ease||"power3",data:ya(vt-ie),onInterrupt:function(){return N.restart(!0)&&wt&&va(D,wt)},onComplete:function(){D.update(),Oe=oe(),i&&!P&&(me?me.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),fe=le=i&&!P?i.totalProgress():D.progress,v&&v(D),tn&&va(D,tn)}},ie,Ct*Ze,vt-ie-Ct*Ze),dn&&va(D,dn,se.tween)}}else D.isActive&&Oe!==ie&&N.restart(!0)}).pause()),l&&(gd[l]=D),h=D.trigger=Fn(h||f!==!0&&f),ce=h&&h._gsap&&h._gsap.stRevert,ce&&(ce=ce(D)),f=f===!0?h:Fn(f),li(o)&&(o={targets:h,className:o}),f&&(g===!1||g===xi||(g=!g&&f.parentNode&&f.parentNode.style&&vi(f.parentNode).display==="flex"?!1:Jt),D.pin=f,Ee=Ae.core.getCache(f),Ee.spacer?We=Ee.pinState:(S&&(S=Fn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Ee.spacerIsNative=!!S,S&&(Ee.spacerState=Mu(S))),Ee.spacer=$e=S||_t.createElement("div"),$e.classList.add("pin-spacer"),l&&$e.classList.add("pin-spacer-"+l),Ee.pinState=We=Mu(f)),n.force3D!==!1&&Ae.set(f,{force3D:!0}),D.spacer=$e=Ee.spacer,Se=vi(f),he=Se[g+R.os2],y=Ae.getProperty(f),z=Ae.quickSetter(f,R.a,en),ud(f,$e,Se),pe=Mu(f)),Z){It=ys(Z)?Yg(Z,Zg):Zg,X=yu("scroller-start",l,I,R,It,0),at=yu("scroller-end",l,I,R,It,0,X),C=X["offset"+R.op.d2];var te=Fn(ur(I,"content")||I);Ke=this.markerStart=yu("start",l,te,R,It,C,0,A),Be=this.markerEnd=yu("end",l,te,R,It,C,0,A),A&&(xe=Ae.quickSetter([Ke,Be],R.a,en)),!L&&!(Ri.length&&ur(I,"fixedMarkers")===!0)&&(Xb(B?gt:I),Ae.set([X,at],{force3D:!0}),Y=Ae.quickSetter(X,R.a,en),ge=Ae.quickSetter(at,R.a,en))}if(A){var re=A.vars.onUpdate,ue=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),re&&re.apply(A,ue||[])})}if(D.previous=function(){return nt[nt.indexOf(D)-1]},D.next=function(){return nt[nt.indexOf(D)+1]},D.revert=function(ie,Fe){if(!Fe)return D.kill(!0);var Re=ie!==!1||!D.enabled,He=bn;Re!==D.isReverted&&(Re&&(ae=Math.max(oe(),D.scroll.rec||0),K=D.progress,$=i&&i.progress()),Ke&&[Ke,Be,X,at].forEach(function(Xt){return Xt.style.display=Re?"none":"block"}),Re&&(bn=D,D.update(Re)),f&&(!E||!D.isActive)&&(Re?$b(f,$e,We):ud(f,$e,vi(f),ne)),Re||D.update(Re),bn=He,D.isReverted=Re)},D.refresh=function(ie,Fe,Re,He){if(!((bn||!D.enabled)&&!Fe)){if(f&&ie&&yi){ln(r,"scrollEnd",m_);return}!Bn&&de&&de(D),bn=D,se.tween&&!Re&&(se.tween.kill(),se.tween=0),me&&me.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Xt=be(),it=Xe(),Ct=A?A.duration():qi(I,R),Rt=Ze<=.01||!Ze,Tt=0,vt=He||0,pt=ys(Re)?Re.end:n.end,dn=n.endTrigger||h,wt=ys(Re)?Re.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),tn=D.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,D),qn=h&&Math.max(0,nt.indexOf(D))||0,qt=qn,$t,nn,Yi,Cs,rn,Vt,ui,w,k,q,G,H,_e;for(Z&&ys(Re)&&(H=Ae.getProperty(X,R.p),_e=Ae.getProperty(at,R.p));qt-- >0;)Vt=nt[qt],Vt.end||Vt.refresh(0,1)||(bn=D),ui=Vt.pin,ui&&(ui===h||ui===f||ui===tn)&&!Vt.isReverted&&(q||(q=[]),q.unshift(Vt),Vt.revert(!0,!0)),Vt!==nt[qt]&&(qn--,qt--);for(wn(wt)&&(wt=wt(D)),wt=Hg(wt,"start",D),Te=Qg(wt,h,Xt,R,oe(),Ke,X,D,it,j,L,Ct,A,D._startClamp&&"_startClamp")||(f?-.001:0),wn(pt)&&(pt=pt(D)),li(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(li(wt)?wt.split(" ")[0]:"")+pt:(Tt=Tu(pt.substr(2),Xt),pt=li(wt)?wt:(A?Ae.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Te):Te)+Tt,dn=h)),pt=Hg(pt,"end",D),ze=Math.max(Te,Qg(pt||(dn?"100% 0":Ct),dn,Xt,R,oe()+Tt,Be,at,D,it,j,L,Ct,A,D._endClamp&&"_endClamp"))||-.001,Tt=0,qt=qn;qt--;)Vt=nt[qt]||{},ui=Vt.pin,ui&&Vt.start-Vt._pinPush<=Te&&!A&&Vt.end>0&&($t=Vt.end-(D._startClamp?Math.max(0,Vt.start):Vt.start),(ui===h&&Vt.start-Vt._pinPush<Te||ui===tn)&&isNaN(wt)&&(Tt+=$t*(1-Vt.progress)),ui===f&&(vt+=$t));if(Te+=Tt,ze+=Tt,D._startClamp&&(D._startClamp+=Tt),D._endClamp&&!Bn&&(D._endClamp=ze||-.001,ze=Math.min(ze,qi(I,R))),Ze=ze-Te||(Te-=.01)&&.001,Rt&&(K=Ae.utils.clamp(0,1,Ae.utils.normalize(Te,ze,ae))),D._pinPush=vt,Ke&&Tt&&($t={},$t[R.a]="+="+Tt,tn&&($t[R.p]="-="+oe()),Ae.set([Ke,Be],$t)),f&&!(md&&D.end>=qi(I,R)))$t=vi(f),Cs=R===Zt,Yi=oe(),J=parseFloat(y(R.a))+vt,!Ct&&ze>1&&(G=(B?_t.scrollingElement||ci:I).style,G={style:G,value:G["overflow"+R.a.toUpperCase()]},B&&vi(gt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(G.style["overflow"+R.a.toUpperCase()]="scroll")),ud(f,$e,$t),pe=Mu(f),nn=hr(f,!0),w=L&&cr(I,Cs?Sn:Zt)(),g?(ne=[g+R.os2,Ze+vt+en],ne.t=$e,qt=g===Jt?Pu(f,R)+Ze+vt:0,qt&&(ne.push(R.d,qt+en),$e.style.flexBasis!=="auto"&&($e.style.flexBasis=qt+en)),wa(ne),tn&&nt.forEach(function(ve){ve.pin===tn&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),L&&oe(ae)):(qt=Pu(f,R),qt&&$e.style.flexBasis!=="auto"&&($e.style.flexBasis=qt+en)),L&&(rn={top:nn.top+(Cs?Yi-Te:w)+en,left:nn.left+(Cs?w:Yi-Te)+en,boxSizing:"border-box",position:"fixed"},rn[Ss]=rn["max"+Ea]=Math.ceil(nn.width)+en,rn[bs]=rn["max"+Td]=Math.ceil(nn.height)+en,rn[xi]=rn[xi+Vo]=rn[xi+ko]=rn[xi+Go]=rn[xi+zo]="0",rn[Jt]=$t[Jt],rn[Jt+Vo]=$t[Jt+Vo],rn[Jt+ko]=$t[Jt+ko],rn[Jt+Go]=$t[Jt+Go],rn[Jt+zo]=$t[Jt+zo],lt=Qb(We,rn,E),Bn&&oe(0)),i?(k=i._initted,ad(1),i.render(i.duration(),!0,!0),ee=y(R.a)-J+Ze+vt,Q=Math.abs(Ze-ee)>1,L&&Q&&lt.splice(lt.length-2,2),i.render(0,!0,!0),k||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ad(0)):ee=Ze,G&&(G.value?G.style["overflow"+R.a.toUpperCase()]=G.value:G.style.removeProperty("overflow-"+R.a));else if(h&&oe()&&!A)for(nn=h.parentNode;nn&&nn!==gt;)nn._pinOffset&&(Te-=nn._pinOffset,ze-=nn._pinOffset),nn=nn.parentNode;q&&q.forEach(function(ve){return ve.revert(!1,!0)}),D.start=Te,D.end=ze,Ce=je=Bn?ae:oe(),!A&&!Bn&&(Ce<ae&&oe(ae),D.scroll.rec=0),D.revert(!1,!0),Ie=Tn(),N&&(Oe=-1,N.restart(!0)),bn=0,i&&P&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Rt||K!==D.progress||A||_||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Te<-.001&&!K?Ae.utils.normalize(Te,ze,0):K,!0),D.progress=Rt||(Ce-Te)/Ze===K?0:K),f&&g&&($e._pinOffset=Math.round(D.progress*ee)),me&&me.invalidate(),isNaN(H)||(H-=Ae.getProperty(X,R.p),_e-=Ae.getProperty(at,R.p),Su(X,R,H),Su(Ke,R,H-(He||0)),Su(at,R,_e),Su(Be,R,_e-(He||0))),Rt&&!Bn&&D.update(),u&&!Bn&&!F&&(F=!0,u(D),F=!1)}},D.getVelocity=function(){return(oe()-je)/(Tn()-Do)*1e3||0},D.endAnimation=function(){Io(D.callbackAnimation),i&&(me?me.progress(1):i.paused()?P||Io(i,D.direction<0,1):Io(i,i.reversed()))},D.labelToScroll=function(ie){return i&&i.labels&&(Te||D.refresh()||Te)+i.labels[ie]/i.duration()*Ze||0},D.getTrailing=function(ie){var Fe=nt.indexOf(D),Re=D.direction>0?nt.slice(0,Fe).reverse():nt.slice(Fe+1);return(li(ie)?Re.filter(function(He){return He.vars.preventOverlaps===ie}):Re).filter(function(He){return D.direction>0?He.end<=Te:He.start>=ze})},D.update=function(ie,Fe,Re){if(!(A&&!Re&&!ie)){var He=Bn===!0?ae:D.scroll(),Xt=ie?0:(He-Te)/Ze,it=Xt<0?0:Xt>1?1:Xt||0,Ct=D.progress,Rt,Tt,vt,pt,dn,wt,tn,qn;if(Fe&&(je=Ce,Ce=A?oe():He,M&&(le=fe,fe=i&&!P?i.totalProgress():it)),p&&f&&!bn&&!mu&&yi&&(!it&&Te<He+(He-je)/(Tn()-Do)*p?it=1e-4:it===1&&ze>He+(He-je)/(Tn()-Do)*p&&(it=.9999)),it!==Ct&&D.enabled){if(Rt=D.isActive=!!it&&it<1,Tt=!!Ct&&Ct<1,wt=Rt!==Tt,dn=wt||!!it!=!!Ct,D.direction=it>Ct?1:-1,D.progress=it,dn&&!bn&&(vt=it&&!Ct?0:it===1?1:Ct===1?2:3,P&&(pt=!wt&&U[vt+1]!=="none"&&U[vt+1]||U[vt],qn=i&&(pt==="complete"||pt==="reset"||pt in i))),T&&(wt||qn)&&(qn||d||!i)&&(wn(T)?T(D):D.getTrailing(T).forEach(function(Yi){return Yi.endAnimation()})),P||(me&&!bn&&!mu?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",it,i._tTime/i._tDur):(me.vars.totalProgress=it,me.invalidate().restart())):i&&i.totalProgress(it,!!(bn&&(Ie||ie)))),f){if(ie&&g&&($e.style[g+R.os2]=he),!L)z(No(J+ee*it));else if(dn){if(tn=!ie&&it>Ct&&ze+1>He&&He+1>=qi(I,R),E)if(!ie&&(Rt||tn)){var qt=hr(f,!0),$t=He-Te;jg(f,gt,qt.top+(R===Zt?$t:0)+en,qt.left+(R===Zt?0:$t)+en)}else jg(f,$e);wa(Rt||tn?lt:pe),Q&&it<1&&Rt||z(J+(it===1&&!tn?ee:0))}}M&&!se.tween&&!bn&&!mu&&N.restart(!0),o&&(wt||b&&it&&(it<1||!od))&&Wo(o.targets).forEach(function(Yi){return Yi.classList[Rt||b?"add":"remove"](o.className)}),a&&!P&&!ie&&a(D),dn&&!bn?(P&&(qn&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),a&&a(D)),(wt||!od)&&(c&&wt&&va(D,c),O[vt]&&va(D,O[vt]),b&&(it===1?D.kill(!1,1):O[vt]=0),wt||(vt=it===1?1:3,O[vt]&&va(D,O[vt]))),x&&!Rt&&Math.abs(D.getVelocity())>(Fo(x)?x:2500)&&(Io(D.callbackAnimation),me?me.progress(1):Io(i,pt==="reverse"?1:!it,1))):P&&a&&!bn&&a(D)}if(ge){var nn=A?He/A.duration()*(A._caScrollDist||0):He;Y(nn+(X._isFlipped?1:0)),ge(nn)}xe&&xe(-He/A.duration()*(A._caScrollDist||0))}},D.enable=function(ie,Fe){D.enabled||(D.enabled=!0,ln(I,"resize",Uo),B||ln(I,"scroll",Ma),de&&ln(r,"refreshInit",de),ie!==!1&&(D.progress=K=0,Ce=je=Oe=oe()),Fe!==!1&&D.refresh())},D.getTween=function(ie){return ie&&se?se.tween:me},D.setPositions=function(ie,Fe,Re,He){if(A){var Xt=A.scrollTrigger,it=A.duration(),Ct=Xt.end-Xt.start;ie=Xt.start+Ct*ie/it,Fe=Xt.start+Ct*Fe/it}D.refresh(!1,!1,{start:Wg(ie,Re&&!!D._startClamp),end:Wg(Fe,Re&&!!D._endClamp)},He),D.update()},D.adjustPinSpacing=function(ie){if(ne&&ie){var Fe=ne.indexOf(R.d)+1;ne[Fe]=parseFloat(ne[Fe])+ie+en,ne[1]=parseFloat(ne[1])+ie+en,wa(ne)}},D.disable=function(ie,Fe){if(ie!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Fe||me&&me.pause(),ae=0,Ee&&(Ee.uncache=1),de&&on(r,"refreshInit",de),N&&(N.pause(),se.tween&&se.tween.kill()&&(se.tween=0)),!B)){for(var Re=nt.length;Re--;)if(nt[Re].scroller===I&&nt[Re]!==D)return;on(I,"resize",Uo),B||on(I,"scroll",Ma)}},D.kill=function(ie,Fe){D.disable(ie,Fe),me&&!Fe&&me.kill(),l&&delete gd[l];var Re=nt.indexOf(D);Re>=0&&nt.splice(Re,1),Re===On&&Eu>0&&On--,Re=0,nt.forEach(function(He){return He.scroller===D.scroller&&(Re=1)}),Re||Bn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Fe||i.kill()),Ke&&[Ke,Be,X,at].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Ho===D&&(Ho=0),f&&(Ee&&(Ee.uncache=1),Re=0,nt.forEach(function(He){return He.pin===f&&Re++}),Re||(Ee.spacer=0)),n.onKill&&n.onKill(D)},nt.push(D),D.enable(!1,!1),ce&&ce(D),i&&i.add&&!Ze){var Ne=D.update;D.update=function(){D.update=Ne,tt.cache++,Te||ze||D.refresh()},Ae.delayedCall(.01,D.update),Ze=.01,Te=ze=0}else D.refresh();f&&Jb()},r.register=function(n){return Sa||(Ae=n||c_(),l_()&&window.document&&r.enable(),Sa=Lo),Sa},r.defaults=function(n){if(n)for(var i in n)vu[i]=n[i];return vu},r.disable=function(n,i){Lo=0,nt.forEach(function(a){return a[i?"kill":"disable"](n)}),on(rt,"wheel",Ma),on(_t,"scroll",Ma),clearInterval(pu),on(_t,"touchcancel",Xi),on(gt,"touchstart",Xi),_u(on,_t,"pointerdown,touchstart,mousedown",Xg),_u(on,_t,"pointerup,touchend,mouseup",qg),Ru.kill(),gu(on);for(var s=0;s<tt.length;s+=3)xu(on,tt[s],tt[s+1]),xu(on,tt[s],tt[s+2])},r.enable=function(){if(rt=window,_t=document,ci=_t.documentElement,gt=_t.body,Ae){if(Wo=Ae.utils.toArray,Oo=Ae.utils.clamp,pd=Ae.core.context||Xi,ad=Ae.core.suppressOverwrites||Xi,yd=rt.history.scrollRestoration||"auto",_d=rt.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),gt){Lo=1,Ta=document.createElement("div"),Ta.style.height="100vh",Ta.style.position="absolute",v_(),Gb(),zt.register(Ae),r.isTouch=zt.isTouch,Jr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dd=zt.isTouch===1,ln(rt,"wheel",Ma),vd=[rt,_t,ci,gt],Ae.matchMedia?(r.matchMedia=function(u){var d=Ae.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ae.addEventListener("matchMediaInit",function(){__(),Ed()}),Ae.addEventListener("matchMediaRevert",function(){return g_()}),Ae.addEventListener("matchMedia",function(){Ms(0,1),As("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return cd(),cd})):console.warn("Requires GSAP 3.11.0 or later"),cd(),ln(_t,"scroll",Ma);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=hr(gt),Zt.m=Math.round(o.top+Zt.sc())||0,Sn.m=Math.round(o.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),pu=setInterval(Jg,250),Ae.delayedCall(.5,function(){return mu=0}),ln(_t,"touchcancel",Xi),ln(gt,"touchstart",Xi),_u(ln,_t,"pointerdown,touchstart,mousedown",Xg),_u(ln,_t,"pointerup,touchend,mouseup",qg),fd=Ae.utils.checkPrefix("transform"),Au.push(fd),Sa=Tn(),Ru=Ae.delayedCall(.2,Ms).pause(),ba=[_t,"visibilitychange",function(){var u=rt.innerWidth,d=rt.innerHeight;_t.hidden?(Vg=u,Gg=d):(Vg!==u||Gg!==d)&&Uo()},_t,"DOMContentLoaded",Ms,rt,"load",Ms,rt,"resize",Uo],gu(ln),nt.forEach(function(u){return u.enable(0,1)}),l=0;l<tt.length;l+=3)xu(on,tt[l],tt[l+1]),xu(on,tt[l],tt[l+2])}else if(_t){var c=function u(){r.enable(),_t.removeEventListener("DOMContentLoaded",u)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(od=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(pu)||(pu=i)&&setInterval(Jg,i),"ignoreMobileResize"in n&&(dd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gu(on)||gu(ln,n.autoRefreshEvents||"none"),s_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),a=tt.indexOf(s),o=ws(s);~a&&tt.splice(a,o?6:2),i&&(o?Ri.unshift(rt,i,gt,i,ci,i):Ri.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(li(n)?Fn(n):n).getBoundingClientRect(),o=a[s?Ss:bs]*i||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},r.positionInViewport=function(n,i,s){li(n)&&(n=Fn(n));var a=n.getBoundingClientRect(),o=a[s?Ss:bs],l=i==null?o/2:i in Iu?Iu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Es.killAll||[];Es={},i.forEach(function(s){return s()})}},r})();st.version="3.15.0";st.saveStyles=function(r){return r?Wo(r).forEach(function(e){if(e&&e.style){var t=oi.indexOf(e);t>=0&&oi.splice(t,5),oi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),pd())}}):oi};st.revert=function(r,e){return Ed(!r,e)};st.create=function(r,e){return new st(r,e)};st.refresh=function(r){return r?Uo(!0):(Sa||st.register())&&Ms(!0)};st.update=function(r){return++tt.cache&&fr(r===!0?2:0)};st.clearScrollMemory=x_;st.maxScroll=function(r,e){return qi(r,e?Sn:Zt)};st.getScrollFunc=function(r,e){return cr(Fn(r),e?Sn:Zt)};st.getById=function(r){return gd[r]};st.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!yi};st.snapDirectional=wd;st.addEventListener=function(r,e){var t=Es[r]||(Es[r]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(r,e){var t=Es[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ae.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&wn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return wn(s)&&(s=s(),ln(st,"refresh",function(){return s=e.batchMax()})),Wo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(st.create(c))}),t};t_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},hd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===ci&&r(gt,t)},bu={auto:1,scroll:1},eT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ae.core.getCache(s),o=Tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bu[(l=vi(s)).overflowY]||bu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ws(s)&&(bu[(l=vi(s)).overflowY]||bu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},M_=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&eT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(_t,zt.eventTypes[0],i_,!1,!0)},onDisable:function(){return on(_t,zt.eventTypes[0],i_,!0)}})},tT=/(input|label|select|textarea)/i,i_=function(e){var t=tT.test(e.target.tagName);(t||n_)&&(e._gsapAllow=!0,n_=t)},nT=function(e){ys(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Fn(e.target)||ci,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),h=Jr&&(e.content&&Fn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=cr(c,Zt),g=cr(c,Sn),_=1,p=(zt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,m=0,v=wn(i)?function(){return i(o)}:function(){return i||2.8},b,M,E=M_(c,e.type,!0,s),S=function(){return M=!1},A=Xi,x=Xi,T=function(){l=qi(c,Zt),x=Oo(Jr?1:0,l),n&&(A=Oo(0,qi(c,Sn))),b=Ts},R=function(){h._gsap.y=No(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(M){requestAnimationFrame(S);var Z=No(o.deltaY/2),j=x(f.v-Z);if(h&&j!==f.v+f.offset){f.offset=j-f.v;var D=No((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",f.cacheID=tt.cache,fr()}return!0}f.offset&&R(),M=!0},I,V,B,L,O=function(){T(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(U){return Jr&&U.type==="touchmove"&&P(U)||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){M=!1;var U=_;_=No((rt.visualViewport&&rt.visualViewport.scale||1)/p),I.pause(),U!==_&&hd(c,_>1.01?!0:n?!1:"x"),V=g(),B=f(),T(),b=Ts},e.onRelease=e.onGestureStart=function(U,Z){if(f.offset&&R(),!Z)L.restart(!0);else{tt.cache++;var j=v(),D,de;n&&(D=g(),de=D+j*.05*-U.velocityX/.227,j*=t_(g,D,de,qi(c,Sn)),I.vars.scrollX=A(de)),D=f(),de=D+j*.05*-U.velocityY/.227,j*=t_(f,D,de,qi(c,Zt)),I.vars.scrollY=x(de),I.invalidate().duration(j).play(.01),(Jr&&I.vars.scrollY>=l||D>=l-1)&&Ae.to({},{onUpdate:O,duration:j})}a&&a(U)},e.onWheel=function(){I._ts&&I.pause(),Tn()-m>1e3&&(b=0,m=Tn())},e.onChange=function(U,Z,j,D,de){if(Ts!==b&&T(),Z&&n&&g(A(D[2]===Z?V+(U.startX-U.x):g()+Z-D[1])),j){f.offset&&R();var be=de[2]===j,Xe=be?B+U.startY-U.y:f()+j-de[1],Oe=x(Xe);be&&Xe!==Oe&&(B+=Oe-Xe),f(Oe)}(j||Z)&&fr()},e.onEnable=function(){hd(c,n?!1:"x"),st.addEventListener("refresh",O),ln(rt,"resize",O),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){hd(c,!0),on(rt,"resize",O),st.removeEventListener("refresh",O),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new zt(e),o.iOS=Jr,Jr&&!f()&&f(1),Jr&&Ae.ticker.add(Xi),L=o._dc,I=Ae.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y_(f,f(),function(){return I.pause()})},onUpdate:fr,onComplete:L.vars.onComplete}),o};st.sort=function(r){if(wn(r))return nt.sort(r);var e=rt.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(r){return new zt(r)};st.normalizeScroll=function(r){if(typeof r>"u")return Un;if(r===!0&&Un)return Un.enable();if(r===!1){Un&&Un.kill(),Un=r;return}var e=r instanceof zt?r:nT(r);return Un&&Un.target===e.target&&Un.kill(),ws(e.target)&&(Un=e),e};st.core={_getVelocityProp:du,_inputObserver:M_,_scrollers:tt,_proxies:Ri,bridge:{ss:function(){yi||As("scrollStart"),yi=Tn()},ref:function(){return bn}}};c_()&&Ae.registerPlugin(st)});var rT=Id(()=>{var iA=P_(Dd());bm();Pg();S_();Ao.registerPlugin(st);var Ad=["Enterprise Web Apps.","Secure Architectures.","FastAPI Microservices.","Modern UIs.","Scalable Systems."],Fu=0,Lu=0,Nu="",Cd="",Aa=!1,iT=document.getElementById("typewriter");document.addEventListener("visibilitychange",()=>{document.hidden||(Fu=0)});function b_(){Nu=Ad[Fu%Ad.length],Aa?Cd=Nu.slice(0,--Lu):(Cd=Nu.slice(0,++Lu),Fu<Ad.length*2&&!document.hidden&&window.playTypeSound&&window.playTypeSound()),iT.textContent=Cd;let r=Aa?50:100;!Aa&&Lu===Nu.length?(r=2e3,Aa=!0):Aa&&Lu===0&&(Aa=!1,Fu++,r=500),setTimeout(b_,r)}document.addEventListener("DOMContentLoaded",function(){Sm();let r=["click","touchstart","keydown","scroll","mousemove"],e=function(){window.initAudioContext&&window.initAudioContext()};r.forEach(E=>{document.addEventListener(E,e,{once:!0,passive:!0})});let t=setInterval(()=>{window.initAudioContext&&(window.initAudioContext(),clearInterval(t))},100);b_(),document.querySelectorAll(".card").forEach((E,S)=>{Ao.fromTo(E,{y:100,opacity:0,scale:.95},{scrollTrigger:{trigger:E,start:"top 85%",toggleActions:"play none none reverse"},y:0,opacity:1,scale:1,duration:1,ease:"power4.out",delay:S%2===0?0:.2})}),document.querySelectorAll("h2.section-title").forEach(E=>{Ao.fromTo(E,{x:-50,opacity:0},{scrollTrigger:{trigger:E,start:"top 80%"},x:0,opacity:1,duration:1,ease:"back.out(1.7)"})});let s=document.getElementById("hamburger"),a=document.getElementById("navLinks");s.addEventListener("click",function(){window.playClickSound&&window.playClickSound(),s.classList.toggle("active"),a.classList.toggle("active")});let o=[261.63,293.66,329.63,392,440,523.25];a.querySelectorAll("a").forEach(function(E,S){E.addEventListener("click",function(){if(window.playPianoSound){let A=o[S%o.length];window.playPianoSound(A)}s.classList.remove("active"),a.classList.remove("active")})}),window.addEventListener("scroll",function(){let E=document.documentElement.scrollTop||document.body.scrollTop,S=document.documentElement.scrollHeight-document.documentElement.clientHeight,A=E/S*100;document.getElementById("scrollProgress").style.width=A+"%"});let l=document.querySelector(".glass-nav");window.addEventListener("scroll",function(){window.scrollY>50?l.classList.add("scrolled"):l.classList.remove("scrolled")});let c=document.querySelectorAll("section[id], header[id]"),u=document.querySelectorAll(".nav-link");window.addEventListener("scroll",function(){let E="";c.forEach(function(S){let A=S.offsetTop-120;window.scrollY>=A&&(E=S.getAttribute("id")||"")}),u.forEach(function(S){S.classList.remove("active"),S.getAttribute("href")==="#"+E&&S.classList.add("active")})});let d=document.getElementById("backToTop");window.addEventListener("scroll",function(){window.scrollY>400?d.classList.add("visible"):d.classList.remove("visible")}),d.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});let h=document.querySelectorAll(".stat-number"),f=!1;function g(){h.forEach(function(E){let S=parseInt(E.getAttribute("data-target")),x=S/(2e3/16),T=0;function R(){T+=x,T<S?(E.textContent=Math.ceil(T).toString(),requestAnimationFrame(R)):E.textContent=S.toString()}R()})}function _(){document.querySelectorAll(".skill-fill").forEach(function(S){let A=S.getAttribute("data-width");S.style.width=A+"%"})}let p=new IntersectionObserver(function(E){E.forEach(function(S){S.isIntersecting&&(S.target.classList.add("visible"),S.target.classList.contains("stat-card")&&!f&&(f=!0,g()),S.target.classList.contains("skill-card")&&_())})},{threshold:.2});document.querySelectorAll(".fade-in").forEach(function(E){p.observe(E)}),window.innerWidth>768&&document.querySelectorAll(".tilt-card").forEach(function(S){S.addEventListener("mousemove",function(A){let x=S.getBoundingClientRect(),T=A.clientX-x.left,R=A.clientY-x.top,P=x.width/2,I=x.height/2,V=(R-I)/15,B=(P-T)/15;S.style.transform="perspective(1000px) rotateX("+V+"deg) rotateY("+B+"deg) translateY(-5px)"}),S.addEventListener("mouseleave",function(){S.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateY(0)"})});let v=document.getElementById("custom-cursor");v&&(document.addEventListener("mousemove",S=>{v.style.left=S.clientX+"px",v.style.top=S.clientY+"px"}),document.querySelectorAll("a, button, input, .skill-card, .project-card").forEach(S=>{S.addEventListener("mouseenter",()=>{v.classList.add("hovering")}),S.addEventListener("mouseleave",()=>{v.classList.remove("hovering")})}));let b=document.getElementById("terminal-input"),M=document.getElementById("terminal-history");if(b&&M){b.addEventListener("keydown",function(S){if(S.key==="Enter"){let A=this.value.trim();if(!A)return;let x=document.createElement("p");x.innerHTML=`<span class="prompt">$</span> ${A}`,M.appendChild(x);let T=document.createElement("p");T.className="terminal-output";let R=A.toLowerCase();if(R==="help")T.innerHTML="Available commands: help, whoami, skills, projects, clear, sudo, execute &lt;lang&gt;, download cv<br>Supported langs: rust, go, cpp, kotlin, clojurescript, webassembly, csharp, dart";else if(R==="download cv")if(T.innerHTML="Generating Premium PDF Resume... Please wait.",window.generatePDFResume)try{let I=window.generatePDFResume();I instanceof Promise&&I.catch(V=>{T.innerHTML+='<br><span style="color:red">Error: PDF generation failed.</span>',console.error(V)})}catch(I){T.innerHTML+='<br><span style="color:red">Error: PDF generation failed.</span>',console.error(I)}else T.innerHTML+='<br><span style="color:red">Error: PDF module not loaded.</span>';else if(R==="matrix")document.body.className="theme-matrix",T.innerHTML='<span style="color:#0f0">Wake up, Neo... The Matrix has you.</span>';else if(R==="apple")document.body.className="theme-apple-light",T.innerHTML='<span style="color:#555">Think Different. Apple Light Mode enabled.</span>';else if(R==="dark")document.body.className="",T.innerHTML="Restored Premium Dark Mode.";else if(R.startsWith("execute ")){let I=R.split(" ")[1];(async()=>{try{if(I==="dart"&&window.handleTerminalDart){let B=await window.handleTerminalDart();T.innerHTML=B,T.style.color="#00B4AB"}else if(window.polyglotExecutors&&window.polyglotExecutors[I]){let B=await window.polyglotExecutors[I]();T.innerHTML=B,T.style.color="#FFD700"}else T.innerHTML=`Executor for '${I}' not found in Polyglot engine.`,T.style.color="red"}catch(B){T.innerHTML=`<span style="color:red">Error executing '${I}': ${B}</span>`}})()}else R==="whoami"?T.innerHTML="Rashid Khan Ap - Enterprise Full-Stack Developer":R==="skills"?T.innerHTML='["Python", "TypeScript", "FastAPI", "Django", "SCSS", "Docker", "DevSecOps"]':R==="projects"?T.innerHTML='Loading enterprise repositories... <a href="#projects" style="color:var(--accent-color)">[Click Here]</a>':R==="clear"?M.innerHTML="":R==="sudo"?(T.innerHTML="nice try. This incident will be reported.",T.style.color="red"):T.innerHTML=`bash: ${A}: command not found`;R!=="clear"&&M.appendChild(T);let P=document.getElementById("terminal-body");if(P&&(P.scrollTop=P.scrollHeight),window.playTypeSound)try{window.playTypeSound()}catch{}this.value=""}});let E=document.getElementById("terminal-body");E&&E.addEventListener("click",()=>{b.focus()})}});window.generatePDFResume=async function(){return new Promise((r,e)=>{if(!window.html2pdf){e("html2pdf library not loaded.");return}let t=document.createElement("div");t.style.padding="40px",t.style.fontFamily="Inter, sans-serif",t.style.color="#333",t.style.background="#fff",t.innerHTML=`
            <div style="border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 32px; color: #111;">Rashid Khan Ap</h1>
                <p style="margin: 5px 0 0; font-size: 16px; color: #555;">Enterprise Full-Stack Developer</p>
                <p style="margin: 5px 0 0; font-size: 14px; color: #777;">Python \u2022 FastAPI \u2022 Django \u2022 TypeScript \u2022 Go</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h2 style="font-size: 20px; color: #222; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Experience & Skills</h2>
                <ul style="line-height: 1.6; color: #444; font-size: 14px;">
                    <li><strong>Languages:</strong> Python, TypeScript, Rust, Go, C#, C++, Dart</li>
                    <li><strong>Frameworks:</strong> FastAPI, Django, React, WebGL (Three.js), GSAP</li>
                    <li><strong>Architecture:</strong> Microservices, Event-Driven, Polyglot Orchestration</li>
                </ul>
            </div>
            <div>
                <h2 style="font-size: 20px; color: #222; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Projects</h2>
                <ul style="line-height: 1.6; color: #444; font-size: 14px;">
                    <li><strong>Enterprise Web Apps:</strong> Secure, scalable REST & GraphQL backends.</li>
                    <li><strong>Polyglot Microservices:</strong> Interoperable services across 13 languages.</li>
                    <li><strong>3D Data Visualization:</strong> WebGL accelerated interactive data tools.</li>
                </ul>
            </div>
            <p style="margin-top: 40px; text-align: center; font-size: 12px; color: #999;">
                Generated dynamically via RashidKhanApDev Terminal
            </p>
        `;let n={margin:1,filename:"Rashid_Khan_Ap_Resume.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};window.html2pdf().set(n).from(t).save().then(()=>{r("PDF generated and downloading successfully.")}).catch(i=>{e(i)})})}});rT();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=app.js.map
