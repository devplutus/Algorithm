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
var count = 0
var queens = [15]int{}

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

func dfs(x, N int) {
	if x == N {
		count += 1
		return
	}

	for y := 0; y < N; y++ {
		if findQueen(x, y) == false {
			queens[x] = y
			dfs(x+1, N)
		}
	}
}

func findQueen(x, y int) bool {
	for i := 0; i < x; i++ {
		if queens[i] == y {
			return true
		}
		if queens[i] == y-x+i || queens[i] == y+x-i {
			return true
		}
	}
	return false
}

func main() {
	defer writer.Flush()
	N := readIntegerAsArray()[0]
	dfs(0, N)
	fmt.Fprintln(writer, count)
}
