<?php

use Bookstore\Domain\Customer;

function autoloader($className)
{
    $lastSlash = strpos($className, '\\') + 1 ;
    $className = substr($className, $lastSlash);
    $directory = str_replace( '\\', '/', $className);
    $fileName = __DIR__.'/'.$directory.'.php';     
    require_once $fileName;
}

spl_autoload_register('autoloader');

$obj = new Customer('saifur', 'rahman', 'Software Developer', 'Bashundhara R/A');

echo $obj->getFullName();
echo "<br><br>";

echo $obj->getFirstName();
echo "<br><br>";

echo $obj->getLastName();
echo "<br><br>";

echo $obj->getProfession();
echo "<br><br>";

echo $obj->getAddress();
echo "<br><br>";



// SAIFUR RAHMAN

// saifur

// rahman

// Software Developer

// Bashundhara R/A

