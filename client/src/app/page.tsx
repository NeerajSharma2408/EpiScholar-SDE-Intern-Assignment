"use client"

import Circle from "@/components/Circle";

import { chunkArray } from "@/utils/chunk_array";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState<[][] | any>();
    useEffect(() => {
        const fetchData = async (url: string, options?: any) => {
            try {
                const dataResponse = await fetch(url, options);
                const data = await dataResponse.json();
                let dataObj: any = data.global_data;

                const keys = Object.keys(dataObj);
                const sanitized_data = keys.map((key) => ({
                    key: key,
                    value: dataObj[key][0],
                }));

                sanitized_data;
                const dataObjArray = chunkArray(sanitized_data, 4);
                setData(dataObjArray);

            } catch (error) {
                console.log(error);
            }
        };

        const url = 'https://epischolarserver.onrender.com/api/globe-data';
        // const url = "http://localhost:3001/api/globe-data";

        fetchData(url);
    }, []);

    
    return (
        <>
            <h1 className="text-2xl font-bold py-10 my-10 text-center">
                Documents Required for Study Abroad Loan
            </h1>
            <div className=" w-full h-full flex items-center justify-center">
                <Circle width={1000} height={1000} data={data} index={0} />
            </div>
        </>
    );
}
