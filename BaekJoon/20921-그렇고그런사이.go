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
	parameters := readIntegerAsArray()
	N, K := parameters[0], parameters[1]

	arr := make([]string, N)

	for i := range arr {
		arr[i] = strconv.Itoa(i + 1)
	}
	count := 0

	for i := 0; i < N; i++ {
		end := false
		for j := N - 1; j > i; j-- {
			if count == K {
				end = true
				break
			}
			temp := arr[j-1]
			arr[j-1] = arr[j]
			arr[j] = temp
			count++
		}
		if end {
			break
		}
	}

	fmt.Fprintln(writer, strings.Join(arr, " "))

}
