import axios from 'axios';

export async function getDevices():Promise<any> {
    const response = await axios.get("http://localhost:8888/api/devices");
    return response.data.data;
}