import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "./List.css";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchItem from "./SearchItem";
import { motion } from "framer-motion";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listWrapper">
            <div className="listSearch">
              <h2 className="listTitle"> Search</h2>

              {/* list item */}
              <div className="listItem">
                <label>Destination</label>
                <input type="text" />
              </div>
              {/* list item */}
              <div className="listItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    ranges={date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="listItem">
                <label>Options</label>
                {/* item option */}
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput"></input>
                </div>

                {/* item option */}
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput"></input>
                </div>

                {/* item option */}
                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adult}
                    min={1}
                  ></input>
                </div>

                {/* item option */}
                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    min={0}
                    placeholder={options.children}
                  ></input>
                </div>

                {/* item option */}
                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    min={1}
                    placeholder={options.room}
                  ></input>
                </div>
              </div>
              <button> Search</button>
            </div>

            <div className="listResult">
              <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
                <SearchItem />
              </motion.div>
              <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
                <SearchItem />
              </motion.div>
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
