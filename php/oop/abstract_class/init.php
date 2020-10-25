<?php

use Bookstore\Domain\Customer;
use Bookstore\Domain\Customer\Basic;
// use Bookstore\Domain\Customer\Premium;

function autoloader($className)
{
    $lastSlash = strpos($className, '\\') + 1 ;
    $className = substr($className, $lastSlash);
    $directory = str_replace( '\\', '/', $className);
    $fileName = __DIR__.'/'.$directory.'.php';     
    require_once $fileName;
}

spl_autoload_register('autoloader');

$obj = new Basic('saifur', 'rahman', 'Software Developer', 'Bashundhara R/A');


echo $obj->getType();