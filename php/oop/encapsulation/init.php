<?php

require_once __DIR__ .'/Book.php';

$obj = new Book('algorithm 101', 'saifur');

echo $obj->getTitle();  
echo $obj->title;  // not working