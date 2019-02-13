




use DWWMDONOVAN;

/* =======================Creer une table======================*/

create table Note(
    num int PRIMARY KEY AUTO_INCREMENT,
    prenom varchar(15) Not null,
    nom varchar(10) Not null,
    sexe char(1) ,
    password varchar(8) Unique,
    age char(2) Not null,
    Note1 int ,
    Note2 int ,
    Note3 int 
);

/* =======================Inséré dans la table======================*/

insert into Note(prenom,nom,sexe,password,age,Note1,Note2,Note3)
    values("Marc","Dupont","M","df5sdfs",25,15,11,9),
    ("Paul","Marchand","M","SF5S",32,8,10,16),
    ("Marie","Laporte","F","KLJ8JKA5",15,12,17,11),
    ("Alex","Martin","M","FRG16",23,11,12,16),
    ("Benoit","Dalors","M","12345",41,9,14,15),
    ("Yohann","Fergusson","M","ASDE5",39,17,16,13),
    ("Philippe","Dany","M","HTYAZ8",19,19,18,12),
    ("Suzanne","Lacour","F","de4",43,4,11,16),
    ("Celine","Dermand","F","AQW85",27,11,16,13),
    ("Anne","Laclasse","F","YTRC9V6B",18,10,9,12),
    ("Charles","Nourri","M","I5F6Z7Q",30,7,11,6),
    ("Bernard","Cazanne","M","ABC",52,9,15,9);

/* =======================requete affichant le nombre de stagiaire(lignes)======================*/

    select count(*) from Note;

/* =======================requete affichant la table trié par nom======================*/

    select * from Note order by nom;

/* =======================requete affichant la table trié par age======================*/

    select * from Note order by age;

/* =======================requete affichant les personnes de +20 ans======================*/

    select * from Note where age >20;

/* =======================requete affichant les personnes entre 18 et 28 ans======================*/

    select * from Note where age >18 && age <28 order by age;

/* =======================requete affichant les personnes avec le nom commançant par D======================*/

    select * from Note where nom like "D%";

/* =======================requete affichant les prenom avec le nom commançant par M ou finissant par un e======================*/

    select * from Note where prenom like "M%" or prenom like "%e";

/* =======================requete concaténant deux colonnes et triés par age======================*/

    select concat(prenom," ",Ucase (nom)) as prenom_nom from Note order by age;

/* =======================requete concaténant deux colonnes prenom nom avec seulement la première lettre du nom======================*/

    select concat(prenom," ",substring(nom,1,1)) as prenom_nom from Note;

/* =======================requete concaténant deux colonnes prenom et nom avec seulement la première lettre du nom suivant de la note======================*/

    select concat(substring(prenom,1,1)," ",substring(nom,1,1)," ",Note1) as prenom_nom_note from Note order by Note1;

/* =======================requete concaténant deux colonnes prenom et nom avec seulement la première lettre du nom suivant de la note trié en décroissant======================*/

    select concat(substring(prenom,1,1),".",substring(nom,1,1)," ",Note1+Note2+Note3,"/60") as prenom_nom_note  from Note order by Note1+Note2+Note3 desc ;

/* =======================requete concaténant deux colonnes prenom et nom et une 2eme colonne contenant la moyenne des 3 notes======================*/

    select concat(prenom," ",nom) as prenom_nom, (Note1+Note2+Note3)/3 as moyenne from Note;

/* =======================requete moyenne classe ======================*/

    select avg(Note1+Note2+Note3)/3 as moyenne_classe from Note;

/* =======================requete affichant nom et age des personnes ayant eu plus que 12 et ayant un n dans leurs prenom ======================*/

    select concat(prenom," ",age) as prenom_age from Note where Note2 >12 and prenom like "%n%";

/* =======================requete affichant les personnes qui ont -10 et -25ans ======================*/

    select nom from Note where Note3 <10 && age <25;

/* =======================requete affichant les personnes qui ont des mot de passe inferieur à 6 caractères======================*/

    select nom as "password faible" from Note where Length(password)<6;

/* =======================requete affichant les personnes ayant 15 25 ou 50ans======================*/

    select concat(prenom,"(",age,")") as "prenom(age)" from Note where age in (15,25,50); 

/* =======================requete affichant les personnes ayant la moyenne dans toutes les matières======================*/

    select concat(prenom," ",Ucase (nom)) as prenom_nom from Note where Note1 >10 && Note2 >10 && Note3 >10;

/* =======================requete affichant les personnes étant -25 ou +45 ans avec unde note sous la moyenne======================*/

    select concat(prenom," ",Ucase (nom)) as prenom_nom from Note where (age not between 25 and 45) and (Note1 <10 || Note2 <10 || Note3 <10);

/* =======================requete affichant les sexes accompagné de la moyenne======================*/

    select sexe,avg(Note1) as moyenne from Note group by sexe;

/* =======================requete affichant les sexes accompagné de la moyenne======================*/

    select sexe,avg(Note3) as moyenne from Note group by sexe;

/* ==========================afficher la date actuelle=========================*/

    select date_format(now(),"%y-%m-%d,%h:%i:%s")as maintenant;

/* =====================jour d'écart entre une certaine date et aujourd'hui===================*/

    select datediff(now(),"1971-11-6");
    
/* =====================quel date il sera dans 63 jours===================*/

    select adddate(now(),63);

    
/* =====================combiend e jours entre===================*/

    select datediff("2019-4-1","2019-6-28");


/* =====================combien de jours depuis ma naissance===================*/

    select datediff(now(),"1995-8-25");



    