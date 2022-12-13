"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("./morgan"));
dotenv_1["default"].config();
var PORT = process.env.PORT || 9090;
exports.config = {
    server: {
        port: PORT
    },
    morgan: morgan_1["default"]
};
//# sourceMappingURL=index.js.map