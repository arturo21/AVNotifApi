/*
  Copyright (C) 2025 Arturo Vasquez Soluciones Web.
  Todos los derechos reservados.

  La redistribución y uso en formatos fuente y binario están permitidas
  siempre que el aviso de copyright anterior y este párrafo son
  duplicado en todas esas formas y que cualquier documentación,
  materiales de publicidad y otros materiales relacionados con dicha
  distribución y uso reconocen que el software fue desarrollado
  por el Arturo Vasquez Soluciones Web. El nombre de
  Arturo Vasquez Soluciones Web No se puede utilizar para respaldar o promocionar productos derivados
  de este software sin el permiso previo por escrito.
  ESTE SOFTWARE SE PROPORCIONA '' tal cual '' Y SIN EXPRESA O
  Garantías implícitas, incluyendo, sin limitación, los implicados
  GARANTÍAS DE COMERCIALIZACIÓN Y APTITUD PARA UN PROPÓSITO PARTICULAR.
*/
/************************************************/
/**********************NOTIF API*****************/
/************************************************/
var notifapi=(function(global){
	//write code below
	function buildbody(mensaje,tipo){
		//tipos: primary, link, info, success, warning, danger
		let firstNow_ = performance.now();
		let firstNow = parseInt(firstNow_);
		let final = (firstNow * 27);
		let divp=genrl.getCreate("div");
		let divh=genrl.getCreate("div");
		let btncerrar=genrl.getCreate("button");
		let span=genrl.getCreate("span");
		let clasecss="";

		divp.id="divpadre" + final;
		divp.name="divpadre" + final;
		divp.classList.add("notification");
		if(tipo=="primary"){
			clasecss="is-primary";
		}
		if(tipo=="link"){
			clasecss="is-link";
		}
		if(tipo=="info"){
			clasecss="is-info";
		}
		if(tipo=="success"){
			clasecss="is-success";
		}
		if(tipo=="warning"){
			clasecss="is-warning";
		}
		if(tipo=="danger"){
			clasecss="is-danger";
		}

		divp.classList.add(clasecss);

		btncerrar.id="divcerrar" + final
		btncerrar.name="divcerrar" + final
		btncerrar.classList.add("delete");
		btncerrar.onclick=function(){
			idmensaje=divp.id;
			g("#" + idmensaje).animate('fadeOut','300',function(){
				genrl.log("Finished");
				ele=divp.parentNode;
				divp.remove(ele);
			});
		}
		divh.id="divhijo" + final
		divh.name="divhijo" + final
		span.id="textointerno" + final
		span.name="textointerno" + final
		span.innerHTML=mensaje;
		divh.append(span);
		divp.append(divh);
		divp.append(btncerrar);
		return divp;
	};
return{
    notif:function(detalles){
		//notif(mensaje,[tipo,callback,tiempo]);
		let argsjs=detalles;
		let iftimer=0;
		let iffunction=0;
		let iftipo=0;
		let tiempo=0;
		let tipo="";
		let callback;
		let container;

		if(argsjs.mensaje==""){
			genrl.warn("No tipeó eol mensaje a mostrar!!");
		}
		else{
			msg=argsjs.mensaje;
		}

		if(argsjs.tipo!=undefined){
			iftipo=1;
			tipo=argsjs.tipo;
		}
		else{
			iftipo=1;
			tipo="primary";
		}

		if(argsjs.callback!=undefined){
			iffunction=1;
			callback=argsjs.callback;
		}

		if(argsjs.container!=undefined){
			iffunction=1;
			container=argsjs.container;
		}
		else{
			genrl.error("DEBES INCLUIR EL CONTAINER!");
		}

		if(argsjs.tiempo!=undefined){
			iftimer=1;
			tiempo=parseInt(argsjs.tiempo);
		}

		messagemod=buildbody(msg,tipo);
		idmensaje=messagemod.id;
		g(container).append(messagemod);

		if(iffunction==1){
			if(typeof callback==='function'){
				if(iftimer==1){
					function desvanecer(){
						g("#" + idmensaje).animate('fadeOut',tiempo,function(){
							genrl.log("Finished");
							elemppl=g("#" + idmensaje).getEl();
							ele=elemppl.parentNode;
							elemppl.remove(ele);
						});
					}
					setTimeout(desvanecer,tiempo);
				}
				else{
					callback();
				}
			}
		}
  	}
  }
}(window));
