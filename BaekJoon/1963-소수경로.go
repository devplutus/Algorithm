import (
	"bufio"
	"fmt"
	"math"
	"os"
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

func main() {
	defer writer.Flush()

	MAX := 10000

	check := make([]bool, MAX)

	for i := 2; i < MAX/2; i++ {
		for j := 2; i*j < MAX; j++ {
			check[i*j] = true
		}
	}

	T := readIntegerAsArray()[0]

	for range make([]bool, T) {
		params := readIntegerAsArray()
		A, B := params[0], params[1]

		queue := [][]int{{A, 0}}
		visit := make([]bool, MAX)

		for len(queue) > 0 {
			current := queue[0]
			if len(queue) > 0 {
				queue = queue[1:]
			}

			if current[0] == B {
				fmt.Fprintln(writer, current[1])
				break
			}

			for i := 0; i < 4; i++ {
				next := current[0] / int(math.Pow(10.0, float64(i))) % 10
				temp := current[0] - int(math.Pow(10.0, float64(i)))*next
				for j := 0; j <= 9; j++ {
					cal := temp + j*int(math.Pow(10.0, float64(i)))
					if cal >= 1000 && visit[cal] == false && check[cal] == false {
						visit[cal] = true
						queue = append(queue, []int{temp + j*int(math.Pow(10.0, float64(i))), current[1] + 1})
					}
				}
			}
		}
	}
}
