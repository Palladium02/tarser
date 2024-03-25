"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const src_1 = require("../src");
(0, node_test_1.test)('should parse numbers and convert them to js numbers', () => {
    const parser = src_1.float.map(src_1.Converter.forFloat);
    node_assert_1.default.deepStrictEqual(parser.run('123.456'), {
        type: 'ok',
        index: 7,
        value: 123.456,
        input: '123.456',
    });
});
//# sourceMappingURL=map.test.js.map