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

	for {
		A := readIntegerAsArray()
		if len(A) == 1 && A[0] == 0 {
			break
		}
		B := readIntegerAsArray()

		max := int(math.Max(float64(A[len(A)-1]), float64(B[len(B)-1])))
		min := int(math.Min(float64(A[1]), float64(B[1])))

		A, B = A[1:], B[1:]
		ai, bi, as, bs := 0, 0, 0, 0
		answer := 0

		for c := min; c <= max; c++ {
			if ai < len(A) && bi < len(B) && A[ai] == c && B[bi] == c {
				answer += int(math.Max(float64(as), float64(bs)))
				as, bs = A[ai], B[bi]
				ai++
				bi++
			} else if ai < len(A) && A[ai] == c {
				as += A[ai]
				ai++
			} else if bi < len(B) && B[bi] == c {
				bs += B[bi]
				bi++
			}
		}

		answer += int(math.Max(float64(as), float64(bs)))
		fmt.Fprintln(writer, answer)
	}
}
