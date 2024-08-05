import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ToggleButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import {timeSlotStyles, timeTable, toggleGroupStyles} from "./constants";


export default function DefaultSleep() {
    const [formats, setFormats] = React.useState(() => []);
    const [isDisabled, setIsDisabled] = React.useState(false)

    const handleReset = () => {
        setFormats([])
        setIsDisabled(false)
    }

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        const current = newFormats[0]
        let rest;
        for (let i = newFormats[0] + 1; i < (current + 22 || 47); i++) {
            newFormats.push(i)
            if (i === 47) {
                rest = Math.abs(21 - (47 -current))
                console.log({rest})
                for (let j = 0; j < rest; j++) {
                    newFormats.push(j)
                }
                const sleepOne = [rest + 4, rest + 5, rest + 6]
                const sleepTwo = [rest + 11, rest + 12, rest + 13]
                const sleepThree = [rest + 17, rest + 18, rest + 19]

                newFormats.push(...sleepOne, ...sleepTwo, ...sleepThree)
            }
        }
        setFormats(newFormats);
        setIsDisabled(true)
        console.log(newFormats)
    };

    return (
        <>

            <Stack alignItems="center" spacing={2}>
                <Typography>Стандартный</Typography>
            <ToggleButtonGroup
                style={toggleGroupStyles}
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
            >
                {timeTable.map(({index, time}) => (
                    <ToggleButton color="secondary" key={time} style={timeSlotStyles} value={index} aria-label={time} disabled={isDisabled}>
                        {time}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
                <button style={{ height: '50px' }} onClick={handleReset}>Cбросить</button>
            </Stack>

        </>
    );
}

