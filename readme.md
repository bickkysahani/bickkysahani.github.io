
# Install gulp cli
- `npm install --global gulp-cli`
- might have to use sudo 
- `npm install --global gulp-cli`


# Project Installation
- `cd work-directory`
- `git clone https://github.com/laakhe/beautyandnails.com.au.git`
- `cd beautyandnails.com.au`
- `npm install`




## Building/Watching assets
- `gulp build`
- `gulp watch`



## Styling
Everything will have to be built using components. Components should be placed under the `/components` directory and imported within `app.scss` file. 
- buttons.scss


## JavaScript
No external libraries are to be directly imported within the HTML using script tags. They should be imported within gulp and be preprocessed and concatenated into `app.js`.
Any custom scripts should be placed into `scripts.js` file.

## Src/Dist folder
- the `dist/` folder is automatically generated with the gulp build. The files under this folder are to be referenced in HTML
- the `src/` folder contains the raw scripts and styles. 



## Running Locally
- Go to your local project folder ` cd beautyandnails.com.au`, if installed as a theme inside wordpress, go to `wp-content/themes/PROJECT_NAME/`
- run `php -s localhost:8005`
- visit http://localhost:8005/html
