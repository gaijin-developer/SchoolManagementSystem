package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)
type StudentHandlers struct{
DB *gorm.DB
}
func (sh *StudentHandlers) GetAllStudents(ctx *gin.Context){
	ctx.JSON(http.StatusOK,gin.H{"result":"success"})
}