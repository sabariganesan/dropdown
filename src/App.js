import React, { useState,useEffect, useRef } from "react";
import "./App.css"
import {MdArrowDropDown} from "react-icons/md/index"
import OutsideClickHandler from "react-outside-click-handler";
import {MdArrowDropUp} from "react-icons/md/index"
function Apps() {
    const [select,setselect]=useState("Dropdown Default")
    const [container,setcon]=useState(false);
    const [placeholder,setholder]=useState(false)
    const [data,setdata]=useState(["option1","option2","option3","option4"])

const handleclick=(value)=>{
setselect(value)
setcon(false)
setholder(true)
}
const handlepage=()=>{
    setcon(!container)
}
  return (
    <div className="totalcontainer">
        <div className="totalcontent">
            <OutsideClickHandler onOutsideClick={()=>setcon(false)}>
            <div className="select" ><div className="selectcontent"><div><span className={placeholder?"activeplaceholder":"placeholder"}>{select}</span></div><div className='icon'onClick={handlepage} ><span style={{fontSize:"20px"}}>{container?<MdArrowDropUp/>:<MdArrowDropDown/>}</span></div></div></div>
            </OutsideClickHandler>
   
                 <div className={container?"active":"sel_container"}>
                {
                  data.map((value,index)=>{return <div className="option" onClick={()=>handleclick(`${value}`)}  >{value}</div>
                
                })
                }
                </div>
                
        </div>
    </div>
  );
}

export default Apps;
