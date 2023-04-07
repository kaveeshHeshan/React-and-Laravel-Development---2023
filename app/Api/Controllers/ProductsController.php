<?php

namespace App\Api\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    // Get all products
    public function getAllProducts()
    {
        return Product::all();
    }

    // Store a new Product
    public function storeProduct(Request $request)
    {
        $data = $request->only('name', 'category', 'brand', 'description', 'price', 'quantity', 'image');

        $validator =  Validator::make($data,[
            'name' => 'required',
            'category' => 'required',
            'brand' => 'required',
            'price' => 'required|numeric|gt:0',
            'quantity' => 'required|numeric|gte:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
        ],[], [
            'name' => 'Product Name',
            'category' => 'Product Category',
            'brand' => 'Brand',
            'price' => 'Price',
            'quantity' => 'Available Quantity',
            'image' => 'Product Image',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()->first()], 400);
        }

        $id = 'PR'.date('mdi').mt_rand(10000,99999);

        $fileNameToStore_image = null;

        if($request->image != null){

            $filenameWithExt_image = $request->file('image')->getClientOriginalName();

            $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);

            $extension_image = $request->file('image')->getClientOriginalExtension();

            $fileNameToStore_image = $filename_image.'_'.time().'.'.$extension_image;

            $path_image = $request->file('image')->storeAs('public/products', $fileNameToStore_image);
        }

        Product::create([
            'product_id' => $id,
            'name' => $request->name,
            'category' => $request->category,
            'brand' => $request->brand,
            'description' => $request->description,
            'price' => $request->price,
            'available_quantity' => $request->quantity,
            'image' => $fileNameToStore_image,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Product created Successfully',
        ], 200);
    }

    // View a new Product
    public function viewProduct($id)
    {
        $count = Product::where('product_id',$id)->count();

        if($count != 0){

            $product = Product::where('product_id',$id)->first();

            return response()->json([
                'success' => true,
                'data' => $product,
            ],200);

        }else{
            return response()->json([
                'success' => false,
                'message' => 'No Product found.',
            ], 404);
        }
    }

    // Update an exisitng Product
    public function updateProduct(Request $request)
    {
        $data = $request->only('name', 'category', 'brand', 'description', 'price', 'quantity', 'image');

        $validator =  Validator::make($data,[
            'name' => 'required',
            'category' => 'required',
            'brand' => 'required',
            'price' => 'required|numeric|gt:0',
            'quantity' => 'required|numeric|gte:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
        ],[], [
            'name' => 'Product Name',
            'category' => 'Product Category',
            'brand' => 'Brand',
            'price' => 'Price',
            'quantity' => 'Available Quantity',
            'image' => 'Product Image',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()->first()], 400);
        }

        $product = Product::where('product_id',$id)->first();

        $product->name = $request->name;

        $product->category = $request->category;

        $product->description = $request->description;

        $product->brand = $request->brand;

        $product->price = $request->price;

        $product->available_quantity = $request->quantity;

        if($request->image != null){

            $filenameWithExt_image = $request->file('image')->getClientOriginalName();

            $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);

            $extension_image = $request->file('image')->getClientOriginalExtension();

            $fileNameToStore_image = $filename_image.'_'.time().'.'.$extension_image;

            $path_image = $request->file('image')->storeAs('public/products', $fileNameToStore_image);

            $product->image = $fileNameToStore_image;
        }

        $product->update();

        return response()->json([
            'success' => true,
            'message' => 'Product Updated Successfully',
        ],200);
    }

    // destroy/delete a Product
    public function deleteProduct(Request $request)
    {
        $count = Product::where('product_id',$id)->count();

        if($count != 0){

            $product = Product::where('product_id',$id)->delete();

            return response()->json([
                'success' => true,
                'data' => 'Product deleted successfully.'
            ],200);

        }else{
            return response()->json([
                'success' => false,
                'message' => 'No Product found.',
            ], 404);
        }
    }
}
