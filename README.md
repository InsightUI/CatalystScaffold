# Catalyst Project Scaffold

## Installing and Getting Started

Clone this project `git clone https://github.com/InsightUI/CatalystScaffold.git`<br>
Install `npm setup`<br>
Start `npm start`

## Available scripts

### `npm run setup`

Run this after cloning the repo vs install direct. This will install all dependencies and also run the validate task to make sure you have a clean install

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run lint`

This will run `kcd-scripts` lint task

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run flow`

Runs the flow tool. Flow will typecheck any files that include the `// @flow` comment at the top
of the file.

### `npm run build-css`

Runs a SASS task to compile sass files to css source files

### `npm run watch-css`

Runs a SASS task to compile sass files and watch for changes to recompile

### `npm run validate`

This runs the lint and test tasks together, a handy tool to check the app for flaws

**Note: npm run eject was removed on purpose. If you really need to eject, check with others first**

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
