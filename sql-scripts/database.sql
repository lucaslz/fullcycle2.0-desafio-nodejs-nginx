USE nodedb;

CREATE TABLE IF NOT EXISTS peoples (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE=INNODB;