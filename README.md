Release v1.2.21
#TS Storybook setup
This is default setup for TypeScript component base with Storybook setup.

##Getting started
To start the storybook project just run:

```sh
npm run storybook
```

The app will be started on `http://localhost:6006/`

##File structure
All components are based in a components folder.

```sh
-.storybook/
|-main.js
|-preview.js
-components
|-layout
|-brandIdentity
|-interface
```

`brandIdentity` - contains information about default setup of the components (corporate color palette, used Icons, Typography etc.)

Inside `layout` folder basic display components stored (Grid, Flex etc.);

`Interface` contains UI components (Buttons, Dropdowns etc.)

##Links to fonts

```sh
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```
