"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
var controller_1 = require("../controller/controller");
router.get('/', controller_1.getUsers);
router.get('/:id', controller_1.getUser);
router.post('/create-new-user', createUser);
exports["default"] = router;
//# sourceMappingURL=user.js.map