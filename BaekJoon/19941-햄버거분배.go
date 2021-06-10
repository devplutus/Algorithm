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

	params := readIntegerAsArray()
	N, K := params[0], params[1]
	str, _ := reader.ReadString('\n')
	arr := strings.Split(strings.TrimSpace(str), "")
	answer := 0

	for i := 0; i < N; i++ {
		if arr[i] == "P" {
			for j := i - K; j <= i+K; j++ {
				if 0 <= j && j < N && arr[j] == "H" {
					arr[j] = "E"
					answer += 1
					break
				}
			}
		}
	}
	fmt.Fprintln(writer, answer)
}
