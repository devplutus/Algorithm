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
	N, M := parameters[0], parameters[1]
	words := map[string]int{}

	for i := 0; i < N; i++ {
		word := readStringAsArray()[0]
		if len(word) >= M {
			if _, exist := words[word]; exist {
				words[word] += 1
			} else {
				words[word] = 1
			}
		}
	}

	type Word struct {
		word  string
		count int
	}

	arr := []Word{}

	for k, v := range words {
		arr = append(arr, Word{
			word:  k,
			count: v,
		})
	}

	sort.Slice(arr, func(i, j int) bool {
		if arr[i].count == arr[j].count {
			if len(arr[i].word) == len(arr[j].word) {
				return arr[i].word < arr[j].word
			} else {
				return len(arr[i].word) > len(arr[j].word)
			}
		} else {
			return arr[i].count > arr[j].count
		}
	})

	for _, v := range arr {
		fmt.Fprintln(writer, v.word)
	}

}
