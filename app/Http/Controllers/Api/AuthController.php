<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\DTO\Input\LoginInput;
use App\DTO\Input\RegistrationInput;
use App\DTO\Output\RegistrationOutput;
use App\Service\UserService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function __construct(
        private readonly UserService $userService,
    ) {
    }

    public function register(Request $request): JsonResponse
    {
        try {
            $registrationData = RegistrationInput::fromArray($request->all());

            $validator = Validator::make((array) $registrationData, [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            if ($validator->fails()) {
                return new JsonResponse(
                    $validator->errors(),
                    Response::HTTP_BAD_REQUEST,
                );
            }

            $user = $this->userService->create($registrationData);

            return new JsonResponse(new RegistrationOutput(
                $user->id,
                $user->name,
                $user->email,
                $user->createToken('API Token')->plainTextToken,
            ), Response::HTTP_CREATED);
        } catch (Exception $exception) {
            return new JsonResponse(
                ['message' => $exception->getMessage()],
                Response::HTTP_INTERNAL_SERVER_ERROR,
            );
        }
    }

    public function login(Request $request): JsonResponse
    {
        try {
            $loginData = LoginInput::fromArray($request->all());

            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);

            $loginData = $this->userService->auth($loginData);
            if (!$loginData) {
                return new JsonResponse(
                    ['message' => 'Invalid credentials'],
                    Response::HTTP_UNAUTHORIZED,
                );
            }

            return new JsonResponse($loginData, Response::HTTP_OK);
        } catch (ValidationException $exception) {
            return new JsonResponse(
                $exception->errors(),
            Response::HTTP_UNPROCESSABLE_ENTITY
            );
        } catch (Exception $exception) {
            return new JsonResponse(
                ['message' => $exception->getMessage()],
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    public function logout(Request $request): JsonResponse
    {
        try {
            $request->user()->tokens()->delete();

            return new JsonResponse(
                ['message' => 'Logged out successfully'],
                Response::HTTP_OK
            );
        } catch (Exception $exception) {
            return new JsonResponse(
                ['errors' => $exception->getMessage()],
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}
