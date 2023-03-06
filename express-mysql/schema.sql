CREATE TABLE category (
  id int unsigned AUTO_INCREMENT,
  name varchar(255),
  slug varchar(255),
  imgUrl varchar(200),
  productCount int unsigned DEFAULT '0',
  createdAt datetime,
  PRIMARY KEY (id),
);

-- TODOCATEGORY
CREATE TABLE todoCategory (
  id int unsigned AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
);

-- TODO

CREATE TABLE todo (
  id int unsigned AUTO_INCREMENT,
  name varchar(255),
  isDone BOOLEAN DEFAULT false,
  todoCategoryId int UNSIGNED,
  PRIMARY key(id),
  FOREIGN KEY(todoCategoryId) REFERENCES todoCategory(id)
);

INSERT INTO todoCategory VALUES (NULL,'Must do');

INSERT INTO todoCategory VALUES (NULL,'Must do 1');
INSERT INTO todoCategory VALUES (NULL,'Must doo 2');
INSERT INTO todoCategory VALUES (NULL,'Must dooo now');



INSERT INTO todo values (NULL,'Brush teeth', false, 1);

-- todoCategoryId baganiig ustgah ni:

-- 1. holboosiig ni ustagana
alter table todo drop constraint todo_ibfk_1;

-- 2. holboosgui bolson uchir baganiig shuud ustgana
 alter table todo drop todoCategoryId;

--  todoCategoryId foreign key butsaaj nemne
ALTER TABLE todo ADD COLUMN todoCategoryId INT unsigned;

ALTER TABLE todo
ADD FOREIGN KEY (todoCategoryId) REFERENCES todoCategory(id);

select todo.id, todo.name, todo.isDone, todoCategory.name as 'category name' 
  from todo LEFT JOIN todoCategory ON todo.todoCategoryId = todoCategory.id;
