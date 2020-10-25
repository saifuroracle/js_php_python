<?php 

namespace Bookstore\Domain\Customer;
use Bookstore\Domain\Customer;

class Basic extends Customer
{
    public function getType() 
    {
        return "Basic Type for ".$this->firstName;
    }
}

?>