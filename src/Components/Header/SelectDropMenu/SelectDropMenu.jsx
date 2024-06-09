import React, { useState } from "react";
import "./SelectDropMenu.css";
import { MdArrowDropDown } from "react-icons/md";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';



const SelectDropMenu = ({data, placeholder, icon}) => {

    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [selectDrop, setSelectDrop] = useState(0);
    const [selectItem, setSelectItem] = useState(placeholder);

    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data);

    const openSelectDrop = () => {
        setIsOpenDrop(!isOpenDrop)
    }
    const closeSelectDrop = (index, name) => {

        setSelectDrop(index);
        setSelectItem(name);
        setIsOpenDrop(false)
    }

    // Search function ----------------------------
    const filterList = (e) =>{
        const keyword = e.target.value.toLowerCase();
        // console.log(keyword);
        const resultList = listData2.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })

        // removing duplicate data from filter in array
        const resultList2 = resultList.filter((item, index) => resultList.indexOf(item) === index);
        setListData(resultList2);
    }


  return (
    <>
        <ClickAwayListener onClickAway={ () => setIsOpenDrop(false)}>
          <div className="selectDropMenu position-relative   ">
             <span onClick={openSelectDrop} className="openSelectDrop "> {icon} {selectItem.length >14 ? selectItem.substr(0,12) + '....' : selectItem}<MdArrowDropDown /></span>
        

        {/*  ----------------   DropDown start ---------------------*/}
        {
            isOpenDrop === true &&         // Switch logic ---------

            <div className="selectDrop">
            <div className="searchFieldDrop">
                <input type="text"  placeholder="Search Category" onChange={filterList}/>
            </div>

            {/* --------- dropdown items */}
            <div className="searchResultItems">
            <ul className="items">
            <li key={0} onClick={ () => closeSelectDrop(0, category)} className= {`${selectDrop === 0 ? 'active' : ''}`}>{placeholder}</li>

                {
                    listData.map((category, index) => {
                        return (
                            <li key={index} onClick={ () => closeSelectDrop(index, category)} className={`${selectDrop === index ? 'active' : ''}`}>{category}</li>
                        )
                    })
                }

                </ul>
            </div>
        </div>
        }
        </div>
        </ClickAwayListener>
    </>
  );
};

export default SelectDropMenu;
