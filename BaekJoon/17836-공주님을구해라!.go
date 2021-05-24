import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

const (
	X      = 0
	Y      = 1
	Count  = 2
	IsWord = 3
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)

func readIntegerAsArray() []int {
	s, _ := reader.ReadString('\n')
	temp := strings.Split(strings.TrimSpace(s), " ")
	cTemp := []int{}
	for _, v := range temp {
		c, _ := strconv.Atoi(v)
		cTemp = append(cTemp, c)
	}
	return cTemp
}

func main() {
	defer writer.Flush()

	direction := [][]int{
		{0, 1},  // R
		{1, 0},  // B
		{0, -1}, // L
		{-1, 0}, // T
	}

	parameters := readIntegerAsArray()
	N := parameters[0]
	M := parameters[1]
	T := parameters[2]
	answer := 0

	checkWithSword := make([][]bool, N)
	check := make([][]bool, N)
	matrix := make([][]int, N)
	temp := make([][]int, N)
	queue := [][]int{
		{0, 0, 0, 0}, // x, y, count, isSword
	}

	for i := 0; i < N; i++ {
		checkWithSword[i] = make([]bool, M)
		check[i] = make([]bool, M)
		matrix[i] = readIntegerAsArray()
		temp[i] = append(temp[i], matrix[i]...)
	}

	for len(queue) > 0 {
		current := queue[0]

		temp[current[X]][current[Y]] = 3

		if len(queue) > 0 {
			queue = queue[1:]
		}

		if current[X] == N-1 && current[Y] == M-1 {
			answer = current[Count]
			break
		}

		if current[Count] < T {
			for i := 0; i < 4; i++ {
				cx := current[X] + direction[i][0]
				cy := current[Y] + direction[i][1]

				if cx >= 0 && cy >= 0 && cx < N && cy < M {
					if current[IsWord] == 1 && checkWithSword[cx][cy] == false {
						checkWithSword[cx][cy] = true
						queue = append(queue, []int{cx, cy, current[Count] + 1, 1})
					} else if matrix[cx][cy] != 1 && check[cx][cy] == false {
						check[cx][cy] = true
						if matrix[cx][cy] == 2 {
							queue = append(queue, []int{cx, cy, current[Count] + 1, 1})
						} else {
							queue = append(queue, []int{cx, cy, current[Count] + 1, 0})
						}
					}
				}
			}
		}
	}

	if answer == 0 {
		fmt.Fprintln(writer, "Fail")
	} else {
		fmt.Fprintln(writer, answer)
	}
}
