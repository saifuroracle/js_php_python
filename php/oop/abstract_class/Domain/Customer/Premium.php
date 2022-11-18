<?php 

namespace Bookstore\Domain\Customer;
use Bookstore\Domain\Customer;

class Premium extends Customer
{
    public function getType() 
    {
        return "Premium Type";
    }
}

?>