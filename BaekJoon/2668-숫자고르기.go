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

func indexOf(arr []int, f int) int {
	for i, v := range arr {
		if v == f {
			return i
		}
	}
	return -1
}

func main() {
	defer writer.Flush()
	arr := []int{}
	N := 0
	N, _ = strconv.Atoi(readStringAsArray()[0])
	visited := make([]bool, N)

	for i := 0; i < N; i++ {
		S, _ := strconv.Atoi(readStringAsArray()[0])
		arr = append(arr, S)
	}

	for i := 0; i < N; i++ {
		temp := make([]bool, N)
		current := i
		next := arr[i] - 1
		temp[current] = true
		answer := []int{}

		if visited[i] == false {
			for {
				answer = append(answer, next)
				if temp[next] == true {
					if next == current {
						for _, v := range answer {
							visited[v] = true
						}
					}
					break
				} else {
					temp[next] = true
					next = arr[next] - 1
				}
			}
		}
	}

	count := 0

	for _, v := range visited {
		if v == true {
			count++
		}
	}

	fmt.Fprintln(writer, count)
	for i, v := range visited {
		if v == true {
			fmt.Fprintln(writer, i+1)
		}
	}
}
