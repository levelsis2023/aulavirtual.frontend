"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[9502],{4825:(C,d,c)=>{c.d(d,{H:()=>o});var s=c(5592),u=c(6321),e=c(671);function o(r=0,a,l=u.P){let i=-1;return null!=a&&((0,e.K)(a)?l=a:i=a),new s.y(h=>{let f=function m(r){return r instanceof Date&&!isNaN(r)}(r)?+r-l.now():r;f<0&&(f=0);let I=0;return l.schedule(function(){h.closed||(h.next(I++),0<=i?this.schedule(void 0,i):h.complete())},f)})}},1954:(C,d,c)=>{c.d(d,{o:()=>o});var s=c(7394);class u extends s.w0{constructor(a,l){super()}schedule(a,l=0){return this}}const e={setInterval(r,a,...l){const{delegate:i}=e;return i?.setInterval?i.setInterval(r,a,...l):setInterval(r,a,...l)},clearInterval(r){const{delegate:a}=e;return(a?.clearInterval||clearInterval)(r)},delegate:void 0};var m=c(9039);class o extends u{constructor(a,l){super(a,l),this.scheduler=a,this.work=l,this.pending=!1}schedule(a,l=0){var i;if(this.closed)return this;this.state=a;const h=this.id,f=this.scheduler;return null!=h&&(this.id=this.recycleAsyncId(f,h,l)),this.pending=!0,this.delay=l,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(f,this.id,l),this}requestAsyncId(a,l,i=0){return e.setInterval(a.flush.bind(a,this),i)}recycleAsyncId(a,l,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return l;null!=l&&e.clearInterval(l)}execute(a,l){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(a,l);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(a,l){let h,i=!1;try{this.work(a)}catch(f){i=!0,h=f||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),h}unsubscribe(){if(!this.closed){const{id:a,scheduler:l}=this,{actions:i}=l;this.work=this.state=this.scheduler=null,this.pending=!1,(0,m.P)(i,this),null!=a&&(this.id=this.recycleAsyncId(l,a,null)),this.delay=null,super.unsubscribe()}}}},2631:(C,d,c)=>{c.d(d,{v:()=>e});var s=c(4552);class u{constructor(o,r=u.now){this.schedulerActionCtor=o,this.now=r}schedule(o,r=0,a){return new this.schedulerActionCtor(this,o).schedule(a,r)}}u.now=s.l.now;class e extends u{constructor(o,r=u.now){super(o,r),this.actions=[],this._active=!1}flush(o){const{actions:r}=this;if(this._active)return void r.push(o);let a;this._active=!0;do{if(a=o.execute(o.state,o.delay))break}while(o=r.shift());if(this._active=!1,a){for(;o=r.shift();)o.unsubscribe();throw a}}}},6321:(C,d,c)=>{c.d(d,{P:()=>m,z:()=>e});var s=c(1954);const e=new(c(2631).v)(s.o),m=e},4552:(C,d,c)=>{c.d(d,{l:()=>s});const s={now:()=>(s.delegate||Date).now(),delegate:void 0}},2736:(C,d,c)=>{c.d(d,{L:()=>m});var s=c(8926),u=c(4713),e=c(2332);let m=(()=>{class o extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,e.Th)()+")"}static \u0275fac=function(){let a;return function(i){return(a||(a=s.n5z(o)))(i||o)}}();static \u0275cmp=s.Xpm({type:o,selectors:[["ExclamationTriangleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(l,i){1&l&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1)(3,"path",2)(4,"path",3),s.qZA(),s.TgZ(5,"defs")(6,"clipPath",4),s._UZ(7,"rect",5),s.qZA()()()),2&l&&(s.Tol(i.getClassNames()),s.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),s.xp6(1),s.uIk("clip-path",i.pathId),s.xp6(5),s.Q6J("id",i.pathId))},encapsulation:2})}return o})()},3823:(C,d,c)=>{c.d(d,{u:()=>m});var s=c(8926),u=c(4713),e=c(2332);let m=(()=>{class o extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,e.Th)()+")"}static \u0275fac=function(){let a;return function(i){return(a||(a=s.n5z(o)))(i||o)}}();static \u0275cmp=s.Xpm({type:o,selectors:[["InfoCircleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(l,i){1&l&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1),s.qZA(),s.TgZ(3,"defs")(4,"clipPath",2),s._UZ(5,"rect",3),s.qZA()()()),2&l&&(s.Tol(i.getClassNames()),s.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),s.xp6(1),s.uIk("clip-path",i.pathId),s.xp6(3),s.Q6J("id",i.pathId))},encapsulation:2})}return o})()},8468:(C,d,c)=>{c.d(d,{x:()=>m});var s=c(8926),u=c(4713),e=c(2332);let m=(()=>{class o extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,e.Th)()+")"}static \u0275fac=function(){let a;return function(i){return(a||(a=s.n5z(o)))(i||o)}}();static \u0275cmp=s.Xpm({type:o,selectors:[["TimesCircleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(l,i){1&l&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1),s.qZA(),s.TgZ(3,"defs")(4,"clipPath",2),s._UZ(5,"rect",3),s.qZA()()()),2&l&&(s.Tol(i.getClassNames()),s.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),s.xp6(1),s.uIk("clip-path",i.pathId),s.xp6(3),s.Q6J("id",i.pathId))},encapsulation:2})}return o})()},9502:(C,d,c)=>{c.d(d,{$:()=>K,V:()=>J});var s=c(6825),u=c(6814),e=c(8926),m=c(5219),o=c(2591),r=c(2736),a=c(3823),l=c(7778),i=c(8468),h=c(4480),f=c(4825);function I(n,g){if(1&n&&e._UZ(0,"span"),2&n){const t=e.oxw().$implicit;e.Tol("p-message-icon pi "+t.icon),e.uIk("data-pc-section","icon")}}function T(n,g){1&n&&e._UZ(0,"CheckIcon"),2&n&&e.uIk("data-pc-section","icon")}function y(n,g){1&n&&e._UZ(0,"InfoCircleIcon"),2&n&&e.uIk("data-pc-section","icon")}function E(n,g){1&n&&e._UZ(0,"TimesCircleIcon"),2&n&&e.uIk("data-pc-section","icon")}function x(n,g){1&n&&e._UZ(0,"ExclamationTriangleIcon"),2&n&&e.uIk("data-pc-section","icon")}function O(n,g){if(1&n&&(e.TgZ(0,"span",10),e.ynx(1),e.YNc(2,T,1,1,"CheckIcon",11),e.YNc(3,y,1,1,"InfoCircleIcon",11),e.YNc(4,E,1,1,"TimesCircleIcon",11),e.YNc(5,x,1,1,"ExclamationTriangleIcon",11),e.BQk(),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("ngIf","success"===t.severity),e.xp6(1),e.Q6J("ngIf","info"===t.severity),e.xp6(1),e.Q6J("ngIf","error"===t.severity),e.xp6(1),e.Q6J("ngIf","warn"===t.severity)}}function D(n,g){if(1&n&&e._UZ(0,"span",14),2&n){const t=e.oxw(2).$implicit;e.Q6J("innerHTML",t.summary,e.oJD),e.uIk("data-pc-section","summary")}}function w(n,g){if(1&n&&e._UZ(0,"span",15),2&n){const t=e.oxw(2).$implicit;e.Q6J("innerHTML",t.detail,e.oJD),e.uIk("data-pc-section","detail")}}function P(n,g){if(1&n&&(e.ynx(0),e.YNc(1,D,1,2,"span",12),e.YNc(2,w,1,2,"span",13),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",t.summary),e.xp6(1),e.Q6J("ngIf",t.detail)}}function A(n,g){if(1&n&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.uIk("data-pc-section","summary"),e.xp6(1),e.Oqu(t.summary)}}function b(n,g){if(1&n&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.uIk("data-pc-section","detail"),e.xp6(1),e.Oqu(t.detail)}}function L(n,g){if(1&n&&(e.YNc(0,A,2,2,"span",16),e.YNc(1,b,2,2,"span",17)),2&n){const t=e.oxw().$implicit;e.Q6J("ngIf",t.summary),e.xp6(1),e.Q6J("ngIf",t.detail)}}function Z(n,g){if(1&n){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const p=e.oxw().index,v=e.oxw(2);return e.KtG(v.removeMessage(p))}),e._UZ(1,"TimesIcon",21),e.qZA()}2&n&&(e.uIk("aria-label","Close")("data-pc-section","closebutton"),e.xp6(1),e.Q6J("styleClass","p-message-close-icon"),e.uIk("data-pc-section","closeicon"))}const k=function(n,g){return{showTransitionParams:n,hideTransitionParams:g}},B=function(n){return{value:"visible",params:n}};function U(n,g){if(1&n&&(e.TgZ(0,"div",4)(1,"div",5),e.YNc(2,I,1,3,"span",6),e.YNc(3,O,6,4,"span",7),e.YNc(4,P,3,2,"ng-container",1),e.YNc(5,L,2,2,"ng-template",null,8,e.W1O),e.YNc(7,Z,2,4,"button",9),e.qZA()()),2&n){const t=g.$implicit,_=e.MAs(6),p=e.oxw(2);e.Tol("p-message p-message-"+t.severity),e.Q6J("@messageAnimation",e.VKq(12,B,e.WLB(9,k,p.showTransitionOptions,p.hideTransitionOptions))),e.xp6(1),e.uIk("data-pc-section","wrapper"),e.xp6(1),e.Q6J("ngIf",t.icon),e.xp6(1),e.Q6J("ngIf",!t.icon),e.xp6(1),e.Q6J("ngIf",!p.escape)("ngIfElse",_),e.xp6(3),e.Q6J("ngIf",p.closable)}}function S(n,g){if(1&n&&(e.ynx(0),e.YNc(1,U,8,14,"div",3),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.messages)}}function Q(n,g){1&n&&e.GkF(0)}function R(n,g){if(1&n&&(e.TgZ(0,"div",22)(1,"div",5),e.YNc(2,Q,1,0,"ng-container",23),e.qZA()()),2&n){const t=e.oxw();e.Q6J("ngClass","p-message p-message-"+t.severity),e.xp6(2),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}let J=(()=>{class n{messageService;el;cd;set value(t){this.messages=t,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new e.vpe;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(t,_,p){this.messageService=t,this.el=_,this.cd=p}ngAfterContentInit(){this.templates?.forEach(t=>{t.getType(),this.contentTemplate=t.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t){Array.isArray(t)||(t=[t]);const _=t.filter(p=>this.key===p.key);this.messages=this.messages?[...this.messages,..._]:[..._],this.startMessageLifes(_),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let t=this.el.nativeElement.parentElement;return!(!t||!t.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(t){this.messages=this.messages?.filter((_,p)=>p!==t),this.valueChange.emit(this.messages)}get icon(){const t=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(t){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(t=>t.unsubscribe())}startMessageLifes(t){t?.forEach(_=>_.life&&this.startMessageLife(_))}startMessageLife(t){const _=(0,f.H)(t.life).subscribe(()=>{this.messages=this.messages?.filter(p=>p!==t),this.timerSubscriptions=this.timerSubscriptions?.filter(p=>p!==_),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(_)}static \u0275fac=function(_){return new(_||n)(e.Y36(m.ez,8),e.Y36(e.SBq),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-messages"]],contentQueries:function(_,p,v){if(1&_&&e.Suo(v,m.jx,4),2&_){let M;e.iGM(M=e.CRH())&&(p.templates=M)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:8,consts:[["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["staticMessage",""],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["escapeOut",""],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(_,p){if(1&_&&(e.TgZ(0,"div",0),e.YNc(1,S,2,1,"ng-container",1),e.YNc(2,R,3,2,"ng-template",null,2,e.W1O),e.qZA()),2&_){const v=e.MAs(3);e.Tol(p.styleClass),e.Q6J("ngStyle",p.style),e.uIk("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),e.xp6(1),e.Q6J("ngIf",!p.contentTemplate)("ngIfElse",v)}},dependencies:function(){return[u.mk,u.sg,u.O5,u.tP,u.PC,h.H,o.n,a.u,i.x,r.L,l.q]},styles:["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,s.X$)("messageAnimation",[(0,s.eR)(":enter",[(0,s.oB)({opacity:0,transform:"translateY(-25%)"}),(0,s.jt)("{{showTransitionParams}}")]),(0,s.eR)(":leave",[(0,s.jt)("{{hideTransitionParams}}",(0,s.oB)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return n})(),K=(()=>{class n{static \u0275fac=function(_){return new(_||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[u.ez,h.T,o.n,a.u,i.x,r.L,l.q]})}return n})()}}]);