CREATE DATABASE IF NOT EXISTS Exercice3 CHARACTER SET utf8;

use Exercice3;

CREATE TABLE Commandes(
    numcommande int not Null primary key auto_increment,
    numclient int not null,
    numvendeur int not null, 
    montant decimal(5,2) not null,
    datecmd date not null,
    foreign key (numvendeur) references Vendeurs(numvendeur)

);

insert into Commandes (numcommande,numclient,numvendeur,montant,datecmd)
values
(25,101,51,112.2,"2018-10-05"),
(26,107,52,75.25,"2019-02-11"),
(27,105,53,63.25,"2019-01-12"),
(31,101,52,63.25,"2019-02-12"),
(45,111,52,45,"2019-01-11"),
(46,122,52,40,"2019-02-25"),
(47,117,55,80,"2019-01-30"),
(49,121,57,81.25,"2018-11-07"),
(50,123,51,50,"2018-11-06"),
(52,105,62,25,"2019-02-11"),
(53,112,66,25.39,"2019-02-02"),
(55,107,79,31,"2019-02-11"),
(59,119,62,9.8,"2019-02-09"),
(61,124,51,70,"2019-01-15"),
(62,123,54,63,"2019-01-31");

CREATE TABLE Vendeurs  (
    numvendeur int not Null primary key auto_increment,
    nomvendeur varchar(16) not Null
    
);

insert into Vendeurs (numvendeur,nomvendeur)
values
(51,"etienne"),
(52,"mathieu"),
(53,"stéphanie"),
(54,"tony"),
(55,"david"),
(57,"suzette"),
(62,"romain"),
(66,"sylvie"),
(79,"gilles");

/* Q1 */select Sum(montant) as sommecmd from Commandes;

/* Q2 */select avg(montant) as moyennecmd from Commandes;

/* Q3 */select count(numcommande) as nombrecommande from Commandes;

/* Q4 */select count( distinct numclient) as nombredeclientayantaumoins1commande from Commandes;

/* Q5 */select count( distinct numclient) as nombredevendeurayantrealiseunecommande from Commandes;

/* Q6 */select numclient from Commandes group by numclient having count(numclient) >=2;

/* Q7 */select numvendeur from Commandes where montant >65;

/* Q8 */select numvendeur,max(montant) from Commandes group by numvendeur;

/* Q9 */select numclient,max(montant) from Commandes where numclient Between 105 and 120; 

/* Q10 */select sum(montant) as "montant des commandes du 11-02-2019" from Commandes where datecmd = "2019-02-11";

/* Q11 */select numcommande, nomvendeur from Commandes as a left join Vendeurs as b on a.numvendeur = b.numvendeur group by nomvendeur; 

/* Q12 */select nomvendeur, max(datecmd) from Vendeurs as a right join Commandes as b on a.numvendeur=b.numvendeur group by nomvendeur;

/* Q13 */select nomvendeur, avg(montant) from Commandes as a left join Vendeurs as b on a.numvendeur=b.numvendeur group by nomvendeur;


/*======================= 2 EME PARTIE ==================================*/

Create database if not exists Exo3partie2 character set utf8;

use Exo3partie2;

create table Voitures(
    idvoiture int not null primary key auto_increment,
    marque varchar(15) not null,
    matricule varchar(15) not null
    );

create table Services(
    idservice int not null primary key auto_increment,
    nomservice varchar(10) not null
);

create table FilialeA(
    idpersonnes int not null primary key auto_increment,
    nom varchar(15) not null,
    prenom varchar(15) not null,
    email varchar(26) not null,
    numService int null,
    numVoiture int null,
    foreign key (numService) references Services(idservice),
    foreign key (numVoiture) references Voitures(idvoiture)
);

create table FilialeB(
    idpersonnes int not null primary key auto_increment,
    nom varchar(15) not null,
    prenom varchar(15) not null,
    email varchar(26) not null,
    numService int null,
    numVoiture int null,
    foreign key (numService) references Services(idservice),
    foreign key (numVoiture) references Voitures(idvoiture)
);

insert into Voitures(idvoiture,marque,matricule)
values
(1,"Renault","951 KIO 45"),
(2,"Fiat","741 MIP 65");

insert into Services(idservice,nomservice)
values
(1,"compta"),
(2,"vente"),
(3,"support");

