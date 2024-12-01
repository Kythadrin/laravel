<?php

declare(strict_types=1);

namespace App\Service;

use App\DTO\Input\LoginInput;
use App\DTO\Input\RegistrationInput;
use App\DTO\Output\LoginOutput;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function create(RegistrationInput $registrationInput): User
    {
        /** @var User $user */
        $user = User::create([
            'name' => $registrationInput->name,
            'email' => $registrationInput->email,
            'password' => Hash::make($registrationInput->password),
        ]);

        return $user;
    }

    public function auth(LoginInput $loginInput): LoginOutput | false
    {
        $user = User::where('email', $loginInput->email)->first();

        if ($user && Hash::check($loginInput->password, $user->password)) {
            $token = $user->createToken('API Token')->plainTextToken;

            return new LoginOutput(
                $user->id,
                $user->name,
                $user->email,
                $token
            );
        }

        return false;
    }
}
