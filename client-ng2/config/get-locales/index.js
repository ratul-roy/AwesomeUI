
'use strict';
const path = require('path');
const fs = require('fs');
const LOCALES_FOLDER = path.join(__dirname, '../', '/locales');
const JSON_REGX = /(.+)\.json$/;
const DEFAULT_LOCALE = 'en';

const localesDir = fs.readdirSync(LOCALES_FOLDER);


	const locales = {
    	[DEFAULT_LOCALE]: null
	};
	for(let file of localesDir) {
	    let res = JSON_REGX.exec(file);
	    if (res) {
	        locales[res[1]] = require(path.join(LOCALES_FOLDER, file));
	    }
	}
module.exports = locales;