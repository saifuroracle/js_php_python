<?php

require_once __DIR__ .'/Book.php';

$obj = new Book(null, 'algorithm 101', 'saifur');
$obj2 = new Book(1, 'algorithm 101', 'riaj');
$obj3 = new Book(100, 'algorithm 101', 'john');
$obj4 = new Book(-1, 'algorithm 101', 'imran');

// echo $obj4->getLastId();  
echo Book::getLastId();  