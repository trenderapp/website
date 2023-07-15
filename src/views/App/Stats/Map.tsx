"use client"
import React, { useEffect, useState, useMemo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
    Sphere,
    Graticule
} from "react-simple-maps";
import { axiosInstance } from "@/services";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

interface responseI {
    "total": number,
    "country": {
        "country": string,
        "latitude": number,
        "longitude": number,
        "name": string
    }
}
const MapChart = () => {
    const [data, setData] = useState<responseI[]>([]);

    const getData = async () => {
        const request = await axiosInstance("/adm/stats/locale");
        const response = request.data.data as responseI[];

        setData(response)
    }
    useEffect(() => {
        getData()
    }, []);

    const popScale = (i: number) => i / 100;

    return (
        <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
            <ZoomableGroup center={[4, 46]} zoom={10}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => 
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
                        ))
                    }
                </Geographies>
                {data.map(({ country, total }, idx) => {
                    return (
                        <Marker  key={idx} coordinates={[country?.longitude ?? 123, country?.latitude ?? 48]}>
                            <circle fill="#F53" r={popScale(total)} />
                            <text textAnchor="middle" y={-1} style={{ fontSize: 2 }}>{total}</text>
                        </Marker>
                    );
                })}
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;