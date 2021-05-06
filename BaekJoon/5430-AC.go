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

func reverseArr(arr []string) []string {
	temp := []string{}
	for i := len(arr) - 1; i >= 0; i-- {
		temp = append(temp, arr[i])
	}
	return temp
}

func main() {
	defer writer.Flush()

	N := readIntegerAsArray()[0]

	for i := 0; i < N; i++ {
		command := strings.Split(readStringAsArray()[0], "")
		_ = readIntegerAsArray()
		str := readStringAsArray()[0]
		str = str[1 : len(str)-1]
		arr := []string{}
		if len(str) == 0 {
			arr = []string{}
		} else {
			arr = strings.Split(strings.TrimSpace(str), ",")

		}
		reverse := false
		err := false
		s := 0
		e := len(arr) - 1
		for _, c := range command {
			if c == "R" {
				reverse = !reverse
			} else if c == "D" {
				if s > e {
					err = true
					break
				}
				if reverse == false {
					s += 1
				} else {
					e -= 1
				}
			}
		}

		if err == true {
			fmt.Fprintln(writer, "error")
		} else if reverse == false {
			fmt.Fprintln(writer, "["+strings.Join(arr[s:e+1], ",")+"]")
		} else {
			arr = reverseArr(arr[s : e+1])
			fmt.Fprintln(writer, "["+strings.Join(arr, ",")+"]")
		}
	}

}
