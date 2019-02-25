

/* Q1 */

create database if not exists sys_solaire_donovan character set utf8 colate utf8_general_ci;
use sys_solaire_donovan;

/* Q2 */

create table planete_donovan(
    
    nom varchar(15) Not null,
    distance_de_soleil_en_millions_de_KM int Not null,
    Période_de_rotation decimal(16,2) Not null,
    période_de_révolution decimal(15,2) Not null,
    nombre_de_satellites int );

insert into planete_donovan(nom,distance_de_soleil_en_millions_de_KM,Période_de_rotation,période_de_révolution,nombre_de_satellites)
    values("Mercure",58,"58.6J","88J",0),
   ("Venus",108,"243J","225J",0),
   ("Terre",150,"24H","365,25J",1),
   ("Mars",228,"24.6H","1 an 322 J",2),
   ("Jupiter",778,"9,92H","11 ans 315 J",63),
   ("Saturne",1420,"10,7H","29 ans 155 J",60),
   ("Uranus",2870,"17,2H","84 ans 155 J",27),
   ("Neptune",4500,"16,1H","164 ans 324 J",13);


/* Q3 */

select * from planete_donovan;

/* Q4 */

select count(*) as nombre_de_plante from planete_donovan;

/* Q5 */

select nom,nombre_de_satellites from planete_donovan order by nombre_de_satellites desc limit 1;
/*correction*/select nom from planete_donovan where nombre_de_satellites in (select max(nombre_de_satellites) from planete_donovan);

/* Q6 */

select nom,distance_de_soleil_en_millions_de_KM from planete_donovan order by distance_de_soleil_en_millions_de_KM desc limit 1;
/*correction*/select nom from planete_donovan where distance_de_soleil_en_millions_de_KM in (select max(distance_de_soleil_en_millions_de_KM) from planete_donovan);

/* Q7 */

select nom from planete_donovan where nom like "M%";

/* Q8 */

select nom from planete_donovan where nom like "%S%";

/* Q9 */

select nom from planete_donovan where nom not like "%T%";

/* Q10 */

select * from planete_donovan limit 5;

/* Q11 */

select * from planete_donovan where nombre_de_satellites >=1;

/* Q12 */

select avg(nombre_de_satellites) as moyenne_satellites from planete_donovan;

/* Q13 */

select avg(nombre_de_satellites) as moyenne_satellites from planete_donovan where nombre_de_satellites >10;

/* Q14 */

select nom from planete_donovan order by nom desc;

/* Q15 */ 

select * from planete_donovan where nombre_de_satellites between 1 and 60;
/*correction*/select nom from planete_donovan where nombre_de_satellites > (select min(nombre_de_satellites) and nombre_de_satellites < (select max(nombre_de_satellites) from planete_donovan);

/* Q16 */

select * from planete_donovan where distance_de_soleil_en_millions_de_KM >778 and nombre_de_satellites >20;

/* Q17 */

select concat(substring(nom,1,3),"(",nombre_de_satellites,")") as planete_avec_nombre_de_satelittes from planete_donovan;

/* Q18 */

select nom from planete_donovan where nombre_de_satellites =60;

/* Q19 */

/////

/* Q20 */

update planete_donovan
set nombre_de_satellites = nombre_de_satellites+16
where nom like "Saturne";

/* Q21 */

update planete_donovan
set nombre_de_satellites = nombre_de_satellites+1
where nom like "Neptune";

/* Q22 */ 

alter table planete_donovan add Planete_habité char(1) default"N" ;

/* Q23 */

update planete_donovan
set Planete_habité = "O"
where nom like "Terre";

/* Q24 */

select *,date_sub(Now(), interval 1 day) as HIER from planete_donovan;

/* Q25 */

select *,datediff(Now(),"2020-02-14") as Jourrestantavant_14fevrier2020 from planete_donovan;

/* Q26 */

select *,date_add(Now(), interval 100 day) as RDV from planete_donovan;

/* Q27 */

select datediff("2019-06-08","2019-11-06") as joursentre8Juinet6Novembre from planete_donovan;

/* Q28 */

select DAYNAME("2018-12-23") as joursdu23122018 from planete_donovan;




/* */

select * from table1
union
select * from table2;

/* */

select * from table1
intersect
select * from table2;


/* */ 

select * from table1
minus
select * from table2;
 /* */ 

create table t1{
    --
    --
    --
    --
}
create table t2 like t1;

/* */

create view list01 as (select nom,prenom,age,concat(note1,",",note2,",",note3)as NNN from notes 
where sexe='M' order by age);

/* ici nous avons deux table relié par une clé étrangère personnes et services :: 
cette commande permet de fusionner les deux tables en remplacant le contenu de la colonne numservice
 par la colonne idservices qui contient donc les id qui sont utilisé dans la colonne numservice à la base */

select nom,prenom,nom_service
from personnes left join services
on numservice = idservice;

/* le left permet d'avoir aussi ceux de la table personnes qui n'ont aucune donnée dans la colonne de la table services l'autre table */
/* le right est l'inversement */ 