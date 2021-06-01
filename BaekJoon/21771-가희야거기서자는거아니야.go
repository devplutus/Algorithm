import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)

var (
	x1 = 0
	y1 = 1
	x2 = 2
	y2 = 3
)

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
	R := params[0]
	params = readIntegerAsArray()
	pCount := 0
	pillowArea := params[2] * params[3]

	for range make([]bool, R) {
		str, _ := reader.ReadString('\n')
		for _, v := range strings.Split(strings.TrimSpace(str), "") {
			if v == "P" {
				pCount++
			}
		}
	}

	if pCount < pillowArea {
		fmt.Fprintln(writer, 1)
	} else {
		fmt.Fprintln(writer, 0)
	}
}
