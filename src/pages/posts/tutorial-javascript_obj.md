---
layout: ../../layouts/MarkdowndPostLayout.astro
title: 'Obj en javascript'
pubDate: 2024-04-16
description: 'Este es la primera publicación de mi nuevo blog, tutorial sobre obj en javascript'
author: 'Michael Nicolas Galeano'
image:
    url: '/icons/javascript-svgrepo-com.svg'
    alt: 'El logotipo Javascript.'
tags: ["javascript", "bloguear", "obj", 'programación']
---


---

## Obj literales y prototipos ##

Primero **javascript** es un lenguaje orientado a **objetos** donde todo son objetos, los array, los objetos, los string.
Pero no esta basado en objetos, sino en prototipos 
¿y que es eso de prototipos?, ahora lo vamos a desmenusar.
Por dentro todos nuestros objetos estan contruidos por prototipos, un objeto en **javascript** es una instancia del prototipo madre ***Object*** que es creado de forma 'nativa' por Js.

Hay dos maneras de crear obj en **javascript** de forma literal o instancias



### literales ###

```js
    const natalia = {
        name: 'Natalia',
        lastName: 'Perez',
        age: 28
    };
```

### Instancias de prototipos ###

```js
    function alumno ({name, lasName, age}) {
        this.name = name;
        this.lasName = lasName;
        this.age = age
    };

    const miky = new alumno({
        name: 'Miky',
        lasName: 'Galeano',
        age : 29
    })

```
---
## Clases en javascript ##


Las clases no existen en javascript, esta solo es una sintaxis más amigable para crear prototipos, en el interior sigue funcionando como un prototipo

```js
    class student {
        constructor(name, age, cursosAprobados) {
            this.name = name;
            this.age = age;
            this.cursosAprobados = cursosAprobados
        }
        aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
        }
    };
    const miky = new student(
        'Miky',
        28,
        ['curso basico de obj en javascript']
    )

    miky.cursosAprobados('curso de instalación y mantenimiento de sistemas informaticos')

```

Ademas de haber obj literales, prototipos e instancias de prototipos, hay un patron que se llama **ror** imaginen que tenemos muchos parametros, email, diplomas, redes sociales, puntos, escuelas, etc.
Para eso podemos recibir un solo parametro que sea un objeto, entre llaves enviamos los parametros. Con esta nueva sintaxis podemos enviarles los argumentos de forma desordenada, no tenemos que aprendernos su orden en que lo establecimos, tambien podemos darles valores por defecto si lo deseamos.

```js
     class student {
        constructor({
            name,
            age, 
            cursosAprobados = ['curso basico de programación']
            }) {
            this.name = name;
            this.age = age;
            this.cursosAprobados = cursosAprobados
        }
        aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
        }
    };
    const miky = new student({
        cursosAprobados: 'curso de pensamiento computacional',
        age: 28,
        name: 'Miky'

    })

```
---
# 4 pilares de la programación orientada a obj #

- Abstraccioón
- Encapsulamiento
- Herencia
- Polimorfismo

## Qué es la abstracción ##


Ya lo estuvimos haciendo el los ejemplos anteiores, es reutilizar codigo, crear moldes, por ej: codear la clase **auto** con las propiedades ***marca, modelo, motor, puertas, etc*** cosas que comparte con otros autos. Luego crear sus instancias, dandole los argumentos propios que los hacen unicos

## encapsulamiento ##

### encapsulamiento en la programación ###
- Esconder métodos y atributos
- No permitir la alteración de métodos y atributos 

### encapsulamiento en javascript ###

- No permitir la alteración de métodos y atributos

### formas de aplicar encapsulamiento en javascript ###

- Getters y setters
- Namespaces
- Object.defineProperties
- Módulo de ES6

#### getters y setters ####

```js
    class auto {
        constructor({
            modelo,
            año,
            motor,
            puertas,
            ruedas,
        }) {
            this.modelo = modelo;
            this.año = año;
            this.motor = motor;
            this.puertas = puertas;
            this._ruedas = 4
        }
        get ruedas() {
            return this._ruedas;
        }
        set ruedas(num) {
            if (num < 4 || num > 4) {
                console.error('Eso no es un auto men')
            } else {
                this._ruedas = num;
            }
        }
    }

    const ferrari = new auto({
        año: 2023,
        modelo: 'deportivo',
        puertas: 2,
        motor: 'V8'
    })

```
#### módulos de ECMAScript 6 ####

Normalmente cuando importamos nuestro archivo con la extension javascript (js) en nuestro html, lo hacemos de la siguente manera:

```html

    <script src='main.js'></script> 

```

Pero con los modulos es:

```html

    <script src='main.mjs' type='module'></script> 

```

De esta manera se se sigue importando nuestro main al html, pero con la nueva extension **mjs** y al main.mjs se les importa otros archivos mjs, modulos **ECMAScript 6** 

