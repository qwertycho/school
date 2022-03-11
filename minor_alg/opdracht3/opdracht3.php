<?php
if (isset($_POST['submit'])){
    $naam = $_POST['naam'];
    $studentnummer = $_POST['studentnummer'];
    $klas = $_POST['klas'];
    $leerlijn1 = $_POST['leerlijn1'];
    $leerlijn2 = $_POST['leerlijn2'];
    $leerlijn3 = $_POST['leerlijn3'];
    $leerlijn4 = $_POST['leerlijn4'];

    $cijfer1 = $_POST['cijfer1'];
    $cijfer2 = $_POST['cijfer2'];
    $cijfer3 = $_POST['cijfer3'];
    $cijfer4 = $_POST['cijfer4'];

    $totaalCijfers = $cijfer1 + $cijfer2 + $cijfer3 + $cijfer4;
    $gemiddelde = $totaalCijfers / 4;

    $leerlijnen = array(
        $leerlijn1 => $cijfer1,
        $leerlijn2 => $cijfer2,
        $leerlijn3 => $cijfer3,
        $leerlijn4 => $cijfer4,
    );

    echo "<p id='naam'>". "Jouw naam is: " . $naam . "</p>";
    echo  "<p id='studentnummer'>". "Jouw studentnummer is: " . $studentnummer . "</p>";
    echo "<p id='klas'>". "Jouw klas is: " . $klas . "</p>";

    echo "<p> Jouw leerlijnen en cijfers zijn: </p>";
    foreach($leerlijnen as $key => $value){
        echo  "<p id='leerlijnen'>" . $key . " " . $value . "</p>";
    }   

    if ($gemiddelde < 5.5) {
        echo "<p id='rood' style='color:red;'>" . "Jouw gemiddelde is: " . $gemiddelde . "</p>";
    } else{
        echo "<p id='groen' style='color:green;'>" . "Jouw gemiddelde is: "  . $gemiddelde . "</p>";
    } ;
    
} else{
    echo "nee";
}
?>