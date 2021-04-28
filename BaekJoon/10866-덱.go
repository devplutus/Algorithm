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

	N, _ := strconv.Atoi(readStringAsArray()[0])
	arr := []int{}

	for i := 0; i < N; i++ {
		s := readStringAsArray()
		command := s[0]

		if command == "push_front" || command == "push_back" {
			num, _ := strconv.Atoi(s[1])
			if command == "push_front" {
				arr = append([]int{num}, arr...)
			} else {
				arr = append(arr, num)
			}
		} else if command == "pop_front" || command == "pop_back" {
			if len(arr) == 0 {
				fmt.Fprintln(writer, -1)
			} else {
				if command == "pop_front" {
					fmt.Fprintln(writer, arr[0])
					arr = arr[1:]
				} else {
					fmt.Fprintln(writer, arr[len(arr)-1])
					arr = arr[:len(arr)-1]
				}
			}
		} else if command == "size" {
			fmt.Fprintln(writer, len(arr))
		} else if command == "empty" {
			if len(arr) == 0 {
				fmt.Fprintln(writer, 1)
			} else {
				fmt.Fprintln(writer, 0)
			}
		} else {
			if len(arr) == 0 {
				fmt.Fprintln(writer, -1)
			} else {
				if command == "front" {
					fmt.Fprintln(writer, arr[0])
				} else {
					fmt.Fprintln(writer, arr[len(arr)-1])
				}
			}
		}
	}
}
