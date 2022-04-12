<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use App\Models\Answer;

class APIController {

	public function getAnswers() {
		$answers = Answer::select('*', \DB::raw('count(*) as total'))->groupBy('answer')->get();
		$totalAnswers = $answers->sum('total');
		$response = [];
		foreach ($answers as $answer) {
			$response[$answer->answer] = round(($answer->total / $totalAnswers) * 100, 2).'% - '.$answer->total.' results';
		}
		return response()->json(['data' => $response]);
	}

	public function submitAnswer(Request $request) {
		$validator = Validator::make($request->all(), [
			'answer' => 'required'
		]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->toArray()]);
        }

        Answer::create([
        	'answer' => $request->answer
        ]);

		return response()->json(['success' => 'ok']);
	}
}