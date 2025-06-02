package main

import (
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/db"
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/router"
	"github.com/gin-gonic/gin"
)

func main (){

	engine := gin.Default();

	dataB := db.DB{}
	database, err := dataB.Start()
	if err != nil {
		panic("could not connect to the database")
	}
	
	router.RouteDefinitions(engine,database);

	engine.Run();
}