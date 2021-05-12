import (
	"bufio"
	"fmt"
	"os"
)

var writer = bufio.NewWriter(os.Stdout)

func solution(rows int, columns int, queries [][]int) []int {
	answer := []int{}
	array := make([][]int, rows)

	for i := 0; i < rows; i++ {
		col := make([]int, columns)
		for j := 0; j < columns; j++ {
			col[j] = (j + 1) + (i * columns)
		}
		array[i] = col
	}

	for _, q := range queries {
		x1, y1, x2, y2 := q[0]-1, q[1]-1, q[2]-1, q[3]-1
		nums := []int{}
		next := 0

		for i := y1; i < y2; i++ {
			if i == y1 {
				next = array[x1][i+1]
				array[x1][i+1] = array[x1][i]
				nums = append(nums, array[x1][i])
			} else {
				temp := array[x1][i+1]
				array[x1][i+1] = next
				nums = append(nums, next)
				next = temp
			}
		}
		for i := x1; i < x2; i++ {
			temp := array[i+1][y2]
			array[i+1][y2] = next
			nums = append(nums, next)
			next = temp
		}
		for i := y2; i > y1; i-- {
			temp := array[x2][i-1]
			array[x2][i-1] = next
			nums = append(nums, next)
			next = temp
		}
		for i := x2; i > x1; i-- {
			temp := array[i-1][y1]
			array[i-1][y1] = next
			nums = append(nums, next)
			next = temp
		}

		min := rows*columns + 1

		for _, v := range nums {
			if v < min {
				min = v
			}
		}

		answer = append(answer, min)
	}

	return answer
}

func main() {
	defer writer.Flush()
	solution(6, 6, [][]int{
		{2, 2, 5, 4},
		{3, 3, 6, 6},
		{5, 1, 6, 3},
	})
}
