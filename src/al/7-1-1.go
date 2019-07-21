package main

import (
	"errors"
	"fmt"
	"strconv"
)

func isDuplicateNums(res int, res2 int) (int, error) {
	letters := [10]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
	a := strconv.Itoa(res)
	
	b := strconv.Itoa(res2)
	var c string
	if(res2<10000){
		
		c = a +"0"+ b
	}else{

		c=a+b
	}
	for _, char := range c {
		idx, err := strconv.Atoi(string(char))
		if err != nil {
			fmt.Println("字符串转换成整数失败")
		}
		letters[idx]++
	}
	for _, letter := range letters {
		if letter > 1 {
			return res, errors.New("is duplicate")
		}
	}
	return res, nil
}

func computeN(n int) {
	var i int
	for i = 1000; i < 100000; i++ {
		var res = n * i
		ret, err := isDuplicateNums(res, i)
		if err != nil {
			// fmt.Println("重复了")
		} 
			fmt.Println("aaa", i, ret)
	}
}

func main() {
	computeN(62)

	fmt.Println("My favorite number is")
}
