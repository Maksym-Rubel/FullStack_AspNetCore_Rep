import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
    const [value, setValue] = React.useState(dayjs(new Date()));

    function DateOnChange(newvalue)
    {
        console.log(newvalue);
        setValue(newvalue);
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='uk'>

            <DateCalendar value={value} onChange={(newValue) => DateOnChange(newValue)} sx={{width:'100%' }}/>

        </LocalizationProvider>
    );
}