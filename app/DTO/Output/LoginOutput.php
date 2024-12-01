<?php

declare(strict_types=1);

namespace App\DTO\Output;

class LoginOutput
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $token
    ) {
    }
}
