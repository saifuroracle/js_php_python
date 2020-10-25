<?php

use Bookstore\Domain\Book;

function autoloader($className)
{
    $lastSlash = strpos($className, '\\') + 1 ;
    $className = substr($className, $lastSlash);
    $directory = str_replace( '\\', '/', $className);
    $fileName = __DIR__.'/'.$directory.'.php';     
    require_once $fileName;
}

spl_autoload_register('autoloader');

// require_once __DIR__.'/Domain/Book.php';



$obj = new Book(null, 'algorithm 101', 'saifur');
$obj2 = new Book(1, 'algorithm 101', 'riaj');
$obj3 = new Book(100, 'algorithm 101', 'john');
$obj4 = new Book(-1, 'algorithm 101', 'imran');

echo $obj4->getLastId();  