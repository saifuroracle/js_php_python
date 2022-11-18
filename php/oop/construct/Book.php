<?php

class Book
{
    public $title;
    public $author;

    public function __construct($title, $author) // auto called when it is instantiated/referenced/object created
    {
        $this->title  = $title;
        $this->author  = $author;
    }

    public function getTitle()
    {
        return $this->title;
    }
    
}

$obj = new Book('algorithm 101', 'saifur');

echo $obj->title;
echo '<br><br>';
echo $obj->getTitle();
