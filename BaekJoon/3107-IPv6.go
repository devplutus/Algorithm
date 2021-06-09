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

	ipv6, _ := reader.ReadString('\n')
	ipv6 = strings.TrimSpace(ipv6)
	arr := strings.Split(ipv6, ":")
	filled := 0
	for i := range arr {
		if len(arr[i]) > 0 {
			arr[i] = strings.Repeat("0", 4-len(arr[i])) + arr[i]
			filled++
		}
	}
	ipv6 = strings.Join(arr, ":")
	if strings.Index(ipv6, "::") != -1 {
		zero := strings.Repeat("0000:", 8-filled)
		zero = zero[:len(zero)-1]
		ipv6 = strings.Replace(ipv6, "::", ":"+zero+":", 1)
	}
	if ipv6[0] == ':' {
		ipv6 = ipv6[1:]
	}
	if ipv6[len(ipv6)-1] == ':' {
		ipv6 = ipv6[:len(ipv6)-1]
	}
	fmt.Fprintln(writer, ipv6)
}
