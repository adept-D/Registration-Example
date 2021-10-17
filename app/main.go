package main

import (
	"log"
	"net/http"

	"github.com/adept-D/app/controller"

	"github.com/julienschmidt/httprouter"
)

func main() {
	r := httprouter.New()

	routes(r)
	err := http.ListenAndServe("localhost:4444", r)
	if err != nil {
		log.Fatal(err)
	}

}

func routes(r *httprouter.Router) {
	r.ServeFiles("/app/public/*filepath", http.Dir("public"))

	r.GET("/", controller.StartPage)
	r.POST("/result", controller.ResultPage)
	//r.GET("/users", controller.GetUsers)
}
