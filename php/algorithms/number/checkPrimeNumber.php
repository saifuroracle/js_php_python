<?php

    // prime numbers
    function isPrime($n)
    {
        // Corner case
        if ($n <= 1)
            return false;
    
        // Check from 2 to n-1
        for ($i = 2; $i < $n; $i++)
            if ($n % $i == 0)
                return false;
    
        return true;
    }

    echo " hello world"; 
