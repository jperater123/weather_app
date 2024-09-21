
export default async function handler(req, res) {

    const {searchLocation} = req.query;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&AP			PID=3600339562a40594772c7e7eebfa002a`;
    
    try{
        console.log("hehe")
        const response = await fetch(`${api}`)

        if(!response.ok){
            return res.status(response.status).json(await response.json());
        }

        const data = await response.json()
        console.log(data);

        return res.status(200).json(data);
    }
    catch{
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}