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



// overriding
// 1. same className in parent and child class
// 2. child class method override the parent class method