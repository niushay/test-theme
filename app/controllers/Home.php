<?php
namespace App\Controllers;


use Core\Controller; 
 
class Home extends Controller
{
    public function main()
    {
        // return 'naber mainim ben';
        return $this->view('home', ['name' => 'fatih']);
    }
 
    public function deneme(){
        return 'naber ben denemeler';
        
    }
    #/home/deneme-tahtasi
    public function denemeTahtasi(){
        return 'naber tahtalar';
        
    }

    public function dashboard()
    {
        return $this->view('dashboard');
    }
}



