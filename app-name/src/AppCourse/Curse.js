import './Curse.css';
import ReactCardFlip from 'react-card-flip'
import React, {useEffect, useState} from 'react';

function Curse () {
    // const [ccy, setCcy] = useState('ccy');
    // const [base_ccy, setBase_ccy] = useState('base_ccy');
    // const [buy, setBuy] = useState('buy');
    // const [sale, setSale] = useState('sale');
    const [dat, setData] = useState([]);
    const [isFlipped, setFlipped] = useState(false);

    const[eurBuy,setEurBuy] = useState();
    const[eurSale,setEurSale] = useState();
    const[usdBuy,setUsdBuy] = useState();
    const[usdSale,setUsdSale] = useState();
    
    const handleClick = () => {
        setFlipped(!isFlipped);
    };

    useEffect(() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setEurBuy(data[0].buy);
            setEurSale(data[0].sale);
            setUsdBuy(data[1].buy);
            setUsdSale(data[1].sale);
            // setCcy(data.ccy);
            // setBase_ccy(data.base_ccy);
            // setBuy(data.buy);
            // setSale(data[0].sale);
            // setData(data);
            console.log(data);
        })
        .catch((err) =>{
            // console.log(err.massage);
        });
    }, []);

    

    return (
        <div className='wrap'>
            <div className='card'>
                <div className='front'>
                    <div>
                    <h3>Ин.Валюта - <span>EUR</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Продажа - <span>{eurSale}</span></h3>
                    </div>
                </div>
                <div className='back'>
                <div>
                    <h3>Ин.Валюта - <span>EUR</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Покупка - <span>{eurBuy}</span></h3>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='front'>
                    <div>
                    <h3>Ин.Валюта - <span>USD</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Продажа - <span>{usdSale}</span></h3>
                    </div>
                </div>
                <div className='back'>
                <div>
                    <h3>Ин.Валюта - <span>USD</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Покупка - <span>{usdBuy}</span></h3>
                    </div>
                </div>
            </div>
        </div>
        
        // <div className='container'>
        //     <div onClick={handleClick} className='currency__card'>
        //                     <div>Ин.Валюта - <span>EUR</span></div>
        //                     <div>Валюта - <span>UAH</span></div>                      
        //                     <div>Продажа - <span>{eurSale}</span></div>
        //                 </div>
        //                 <div onClick={handleClick} className='currency__card'>
        //                     <div>Ин.Валюта - <span>EUR</span></div>
        //                     <div>Валюта - <span>UAH</span></div>                      
        //                     <div>Покупка - <span>{eurBuy}</span></div>
        //                 </div>
        // </div>   
    );
            {/* {dat.map((post) =>{
                return(
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div onClick={handleClick} className='currency__card'>
                            <div>Ин.Валюта - <span>{post[0].ccy}</span></div>
                            <div>Валюта - <span>{post[0].base_ccy}</span></div>                      
                            <div>Продажа - <span>{post[0].sale}</span></div>
                        </div>
                        <div onClick={handleClick} className='currency__card'>
                            <div>Ин.Валюта - <span>{post[1].ccy}</span></div>
                            <div>Валюта - <span>{post[1].base_ccy}</span></div>                      
                            <div>Покупка - <span>{post[1].buy}</span></div>
                        </div>
                    </ReactCardFlip>     
                );
            })} */}
            
        
    
};




// return (
//     <div className='container'>
//         <p>{data.sale}</p>

// {/* 
//         {data.map((post) =>{
//             return(
//                 <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
                
//                     <div onClick={handleClick} className='currency__card'>
//                         <div>Ин.Валюта - <span>{ccy}</span></div>
//                         <div>Валюта - <span>{base_ccy}</span></div>                      
//                         <div>Продажа - <span>{sale}</span></div>
//                     </div>
//                     <div onClick={handleClick} className='currency__card'>
//                         <div>Ин.Валюта - <span>{ccy}</span></div>
//                         <div>Валюта - <span>{base_ccy}</span></div>  
//                         <div>Покупка - <span>{buy}</span></div>
//                         </div>   
//                     {/* </div>
//                 </ReactCardFlip>     
//             );
//         })} */}
        
   
//     </div>
// );

//     }


export default Curse;