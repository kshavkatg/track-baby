import * as React from 'react';
import {ToggleButton, Stack, Typography, ToggleButtonGroup } from '@mui/material';
import {timeSlotStyles, timeTable, toggleGroupStyles} from "./constants";


export default function DefaultFeed() {
    const [formats, setFormats] = React.useState(() => []);
    const [isDisabled, setIsDisabled] = React.useState(false)

    const handleReset = () => {
        setFormats([])
        setIsDisabled(false)
    }

    const getNextInd = (curr: number, addition: number): number => {
        if (curr + addition > 47) return addition - (47 - curr)
        else return curr + addition
    }

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: number[],
    ) => {
        const curr = newFormats[0]
        const defHours = [
            getNextInd(curr, 9),
            getNextInd(curr, 18),
            getNextInd(curr, 25),
            getNextInd(curr, 32),
            getNextInd(curr, 39)
        ]
        newFormats.push(...defHours)
        setFormats(newFormats);
        setIsDisabled(true)
    };

    return (
        <>

            <Stack alignItems="center" spacing={2}>
                <Typography>Стандартный</Typography>
                <ToggleButtonGroup
                    style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
                    {timeTable.map(({index, time}) => (
                        <ToggleButton color="secondary" key={time} style={{ ...timeSlotStyles, width: '100px'}} value={index} aria-label={time} disabled={isDisabled}>
                            {time}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
                <button style={{ height: '50px' }} onClick={handleReset}>Cбросить</button>
            </Stack>

        </>
    );
}

