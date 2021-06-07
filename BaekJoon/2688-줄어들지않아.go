import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
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

	params := readIntegerAsArray()

	N := params[0]
	arr := make([][]int, 65)
	answer := make([]int, 65)

	for i := range arr {
		arr[i] = make([]int, 10)
	}
	for i := 0; i < 10; i++ {
		arr[1][i] = 1
		answer[1] += 1
	}

	for i := 2; i < 65; i++ {
		for j := 0; j < 10; j++ {
			for j2 := j; j2 < 10; j2++ {
				arr[i][j] += arr[i-1][j2]
			}
			answer[i] += arr[i][j]
		}
	}

	for range make([]bool, N) {
		T := readIntegerAsArray()[0]
		fmt.Fprintln(writer, answer[T])
	}
}
