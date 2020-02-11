# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cphung1/lotide`

**Require it:**

`const _ = require('@cphung1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description

* `countLetters(string,{'a':true,'b':true})`: counts the occurence of given letter(s) in a string.
* `eqArrays(array1,array2)`: evaluates if two given arrays are equal.
* `eqObjects(obj1,obj2)`: evaluates if two given objects are equal.
* `findKey(obj,callback)`: returns the key of a given object that matches the conditions of a callback function.
* `findKeyByValue(obj,value)`: finds the key of a given value for an object.
* `head(arr)`: find and return the first element of an array.
* `map(arr,callback)`: performs a callback function on each element of a given array.
* `middle(arr)`: returns the middle value in an array (returns two if array is even and nothing if the array contains less than 2 elements).
* `tail(arr)`: return all elements but the first one in a given array.
* `takeUntil(arr,callback)`: return all elements in an array until the callback function returns true.
* `without(array1,array2)`: return array1 with array2 values excluded.