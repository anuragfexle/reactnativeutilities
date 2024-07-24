/* this functions are used to call the APIs, no need to call the fetch on every screen, just use this file and import wherever you want to call the APIs  */


/** GET request function ES-6, 
  @params
  url
  headers
*/
const fetchServerDataGet = async (url, headers) => {
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    return await response;
  } catch (error) {
    console.error('Error ==> ', error);
  }
};

/** POST request function ES-6, with simple Object and form Data, 
  @params
  url,
  requestBody,
  headers,
  isFormData
*/
const fetchServerDataPost = async (url, requestBody, headers, isFormData) => {
  let request;
  if (isFormData) {
    request = requestBody;
  } else {
    request = JSON.stringify(requestBody);
  }

  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: request,
    });
    return await response; // response.json(), status, etc
  } catch (error) {
    console.error('error', error);
  }
};

/** PUT request function ES-6, to update the data, 
  @params
  url,
  requestBody,
  headers
*/
const fetchServerDataPut = async (url, requestBody, headers) => {
  try {
    let response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    return await response;
  } catch (error) {
    console.error(error);
  }
};

/** DELETE request function ES-6, to delete the data, 
  @params
  url,
  headers
*/
const fetchServerDataDelete = async (url,headers) => {
  try {
    let response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
    });
    return await response;
  } catch (error) {
    console.error(error);
  }
};

/** DELETE request function ES-6, to delete the data with a requestbody,
  @params
  url,
  requestBody,
  headers
*/
const fetchServerDataDeleteWithBody = async (url,headers,requestBody) => {
  try {
    let response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    return await response;
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchServerDataGet,
  fetchServerDataPost,
  fetchServerDataPut,
  fetchServerDataDelete,
  fetchServerDataDeleteWithBody,
  fetchServerDataPostFormData,
};
