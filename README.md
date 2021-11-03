# APP Template
This template offers boilerplate code for generating siliconminds apps

## Quick start
### Installing:
```
npm install
```

### Development:
```
npm run serve
```

### Production build:
```
npm run build
```

## Features
### Overview
- dynamic routing and page loading
- base component set
- tailwindcss
- heroicons
- global alert system
- easy api helper
- auth store
- auth pages
- example crud store and pages

### Dynamic pages
All pages in the 'src/pages/' directory are automatically routed on the path starting from 'src/pages/'

For example, 'src/pages/index.vue/' will be served at '/'

Router params are configured by prepending page filenames with '_'

For example, 'src/pages/items/_id.vue' will be served at '/items/itemdId' with 'itemId' being set on '$route.params._id'.


