const enhancer = require('./enhancer.js');
const _ = require('underscore');
// test away!

describe('repair should', () => {
    it('not modify the original input', function(){
        const input = {
            durability: 101000, abc: "xyz"};
        const result = enhancer.repair(input);
        expect(_.isEqual(input, result)).toBe(false);
    })
    it('durability of output is 100', function(){
        input = {durability: 101000, abc: "xyz"};
        const result = enhancer.repair(input);
        expect(result.hasOwnProperty('durability')).toBe(true);
        expect(result['durability']).toBe(100);
    })
});
describe('get should', () => {
    it('not modify the original input', function(){
        const input = {
            durability: 101000, abc: "xyz"};
        const result = enhancer.get(input);
        expect(_.isEqual(input, result)).toBe(true);
    })
    it('durability of original output is 100', function(){
        input = {durability: 101000, abc: "xyz"};
        const result = enhancer.get(input);
        expect(result.hasOwnProperty('durability')).toBe(true);
        expect(result['durability']).toBe(101000);
    })
});
describe('success should', () => {
    it('not modify the original input', function(){
        const input = {
            durability: 101000, abc: "xyz"};
        const result = enhancer.success(input);
        expect(_.isEqual(input, result)).toBe(false);
    })
    it('increase enhancement by one', function(){
        const input = {
            durability: 101000, 
            abc: "xyz",
            enhancement: 10
        };
        const result = enhancer.success(input);
        expect(result.enhancement).toBe(input.enhancement + 1);
    })
    it('not changed enhancement if level is 20', function(){
        const input = {
            durability: 101000, 
            abc: "xyz",
            enhancement: 20
        };
        const result = enhancer.success(input);
        expect(result.enhancement).toBe(input.enhancement);
    })
    it('not change durability', function(){
        const input = {
            durability: 101000, 
            abc: "xyz",
            enhancement: 20
        };
        const result = enhancer.success(input);
        expect(result.durability).toBe(input.durability);
    })
});
describe('fail should', () => {
    it('not modify the original input', function(){
        const input = {
            durability: 101000, abc: "xyz"};
        const result = enhancer.fail(input);
        expect(_.isEqual(input, result)).toBe(false);
    })
    it('decrease durability by 5 if enhancement < 15', function(){
        const input = {
            durability: 101000, 
            abc: "xyz",
            enhancement: 14
        };
        const result = enhancer.fail(input);
        expect(result.durability).toBe(input.durability -5);
    })
    it('decrease durability by 10 if enhancement >= 15', function(){
        const input = {
            durability: 101000, 
            abc: "xyz",
            enhancement: 15
        };
        const result = enhancer.fail(input);
        expect(result.durability).toBe(input.durability -10);
    })
    it('decrease enhancement by 1 if enhancement > 16', function(){
        const input = {
            durability: 101000, 
            abc: "xyz",
            enhancement: 17
        }
        const result = enhancer.fail(input);
        expect(result.enhancement).toBe(input.enhancement -1);
    })
});