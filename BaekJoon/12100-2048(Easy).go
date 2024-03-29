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

func top(arr [][]int) {
	for y := 0; y < len(arr); y++ {
		for x := 0; x < len(arr); x++ {
			for nx := x + 1; nx < len(arr); nx++ {
				if arr[x][y] == 0 && arr[nx][y] != 0 {
					arr[x][y] = arr[nx][y]
					arr[nx][y] = 0
					x--
					break
				}
				if arr[x][y] != 0 {
					if arr[x][y] == arr[nx][y] {
						arr[x][y] += arr[nx][y]
						arr[nx][y] = 0
						break
					}
					if arr[nx][y] != 0 {
						break
					}
				}
			}
		}
	}
}

func bottom(arr [][]int) {
	for y := 0; y < len(arr); y++ {
		for x := len(arr) - 1; x >= 0; x-- {
			for nx := x - 1; nx >= 0; nx-- {
				if arr[x][y] == 0 && arr[nx][y] != 0 {
					arr[x][y] = arr[nx][y]
					arr[nx][y] = 0
					x++
					break
				}
				if arr[x][y] != 0 {
					if arr[x][y] == arr[nx][y] {
						arr[x][y] += arr[nx][y]
						arr[nx][y] = 0
						break
					}
					if arr[nx][y] != 0 {
						break
					}
				}
			}
		}
	}
}

func left(arr [][]int) {
	for x := 0; x < len(arr); x++ {
		for y := 0; y < len(arr); y++ {
			for ny := y + 1; ny < len(arr); ny++ {
				if arr[x][y] == 0 && arr[x][ny] != 0 {
					arr[x][y] = arr[x][ny]
					arr[x][ny] = 0
					y--
					break
				}
				if arr[x][y] != 0 {
					if arr[x][y] == arr[x][ny] {
						arr[x][y] += arr[x][ny]
						arr[x][ny] = 0
						break
					}
					if arr[x][ny] != 0 {
						break
					}
				}
			}
		}
	}
}

func right(arr [][]int) {
	for x := 0; x < len(arr); x++ {
		for y := len(arr) - 1; y >= 0; y-- {
			for ny := y - 1; ny >= 0; ny-- {
				if arr[x][y] == 0 && arr[x][ny] != 0 {
					arr[x][y] = arr[x][ny]
					arr[x][ny] = 0
					y++
					break
				}
				if arr[x][y] != 0 {
					if arr[x][y] == arr[x][ny] {
						arr[x][y] += arr[x][ny]
						arr[x][ny] = 0
						break
					}
					if arr[x][ny] != 0 {
						break
					}
				}
			}
		}
	}
}

func max(arr [][]int) int {
	n := 0
	for _, i := range arr {
		for _, j := range i {
			if j > n {
				n = j
			}
		}
	}
	return n
}

func dfs(arr [][]int, count int, result []int) {
	if count == 5 {
		maxValue := max(arr)
		if result[0] < maxValue {
			result[0] = maxValue
		}
		return
	}
	for i := 0; i < 4; i++ {
		temp := [][]int{}
		for _, v := range arr {
			tempV := make([]int, len(v))
			copy(tempV, v)
			temp = append(temp, tempV)
		}

		switch i {
		case 0:
			left(temp)
		case 1:
			right(temp)
		case 2:
			top(temp)
		case 3:
			bottom(temp)
		}

		dfs(temp, count+1, result)
	}
}

func main() {
	defer writer.Flush()

	N := readIntegerAsArray()[0]
	arr := make([][]int, N)
	for i := 0; i < N; i++ {
		arr[i] = readIntegerAsArray()
	}
	result := []int{0}
	dfs(arr, 0, result)
	fmt.Fprintln(writer, result[0])
}
