import {useState} from "react";

export  const DataCard = (props) => {
    let [counter, increment] = useState(0);

    return (
        <div data-aos="fade-up" className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
        <div className='info_data'>
        <props.people color="red" size={50} />
        <p className='info_data_numbers' onChange={counter != 1000 ? increment(counter++):''}>+{counter}</p>
        <p className='info_data_text text'>trained athletes</p>
          </div>
          </div>
    )
}