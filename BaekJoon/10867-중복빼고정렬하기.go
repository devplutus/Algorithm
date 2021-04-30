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

func indexOf(arr []int, find int) int {
	for i, v := range arr {
		if v == find {
			return i
		}
	}
	return -1
}

func main() {
	defer writer.Flush()

	N := readIntegerAsArray()[0]

	arr := readIntegerAsArray()
	answer := []int{}
	sort.Ints(arr)

	for i := 0; i < N; i++ {
		if indexOf(answer, arr[i]) == -1 {
			answer = append(answer, arr[i])
		}
	}

	temp := []string{}

	for _, v := range answer {
		temp = append(temp, strconv.Itoa(v))
	}

	fmt.Fprintln(writer, strings.Join(temp, " "))
}
