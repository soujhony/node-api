'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
|
*/
Route.group(() => {
    /*
    |--------------------------------------------------------------------------
    | API - Authentication
    |--------------------------------------------------------------------------
    */
    Route.post('/auth/login', 'Api/AuthController.login');
    Route.post('/auth/register', 'Api/AuthController.register');
    Route.post('/auth/confirm', 'Api/AuthController.confirmEmail');
    Route.post('/auth/token/refresh', 'Api/AuthController.refreshToken');
    Route.post('/auth/logout', 'Api/AuthController.logout');

    /*
    |--------------------------------------------------------------------------
    | API - Password Control
    |--------------------------------------------------------------------------
    */
    Route.post('/password/reset/request', 'Api/PasswordController.requestReset');
    Route.post('/password/reset_from_token/:email/:token', 'Api/PasswordController.resetPassword');
  
    /*
    |--------------------------------------------------------------------------
    | API - User
    |--------------------------------------------------------------------------
    */
   Route.get('/users', 'Api/UserController.index');
   Route.get('/user/:id', 'Api/UserController.show');
  }).prefix('api/v1');

  Route.any('*', ({ view }) => view.render('frontend'))