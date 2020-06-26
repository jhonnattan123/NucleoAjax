function Ajax(msj) {

    //define default error response
    const DEF_CALL_ERROR = {
        success: false,
        message: "call_error",
        response: [],
        code: 404
    };

    //original ajax response
    const DEF_CONTEN_TYPE = "application/x-www-form-urlencoded;charset=UTF-8";

    //extract data
    var { contentType, processData, dataType, data, url, type } = msj;

    //format data according msj
    if (typeof contentType === 'undefined') {
        contentType = DEF_CONTEN_TYPE;
    }
    if (typeof processData === 'undefined') {
        processData = true;
    }
    if (!dataType) {
        dataType = false;
    }
    if (!data) {
        data = false;
    }

    // generate obj to ajax request
    var objAjaxConfig = {
        url,
        type,
        data,
        processData,
        contentType
    };

    //ejecute ajax
    var objAjaxPetition = jQuery.ajax(objAjaxConfig).then(JSON_RES => {

        return JSON_RES;

        //catch if error and send default message
    }).catch(error => {

        console.log(error)
        if (error.responseJSON) {
            return error.responseJSON;
        } else {
            return DEF_CALL_ERROR;
        };

    });

    return objAjaxPetition;
};
