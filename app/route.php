<?php
use App\Controllers\Home;
use Core\View;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
// For basic GET URI

$app->router->get('/', function(Request $request, Response $response) {
    $response->setContent('Hello Worldddd');
    $x  = ['dsds','sds', 'dsdsd'];
    return $response;
    // return $x;

    # OR
    # return 'Hello World!';
});

// For basic GET URI by using a Controller class.
// $app->router->controller('/home', Home::class);
$app->router->controller('/home', Home::class , ['before' => 'CheckAuth']);

// $app->router->any('/home', 'Home@main');
$app->router->group('/admin' , function($router){
    $router->get('/' , function(){
        // return $this->view('home');
        return 'admin main page ';
    });
    $router->get('/users' ,function(){
        return 'admin users';
    });
    $router->get('/settings', function(){
        return 'settings page';
    },
        ['before' => 'CheckAuth']);

});
// $app->router->get('/login' , function(){
//     return  $this->view('Home@login');
// });

$app->router->any('/login', 'Auth@login', [
    'before' => 'CheckNotAuth'
]);

$app->router->notFound(function(Request $request, Response $response) {
    return 'sayfa bulunamadı!. .. '.$response;
});
$app->router->error(function(){
    die('<h3>Sayfa bulunamadı!</h3>');
});

// $app->router->any('/login', 'Auth@login', [
//     'before' => 'CheckNotAuth'
// ]);
// $app->router->any('/register', 'Auth@register', [
//     'before' => 'CheckNotAuth'
// ]);
// $app->router->get('/logout', 'Auth@logout');
 $app->router->get('/dashboard', 'Home@dashboard');