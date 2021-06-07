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

func main() {
	defer writer.Flush()

	params := readIntegerAsArray()

	A, B := params[0], params[1]
	strA := strconv.Itoa(A)
	strB := strconv.Itoa(B)
	answer := 0

	for i := A; i <= B; i++ {
		temp := strconv.Itoa(i)

		for l := 1; l < len(temp); l++ {
			newTemp := temp[len(temp)-l:] + temp[:len(temp)-l]
			if newTemp == temp {
				break
			}
			if newTemp != temp && newTemp <= strB && strA <= newTemp && temp < newTemp {
				answer++
			}
		}
	}
	fmt.Fprintln(writer, answer)
}
