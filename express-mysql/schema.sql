CREATE TABLE category (
  id int unsigned AUTO_INCREMENT,
  name varchar(255),
  slug varchar(255),
  imgUrl varchar(200),
  productCount int unsigned DEFAULT '0',
  createdAt datetime,
  PRIMARY KEY (id),
);

