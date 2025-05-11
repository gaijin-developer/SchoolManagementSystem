package model

import (
	"time"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	FirstName       string 	`json:"firstName"`
	LastName   string `json:"lastName"`
	DateOfBirth time.Time `json:"dateOfBirth"`
	Gender string `json:"gender"`
	ContactNumber string `json:"contactNumber"`
	EnrollmentDate time.Time `json:"enrollmentDate"`
	Address string `json:"address"`
	Section string `json:"section"`
	GuardianName string `json:"guardianName"`
	IsActive bool `json:"isActive"`
	Age        int64 `json:"age"`
	Email      string `json:"email"`
	ClassLevel int `json:"classLevel"`
}
