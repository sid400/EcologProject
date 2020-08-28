<?php

//For simple path to any folder in project



//Insert into
//vendor/laravel/framework/src/Illuminate/Foundation/helpers.php

//MY CHANGES SID400
if (! function_exists('BB_asset')) {
    /**
     * Generate an asset path for the application.
     *
     * @param  string  $path
     * @param  bool|null  $secure
     * @return string
     */
    function BB_asset($path, $secure = null)
    {
        $addPath = 'LandingPages/BB/';
        return app('url')->asset($addPath . $path, $secure);
    }
}
//END MY CHANGES SID400
