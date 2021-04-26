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

func main() {
	defer writer.Flush()
	var N, Q int

	parameters := readStringAsArray()
	N, _ = strconv.Atoi(parameters[0])
	Q, _ = strconv.Atoi(parameters[1])

	graph := make([][][]int, N) // [[index, USADO]]

	for i := 0; i < N-1; i++ {
		parameters = readStringAsArray()
		p, _ := strconv.Atoi(parameters[0])
		q, _ := strconv.Atoi(parameters[1])
		r, _ := strconv.Atoi(parameters[2])
		graph[p-1] = append(graph[p-1], []int{q - 1, r})
		graph[q-1] = append(graph[q-1], []int{p - 1, r})
	}

	for i := 0; i < Q; i++ {
		parameters = readStringAsArray()
		K, _ := strconv.Atoi(parameters[0])
		V, _ := strconv.Atoi(parameters[1])
		count := 0
		queue := [][]int{}
		check := make([]bool, N)
		check[V-1] = true

		for _, v := range graph[V-1] {
			queue = append(queue, v)
		}

		for len(queue) > 0 {
			check[queue[0][0]] = true
			if queue[0][1] >= K {
				count++
			}
			for _, v := range graph[queue[0][0]] {
				child := make([]int, 2)
				var compareK int
				if queue[0][1] > v[1] {
					compareK = v[1]
				} else {
					compareK = queue[0][1]
				}

				if compareK < K {
					continue
				} else {
					if check[v[0]] == false {
						check[v[0]] = true
						child[0], child[1] = v[0], compareK
						queue = append(queue, child)
					}
				}
			}
			queue = queue[1:]
		}
		fmt.Fprintln(writer, count)
	}
}
