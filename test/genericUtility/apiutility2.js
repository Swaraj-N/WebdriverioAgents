const axios = require('axios').default;
var FormData = require('form-data');
var fs = require('fs');

class APIUtility2 {

    /**
     * @description This method is used to make a GET request.
     * @param {string} endPointWithURL - The complete endpoint URL for the GET request.
     * @param {object} [headers={}] -  headers to include in the GET request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async getData(endPointWithURL, headers = {}) {
        try {
            const response = await axios.get(endPointWithURL, { headers });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }

    /**
     * @description This method is used to make a GET request with query parameters.
     * @param {string} endPointWithURL - The complete endpoint URL for the GET request.
     * @param {object} queryParam - Query parameters to include in the GET request.
     * @param {object} [headers={}] -  headers to include in the GET request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async getDataWithQueryParam(endPointWithURL, queryParam, headers = {}) {
        try {
            const response = await axios.get(endPointWithURL, {
                params: queryParam,
                headers,
            });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }

    /**
     * @description This method is used to perform a POST request by passing a request payload.
     * @param {string} endPointWithURL - The complete endpoint URL for the POST request.
     * @param {object} reqBody - The request payload to be sent in the POST request.
     * @param {object} [headers={}] -  headers to include in the POST request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async postData(endPointWithURL, reqBody, headers = {}) {
        try {
            const response = await axios.post(endPointWithURL, reqBody, { headers });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }

    /**
     * @description This method is used to perform a PUT request by providing the endpoint and request payload.
     * @param {string} endPointWithURL - The complete endpoint URL for the PUT request.
     * @param {object} reqBody - The request payload to be sent in the PUT request.
     * @param {object} [headers={}] -  headers to include in the PUT request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async putData(endPointWithURL, reqBody, headers = {}) {
        try {
            const response = await axios.put(endPointWithURL, reqBody, { headers });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }

    /**
     * @description This method is used to perform a PATCH request by providing the endpoint and request payload.
     * @param {string} endPointWithURL - The complete endpoint URL for the PATCH request.
     * @param {object} reqBody - The request payload to be sent in the PATCH request.
     * @param {object} [headers={}] -  headers to include in the PATCH request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async patchData(endPointWithURL, reqBody, headers = {}) {
        try {
            const response = await axios.patch(endPointWithURL, reqBody, { headers });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }

    /**
     * @description This method is used to perform a POST request by uploading a file.
     * @param {string} endPointWithURL - The complete endpoint URL for the POST request.
     * @param {string} filePath - The file path of the file to be uploaded.
     * @param {string} fileName - The name to use for the file in the request.
     * @param {string} uploadKey - The key to associate with the file in the form data.
     * @param {object} [headers={}] -  headers to include in the POST request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async postDataFile(endPointWithURL, filePath, fileName, uploadKey, headers = {}) {
        try {
            const formData = new FormData();
            formData.append(`${uploadKey}`, fs.createReadStream(filePath), {
                filename: `${fileName}`
            });
            const response = await axios.post(endPointWithURL, formData, {
                headers: {
                    ...headers,
                    'Content-Type': 'multipart/form-data',
                }
            });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }

    /**
     * @description This method is used to perform a DELETE request by providing the endpoint.
     * @param {string} endPointWithURL - The complete endpoint URL for the DELETE request.
     * @param {object} [headers={}] -  headers to include in the DELETE request.
     * @returns {Promise<any[]>} - Returns a promise that resolves with an array containing the response status and data.
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async deleteData(endPointWithURL, headers = {}) {
        try {
            const response = await axios.delete(endPointWithURL, { headers });
            return [response.status, response.data];
        } catch (error) {
            return [error.response?.status, error.response?.data];
        }
    }
}

module.exports = new APIUtility2();
