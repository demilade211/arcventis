const catchErrors = error => { 
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx

    errorMsg = error.response.data.message || "Something broke try again later.";

    console.error(errorMsg || "Something broke try again later.","with .response");
    
    return errorMsg
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request || "Something broke try again later.";

    console.error(errorMsg|| "Something broke try again later." );

    return errorMsg
  } else {
    // if something else happened while making the request
    errorMsg = error.message;

    console.error(errorMsg);

    return errorMsg
  }
  return errorMsg;
};

export default catchErrors;
