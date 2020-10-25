<?php

namespace Bookstore\Domain;

class Book
{
    private static $lastId = 0;
    private $id;
    private $title;
    private $author;

    public function __construct($id, $title, $author) 
    {
        $this->title  = $title;
        $this->author  = $author;

        if($id==null)
        {
            $this->id = $id;
        }
        else
        {
            $this->id = $id;
            if ($id>self::$lastId) 
            {
                self::$lastId = $id;
            } 
            
        }
    }

    public static function getLastId()
    {
        return self::$lastId;
    }

    
    
}


