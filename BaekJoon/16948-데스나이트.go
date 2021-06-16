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
	temp := strings.Split(strings.TrimSpace(s), " ")
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

func main() {
	defer writer.Flush()

	directions := [][]int{
		{-2, -1},
		{-2, 1},
		{0, -2},
		{0, 2},
		{2, -1},
		{2, 1},
	}

	N := readIntegerAsArray()[0]
	params := readIntegerAsArray()
	arr := make([][]int, N)
	target := []int{params[2], params[3]}
	answer := -1

	for i := range make([]bool, N) {
		arr[i] = append(arr[i], make([]int, N)...)
	}

	queue := [][]int{{params[0], params[1], 0}}

	for len(queue) > 0 {
		c := queue[0]
		if len(queue) > 0 {
			queue = queue[1:]
		}

		if c[0] == target[0] && c[1] == target[1] {
			answer = c[2]
			break
		}

		for _, d := range directions {
			cx := c[0] + d[0]
			cy := c[1] + d[1]
			if cx >= 0 && cx < N && cy >= 0 && cy < N && arr[cx][cy] == 0 {
				arr[cx][cy] = 1
				queue = append(queue, []int{cx, cy, c[2] + 1})
			}
		}
	}

	fmt.Fprintln(writer, answer)
}
