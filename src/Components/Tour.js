import React, { useState } from 'react'
import Items from './Items'


function Tour() {
  const [data, setData] = useState(Items);
  const [action, setaction] = useState("Read More")
  let deleteItems = (value) => {
    let remainingItem = data.filter((item) => {
      return value != item;
    })
    setData([...remainingItem]);
  }
  const [readMore, setreadMore] = useState(true);
  return (
    <>
      <div className="container">
        <p className='text-center fw-bolder fs-1 mt-5 mb-0'>Our Foods</p>
        <hr className='border-0 rounded mx-auto ' id="hrTag" />

        {data.map((value) => {
          return <div className="card mx-auto mt-5" id='card' key={value.id}>
            <img src={value.image} className="card-img-top" alt="..." />
            <div className="card-body">

              <div className="d-flex justify-content-between">
                <p className="card-title fw-bold">{value.title}</p>
                <p className='border fw-bold text-primary rounded px-2 border-0 ' style={{ backgroundColor: "rgba(73,166,233,0.1)" }}>${value.price}</p>
              </div>


              <p className="card-text">{readMore ? value.description.slice(0, 200) : value.description}...<button className='text-primary border border-0 bg-white' onClick={() => setreadMore(!readMore)}>{readMore ? action : "Show Less"}</button></p>
              <button className="btn border border-danger text-danger mx-auto" onClick={() => deleteItems(value)}>Not Interested</button>
            </div>
          </div>
        })}
        <button className="btn border border-0 bg-primary text-white mt-3" id='refreshBtn' onClick={() => setData(Items)}>Refresh</button>

      </div>

    </>
  )
}

export default Tour
