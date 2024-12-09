"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9188],{9188:function(e,t,a){a.r(t),a.d(t,{decodeGIF:function(){return T},drawGif:function(){return C},getGIFLoopAmount:function(){return B},loadGifImage:function(){return D}});var r=a(4165),n=a(7762),i=a(5861),o=[0,4,2,1],s=[8,8,4,2],c=a(5671),l=a(3144),u=function(){function e(t){(0,c.Z)(this,e),this.pos=0,this.data=new Uint8ClampedArray(t)}return(0,l.Z)(e,[{key:"getString",value:function(e){var t=this.data.slice(this.pos,this.pos+e);return this.pos+=t.length,t.reduce((function(e,t){return e+String.fromCharCode(t)}),"")}},{key:"nextByte",value:function(){return this.data[this.pos++]}},{key:"nextTwoBytes",value:function(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}},{key:"readSubBlocks",value:function(){var e="",t=0;do{for(var a=t=this.data[this.pos++];--a>=0;e+=String.fromCharCode(this.data[this.pos++]));}while(0!==t);return e}},{key:"readSubBlocksBin",value:function(){for(var e=this.data[this.pos],t=0,a=0;0!==e;a+=e+1,e=this.data[this.pos+a])t+=e;var r=new Uint8Array(t);e=this.data[this.pos++];for(var n=0;0!==e;e=this.data[this.pos++])for(var i=e;--i>=0;r[n++]=this.data[this.pos++]);return r}},{key:"skipSubBlocks",value:function(){for(;0!==this.data[this.pos];this.pos+=this.data[this.pos]+1);this.pos++}}]),e}(),h={x:0,y:0},f=0,p=.5,g=0,d=0,x=0;function w(e,t){for(var a=[],r=0;r<t;r++)a.push({r:e.data[e.pos],g:e.data[e.pos+1],b:e.data[e.pos+2]}),e.pos+=3;return a}function b(e,t,a,r){switch(e.nextByte()){case 249:var n=t.frames[a(!1)];e.pos++;var i=e.nextByte();n.GCreserved=(224&i)>>>5,n.disposalMethod=(28&i)>>>2,n.userInputDelayFlag=2===(2&i);var o=1===(1&i);n.delayTime=10*e.nextTwoBytes();var s=e.nextByte();o&&r(s),e.pos++;break;case 255:e.pos++;var c={identifier:e.getString(8),authenticationCode:e.getString(3),data:e.readSubBlocksBin()};t.applicationExtensions.push(c);break;case 254:t.comments.push([a(!1),e.readSubBlocks()]);break;case 1:if(0===t.globalColorTable.length)throw new EvalError("plain text extension without global color table");e.pos++,t.frames[a(!1)].plainTextData={left:e.nextTwoBytes(),top:e.nextTwoBytes(),width:e.nextTwoBytes(),height:e.nextTwoBytes(),charSize:{width:e.nextTwoBytes(),height:e.nextTwoBytes()},foregroundColor:e.nextByte(),backgroundColor:e.nextByte(),text:e.readSubBlocks()};break;default:e.skipSubBlocks()}}function m(e,t,a,r,n,i){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)((0,r.Z)().mark((function e(t,a,i,c,l,u){var h,f,p,g,d,x,b,m,y,v,k,B,T,I,C,D,E,S,Z,F,R,A,G,L,z,M,N,O,U,P,Q,W,j,q,H,J,K,V,X,Y,$,_,ee,te,ae;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((h=a.frames[c(!0)]).left=t.nextTwoBytes(),h.top=t.nextTwoBytes(),h.width=t.nextTwoBytes(),h.height=t.nextTwoBytes(),f=t.nextByte(),p=128===(128&f),g=64===(64&f),h.sortFlag=32===(32&f),h.reserved=(24&f)>>>3,d=1<<1+(7&f),p&&(h.localColorTable=w(t,d)),x=function(e){var t=(p?h.localColorTable:a.globalColorTable)[e],r=t.r,n=t.g,o=t.b;return e!==l(null)?{r:r,g:n,b:o,a:255}:{r:r,g:n,b:o,a:i?~~((r+n+o)/3):0}},null!=(b=function(){try{return new ImageData(h.width,h.height,{colorSpace:"srgb"})}catch(e){if(e instanceof DOMException&&"IndexSizeError"===e.name)return null;throw e}}())){e.next=14;break}throw new EvalError("GIF frame size is to large");case 14:if(m=t.nextByte(),y=t.readSubBlocksBin(),v=1<<m,k=function(e,t){var a=e>>>3,r=7&e;return(y[a]+(y[a+1]<<8)+(y[a+2]<<16)&(1<<t)-1<<r)>>>r},!g){e.next=24;break}for(B=0,T=m+1,I=0,C=[[0]],D=0;D<4;D++){if(o[D]<h.height)for(E=0,S=0,Z=!1;!Z;){if(F=B,B=k(I,T),I+=T+1,B===v)for(T=m+1,C.length=v+2,R=0;R<C.length;R++)C[R]=R<v?[R]:[];else{B>=C.length?C.push(C[F].concat(C[F][0])):F!==v&&C.push(C[F].concat(C[B][0])),A=(0,n.Z)(C[B]);try{for(A.s();!(G=A.n()).done;)L=G.value,z=x(L),M=z.r,N=z.g,O=z.b,U=z.a,b.data.set([M,N,O,U],o[D]*h.width+s[D]*S+E%(4*h.width)),E+=4}catch(r){A.e(r)}finally{A.f()}C.length===1<<T&&T<12&&T++}E===4*h.width*(S+1)&&(S++,o[D]+s[D]*S>=h.height&&(Z=!0))}null===u||void 0===u||u(t.pos/(t.data.length-1),c(!1)+1,b,{x:h.left,y:h.top},{width:a.width,height:a.height})}return h.image=b,e.next=21,createImageBitmap(b);case 21:h.bitmap=e.sent,e.next=50;break;case 24:P=0,Q=m+1,W=0,j=-4,q=!1,H=[[0]];case 26:if(q){e.next=45;break}if(J=P,P=k(W,Q),W+=Q,P!==v){e.next=36;break}for(Q=m+1,H.length=v+2,K=0;K<H.length;K++)H[K]=K<v?[K]:[];e.next=43;break;case 36:if(P!==v+1){e.next=39;break}return q=!0,e.abrupt("break",45);case 39:P>=H.length?H.push(H[J].concat(H[J][0])):J!==v&&H.push(H[J].concat(H[P][0])),V=(0,n.Z)(H[P]);try{for(V.s();!(X=V.n()).done;)Y=X.value,$=x(Y),_=$.r,ee=$.g,te=$.b,ae=$.a,b.data.set([_,ee,te,ae],j+=4)}catch(r){V.e(r)}finally{V.f()}H.length>=1<<Q&&Q<12&&Q++;case 43:e.next=26;break;case 45:return h.image=b,e.next=48,createImageBitmap(b);case 48:h.bitmap=e.sent,null===u||void 0===u||u((t.pos+1)/t.data.length,c(!1)+1,h.image,{x:h.left,y:h.top},{width:a.width,height:a.height});case 50:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,a,r,n,i){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,r.Z)().mark((function e(t,a,n,i,o,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.nextByte(),e.next=59===e.t0?3:44===e.t0?4:33===e.t0?7:9;break;case 3:return e.abrupt("return",!0);case 4:return e.next=6,m(t,a,n,i,o,s);case 6:return e.abrupt("break",10);case 7:return b(t,a,i,o),e.abrupt("break",10);case 9:throw new EvalError("undefined block found");case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){var t,a=(0,n.Z)(e.applicationExtensions);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.identifier+r.authenticationCode==="NETSCAPE2.0")return r.data[1]+(r.data[2]<<8)}}catch(i){a.e(i)}finally{a.f()}return NaN}function T(e,t,a){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)((0,r.Z)().mark((function e(t,a,i){var o,s,c,l,h,f,p,g,d,x,b,m,y,k,B,T,I,C,D,E,S,Z;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i||(i=!1),e.next=3,fetch(t);case 3:if((o=e.sent).ok||404!==o.status){e.next=6;break}throw new EvalError("file not found");case 6:return e.next=8,o.arrayBuffer();case 8:if(s=e.sent,c={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},"GIF89a"===(l=new u(new Uint8ClampedArray(s))).getString(6)){e.next=12;break}throw new Error("not a supported GIF file");case 12:if(c.width=l.nextTwoBytes(),c.height=l.nextTwoBytes(),h=l.nextByte(),f=128===(128&h),c.colorRes=(112&h)>>>4,c.sortFlag=8===(8&h),p=1<<1+(7&h),g=l.nextByte(),c.pixelAspectRatio=l.nextByte(),0!==c.pixelAspectRatio&&(c.pixelAspectRatio=(c.pixelAspectRatio+15)/64),f&&(c.globalColorTable=w(l,p)),null!=(d=function(){try{return new ImageData(c.width,c.height,{colorSpace:"srgb"})}catch(e){if(e instanceof DOMException&&"IndexSizeError"===e.name)return null;throw e}}())){e.next=24;break}throw new Error("GIF frame size is to large");case 24:for(x=c.globalColorTable[g],b=x.r,m=x.g,y=x.b,d.data.set(f?[b,m,y,255]:[0,0,0,0]),k=4;k<d.data.length;k*=2)d.data.copyWithin(k,0,k);c.backgroundImage=d,B=-1,T=!0,I=-1,C=function(e){return e&&(T=!0),B},D=function(e){return null!=e&&(I=e),I},e.prev=31;case 32:T&&(c.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),B++,I=-1,T=!1);case 33:return e.next=35,v(l,c,i,C,D,a);case 35:if(!e.sent){e.next=32;break}case 36:c.frames.length--,E=(0,n.Z)(c.frames),e.prev=38,E.s();case 40:if((S=E.n()).done){e.next=48;break}if(!(Z=S.value).userInputDelayFlag||0!==Z.delayTime){e.next=45;break}return c.totalTime=1/0,e.abrupt("break",48);case 45:c.totalTime+=Z.delayTime;case 46:e.next=40;break;case 48:e.next=53;break;case 50:e.prev=50,e.t0=e.catch(38),E.e(e.t0);case 53:return e.prev=53,E.f(),e.finish(53);case 56:return e.abrupt("return",c);case 59:if(e.prev=59,e.t1=e.catch(31),!(e.t1 instanceof EvalError)){e.next=63;break}throw new Error("error while parsing frame ".concat(B,' "').concat(e.t1.message,'"'));case 63:throw e.t1;case 64:case"end":return e.stop()}}),e,null,[[31,59],[38,50,53,56]])})))).apply(this,arguments)}function C(e){var t,a=e.context,r=e.radius,n=e.particle,i=e.delta,o=n.image;if(null!==o&&void 0!==o&&o.gifData&&o.gif){var s,c=new OffscreenCanvas(o.gifData.width,o.gifData.height),l=c.getContext("2d");if(!l)throw new Error("could not create offscreen canvas context");if(l.imageSmoothingQuality="low",l.imageSmoothingEnabled=!1,l.clearRect(h.x,h.y,c.width,c.height),void 0===n.gifLoopCount)n.gifLoopCount=null!==(s=o.gifLoopCount)&&void 0!==s?s:x;var u=null!==(t=n.gifFrame)&&void 0!==t?t:f,w={x:-o.gifData.width*p,y:-o.gifData.height*p},b=o.gifData.frames[u];if(void 0===n.gifTime&&(n.gifTime=g),b.bitmap){switch(a.scale(r/o.gifData.width,r/o.gifData.height),b.disposalMethod){case 4:case 5:case 6:case 7:case 0:l.drawImage(b.bitmap,b.left,b.top),a.drawImage(c,w.x,w.y),l.clearRect(h.x,h.y,c.width,c.height);break;case 1:l.drawImage(b.bitmap,b.left,b.top),a.drawImage(c,w.x,w.y);break;case 2:l.drawImage(b.bitmap,b.left,b.top),a.drawImage(c,w.x,w.y),l.clearRect(h.x,h.y,c.width,c.height),o.gifData.globalColorTable.length?l.putImageData(o.gifData.backgroundImage,w.x,w.y):l.putImageData(o.gifData.frames[d].image,w.x+b.left,w.y+b.top);break;case 3:var m=l.getImageData(h.x,h.y,c.width,c.height);l.drawImage(b.bitmap,b.left,b.top),a.drawImage(c,w.x,w.y),l.clearRect(h.x,h.y,c.width,c.height),l.putImageData(m,h.x,h.y)}if(n.gifTime+=i.value,n.gifTime>b.delayTime){if(n.gifTime-=b.delayTime,++u>=o.gifData.frames.length){if(--n.gifLoopCount<=x)return;u=d,l.clearRect(h.x,h.y,c.width,c.height)}n.gifFrame=u}a.scale(o.gifData.width/r,o.gifData.height/r)}}}function D(e){return E.apply(this,arguments)}function E(){return(E=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("gif"===t.type){e.next=8;break}return e.next=3,Promise.resolve().then(a.bind(a,9602));case 3:return n=e.sent,i=n.loadImage,e.next=7,i(t);case 7:return e.abrupt("return");case 8:return t.loading=!0,e.prev=9,e.next=12,T(t.source);case 12:t.gifData=e.sent,t.gifLoopCount=null!==(o=B(t.gifData))&&void 0!==o?o:x,t.gifLoopCount||(t.gifLoopCount=1/0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),t.error=!0;case 20:t.loading=!1;case 21:case"end":return e.stop()}}),e,null,[[9,17]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=9188.86171ebb.chunk.js.map