import '../../App.css'
import img from "../../images/img-2.jpg"
import {RiSecurePaymentFill} from 'react-icons/ri'
import {IoBusiness,IoTicketSharp} from 'react-icons/io5'
export default function Services() {
    const data = [
        {
        id:1,
        title: 'Safe Payment',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
        icon: <RiSecurePaymentFill className='icon'/>
    },
    {
        id:2,
        title: 'Business events',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
        icon: <IoBusiness className='icon'/>
    },
    {
        id:3,
        title: 'Ticket Booking',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
        icon: <IoTicketSharp className='icon'/>
    }
    
]
    return (
        <div className="services">
            <h4 className='services-title'>Our Services</h4>
            <div className="service-image-container">
                <img src={img} alt="travel img" />
            </div>
            <div className="services-wrapper">
                {data.map((item)=>{
                    return(
                        <div className="service" key={item.id}>
                            <div className='icon-container'>
                                {item.icon}
                            </div>
                            <div className='description'>
                                <h5>{item.title}</h5>
                                <p>
                                    {item.description}
                                </p>
                                <a href="\">More</a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <footer className='footer'>
                <p>Created by Hamed Ajaj &#169; All Rights Reserved 2023</p>
            </footer>
        </div>
    )
}