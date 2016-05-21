CREATE TABLE academic (
	id					SERIAL 	PRIMARY KEY,
	anny				integer,
	districte		integer,
	barri				varchar(50),
	senseDones			integer,
	primarisDones		integer,
	secundarisDones	integer,
	mitjansDones		integer,
	superiorsDones	integer,
	senseHomes			integer,
	primarisHomes		integer,
	secundarisHomes	integer,
	mitjansHomes		integer,
	superiorsHomes	integer
);