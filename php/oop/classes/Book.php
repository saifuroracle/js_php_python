<?php

class Book
{
    public $title;
    public $author;

    public function getTitle()
    {
        return $this->title;
    }
    
}

$obj = new Book;


$obj->title = 'PHP oop 101';
$obj->author = 'Saifur';

// var_dump($obj);
echo $obj->title;
echo '<br><br>';
echo $obj->getTitle();
