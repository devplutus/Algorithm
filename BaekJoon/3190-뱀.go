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

	N := readIntegerAsArray()[0]
	arr := make([][]int, N)
	for i := 0; i < N; i++ {
		arr[i] = make([]int, N)
	}

	K := readIntegerAsArray()[0]
	for i := 0; i < K; i++ {
		p := readIntegerAsArray()
		arr[p[0]-1][p[1]-1] = 1
	}

	L := readIntegerAsArray()[0]
	d := 0
	move := [][]int{}
	for i := 0; i < L; i++ {
		p := readStringAsArray()
		distance, _ := strconv.Atoi(p[0])
		rotate := p[1]

		if rotate == "D" {
			d++
			if d == 4 {
				d = 0
			}
		} else {
			d--
			if d == -1 {
				d = 3
			}
		}

		move = append(move, []int{distance, d})
	}

	body := [][]int{
		{0, 0},
	}
	count := 0
	currentD := 0
	moveIndex := 0
	direction := [][]int{
		{0, 1},  // R
		{1, 0},  // B
		{0, -1}, // L
		{-1, 0}, // T
	}

	for {
		nx := body[len(body)-1][0] + direction[currentD][0]
		ny := body[len(body)-1][1] + direction[currentD][1]

		if nx == -1 || nx == N || ny == -1 || ny == N || arr[nx][ny] == 2 {
			break
		}

		isApple := false
		if arr[nx][ny] == 1 {
			isApple = true
		}

		arr[nx][ny] = 2

		body = append(body, []int{nx, ny})

		if isApple == false {
			arr[body[0][0]][body[0][1]] = 0
			body = body[1:]
		}

		count++
		if moveIndex != len(move) && move[moveIndex][0] == count {
			currentD = move[moveIndex][1]
			moveIndex++
		}
	}

	fmt.Fprintln(writer, count+1)
}
