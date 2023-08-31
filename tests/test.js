const { default: expect } = require('expect')
const fb = require('../fizzbuzz')

test('Sanity check', () => {

})

//Test for constants

test('test FIZZ', () => {
    expect(fb.FIZZ).toBe("fizz")
})

test('test BUZZ', () => {
    expect(fb.BUZZ).toBe("buzz")
})

test('test FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe("fizzbuzz")
})

//Test for functions

test('Test isFizzy', () => {
    expect(fb.isFizzy(1)).toBe(false)
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(4)).toBe(false)
    expect(fb.isFizzy(6)).toBe(true)
})

test('Test isBuzzy', () => {
    expect(fb.isBuzzy(1)).toBe(false)
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(8)).toBe(false)
    expect(fb.isBuzzy(25)).toBe(true)
})

test('Test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(15)).toBe("fizzbuzz")
    expect(fb.fizzyBuzzy(5)).toBe("buzz")
    expect(fb.fizzyBuzzy(3)).toBe("fizz")
    expect(fb.fizzyBuzzy(1)).toBe("")
})

test('Test fizzBuzz', () => {
    expect(fb.fizzBuzz(10)).toStrictEqual({ count: 10, fizz: 3, buzz: 2, fizzBuzz: 0 })
    expect(fb.fizzBuzz(30)).toStrictEqual({ count: 30, fizz: 8, buzz: 4, fizzBuzz: 2 })
    expect(fb.fizzBuzz(5)).toBeInstanceOf(Object)
})
