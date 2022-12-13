"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var winston_1 = __importDefault(require("winston"));
// Import Winston Daily Rotate File
var winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
var _a = winston_1["default"].format, combine = _a.combine, timestamp = _a.timestamp, printf = _a.printf, colorize = _a.colorize, align = _a.align, json = _a.json;
var levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};
var level = function () {
    var env = process.env.NODE_ENV || 'development';
    var isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};
var colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'white',
    silly: 'gray'
};
winston_1["default"].addColors(colors);
var format = combine(timestamp({
    format: 'YYYY-MM-DD hh:mm:ss.SSS A'
}), align(), json(), printf(function (info) { return "[".concat(info.timestamp, "] [").concat(info.level, "] ").concat(info.message); }));
var combinedFileRotateTransport = new winston_daily_rotate_file_1["default"]({
    filename: 'logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d'
});
var errorFileRotateTransport = new winston_daily_rotate_file_1["default"]({
    filename: 'logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
    level: 'error'
});
var warningFileRotateTransport = new winston_daily_rotate_file_1["default"]({
    filename: 'logs/warn-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
    level: 'warn'
});
var infoFileRotateTransport = new winston_daily_rotate_file_1["default"]({
    filename: 'logs/info-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
    level: 'info'
});
var transports = [
    new winston_1["default"].transports.Console({
        format: combine(colorize({
            all: true
        }))
    }),
    combinedFileRotateTransport,
    errorFileRotateTransport,
    warningFileRotateTransport,
    infoFileRotateTransport
];
var Logger = winston_1["default"].createLogger({
    level: level(),
    levels: levels,
    format: format,
    transports: transports
});
exports["default"] = Logger;
//# sourceMappingURL=logger.js.map