create DATABASE usersData
use usersData
create table users (id int auto_increment primary key, name varchar(255))
insert into users (id, name) values (1, 'Alice')
insert into users (id, name) values (2, 'Bob'), (3, 'Charlie')
select * from users
