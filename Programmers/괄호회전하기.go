package Programmers

func solution(s string) int {
	count := 0
	for i := 0; i < len(s); i++ {
		stack := []string{}
		for _, c := range s {
			current := string(c)
			if len(stack) == 0 {
				stack = append(stack, current)
			} else {
				last := stack[len(stack)-1]
				if last == "{" && current == "}" ||
					last == "[" && current == "]" ||
					last == "(" && current == ")" {
					stack = stack[0 : len(stack)-1]
				} else {
					stack = append(stack, current)
				}
			}
		}
		if len(stack) == 0 {
			count += 1
		}
		s = string(s[1:]) + string(s[0])
	}
	return count
}
