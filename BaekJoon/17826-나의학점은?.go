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

	scores := readIntegerAsArray()
	myScore := readIntegerAsArray()[0]
	rank := 0
	record := ""
	for i, s := range scores {
		if myScore == s {
			rank = i + 1
		}
	}
	if 1 <= rank && rank <= 5 {
		record = "A+"
	} else if 6 <= rank && rank <= 15 {
		record = "A0"
	} else if 16 <= rank && rank <= 30 {
		record = "B+"
	} else if 31 <= rank && rank <= 35 {
		record = "B0"
	} else if 36 <= rank && rank <= 45 {
		record = "C+"
	} else if 46 <= rank && rank <= 48 {
		record = "C0"
	} else {
		record = "F"
	}
	fmt.Fprintln(writer, record)
}
