"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// const path = require("path");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const test_1 = require("./test");
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, morgan_1.default)("combined"));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/test', test_1.TestRoute);
app.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        message: 'SLOVE backend is running!',
    });
}));
app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT} 🔥`);
    utils_1.isDevelopmentMode && console.log("http://localhost:4000");
});
