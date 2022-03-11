<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opdracht 2</title>
    <style>
        #naam{
            color: blue;
        }
        #leerlijnen{
            color: green;
        }
    </style>
</head>
<body>
    <?php
        $naam = "Tycho";
        $studentnummer = 82768;
        $klas = "d1e1";
        $leerlijnen = array(
            "basis" => 7,
            "beheer" => 7,
            "beroep" => 7.5,
            "rekenen" => 8,
        );
        $mijnCijfers = array(
            "basis" => 7,
            "beheer" => 7,
            "beroep" => 7.5,
            "rekenen" => 8,
        );

        echo "<h1 id = 'naam'>" . $naam . "</h1>";
        echo "<h3 id = 'nummer'>" . $studentnummer . "</h3>";
        echo "<h3 id = 'klas'>" . $klas . "</h3>";
        foreach($leerlijnen as $key => $value){
            echo  "<p id='leerlijnen'>" . $key . " " . $value . "</p>";
        }   
        echo "<p id='cijfers'> Mijn cijfers zijn:" ;
        foreach($mijnCijfers as $value){
            echo "," . $value;
        }   

        echo "</p>"
        
    ?>
</body>
</html>