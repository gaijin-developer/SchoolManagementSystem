package services

import (
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/models"
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/repository"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type StudentServices struct {
	studentRepo repository.StudentRepository
}

func (ss *StudentServices) GetAllStudents(ctx *gin.Context,db *gorm.DB)([]models.Student,error){
return ss.studentRepo.GetAllStudents(ctx,db)
}

func (ss *StudentServices)CreateNewStudent(ctx *gin.Context,db *gorm.DB)(models.Student,error){
	var newStudent models.Student
	
	if err := ctx.ShouldBindBodyWithJSON(&newStudent); err != nil {
		return models.Student{},err
	}

	return ss.studentRepo.CreateNewStudent(newStudent, db)
}