/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

 class Heap {
  constructor() {
      this.heap = []
  }
  
  getParentIndex = (index) => Math.floor((index - 1) / 2)
  getChildLeft = (index) => index * 2 + 1
  getChildRight = (index) => index * 2 + 2

  swap(a, b) {
      const temp = this.heap[a]
      this.heap[a] = this.heap[b]
      this.heap[b] = temp
  }

  insert(node) {
      this.heap.push(node)
      let index = this.heap.length - 1
      
      while(this.getParentIndex(index) >= 0) {
          const parentIndex = this.getParentIndex(index)
          
          if (this.heap[parentIndex][1] === this.heap[index][1]) {
              if (this.heap[parentIndex][0] > this.heap[index][0]) {
                  this.swap(index, parentIndex)
                  index = parentIndex
              } else {
                  break
              }
          } else {
              if (this.heap[parentIndex][1] > this.heap[index][1]) {
                  this.swap(index, parentIndex)
                  index = parentIndex
              } else {
                  break
              }
          }
      }
  }

  pop() {
      const value = this.heap[0]
      this.heap[0] = this.heap.pop()
      let index = 0
      
      while(this.getChildLeft(index) < this.heap.length) {
          
          const childLeft = this.getChildLeft(index)
          const childRight = this.getChildRight(index)
          let nextIndex = childLeft
          
          if (childRight < this.heap.length) {
              if (this.heap[childLeft][1] === this.heap[childRight][1]) {
                  nextIndex = this.heap[childLeft][0] < this.heap[childRight][0] ? childLeft : childRight
              } else {
                  nextIndex = this.heap[childLeft][1] < this.heap[childRight][1] ? childLeft : childRight
              }
          }
          
          if (this.heap[nextIndex][1] === this.heap[index][1]) {
              if (this.heap[nextIndex][0] < this.heap[index][0]) {
                  this.swap(index, nextIndex)
                  index = nextIndex
              } else {
                  break
              }
          } else {
              if (this.heap[nextIndex][1] < this.heap[index][1]) {
                  this.swap(index, nextIndex)
                  index = nextIndex
              } else {
                  break
              }
          }
      }
      
      return value
  }
}

const binarySearch = (line) => {
  let s = 0
  let e = line.length - 1
  
  while(s <= e) {
      const m = parseInt((s + e) / 2)
      
      if (line[m] === 1) {
          s = m + 1
      } else {
          e = m - 1
      }
  }
  
  return s
}

var kWeakestRows = function(mat, k) {
  const heap = new Heap()
  mat.forEach((m, i) => {
      heap.insert([i, binarySearch(m)])
  })
  
  return Array(k).fill(0).map(() => heap.pop()[0])
};