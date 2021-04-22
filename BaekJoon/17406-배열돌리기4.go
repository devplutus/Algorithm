package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)
var answer = -1
var N int
var M int
var K int
var arr = [][]int{}
var rotateCal = [][]int{}

func readStringAsArray() []string {
	s, _ := reader.ReadString('\n')
	temp := strings.Split(strings.TrimSpace(s), " ")
	return temp
}

func dfs(order []int, check []bool) {
	if len(order) == len(check) {
		rotate(order)
	} else {
		for i := 0; i < len(check); i++ {
			if check[i] == false {
				check[i] = true
				order = append(order, i)
				dfs(order, check)
				order = order[:len(order)-1]
				check[i] = false
			}
		}
	}
}

func rotate(order []int) {
	copyArr := make([][]int, len(arr))
	for i := range arr {
		copyArr[i] = make([]int, len(arr[i]))
		copy(copyArr[i], arr[i])
	}
	for _, i := range order {
		sx := rotateCal[i][0] - rotateCal[i][2] - 1
		sy := rotateCal[i][1] - rotateCal[i][2] - 1
		ex := rotateCal[i][0] + rotateCal[i][2] - 1
		ey := rotateCal[i][1] + rotateCal[i][2] - 1

		for sx < ex {
			// Order
			queue := [][]int{}
			// Left To Right From Top
			for y := sy; y < ey; y++ {
				queue = append(queue, []int{sx, y})
			}
			// Top To Bottom From Right
			for x := sx; x < ex; x++ {
				queue = append(queue, []int{x, ey})
			}
			// Right To Left From Bottom
			for y := ey; y > sy; y-- {
				queue = append(queue, []int{ex, y})
			}
			// Bottom To Top From Left
			for x := ex; x > sx; x-- {
				queue = append(queue, []int{x, sy})
			}

			last := copyArr[queue[len(queue)-1][0]][queue[len(queue)-1][1]]
			prev := copyArr[queue[0][0]][queue[0][1]]

			for i, point := range queue {
				if i > 0 {
					temp := copyArr[point[0]][point[1]]
					copyArr[point[0]][point[1]] = prev
					prev = temp
				}
			}

			copyArr[queue[0][0]][queue[0][1]] = last

			sx++
			sy++
			ex--
			ey--
		}
	}
	sum(copyArr)
}

func sum(copyArr [][]int) {
	min := -1
	for _, x := range copyArr {
		sum := 0
		for _, y := range x {
			sum += y
		}
		if min == -1 || sum < min {
			min = sum
		}
	}

	if answer == -1 || answer > min {
		answer = min
	}
}

func main() {
	defer writer.Flush()

	parameters := readStringAsArray()

	N, _ = strconv.Atoi(parameters[0])
	M, _ = strconv.Atoi(parameters[1])
	K, _ = strconv.Atoi(parameters[2])

	for i := 0; i < N; i++ {
		readArr := readStringAsArray()
		arr = append(arr, []int{})
		for _, v := range readArr {
			c, _ := strconv.Atoi(v)
			arr[i] = append(arr[i], c)
		}
	}

	for i := 0; i < K; i++ {
		parameters = readStringAsArray()
		r, _ := strconv.Atoi(parameters[0])
		c, _ := strconv.Atoi(parameters[1])
		s, _ := strconv.Atoi(parameters[2])

		rotateCal = append(rotateCal, []int{r, c, s})
	}

	check := make([]bool, K)
	dfs([]int{}, check)
	fmt.Fprintln(writer, answer)
}
