const SETData = async (url, method, params, endpoint = '') => {

    const response = await fetch(`${endpoint}${url}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    if (response.ok) {

        const body = await response.text().then(response);

        if (body !== "") { return JSON.parse(body) } else { return null; }
        
    } else {
        return null;
    }

}

const GETData = async (url, method, endpoint = '') => {

    const response = await fetch(`${endpoint}${url}`, {
        method: method
    });

    if (response.ok) {

        const body = await response.text().then(response);

        if (body !== "") { return JSON.parse(body); } else { return null; }

    } else { return null; }

};

export { SETData, GETData };