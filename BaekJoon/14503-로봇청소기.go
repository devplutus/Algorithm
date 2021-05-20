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

	// 0 : T, 1 : R, 2 : B, 3 : L
	direciton := [][]int{
		{-1, 0},
		{0, 1},
		{1, 0},
		{0, -1},
	}
	backDirection := [][]int{
		{1, 0},
		{0, -1},
		{-1, 0},
		{0, 1},
	}

	params := readIntegerAsArray()
	N, M := params[0], params[1]
	params = readIntegerAsArray()
	r, c, d := params[0], params[1], params[2]

	// 0 : blank, 1 : wall, 2 : cleaned
	area := [][]int{}
	answer := 0

	for i := 0; i < N; i++ {
		area = append(area, readIntegerAsArray())
	}

	for {
		// 1
		answer += 1
		area[r][c] = 2
		find := false
		over := false
		// 2
		for {
			// 2-b
			for i := 0; i < 4; i++ {
				d -= 1
				if d == -1 {
					d = 3
				}

				cx := direciton[d][0] + r
				cy := direciton[d][1] + c
				if cx > 0 && cy > 0 && cx < N-1 && cy < M-1 && area[cx][cy] == 0 {
					// 2-a
					find = true
					break
				}
			}

			if find == true {
				break
			} else {
				r = backDirection[d][0] + r
				c = backDirection[d][1] + c
				if r == 0 || c == 0 || r == N-1 || c == M-1 || area[r][c] == 1 {
					over = true
					break
				}
			}
		}

		r = direciton[d][0] + r
		c = direciton[d][1] + c

		if over == true {
			break
		}
	}
	fmt.Fprintln(writer, answer)

}
