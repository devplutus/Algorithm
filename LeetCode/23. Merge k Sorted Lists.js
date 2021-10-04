/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

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

  isEmpty = () => this.heap.length ? false : true

  insert(node) {
      this.heap.push(node)
      let index = this.heap.length - 1
      
      while(this.getParentIndex(index) >= 0) {
          const parentIndex = this.getParentIndex(index)    
          
          if (this.heap[index].val < this.heap[parentIndex].val) {
              this.swap(index, parentIndex)
              index = parentIndex
          } else {
              break
          }
      }
  }

  pop() {
      const value = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.heap.pop()
      let index = 0
      
      if (this.heap.length > 1) {
          while(this.getChildLeft(index) < this.heap.length) {
              const childLeft = this.getChildLeft(index)    
              const childRight = this.getChildRight(index)

              const nextIndex = childRight < this.heap.length && this.heap[childRight].val < this.heap[childLeft].val ? childRight : childLeft

              if (this.heap[nextIndex].val < this.heap[index].val) {
                  this.swap(nextIndex, index)
                  index = nextIndex
              } else {
                  break
              }
          }
      }
      
      return value
  }
}

var mergeKLists = function(lists) {
  const heap = new Heap()
  lists.forEach(l => l && heap.insert(l))
  
  if (heap.isEmpty()) return null
  
  const result = heap.pop()
  if (result.next !== null) heap.insert(result.next)
  let next = null
  
  while (!heap.isEmpty()) {
      let current = heap.pop()
      
      if (next === null) {
          next = new ListNode(current.val)
          result.next = next
      } else {
          next.next = new ListNode(current.val)
          next = next.next
      }
      
      if (current.next !== null) {
          heap.insert(current.next)
      }
  }
  
  return result
};