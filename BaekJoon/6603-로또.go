import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)

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

func dfs(arr []int, result [6]int, index int, start int) {
	if index == 6 {
		str := strings.Trim(fmt.Sprint(result), "[]")
		fmt.Fprintln(writer, str)
		return
	}

	for i := start; i < len(arr); i++ {
		result[index] = arr[i]
		dfs(arr, result, index+1, i+1)
	}
}

func main() {
	defer writer.Flush()

	for {
		parameters := readIntegerAsArray()
		N := parameters[0]

		if N == 0 {
			break
		}

		arr := parameters[1:]
		sort.Ints(arr)
		dfs(arr, [6]int{}, 0, 0)
		fmt.Fprintln(writer)
	}
}
