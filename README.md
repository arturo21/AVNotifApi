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

## NPM
```javascript
	npm i notifapi.js
```

## Para el correcto funcionamiento debes importar los CSS de Bulma
```html
	<link rel="stylesheet" href="https://cdn.underdevelopment.work/bulma/css/bulma.min.css">
```

## Ejemplo de Uso

### Notificación Fija
```javascript
	notifapi.notif({
		container:"#mydiv",
		mensaje:"Esto es Una prueba",
		tipo:"danger",
		callback:function(){
			console.log("Finalizado");
		}
	});
```

### Notificación Temporal 
#### Se desvanece en N milisegundos
```javascript
	notifapi.notif({
		container:"#mydiv",
		mensaje:"Esto es Una prueba",
		tipo:"success",
		tiempo:1000,
		callback:function(){
			console.log("Finalizado");
		}
	});
```
