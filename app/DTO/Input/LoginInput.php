<?php

declare(strict_types=1);

namespace App\DTO\Input;

class LoginInput
{
    public function __construct(
        public string $email,
        public string $password
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['email'],
            $data['password'],
        );
    }
}
