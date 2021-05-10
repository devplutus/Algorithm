import (
	"bufio"
	"fmt"
	"os"
	"sort"
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
	N := readIntegerAsArray()[0]
	arr := readIntegerAsArray()
	sort.Ints(arr)
	if N%2 == 1 {
		fmt.Fprintln(writer, arr[N/2]*arr[N/2])
	} else {
		fmt.Fprintln(writer, arr[0]*arr[len(arr)-1])
	}
}
