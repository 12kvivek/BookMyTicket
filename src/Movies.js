import React from 'react'
import Navbar from './navbar'

const Movies = () => {
  return (
    <div>
    <Navbar />
    <div class ="desc"><h1>OFFERS</h1></div>
    <div class ="line"><hr /></div>

    <div class="offer-cards">
                <div class="card-container">

                    <div class="offers">
                        <div class="card">
                            <img src="sbi.jpg" class="card-img" alt=""/>
                            <div class="card-body">
                                <p>&nbsp;&nbsp;SBI ELITE CREDIT CARD OFFER ₹500 OFF</p>
                                <p>&nbsp;&nbsp;Valid till 30th Sept 2023</p>
                            </div>
                        </div>
                    </div>

                    <div class="offers">
                        <div class="card">
                            <img src="rbl-bank.jpg" class="card-img" alt=""/>
                            <div class="card-body">
                                <p>&nbsp;&nbsp;BUY 1 AND GET 1 UPTO ₹200 OFF</p>
                                <p>&nbsp;&nbsp;Valid till 21st Sept 2023</p>
                            </div>
                        </div>
                    </div>

                    <div class="offers">
                        <div class="card">
                            <img src="scapia.jpg" class="card-img" alt=""/>
                            <div class="card-body">
                                <p>&nbsp;&nbsp;SCAPIA FREE FRIDAY OFFER</p>
                                <p>&nbsp;&nbsp;Valid till 31st Oct 2023</p>
                            </div>
                        </div>
                    </div>

                    <div class="offers">
                        <div class="card">
                            <img src="rupay-sbi.jpg" class="card-img" alt=""/>
                            <div class="card-body">
                                <p>&nbsp;&nbsp;RUPAY SBI DEBIT CARD OFFER</p>
                                <p>&nbsp;&nbsp;Valid till 15th Oct 2023</p>
                            </div>
                        </div>
                    </div>

                   
</div>
</div>
</div>
    
  )
}

export default Movies