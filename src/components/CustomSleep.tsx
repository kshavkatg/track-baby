import * as React from 'react';
import { ToggleButton, Typography, Stack, ToggleButtonGroup } from '@mui/material';
import {timeSlotStyles, timeTable, toggleGroupStyles} from "./constants";
import {useState} from "react";

export default function CustomSleep() {
    const [formats, setFormats] = useState(() => []);
    const [sleepHours, setSleepHours] = useState(0);
    const [daySleepHours, setDaySleepHours] = useState(0)
    const [nightSleepHours, setNightSleepHours] = useState(0)


    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        console.log(newFormats)
        const sleepH = newFormats.length * 0.5
        const daySleepH = newFormats.filter((index) => index > 16 && index < 42).length * 0.5
        const nightSleepH = newFormats.filter((index) => index < 16 || index > 42).length * 0.5
        setFormats(newFormats);
        setSleepHours(sleepH)
        // setWakeHours(24 - sleepHours)
        setDaySleepHours(daySleepH)
        setNightSleepHours(nightSleepH)
        console.log(newFormats.length * 0.5)
    };

    return (
        <Stack alignItems="center" spacing={2}>
            <Typography>Фактический</Typography>
            <ToggleButtonGroup
                style={toggleGroupStyles}
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
            >
                {timeTable.map(({index, time}) => (
                    <ToggleButton color="primary" key={time} style={timeSlotStyles} value={index} aria-label={time}>
                        {time}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Stack direction="row" alignItems="center">
                {/*<img style={{ height: '40px', width: 'auto' }} src={sleepImage} />*/}
                <Typography fontWeight="bold">С: {sleepHours}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
                {/*<img style={{ height: '36px', width: 'auto' }} src={wakeImage} />*/}
                <Typography fontWeight="bold">Б: {24 -sleepHours}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
                {/*<img style={{ height: '36px', width: 'auto' }} src={wakeImage} />*/}
                <Typography fontWeight="bold">ДС: {daySleepHours}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
                {/*<img style={{ height: '36px', width: 'auto' }} src={wakeImage} />*/}
                <Typography fontWeight="bold">НС: {nightSleepHours}</Typography>
            </Stack>
        </Stack>
    );
}

