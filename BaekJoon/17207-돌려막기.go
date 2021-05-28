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
var answer int = 0

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

type Person struct {
	index  int
	amount int
}

var names map[int]string = map[int]string{
	0: "Inseo",
	1: "Junsuk",
	2: "Jungwoo",
	3: "Jinwoo",
	4: "Youngki",
}

func main() {
	defer writer.Flush()

	arr1 := make([][]int, 5)
	arr2 := make([][]int, 5)
	works := []Person{}

	for i := 0; i < 2; i++ {
		for j := 0; j < 5; j++ {
			temp := readIntegerAsArray()
			if i == 0 {
				arr1[j] = temp
			} else {
				arr2[j] = temp
			}
		}
	}

	for i := 0; i < 5; i++ {
		sum := 0
		for j := 0; j < 5; j++ {
			for s := 0; s < 5; s++ {
				sum += arr1[i][s] * arr2[s][j]
			}
		}
		works = append(works, Person{
			index:  i,
			amount: sum,
		})
	}

	sort.Slice(works, func(i, j int) bool {
		if works[i].amount == works[j].amount {
			return works[i].index > works[j].index
		} else {
			return works[i].amount < works[j].amount
		}
	})

	fmt.Fprintln(writer, names[works[0].index])
}
