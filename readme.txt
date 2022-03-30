CLI inputs:

1. Adding a Driver

#   npm start -- --add --driver "HAM"

2. Adding a Driver and a Team

#   npm start -- --add  --driver "Alonso" --team "Ferrari"

3. Adding a Driver, a Team, and an amount of points.

#   npm start -- --add  --driver "Sainz" --team "Ferrari" --points "33"

4. Adding a Driver, a Team, points, and the Power unit.

#   npm start -- --add  --driver "Sainz" --team "Ferrari" --points "33" --powerunit "Ferrari 066/7"

5. Listing Drivers

#   npm start -- --list 

6. Updating a Driver

#   npm start -- --update "Ham" "Merc"

// WILL CURRENTLY UPDATE SELECTED DRIVER TO PLACEHOLDER TEXT

7. Deleting a Driver

#   npm start -- --delete --driver "HAM"

//----------------------------------------------------//

FUNCTIONALITY TO ADD - STRETCH GOALS

1. Updating drivers/teams/points/powerunit to a user input, instead of placeholder text being hardcoded.

2. Allow for filtered search results (by driver/team/engine)


//----------------------------------------------------//

// COMMAND LINE COPY PASTE TO ENTER CURRENT STANDINGS AS OF 30.03.2022

 npm start -- --add  --driver "Zhou Guanyu" --team "Alfa Romeo-Ferrari" --points "33" --powerunit "Ferrari 066/7"

 npm start -- --add  --driver "Valterri Bottas" --team "Alfa Romeo-Ferrari" --points "1" --powerunit "Ferrari 066/7"

 npm start -- --add  --driver "Kevin Magnussen" --team "Haas-Ferrari" --points "12" --powerunit "Ferrari 066/7"

 npm start -- --add  --driver "Mick Schumacher" --team "Haas-Ferrari" --points "0" --powerunit "Ferrari 066/7"

 npm start -- --add  --driver "Fernando Alonso" --team "Alphine-Renault" --points "2" --powerunit "Renault E-Tech RE22"

 npm start -- --add  --driver "Esteban Ocon" --team "Alphine Renault" --points "14" --powerunit "Renault E-Tech RE22"

 npm start -- --add  --driver "Nico Hulkenberg (Reserve Driver)" --team "Aston Martin Aramco-Mercedes" --points "0" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Lance Stroll" --team "Aston Martin Aramco-Mercedes" --points "0" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Sebastian Vettel" --team "Aston Martin Aramco-Mercedes" --points "0" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Daniel Ricciardo" --team "McLaren-Mercedes" --points "0" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Lando Norris" --team "McLaren-Mercedes" --points "6" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Lewis Hamilton" --team "Mercedes" --points "16" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "George Russell" --team "Mercedes" --points "22" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Nicholas Latifi" --team "Williams-Mercedes" --points "0" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Alex Albon" --team "Williams-Mercedes" --points "0" --powerunit "Mercedes-AMG F1 M13"

 npm start -- --add  --driver "Max Verstappen" --team "Red Bull Racing-RBPT" --points "25" --powerunit "Red Bull RBPTH001"

 npm start -- --add  --driver "Sergio Perez" --team "Red Bull Racing-RBPT" --points "12" --powerunit "Red Bull RBPTH001"

 npm start -- --add  --driver "Pierre Gasly" --team "AlphaTauri-RBPT" --points "4" --powerunit "Red Bull RBPTH001"

 npm start -- --add  --driver "Yuki Tsunoda" --team "AlphaTauri-RBPT" --points "4" --powerunit "Red Bull RBPTH001"