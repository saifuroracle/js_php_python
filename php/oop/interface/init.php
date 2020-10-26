<?php 
    require_once __DIR__ .'/Employee.php';

    $obj = new Employee('saifur', 'rahman'); 

    echo $obj->getFullName();
    echo "<br><br>";
    echo $obj->getFirstName();
    echo "<br><br>";
    echo $obj->getLastName();
?>