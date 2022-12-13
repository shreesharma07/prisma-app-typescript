"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var morgan_1 = __importDefault(require("morgan"));
var logger_1 = __importDefault(require("../lib/logger"));
// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
var stream = {
    // Use the http severity
    write: function (message) { return logger_1["default"].http(message); }
};
// Skip all the Morgan http log if the
// application is not running in development mode.
// This method is not really needed here since
// we already told to the logger that it should print
// only warning and error messages in production.
var skip = function () {
    var env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};
// Build the morgan middleware
var morganMiddleware = (0, morgan_1["default"])(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms', { stream: stream, skip: skip });
exports["default"] = morganMiddleware;
//# sourceMappingURL=morgan.js.map