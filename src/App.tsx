import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const dispatch = useDispatch()
  const [reservationNameInput,setReservationNameInput] = useState("")

  const handleAddReservation = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  }

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const customers = useSelector((state:RootState)=>state.customer.value)
  
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map((name,index) => {
                  return <ReservationCard name={name} index={index} />
                })
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)}/>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          
        </div>
      </div>
    </div>
  );
}

export default App;