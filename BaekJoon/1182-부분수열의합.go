import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)
var count = 0

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

func dfs(arr []int, sum int, target int, index int, start int) {
	if sum == target && 0 < index {
		count++
	}

	for i := start; i < len(arr); i++ {
		dfs(arr, sum+arr[i], target, index+1, i+1)
	}
}

func main() {
	defer writer.Flush()

	parameters := readIntegerAsArray()
	S := parameters[1]
	arr := readIntegerAsArray()

	dfs(arr, 0, S, 0, 0)

	fmt.Fprintln(writer, count)
}
