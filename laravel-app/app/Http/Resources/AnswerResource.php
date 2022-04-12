<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnswerResource extends JsonResource {

    public function toArray($request) {

        return [
            'answer'        => $this->answer,
            'total'         => $this->total
        ];
    }
}