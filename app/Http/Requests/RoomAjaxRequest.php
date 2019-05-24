<?php
namespace App\Http\Requests;
use App\Http\Requests\UserFormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
class UserAjaxFormRequest extends UserFormRequest
{
    public function rules()
    {
    
        $rules = array();
        if($this->exists('title')){
            $rules['title'] = $this->validateTitle();
        }
        if($this->exists('prize')) {
            $rules['prize'] = $this->validatePrize();
        }
        
        if($this->exists('address')) {
            $rules['address'] = $this->validateAddress();
        }
        if($this->exists('description')) {
            $rules['description'] = $this->validateDescription();
        }
        return $rules;
    }

    protected function failedValidation(Validator $validator)
    {
        $errores = $validator->errors();
        $atributos = $this->attributes();
        $listaErroresPorCampo = [];
        
        foreach($atributos as $atributo => $texto){
            if($this->exists($atributo)){
                $listaErroresPorCampo[$atributo] = $errores->get($atributo);
            }
        }
        $response = new JsonResponse($listaErroresPorCampo);
        throw new ValidationException($validator, $response);
    }
}