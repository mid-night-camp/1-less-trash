const getConnection = require('../database/connection');




exports.recycling = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.odcloud.kr/api/15062868/v1/uddi:c7b6745b-52bb-4c2e-8fb0-bd5a7aee2595';
        const SERVICE_KEY = 'EYDiPREvKmrtUd3s4ubD%2BGNFByMI8s%2BmajJ%2FEenaRiU69flm5PounxNs5hwExnmjcQX0w4wdEstPO0jGC7E38A%3D%3D';
        const requestURL = `${url}?serviceKey=${SERVICE_KEY}`;
        fetch(requestURL)
            .then(response => response.json())
            .then(data => {
                var key1 = Object.keys(data.data[0]); 
            
                const all={
                    result:[
                        {
                            category: "plastic",
                            amount: data.data[0][key1[8]],
                            percentage : data.data[0][key1[9]]
                        },
                        {
                            category: "paper",
                            amount: data.data[1][key1[8]],
                            percentage : data.data[1][key1[9]]
                        },
                        {
                            category: "can",
                            amount: data.data[3][key1[8]],
                            percentage : data.data[3][key1[9]],
                        }
                    ]
                }
                resolve(all);
            })
    }
    )
}