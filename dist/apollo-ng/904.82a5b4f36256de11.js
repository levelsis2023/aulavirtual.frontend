"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[904],{904:(Ut,G,c)=>{c.d(G,{D:()=>qt});var t=c(8926),q=c(3519),u=c.n(q),f=c(73),l=c(6223),p=c(5118),g=c(4067),b=c(6814),d=c(707),m=c(5219),h=c(3714),_=c(1230);function y(a,r){if(1&a&&(t.TgZ(0,"span",2),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.hij(" ","ver"===e.acciones?"Ver Grupo de Evaluaciones":"actualizar"===e.acciones?"Actualizar Grupo de Evaluaciones":"A\xf1adir Grupo de Evaluaciones"," ")}}function L(a,r){1&a&&t._UZ(0,"button",15)}function N(a,r){1&a&&t._UZ(0,"button",16)}function U(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.guardarGrupoEvaluaciones())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"Nombre de Grupo"),t.qZA()()()()(),t.TgZ(8,"div",4)(9,"div",10)(10,"div",11),t.YNc(11,L,1,0,"button",12),t.YNc(12,N,1,0,"button",13),t.TgZ(13,"button",14),t.NdJ("click",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.closeModal(i))}),t.qZA()()()()()}if(2&a){const e=t.oxw();t.Q6J("formGroup",e.parametroForm),t.xp6(5),t.Q6J("readonly","ver"===e.acciones),t.xp6(6),t.Q6J("ngIf","add"===e.acciones),t.xp6(1),t.Q6J("ngIf","actualizar"===e.acciones)}}let C=(()=>{class a{constructor(e,o,i,n){this.fb=e,this.ref=o,this.config=i,this.parametroService=n,this.loading=!1,this.parametroDatos=new f.v,this.parametro=new f.v,this.mostrarCursos=!1,this.parametroForm=this.fb.group({nombreGrupo:["",l.kI.required]})}ngOnInit(){this.idCurso=this.config.data.idCurso,this.acciones=this.config.data.acciones,("ver"===this.acciones||"actualizar"===this.acciones)&&this.parametroForm.patchValue({nombreGrupo:this.config.data.data.nombre_del_grupo})}guardarGrupoEvaluaciones(){this.parametroForm.valid?"add"===this.acciones?this.parametroService.guardarGrupoEvaluaciones({nombre_del_grupo:this.parametroForm.value.nombreGrupo,curso_id:this.idCurso}).subscribe(o=>{this.ref?.close(),u().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},o=>{console.error("Error al guardar el parametro",o)}):"actualizar"===this.acciones&&this.parametroService.actualizarGrupoEvaluaciones({nombre_del_grupo:this.parametroForm.value.nombreGrupo,id:this.config.data.data.id}).subscribe(i=>{this.ref?.close(),u().fire({title:"\xa1\xc9xito!",text:"Los Datos se actualizaron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},i=>{console.error("Error al actualizar el parametro",i)}):console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(l.qu),t.Y36(p.E7),t.Y36(p.S),t.Y36(g.m))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-agregar-editar-grupo-evaluaciones"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12"],[1,"p-float-label"],["type","text","pInputText","","formControlName","nombreGrupo",3,"readonly"],[1,"required"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","A\xf1adir","iconPos","right","class","p-button-success p-button-sm","type","submit",4,"ngIf"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","class","p-button-warning p-button-sm","type","submit",4,"ngIf"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],["pButton","","icon","pi pi-plus","label","A\xf1adir","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","type","submit",1,"p-button-warning","p-button-sm"]],template:function(o,i){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,y,2,1,"ng-template",0),t.YNc(2,U,14,4,"ng-template",1),t.qZA())},dependencies:[b.O5,l._Y,l.Fj,l.JJ,l.JL,d.Hq,m.jx,h.o,_.s,l.sg,l.u]})}return a})();var T=c(5075),Z=c(5462),F=c(375),E=c(6593),A=c(8672),v=c(3259),D=c(9537);function S(a,r){1&a&&(t.TgZ(0,"span",2),t._uU(1," Responder Pregunta "),t.qZA())}function Y(a,r){1&a&&t._UZ(0,"ngx-spinner",5)}function V(a,r){if(1&a&&(t.TgZ(0,"div",14)(1,"span",15)(2,"div",16),t._UZ(3,"span",17),t.qZA()()()),2&a){const e=t.oxw(3);t.xp6(3),t.Q6J("innerHTML",e.preguntaDocenteValue,t.oJD)}}function H(a,r){1&a&&(t.TgZ(0,"div",14)(1,"span",15),t._UZ(2,"input",18),t.TgZ(3,"label",19),t._uU(4,"Formulaci\xf3n de Pregunta por Docente"),t.qZA()()())}function J(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"input",24),t.NdJ("change",function(){const n=t.CHM(e).index,s=t.oxw(4);return t.KtG(s.onRadioChange(n))}),t.qZA(),t.TgZ(3,"div",25),t._UZ(4,"input",26),t.qZA()()()}if(2&a){const e=r.index;t.Q6J("formGroupName",e),t.xp6(2),t.Q6J("value",!0),t.xp6(2),t.Q6J("id","alternativa-"+e)}}function k(a,r){if(1&a&&(t.TgZ(0,"div",14)(1,"div",20),t.YNc(2,J,5,3,"div",21),t.qZA()()),2&a){const e=t.oxw(3);t.xp6(2),t.Q6J("ngForOf",e.getAlternativasControls())}}const B=function(){return{height:"90px"}};function I(a,r){1&a&&(t.TgZ(0,"div",14)(1,"span",15)(2,"div",8)(3,"div",27)(4,"label",28),t._uU(5,"Ingrese la respuesta"),t.qZA(),t._UZ(6,"p-editor",29),t.qZA()()()()),2&a&&(t.xp6(6),t.Akn(t.DdM(2,B)))}function j(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"form",6),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.guardarPregunta())}),t.TgZ(1,"div",7)(2,"div",8),t.YNc(3,V,4,1,"div",9),t.YNc(4,H,5,0,"div",9),t.YNc(5,k,3,1,"div",9),t.YNc(6,I,7,3,"div",9),t.qZA()(),t.TgZ(7,"div",7)(8,"div",10)(9,"div",11),t._UZ(10,"button",12),t.TgZ(11,"button",13),t.NdJ("click",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.closeModal(i))}),t.qZA()()()()()}if(2&a){const e=t.oxw(2);let o,i,n,s;t.Q6J("formGroup",e.preguntaForm),t.xp6(3),t.Q6J("ngIf",67===(null==e.preguntaForm||null==(o=e.preguntaForm.get("tipoPregunta"))?null:o.value)),t.xp6(1),t.Q6J("ngIf",66===(null==e.preguntaForm||null==(i=e.preguntaForm.get("tipoPregunta"))?null:i.value)),t.xp6(1),t.Q6J("ngIf",66===(null==e.preguntaForm||null==(n=e.preguntaForm.get("tipoPregunta"))?null:n.value)),t.xp6(1),t.Q6J("ngIf",67===(null==e.preguntaForm||null==(s=e.preguntaForm.get("tipoPregunta"))?null:s.value))}}function M(a,r){if(1&a&&(t.YNc(0,Y,1,0,"ngx-spinner",3),t.YNc(1,j,12,5,"form",4)),2&a){const e=t.oxw();t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",!e.loading)}}let z=(()=>{class a{constructor(e,o,i,n,s,yt,Lt){this.fb=e,this.ref=o,this.config=i,this.parametroService=n,this.helpersService=s,this.sanitizer=yt,this.spinner=Lt,this.loading=!1,this.parametroDatos=new f.v,this.parametro=new f.v,this.mostrarCursos=!1,this.tiposPregunta=[],this.sanitizePregunta="",this.alumnoId=null,this.spinner.show(),this.loading=!0;const P=localStorage.getItem("user");if(P){const Nt=JSON.parse(P);this.alumnoId=Nt.alumno_id||1}else console.error("No se encontr\xf3 el objeto user en el localStorage");this.preguntaForm=this.fb.group({tipoPregunta:["",l.kI.required],valor_pregunta:["",l.kI.required],pregunta_docente:["",l.kI.required],alternativas:this.fb.array([]),respuesta_alumno:["",l.kI.required]})}ngOnInit(){this.idEvaluacion=this.config.data.idEvaluacion,this.acciones=this.config.data.acciones,this.sanitizePregunta=this.sanitizer.bypassSecurityTrustHtml(this.config.data.data.pregunta_docente),this.preguntaDocenteValue=this.config.data.data.pregunta_docente,Promise.all([this.listarDePregunta()]).then(()=>{("ver"===this.acciones||"actualizar"===this.acciones||"alumno"===this.acciones||"docente"===this.acciones)&&(this.preguntaForm.patchValue({tipoPregunta:this.config.data.data.tipo_de_evaluacion_id,valor_pregunta:this.config.data.data.valor_pregunta,pregunta_docente:this.preguntaDocenteValue.changingThisBreaksApplicationSecurity,respuesta_alumno:null}),this.setAlternativasv2(this.config.data.data.alternativas)),this.loading=!1})}setAlternativasv2(e){const o=this.preguntaForm.get("alternativas");e.forEach(i=>{o.push(this.fb.group({texto:[i.texto,l.kI.required],respuesta_correcta_seleccionada:[!1,l.kI.required]}))})}onRadioChange(e){this.preguntaForm.get("alternativas").controls.forEach((i,n)=>{const s=i.get("respuesta_correcta_seleccionada");s&&s.setValue(n===e)})}listarDePregunta(){return new Promise((e,o)=>{this.parametroService.getTipoDePregunta().subscribe(i=>{console.log("Lista de getTipoDePregunta",i),this.tiposPregunta=i,e()},i=>o(i))})}setAlternativas(e){const o=e.map(n=>this.fb.group(n)),i=this.fb.array(o);this.preguntaForm.setControl("alternativas",i)}guardarRespuestaCorrecta(){this.preguntaForm.value.alternativas.findIndex(i=>!0===i.respuesta_correcta_seleccionada)}setRespuestaAlumno(){const e=this.preguntaForm.value.alternativas.findIndex(o=>!0===o.respuesta_correcta_seleccionada)+1;this.preguntaForm.get("respuesta_alumno")?.setValue(e)}guardarPregunta(){if(console.log(this.preguntaForm),66===this.config.data.data.tipo_de_evaluacion_id&&this.setRespuestaAlumno(),this.preguntaForm.valid){const e={alumno_id:this.alumnoId,pregunta_id:this.config.data.data.id,respuesta:this.preguntaForm.value.respuesta_alumno,evaluacion_id:this.idEvaluacion,domain_id:this.helpersService.getDominioId(),estado_id:1};this.parametroService.guardarPreguntaAlumno(e).subscribe(o=>{this.ref?.close(),u().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},o=>{console.error("Error al guardar el parametro",o)})}else console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}getAlternativasControls(){return this.preguntaForm.get("alternativas").controls}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(l.qu),t.Y36(p.E7),t.Y36(p.S),t.Y36(g.m),t.Y36(F.$),t.Y36(E.H7),t.Y36(A.t2))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-corregir-preguntas-unica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],["bdColor","rgba(0,0,0,0.5)","size","large","color","#fff","type","ball-spin",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["bdColor","rgba(0,0,0,0.5)","size","large","color","#fff","type","ball-spin"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],["class","col-12",4,"ngIf"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-check","label","Responder","iconPos","right","type","submit",1,"p-button-warning","p-button-sm"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],[1,"col-12"],[1,"p-float-label"],[1,"centered-container"],["pTooltip","Responder pregunta","tooltipPosition","top",3,"innerHTML"],["type","text","pInputText","","formControlName","pregunta_docente","readonly",""],[1,"required"],["formArrayName","alternativas"],["class","col-12",3,"formGroupName",4,"ngFor","ngForOf"],[1,"col-12",3,"formGroupName"],[1,"alternativa-container"],["type","radio","name","respuesta_correcta_seleccionada","formControlName","respuesta_correcta_seleccionada",3,"value","change"],[1,"field","col-12"],["type","text","pInputText","","formControlName","texto","readonly","",3,"id"],[1,"field","col-12","md:col-12"],["for",""],["formControlName","respuesta_alumno"]],template:function(o,i){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,S,2,0,"ng-template",0),t.YNc(2,M,2,2,"ng-template",1),t.qZA())},dependencies:[b.sg,b.O5,l._Y,l.Fj,l._,l.JJ,l.JL,d.Hq,m.jx,h.o,_.s,v.u,D.ML,l.sg,l.u,l.x0,l.CE,A.Ro]})}return a})();var x=c(9552);function O(a,r){1&a&&(t.TgZ(0,"span",2),t._uU(1,"Lista de preguntas por corregir"),t.qZA())}function Q(a,r){1&a&&(t.TgZ(0,"tr")(1,"th",11),t._uU(2,"Preguntas"),t.qZA(),t.TgZ(3,"th",11),t._uU(4,"Estado"),t.qZA()())}function K(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",12),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.corregirPregunta(n))}),t.qZA()()()}}function $(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",13),t._uU(2,"No se encontraron registros"),t.qZA()())}function R(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",13),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function X(a,r){if(1&a&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,Q,5,0,"ng-template",0),t.YNc(6,K,3,0,"ng-template",8),t.YNc(7,$,3,0,"ng-template",9),t.YNc(8,R,3,0,"ng-template",10),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let W=(()=>{class a{constructor(e,o,i){this.dialogService=e,this.cursosService=o,this.config=i,this.loading=!1,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){console.log(this.config.data.data);const e=localStorage.getItem("user");if(e){const o=JSON.parse(e);this.docenteId=o.docente_id||8}else console.error("No se encontr\xf3 el objeto user en el localStorage");this.listarPreguntasParaCorregir()}listarPreguntasParaCorregir(){this.cursosService.getListadoDePreguntasPorCorregir(this.config.data.data.id).subscribe(e=>{this.carrerastecnicasList=e,this.originalCarrerastecnicasList=[...e]})}corregirPregunta(e){this.ref=this.dialogService.open(z,{width:"60%",styleClass:"custom-dialog-header",data:{data:e.pregunta,acciones:"docente"}}),this.ref.onClose.subscribe(()=>{this.listarPreguntasParaCorregir()})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(p.xA),t.Y36(g.m),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-corregir-preguntas"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["scope","col",2,"min-width","10rem"],["pButton","","label","Corregir",1,"p-button-rounded","p-button-info",3,"click"],["colspan","23"]],template:function(o,i){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,O,2,0,"ng-template",0),t.YNc(2,X,9,5,"ng-template",1),t.qZA())},dependencies:[d.Hq,m.jx,x.iA,_.s]})}return a})();const tt=["filter"],et=["dt1"];function ot(a,r){1&a&&(t.TgZ(0,"span",2),t._uU(1,"Listado de preguntas"),t.qZA())}function at(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onGlobalFilter(i))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.navigateAddCurso())}),t.qZA()()()}}function it(a,r){1&a&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"Acciones"),t.qZA(),t.TgZ(3,"th",19),t._uU(4,"Pregunta"),t.qZA(),t.TgZ(5,"th",19),t._uU(6,"Valor de la pregunta"),t.qZA(),t.TgZ(7,"th",19),t._uU(8,"Puntos de la pregunta"),t.qZA(),t.TgZ(9,"th",19),t._uU(10,"Porcentaje de la pregunta"),t.qZA(),t.TgZ(11,"th",19),t._uU(12,"Corregir Preguntas por alumnos"),t.qZA()())}function nt(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",20),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(n))}),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(n))}),t.qZA(),t.TgZ(4,"button",22),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(n.id))}),t.qZA()(),t.TgZ(5,"td"),t._UZ(6,"span",23),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"button",24),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.corregirPregunta(n))}),t.qZA()()()}if(2&a){const e=r.$implicit;t.xp6(6),t.Q6J("innerHTML",e.pregunta_docente,t.oJD),t.xp6(2),t.Oqu(e.valor_pregunta),t.xp6(2),t.Oqu(e.puntos),t.xp6(2),t.hij("",e.porcentaje,"%")}}function rt(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"No se encontraron registros"),t.qZA()())}function st(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function lt(a,r){if(1&a&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,at,7,0,"ng-template",8),t.YNc(6,it,13,0,"ng-template",0),t.YNc(7,nt,15,4,"ng-template",9),t.YNc(8,rt,3,0,"ng-template",10),t.YNc(9,st,3,0,"ng-template",11),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("value",e.grupoEvaluacionesList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let ct=(()=>{class a{constructor(e,o,i,n){this.dialogService=e,this.grupoEvaluacionesService=o,this.config=i,this.sanitizer=n,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.grupoEvaluacionesList=[],this.originalgrupoEvaluacionesList=[],this.promedioTotal=0,this.porcentajeTotal=0}ngOnInit(){this.evaluaciones=this.config.data.data,console.log(this.evaluaciones,"car"),this.listarPreguntas()}listarPreguntas(){this.grupoEvaluacionesService.getPreguntas({id:this.evaluaciones.id}).subscribe(e=>{e.forEach(o=>{o.puntos=Math.floor(20*Math.random())+1,o.porcentaje=20*o.puntos/100}),this.grupoEvaluacionesList=e.map(o=>({...o,pregunta_docente:this.sanitizer.bypassSecurityTrustHtml(o.pregunta_docente)})),this.originalgrupoEvaluacionesList=[...this.grupoEvaluacionesList]})}calcularTotales(){let e=0,o=0;this.grupoEvaluacionesList.forEach(i=>{e+=i.promedio||0,o+=i.porcentaje||0}),this.promedioTotal=e/this.grupoEvaluacionesList.length,this.porcentajeTotal=o/this.grupoEvaluacionesList.length}navigateAddCurso(){this.ref=this.dialogService.open(Z.$,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add",idEvaluacion:this.evaluaciones.id}}),this.ref.onClose.subscribe(e=>{this.listarPreguntas()})}navigateToDetalle(e){this.ref=this.dialogService.open(Z.$,{width:"80%",styleClass:"custom-dialog-header",data:{acciones:"ver",idCurso:this.evaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarPreguntas()})}navigateToEdit(e){this.ref=this.dialogService.open(Z.$,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"actualizar",idCurso:this.evaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarPreguntas()})}navigateToDelete(e){u().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&this.grupoEvaluacionesService.eliminarGrupoEvaluaciones(e).subscribe(i=>{u().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const n=document.querySelector(".swal2-container");n&&n.setAttribute("style","z-index: 2147483647 !important")}}),this.listarPreguntas()},i=>{u().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")})})}onGlobalFilter(e){const o=e.target.value.toLowerCase();this.grupoEvaluacionesList=o?this.originalgrupoEvaluacionesList.filter(i=>i.codigo&&i.codigo.toLowerCase().includes(o)||i.nombres&&i.nombres.toLowerCase().includes(o)||i.cursos&&i.cursos.toLowerCase().includes(o)):[...this.originalgrupoEvaluacionesList]}agregarEvaluaciones(e){this.ref=this.dialogService.open(w,{width:"60%",styleClass:"custom-dialog-header",data:{idCurso:this.evaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarPreguntas()})}corregirPregunta(e){this.ref=this.dialogService.open(W,{width:"60%",styleClass:"custom-dialog-header",data:{idCurso:this.evaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarPreguntas()})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(p.xA),t.Y36(g.m),t.Y36(p.S),t.Y36(E.H7))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ver-listado-de-preguntas"]],viewQuery:function(o,i){if(1&o&&(t.Gf(tt,5),t.Gf(et,5)),2&o){let n;t.iGM(n=t.CRH())&&(i.filter=n.first),t.iGM(n=t.CRH())&&(i.tabledt1=n.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar listado de preguntas",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pTooltip","Responder pregunta","tooltipPosition","top",3,"innerHTML"],["pButton","","label","Corregir",1,"p-button-rounded","p-button-info",3,"click"],["colspan","6"]],template:function(o,i){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,ot,2,0,"ng-template",0),t.YNc(2,lt,10,5,"ng-template",1),t.qZA())},dependencies:[d.Hq,m.jx,x.iA,h.o,_.s,v.u]})}return a})();const ut=["filter"],pt=["dt1"];function gt(a,r){1&a&&(t.TgZ(0,"span",2),t._uU(1,"Listado de evaluaciones por grupo"),t.qZA())}function dt(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onGlobalFilter(i))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.navigateAddCurso())}),t.qZA()()()}}function mt(a,r){1&a&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"Acciones"),t.qZA(),t.TgZ(3,"th",19),t._uU(4,"N Bloque"),t.qZA(),t.TgZ(5,"th",19),t._uU(6,"Nombre del grupo"),t.qZA(),t.TgZ(7,"th",19),t._uU(8,"Preguntas"),t.qZA(),t.TgZ(9,"th",19),t._uU(10,"Nota"),t.qZA(),t.TgZ(11,"th",19),t._uU(12,"% Obtenido"),t.qZA(),t.TgZ(13,"th",19),t._uU(14,"Valor %"),t.qZA(),t.TgZ(15,"th",19),t._uU(16,"Fecha y Hora 1"),t.qZA(),t.TgZ(17,"th",19),t._uU(18,"Fecha y Hora 2"),t.qZA(),t.TgZ(19,"th",19),t._uU(20,"Tipo de Evaluaci\xf3n"),t.qZA(),t.TgZ(21,"th",19),t._uU(22,"Observaciones"),t.qZA(),t.TgZ(23,"th",19),t._uU(24,"Estado"),t.qZA()())}function _t(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",20),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(n))}),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(n))}),t.qZA(),t.TgZ(4,"button",22),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(n.id))}),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.agregarPreguntas(n))}),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA()()}if(2&a){const e=r.$implicit;t.xp6(6),t.Oqu(e.id),t.xp6(2),t.Oqu(e.nombre),t.xp6(4),t.Oqu(e.nota),t.xp6(2),t.hij("",e.porcentaje_obtenido,"%"),t.xp6(2),t.hij("",e.porcentaje_evaluacion,"%"),t.xp6(2),t.Oqu(e.fecha_y_hora_programo),t.xp6(2),t.Oqu(e.fecha_hora_2),t.xp6(2),t.Oqu(e.tipo_evaluacion_nombre),t.xp6(2),t.Oqu(e.observaciones),t.xp6(2),t.Oqu(e.estado_nombre)}}function ht(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",24),t._uU(2,"No se encontraron registros"),t.qZA()())}function ft(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",24),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function vt(a,r){if(1&a&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,dt,7,0,"ng-template",8),t.YNc(6,mt,25,0,"ng-template",0),t.YNc(7,_t,27,10,"ng-template",9),t.YNc(8,ht,3,0,"ng-template",10),t.YNc(9,ft,3,0,"ng-template",11),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("value",e.grupoEvaluacionesList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let w=(()=>{class a{constructor(e,o,i){this.dialogService=e,this.grupoEvaluacionesService=o,this.config=i,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.grupoEvaluacionesList=[],this.originalgrupoEvaluacionesList=[],this.promedioTotal=0,this.porcentajeTotal=0}ngOnInit(){this.grupoEvaluaciones=this.config.data.data,console.log(this.grupoEvaluaciones,"car"),this.listarGrupoEvaluaciones()}listarGrupoEvaluaciones(){this.grupoEvaluacionesService.getListadoDeEvaluacionesPorGrupo({id:this.grupoEvaluaciones.id}).subscribe(e=>{this.grupoEvaluacionesList=e,this.originalgrupoEvaluacionesList=[...e]})}calcularTotales(){let e=0,o=0;this.grupoEvaluacionesList.forEach(i=>{e+=i.promedio||0,o+=i.porcentaje||0}),this.promedioTotal=e/this.grupoEvaluacionesList.length,this.porcentajeTotal=o/this.grupoEvaluacionesList.length}navigateAddCurso(){this.ref=this.dialogService.open(T.Q,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add",idGrupoEvaluaciones:this.grupoEvaluaciones.id}}),this.ref.onClose.subscribe(e=>{this.listarGrupoEvaluaciones()})}navigateToDetalle(e){this.ref=this.dialogService.open(T.Q,{width:"80%",styleClass:"custom-dialog-header",data:{acciones:"ver",idCurso:this.grupoEvaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarGrupoEvaluaciones()})}navigateToEdit(e){this.ref=this.dialogService.open(T.Q,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"actualizar",idCurso:this.grupoEvaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarGrupoEvaluaciones()})}navigateToDelete(e){u().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&this.grupoEvaluacionesService.eliminarListadoDeEvaluacionesPorGrupo(e).subscribe(i=>{u().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const n=document.querySelector(".swal2-container");n&&n.setAttribute("style","z-index: 2147483647 !important")}}),this.listarGrupoEvaluaciones()},i=>{u().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")})})}onGlobalFilter(e){const o=e.target.value.toLowerCase();this.grupoEvaluacionesList=o?this.originalgrupoEvaluacionesList.filter(i=>i.codigo&&i.codigo.toLowerCase().includes(o)||i.nombres&&i.nombres.toLowerCase().includes(o)||i.cursos&&i.cursos.toLowerCase().includes(o)):[...this.originalgrupoEvaluacionesList]}agregarPreguntas(e){this.ref=this.dialogService.open(ct,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add",grupoEvaluacionesId:this.grupoEvaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarGrupoEvaluaciones()})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(p.xA),t.Y36(g.m),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ver-lis-eval-grupo"]],viewQuery:function(o,i){if(1&o&&(t.Gf(ut,5),t.Gf(pt,5)),2&o){let n;t.iGM(n=t.CRH())&&(i.filter=n.first),t.iGM(n=t.CRH())&&(i.tabledt1=n.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar por listado de evaluaciones por grupo",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-list","pTooltip","Listado de preguntas","tooltipPosition","top",1,"p-button-rounded","p-button-info",3,"click"],["colspan","12"]],template:function(o,i){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,gt,2,0,"ng-template",0),t.YNc(2,vt,10,5,"ng-template",1),t.qZA())},dependencies:[d.Hq,m.jx,x.iA,h.o,_.s,v.u]})}return a})();const xt=["filter"],bt=["dt1"];function Ct(a,r){1&a&&(t.TgZ(0,"span",2),t._uU(1,"Grupos de evaluaciones"),t.qZA())}function Tt(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",14)(2,"span",15)(3,"input",16,17),t.NdJ("input",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onGlobalFilter(i))}),t.qZA()()(),t.TgZ(5,"div",18)(6,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.navigateAddCurso())}),t.qZA()()()}}function Zt(a,r){1&a&&(t.TgZ(0,"tr")(1,"th",20),t._uU(2,"Acciones"),t.qZA(),t.TgZ(3,"th",20),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"th",20),t._uU(6,"Nombre del grupo"),t.qZA(),t.TgZ(7,"th",20),t._uU(8,"Evaluaciones"),t.qZA(),t.TgZ(9,"th",20),t._uU(10,"Promedio"),t.qZA(),t.TgZ(11,"th",20),t._uU(12,"%"),t.qZA()())}function Et(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",21),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDetalle(n))}),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToEdit(n))}),t.qZA(),t.TgZ(4,"button",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateToDelete(n.id))}),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",24),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.agregarEvaluaciones(n))}),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()}if(2&a){const e=r.$implicit;t.xp6(6),t.Oqu(e.id),t.xp6(2),t.Oqu(e.nombre_del_grupo),t.xp6(4),t.Oqu(e.promedio),t.xp6(2),t.hij("",e.porcentaje,"%")}}function At(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td",25),t._uU(2,"Promedio Total:"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t._UZ(5,"td"),t.qZA(),t.TgZ(6,"tr")(7,"td",25),t._uU(8,"Porcentaje Total:"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t._UZ(11,"td"),t.qZA()),2&a){const e=t.oxw(2);t.xp6(4),t.Oqu(e.promedioTotal),t.xp6(6),t.hij("",e.porcentajeTotal,"%")}}function wt(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"No se encontraron registros"),t.qZA()())}function Pt(a,r){1&a&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}function Gt(a,r){if(1&a&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,Tt,7,0,"ng-template",8),t.YNc(6,Zt,13,0,"ng-template",0),t.YNc(7,Et,15,4,"ng-template",9),t.YNc(8,At,12,2,"ng-template",10),t.YNc(9,wt,3,0,"ng-template",11),t.YNc(10,Pt,3,0,"ng-template",12),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("value",e.grupoEvaluacionesList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let qt=(()=>{class a{constructor(e,o,i){this.dialogService=e,this.grupoEvaluacionesService=o,this.config=i,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe,this.grupoEvaluacionesList=[],this.originalgrupoEvaluacionesList=[],this.promedioTotal=0,this.porcentajeTotal=0}ngOnInit(){this.grupoEvaluaciones=this.config.data.data,console.log(this.grupoEvaluaciones,"car"),this.listarGrupoEvaluaciones()}listarGrupoEvaluaciones(){this.grupoEvaluacionesService.getGrupoEvaluaciones({id:this.grupoEvaluaciones.id}).subscribe(e=>{this.grupoEvaluacionesList=e,this.originalgrupoEvaluacionesList=[...e]})}calcularTotales(){let e=0,o=0;this.grupoEvaluacionesList.forEach(i=>{e+=i.promedio||0,o+=i.porcentaje||0}),this.promedioTotal=e/this.grupoEvaluacionesList.length,this.porcentajeTotal=o/this.grupoEvaluacionesList.length}navigateAddCurso(){this.ref=this.dialogService.open(C,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add",idCurso:this.grupoEvaluaciones.id}}),this.ref.onClose.subscribe(e=>{this.listarGrupoEvaluaciones()})}navigateToDetalle(e){this.ref=this.dialogService.open(C,{width:"80%",styleClass:"custom-dialog-header",data:{acciones:"ver",idCurso:this.grupoEvaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarGrupoEvaluaciones()})}navigateToEdit(e){this.ref=this.dialogService.open(C,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"actualizar",idCurso:this.grupoEvaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarGrupoEvaluaciones()})}navigateToDelete(e){u().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&this.grupoEvaluacionesService.eliminarGrupoEvaluaciones(e).subscribe(i=>{u().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                  background-color: #78CBF2;\n                  color: white;\n                  z-index: 10000!important;\n                "},didOpen:()=>{const n=document.querySelector(".swal2-container");n&&n.setAttribute("style","z-index: 2147483647 !important")}}),this.listarGrupoEvaluaciones()},i=>{u().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")})})}onGlobalFilter(e){const o=e.target.value.toLowerCase();this.grupoEvaluacionesList=o?this.originalgrupoEvaluacionesList.filter(i=>i.codigo&&i.codigo.toLowerCase().includes(o)||i.nombres&&i.nombres.toLowerCase().includes(o)||i.cursos&&i.cursos.toLowerCase().includes(o)):[...this.originalgrupoEvaluacionesList]}agregarEvaluaciones(e){this.ref=this.dialogService.open(w,{width:"60%",styleClass:"custom-dialog-header",data:{idCurso:this.grupoEvaluaciones.id,data:e}}),this.ref.onClose.subscribe(o=>{this.listarGrupoEvaluaciones()})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(p.xA),t.Y36(g.m),t.Y36(p.S))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ver-g-ev"]],viewQuery:function(o,i){if(1&o&&(t.Gf(xt,5),t.Gf(bt,5)),2&o){let n;t.iGM(n=t.CRH())&&(i.filter=n.first),t.iGM(n=t.CRH())&&(i.tabledt1=n.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","footer"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar grupos de evaluaciones",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-plus","pTooltip","Agregar evaluaciones","tooltipPosition","top",1,"p-button-rounded","p-button-info",3,"click"],["colspan","4",1,"text-right","font-bold"],["colspan","6"]],template:function(o,i){1&o&&(t.TgZ(0,"p-panel"),t.YNc(1,Ct,2,0,"ng-template",0),t.YNc(2,Gt,11,5,"ng-template",1),t.qZA())},dependencies:[d.Hq,m.jx,x.iA,h.o,_.s,v.u]})}return a})()}}]);