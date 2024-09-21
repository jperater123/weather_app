export default async function handler(req, res) {
    const { searchLocation } = req.query;
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=3600339562a40594772c7e7eebfa002a`;

    try {
        const response = await fetch(api);

        if (!response.ok) {
            return res.status(response.status).json(await response.json());
        }

        const data = await response.json();

        // Filter to get the first 3 days of forecast data
        const forecastArray = [];
        const uniqueDates = new Set();

        for (const item of data.list) {
            const date = item.dt_txt.split(" ")[0];

            // Only add if the date is unique and we have less than 3 entries
            if (!uniqueDates.has(date) && forecastArray.length < 3) {
                uniqueDates.add(date);
                forecastArray.push({
                    date: date,
                    temp: item.main.temp,
                    humidity: item.main.humidity,
                    windSpeed: item.wind.speed,
                    weather: item.weather[0].description,
                    icon: item.weather[0].icon // Include raw icon response
                });
            }
        }

        return res.status(200).json(forecastArray);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
