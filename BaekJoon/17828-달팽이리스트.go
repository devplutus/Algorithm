import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Node struct {
	next  int
	value int
}

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

	parameters := readIntegerAsArray()
	N := parameters[0]
	M := parameters[1]
	V := parameters[2]

	list := readIntegerAsArray()
	linkList := make([]Node, N)
	for i := 0; i < N-1; i++ {
		linkList[i] = Node{
			value: list[i],
			next:  i + 1,
		}
	}

	linkList[len(linkList)-1] = Node{
		value: list[len(list)-1],
		next:  V - 1,
	}

	length := N - linkList[N-1].next
	rest := linkList[N-1].next
	list = []int{}
	for _, v := range linkList[rest:] {
		list = append(list, v.value)
	}

	for i := 0; i < M; i++ {
		K := readIntegerAsArray()[0]

		if K < N {
			fmt.Fprintln(writer, linkList[K].value)
		} else {
			if linkList[N-1].next == N-1 {
				fmt.Fprintln(writer, linkList[N-1].value)
			} else {
				fmt.Fprintln(writer, list[(K-rest)%length])
			}
		}
	}
}
