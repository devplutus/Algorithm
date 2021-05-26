import (
	"bufio"
	"fmt"
	"math"
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

	N := readIntegerAsArray()[0]
	str, _ := reader.ReadString('\n')
	str = strings.TrimSpace(str)

	A := []int{0}
	B := []int{0}

	if string(str[0]) == "A" {
		A[0] = 0
		B[0] = 1
	} else {
		A[0] = 1
		B[0] = 0
	}

	for i := 1; i < N; i++ {
		if string(str[i]) == "A" {
			A = append(A, int(math.Min(float64(A[i-1]), float64(B[i-1]+1))))
			B = append(B, int(math.Min(float64(A[i-1]+1), float64(B[i-1]+1))))
		} else {
			A = append(A, int(math.Min(float64(A[i-1]+1), float64(B[i-1]+1))))
			B = append(B, int(math.Min(float64(A[i-1]+1), float64(B[i-1]))))
		}
	}
	fmt.Fprintln(writer, A[len(A)-1])
}
