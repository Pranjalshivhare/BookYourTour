import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar";
import "./List.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItems/SearchItem";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              {/* <input type="text" /> */}
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  range={date}
                  // editableDateInput={true}
                  // moveRangeOnFirstSelection={false}
                  // range={date}
                  // className="date"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Option</label>

              <div className="lsOptions">
                <div className="isOptionText">
                  <span className="lsOptionText">Min Price</span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="isOptionText">
                  <span className="lsOptionText">Max Price</span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="isOptionText">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.adult}
                  />
                </div>
                <div className="isOptionText">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.children}
                  />
                </div>
                <div className="isOptionText">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
    </div>
  );
}

export default List;
