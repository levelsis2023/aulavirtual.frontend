"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[4100],{4100:(x,h,e)=>{e.r(h),e.d(h,{EstadoCursosModule:()=>J});var o=e(6814),v=e(4104),c=e(6223),f=e(9552),m=e(707),s=e(3714),y=e(6804),r=e(4480),l=e(4055),d=e(3965),u=e(1230),C=e(6760),b=e(6651),S=e(7902),T=e(6022),z=e(3722),A=e(1494),R=e(6218),D=e(3259),Z=e(3904),M=e(258),t=e(8926),F=e(3859),E=e(5219),B=e(3999);function I(n,U){1&n&&(t.TgZ(0,"span",2),t._uU(1,"Estado de Cursos"),t.qZA())}function Y(n,U){if(1&n){const i=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6)(4,"p-dropdown",7),t.NdJ("ngModelChange",function(p){t.CHM(i);const g=t.oxw();return t.KtG(g.valuecantciclos=p)})("ngModelChange",function(p){t.CHM(i);const g=t.oxw();return t.KtG(g.onDropdownChange(p))}),t.qZA(),t.TgZ(5,"label",8),t._uU(6,"Seleccione estado "),t.qZA(),t.TgZ(7,"small",9),t._uU(8,"Campo obligatorio * "),t.qZA()()(),t.TgZ(9,"div",5),t._UZ(10,"div",10),t.qZA()()(),t.TgZ(11,"div",11),t._UZ(12,"button",12)(13,"button",13),t.qZA()}if(2&n){const i=t.oxw();t.xp6(4),t.Q6J("autoDisplayFirst",!1)("options",i.cantciclos)("ngModel",i.valuecantciclos),t.xp6(6),t.Udp("background-color",i.backgroundColor)}}let O=(()=>{class n{constructor(i,a,p,g){this.layoutService=i,this.router=a,this.primengConfig=p,this.translate=g,this.backgroundColor=""}get dark(){return"light"!==this.layoutService.config.colorScheme}ngOnInit(){this.listareaformativa=[{name:"\xc1rea de formaci\xf3n 1",value:1,code:"NY"},{name:"\xc1rea de formaci\xf3n 2",value:2,code:"RM"},{name:"\xc1rea de formaci\xf3n 3",value:2,code:"RM"}],this.cantciclos=[{name:"Pendiente",value:1,code:"NY"},{name:"En proceso",value:2,code:"RM"},{name:"Culminado",value:3,code:"NY"},{name:"Desaprobado",value:4,code:"RM"}]}onDropdownChange(i){switch(i.value){case 1:this.backgroundColor="#FFA500";break;case 2:this.backgroundColor="#ffff00";break;case 3:this.backgroundColor="#00ff00";break;case 4:this.backgroundColor="#ff0000";break;default:this.backgroundColor=""}}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(F.P),t.Y36(M.F0),t.Y36(E.b4),t.Y36(B.sK))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-estado-cursos"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-6"],[1,"p-float-label"],["inputId","dropdown","optionLabel","name",3,"autoDisplayFirst","options","ngModel","ngModelChange"],["for","dropdown"],[2,"color","brown"],[2,"width","100%","height","50px"],[1,"row","mb-5","text-right"],["pButton","","label","Guardar","icon","pi pi-plus","id","btnGuardar",1,"p-button-success","mr-2"],["pButton","","label","Cancelar","icon","pi pi-times","id","btnCancelar",1,"p-button-danger"]],template:function(a,p){1&a&&(t.TgZ(0,"p-panel"),t.YNc(1,I,2,0,"ng-template",0),t.YNc(2,Y,14,5,"ng-template",1),t.qZA())},dependencies:[c.JJ,c.On,m.Hq,E.jx,d.Lt,u.s]})}return n})(),H=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[M.Bz.forChild([{path:"",component:O}]),M.Bz]})}return n})(),J=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[o.ez,H,c.u5,C._8,T.Xt,m.hJ,S.JH,s.j,R.A,y.KZ,r.T,l.q4,d.kW,u.Q,b.q,z.O,D.z,v.EV,f.U$,A.n,Z.D]})}return n})()},6218:(x,h,e)=>{e.d(h,{A:()=>m,g:()=>f});var o=e(8926),v=e(6814),c=e(6223);let f=(()=>{class s{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(r,l,d,u){this.el=r,this.ngModel=l,this.control=d,this.cd=u}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(r){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(r){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(r||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(l){return new(l||s)(o.Y36(o.SBq),o.Y36(c.On,8),o.Y36(c.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:s,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(l,d){1&l&&o.NdJ("input",function(C){return d.onInput(C)}),2&l&&o.ekj("p-filled",d.filled)("p-inputtextarea-resizable",d.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return s})(),m=(()=>{class s{static \u0275fac=function(l){return new(l||s)};static \u0275mod=o.oAB({type:s});static \u0275inj=o.cJS({imports:[v.ez]})}return s})()}}]);