import React, { FC, useState } from "react";
import "./Settings.css";
import GPS from "gps"

// @ts-ignore
const apiGateway = process.env.API_GATEWAY;

const getQueryFromParams = (formData)  => {

    const toTimestamp = (value) => new Date(value).getTime()
    
    const fromDate = formData.get("fromDate")
    const toDate = formData.get("toDate")

    if (!fromDate) {
        return `${apiGateway}/api/gps`
    }
    if (!toDate) {
        return `${apiGateway}/api/gps/${toTimestamp(fromDate)}`
    }
    return `${apiGateway}/api/gps/${toTimestamp(fromDate)}/${toTimestamp(toDate)}`
}

const parseRaw = (data: any[]): any[] => 
    data.filter(Boolean)
        .filter((v) => v.type === "RMC")
        .sort((a,b) => a.time - b.time)
        .filter(v => v.lon && v.valid)


interface Props {
    onLoad: (points: {[ky:string]:any}[]) => void
}

export const Settings: FC<Props> = ({ onLoad }) => {
    const [loading, setLoading] = useState(false);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setLoading(true);
        // @ts-ignore
        const formData = new FormData(event.target);
        
        fetch(getQueryFromParams(formData))
            .then(r => r.json())
            .then(lines => lines.map(line => {
                try {
                    return GPS.Parse(line[1])
                } catch (error) {
                    return;
                }
            }))
            .then(d => {
                console.log(d);
                return d;
            })
            .then(parseRaw)
            .then(onLoad)
            .catch(console.log)
            .finally(() => setLoading(false))
    }

    return (
        <fieldset className="setting">
        <form onSubmit={onSubmit}>
            <label>Od</label>
            <input
                type="datetime-local"
                id="fromDate"
                name="fromDate"
                title="from date"
            />
            <label>Do</label>
            <input
                type="datetime-local"
                id="toDate"
                name="toDate"
                title="to date"
            />
            <button type="submit" disabled={loading}>{loading ? 'wczytuję...' : 'wczytaj'}</button>
        </form>
    </fieldset>
    )
}