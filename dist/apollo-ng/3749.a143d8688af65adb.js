"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[3749],{3749:(V,f,c)=>{c.d(f,{e4:()=>B,zH:()=>_});var d=c(6825),p=c(6814),t=c(8926),C=c(6223),m=c(2076),g=c(2332),v=c(5219);const k=["container"],b=["input"],M=["colorSelector"],w=["colorHandle"],y=["hue"],H=["hueHandle"],x=function(r){return{"p-disabled":r}};function D(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"input",4,5),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onInputClick())})("keydown",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onInputKeydown(o))})("focus",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onInputFocus())}),t.qZA()}if(2&r){const e=t.oxw();t.Udp("background-color",e.inputBgColor),t.Q6J("ngClass",t.VKq(7,x,e.disabled))("disabled",e.disabled),t.uIk("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")}}const T=function(r,u){return{"p-colorpicker-panel":!0,"p-colorpicker-overlay-panel":r,"p-disabled":u}},E=function(r,u){return{showTransitionParams:r,hideTransitionParams:u}},L=function(r){return{value:"visible",params:r}};function S(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onOverlayClick(o))})("@overlayAnimation.start",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onOverlayAnimationStart(o))})("@overlayAnimation.done",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onOverlayAnimationEnd(o))}),t.TgZ(1,"div",7)(2,"div",8,9),t.NdJ("touchstart",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onColorDragStart(o))})("touchmove",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onDrag(o))})("touchend",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onDragEnd())})("mousedown",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onColorMousedown(o))}),t.TgZ(4,"div",10),t._UZ(5,"div",11,12),t.qZA()(),t.TgZ(7,"div",13,14),t.NdJ("mousedown",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onHueMousedown(o))})("touchstart",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onHueDragStart(o))})("touchmove",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onDrag(o))})("touchend",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onDragEnd())}),t._UZ(9,"div",15,16),t.qZA()()()}if(2&r){const e=t.oxw();t.Q6J("ngClass",t.WLB(10,T,!e.inline,e.disabled))("@overlayAnimation",t.VKq(16,L,t.WLB(13,E,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",!0===e.inline),t.uIk("data-pc-section","panel"),t.xp6(1),t.uIk("data-pc-section","content"),t.xp6(1),t.uIk("data-pc-section","selector"),t.xp6(2),t.uIk("data-pc-section","color"),t.xp6(1),t.uIk("data-pc-section","colorHandle"),t.xp6(2),t.uIk("data-pc-section","hue"),t.xp6(2),t.uIk("data-pc-section","hueHandle")}}const I=function(r,u){return{"p-colorpicker p-component":!0,"p-colorpicker-overlay":r,"p-colorpicker-dragging":u}},P={provide:C.JU,useExisting:(0,t.Gpc)(()=>_),multi:!0};let _=(()=>{class r{document;platformId;el;renderer;cd;config;overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onChange=new t.vpe;onShow=new t.vpe;onHide=new t.vpe;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;window;constructor(e,i,o,n,s,l,a){this.document=e,this.platformId=i,this.el=o,this.renderer=n,this.cd=s,this.config=l,this.overlayService=a,this.window=this.document.defaultView}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,i){let o=i?i.pageY:e.pageY,n=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,o-n)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,i){let o=i?i.pageX:e.pageX,n=i?i.pageY:e.pageY,s=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),l=s.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),h=Math.floor(100*Math.max(0,Math.min(150,o-(s.left+this.document.body.scrollLeft)))/150),O=Math.floor(100*(150-Math.max(0,Math.min(150,n-l)))/150);this.value=this.validateHSB({h:this.value.h,s:h,b:O}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value}return e}updateModel(){this.onModelChange(this.getValueToUpdate())}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){const e={s:100,b:100};e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&g.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide()}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&g.P9.clear(e.element),this.onHide.emit({})}}appendOverlay(){this.appendTo&&("body"===this.appendTo?this.renderer.appendChild(this.document.body,this.overlay):m.p.appendChild(this.overlay,this.appendTo))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?m.p.absolutePosition(this.overlay,this.inputViewChild?.nativeElement):m.p.relativePosition(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide()}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){this.documentMousemoveListener||(this.documentMousemoveListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","mousemove",i=>{this.colorDragging&&this.pickColor(i),this.hueDragging&&this.pickHue(i)}))}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){this.documentMouseupListener||(this.documentMouseupListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}))}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){(0,p.NF)(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!m.p.isTouchDevice()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new m.V(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var i=6-e.length;if(i>0){for(var o=[],n=0;n<i;n++)o.push("0");o.push(e),e=o.join("")}return e}HEXtoRGB(e){let i=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:i>>16,g:(65280&i)>>8,b:255&i}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var i={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),n=Math.max(e.r,e.g,e.b),s=n-o;return i.b=n,i.s=0!=n?255*s/n:0,i.h=0!=i.s?e.r==n?(e.g-e.b)/s:e.g==n?2+(e.b-e.r)/s:4+(e.r-e.g)/s:-1,i.h*=60,i.h<0&&(i.h+=360),i.s*=100/255,i.b*=100/255,i}HSBtoRGB(e){var i={r:0,g:0,b:0};let o=e.h,n=255*e.s/100,s=255*e.b/100;if(0==n)i={r:s,g:s,b:s};else{let l=s,a=(255-n)*s/255,h=o%60*(l-a)/60;360==o&&(o=0),o<60?(i.r=l,i.b=a,i.g=a+h):o<120?(i.g=l,i.b=a,i.r=l-h):o<180?(i.g=l,i.r=a,i.b=a+h):o<240?(i.b=l,i.r=a,i.g=l-h):o<300?(i.b=l,i.g=a,i.r=a+h):o<360?(i.r=l,i.g=a,i.b=l-h):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}RGBtoHEX(e){var i=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var o in i)1==i[o].length&&(i[o]="0"+i[o]);return i.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&g.P9.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(i){return new(i||r)(t.Y36(p.K0),t.Y36(t.Lbi),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(v.b4),t.Y36(v.F0))};static \u0275cmp=t.Xpm({type:r,selectors:[["p-colorPicker"]],viewQuery:function(i,o){if(1&i&&(t.Gf(k,5),t.Gf(b,5),t.Gf(M,5),t.Gf(w,5),t.Gf(y,5),t.Gf(H,5)),2&i){let n;t.iGM(n=t.CRH())&&(o.containerViewChild=n.first),t.iGM(n=t.CRH())&&(o.inputViewChild=n.first),t.iGM(n=t.CRH())&&(o.colorSelector=n.first),t.iGM(n=t.CRH())&&(o.colorHandle=n.first),t.iGM(n=t.CRH())&&(o.hue=n.first),t.iGM(n=t.CRH())&&(o.hueHandle=n.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",inline:"inline",format:"format",appendTo:"appendTo",disabled:"disabled",tabindex:"tabindex",inputId:"inputId",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[t._Bn([P])],decls:4,vars:11,consts:[[3,"ngStyle","ngClass"],["container",""],["type","text","class","p-colorpicker-preview p-inputtext","readonly","readonly",3,"ngClass","disabled","backgroundColor","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview","p-inputtext",3,"ngClass","disabled","click","keydown","focus"],["input",""],[3,"ngClass","click"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],["colorSelector",""],[1,"p-colorpicker-color"],[1,"p-colorpicker-color-handle"],["colorHandle",""],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],["hue",""],[1,"p-colorpicker-hue-handle"],["hueHandle",""]],template:function(i,o){1&i&&(t.TgZ(0,"div",0,1),t.YNc(2,D,2,9,"input",2),t.YNc(3,S,11,18,"div",3),t.qZA()),2&i&&(t.Tol(o.styleClass),t.Q6J("ngStyle",o.style)("ngClass",t.WLB(8,I,!o.inline,o.colorDragging||o.hueDragging)),t.uIk("data-pc-name","colorpicker")("data-pc-section","root"),t.xp6(2),t.Q6J("ngIf",!o.inline),t.xp6(1),t.Q6J("ngIf",o.inline||o.overlayVisible))},dependencies:[p.mk,p.O5,p.PC],styles:["@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}\n"],encapsulation:2,data:{animation:[(0,d.X$)("overlayAnimation",[(0,d.eR)(":enter",[(0,d.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,d.jt)("{{showTransitionParams}}")]),(0,d.eR)(":leave",[(0,d.jt)("{{hideTransitionParams}}",(0,d.oB)({opacity:0}))])])]},changeDetection:0})}return r})(),B=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=t.oAB({type:r});static \u0275inj=t.cJS({imports:[p.ez]})}return r})()}}]);