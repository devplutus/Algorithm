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

	T := readIntegerAsArray()[0]

	for i := 0; i < T; i++ {
		params := readIntegerAsArray()
		a, b := params[0], params[1]
		c := a
		if b == 1 {
			c = c % 10
		} else {
			for j := 0; j < b-1; j++ {
				c = (c * a) % 10
			}
		}
		if c == 0 {
			c = 10
		}
		fmt.Fprintln(writer, c)
	}
}
