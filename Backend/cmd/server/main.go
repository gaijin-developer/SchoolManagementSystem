package main

import (
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/router"
	"github.com/gin-gonic/gin"
)

func main (){

	engine := gin.Default();

	router.RouteDefinitions(engine);

	engine.Run();
}