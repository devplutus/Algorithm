function solution(word) {
  const words = ['A', 'E', 'I', 'O', 'U']
  const dict = []
  
  const combination = (current) => {
      for (let i = 0; i < 5; i++) {
          if (current.length <= 4) {
              dict.push(current + words[i])
              combination(current + words[i])
          }
      }
  }

  combination('')
  
  return dict.indexOf(word) + 1
}