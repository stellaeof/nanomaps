(function(e){var d=e.MapSurface.prototype;function a(){return !!document.addEventListener}function g(l){return l._touchState}function k(q,l,o){var n,r,p=o.touches,m=[];for(n=0;n<p.length;n++){r=p[n];m.push(q.eventToContainer(r))}l.t=m}function h(l){l.s="";l.l=null;l.c=null;l.z=null;if(l.iid){clearInterval(l.iid);l.iid=null}if(l.tkey){clearTimeout(l.tkey);l.tkey=null}}function f(m){var n,l=0,o=0;for(n=0;n<m.t.length;n++){l+=m.t[n].x;o+=m.t[n].y}l/=n;o/=n;return{x:l,y:o}}function c(o){var l=Math.abs(o),n=o/l,m=100;if(l>250||l<m){return o}return m*n}function b(m,l){if(l.iid){clearInterval(l.iid)}l.iid=setInterval(function(){var o=c(l.dn),n=c(l.de);if(o||n){m.moveBy(n,o);l.dn-=o;l.de-=n}},65)}d._handleTouch=function(s){s.preventDefault();var p=this,o=this._touchState,n=o.t.length,m,l,q,r;switch(s.type){case"touchmove":k(this,o,s);if((o.s==="move"||o.s==="start")&&o.t.length===1){o.s="move";o.de+=o.l.x-o.t[0].x;o.dn+=o.t[0].y-o.l.y;o.l=o.t[0]}break;case"gesturechange":if(o.s!=="gesture"){o.c=f(o);o.z=map.getLevel()}o.s="gesture";q=o.z;r=q+Math.log(s.scale)*1.5;p.setLevel(r,o.c);break;case"touchstart":k(this,o,s);if(n==0&&o.t.length){o.s="start";o.dn=0;o.de=0;b(this,o);o.l=o.t[0]}break;case"touchend":k(this,o,s);if(!o.t.length){h(o)}if(o.de||o.dn){this.moveBy(o.de,o.dn)}break;case"gestureend":h(o);break;case"touchmove":k(this,o,s);if((o.s==="move"||o.s==="start")&&o.t.length===1){o.s="move";m=o.l.x-o.t[0].x;l=o.l.y-o.t[0].y;o.l=o.t[0];this.moveBy(m,-l)}break;case"touchcancel":h(o);break}};function j(l){return function(m){return l._handleTouch(m)}}if(a()){d.advise("initialize","after",function(l){this._touchState={t:[]};var m=["touchstart","touchend","touchmove","touchcancel","gesturechange","gestureend"],n=j(this);this.elements.glass.style.display="block";for(i=0;i<m.length;i++){this.elements.glass.addEventListener(m[i],n,true)}})}})(nanomaps);