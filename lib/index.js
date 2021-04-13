'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _botifySdkMiddlewares = require('botify-sdk-middlewares');

/** Apply default middlewares **/

var sdk = (0, _botifySdkMiddlewares.applyMiddleware)(_botifySdkMiddlewares.apiErrorMiddleware, (0, _botifySdkMiddlewares.queryMiddleware)(), _botifySdkMiddlewares.dedupleMiddleware)(_base2['default']);

sdk.authToken = function authToken(token) {
  sdk.configuration.authorization = 'Token ' + token;
};

sdk.Query = _botifySdkMiddlewares.Query;
sdk.QueryAggregate = _botifySdkMiddlewares.QueryAggregate;
sdk.ApiError = _botifySdkMiddlewares.ApiError;
sdk.ApiResponseError = _botifySdkMiddlewares.ApiResponseError;
exports['default'] = sdk;
module.exports = exports['default'];