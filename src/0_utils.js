/**
 * Just provides a couple of utilities.
 */

goog.provide('utils');

/** @define {boolean} */
var DEBUG = true;

/* jshint ignore:start */
/** @typedef {string} */
message; // Does not work with tests

/** @typedef {{session_id:string, identity_id:string, link:string, data:string, referring_identity:string, link_click:string}} */
utils.sessionData;
/* jshint ignore:end */

/** @type {Object<string,message>} */
utils.messages = {
	missingParam: 'API request $1 missing parameter $2',
	invalidType: 'API request $1, parameter $2 is not $3',
	nonInit: 'Branch SDK not initialized',
	existingInit: 'Branch SDK already initilized',
	missingAppId: 'Missing Branch app ID'
};

/**
 * @param {message}
 * @param {?Array.<*>}
 * @throws {Error}
 */
utils.error = function(message, params) {
	throw new Error(utils.message(message, params));
};

/**
 * @param {message}
 * @param {?Array.<*>}
 */
utils.message = function(message, param) {
	var msg = message.replace(/\$(\d)/g, function(_, place) {
		return param[parseInt(place) - 1];
	});
	if (DEBUG && console) { console.log(msg); }
	return msg;
};

/**
 * @returns {?utils.sessionData}
 */
utils.readStore = function() {
	return JSON.parse(sessionStorage.getItem('branch_session')) || {};
};

/**
 * @param {utils.sessionData}
 */
utils.store = function(data) {
	sessionStorage.setItem('branch_session', JSON.stringify(data));
};

/**
 * @param {?string} key
 * @param {?string} value
 */
utils.storeKeyValue = function(key, value) {
	var currentSession = utils.readStore();
	currentSession[key] = value;
	utils.store(currentSession);
};

/**
 * @param {?string} key
 */
utils.readKeyValue = function(key) {
	var currentSession = utils.readStore();
	return currentSession[key];
};

utils.hasApp = function() {
	return utils.readKeyValue("has_app");
};

utils.merge = function(to, from) {
	for (var attr in from) {
		if (from.hasOwnProperty(attr)) { to[attr] = from[attr]; }
	}
	return to;
};

utils.hashValue = function(key) {
	try {
		return location.hash.match(new RegExp(key + ':([^&]*)'))[1];
	}
	catch (e) {
		return '';
	}
};
