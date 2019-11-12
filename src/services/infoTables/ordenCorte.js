/* eslint-disable no-unused-vars */
import axios from 'axios'


// eslint-disable-next-line no-unused-vars

class OrdenCorte {
    constructor() {
        
    }

    static async getData() {
       try {
            const res = await axios.get('http://localhost:3000', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                }
            });
            return res.data;
        }
        catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

}

export default OrdenCorte;
