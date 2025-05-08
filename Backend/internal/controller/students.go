package controller

import (
	"time"

	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/model"
	"github.com/gin-gonic/gin"
)

type StudentsController struct {

}
func (s *StudentsController) GetAllStudents(ctx *gin.Context){

	newStudent := model.Student{
			FirstName:      "Frank",
		LastName:       "Entsie",
		DateOfBirth:    time.Date(2009, time.March, 12, 0, 0, 0, 0, time.UTC),
		Gender:         "Male",
		ContactNumber:  "080-1234-5678",
		EnrollmentDate: time.Date(2020, time.April, 1, 0, 0, 0, 0, time.UTC),
		Address:        "123 Sakura Street, Osaka, Japan",
		Section:        "A",
		GuardianName:   "Yuki Okimura",
		IsActive:       true,
		Age:            15,
		Email:          "frank.okimura@example.com",
		ClassLevel:     9,
}

	students := []model.Student{newStudent}

	ctx.JSON(200,students);

}