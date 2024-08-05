import * as React from 'react';
import { ToggleButton, Typography, Stack, ToggleButtonGroup } from '@mui/material';
import {timeTable, toggleGroupStyles} from "./constants";
import {useState} from "react";

export default function Feed() {
    const [formats, setFormats] = useState(() => []);
    const [feedValues, setFeedValues] = useState({})

    const [feedSum, setFeedSum] = useState(0);


    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setFormats(newFormats);
    };

    return (
        <Stack alignItems="center" spacing={2}>
            <Typography>Фактический</Typography>

            <ToggleButtonGroup
                style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
            >
                {timeTable.map(({index, time}) => (
                    <ToggleButton color="warning" key={time} style={{ width: '180px', height: '60px'}} value={index} aria-label={time}>
                        {time}
                        <input style={{ color: 'black', background: 'white', borderWidth: '1px', borderColor: 'gray', borderRadius: '4px', marginLeft: '20px', width: '80px', height: '40px'}} type="text" value={feedValues[index]} onChange={(e) => {
                            const value = e.target.value
                            if (isNaN(value)) return
                            const obj = {...feedValues}
                            obj[index] = value
                            setFeedValues(obj)
                            setFeedSum(Object.values(obj).reduce((x, y) => parseInt(x) + parseInt(y), 0))
                        }} />
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Stack direction="row" alignItems="center">
                {/*<img style={{ height: '40px', width: 'auto' }} src={sleepImage} />*/}
                <Typography fontWeight="bold">sum: {feedSum}</Typography>
            </Stack>
        </Stack>
    );
}

