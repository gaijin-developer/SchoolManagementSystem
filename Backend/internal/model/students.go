package model

import "time"

type Student struct {
	FirstName       string
	LastName   string
	DateOfBirth time.Time
	Gender string
	ContactNumber string
	EnrollmentDate time.Time
	Address string
	Section string
	GuardianName string
	IsActive bool
	Age        int64
	Email      string
	ClassLevel int
}