import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func reverse(text string) []rune {
	convert := []rune{}
	runes := []rune(text)
	for i := len(runes) - 1; i >= 0; i-- {
		convert = append(convert, runes[i])
	}
	return convert
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var A, B, answer string
	var maxLen int

	fmt.Fscanf(reader, "%s %s", &A, &B)

	if len(A) > len(B) {
		maxLen = len(A)
	} else {
		maxLen = len(B)
		temp := A
		A = B
		B = temp
	}

	plus := false
	runeA := reverse(A)
	runeB := reverse(B)

	for i := 0; i < maxLen; i++ {
		var sum, a, b int
		a, _ = strconv.Atoi(string(runeA[i]))
		if i < len(runeB) {
			b, _ = strconv.Atoi(string(runeB[i]))
		}

		if plus == true {
			sum = (a + b + 1)
		} else {
			sum = (a + b)
		}

		if sum >= 10 {
			plus = true
		} else {
			plus = false
		}
		answer += strconv.Itoa(sum % 10)
	}

	answer = string(reverse(answer))
	if plus == true {
		answer = "1" + answer
	}

	writer.WriteString(answer)
}
