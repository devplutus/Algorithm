class Node {
  constructor(prev, next, value) {
      this.prev = prev
      this.next = next
      this.value = value
  }
}

function solution(n, k, cmd) {
  
  const linkedList = []
  const backup = [] // Stack
  
  for (let i = 0; i < n; i++) {
      if (i == 0) {
          linkedList.push(new Node(null, i+1, i))
      } else if (i === n - 1) {
          linkedList.push(new Node(i-1, null, i))
      } else {
          linkedList.push(new Node(i-1, i+1, i))
      }
  }
  
  let cursor = linkedList[k]
  
  cmd.forEach(c => {
      if (c.length === 1) {
           if (c === 'Z') {
               // 취소
               const current = backup.pop()
               if (current.prev !== null) {
                   linkedList[current.prev].next = current.value
               }
               if (current.next !== null) {
                   linkedList[current.next].prev = current.value
               }
               
           } else {
               // 삭제
               if (cursor.prev !== null) {
                   linkedList[cursor.prev].next = cursor.next
               }
               if (cursor.next !== null) {
                   linkedList[cursor.next].prev = cursor.prev
               }
               
               backup.push(cursor)
               
               if (cursor.next === null) {
                   cursor = linkedList[cursor.prev]
               } else {
                   cursor = linkedList[cursor.next]
               }
           }
      } else {
          let [d, v] = c.split(' ')
          v = parseInt(v)
          if (d == 'U') {
              for (let i = 0; i < v; i++) {
                  cursor = linkedList[cursor.prev]
              }
          } else {
              for (let i = 0; i < v; i++) {
                  cursor = linkedList[cursor.next]
              }
          }
      }
  })
  
  const answer = Array(n).fill('O')
  backup.forEach(b => answer[b.value] = 'X')
  
  return answer.join('');
}