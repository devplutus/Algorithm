import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Node struct {
	next  int
	value int
}

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

	charMap := map[int]string{}

	parameters := readIntegerAsArray()
	N := parameters[0]
	X := parameters[1]
	sum := 0
	answer := []string{}

	if X < 1*N || X > 26*N {
		fmt.Fprintln(writer, "!")
	} else {
		for i := 65; i <= 90; i++ {
			charMap[i-64] = string(i)
		}

		for i := N - 1; i >= 0; i-- {
			if X == sum {
				break
			}
			if X-sum-i <= 26 {
				answer = append(answer, charMap[X-sum-i])
				sum += X - sum - i
			} else {
				answer = append(answer, "Z")
				sum += 26
			}
			if X-sum == i {
				answer = append(answer, strings.Repeat("A", i))
				break
			}
		}
		for i := len(answer) - 1; i >= 0; i-- {
			fmt.Fprint(writer, answer[i])
		}
	}
}
