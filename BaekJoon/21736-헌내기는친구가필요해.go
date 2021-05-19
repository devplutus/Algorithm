import (
	"bufio"
	"fmt"
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

func readStringAsArray() []string {
	s, _ := reader.ReadString('\n')
	temp := strings.Split(strings.TrimSpace(s), "")
	return temp
}

func main() {
	defer writer.Flush()

	parameters := readIntegerAsArray()
	N := parameters[0]
	M := parameters[1]
	answer := 0
	arr := [][]string{}
	queue := [][]int{}

	for i := 0; i < N; i++ {
		temp := readStringAsArray()
		arr = append(arr, temp)
		for j, t := range temp {
			if t == "I" {
				queue = append(queue, []int{i, j})
			}
		}
	}

	direction := [][]int{
		{-1, 0}, // L
		{1, 0},  // R
		{0, -1}, // T
		{0, 1},  // B
	}

	for len(queue) > 0 {
		x := queue[0][0]
		y := queue[0][1]
		if len(queue) > 0 {
			queue = queue[1:]
		}

		arr[x][y] = "X"

		for _, d := range direction {
			tx := d[0] + x
			ty := d[1] + y
			if tx != -1 && ty != -1 && tx != N && ty != M && arr[tx][ty] != "X" {
				if arr[tx][ty] == "P" {
					answer += 1
					arr[tx][ty] = "O"
				} else {
					arr[tx][ty] = "X"
				}
				queue = append(queue, []int{tx, ty})
			}
		}
	}

	if answer == 0 {
		fmt.Fprintln(writer, "TT")
	} else {
		fmt.Fprintln(writer, answer)
	}
}
