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
	N, M := params[0], params[1]
	arr := make([][]int, N)

	for i := 0; i < N; i++ {
		arr[i] = readIntegerAsArray()
	}

	for i := 0; i < N; i++ {
		for j := i + 1; j < N; j++ {
			check := [2]bool{}
			for k := 0; k < M; k++ {
				if arr[i][k] == 1 && arr[j][k] == 0 {
					check[0] = true
				}
				if arr[i][k] == 0 && arr[j][k] == 1 {
					check[1] = true
				}
				if check[0] && check[1] {
					fmt.Fprintln(writer, "NO")
					return
				}
			}
		}
	}
	fmt.Fprintln(writer, "YES")
	return
}
