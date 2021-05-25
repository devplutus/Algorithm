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

func cal(N int, bit string) int {
	zero, _ := strconv.Atoi(bit)
	if zero == 0 {
		return 1
	}

	temp := bit[strings.Index(bit, "1"):]
	zero, _ = strconv.Atoi(temp[1:])
	if zero == 0 {
		return N + len(temp) - 1
	} else {
		return N + len(temp)
	}
}

func main() {
	defer writer.Flush()

	N := readIntegerAsArray()[0]

	for i := 0; i < N; i++ {
		parameters := readStringAsArray()
		A, _ := strconv.Atoi(parameters[0])
		B := parameters[1]
		max := strings.ReplaceAll(B, "?", "1")
		min := strings.ReplaceAll(B, "?", "0")
		fmt.Fprintln(writer, cal(A, max), cal(A, min))
	}
}
