<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opdracht 1</title>
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
        echo "<p id = 'naam'>" . $naam . "</p>";
        echo "<p id = 'nummer'>" . $studentnummer . "</p>";
        echo "<p id = 'klas'>" . $klas . "</p>";
        foreach($leerlijnen as $key => $value){
            echo  "<p id='leerlijnen'>" . $key . " " . $value . "</p>";
        }   
        
    ?>
</body>
</html>