
# Install gulp cli
- `npm install --global gulp-cli`
- might have to use sudo 
- `npm install --global gulp-cli`
# Install live-server
- `npm install --global live-server`


# Project Installation
- `git clone https://github.com/bickkysahani.github.io.git`
- `cd bickkysahani.github.io`
- `npm install`


## Building/Watching assets
- `gulp build`
- `gulp watch`



## Styling
Everything will have to be built using components. Components should be placed under the `/scss` directory and imported within `app.scss` file. 
- nav.scss


## JavaScript
No external libraries are to be directly imported within the HTML using script tags. They should be imported within gulp and be preprocessed and concatenated into `app.js`.
Any custom scripts should be placed into `scripts.js` file.

## Src/Dist folder
- the `dist/` folder is automatically generated with the gulp build. The files under this folder are to be referenced in HTML
- the `src/` folder contains the raw scripts and styles. 



## Running Locally
- Go to your local project folder ` cd bickkysahani.github.io`
- run `live-server`
- visit http://127.0.0.1:8080/html/index.html
