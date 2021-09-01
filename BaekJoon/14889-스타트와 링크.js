const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let answer = Number.MAX_SAFE_INTEGER
const N = parseInt(input[0])
const ability = Array(N).fill(0).map((_, i) => input[i + 1].split(' ').map(e => parseInt(e)))
const visited = Array(N).fill(false)
visited[0] = true

const sumTeamAbility = (team) => {
  let sum = 0
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      sum += ability[team[i]][team[j]] + ability[team[j]][team[i]]
    }
  }

  return sum
}

const combinate = (team1) => {
  if (team1.length === N / 2) {
    const team2 = []
    visited.forEach((s, i) => {
      if (!s) team2.push(i)
    })

    answer = Math.min(answer, Math.abs(sumTeamAbility(team1) - sumTeamAbility(team2)))
    return
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i] && team1[team1.length - 1] < i) {
      visited[i] = true
      combinate([...team1, i])
      visited[i] = false
    }
  }
}

combinate([0])
console.log(answer)