<?php

namespace Bookstore\Domain;

abstract class Customer extends Person
{
    public $profession ;
    public $address ;

    abstract public function getType();

    public function __construct($firstName, $lastName, $profession, $address) 
    {
        parent::__construct($firstName, $lastName);

        $this->profession = $profession;
        $this->address = $address;
    }



}


