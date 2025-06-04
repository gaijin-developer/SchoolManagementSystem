package handlers

import (
	"net/http"

	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/services"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)
type StudentHandlers struct{
DB *gorm.DB
studentServices services.StudentServices
}
func (sh *StudentHandlers) GetAllStudents(ctx *gin.Context){
	res,err := sh.studentServices.GetAllStudents(ctx,sh.DB)
	if err != nil{
		ctx.JSON(http.StatusBadRequest,gin.H{"result":res})
		return 
	}
		ctx.JSON(http.StatusOK,gin.H{"result":res})
}
func (sh *StudentHandlers)CreateNewStudent(ctx *gin.Context)(){
	res,err := sh.studentServices.CreateNewStudent(ctx,sh.DB)
	if err != nil {
		ctx.JSON(http.StatusBadRequest,gin.H{"response":res})
		return
	}
	ctx.JSON(http.StatusOK,gin.H{"response":res})
}