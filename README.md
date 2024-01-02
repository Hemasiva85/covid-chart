Setup table:
==========
CREATE TABLE covidcountry (
CountryRegion varchar(255),
Confirmed int,
Deaths int,
Recovered int,
Active int,
Newcases int,
Newdeaths int,
Newrecovered int,
Deaths100Cases float,
Recovered100Cases float,
Deaths100Recovered float,
Confirmedlastweek int,
oneweekchange int,
oneweekincrease float,
WHORegion varchar(255)
);
insert into  covidcountry ( CountryRegion ,Confirmed ,Deaths ,Recovered ,Active ,Newcases ,Newdeaths ,Newrecovered ,Deaths100Cases ,Recovered100Cases ,Deaths100Recovered ,Confirmedlastweek ,oneweekchange ,oneweekincrease ,WHORegion )
values ('Australia',15303,167,9311,5825,368,6,137,1.09,60.84,1.79,12428,2875,23.13,'Western Pacific'),
('Austria',20558,713,18246,1599,86,1,37,3.47,88.75,3.91,19743,815,4.13,'Europe'),
('Azerbaijan',30446,423,23242,6781,396,6,558,1.39,76.34,1.82,27890,2556,9.16,'Europe'),
('Bahamas',382,11,91,280,40,0,0,2.88,23.82,12.09,174,208,119.54,'Americas'),
('Bahrain',39482,141,36110,3231,351,1,421,0.36,91.46,0.39,36936,2546,6.89,'Eastern Mediterranean'),
('Bangladesh',226225,2965,125683,97577,2772,37,1801,1.31,55.56,2.36,207453,18772,9.05,'South-East Asia'),
('Barbados',110,7,94,9,0,0,0,6.36,85.45,7.45,106,4,3.77,'Americas'),
('Belarus',67251,538,60492,6221,119,4,67,0.8,89.95,0.89,66213,1038,1.57,'Europe')

Setup for Chart application start:
===============================
Need to install nodeJS
Need to install angularcli
node server.js
ng serve 
