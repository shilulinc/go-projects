package main

import (
	"fmt"
	"github.com/jwma/jump-jump/internal/app/cmd/server"
	"github.com/jwma/jump-jump/internal/app/config"
	"os"
)

func main() {
	addr, _ := config.GetByBlock("J2_API", "J2_API_ADDR")
	fmt.Println(addr)
	if addr == "" {
		_, _ = fmt.Fprint(os.Stderr, "missing J2_API_ADDR environment variable")
		os.Exit(1)
	}

	err := server.Run(addr)
	if err != nil {
		_, _ = fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
