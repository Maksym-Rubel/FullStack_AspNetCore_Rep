import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import "./SideBar.css"
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateTimeField } from '@mui/x-date-pickers';
import ItemsSelectView from './ItemsSelectView';
export default function SideBar() {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const [Datas, setData] = React.useState([]);

  async function DateOnChange(newvalue) {
    let newDate = newvalue.format("YYYY-MM-DD")
    let DateDay = new Date(newvalue);
    console.log(newDate);
    console.log(DateDay.getDay());
    let response = await fetch(`http://192.168.1.121:5212/api/Musics/GetDayItems?dateTime=${newDate}&WeekDay=${DateDay.getDay()}`);
    setData(await response.json());
    console.log(Datas);
    setValue(newvalue);

  }


  return (
    <div className='SideBar-class'>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='uk'>

        <DateCalendar value={value} onChange={(newValue) => DateOnChange(newValue)} sx={{ width: '100%' }} />

      </LocalizationProvider>
      <div className='BackItems'>
        {
          
          Datas.length > 0 ? Datas.map((item,index) => (

            <ItemsSelectView index={index} {...item}></ItemsSelectView>



          )) : ""
        }
      </div>


    </div>

  )
}
