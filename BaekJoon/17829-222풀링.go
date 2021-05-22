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
	origin := [][]int{}

	for i := 0; i < N; i++ {
		temp := readIntegerAsArray()
		origin = append(origin, temp)
	}

	for N > 1 {
		temp := [][]int{}
		for i := 0; i < N; i += 2 {
			row := []int{}
			for j := 0; j < N; j += 2 {
				max := []int{
					origin[i][j],
					origin[i+1][j],
					origin[i][j+1],
					origin[i+1][j+1],
				}

				sort.Slice(max, func(i, j int) bool {
					return max[i] > max[j]
				})

				row = append(row, max[1])
			}
			temp = append(temp, row)
		}
		origin = temp
		N /= 2
	}

	fmt.Fprintln(writer, origin[0][0])
}
