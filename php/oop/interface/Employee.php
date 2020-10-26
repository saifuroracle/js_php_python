<?php 
require_once __DIR__ .'/Person.php';

class Employee implements Person
{
    private $firstName ;
    private $lastName ;

    public function __construct($firstName, $lastName)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function getFullName()
    {
        return ucfirst($this->firstName).' '.ucfirst($this->lastName);
    }
    public function getFirstName()
    {
        return ucfirst($this->firstName);
    }
    public function getLastName()
    {
        return ucfirst($this->lastName);
    }
}

?>