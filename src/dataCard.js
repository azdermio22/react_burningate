import {useState, useEffect} from "react";

export  const DataCard = (props) => {
    let [counter, increment] = useState(0);
    useEffect(()=>{
        let target = document.querySelector('.info_data')
        let options = {
            root:null,
            margin: "0px",
            thresholds: 1.0,
        }
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach(entrie => {
                if (entrie.intersectionRatio != 0) {
                    let interval = setInterval(() => {
                    if (counter == 100) {
                        clearInterval(interval);
                        increment(counter = props.number);
                    }else{
                        increment(counter++);
                    }
                }, 5);
            }
        });}, options);
        observer.observe(target);
    },[])

    return (
        <div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
        <div className='info_data'>
        <props.icon color="red" size={50} />
        <p className='info_data_numbers'>+{counter}</p>
        <p className='info_data_text text'>{props.text}</p>
          </div>
          </div>
    )
    // data-aos="fade-up"
}