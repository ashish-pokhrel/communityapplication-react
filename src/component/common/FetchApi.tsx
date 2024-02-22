import axios, { AxiosResponse } from "axios";

const api_url = 'https://localhost:4707/api';
export async function getRequest(path: string): Promise<any> {
    const auth = 'Bearer';
    const fullURL = api_url + path;
    try {
        const config = {
            headers: {
                Authorization: auth
            },
        };

        const response: AxiosResponse = await axios.get(fullURL, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function postRequest(path: string, data: any): Promise<any> {
    const fullURL = api_url + path;
    const auth = 'Bearer';
    try {
        debugger
        const response: AxiosResponse = await axios.post(fullURL, data, {
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function postRequestNoAuth(path: string, data: any): Promise<any> {
    const fullURL = api_url + path;
    try {
        const response: AxiosResponse = await axios.post(fullURL, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function postFileRequest(path: string, data: any): Promise<any> {
    const fullURL = api_url + path;

    let formData = new FormData();
    formData.append('file', data);
    formData.append('type', 'student');
    formData.append('id', '1');

    try {
        const response: AxiosResponse = await axios.post(fullURL, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteRequest(path: string): Promise<any> {
    const fullURL = api_url + path;
    const auth = 'Bearer';
    try {
        const config = {
            headers: {
                Authorization: auth
            },
        };

        const response: AxiosResponse = await axios.delete(fullURL, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function putRequest(path: string, data: any): Promise<any> {
    const fullURL = api_url + path;
    const auth = 'Bearer';
    const config = {
        headers: {
            Authorization: auth
        },
    };
    try {
        const response: AxiosResponse = await axios.put(fullURL, data, config);
        return response.data;
    } catch (error) {
        console.error('There was an error!', error);
    }
}

export async function putFileUploadRequest(path: string, data: any): Promise<any> {
    const fullURL = api_url + path;
    const auth = 'Bearer';
    const config = {
        headers: {
            'Authorization': auth,
            'content-type': 'multipart/form-data' // Add this line for file uploads
        },
    };
    try {
        const response: AxiosResponse = await axios.put(fullURL, data, config);
        return response.data;
    } catch (error) {
        console.error('There was an error!', error);
    }
}

export async function postFileUploadRequest(path: string, data: any): Promise<any> {
    const fullURL = api_url + path;
    const auth = 'Bearer';
    const config = {
        headers: {
            'Authorization': auth,
            'content-type': 'multipart/form-data' // Add this line for file uploads
        },
    };
    try {
        debugger
        const response: AxiosResponse = await axios.post(fullURL, data, config);
        return response.data;
    } catch (error) {
        console.error('There was an error!', error);
    }
}
