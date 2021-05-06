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

	parameters := readIntegerAsArray()
	N, K := parameters[0], parameters[1]

	answer := []int{}
	check := make([]bool, N)

	rest := N
	count := 0
	index := 0

	for rest > 0 {
		if check[index] == false {
			count++
		}

		if count == K {
			count = 0
			rest--
			check[index] = true
			answer = append(answer, index+1)
		}

		index++
		if index == N {
			index = 0
		}
	}

	convert := []string{}
	for _, v := range answer {
		convert = append(convert, strconv.Itoa(v))
	}
	fmt.Fprintln(writer, "<"+strings.Join(convert, ", ")+">")
}
