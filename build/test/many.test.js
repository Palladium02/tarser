"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const src_1 = require("../src");
(0, node_test_1.test)('should parse many characters', () => {
    const parser = (0, src_1.many)((0, src_1.char)('a'));
    const result = parser.run('aaa');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'ok',
        index: 3,
        value: ['a', 'a', 'a'],
        input: 'aaa',
    });
});
(0, node_test_1.test)('should not fail if no match is found', () => {
    const parser = (0, src_1.many)((0, src_1.char)('a'));
    const result = parser.run('');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'ok',
        index: 0,
        value: [],
        input: '',
    });
});
//# sourceMappingURL=many.test.js.map