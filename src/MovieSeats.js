import React, { useState } from 'react';
import './MovieSeats.css'; // Create a CSS file for styling
import Navbar from './navbar';

function MovieSeats() {
  const rows = 5;
  const seatsPerRow = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Create an array to represent the available seats
  const seats = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: seatsPerRow }, (_, seatIndex) => ({
      id: `${rowIndex + 1}-${seatIndex + 1}`,
      isSelected: false,
    }))
  );

  // Function to handle seat selection
  const handleSeatClick = (seat) => {
    if (seat.isSelected) {
      // Deselect the seat
      seat.isSelected = false;
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seat.id)
      );
    } else {
      // Select the seat
      seat.isSelected = true;
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seat.id]);
    }

    // Calculate the total price (e.g., $10 per seat)
    const pricePerSeat = 10;
    setTotalPrice(selectedSeats.length * pricePerSeat);
  };

  return (
    <div>
      <Navbar />
    <div className="movie-seats-container">
      <h1>Movie Seats Reservation</h1>
      <div className="movie-seats">
        {seats.map((row, rowIndex) => (
          <div className="seat-row" key={rowIndex}>
            {row.map((seat) => (
              <div
                className={`seat ${seat.isSelected ? 'selected' : ''}`}
                key={seat.id}
                onClick={() => handleSeatClick(seat)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <p>
        Selected Seats: {selectedSeats.length} | Total Price: ${totalPrice}
      </p>
      <div class="btn-cent">
      <button onClick={() => alert(`You have selected ${selectedSeats.length} seats. Total Price: $${totalPrice}`)}>
        Confirm Selection
      </button>
    </div>
    </div>
    </div>
  );
}

export default MovieSeats;