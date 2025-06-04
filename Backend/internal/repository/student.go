package repository

import (
	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type StudentRepository struct {
}

func (sr *StudentRepository) GetAllStudents(ctx *gin.Context,db *gorm.DB)([]models.Student,error){
return []models.Student{},nil
}

func (sr *StudentRepository)CreateNewStudent(student models.Student,db *gorm.DB)(models.Student,error){
	if err := db.Create(&student).Error;err!= nil{
		return models.Student{},nil
	}
	return student,nil
}