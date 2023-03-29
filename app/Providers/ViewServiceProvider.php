<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $sidebarMenuItems = [

            'dashboard' => [
                'icon' => 'fad fa-chart-pie',
                'name' => 'Dashboard',
                'route' => 'dashboard',
                'is_dropdown' => 1,
                'title' => '',
                'id' => 'ecommerce',
                'parent' => ''
            
            ],
            'ecommerce' => [
                'icon' => 'fad fa-envelope-open-text',
                'name' => 'eCommerce',
                'route' => 'settings',
                'is_dropdown' => 1,
                'title' => 'ECOMMERCE',
                'id' => 'ecommerce',
                'parent' => ''
            
            ],
            // 'order' => [
            //     'icon' => 'fad fa-envelope-open-text',
            //     'name' => 'eCommerce',
            //     'route' => 'settings',
            //     'is_dropdown' => 1,
            //     'title' => 'ECOMMERCE',
            //     'id' => '',
            //     'parent' => 'ecommerce'
            
            // ]
        ];
        View::share('sidebarMenuItems', $sidebarMenuItems);
    }
}