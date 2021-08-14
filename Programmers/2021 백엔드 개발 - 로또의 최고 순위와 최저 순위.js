function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]
  let zero = 0
  let score = 0
  lottos.forEach(l => {
      if (l === 0) {
          zero += 1
      } else if (win_nums.includes(l)) {
          score += 1
      }
  })
  
  return [rank[score+zero], rank[score]];
}
