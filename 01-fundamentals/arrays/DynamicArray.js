
export class DynamicArray {
  constructor(initialCapacity = 4) {
    if (!Number.isInteger(initialCapacity) || initialCapacity < 1) {
      throw new Error("Initial capacity must be a positive integer.");
    }

    this.capacity = initialCapacity;
    this.size = 0;
    this.data = new Array(this.capacity);
  }

  resize(newCapacity) {
    const newData = new Array(newCapacity);

    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
    this.capacity = newCapacity;
  }

  push(value) {
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2);
    }

    this.data[this.size] = value;
    this.size++;

    return this.size;
  }

  
  get(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }

    return this.data[index];
  }

  set(index, value) {
    if (!Number.isInteger(index) || index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }

    this.data[index] = value;
  }

}
