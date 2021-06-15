import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)
var N, M int

func readStringAsArray() []string {
	s, _ := reader.ReadString('\n')
	temp := strings.Split(strings.TrimSpace(s), "")
	return temp
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

func bfs(arr [][]string, x, y int, target string) int {
	count := 0
	queue := [][]int{{x, y}}
	directions := [][]int{
		{0, 1},
		{0, -1},
		{1, 0},
		{-1, 0},
	}

	for len(queue) > 0 {
		c := queue[0]
		if len(queue) > 0 {
			queue = queue[1:]
		}
		if arr[c[0]][c[1]] == target {
			arr[c[0]][c[1]] = "-"
			count++
		}
		for _, d := range directions {
			cx := c[0] + d[0]
			cy := c[1] + d[1]
			if cx >= 0 && cx < N && cy >= 0 && cy < M && arr[cx][cy] == target {
				queue = append(queue, []int{cx, cy})
			}
		}
	}

	return count * count
}

func main() {
	defer writer.Flush()

	params := readIntegerAsArray()
	N, M = params[1], params[0]
	arr := make([][]string, N)
	powerB := 0
	powerW := 0

	for i := range make([]bool, N) {
		arr[i] = append(arr[i], readStringAsArray()...)
	}

	for i := 0; i < N; i++ {
		for j := 0; j < M; j++ {
			if arr[i][j] == "W" {
				powerW += bfs(arr, i, j, "W")
			} else if arr[i][j] == "B" {
				powerB += bfs(arr, i, j, "B")
			}
		}
	}
	fmt.Fprintln(writer, powerW, powerB)
}
