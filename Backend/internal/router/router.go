package router

import (
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/controller"
	"github.com/gin-gonic/gin"
)

var studentController = controller.StudentsController{};

func RouteDefinitions(routerEngine *gin.Engine){
	routerEngine.GET("/ping",studentController.GetAllStudents)
}

