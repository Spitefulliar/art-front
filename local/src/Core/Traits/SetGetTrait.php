<?php

namespace Core\Traits;


trait SetGetTrait
{
    public function get($var) {
        return $this->{$var};
    }

    public function set($var, $value) {
        $this->{$var} = $value;
        return $this;
    }
}