<?php

declare(strict_types=1);

namespace App\DTO\Input;

class RegistrationInput
{
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
        public string $password_confirmation
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['name'],
            $data['email'],
            $data['password'],
            $data['password_confirmation']
        );
    }
}
