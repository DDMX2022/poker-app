export class CircularArrayList {
  constructor(initialCapacity = 10) {
    this.array = new Array(initialCapacity).fill(null);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  add(item) {
    if (this.isFull()) {
      this.resize();
    }

    this.array[this.tail] = item;
    this.tail = (this.tail + 1) % this.array.length;
    this.count++;
  }

  removeAt(index) {
    let adjustedIndex = (this.head + index) % this.array.length;
    const item = this.array[adjustedIndex];
    this.shiftLeft(adjustedIndex);
    this.count--;

    if (this.count === 0 || adjustedIndex === this.count) {
      this.tail = (this.tail - 1 + this.array.length) % this.array.length;
    }

    return item;
  }

  shiftLeft(startIndex) {
    for (let i = startIndex; i !== this.tail; i = (i + 1) % this.array.length) {
      let nextIndex = (i + 1) % this.array.length;
      this.array[i] = this.array[nextIndex];
    }

    this.array[this.tail] = null;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.array.length;
  }

  resize() {
    const newArray = new Array(this.array.length * 2).fill(null);
    for (let i = 0; i < this.count; i++) {
      newArray[i] = this.array[(this.head + i) % this.array.length];
    }
    this.array = newArray;
    this.head = 0;
    this.tail = this.count;
  }

  toArray() {
    let result = new Array(this.count);
    for (let i = 0; i < this.count; i++) {
      result[i] = this.array[(this.head + i) % this.array.length];
    }
    return result;
  }

  reset() {
    this.array.fill(null);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }
}
