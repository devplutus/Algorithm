import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)
var N = 11
var answer = 0

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

func dfs(lineup [][]int, check []bool, position, sum int) {
	if position == N {
		if answer < sum {
			answer = sum
		}
		return
	}

	for i := 0; i < N; i++ {
		if lineup[i][position] != 0 && check[i] == false {
			check[i] = true
			dfs(lineup, check, position+1, sum+lineup[i][position])
			check[i] = false
		}
	}
}

func main() {
	defer writer.Flush()

	T := readIntegerAsArray()[0]

	for i := 0; i < T; i++ {
		lineup := make([][]int, N)
		check := make([]bool, N)
		answer = 0

		for index := range make([]bool, N) {
			lineup[index] = readIntegerAsArray()
		}

		dfs(lineup, check, 0, 0)

		fmt.Fprintln(writer, answer)
	}
}
