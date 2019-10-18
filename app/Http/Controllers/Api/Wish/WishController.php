<?php

namespace App\Http\Controllers\Api\Wish;

use App\Model\Wish;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WishController extends Controller
{
    public function createWish(){
        $wishlist = new Wish();
        $wish = $wishlist->create(request()->all());

        return response()->json($wish);
    }

    public function getWishlist(){
        $wishlists = Wish::paginate(24);
        return response()->json($wishlists);
    }
}
