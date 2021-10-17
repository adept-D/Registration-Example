package controller

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func ResultPage(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	data := map[string]string{
		"login":    r.FormValue("login"),
		"password": r.FormValue("password"),
	}

	err := json.NewEncoder(w).Encode(data)
	if err != nil {
		log.Fatal(err)
	}
}
