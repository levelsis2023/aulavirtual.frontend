"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[1410],{1410:(E,b,n)=>{n.r(b),n.d(b,{ListaRolesModule:()=>ut});var a=n(6814),h=n(8007),T=n(3519),_=n.n(T),t=n(8926),c=n(5219),R=n(3999),p=n(5118),m=n(4067),u=n(1230),d=n(6223),x=n(707),C=n(3714);function N(e,r){1&e&&(t.TgZ(0,"span",2),t._uU(1,"Registrar institutos"),t.qZA())}function U(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6),t._UZ(4,"i",7),t.TgZ(5,"input",8),t.NdJ("ngModelChange",function(s){t.CHM(o);const l=t.oxw();return t.KtG(l.nombre=s)}),t.qZA(),t.TgZ(6,"label",9),t._uU(7,"Nombre del rol"),t.qZA()(),t.TgZ(8,"small",10),t._uU(9,"Campo obligatorio *"),t.qZA()()()(),t.TgZ(10,"div",11)(11,"button",12),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.Guardaruser())}),t.qZA(),t.TgZ(12,"button",13),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.closeModal())}),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(5),t.Q6J("ngModel",o.nombre)}}let A=(()=>{class e{constructor(o,i,s,l,g,f){this.router=o,this.primengConfig=i,this.translate=s,this.ref=l,this.rolService=g,this.config=f,this.visible=!1,this.id=0,this.nombre="",this.config.data?(this.id=this.config.data.id,this.nombre=this.config.data.nombre):(this.id=0,this.nombre="")}Guardaruser(){const o={nombre:this.nombre};this.id>0?this.rolService.actualizarRol(o,this.id).subscribe(i=>{this.closeModal(),_().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{this.router.navigate([this.router.url])})},i=>{console.error("Error al guardar el rol",i)}):(this.rolService.guardarRol(o).subscribe(i=>{this.closeModal(),_().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{this.router.navigate([this.router.url])})},i=>{console.error("Error al guardar el rol",i)}),_().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{}))}closeDialog(){this.visible=!1}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(h.F0),t.Y36(c.b4),t.Y36(R.sK),t.Y36(p.E7),t.Y36(m.m),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-registra-rol"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-6"],[1,"p-float-label","p-input-icon-left"],[1,"pi","pi-user-edit"],["type","text","id","director","pInputText","",3,"ngModel","ngModelChange"],["for","director"],[2,"color","brown"],[1,"row","mb-5","text-right"],["pButton","","label","Guardar","icon","pi pi-plus","id","btnGuardar",1,"p-button-success","mr-2",3,"click"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"p-panel"),t.YNc(1,N,2,0,"ng-template",0),t.YNc(2,U,13,1,"ng-template",1),t.qZA())},dependencies:[u.s,c.jx,d.Fj,d.JJ,d.On,x.Hq,C.o]})}return e})();var v=n(9552);function Y(e,r){1&e&&(t.TgZ(0,"div",2)(1,"span",3),t._uU(2,"Asignar permiso"),t.qZA()())}function w(e,r){1&e&&(t.TgZ(0,"tr")(1,"th",13),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"th",13),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th",13),t._uU(6,"Descripci\xf3n"),t.qZA(),t.TgZ(7,"th",13),t._uU(8,"Asignar"),t.qZA()())}function B(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"input",14),t.NdJ("change",function(s){const g=t.CHM(o).$implicit,f=t.oxw(2);return t.KtG(f.onCheckboxChange(g.id,s))}),t.qZA()()()}if(2&e){const o=r.$implicit,i=t.oxw(2);t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.nombre),t.xp6(2),t.Oqu(o.descripcion),t.xp6(2),t.Q6J("checked",i.permisosSeleccionados.has(o.id))}}function F(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",15),t._uU(2,"No se encontraron registros"),t.qZA()())}function O(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",15),t._uU(2," Cargando registros. Por favor espere. "),t.qZA()())}function D(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"p-table",7),t.YNc(4,w,9,0,"ng-template",0),t.YNc(5,B,9,4,"ng-template",8),t.YNc(6,F,3,0,"ng-template",9),t.YNc(7,O,3,0,"ng-template",10),t.qZA(),t.TgZ(8,"div",11)(9,"button",12),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.guardarPermisos())}),t._uU(10,"Guardar"),t.qZA()()()()()}if(2&e){const o=t.oxw();t.xp6(3),t.Q6J("value",o.permisos)}}let J=(()=>{class e{constructor(o,i,s,l,g,f){this.router=o,this.primengConfig=i,this.translate=s,this.ref=l,this.permisoService=g,this.config=f,this.visible=!1,this.nombre="",this.permisosSeleccionados=new Set,this.permisoService.getPermisos().subscribe(Z=>{console.log("Lista de permisos",Z),this.permisos=Z}),this.idRol=f.data,this.permisoService.getRolPermisos(this.idRol).subscribe(Z=>{this.permisosSeleccionados=new Set(Z.map(dt=>dt.id)),console.log("this.permisosSeleccionados"),console.log(this.permisosSeleccionados)})}onCheckboxChange(o,i){i.target.checked?this.permisosSeleccionados.add(o):this.permisosSeleccionados.delete(o)}guardarPermisos(){const o={id:this.idRol,idPermisos:Array.from(this.permisosSeleccionados)};console.log(o),this.permisoService.guardarRolPermisos(o).subscribe(i=>{this.closeModal(),_().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},i=>{console.error("Error al guardar el rol",i)})}closeDialog(){this.visible=!1}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(h.F0),t.Y36(c.b4),t.Y36(R.sK),t.Y36(p.E7),t.Y36(m.m),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-lista-permisos"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"d-flex","justify-content-between"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-12"],[1,"w-full","custom-search-input",3,"value"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"float-rigth"],["pButton","","label","Guardar",1,"p-button-primary","mr-2",2,"color","#ffffff","background","#6366F1","border","1px solid #6366F1","padding","0.75rem 1.25rem","font-size","1rem","transition","background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s","border-radius","10px","cursor","pointer",3,"click"],[2,"min-width","10rem"],["type","checkbox",3,"checked","change"],["colspan","6"]],template:function(i,s){1&i&&(t.TgZ(0,"p-panel"),t.YNc(1,Y,3,0,"ng-template",0),t.YNc(2,D,11,1,"ng-template",1),t.qZA())},dependencies:[a.ez,u.Q,u.s,c.jx,d.u5,v.U$,v.iA]})}return e})();function z(e,r){1&e&&(t.TgZ(0,"span",2),t._uU(1,"Buscar rol"),t.qZA())}function I(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(3);return t.KtG(s.navigateToNuevo(0))}),t.qZA()()}}function q(e,r){if(1&e&&(t.TgZ(0,"div",11)(1,"div",12)(2,"span",13),t._UZ(3,"input",14),t.qZA()(),t.YNc(4,I,2,0,"div",15),t.qZA()),2&e){const o=t.oxw(2);t.xp6(4),t.Q6J("ngIf",o.tienePermiso("roles_crearRol"))}}function H(e,r){1&e&&(t.TgZ(0,"tr")(1,"th",18),t._uU(2,"Acciones"),t.qZA(),t.TgZ(3,"th",18),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"th",18),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"Fecha"),t.qZA(),t.TgZ(9,"th",18),t._uU(10,"Asignar permisos"),t.qZA()())}const S=function(){return{color:"var(--primary-color)","font-size":"1.5rem"}};function G(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(o);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.navigateToNuevo(s.id))}),t._UZ(1,"i",23),t.qZA()}2&e&&(t.xp6(1),t.Akn(t.DdM(2,S)))}function K(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(o);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.eliminar(s.id))}),t._uU(1,"X "),t.qZA()}}function j(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(o);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.listaPermisos(s.id))}),t._UZ(1,"i",23),t.qZA()}2&e&&(t.xp6(1),t.Akn(t.DdM(2,S)))}function Q(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td",19),t.YNc(2,G,2,3,"button",20),t.YNc(3,K,2,0,"button",21),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t.YNc(11,j,2,3,"button",20),t.qZA()()),2&e){const o=r.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("ngIf",i.tienePermiso("roles_editarRol")),t.xp6(1),t.Q6J("ngIf",i.tienePermiso("roles_eliminarRol")),t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.nombre),t.xp6(2),t.Oqu(o.fecha),t.xp6(2),t.Q6J("ngIf",i.tienePermiso("roles_asignarPermiso"))}}function k(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"No se encontraron registros"),t.qZA()())}function $(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2," Cargando registros. Por favor espere. "),t.qZA()())}function V(e,r){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6),t.YNc(4,q,5,1,"ng-template",7),t.YNc(5,H,11,0,"ng-template",0),t.YNc(6,Q,12,6,"ng-template",8),t.YNc(7,k,3,0,"ng-template",9),t.YNc(8,$,3,0,"ng-template",10),t.qZA()()()()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("value",o.roles)}}let X=(()=>{class e{constructor(o,i,s,l){this.router=o,this.dialogService=i,this.rolService=s,this.permisoService=l,this.roles=[],this.rol=[],this.rolService.getRoles().subscribe(g=>{console.log("Lista de Roles",g),this.roles=g})}navigateToNuevo(o){o>0?this.rolService.getRol(o).subscribe(i=>{console.log("Lista de Roles",i),this.rol=i,this.ref=this.dialogService.open(A,{width:"60%",styleClass:"custom-dialog-header",data:this.rol}),this.ref.onClose.subscribe(s=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"}),console.log(this.rol)}):(this.ref=this.dialogService.open(A,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(i=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"}))}eliminar(o){_().fire({title:"Eliminar rol",text:"Est\xe1s segurdo de eliminar el rol?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminar!"}).then(i=>{i.isConfirmed&&this.rolService.eliminarRol(o).subscribe(s=>{console.log("rol eliminado:",s),this.rolService.getRoles().subscribe(l=>{console.log("Lista de Roles",l),this.roles=l})},s=>{console.error("Error eliminando ciclo:",s)})})}listaPermisos(o){this.ref=this.dialogService.open(J,{width:"60%",styleClass:"custom-dialog-header",data:o}),this.ref.onClose.subscribe(i=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})}tienePermiso(o){return this.permisoService.tienePermiso(o)}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(h.F0),t.Y36(p.xA),t.Y36(m.m),t.Y36(m.m))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-lista-postulantes"]],decls:4,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-12"],[1,"w-full","custom-search-input",3,"value"],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar miembro",1,"w-full"],["class","mb-2",4,"ngIf"],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],[2,"min-width","10rem"],[1,"text-center","flex","gap-2"],["style","width: fit-content","pButton","","class","p-button-rounded p-button-text custom-edit-button","title","Editar rol",3,"click",4,"ngIf"],["style","width: fit-content","pButton","","class","p-button-rounded p-button-text custom-edit-button","title","Eliminar rol",3,"click",4,"ngIf"],["pButton","","title","Editar rol",1,"p-button-rounded","p-button-text","custom-edit-button",2,"width","fit-content",3,"click"],["aria-hidden","true",1,"pi","pi-user-edit"],["pButton","","title","Eliminar rol",1,"p-button-rounded","p-button-text","custom-edit-button",2,"width","fit-content",3,"click"],["colspan","6"]],template:function(i,s){1&i&&(t.TgZ(0,"p-panel"),t.YNc(1,z,2,0,"ng-template",0),t.YNc(2,V,9,1,"ng-template",1),t.qZA(),t._UZ(3,"div"))},dependencies:[a.O5,u.s,c.jx,x.Hq,v.iA,C.o],styles:[".selects_content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], .selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid rgb(136,133,133);border-radius:10px;margin-top:.4rem;width:14.5rem;padding:.8rem 1rem;outline:none}"]})}return e})(),W=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[h.Bz.forChild([{path:"",component:X}]),h.Bz]})}return e})();var tt=n(6760),et=n(6022),ot=n(7902),it=n(6218),nt=n(6804),st=n(4480),y=n(4055),rt=n(3965),lt=n(6651),M=n(4104),P=n(1494),L=n(3722),at=n(3259),ct=n(3904),pt=n(9537),mt=n(3530);let ut=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[a.ez,u.Q,W,d.u5,tt._8,v.U$,et.Xt,x.hJ,ot.JH,C.j,it.A,nt.KZ,st.T,y.q4,rt.kW,lt.q,M.EV,P.n,L.O,at.z,M.EV,v.U$,P.n,ct.D,L.O,pt.Z_,mt.S,p.DL,R.aw,C.j,y.q4]})}return e})()},6218:(E,b,n)=>{n.d(b,{A:()=>t,g:()=>_});var a=n(8926),h=n(6814),T=n(6223);let _=(()=>{class c{el;ngModel;control;cd;autoResize;onResize=new a.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(p,m,u,d){this.el=p,this.ngModel=m,this.control=u,this.cd=d}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(p){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(p){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(p||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(m){return new(m||c)(a.Y36(a.SBq),a.Y36(T.On,8),a.Y36(T.a5,8),a.Y36(a.sBO))};static \u0275dir=a.lG2({type:c,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(m,u){1&m&&a.NdJ("input",function(x){return u.onInput(x)}),2&m&&a.ekj("p-filled",u.filled)("p-inputtextarea-resizable",u.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return c})(),t=(()=>{class c{static \u0275fac=function(m){return new(m||c)};static \u0275mod=a.oAB({type:c});static \u0275inj=a.cJS({imports:[h.ez]})}return c})()}}]);