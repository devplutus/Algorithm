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
var arr []int
var answer []int = []int{-1}

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

func dfs(sum, count, current int) {
	if count > M {
		return
	}
	if count <= M {
		if answer[0] < sum {
			answer[0] = sum
		}
	}

	if current <= N-1 {
		dfs(sum+arr[current+1], count+1, current+1)
	}

	if current <= N-2 {
		dfs((sum/2)+arr[current+2], count+1, current+2)
	}
}

func main() {
	defer writer.Flush()
	parameters := readIntegerAsArray()
	N = parameters[0]
	M = parameters[1]
	arr = append([]int{0}, readIntegerAsArray()...)

	dfs(1, 0, 0)

	fmt.Fprintln(writer, answer[0])
}
