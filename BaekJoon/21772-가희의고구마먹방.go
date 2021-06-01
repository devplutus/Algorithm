import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)
var matrix = [][]string{}
var check = [][]bool{}
var answer = 0
var R, C, T int
var directions = [][]int{
	{0, 1},  // R
	{1, 0},  // B
	{0, -1}, // L
	{-1, 0}, // T
}

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

func dfs(x, y, count, sum int) {
	if count == T {
		if answer < sum {
			answer = sum
		}
	} else {
		for _, d := range directions {
			cx := x + d[0]
			cy := y + d[1]

			if cx >= 0 && cx < R && cy >= 0 && cy < C && matrix[cx][cy] != "#" {
				if matrix[cx][cy] == "S" && check[cx][cy] == false {
					check[cx][cy] = true
					dfs(cx, cy, count+1, sum+1)
					check[cx][cy] = false
				} else {
					dfs(cx, cy, count+1, sum)
				}
			}
		}
	}
}

func main() {
	defer writer.Flush()

	params := readIntegerAsArray()
	R = params[0]
	C = params[1]
	T = params[2]

	dogPos := [2]int{}
	check = make([][]bool, R)

	for i := 0; i < R; i++ {
		str, _ := reader.ReadString('\n')
		arr := strings.Split(strings.TrimSpace(str), "")
		for j, v := range arr {
			if v == "G" {
				dogPos[0] = i
				dogPos[1] = j
			}
		}
		matrix = append(matrix, arr)
		check[i] = make([]bool, len(arr))
	}

	dfs(dogPos[0], dogPos[1], 0, 0)

	fmt.Fprintln(writer, answer)

}
