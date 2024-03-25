"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const src_1 = require("../src");
(0, node_test_1.test)('should parse a single character', () => {
    const parser = (0, src_1.char)('a');
    const result = parser.run('a');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'ok',
        index: 1,
        value: 'a',
        input: 'a',
    });
});
(0, node_test_1.test)('should fail if the character is not present', () => {
    const parser = (0, src_1.char)('a');
    const result = parser.run('b');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'err',
        index: 0,
        message: 'Expected a but got b',
        input: 'b',
    });
});
(0, node_test_1.test)('should fail if the input is empty', () => {
    const parser = (0, src_1.char)('a');
    const result = parser.run('');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'err',
        index: 0,
        message: 'Expected a but got EOF',
        input: '',
    });
});
//# sourceMappingURL=char.test.js.map