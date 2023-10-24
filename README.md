# nimble-vue-components

## Project setup
```npm install nimble-vue-components```

Import library in config file - app/main.js
```import NimbleVueComponents from 'nimble-vue-components';```

Import library styles and icons for vue project
```import 'nimble-vue-components/dist/styles.css';```
```import 'nimble-vue-components/dist/nimble-vue-components.css';```
```import 'boxicons/css/boxicons.min.css';```

Use it with vue instance
```app.use(NimbleVueComponents);```

Note: You can import styles directly to main css 
if your project css file is project wide and working with other tools.
```@import "~nimble-vue-components/dist/styles.css";```
```@import "~nimble-vue-components/dist/nimble-vue-components.css";```

**Initial lib documentation**
- how to set in project 

### purpose and goals
Nimble Vue is vue materials library. 

The purpose of Nimble Vue is to provide basic components, highly manageable, without tons of complex implementation
and styling. Complexity that is necessary only in rare cases. 

Main goal is to be nimble, be used in small projects on the fly, as alternative to the big and stuffed libraries.

The inspiration came from a bad experience with one of the famous vue library, when I had to manually override 
styling classes in order to use the library in small startup project. 

### components
**Button**
**Rich Tech Editor**
**Expanding Tile**
**Loading bar**
**Modal Panel**
**Notice box**

### Examples
Run the library as normal vue project and you can find the components default usage
```npm run serve```

### icons 
Box Icons : Premium web friendly icons for free - https://boxicons.com/

### Custom css classes
nav-shadow
weak-shadow
deep-shadow

nv-w-3/13 = 23%
nv-h-9/10 = 90%
nv-h-15/16 = 96%
nv-max-h-152 : 40rem