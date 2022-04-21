![Pantallazo-2022-04-21 01-06-34](https://user-images.githubusercontent.com/6676774/164376474-5aad1337-3722-435d-96b8-674eb4e061cc.png)

# NotifApi
API para notificaciones basado en CSS bulma y General.JS

## Tipos de Notificaciones

* primary
* link
* info
* success
* warning
* danger

## Ejemplo de Uso

### Notificación Fija
```javascript
	notifapi.notif({
		mensaje:"Esto es Una prueba",
		tipo:"danger"
	});
```

### Notificación Temporal 
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
