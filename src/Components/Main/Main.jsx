import React,{useEffect} from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import{HiOutlineClipboardCheck} from 'react-icons/hi'


import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

 const Data=[
        {
            id:1,
            imgSrc:img,
            destTitle:'Bora Bora',
            location:'New Zealand',
            grade:'CULTURAL RELAX',
            fees:'$700',
            description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities',
},
{
            id:2,
            imgSrc:img2,
            destTitle:'Machu Picchu',
            location:'PERU',
            grade:'CULTURAL RELAX',
            fees:'$600',
            description:'A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007. ',
                        
},

        {
            id:3,
            imgSrc:img3,
            destTitle:'Great Barrier Reef',
            location:'Australia',
            grade:'CULTURAL RELAX',
            fees:'$700',
            description:'The only ancient wonder still standing is The Great Pyramid of Giza. Fire and earthquakes caused the destruction of four out of seven ancient wonders. ',
                            
            },
         {
        id:4,
        imgSrc:img4,
        destTitle:'Cappadocia',
        location:'Turkey',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'Famous for its unique rock formations and amazing hot air ballooning opportunities, the otherworldly landscapes of Cappadocia are one of Turkey most popular natural wonders.',
                    
        },

        {
            id:5,
            imgSrc:img5,
            destTitle:'Guanajuato',
            location:'Mexico',
            grade:'CULTURAL RELAX',
            fees:'$1200',
            description:'Guanajuato is a city in central Mexico and is the capital city of the state bearing the same name. It is 390 km (about 250 miles) northwest of Mexico City. The name of the city means "Place of Frogs" in the local indigenous language and therefore the frog is the citys official pet.',
                        
            },
        {
            id:6,
            imgSrc:img6,
            destTitle:'Cinque Terre',
            location:'Italy',
            grade:'CULTURAL RELAX',
            fees:'$700',
            description:'Cinque Terre is comprised of  surprise  5 little villages in the Liguria Region in the northwest of Italy. Located along what is known as the Italian Riviera',
                            
            },
        {
            id:7,
            imgSrc:img7,
            destTitle:'Angkor wat',
            location:'Cambodia',
            grade:'CULTURAL RELAX',
            fees:'$900',
            description:'Once the seat of the Khmer Empire, which ruled a large portion of mainland Southeast Asia between the ninth and fifteenth centuries AD, Angkor reached its peak in the twelfth century before entering a long period of decline. ',
                            
            },
        {
            id:8,
            imgSrc:img8,
            destTitle:'Taj Mahal',
            location:'India',
            grade:'CULTURAL RELAX',
            fees:'$1200',
            description:'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the worlds heritage.',
                            
            },


        {
            id:9,
            imgSrc:img9,
            destTitle:'Bali',
            location:'Indonesia',
            grade:'CULTURAL RELAX',
            fees:'$1600',
            description:'The Best That Bali Has To Offer. Holy Temples, Tropical Jungles & More! Book Now. Experienced Tour Guide In Bali.',
                            
            },
        
 ]

function Main() {

    useEffect(() => {
        Aos.init({duration: 2000});
    },[])

    return (
        <section className='main container section'>
              <div className='secTitle'>
                <h3 data-aos="fade-up" className='title'>
                  Most Visited Destinations  
                </h3>
              </div>

              <div className="secContent grid">
                {

                }
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description, })=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {

                                        }
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        Details<HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>


                            </div>
                        )

                    })
                }

              </div> 
        </section>
    )
}

export default Main