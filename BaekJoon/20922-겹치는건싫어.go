import (
	"bufio"
	"fmt"
	"os"
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

	var count, answer, s, e int
	parameters := readIntegerAsArray()
	N, K := parameters[0], parameters[1]

	arr := readIntegerAsArray()
	check := make([]int, 100001)

	for {
		if answer < count {
			answer = count
		}
		if e == N {
			break
		}
		if check[arr[e]] < K {
			check[arr[e]]++
			count++
			e++
		} else {
			check[arr[s]]--
			count--
			s++
		}
	}
	fmt.Fprintln(writer, answer)
}
