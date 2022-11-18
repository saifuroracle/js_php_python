<?php

namespace Bookstore\Domain;

class Customer extends Person
{
    private $profession ;
    private $address ;

    public function __construct($firstName, $lastName, $profession, $address) 
    {
        parent::__construct($firstName, $lastName);

        $this->profession = $profession;
        $this->address = $address;
    }

    public function getProfession()
    {
        return $this->profession;
    }

    public function getAddress()
    {
        return $this->address;
    }


}


