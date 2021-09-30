import React from 'react'
import image1 from '../components/apartment1.jpg'
import image2 from '../components/apartment5.jpg'
import image3 from '../components/apartment3.jpg'
import image4 from '../components/aprtment4.jpg'
import '../App.js'

const data=[{
    name:"Bliss Apartments",
    location:"Electronic City, Bangalore",
    price:"2.8Cr",
    typology:"2BHK",
    about:"At Bliss Apartments, happiness is a part of your everyday life Located next to BKC, with life’s all conveniences just around the corner and seamlessly connected to the city via major highways, you will spend less time in commute and give more time to your life. The safe & secure location and the multitier security inside the development will ensure that your loved ones are always safe and sound. The exquisite and spacious 2, 2.5 & 3-bed residences are designed to meet every comfort that you desire inside your home and the choicest of the lifestyle amenities on the outside for your daily adrenaline boost.",
    image:image1
},

{
    name:"Phoenix One Bangalore West",
    location:" RajajiNagar, Bangalore",
    price:"3.8Cr",
    typology:"3BHK",
    about:"Phoenix One Bangalore West Located at the premium address of RajajiNagar, the confluence of traditional and modern Bangalore, Phoenix One Bangalore West allows you to experience the best of both worlds. With great connectivity to the World Trade Center and proximity to the Metro Station all just a few minutes away, this truly is the new Central Business District of Bangalore. On offer are 4-bed homes with family and study areas, 3-bed homes, 2-bed homes with a family area and exclusive garden flats. State-of-the-art amenities, a 50,000 sq ft clubhouse and a host of world-class facilities make this the right place to get in shape or rejuvenate after a long week at work. ",
    image:image2
},

{
    name:"Aparna Sarovar Zenith",
    location:" Nallagandla, Hyderabad",
    price:"4.2Cr",
    typology:"3BHK",
    about:"Aparna Sarovar Zenith is a gated community of luxurious apartments at Nallagandla. Aparna Sarovar Zenith is consists of 2, 3 and 4 BHK under-construction Gated Community Apartments in Nallagandla on Sale by Aparna Constructions. Nallagandla is one of the fast developing areas of Hyderabad. Inspired by Nallagandla Lake, the project’s open pathways, stepped gardens and other elements are designed with a wave theme. Anyone who steps inside the community will experience pure bliss. Gated community apartments in Nallagandla offer more than just a home for you and your family. ",
    image:image3
},
{
    name:"Park Riviera",
    location:"Panvel, Navi Mumbai",
    price:" 96 lacs",
    typology:"3BHK and 2BHK",
    about:"Presenting Park Riviera where hustle & bustle of daily life becomes a serene flow. Just 4 towers of 19 storeys each, nestled amidst lush landscape with mesmerizing views of Kalundre River. Located within the municipal city limits of Panvel, and in close proximity to upcoming Navi Mumbai International Airport, it is centrally located to all the conveniences of daily life yet, away from its chaos. It’s a great opportunity to own this serene waterside lifestyle with spacious 2 & 3 homes & a plethora of amenities.",
    image:image4
}
    
]

const ProductList=(props)=>{
    return(
        <div>
            {data.map((ele)=>{
                return (
                    <div key={ele.name}>
                        <div className="row" style={{marginTop:"3em"}}>
                            <div className="col-md-6" >
                                <h4 style={{textAlign:"center",fontFamily:"Impact, fantasy"}}>{ele.name}</h4>
                                <img src={ele.image} className="image"/>
                            </div>
                            <div className="col-md-6" style={{marginTop:"2em",fontSize:"15px",fontFamily:"Didot, serif"}}>
                                <p><b>Location :</b> {ele.location}</p>
                                <p><b>Typology :</b>{ele.typology}</p>
                                <p><b>Price(₹) :</b> {ele.price}</p>
                                {ele.about}<br/>
                                <button type="button" class="btn btn-success" style={{marginTop:"10px",fontFamily:"URW Chancery L, cursive"}}>Enquire Now</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProductList
