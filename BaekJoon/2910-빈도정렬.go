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

type Freq struct {
	count int
	index int
}

func main() {
	defer writer.Flush()

	readIntegerAsArray()
	frequency := map[int]*Freq{}
	arr := readIntegerAsArray()
	for i, v := range arr {
		f, e := frequency[v]
		if e == false {
			frequency[v] = &Freq{
				count: 1,
				index: i,
			}
		} else {
			f.count += 1
		}
	}

	sort.Slice(arr, func(i, j int) bool {
		if frequency[arr[i]].count == frequency[arr[j]].count {
			return frequency[arr[i]].index < frequency[arr[j]].index
		} else {
			return frequency[arr[i]].count > frequency[arr[j]].count
		}
	})

	check := map[int]bool{}
	answer := ""
	for k := range frequency {
		check[k] = false
	}

	for _, v := range arr {
		if check[v] == false {
			answer += strings.Repeat(strconv.Itoa(v)+" ", frequency[v].count)
			check[v] = true
		}
	}

	fmt.Fprintln(writer, answer)
}
