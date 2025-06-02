package router

import (
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/handlers"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)



func RouteDefinitions(routerEngine *gin.Engine,db *gorm.DB){

	studentHandlers := handlers.StudentHandlers{DB:db};
	
	v1Api := routerEngine.Group("/api/v1")
	{
		v1Api.GET("/students",studentHandlers.GetAllStudents)
		// v1Api.POST("/students",studentController.CreateNewStudent)

	}
	

}

