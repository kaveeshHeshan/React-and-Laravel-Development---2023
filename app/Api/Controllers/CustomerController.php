<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    // Get All Customers
    public function getAllCustomers()
    {
        return Customer::all();
    }
}
