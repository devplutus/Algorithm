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

	str, _ := reader.ReadString('\n')
	str = strings.TrimSpace(str)

	prevStack := strings.Split(str, "")
	nextStack := []string{}

	N := readIntegerAsArray()[0]

	for i := 0; i < N; i++ {
		cArr := readStringAsArray()
		command := cArr[0]
		if command == "L" {
			if len(prevStack) != 0 {
				nextStack = append(nextStack, prevStack[len(prevStack)-1])
				prevStack = prevStack[:len(prevStack)-1]
			}
		} else if command == "D" {
			if len(nextStack) != 0 {
				prevStack = append(prevStack, nextStack[len(nextStack)-1])
				nextStack = nextStack[:len(nextStack)-1]
			}
		} else if command == "B" {
			if len(prevStack) != 0 {
				prevStack = prevStack[:len(prevStack)-1]
			}
		} else {
			value := cArr[1]
			prevStack = append(prevStack, value)
		}
	}
	temp := make([]string, len(nextStack))
	for i := len(nextStack) - 1; i >= 0; i-- {
		temp[len(nextStack)-1-i] = nextStack[i]
	}
	answer := strings.Join(prevStack, "")
	answer += strings.Join(temp, "")
	answer = strings.ReplaceAll(answer, "\n", "")
	fmt.Fprintln(writer, answer)
}
