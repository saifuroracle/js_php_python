<?php

class Book
{
    public $title;
    public $author;

    public function __construct($title, $author) 
    {
        $this->title  = $title;
        $this->author  = $author;
    }

    public function getTitlePublic()
    {
        return $this->title;
    }

    protected function getTitleProtected()
    {
        return $this->title;
    }

    private function getTitlePrivate()
    {
        return $this->title;
    }
    
}

$obj = new Book('algorithm 101', 'saifur');

echo $obj->getTitlePublic().'<br><br>';
echo $obj->getTitleProtected().'<br><br>';  // not working
echo $obj->getTitlePrivate().'<br><br>';    // not working