En el nuevo archivo autos.mjs
```mjs

    export default class ferrari {
        constructor({
            modelo,
            año,
            motor,
            puertas,
            ruedas,
        }) {
            this.modelo = modelo;
            this.año = año;
            this.motor = motorV8;
            this.puertas = puertas;
            this.ruedas = ruedas
        }
    }

    const motorV8 = {
        cilindrada : '5000rpm',
        fuerza : '3000',
        modelo : '2023',
    }
```

En el main.mjs
```mjs

    import ferrari from'autos.mjs'

```

Ahora la constante **motorV8** puede ser utiliza por la clase ferrari, pero no la podemos modificar, porque solo existe en el archivo autos y no en main, con esta sintaxis se puede encapsular con **ECMAScript 6**


## qué es herencia ##

La herencia es crear super moldes, prototipos madre, clases que sean la base de otras clases y compartan sus atributos y metodos

## herencia en javascript ##

```js

    class course {
        constructor({
            name,
            clases = [],
            isFree = false,
            lang = 'español'
        }) {
            this._name = name;
            this.clases = clases;
            this.isFree = isFree;
            this.lang = lang
        }
        get name () {
            return this._name
        }
        set name(nuevoNombrecito) {
            if (nuevoNombrecito === 'curso pedorro de programacón') {
                console.error('No seas malo')
            } else {
                this._name = nuevoNombrecito;
            }
        }
    }

    class student {
        constructor ({
            name,
            lastName,
            rank,
            puntos,
            course = [],
            appraveCourses = []
        }) {
            this.name = name;
            this.lastName = lastName;
            this.rank = rank;
            this.puntos = puntos;
            this.course = course;
            this.appraveCourses = appraveCourses
        }
    }

    class freeStudent extends student {
        constructor(props) {
            super(props)
        }

        appraveCourse(newCourse) {
            if (newCourse.isFree) {
                this.appraveCourses.push(newCourse)
            } else {
                console.warn('los sentimos, ' + this.name + ', solo puedes tomar cursos free')
            }
        }
    }
    class basicStudent extends student {
        constructor(props) {
            super(props)
        }
        appraveCourse(newCourse) {
            if (newCourse.lang !== 'english') {
                this.appraveCourses.push(newCourse)
            } else {
                console.warn('los sentimos, ' + this.name + ', solo puedes tomar cursos en español')
            }
        }
    }
    
    class expertStudent extends student {
        constructor(props) {
            super(props)
        }
        appraveCourse(newCourse) {
            this.appraveCourses.push(newCourse)
        }
    }

    const cursoBasico = new course({
        name: 'curso gratis de programacion basica',
        isFree: true,
    })
    const cursoPracticoHtml = new course({
        name: 'curso practico de html y css',
        lang: 'english'
    })
    const cursoDefinitivoHtml = new course({
        name: 'curso definitivo de html y css',
    })


    const juan = new freeStudent({
        name: 'juan',
        lastName: 'perez',
        puntos: 100,
        rank: 5050,
    })
    const miguel = new basicStudent({
        name: 'miguel',
        lastName: 'galeano',
        puntos: 280,
        rank: 3050,
    })
    const thiago = new expertStudent({
        name: 'thiago',
        lastName: 'velazquez',
        puntos: 500,
        rank: 1050,
    })

```

## qué es polimorfismo ##

### tipos de polimorfismos ###

- sobrecarga
- paramétrico
- inclusión

En javascript solo se puede aplicar el polimorfismo de **inclusión** que nos permite sobreescribir el atributo o metodo heredado de la super clase

```js

    class student {
        constructor ({
            name,
            lastName,
            rank,
            puntos,
            course = [],
            appraveCourses = []
        }) {
            this.name = name;
            this.lastName = lastName;
            this.rank = rank;
            this.puntos = puntos;
            this.course = course;
            this.appraveCourses = appraveCourses
        }
        publicarComentario(comentContent) {
            const comment = new comment({
                content: comentContent,
                studentName: this.name,
            });
            comment.publicar()
        }
    }

    class comment {
        constructor({
            content,
            studentName,
            studentRole = 'estudiante'
        }) {
            this.content = content;
            this.studentName = studentName;
            this.studentRole = studentRole;
            this.like = 0
        }

        publicar () {
            console.log(this.studentName + '(' + this.studentRole + ')');
            console.log(this.like + ' likes');
            console.log(this.content);
        }
    }

    class teacherStudent extends student {
        constructor(props) {
            super(props)
        }
        appraveCourse(newCourse) {
            this.appraveCourses.push(newCourse)
        }
        publicarComentario(comentContent) {
            const commentario = new comment({
                content: comentContent,
                studentName: this.name,
                studentRole: 'profesor'
            });
            commentario.publicar()
        }
    }

    const freddy = new teacherStudent({
        name: 'freddy',
        lastName: 'DC',
        puntos: 280,
        rank: 3050,
    })

```