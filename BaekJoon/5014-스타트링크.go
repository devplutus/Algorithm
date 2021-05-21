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

func main() {
	defer writer.Flush()

	parameters := readIntegerAsArray()

	F := parameters[0]

	S := parameters[1]
	G := parameters[2]

	U := parameters[3]
	D := parameters[4]

	answer := -1

	floors := make([]bool, F+1)
	floors[S] = true
	queue := [][]int{
		{S, 0},
	}

	for len(queue) > 0 {
		temp := queue[0]
		floors[temp[0]] = true
		if len(queue) > 0 {
			queue = queue[1:]
		}

		if temp[0] == G {
			if answer == -1 || temp[1] < answer {
				answer = temp[1]
			}
		} else {
			if temp[0]-D > 0 && floors[temp[0]-D] == false {
				floors[temp[0]-D] = true
				queue = append(queue, []int{temp[0] - D, temp[1] + 1})
			}

			if temp[0]+U <= F && floors[temp[0]+U] == false {
				floors[temp[0]+U] = true
				queue = append(queue, []int{temp[0] + U, temp[1] + 1})
			}
		}
	}
	if answer == -1 {
		fmt.Fprintln(writer, "use the stairs")

	} else {
		fmt.Fprintln(writer, answer)
	}
}
