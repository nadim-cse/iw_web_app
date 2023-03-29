<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
       
        // view()->composer('*',function($view) {
        //     $sidebarMenuItems = [

        //         'dashboard' => [
        //             'icon' => 'fad fa-chart-pie',
        //             'name' => 'Dashboard',
        //             'route' => 'dashboard',
        //             'is_dropdown' => 1
                
        //         ],
        //         'ecommerce' => [
        //             'icon' => 'fad fa-envelope-open-text',
        //             'name' => 'eCommerce',
        //             'route' => 'settings',
        //             'is_dropdown' => 1
                
        //         ]
        //     ];
        //     $view->with('sidebarMenuItems',$sidebarMenuItems);
        // });
    }
}
