<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        // 1. Check if user is logged in
        if (!auth()->check()) {
            abort(403, 'Not logged in.');
        }

        // 2. Check if user has the required role
        if (!auth()->user()->hasRole($role)) {
            abort(403, 'You need the "' . $role . '" role to access this.');
        }

        return $next($request);
    }
}
