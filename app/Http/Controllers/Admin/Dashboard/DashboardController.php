<?php

namespace App\Http\Controllers\Admin\Dashboard;

use DB;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{

	public $request;
	

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

	public function index()
	{
		return view('admin.dashboard.view');
	}
    public function settings()
	{
		return view('admin.settings.view');
	}
}