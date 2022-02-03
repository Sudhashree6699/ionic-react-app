"use strict";(self.webpackChunkTestApp=self.webpackChunkTestApp||[]).push([[7220],{7220:function(e,t,i){i.r(t),i.d(t,{ion_nav:function(){return l},ion_nav_link:function(){return d}});var n=i(9388),r=i(4039),o=i(323),s=i(5147),a=i(4960),u=i(7481),c=i(2832),h=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t,i;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,i=this,[4,(0,c.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:i.element=n.sent(),n.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){(0,a.m)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),p=function(e,t,i){if(!e)return!1;if(e.component!==t)return!1;var n=e.params;if(n===i)return!0;if(!n&&!i)return!0;if(!n||!i)return!1;var r=Object.keys(n),o=Object.keys(i);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(n[u]!==i[u])return!1}return!0},v=function(e,t){return e?e instanceof h?e:new h(e,t):null},l=function(){function e(e){(0,r.r)(this,e),this.ionNavWillLoad=(0,r.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,r.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,r.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=(0,o.b)(this);this.swipeGesture=o.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e;return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,i.e(1824).then(i.bind(i,1824))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.disconnectedCallback=function(){for(var e=0,t=this.views;e<t.length;e++){var i=t[e];(0,u.l)(i.element,u.d),i._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,i,n){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:i},n)},e.prototype.insert=function(e,t,i,n,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:i}],opts:n},r)},e.prototype.insertPages=function(e,t,i,n){return this.queueTrns({insertStart:e,insertViews:t,opts:i},n)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,i){var n={removeStart:-1,removeCount:-1,opts:t};return"object"===typeof e&&e.component?(n.removeView=e,n.removeStart=1):"number"===typeof e&&(n.removeStart=e+1),this.queueTrns(n,i)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,i,n){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:i},n)},e.prototype.setRoot=function(e,t,i,n){return this.setPages([{component:e,componentProps:t}],i,n)},e.prototype.setPages=function(e,t,i){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)},e.prototype.setRouteId=function(e,t,i,r){var o,s=this,a=this.getActiveSync();if(p(a,e,t))return Promise.resolve({changed:!1,element:a.element});var u,c=new Promise((function(e){return o=e})),h={updateURL:!1,viewIsReady:function(e){var t,i=new Promise((function(e){return t=e}));return o({changed:!0,element:e,markVisible:function(){return(0,n.mG)(s,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return t(),[4,u];case 1:return e.sent(),[2]}}))}))}}),i}};if("root"===i)u=this.setRoot(e,t,h);else{var v=this.views.find((function(i){return p(i,e,t)}));v?u=this.popTo(v,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:r})):"forward"===i?u=this.push(e,t,Object.assign(Object.assign({},h),{animationBuilder:r})):"back"===i&&(u=this.setRoot(e,t,Object.assign(Object.assign({},h),{direction:"back",animated:!0,animationBuilder:r})))}return c},e.prototype.getRouteId=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e;return(0,n.Jh)(this,(function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,i=t.indexOf(e);return i>0?t[i-1]:void 0}},e.prototype.queueTrns=function(e,t){return(0,n.mG)(this,void 0,void 0,(function(){var i,r,o;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy?[2,Promise.resolve(!1)]:(i=new Promise((function(t,i){e.resolve=t,e.reject=i})),e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter&&(r=document.querySelector("ion-router"))?[4,r.canTransition()]:[3,2]);case 1:if(!1===(o=n.sent()))return[2,Promise.resolve(!1)];if("string"===typeof o)return r.push(o,e.opts.direction||"back"),[2,Promise.resolve(!1)];n.label=2;case 2:return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),[2,i]}}))}))},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var i=document.querySelector("ion-router");if(i){var n="back"===e.direction?"back":"forward";i.navChanged(n)}}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t,i,r,o,s,a;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:if(n.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),i=this.getEnteringView(e,t),!t&&!i)throw new Error("no views in the stack to be removed");return i&&1===i.state?[4,i.init(this.el)]:[3,2];case 1:n.sent(),n.label=2;case 2:return this.postViewInit(i,t,e),(r=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==t)&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i&&i.animationBuilder),t.animationBuilder=e.opts.animationBuilder),r?[4,this.transition(i,t,e)]:[3,4];case 3:return s=n.sent(),[3,5];case 4:s={hasCompleted:!0,requiresTransition:!1},n.label=5;case 5:return o=s,this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return a=n.sent(),this.failed(a,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){(0,a.m)(void 0!==e.removeStart,"removeView needs removeStart"),(0,a.m)(void 0!==e.removeCount,"removeView needs removeCount");var i=this.views.indexOf(e.removeView);if(i<0)throw new Error("removeView was not found");e.removeStart+=i}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var n=e.insertViews;if(n){(0,a.m)(n.length>0,"length can not be zero");var r=function(e){return e.map((function(e){return e instanceof h?e:"component"in e?v(e.component,null===e.componentProps?void 0:e.componentProps):v(e,void 0)})).filter((function(e){return null!==e}))}(n);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,s=r;o<s.length;o++){var u=s[o];u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var i=e.insertViews;if(void 0!==i)return i[i.length-1];var n=e.removeStart;if(void 0!==n)for(var r=this.views,o=n+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<n||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,i){(0,a.m)(t||e,"Both leavingView and enteringView are null"),(0,a.m)(i.resolve,"resolve must be valid"),(0,a.m)(i.reject,"reject must be valid");var n,r=i.opts,o=i.insertViews,s=i.removeStart,c=i.removeCount;if(void 0!==s&&void 0!==c){(0,a.m)(s>=0,"removeStart can not be negative"),(0,a.m)(c>=0,"removeCount can not be negative"),n=[];for(var h=0;h<c;h++){(m=this.views[h+s])&&m!==e&&m!==t&&n.push(m)}r.direction=r.direction||"back"}var p=this.views.length+(void 0!==o?o.length:0)-(void 0!==c?c:0);if((0,a.m)(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var v=i.insertStart,l=0,d=o;l<d.length;l++){var m=d[l];this.insertViewAt(m,v),v++}i.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(n&&n.length>0){for(var f=0,g=n;f<g.length;f++){m=g[f];(0,u.l)(m.element,u.b),(0,u.l)(m.element,u.c),(0,u.l)(m.element,u.d)}for(var w=0,y=n;w<y.length;w++){m=y[w];this.destroyView(m)}}},e.prototype.transition=function(e,t,i){return(0,n.mG)(this,void 0,void 0,(function(){var r,s,a,c,h,p,v,l=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return r=i.opts,s=r.progressAnimation?function(e){return l.sbAni=e}:void 0,a=(0,o.b)(this),c=e.element,h=t&&t.element,p=Object.assign(Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,progressCallback:s,animated:this.animated&&o.c.getBoolean("animated",!0),enteringEl:c,leavingEl:h},r),{animationBuilder:r.animationBuilder||this.animation||o.c.get("navAnimation")}),[4,(0,u.t)(p)];case 1:return v=n.sent().hasCompleted,[2,this.transitionFinish(v,e,t,r)]}}))}))},e.prototype.transitionFinish=function(e,t,i,n){var r=e?t:i;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:i,direction:n.direction}},e.prototype.insertViewAt=function(e,t){var i=this.views,n=i.indexOf(e);n>-1?((0,a.m)(e.nav===this,"view is not part of the nav"),i.splice(t,0,i.splice(n,1)[0])):((0,a.m)(!e.nav,"nav is used"),e.nav=this,i.splice(t,0,e))},e.prototype.removeView=function(e){(0,a.m)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,i=t.indexOf(e);(0,a.m)(i>-1,"view must be part of the stack"),i>=0&&t.splice(i,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,i=t.indexOf(e),n=t.length-1;n>=0;n--){var r=t[n],o=r.element;o&&(n>i?((0,u.l)(o,u.d),this.destroyView(r)):n<i&&(0,u.s)(o,!0))}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,i){var n=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){n.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=(0,s.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=(0,s.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,r,i)}},e.prototype.render=function(){return(0,r.h)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!1,configurable:!0}),e}();l.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var d=function(){function e(e){var t=this;(0,r.r)(this,e),this.routerDirection="forward",this.onClick=function(){return function(e,t,i,n,r){var o=e.closest("ion-nav");if(o)if("forward"===t){if(void 0!==i)return o.push(i,n,{skipIfBusy:!0,animationBuilder:r})}else if("root"===t){if(void 0!==i)return o.setRoot(i,n,{skipIfBusy:!0,animationBuilder:r})}else if("back"===t)return o.pop({skipIfBusy:!0,animationBuilder:r});return Promise.resolve(!1)}(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}return e.prototype.render=function(){return(0,r.h)(r.H,{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),e}()}}]);
//# sourceMappingURL=7220.05838b28.chunk.js.map