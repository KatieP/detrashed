<?php

  //ajax processing page

  /*
    processing algorithm
    --------------------
    1.) Get the input
    2.) 
  */

  //echo print_r($GLOBALS,true);

  if(isset($GLOBALS["HTTP_RAW_POST_DATA"])){
    $data = json_decode($GLOBALS["HTTP_RAW_POST_DATA"]);
    if($data != "" && $data != null){
      $JSON = print_r($data, true);
      echo print_r("DATA RECEIVED: " . $JSON, true);
    }
  }