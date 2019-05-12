## Classes

<dl>
<dt><a href="#Ant">Ant</a></dt>
<dd><p><code>~/src/app/ant.js</code> Contains the class Ant.</p>
</dd>
<dt><a href="#Universe">Universe</a></dt>
<dd><p><code>~/src/components/universe/component.js</code> Contains the component class Universe.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#Gulp">Gulp</a> : <code>object</code></dt>
<dd><p><code>~/gulpfile.js</code> Contains functions that do jobs otherwise done manually in a terminal, and tasks that orchestrate these.</p>
</dd>
<dt><a href="#Server">Server</a> : <code>object</code></dt>
<dd><p><code>~/server.js</code> Manages the server and ports.</p>
</dd>
<dt><a href="#Routes">Routes</a> : <code>object</code></dt>
<dd><p><code>~/routes.js</code> Manages all HTML and JSON API end points.</p>
</dd>
</dl>

<a name="Ant"></a>

## Ant
`~/src/app/ant.js` Contains the class Ant.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| bar | <code>foo</code> | Foobar |


* [Ant](#Ant)
    * [new Ant()](#new_Ant_new)
    * [.talk()](#Ant+talk) ⇒ <code>string</code>

<a name="new_Ant_new"></a>

### new Ant()
Creates a new Ant object.

<a name="Ant+talk"></a>

### ant.talk() ⇒ <code>string</code>
Prints a message from the ant.

**Kind**: instance method of [<code>Ant</code>](#Ant)  
**Returns**: <code>string</code> - Message spoken.  
**Example**  
```js
var antony = new Ant();
console.log(antony.talk());
```
<a name="Universe"></a>

## Universe
`~/src/components/universe/component.js` Contains the component class Universe.

**Kind**: global class  
**Requires**: <code>module:NPM:d3</code>, <code>module:~/src/app/ant:Ant</code>  
**Author**: Oscar Alfonso Guerrero  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| bar | <code>foo</code> | Foobar |


* [Universe](#Universe)
    * _instance_
        * [.onMount()](#Universe+onMount)
    * _static_
        * [.color](#Universe.color)

<a name="Universe+onMount"></a>

### universe.onMount()
This function is executed once after the component is mounted.

**Kind**: instance method of [<code>Universe</code>](#Universe)  
<a name="Universe.color"></a>

### Universe.color
Contains the colors used in the universe.

**Kind**: static property of [<code>Universe</code>](#Universe)  
**Example**  
```js
var color = {
  ground: '#8A9544',
  ant: '#D76729',
  food: '#E7B834',
  water: '#3FA483',
  other: '#503038'
}
```
<a name="Gulp"></a>

## Gulp : <code>object</code>
`~/gulpfile.js` Contains functions that do jobs otherwise done manually in a terminal, and tasks that orchestrate these.

**Kind**: global namespace  
**Requires**: <code>module:NPM:gulp</code>, <code>module:NPM:fs</code>, <code>module:NPM:jsdoc-to-markdown</code>  
**See**: [docs](https://gulpjs.com/docs/en/getting-started/creating-tasks) for further information.  
**Author**: Oscar Alfonso Guerrero  

* [Gulp](#Gulp) : <code>object</code>
    * [.jsDocs](#Gulp.jsDocs)
    * [.unitTest](#Gulp.unitTest)
    * [.docs](#Gulp.docs)
    * [.test](#Gulp.test)
    * [.watchDocs](#Gulp.watchDocs)

<a name="Gulp.jsDocs"></a>

### Gulp.jsDocs
Executes a Gulp function that turns JSDoc comments into documentation inside `~/src/README.md`.

**Kind**: static property of [<code>Gulp</code>](#Gulp)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback function for executing asynchronously. |

<a name="Gulp.unitTest"></a>

### Gulp.unitTest
Executes automatic unit tests.

**Kind**: static property of [<code>Gulp</code>](#Gulp)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback function for executing asynchronously. |

<a name="Gulp.docs"></a>

### Gulp.docs
Running inside the terminal the command `gulp docs` executes all documentation functions in parallel.

**Kind**: static property of [<code>Gulp</code>](#Gulp)  
<a name="Gulp.test"></a>

### Gulp.test
Running inside the terminal the command `gulp test` executes all testing functions in parallel.

**Kind**: static property of [<code>Gulp</code>](#Gulp)  
<a name="Gulp.watchDocs"></a>

### Gulp.watchDocs
Running inside the terminal the command `gulp watchDocs` watches and executes in parallel all documentation functions when `~/gulpfile.js`, `~/routes.js`, `~/server.js` or `~/src/ ** / *.js` are changed.

**Kind**: static property of [<code>Gulp</code>](#Gulp)  
<a name="Server"></a>

## Server : <code>object</code>
`~/server.js` Manages the server and ports.

**Kind**: global namespace  
**Requires**: <code>module:NPM:marko</code>, <code>module:NPM:express</code>, <code>module:NPM:lasso</code>, <code>module:./routes:routes</code>  
**See**

- [docs](https://markojs.com/docs/express/) for further information.
- [example](https://github.com/marko-js-samples/weather/blob/master/server.js).

**Author**: Oscar Alfonso Guerrero  
<a name="Server.listen"></a>

### Server.listen
Running inside the terminal the command `npm start` or `node server.js` will start the server and listen to the port `8080`. Additionally the command `browser-refresh server.js` will run a

**Kind**: static property of [<code>Server</code>](#Server)  
<a name="Routes"></a>

## Routes : <code>object</code>
`~/routes.js` Manages all HTML and JSON API end points.

**Kind**: global namespace  
**See**: [example](https://github.com/marko-js-samples/weather/blob/master/routes.js).  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>object</code> | Express app object. |

<a name="Routes.home"></a>

### Routes.home
`~/src/routes/home/index.js` Contains the route for home.

**Kind**: static property of [<code>Routes</code>](#Routes)  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | Request object. |
| res | <code>object</code> | Response object. |

