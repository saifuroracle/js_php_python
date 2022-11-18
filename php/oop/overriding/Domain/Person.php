<?php

namespace Bookstore\Domain;

class Person
{
    protected $firstName;
    protected $lastName;

    public function __construct($firstName, $lastName)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function getFullName() 
    {
        return strtoupper($this->firstName.' '.$this->lastName);
    }

    public function getFirstName() 
    {
        return $this->firstName;
    }

    public function getLastName() 
    {
        return $this->lastName;
    }

    
}


