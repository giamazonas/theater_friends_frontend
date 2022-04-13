import './ShowList.css'
// import React, { useState } from "react"
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";

// Components
import ShowCard from '../../components/ShowCard/ShowCard'

const ShowList = ({ shows, showImages }) => {

  // console.log('HELLO1', props.shows.id)
  // console.log('NOPE', props.shows.profile_id)
  // console.log(props.user.id)

  // sort by date - ascending
// need to access by last two index of string, to sort
// order by show.date( acces digits ) acsending
  // if ({props.shows.id} === {props.user.id})

  return (
    <> 
    <img className="stageview" src="https://i.imgur.com/J4l2ze9.jpg" alt="Photoby Mark Thompson on Unsplash" ></img>
      <div className="stage" id="stage">   </div>
      <section className="page-header">
      </section>
      <section className="card-container">
        {shows.map((show) => (
          <ShowCard
            show={show}
            key={show.id}
            // showImages={showImages}
          />
        ))}
      </section>
    </>
  )
}

// sort by date - ascending
// need to access by last two index of string, to sort
// order by show.date( acces digits ) acsending

export default ShowList