import (
	"bufio"
	"fmt"
	"math"
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

func binarySearch(arr []int, find int) int {
	s := 0
	e := len(arr) - 1
	var m int
	for s <= e {
		m = int(math.Floor(float64(s+e) / 2))

		if find < arr[m] {
			e = m - 1
		} else if find > arr[m] {
			s = m + 1
		} else {
			return m
		}
	}
	return -1
}

func main() {
	defer writer.Flush()

	strconv.Atoi(readStringAsArray()[0])
	arr := readIntegerAsArray()
	strconv.Atoi(readStringAsArray()[0])
	check := readIntegerAsArray()

	sort.Ints(arr)

	answer := []string{}

	for _, c := range check {
		a := binarySearch(arr, c)
		if a != -1 {
			answer = append(answer, "1")
		} else {
			answer = append(answer, "0")
		}
	}

	fmt.Fprintf(writer, "%s", strings.Join(answer, " "))
}
