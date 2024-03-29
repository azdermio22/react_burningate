import {useState, useEffect} from "react";

export  const DataCard = (props) => {
    let [counter, increment] = useState(0);
    let [cicle, cicleComplete] = useState(0);
    useEffect(()=>{
        let target = document.querySelector('.info_data')
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
          };
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=> {
                if (entrie.intersectionRatio != 0) {
                    let interval = setInterval(() => {
                        if (counter < 100 && cicle == 0) {
                            increment(counter++);
                        }else{
                            clearInterval(interval);
                            increment(counter = props.number)
                            cicleComplete(cicle++);
                        }
                    }, 20);
                }
        });}, options);
        observer.observe(target);
    },[])

    return (
        <div data-aos="fade-up" className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
        <div className='info_data'>
        <props.icon color="red" size={50} />
        <p className='info_data_numbers'>+{counter}</p>
        <p className='info_data_text text'>{props.text}</p>
          </div>
          </div>
    )
}