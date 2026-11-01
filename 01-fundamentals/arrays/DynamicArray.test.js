
import { describe, it, expect } from "vitest";
import { DynamicArray } from "./DynamicArray.js";

describe("DynamicArray", () => {
  // Constructor tests
  it("should initialise with the default capacity", () => {
    const array = new DynamicArray();

    expect(array.capacity).toBe(4);
    expect(array.size).toBe(0);
    expect(array.data.length).toBe(4);
  });

  it("should accept a custom initial capacity", () => {
    const array = new DynamicArray(8);

    expect(array.capacity).toBe(8);
    expect(array.size).toBe(0);
  });

  it("should reject an invalid initial capacity", () => {
    expect(() => new DynamicArray(0)).toThrow();
    expect(() => new DynamicArray(-2)).toThrow();
    expect(() => new DynamicArray(2.5)).toThrow();
  });

  // Push tests
  it("should add an element to the array", () => {
    const array = new DynamicArray();

    const result = array.push(10);

    expect(result).toBe(1);
    expect(array.size).toBe(1);
    expect(array.data[0]).toBe(10);
  });

  it("should add multiple elements without resizing", () => {
    const array = new DynamicArray();

    array.push(10);
    array.push(20);
    array.push(30);

    expect(array.size).toBe(3);
    expect(array.capacity).toBe(4);
    expect(array.data[2]).toBe(30);
  });

  it("should automatically resize when capacity is reached", () => {
    const array = new DynamicArray();

    array.push(10);
    array.push(20);
    array.push(30);
    array.push(40);

    expect(array.size).toBe(4);
    expect(array.capacity).toBe(4);

    array.push(50);

    expect(array.size).toBe(5);
    expect(array.capacity).toBe(8);
    expect(array.data[4]).toBe(50);
  });

  it("should preserve existing elements after resizing", () => {
    const array = new DynamicArray();

    array.push(10);
    array.push(20);
    array.push(30);
    array.push(40);
    array.push(50);

    expect(array.data[0]).toBe(10);
    expect(array.data[1]).toBe(20);
    expect(array.data[2]).toBe(30);
    expect(array.data[3]).toBe(40);
    expect(array.data[4]).toBe(50);
  });

  
  // Get tests
  it("should retrieve an element at a given index", () => {
    const array = new DynamicArray();

    array.push(10);
    array.push(20);
    array.push(30);

    expect(array.get(0)).toBe(10);
    expect(array.get(1)).toBe(20);
    expect(array.get(2)).toBe(30);
  });

  it("should reject invalid get indices", () => {
    const array = new DynamicArray();

    array.push(10);

    expect(() => array.get(-1)).toThrow();
    expect(() => array.get(1)).toThrow();
    expect(() => array.get(1.5)).toThrow();
  });

  // Set tests
  it("should update an element at a given index", () => {
    const array = new DynamicArray();

    array.push(10);
    array.push(20);

    array.set(1, 99);

    expect(array.get(1)).toBe(99);
    expect(array.size).toBe(2);
  });

  it("should reject invalid set indices", () => {
    const array = new DynamicArray();

    array.push(10);

    expect(() => array.set(-1, 50)).toThrow();
    expect(() => array.set(1, 50)).toThrow();
    expect(() => array.set(1.5, 50)).toThrow();
  });

});
