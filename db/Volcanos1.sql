CREATE DATABASE Volcanos1;

USE Volcanos1;

CREATE TABLE Volcano_Erruptions (

id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(100),
latitude DECIMAL(18,5),
longitude DECIMAL(18,5),
active VARCHAR(100),
explosive INT,
startyear INT,
startmonth INT,
PRIMARY KEY(id)



);

SELECT * FROM Volcano_Erruptions;