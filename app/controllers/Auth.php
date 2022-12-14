<?php
namespace App\Controllers;
use Core\Controller; 

class Auth extends Controller
{
    public function main()
    {
        // return 'naber mainim ben';
        return $this->view('home', ['name' => 'fatih']);
    }
    public function login()
    {
        return $this->view('login');    
    }   
}