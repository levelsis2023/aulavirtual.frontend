"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[9952],{6228:(Ft,Z,i)=>{i.r(Z),i.d(Z,{CarrerasTecnicasModule:()=>Bt});var M=i(6814),A=i(4104),l=i(6223),f=i(9552),u=i(707),_=i(3714),S=i(6804),U=i(4480),V=i(4055),B=i(3965),d=i(1230),F=i(6760),D=i(6651),E=i(7902),Y=i(6022),y=i(3722),w=i(1494),J=i(6218),N=i(3259),H=i(3904),T=i(6860),G=i(3530),p=i(5118),j=i(3999),h=i(8007),t=i(8926),q=i(4671),b=i(5924),x=i(73),k=i(3519),m=i.n(k),C=i(4067),g=i(5219);function L(r,c){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Editar Carrera T\xe9cnica"),t.qZA())}function O(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.editarParametro())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"C\xf3digo"),t.qZA()()(),t.TgZ(8,"div",6)(9,"span",7),t._UZ(10,"input",10),t.TgZ(11,"label",9),t._uU(12,"Nombre de Carrera"),t.qZA()()()()(),t.TgZ(13,"div",4)(14,"div",11)(15,"div",12),t._UZ(16,"button",13),t.TgZ(17,"button",14),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.closeModal(n))}),t.qZA()()()()()}if(2&r){const e=t.oxw();t.Q6J("formGroup",e.parametroForm)}}let K=(()=>{class r{constructor(e,o,n,a){this.fb=e,this.ref=o,this.config=n,this.parametroService=a,this.loading=!1,this.parametroDatos=new x.v,this.parametro=new x.v,this.mostrarCursos=!1,this.parametroForm=this.fb.group({codigo:[this.config.data.data.codigo,l.kI.required],nombres:[this.config.data.data.nombres,l.kI.required],domain_id:1,id:this.config.data.data.id})}editarParametro(){this.parametroForm.valid?(console.log("Formulario v\xe1lido",this.parametroForm.value),this.parametroService.editarCarreraTecnica(this.parametroForm.value).subscribe(e=>{this.ref?.close(),m().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},e=>{console.error("Error al editar el parametro",e)})):console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(l.qu),t.Y36(p.E7),t.Y36(p.S),t.Y36(C.m))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-editar-carrera-tecnica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","","formControlName","codigo"],[1,"required"],["type","text","pInputText","","formControlName","nombres"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,L,2,0,"ng-template",0),t.YNc(2,O,18,1,"ng-template",1),t.qZA())},dependencies:[l._Y,l.Fj,l.JJ,l.JL,u.Hq,g.jx,_.o,d.s,l.sg,l.u]})}return r})();function P(r,c){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Ver Carrera T\xe9cnica"),t.qZA())}function I(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"form",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"C\xf3digo"),t.qZA()()(),t.TgZ(8,"div",6)(9,"span",7),t._UZ(10,"input",10),t.TgZ(11,"label",9),t._uU(12,"Nombre de Carrera"),t.qZA()()()()(),t.TgZ(13,"div",4)(14,"div",11)(15,"div",12)(16,"button",13),t.NdJ("click",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.closeModal(n))}),t.qZA()()()()()}if(2&r){const e=t.oxw();t.Q6J("formGroup",e.parametroForm),t.xp6(5),t.Q6J("disabled",!0),t.xp6(5),t.Q6J("disabled",!0)}}let $=(()=>{class r{constructor(e,o,n){this.fb=e,this.ref=o,this.config=n,this.loading=!1,this.parametroDatos=new x.v,this.parametro=new x.v,this.mostrarCursos=!1,this.parametroForm=this.fb.group({codigo:[{value:this.config.data.data.codigo,disabled:!0},l.kI.required],nombres:[{value:this.config.data.data.nombres,disabled:!0},l.kI.required],domain_id:[{value:1,disabled:!0}],id:[{value:this.config.data.data.id,disabled:!0}]})}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(l.qu),t.Y36(p.E7),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-carrera-tecnica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","","formControlName","codigo",3,"disabled"],[1,"required"],["type","text","pInputText","","formControlName","nombres",3,"disabled"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,P,2,0,"ng-template",0),t.YNc(2,I,17,3,"ng-template",1),t.qZA())},dependencies:[l._Y,l.Fj,l.JJ,l.JL,u.Hq,g.jx,_.o,d.s,l.sg,l.u]})}return r})();var z=i(4617),Q=i(2504),R=i(9062),X=i(904),W=i(6834),v=i(375);function tt(r,c){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Visualizar Syllabus"),t.qZA())}function et(r,c){}const ot=function(){return{height:"450px"}};function rt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-editor",6),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.contenido=n)}),t.YNc(4,et,0,0,"ng-template",0),t.qZA()()()(),t.TgZ(5,"div",7)(6,"div",8)(7,"div",9)(8,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal())}),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(3),t.Akn(t.DdM(5,ot)),t.Q6J("ngModel",e.contenido)("readonly",!0)("modules",e.modules)}}let nt=(()=>{class r{constructor(e,o,n,a){this.ref=e,this.parametroService=o,this.config=n,this.helperService=a,this.idCurso=0,this.contenido="",this.domain_id=1,this.subscriptions=[],this.curso={},this.modules={toolbar:!1}}ngOnInit(){this.idCurso=this.config.data.cursoId,Promise.all([this.obtenerSyllabus(this.idCurso)]).then(()=>{this.contenido=this.curso.syllabus})}obtenerSyllabus(e){return new Promise((o,n)=>{this.parametroService.getSyllabusByCurso(e).subscribe(a=>{console.log("Datos Curso",a.Datos),this.curso=a.Datos,o()},a=>n(a))})}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.E7),t.Y36(C.m),t.Y36(p.S),t.Y36(v.$))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-syllabus"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mt-2"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-12"],[3,"ngModel","readonly","modules","ngModelChange"],[1,"row"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,tt,2,0,"ng-template",0),t.YNc(2,rt,9,6,"ng-template",1),t.qZA())},dependencies:[l.JJ,l.On,u.Hq,g.jx,d.s,T.ML]})}return r})();function at(r,c){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Visualizar Temas"),t.qZA())}function it(r,c){}const st=function(){return{height:"450px"}};function ct(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-editor",6),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.contenido=n)}),t.YNc(4,it,0,0,"ng-template",0),t.qZA()()()(),t.TgZ(5,"div",7)(6,"div",8)(7,"div",9)(8,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal())}),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(3),t.Akn(t.DdM(5,st)),t.Q6J("ngModel",e.contenido)("readonly",!0)("modules",e.modules)}}let lt=(()=>{class r{constructor(e,o,n,a){this.ref=e,this.parametroService=o,this.config=n,this.helperService=a,this.idCurso=0,this.contenido="",this.domain_id=1,this.subscriptions=[],this.curso={},this.modules={toolbar:!1}}ngOnInit(){this.idCurso=this.config.data.cursoId,Promise.all([this.obtenerTema(this.idCurso)]).then(()=>{this.contenido=this.curso.tema})}obtenerTema(e){return new Promise((o,n)=>{this.parametroService.getTemaByCurso(e).subscribe(a=>{console.log("Datos Curso",a.Datos),this.curso=a.Datos,o()},a=>n(a))})}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.E7),t.Y36(C.m),t.Y36(p.S),t.Y36(v.$))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-temas"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mt-2"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-12"],[3,"ngModel","readonly","modules","ngModelChange"],[1,"row"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,at,2,0,"ng-template",0),t.YNc(2,ct,9,6,"ng-template",1),t.qZA())},dependencies:[l.JJ,l.On,u.Hq,g.jx,d.s,T.ML]})}return r})();const pt=["filter"],dt=["dt1"];function ut(r,c){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Bandeja de Cursos"),t.qZA())}function mt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onGlobalFilter(n))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.navigateAddCurso())}),t.qZA()()()}}function gt(r,c){1&r&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"C\xf3digo"),t.qZA(),t.TgZ(3,"th",19),t._uU(4,"Nombre del curso"),t.qZA(),t.TgZ(5,"th",19),t._uU(6,"Acciones"),t.qZA(),t.TgZ(7,"th",19),t._uU(8,"Configuraci\xf3n"),t.qZA(),t.TgZ(9,"th",19),t._uU(10,"Cr\xe9ditos"),t.qZA(),t.TgZ(11,"th",19),t._uU(12,"Ciclo"),t.qZA(),t.TgZ(13,"th",19),t._uU(14,"Carrera t\xe9cnica"),t.qZA(),t.TgZ(15,"th",19),t._uU(16,"\xc1rea de formaci\xf3n"),t.qZA(),t.TgZ(17,"th",19),t._uU(18,"M\xf3dulo formativo"),t.qZA(),t.TgZ(19,"th",19),t._uU(20,"Docente"),t.qZA(),t.TgZ(21,"th",19),t._uU(22,"Foto"),t.qZA(),t.TgZ(23,"th",19),t._uU(24,"Estado (m16)"),t.qZA(),t.TgZ(25,"th",19),t._uU(26,"Modalidad (m18)"),t.qZA(),t.TgZ(27,"th",19),t._uU(28,"F. inicio"),t.qZA(),t.TgZ(29,"th",19),t._uU(30,"F. t\xe9rmino"),t.qZA()())}function _t(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"div",20)(7,"button",21),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verSyllabus(a.id))}),t._uU(8," Sy "),t.qZA(),t.TgZ(9,"button",22),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verAlumnos(a))}),t._uU(10," Al "),t.qZA(),t.TgZ(11,"button",23),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verHorarios(a))}),t._uU(12," Ho "),t.qZA(),t.TgZ(13,"button",24),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verAsistencia(a))}),t._uU(14," As "),t.qZA(),t.TgZ(15,"button",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verTemas(a.id))}),t._uU(16," Te "),t.qZA(),t.TgZ(17,"button",26),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verEvaluaciones(a))}),t._uU(18," Ev "),t.qZA(),t.TgZ(19,"button",27),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.verForos(a))}),t._uU(20," Fo "),t.qZA()()(),t.TgZ(21,"td")(22,"button",28),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(a))}),t.qZA(),t.TgZ(23,"button",29),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(a))}),t.qZA(),t.TgZ(24,"button",30),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(a.id))}),t.qZA()(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.qZA(),t.TgZ(35,"td"),t._uU(36),t.qZA(),t.TgZ(37,"td"),t._UZ(38,"img",31),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA(),t.TgZ(43,"td"),t._uU(44),t.qZA(),t.TgZ(45,"td"),t._uU(46),t.qZA()()}if(2&r){const e=c.$implicit;t.xp6(2),t.Oqu(e.codigo),t.xp6(2),t.Oqu(e.nombre),t.xp6(22),t.Oqu(e.cantidad_de_creditos),t.xp6(2),t.Oqu(e.ciclo_nombre),t.xp6(2),t.Oqu(e.carrera_nombre),t.xp6(2),t.Oqu(e.area_de_formacion_nombre),t.xp6(2),t.Oqu(e.modulo_formativo_nombre),t.xp6(2),t.Oqu(e.docente),t.xp6(2),t.Q6J("src",e.foto,t.LSH),t.xp6(2),t.Oqu(e.estado_m16),t.xp6(2),t.Oqu(e.modalidad_m18),t.xp6(2),t.Oqu(e.fecha_inicio),t.xp6(2),t.Oqu(e.fecha_termino)}}function Ct(r,c){1&r&&(t.TgZ(0,"tr")(1,"td",32),t._uU(2,"No se encontraron registros"),t.qZA()())}function ft(r,c){1&r&&(t.TgZ(0,"tr")(1,"td",32),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function ht(r,c){if(1&r&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,mt,7,0,"ng-template",8),t.YNc(6,gt,31,0,"ng-template",0),t.YNc(7,_t,47,13,"ng-template",9),t.YNc(8,Ct,3,0,"ng-template",10),t.YNc(9,ft,3,0,"ng-template",11),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let bt=(()=>{class r{constructor(e,o,n,a){this.dialogService=e,this.cursosService=o,this.router=n,this.config=a,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){this.listarCursos()}listarCursos(){this.cursosService.getCursos(this.config.data.data.id).subscribe(e=>{this.carrerastecnicasList=e,console.log("cursos",this.carrerastecnicasList),this.originalCarrerastecnicasList=[...e]})}navigateToNuevo(){console.log("nuevo"),this.ref=this.dialogService.open(q.M,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(e=>{console.log("Cerrando dialogo"),this.listarCursos()})}navigateAddCurso(){this.ref=this.dialogService.open(b.V,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"add"}}),this.ref.onClose.subscribe(e=>{this.listarCursos()})}navigateToDetalle(e){this.ref=this.dialogService.open(b.V,{width:"80%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"ver",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}navigateToEdit(e){console.log("Editar",e),this.ref=this.dialogService.open(b.V,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"editar",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}navigateToDelete(e){m().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&(this.cursosService.eliminarCurso(e).subscribe(n=>{m().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const a=document.querySelector(".swal2-container");a&&a.setAttribute("style","z-index: 2147483647 !important")}})},n=>{m().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")}),this.listarCursos())})}onGlobalFilter(e){const o=e.target.value.toLowerCase();console.log("Filtro Global",o),this.carrerastecnicasList=o?this.originalCarrerastecnicasList.filter(n=>n.codigo&&n.codigo.toLowerCase().includes(o)||n.nombres&&n.nombres.toLowerCase().includes(o)||n.cursos&&n.cursos.toLowerCase().includes(o)):[...this.originalCarrerastecnicasList]}verSyllabus(e){this.ref=this.dialogService.open(nt,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e}})}verTemas(e){this.ref=this.dialogService.open(lt,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e}})}verAlumnos(e){this.ref=this.dialogService.open(Q.R,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e.id,domainId:e.domain_id,cursoNombre:e.nombre}})}verHorarios(e){this.ref=this.dialogService.open(z.M,{width:"80%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{console.log("Dialog cerrado",o)})}verAsistencia(e){this.ref=this.dialogService.open(R.B,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e.id,domainId:e.domain_id,fecha:null,cursoNombre:e.nombre}})}verEvaluaciones(e){console.log("evaluaciones",e),this.ref=this.dialogService.open(X.D,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}verForos(e){this.ref=this.dialogService.open(W.j,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.xA),t.Y36(C.m),t.Y36(h.F0),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ver-curso-de-carrera"]],viewQuery:function(o,n){if(1&o&&(t.Gf(pt,5),t.Gf(dt,5)),2&o){let a;t.iGM(a=t.CRH())&&(n.filter=a.first),t.iGM(a=t.CRH())&&(n.tabledt1=a.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar cursos",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"button-group"],["pButton","","pTooltip","Ver Syllabus","tooltipPosition","top",1,"p-button-rounded","p-button-info","button-custom",2,"background","gray",3,"click"],["pButton","","pTooltip","Ver Alumnos","tooltipPosition","top",1,"p-button-rounded","p-button-success","button-custom",2,"background","blue",3,"click"],["pButton","","pTooltip","Ver Horarios","tooltipPosition","top",1,"p-button-rounded","p-button-warning","button-custom",2,"background","yellow",3,"click"],["pButton","","pTooltip","Ver Asistencia","tooltipPosition","top",1,"p-button-rounded","p-button-primary","button-custom",2,"background","rgb(103, 87, 87)",3,"click"],["pButton","","pTooltip","Ver Temas","tooltipPosition","top",1,"p-button-rounded","p-button-secondary","button-custom",2,"background","green",3,"click"],["pButton","","pTooltip","Ver Evaluaciones","tooltipPosition","top",1,"p-button-rounded","p-button-help","button-custom",2,"background","rgb(24, 15, 67)",3,"click"],["pButton","","pTooltip","Ver Foros","tooltipPosition","top",1,"p-button-rounded","p-button-danger","button-custom",2,"background","rgb(15, 68, 110)",3,"click"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["alt","Foto","width","50",3,"src"],["colspan","23"]],template:function(o,n){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,ut,2,0,"ng-template",0),t.YNc(2,ht,10,5,"ng-template",1),t.qZA())},dependencies:[u.Hq,g.jx,f.iA,_.o,d.s,N.u],styles:['@charset "UTF-8";.button-custom[_ngcontent-%COMP%]{width:1rem;height:3rem;background-color:#f0f8ff;background:#2c5f8b;color:#faebd7;border:none;border-radius:inherit;display:flex;justify-content:center;align-items:center;text-align:center}.button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.custom-swal-popup[_ngcontent-%COMP%], .swal2-popup[_ngcontent-%COMP%]{z-index:2147483647!important}body.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop):not(.swal2-toast-shown){z-index:2147483647!important}']})}return r})();const xt=["filter"],Tt=["dt1"];function vt(r,c){1&r&&(t.TgZ(0,"span",2),t._uU(1,"Bandeja de Carreras T\xe9cnicas"),t.qZA())}function Zt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onGlobalFilter(n))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.navigateToNuevo())}),t.qZA()()()}}function At(r,c){1&r&&(t.TgZ(0,"tr")(1,"th",19)(2,"div",20),t._uU(3," C\xf3digo "),t.qZA()(),t.TgZ(4,"th",19)(5,"div",20),t._uU(6," Nombre de Carrera t\xe9cnica "),t.qZA()(),t.TgZ(7,"th",19)(8,"div"),t._uU(9," Configuraciones "),t.qZA()()())}function yt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",21),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateTocurso(a))}),t.qZA(),t.TgZ(7,"button",22),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(a))}),t.qZA(),t.TgZ(8,"button",23),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(a))}),t.qZA(),t.TgZ(9,"button",24),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(a.id))}),t.qZA()()()}if(2&r){const e=c.$implicit;t.xp6(2),t.Oqu(e.codigo),t.xp6(2),t.Oqu(e.nombres)}}function wt(r,c){1&r&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"No se encontraron registros"),t.qZA()())}function Nt(r,c){1&r&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function qt(r,c){if(1&r&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,Zt,7,0,"ng-template",8),t.YNc(6,At,10,0,"ng-template",0),t.YNc(7,yt,10,2,"ng-template",9),t.YNc(8,wt,3,0,"ng-template",10),t.YNc(9,Nt,3,0,"ng-template",11),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let Mt=(()=>{class r{constructor(e,o,n,a){this.dialogService=e,this.carrerasTecnicasService=o,this.router=n,this.helpersService=a,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){this.listarCarrerasTecnicas()}listarCarrerasTecnicas(){const e=this.helpersService.getDominioId();this.carrerasTecnicasService.getCarrerasTecnicas(e).subscribe(o=>{this.carrerastecnicasList=o,this.originalCarrerastecnicasList=[...o]})}navigateToNuevo(){console.log("nuevo"),this.ref=this.dialogService.open(q.M,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(e=>{console.log("Cerrando dialogo"),this.listarCarrerasTecnicas()})}navigateAddCurso(e,o){this.ref=this.dialogService.open(b.V,{width:"60%",styleClass:"custom-dialog-header",data:{id:e,total_creditos:o}}),this.ref.onClose.subscribe(n=>{this.listarCarrerasTecnicas()})}navigateTocurso(e){this.ref=this.dialogService.open(bt,{width:"80%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToDetalle(e){this.ref=this.dialogService.open($,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToEdit(e){console.log("Editar",e),this.ref=this.dialogService.open(K,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToDelete(e){m().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo"}).then(o=>{o.isConfirmed&&(this.carrerasTecnicasService.eliminarCarreraTecnica(e).subscribe(n=>{m().fire("Eliminado","La carrera t\xe9cnica ha sido eliminada.","success")},n=>{m().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")}),this.listarCarrerasTecnicas())})}onGlobalFilter(e){const o=e.target.value.toLowerCase();console.log("Filtro Global",o),this.carrerastecnicasList=o?this.originalCarrerastecnicasList.filter(n=>n.codigo&&n.codigo.toLowerCase().includes(o)||n.nombres&&n.nombres.toLowerCase().includes(o)||n.cursos&&n.cursos.toLowerCase().includes(o)):[...this.originalCarrerastecnicasList]}editarMiembro(){}eliminarMiembro(){}agregarcurso(){}onRowSelect(e){console.log("Organo-colegaido-sect")}onRowUnselect(e){}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.xA),t.Y36(C.m),t.Y36(h.F0),t.Y36(v.$))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-bandeja-carreratecnica"]],viewQuery:function(o,n){if(1&o&&(t.Gf(xt,5),t.Gf(Tt,5)),2&o){let a;t.iGM(a=t.CRH())&&(n.filter=a.first),t.iGM(a=t.CRH())&&(n.tabledt1=a.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar carreras t\xe9cnicas",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],["pButton","","icon","pi pi-briefcase","title","Agregar Curso",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-eye","title","Detalle",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["colspan","8"],["colspan","4"]],template:function(o,n){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,vt,2,0,"ng-template",0),t.YNc(2,qt,10,5,"ng-template",1),t.qZA())},dependencies:[u.Hq,g.jx,f.iA,_.o,d.s],styles:[".button-full-width[_ngcontent-%COMP%]{width:100%}"]})}return r})(),St=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[h.Bz.forChild([{path:"",component:Mt}]),h.Bz]})}return r})();var Ut=i(2495),Vt=i(8057);let Bt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[M.ez,St,l.u5,F._8,f.U$,Y.Xt,u.hJ,E.JH,_.j,J.A,S.KZ,U.T,V.q4,B.kW,d.Q,D.q,A.EV,w.n,y.O,N.z,A.EV,d.Q,f.U$,w.n,H.D,y.O,T.Z_,G.S,p.DL,j.aw,l.UX,Ut.z,Vt.nD]})}return r})()}}]);