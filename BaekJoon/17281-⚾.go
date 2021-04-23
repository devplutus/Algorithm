package BaekJoon

import (
	"bufio"
	"os"
	"strconv"
	"strings"
)

var N int
var answer int = 0
var records = [][9]int{}
var check = [9]bool{
	true, false, false, false, false,
	false, false, false, false,
}

func dfs(arr []int) {
	length := len(arr)

	if length == 3 {
		arr = append(arr, 1)
		dfs(arr)
	} else if length == 9 {
		simulate(arr)
	} else {
		for i := 0; i < 9; i++ {
			if check[i] == false {
				check[i] = true
				arr = append(arr, i+1)
				dfs(arr)
				arr = arr[:len(arr)-1]
				check[i] = false
			}
		}
	}
}

func simulate(orders []int) {
	var score, inning, out, action, current int
	var runner = [3]bool{false, false, false}

	for {
		if inning >= N {
			break
		}

		action = records[inning][orders[current]-1]

		if action == 0 { // 아웃
			out += 1
		} else if action == 4 { // 홈런
			score += 1
			for i, isRunner := range runner {
				if isRunner == true {
					runner[i] = false
					score += 1
				}
			}
		} else { // 1, 2, 3 안타
			// 3루 주자
			if runner[2] == true {
				runner[2] = false
				score += 1
			}
			// 2루 주자
			if runner[1] == true {
				runner[1] = false
				if action == 1 {
					runner[2] = true
				} else {
					score += 1
				}
			}
			// 1루 주자
			if runner[0] == true {
				runner[0] = false
				if action == 3 {
					score += 1
				} else {
					runner[action] = true
				}
			}
			// 타자 출루
			runner[action-1] = true
		}

		if current+1 == 9 {
			current = 0
		} else {
			current += 1
		}

		if out == 3 {
			inning += 1
			out = 0
			for i := range runner {
				runner[i] = false
			}
		}
	}

	if answer < score {
		answer = score
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	str, _ := reader.ReadString('\n')

	N, _ = strconv.Atoi(strings.TrimSpace(str))

	for i := 0; i < N; i++ {
		str, _ = reader.ReadString('\n')
		split := strings.Split(str, " ")
		records = append(records, [9]int{})
		for j := 0; j < 9; j++ {
			records[i][j], _ = strconv.Atoi(strings.TrimSpace(split[j]))
		}
	}

	arr := []int{}
	dfs(arr)
	writer.WriteString(strconv.Itoa(answer))
}
