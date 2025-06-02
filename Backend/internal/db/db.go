package db

import (
	"fmt"
	"log"
	"os"

	"github.com/gaijin-developer/SchoolManagementSystem/Backend/internal/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	
}
func (database *DB) Start()(*gorm.DB ,error){

	err := godotenv.Load("../../.env")
	
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	
	databaseName := os.Getenv("DATABASE_USER")	

	fmt.Println("env var: ",databaseName)

	dsn := fmt.Sprintf("host=localhost user=%s password='' dbname=schoolsystem port=5432 sslmode=disable TimeZone=Asia/Shanghai",databaseName)
	
	fmt.Println(dsn)
	
	db,err := gorm.Open(postgres.Open(dsn),&gorm.Config{})
	
	db.AutoMigrate(&models.Student{})

	return db,err
}