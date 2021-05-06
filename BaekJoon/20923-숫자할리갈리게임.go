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
	do := []int{}
	su := []int{}

	do_ground := []int{}
	su_ground := []int{}
	turn := 0

	for i := 0; i < N; i++ {
		card := readIntegerAsArray()
		do = append(do, card[0])
		su = append(su, card[1])
	}

	do = reverse(do)
	su = reverse(su)

	for i := 0; i < M; i++ {
		// Flip
		if turn == 0 {
			do_ground = append(do_ground, do[0])
			do = do[1:]
			turn = 1
		} else {
			su_ground = append(su_ground, su[0])
			su = su[1:]
			turn = 0
		}

		// End
		if len(do) == 0 || len(su) == 0 {
			break
		}

		// do win
		if (len(do_ground) > 0 && do_ground[len(do_ground)-1] == 5) || (len(su_ground) > 0 && su_ground[len(su_ground)-1] == 5) {
			do = append(do, su_ground...)
			do = append(do, do_ground...)
			do_ground = []int{}
			su_ground = []int{}
		} else if (len(do_ground) > 0 && len(su_ground) > 0) && do_ground[len(do_ground)-1]+su_ground[len(su_ground)-1] == 5 {
			su = append(su, do_ground...)
			su = append(su, su_ground...)
			do_ground = []int{}
			su_ground = []int{}
		}
	}

	if len(do) == len(su) {
		fmt.Fprintln(writer, "dosu")
	} else if len(do) > len(su) {
		fmt.Fprintln(writer, "do")
	} else {
		fmt.Fprintln(writer, "su")
	}
}
