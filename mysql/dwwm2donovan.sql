
create database if not exists DWWM2_DONOVAN ;
use DWWM2_DONOVAN;

create table Soldat(
    num int PRIMARY KEY AUTO_INCREMENT,
    prenom varchar(15) Not null,
    nom varchar(10) Not null,
    sexe char(1),
    age date,
    grade int 
);

insert into Soldat(prenom,nom,sexe,age,grade)
    values("Marc","Dupont","M",'1991-01-05',1),
    ("Paul","Marchand","M",'1985-5-1',1),
    ("Marie","Laporte","F",'1995-07-10',2),
    ("Alex","Martin","M",'1997-04-02',3),
    ("Benoit","Dalors","M",'1999-10-14',3),
    ("Yohann","Fergusson","M",'1992-05-24',3),
    ("Philippe","Dany","M",'1994-12-23',2),
    ("Suzanne","Lacour","F",'1993-06-08',4),
    ("Celine","Dermand","F",'1999-01-30',5),
    ("Ann","Laclasse","F",'1988-09-09',4),
    ("Charles","Nourri","M",'1994-01-01',5),
    ("Bernard","Cazanne","M",'1994-09-12',4),
    ("Cene","Dermand","F",'1999-01-30',5),
    ("Anne","Laclasse","F",'1988-09-09',4),
    ("Charly","Nourri","M",'1995-10-31',5),
    ("Bernardo","Cazanne","M",'1994-12-04',4);


select * from Soldat where sexe ="M";

SELECT * from Soldat where TIMESTAMPDIFF(YEAR, age, now())>25 ;

select UCASE(nom) from Soldat;

update Soldat
set nom=Ucase(nom);
 
delete from Soldat order by age limit 2;

insert into Soldat(prenom,nom,sexe,age,grade)
values("antoine","zdhj","M","1985-6-2",1),
("kevin","zdhjo","M","1987-9-2",1),
("alaine","zdrdg","F","1995-12-2",1),
("jackie","iuloihr","F","1991-1-2",1);

update Soldat
set grade=grade +1
where grade <5;

update Soldat
set grade=grade -1
where sexe="M" and grade =3;

update Soldat
set age= adddate(age, INTERVAL 1 day)
where sexe="F" and grade =4;