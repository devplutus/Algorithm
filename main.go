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

// Variables
var N, M, sx, sy int
var mapArr = [][]int{}
var commands = []int{}
var diceSide = [4]int{0, 0, 0, 0} // W N E S
var diceTopBottom = [2]int{0, 0}  // T B

// R, L, T, B
var directions = [][]int{
	{0, 1},
	{0, -1},
	{-1, 0},
	{1, 0},
}

func readStringAsArray() []string {
	s, _ := reader.ReadString('\n')
	temp := strings.Split(strings.TrimSpace(s), " ")
	return temp
}

func read() {
	parameters := readStringAsArray()
	N, _ = strconv.Atoi(parameters[0])
	M, _ = strconv.Atoi(parameters[1])
	sx, _ = strconv.Atoi(parameters[2])
	sy, _ = strconv.Atoi(parameters[3])

	for i := 0; i < N; i++ {
		arr := readStringAsArray()
		intArr := []int{}
		for _, v := range arr {
			p, _ := strconv.Atoi(v)
			intArr = append(intArr, p)
		}
		mapArr = append(mapArr, intArr)
	}

	command := readStringAsArray()

	for _, c := range command {
		convertC, _ := strconv.Atoi(c)
		commands = append(commands, convertC)
	}
}

func main() {
	defer writer.Flush()

	read()

	for _, command := range commands {
		nx := sx + directions[command-1][0]
		ny := sy + directions[command-1][1]

		if nx < 0 || ny < 0 || nx == N || ny == M {
			continue
		} else {
			top, bottom := diceTopBottom[0], diceTopBottom[1]

			switch command {
			case 1:
				diceTopBottom[0], diceTopBottom[1] = diceSide[0], diceSide[2]
				diceSide[0], diceSide[2] = bottom, top
			case 2:
				diceTopBottom[0], diceTopBottom[1] = diceSide[2], diceSide[0]
				diceSide[0], diceSide[2] = top, bottom
			case 3:
				diceTopBottom[0], diceTopBottom[1] = diceSide[3], diceSide[1]
				diceSide[1], diceSide[3] = top, bottom
			case 4:
				diceTopBottom[0], diceTopBottom[1] = diceSide[1], diceSide[3]
				diceSide[1], diceSide[3] = bottom, top
			}

			if mapArr[nx][ny] == 0 {
				mapArr[nx][ny] = diceTopBottom[1]
			} else {
				diceTopBottom[1] = mapArr[nx][ny]
				mapArr[nx][ny] = 0
			}

			sx, sy = nx, ny
			fmt.Fprintln(writer, diceTopBottom[0])
		}
	}
}
