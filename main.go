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

func cal(x, y, operator string) int {
	cx, _ := strconv.Atoi(x)
	cy, _ := strconv.Atoi(y)

	if operator == "S" {
		return cx - cy
	} else if operator == "M" {
		return cx * cy
	} else if operator == "U" {
		return cx / cy
	} else {
		return cx + cy
	}
}

func main() {
	defer writer.Flush()

	readIntegerAsArray()
	str := readStringAsArray()[0]

	answer := []string{}
	nums := [2]string{"", ""}
	operator := []string{}

	for _, s := range str {
		if s >= '0' && s <= '9' {
			if len(operator) == 0 {
				nums[0] += string(s)
			} else {
				nums[1] += string(s)
			}
		} else {
			if nums[1] != "" && len(operator) != 0 {
				if operator[len(operator)-1] != "C" {
					nums[0] = strconv.Itoa(cal(nums[0], nums[1], operator[len(operator)-1]))
					nums[1] = ""
				}
				if string(s) == "C" {
					temp, _ := strconv.Atoi(nums[0])
					answer = append(answer, strconv.Itoa(temp))
				}
			} else if string(s) == "C" {
				temp, _ := strconv.Atoi(nums[0])
				answer = append(answer, strconv.Itoa(temp))
			}
			operator = append(operator, string(s))
		}
	}

	if len(answer) == 0 {
		fmt.Fprintln(writer, "NO OUTPUT")
	} else {
		fmt.Fprintln(writer, strings.Join(answer, " "))
	}
}
