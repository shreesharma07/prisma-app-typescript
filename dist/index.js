"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// ! // Importing Modules //
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
// ! // Importing Other Configs //
var logger_1 = __importDefault(require("./lib/logger"));
var index_1 = require("./config/index");
var user_1 = __importDefault(require("./routes/user"));
dotenv_1["default"].config();
// $ // Declaring Global appRoot //
var appRoot = path_1["default"].resolve(__dirname);
// * // Configuring Application //
var app = (0, express_1["default"])();
app.use(index_1.config.morgan);
// * // Assingin Middlewares //
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.get('/', function (req, res) { return res.status(200).send('Welcome to my Prisma App'); });
app.use('/user', user_1["default"]);
// ! // Route Middleware //
app.use(function (req, res) {
    res.status(404).json({ message: 'Route Not Found' });
});
// * // Creating and Initializing Express Server //
http_1["default"].createServer(app).listen(index_1.config.server.port, function () {
    logger_1["default"].info("[server \u2728] Listening on http://localhost:".concat(index_1.config.server.port));
});
//# sourceMappingURL=index.js.map