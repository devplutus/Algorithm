import (
	"bufio"
	"container/heap"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader = bufio.NewReader(os.Stdin)
var writer = bufio.NewWriter(os.Stdout)

type Item struct {
	id       int
	time     int
	priority int
}

type PriorityQeue []*Item

func (pq PriorityQeue) Len() int { return len(pq) }
func (pq PriorityQeue) Less(i, j int) bool {
	if pq[i].priority == pq[j].priority {
		return pq[i].id < pq[j].id
	} else {
		return pq[i].priority > pq[j].priority
	}
}
func (pq PriorityQeue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQeue) Push(item interface{}) {
	*pq = append(*pq, item.(*Item))
}

func (pq *PriorityQeue) Pop() interface{} {
	n := len(*pq)
	old := *pq
	item := old[n-1]
	old[n-1] = nil
	*pq = old[:n-1]
	return item
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

func main() {
	defer writer.Flush()
	params := readIntegerAsArray()
	T, N := params[0], params[1]

	items := make(PriorityQeue, N)

	for i := range make([]bool, N) {
		temp := readIntegerAsArray()
		items[i] = &Item{
			id:       temp[0],
			time:     temp[1],
			priority: temp[2],
		}
	}
	heap.Init(&items)

	for range make([]bool, T) {
		item := heap.Pop(&items).(*Item)
		fmt.Fprintln(writer, item.id)
		item.time -= 1
		item.priority -= 1
		if item.time != 0 {
			heap.Push(&items, item)
		}
	}
}

/*
10 3
1 4 1
2 3 1
3 3 6
*/
