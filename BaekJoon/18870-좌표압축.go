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

func bSearch(arr []int, target int) int {
	s := 0
	e := len(arr) - 1
	for s <= e {
		mid := (s + e) / 2
		if arr[mid] < target {
			s = mid + 1
		} else if arr[mid] > target {
			e = mid - 1
		} else {
			return mid
		}
	}

	return s
}

func main() {
	defer writer.Flush()

	s, _ := reader.ReadString('\n')
	s, _ = reader.ReadString('\n')

	temp := strings.Split(strings.TrimSpace(s), " ")

	arr := []int{}
	set := map[int]bool{}
	sortArr := []int{}

	for _, v := range temp {
		c, _ := strconv.Atoi(v)
		arr = append(arr, c)
		set[c] = true
	}

	for k := range set {
		sortArr = append(sortArr, k)
	}

	sort.Ints(sortArr)

	answer := []string{}
	for _, v := range arr {
		answer = append(answer, strconv.Itoa(bSearch(sortArr, v)))
	}
	fmt.Fprintln(writer, strings.Join(answer, " "))
}