insert into FilialeA(idpersonnes,nom,prenom,email,numService,numVoiture)
values
(1,"Pauland","Marc","p.marc@nimps.com",1,1),
(2,"Taralou","Dimitri","z.tar.dim@zolka.com",3,1),
(3,"Marchand","Aline","m.aline@duvent.fr",2,2),
(4,"Zolak","Pierre","z.pierre@purple.com",1,1),
(5,"Laporte","Martine","l.martine",null,null);

insert into FilialeB(idpersonnes,nom,prenom,email,numService,numVoiture)
values
(1,"Marliax","Jean","m.jean@nloips.com",3,1),
(2,"zappy","Claudine","z.c.200@vayent.com",1,2),
(3,"Taralou","Dimitri","z.tar.dim@zolka.com",3,1),
(4,"Zolak","Pierre","z.pierre@purple.com",1,1),
(5,"Frenesti","Etienne","fen_eti_fr@free.fr",null,1);

/* Q1 créer une requete d'une colonne de la forme 'Prenom_NOM' triée par prénom pour la filialle A */ 

select concat(prenom,"_",Ucase(nom)) as "prenom_NOM" FROM FilialeA group by prenom;

/* Q2 créer une requete d'une colonne de la forme 'Prenom_NOM' triée par prénom pour la filialle B */ 

select concat(prenom,"_",Ucase(nom)) as "prenom_NOM" FROM FilialeB group by prenom;

/* Q3 Créer une liste qui regroupe le nom et le prenom de toutes les personnes de toutes les filiale.*/ 

select nom,prenom from FilialeA union select nom,prenom from FilialeB;

/* Q4  Créer une requete qui liste les personnes qui n'ont pas de service affécté.*/ 

select nom,prenom from FilialeA where numService is null union select nom,prenom from FilialeB where numService is null;

/* Q5 Créer une requete qui liste les personne de la filiale A qui ne travaillent pas dans la filiale B*/ 

select nom,prenom from FilialeA where (nom,prenom) not in (select nom,prenom from FilialeB );

/* Q6 Créer une requete qui liste les personnes de la filiale A ou la filiale B mais pas pour les deux filiales.*/

 select nom,prenom from FilialeA where (nom,prenom) not in (select nom,prenom from FilialeB ) 
            Union 
            select nom,prenom from FilialeB where (nom,prenom) not in (select nom,prenom from FilialeA );

/* Q7 Creer une requete qui liste les personnes des deux filiales : nom, prenom, nom du service.*/ 

select nom,prenom,nomservice from FilialeA as a left join Services as b on a.numService = b.idservice
            union 
            select nom,prenom,nomservice from FilialeB as c left join Services as d on c.numService = d.idservice;

/* Q8 Creer une requete qui liste : 'prenom.N ',matricule de la voiture.*/ 

select concat(prenom,".",substring(nom,1,1)),matricule from FilialeA as a left join Voitures as b on a.numVoiture = b.idvoiture
            union 
            select concat(prenom,".",substring(nom,1,1)),matricule from FilialeB as c left join Voitures as d on c.numVoiture = d.idvoiture;

/* Q9 Creer une requete qui liste 'P.nom',nom du service, matricule de la voiture.*/

select concat(substring(Ucase(prenom),1,1),".",lower(nom)),nomService,matricule from FilialeA 
as a left join Voitures as b on a.numVoiture = b.idvoiture 
join Services as c on a.numService = c.idservice
            union 
select concat(substring(Ucase(prenom),1,1),".",lower(nom)),nomService,matricule from FilialeB 
as d left join Voitures as e on d.numVoiture = e.idvoiture
join Services as f on d.numService = f.idservice;

/* Q10 Creer une requete qui affiche le nombre de personnes afféctés à chaque voiture.*/

SELECT count(concat(nom,"_",prenom)),matricule 
from (select nom,prenom,matricule from FilialeA as a join Voitures as b on a.numVoiture = b.idvoiture 
    union   
    select nom,prenom,matricule from FilialeB as c join Voitures as d on c.numVoiture = d.idvoiture) as totaux
group by matricule;

/* Q11 creer une requete qui affiche le nombre de personnes afféctés à un service */


SELECT count(concat(nom,"_",prenom)),nomService 
from (select nom,prenom,nomService from FilialeA as a join Services as b on a.numService = b.idservice
    union   
    select nom,prenom,nomService from FilialeB as c join Services as d on c.numService = d.idservice) as totaux
group by nomService;
