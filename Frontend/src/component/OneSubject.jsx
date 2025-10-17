import React, { useContext } from 'react'
import "./OneSubject.css"
import axios from 'axios';
import { tokenService } from '../services/token.service';
import { CounterContext } from '../context/currenthome';
import { userRole } from '../services/userRole.service';




export default function OneSubject({ Id, Title, Description, ItemId }) {
    const { Email, setEmail } = useContext(CounterContext);

    function FirstLetter(Title) {
        return String(Title).slice(0, 1);
    }


    function RemoveItem(Id) {

        axios.delete(`http://192.168.1.121:5212/api/Homework/RemoveItem?Id=${Id}`, {
            headers:
            {
                Authorization: `Bearer ${tokenService.get()}`
            }
        }).then(res => {
            if (res.status == 204) {
                setEmail(`${Id}`)
            }
        })
    }

    function GetBackCollor(ItemId) {
        switch (ItemId) {
            case 1:
                return "#baedbd";
            case 2:
                return "#fbdcc1";
            case 3:
                return "#fdf1c4";
            case 4:
                return "#c4c9fd";
            case 5:
                return "#f8cac4";
            case 6:
                return "#eab6fc";
            case 7:
                return "#baedbd";

            default:
                return "#baedbd";
        }
    }
    function GetFontCollor(ItemId) {
        switch (ItemId) {
            case 1:
                return "#6bd578";
            case 2:
                return "#f7b57f";
            case 3:
                return "#fcd97f";
            case 4:
                return "#777dfc";
            case 5:
                return "#f18d80";
            case 6:
                return "#d37bf5";
            case 7:
                return "#6bd578";

            default:
                return "#6bd578";
        }
    }

    return (
        <div className='SubjectBack-class'>
            <div className='DivFist'>
                <div className='Subject-class'>
                    <div className='CircleName-class' style={{ backgroundColor: GetBackCollor(ItemId) }}>
                        <p style={{ color: GetFontCollor(ItemId) }}>{FirstLetter(Title)}</p>
                    </div>
                </div>
                <div className='SubjectText-class'>
                    <h3>{Title}</h3>

                    <p>{Description}</p>
                </div>
            </div>
            {userRole.get() == "admin" ? <div className='NextBtn'>
                <button onClick={() => RemoveItem(Id)} className='RemoveBtn'>
                    <img className='Im32' src="/public/imgs/delete.png" alt="" />
                </button>
            </div>
                : ""}


        </div>
    )
}
