import React, { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const trackerContext = createContext();

const TrackerContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);


    const updatePendingCount = async () => {
        const { data } = await axios.get('/api/home/getpendingcount');
        setPendingCount(data);
    }
    const updateConfirmedCount = async () => {
        const { data } = await axios.get('/api/home/getconfirmedcount');
        setConfirmedCount(data);
    }
    const updateRefusedCount = async () => {
        const { data } = await axios.get('/api/home/getrefusedcount');
        setRefusedCount(data);
    }

    useEffect(() => {
        updatePendingCount();
        updateConfirmedCount();
        updateRefusedCount();

    }, []);



    const obj = {
        pendingCount,
        updatePendingCount,
        refusedCount,
        updateRefusedCount,
        confirmedCount,
        updateConfirmedCount

    }

    return (
        <trackerContext.Provider value={obj}>
            {children}
        </trackerContext.Provider>
    )

}
const useTrackerContext = () => {
    return useContext(trackerContext);
}
export { TrackerContextComponent, useTrackerContext };