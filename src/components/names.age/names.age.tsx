import React from 'react';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

import './names.age.css';

// Define the structure of the weather data returned by the API
interface NamesAgeComponentData {
    count: number,
    name: string,
    age: number
}

// Define props for the WeatherComponent
interface NamesAgeComponentProps {
    names: string[];
}

// Fetch weather data from the API using Axios
const fetchNamesAge = async (props: QueryFunctionContext): Promise<NamesAgeComponentData[]> => {
    debugger
    const names = props.queryKey.slice(1).map(x => `name[]=${x}`);
    const url = `https://api.agify.io/?${names.join('&')}`;
    const response = await axios.get<NamesAgeComponentData[]>(url);
    return response.data;
};

const NamesAgeComponent: React.FC<NamesAgeComponentProps> = (props: NamesAgeComponentProps) => {
    // Use React Query with proper typing for the API data
    const namesAgeQuery = useQuery({
        queryKey: ['agify', ...props.names],
        queryFn: fetchNamesAge,
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    });

    const { data, error, isLoading } = namesAgeQuery;

    if (isLoading) {
        return <div>Loading names age data...</div>;
    }

    if (error instanceof Error) {
        return <div>Error loading names age data: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>No names age data available</div>;
    }

    // Render the weather data
    return (
        <div className='names-age'>
            {data.map(x =>
                <div key={x.count} id={x.count.toString()}>
                    <b>Name:</b> <span>{x.name}</span> <i>Age:</i> {x.age}
                </div>
            )}
        </div>
    );
};


export default NamesAgeComponent;
