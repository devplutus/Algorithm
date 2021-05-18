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

	str := readStringAsArray()[0]

	for _, c := range str {
		arr := strings.Split(strconv.Itoa(int(c)), "")
		sum := 0
		for _, a := range arr {
			t, _ := strconv.Atoi(a)
			sum += t
		}

		fmt.Fprintln(writer, strings.Repeat(string(c), sum))
	}
}
