"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[6062],{6062:(At,x,i)=>{i.r(x),i.d(x,{CarrerasTecnicasModule:()=>Zt});var U=i(6814),v=i(4104),c=i(6223),_=i(9552),m=i(707),g=i(3714),N=i(6804),q=i(4480),B=i(4055),F=i(3965),u=i(1230),E=i(6760),M=i(6651),S=i(7902),V=i(6022),Z=i(3722),A=i(1494),D=i(6218),w=i(3259),H=i(3904),G=i(9537),J=i(3530),p=i(5118),j=i(3999),C=i(8007),t=i(8926),y=i(4671),f=i(5924),h=i(73),L=i(3519),d=i.n(L),T=i(4067),b=i(5219);function Y(r,l){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Editar Carrera T\xe9cnica"),t.qZA())}function k(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.editarParametro())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"C\xf3digo"),t.qZA()()(),t.TgZ(8,"div",6)(9,"span",7),t._UZ(10,"input",10),t.TgZ(11,"label",9),t._uU(12,"Nombre de Carrera"),t.qZA()()()()(),t.TgZ(13,"div",4)(14,"div",11)(15,"div",12),t._UZ(16,"button",13),t.TgZ(17,"button",14),t.NdJ("click",function(a){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal(a))}),t.qZA()()()()()}if(2&r){const e=t.oxw();t.Q6J("formGroup",e.parametroForm)}}let O=(()=>{class r{constructor(e,o,a,n){this.fb=e,this.ref=o,this.config=a,this.parametroService=n,this.loading=!1,this.parametroDatos=new h.v,this.parametro=new h.v,this.mostrarCursos=!1,this.parametroForm=this.fb.group({codigo:[this.config.data.data.codigo,c.kI.required],nombres:[this.config.data.data.nombres,c.kI.required],domain_id:1,id:this.config.data.data.id})}editarParametro(){this.parametroForm.valid?(console.log("Formulario v\xe1lido",this.parametroForm.value),this.parametroService.editarCarreraTecnica(this.parametroForm.value).subscribe(e=>{this.ref?.close(),d().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},e=>{console.error("Error al editar el parametro",e)})):console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(c.qu),t.Y36(p.E7),t.Y36(p.S),t.Y36(T.m))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-editar-carrera-tecnica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","","formControlName","codigo"],[1,"required"],["type","text","pInputText","","formControlName","nombres"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,Y,2,0,"ng-template",0),t.YNc(2,k,18,1,"ng-template",1),t.qZA())},dependencies:[c._Y,c.Fj,c.JJ,c.JL,m.Hq,b.jx,g.o,u.s,c.sg,c.u]})}return r})();function K(r,l){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Ver Carrera T\xe9cnica"),t.qZA())}function P(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"form",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"C\xf3digo"),t.qZA()()(),t.TgZ(8,"div",6)(9,"span",7),t._UZ(10,"input",10),t.TgZ(11,"label",9),t._uU(12,"Nombre de Carrera"),t.qZA()()()()(),t.TgZ(13,"div",4)(14,"div",11)(15,"div",12)(16,"button",13),t.NdJ("click",function(a){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal(a))}),t.qZA()()()()()}if(2&r){const e=t.oxw();t.Q6J("formGroup",e.parametroForm),t.xp6(5),t.Q6J("disabled",!0),t.xp6(5),t.Q6J("disabled",!0)}}let $=(()=>{class r{constructor(e,o,a){this.fb=e,this.ref=o,this.config=a,this.loading=!1,this.parametroDatos=new h.v,this.parametro=new h.v,this.mostrarCursos=!1,this.parametroForm=this.fb.group({codigo:[{value:this.config.data.data.codigo,disabled:!0},c.kI.required],nombres:[{value:this.config.data.data.nombres,disabled:!0},c.kI.required],domain_id:[{value:1,disabled:!0}],id:[{value:this.config.data.data.id,disabled:!0}]})}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(c.qu),t.Y36(p.E7),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-carrera-tecnica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","","formControlName","codigo",3,"disabled"],[1,"required"],["type","text","pInputText","","formControlName","nombres",3,"disabled"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,K,2,0,"ng-template",0),t.YNc(2,P,17,3,"ng-template",1),t.qZA())},dependencies:[c._Y,c.Fj,c.JJ,c.JL,m.Hq,b.jx,g.o,u.s,c.sg,c.u]})}return r})();var I=i(4617),z=i(2504),Q=i(9062),R=i(904),X=i(6834);const W=["filter"],tt=["dt1"];function et(r,l){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Bandeja de Cursos"),t.qZA())}function ot(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(a){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onGlobalFilter(a))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.navigateAddCurso())}),t.qZA()()()}}function rt(r,l){1&r&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"C\xf3digo"),t.qZA(),t.TgZ(3,"th",19),t._uU(4,"Nombre del curso"),t.qZA(),t.TgZ(5,"th",19),t._uU(6,"Acciones"),t.qZA(),t.TgZ(7,"th",19),t._uU(8,"Configuraci\xf3n"),t.qZA(),t.TgZ(9,"th",19),t._uU(10,"Cr\xe9ditos"),t.qZA(),t.TgZ(11,"th",19),t._uU(12,"Ciclo"),t.qZA(),t.TgZ(13,"th",19),t._uU(14,"Carrera t\xe9cnica"),t.qZA(),t.TgZ(15,"th",19),t._uU(16,"\xc1rea de formaci\xf3n"),t.qZA(),t.TgZ(17,"th",19),t._uU(18,"M\xf3dulo formativo"),t.qZA(),t.TgZ(19,"th",19),t._uU(20,"Docente"),t.qZA(),t.TgZ(21,"th",19),t._uU(22,"Foto"),t.qZA(),t.TgZ(23,"th",19),t._uU(24,"Estado (m16)"),t.qZA(),t.TgZ(25,"th",19),t._uU(26,"Modalidad (m18)"),t.qZA(),t.TgZ(27,"th",19),t._uU(28,"F. inicio"),t.qZA(),t.TgZ(29,"th",19),t._uU(30,"F. t\xe9rmino"),t.qZA()())}function at(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"div",20)(7,"button",21),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verSyllabus(n.syllabus))}),t._uU(8," Sy "),t.qZA(),t.TgZ(9,"button",22),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verAlumnos(n))}),t._uU(10," Al "),t.qZA(),t.TgZ(11,"button",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verHorarios(n))}),t._uU(12," Ho "),t.qZA(),t.TgZ(13,"button",24),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verAsistencia(n))}),t._uU(14," As "),t.qZA(),t.TgZ(15,"button",25),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verTemas(n.temas))}),t._uU(16," Te "),t.qZA(),t.TgZ(17,"button",26),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verEvaluaciones(n))}),t._uU(18," Ev "),t.qZA(),t.TgZ(19,"button",27),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verForos(n))}),t._uU(20," Fo "),t.qZA()()(),t.TgZ(21,"td")(22,"button",28),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(n))}),t.qZA(),t.TgZ(23,"button",29),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(n))}),t.qZA(),t.TgZ(24,"button",30),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(n.id))}),t.qZA()(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.qZA(),t.TgZ(35,"td"),t._uU(36),t.qZA(),t.TgZ(37,"td"),t._UZ(38,"img",31),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA(),t.TgZ(43,"td"),t._uU(44),t.qZA(),t.TgZ(45,"td"),t._uU(46),t.qZA()()}if(2&r){const e=l.$implicit;t.xp6(2),t.Oqu(e.codigo),t.xp6(2),t.Oqu(e.nombre),t.xp6(22),t.Oqu(e.cantidad_de_creditos),t.xp6(2),t.Oqu(e.ciclo_nombre),t.xp6(2),t.Oqu(e.carrera_nombre),t.xp6(2),t.Oqu(e.area_de_formacion_nombre),t.xp6(2),t.Oqu(e.modulo_formativo_nombre),t.xp6(2),t.Oqu(e.docente),t.xp6(2),t.Q6J("src",e.foto,t.LSH),t.xp6(2),t.Oqu(e.estado_m16),t.xp6(2),t.Oqu(e.modalidad_m18),t.xp6(2),t.Oqu(e.fecha_inicio),t.xp6(2),t.Oqu(e.fecha_termino)}}function nt(r,l){1&r&&(t.TgZ(0,"tr")(1,"td",32),t._uU(2,"No se encontraron registros"),t.qZA()())}function it(r,l){1&r&&(t.TgZ(0,"tr")(1,"td",32),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function st(r,l){if(1&r&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,ot,7,0,"ng-template",8),t.YNc(6,rt,31,0,"ng-template",0),t.YNc(7,at,47,13,"ng-template",9),t.YNc(8,nt,3,0,"ng-template",10),t.YNc(9,it,3,0,"ng-template",11),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let ct=(()=>{class r{constructor(e,o,a,n){this.dialogService=e,this.cursosService=o,this.router=a,this.config=n,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){this.listarCursos()}listarCursos(){this.cursosService.getCursos(this.config.data.data.id).subscribe(e=>{this.carrerastecnicasList=e,this.originalCarrerastecnicasList=[...e]})}navigateToNuevo(){console.log("nuevo"),this.ref=this.dialogService.open(y.M,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(e=>{console.log("Cerrando dialogo"),this.listarCursos()})}navigateAddCurso(){this.ref=this.dialogService.open(f.V,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"add"}}),this.ref.onClose.subscribe(e=>{this.listarCursos()})}navigateToDetalle(e){this.ref=this.dialogService.open(f.V,{width:"80%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"ver",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}navigateToEdit(e){console.log("Editar",e),this.ref=this.dialogService.open(f.V,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"editar",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}navigateToDelete(e){d().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&(this.cursosService.eliminarCurso(e).subscribe(a=>{d().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const n=document.querySelector(".swal2-container");n&&n.setAttribute("style","z-index: 2147483647 !important")}})},a=>{d().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")}),this.listarCursos())})}onGlobalFilter(e){const o=e.target.value.toLowerCase();console.log("Filtro Global",o),this.carrerastecnicasList=o?this.originalCarrerastecnicasList.filter(a=>a.codigo&&a.codigo.toLowerCase().includes(o)||a.nombres&&a.nombres.toLowerCase().includes(o)||a.cursos&&a.cursos.toLowerCase().includes(o)):[...this.originalCarrerastecnicasList]}verSyllabus(e){console.log(e)}verAlumnos(e){this.ref=this.dialogService.open(z.R,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e.id,domainId:e.domain_id,cursoNombre:e.nombre}})}verHorarios(e){this.ref=this.dialogService.open(I.M,{width:"80%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{console.log("Dialog cerrado",o)})}verAsistencia(e){this.ref=this.dialogService.open(Q.B,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e.id,domainId:e.domain_id,fecha:null,cursoNombre:e.nombre}})}verTemas(e){console.log(e)}verEvaluaciones(e){console.log("evaluaciones",e),this.ref=this.dialogService.open(R.D,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}verForos(e){this.ref=this.dialogService.open(X.j,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.xA),t.Y36(T.m),t.Y36(C.F0),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-curso-de-carrera"]],viewQuery:function(o,a){if(1&o&&(t.Gf(W,5),t.Gf(tt,5)),2&o){let n;t.iGM(n=t.CRH())&&(a.filter=n.first),t.iGM(n=t.CRH())&&(a.tabledt1=n.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar cursos",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"button-group"],["pButton","","pTooltip","Ver Syllabus","tooltipPosition","top",1,"p-button-rounded","p-button-info","button-custom",2,"background","gray",3,"click"],["pButton","","pTooltip","Ver Alumnos","tooltipPosition","top",1,"p-button-rounded","p-button-success","button-custom",2,"background","blue",3,"click"],["pButton","","pTooltip","Ver Horarios","tooltipPosition","top",1,"p-button-rounded","p-button-warning","button-custom",2,"background","yellow",3,"click"],["pButton","","pTooltip","Ver Asistencia","tooltipPosition","top",1,"p-button-rounded","p-button-primary","button-custom",2,"background","rgb(103, 87, 87)",3,"click"],["pButton","","pTooltip","Ver Temas","tooltipPosition","top",1,"p-button-rounded","p-button-secondary","button-custom",2,"background","green",3,"click"],["pButton","","pTooltip","Ver Evaluaciones","tooltipPosition","top",1,"p-button-rounded","p-button-help","button-custom",2,"background","rgb(24, 15, 67)",3,"click"],["pButton","","pTooltip","Ver Foros","tooltipPosition","top",1,"p-button-rounded","p-button-danger","button-custom",2,"background","rgb(15, 68, 110)",3,"click"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["alt","Foto","width","50",3,"src"],["colspan","23"]],template:function(o,a){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,et,2,0,"ng-template",0),t.YNc(2,st,10,5,"ng-template",1),t.qZA())},dependencies:[m.Hq,b.jx,_.iA,g.o,u.s,w.u],styles:['@charset "UTF-8";.button-custom[_ngcontent-%COMP%]{width:1rem;height:3rem;background-color:#f0f8ff;background:#2c5f8b;color:#faebd7;border:none;border-radius:inherit;display:flex;justify-content:center;align-items:center;text-align:center}.button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.custom-swal-popup[_ngcontent-%COMP%], .swal2-popup[_ngcontent-%COMP%]{z-index:2147483647!important}body.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop):not(.swal2-toast-shown){z-index:2147483647!important}']})}return r})();var lt=i(375);const pt=["filter"],dt=["dt1"];function ut(r,l){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Bandeja de Carreras T\xe9cnicas"),t.qZA())}function mt(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(a){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onGlobalFilter(a))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.navigateToNuevo())}),t.qZA()()()}}function gt(r,l){1&r&&(t.TgZ(0,"tr")(1,"th",19)(2,"div",20),t._uU(3," C\xf3digo "),t.qZA()(),t.TgZ(4,"th",19)(5,"div",20),t._uU(6," Nombre de Carrera t\xe9cnica "),t.qZA()(),t.TgZ(7,"th",19)(8,"div"),t._uU(9," Configuraciones "),t.qZA()()())}function _t(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",21),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateTocurso(n))}),t.qZA(),t.TgZ(7,"button",22),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(n))}),t.qZA(),t.TgZ(8,"button",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(n))}),t.qZA(),t.TgZ(9,"button",24),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(n.id))}),t.qZA()()()}if(2&r){const e=l.$implicit;t.xp6(2),t.Oqu(e.codigo),t.xp6(2),t.Oqu(e.nombres)}}function Ct(r,l){1&r&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"No se encontraron registros"),t.qZA()())}function ft(r,l){1&r&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function ht(r,l){if(1&r&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,mt,7,0,"ng-template",8),t.YNc(6,gt,10,0,"ng-template",0),t.YNc(7,_t,10,2,"ng-template",9),t.YNc(8,Ct,3,0,"ng-template",10),t.YNc(9,ft,3,0,"ng-template",11),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let bt=(()=>{class r{constructor(e,o,a,n){this.dialogService=e,this.carrerasTecnicasService=o,this.router=a,this.helpersService=n,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){this.listarCarrerasTecnicas()}listarCarrerasTecnicas(){const e=this.helpersService.getDominioId();this.carrerasTecnicasService.getCarrerasTecnicas(e).subscribe(o=>{this.carrerastecnicasList=o,this.originalCarrerastecnicasList=[...o]})}navigateToNuevo(){console.log("nuevo"),this.ref=this.dialogService.open(y.M,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(e=>{console.log("Cerrando dialogo"),this.listarCarrerasTecnicas()})}navigateAddCurso(e,o){this.ref=this.dialogService.open(f.V,{width:"60%",styleClass:"custom-dialog-header",data:{id:e,total_creditos:o}}),this.ref.onClose.subscribe(a=>{this.listarCarrerasTecnicas()})}navigateTocurso(e){this.ref=this.dialogService.open(ct,{width:"80%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToDetalle(e){this.ref=this.dialogService.open($,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToEdit(e){console.log("Editar",e),this.ref=this.dialogService.open(O,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToDelete(e){d().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo"}).then(o=>{o.isConfirmed&&(this.carrerasTecnicasService.eliminarCarreraTecnica(e).subscribe(a=>{d().fire("Eliminado","La carrera t\xe9cnica ha sido eliminada.","success")},a=>{d().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")}),this.listarCarrerasTecnicas())})}onGlobalFilter(e){const o=e.target.value.toLowerCase();console.log("Filtro Global",o),this.carrerastecnicasList=o?this.originalCarrerastecnicasList.filter(a=>a.codigo&&a.codigo.toLowerCase().includes(o)||a.nombres&&a.nombres.toLowerCase().includes(o)||a.cursos&&a.cursos.toLowerCase().includes(o)):[...this.originalCarrerastecnicasList]}editarMiembro(){}eliminarMiembro(){}agregarcurso(){}onRowSelect(e){console.log("Organo-colegaido-sect")}onRowUnselect(e){}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.xA),t.Y36(T.m),t.Y36(C.F0),t.Y36(lt.$))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-bandeja-carreratecnica"]],viewQuery:function(o,a){if(1&o&&(t.Gf(pt,5),t.Gf(dt,5)),2&o){let n;t.iGM(n=t.CRH())&&(a.filter=n.first),t.iGM(n=t.CRH())&&(a.tabledt1=n.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar carreras t\xe9cnicas",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],["pButton","","icon","pi pi-briefcase","title","Agregar Curso",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-eye","title","Detalle",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["colspan","8"],["colspan","4"]],template:function(o,a){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,ut,2,0,"ng-template",0),t.YNc(2,ht,10,5,"ng-template",1),t.qZA())},dependencies:[m.Hq,b.jx,_.iA,g.o,u.s],styles:[".button-full-width[_ngcontent-%COMP%]{width:100%}"]})}return r})(),Tt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[C.Bz.forChild([{path:"",component:bt}]),C.Bz]})}return r})();var xt=i(2495),vt=i(8057);let Zt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[U.ez,Tt,c.u5,E._8,_.U$,V.Xt,m.hJ,S.JH,g.j,D.A,N.KZ,q.T,B.q4,F.kW,u.Q,M.q,v.EV,A.n,Z.O,w.z,v.EV,u.Q,_.U$,A.n,H.D,Z.O,G.Z_,J.S,p.DL,j.aw,c.UX,xt.z,vt.nD]})}return r})()}}]);