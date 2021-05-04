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

func reverse(arr []int) []int {
	temp := []int{}
	for i := len(arr) - 1; i >= 0; i-- {
		temp = append(temp, arr[i])
	}
	return temp
}

func main() {
	defer writer.Flush()

	parameters := readIntegerAsArray()
	N, M := parameters[0], parameters[1]
	// 0 Deck, 1 Ground
	do := [2][]int{}
	su := [2][]int{}
	max := N
	if N > M {
		max = M
	}

	for i := 0; i < max; i++ {
		parameters := readStringAsArray()
		doN, _ := strconv.Atoi(parameters[0])
		suN, _ := strconv.Atoi(parameters[1])
		do[0] = append(do[0], doN)
		su[0] = append(su[0], suN)
	}

	do[0] = reverse(do[0])
	su[0] = reverse(su[0])

	for i := 0; i < M; i++ {
		// Flip
		do[1] = append(do[1], do[0][len(do[0])-1])
		su[1] = append(su[1], su[0][len(su[0])-1])
		do[0] = do[0][:len(do[0])-1]
		su[0] = su[0][:len(su[0])-1]
		// su win
		if do[1][len(do[1])-1] == 5 || su[1][len(su[1])-1] == 5 {
			t := reverse(do[1])
			su[0] = append(t, su[0]...)
			t2 := reverse(su[1])
			su[0] = append(t2, su[0]...)
			su[1] = []int{}
			do[1] = []int{}
		} else if (len(do[1]) > 0 && len(su[1]) > 0) && do[1][len(do[1])-1]+su[1][len(su[1])-1] == 5 {
			t := reverse(su[1])
			do[0] = append(t, do[0]...)
			t2 := reverse(do[1])
			do[0] = append(t2, do[0]...)
			su[1] = []int{}
			do[1] = []int{}
		}

		if len(do[0]) == 0 || len(su[0]) == 0 {
			break
		}
	}

	if len(do[0]) == len(su[0]) {
		fmt.Fprintln(writer, "dosu")
	} else if len(do[0]) > len(su[0]) || (len(do[0]) > 0 && len(su[0]) == 0) {
		fmt.Fprintln(writer, "do")
	} else {
		fmt.Fprintln(writer, "su")
	}
}
