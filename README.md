# NotifApi
API para notificaciones basado en CSS bulma y General.JS

##Ejemplo de Uso

###Notificación Fija
```javascript
	notifapi.notif({
		mensaje:"Esto es Una prueba",
		tipo:"danger"
	});
```

###Notificación Temporal 
#### Se desvanece en N milisegundos
```javascript
	notifapi.notif({
		mensaje:"Esto es Una prueba",
		tipo:"success",
		tiempo:1000,
		funcion:function(){
			console.log("Finalizado");
		}
	});
```
