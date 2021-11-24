import React from 'react';

export default function About() {


    return <div style={{ marginBottom: "25px", marginLeft: "40px", marginRight: "40px", paddingLeft: "50px", paddingRight: "50px" }}>

        <h1 style={{ textAlign: "center", marginTop: "60px" }}>
            About
        </h1>

        <p style={{ textAlign: "center", marginTop: "7px" }}>
            Individuals who are in some kind of service and have frequent
            city transfers; Software engineers who work remotely and enjoy travelling,
            and many more.
            </p>

        <hr />

        <h1 style={{ textAlign: "center" }}>
            Overview of the Existing Systems and Technologies
        </h1>

        <p style={{ textAlign: "center", marginTop: "7px" }}>
            Hotels and resorts can be a short term solution  for the above problems but a family definitely needs a house to make it a home (with their love). The
            prices for hotel rooms are quite high and no one can live in a single room
            for a long period, eating the food served by the hotels, etc. They also need a
            kitchen to cook their own food. Moreover it’s really impossible for a family
            to live in a hotel for lets say 3/6 months.
            </p>

        <hr />

        <h1 style={{ textAlign: "center" }} >
            Why To Choose Us
            </h1>

        <p style={{ textAlign: "center", marginTop: "7px" }}>
            Frequent transfers are, no doubt, an actual headache. They have to pack all
            their goods and transfer them to a new city, search for a perfect house for
            their family, unpack all the goods and arrange them.
            But what if we provide
            them with plenty of
            choices of houses in their new city open to be rented
            with all the goods already present in the house (e.g. Refrigerator, LED TV,
            Beds, mattresses, A.C., furniture, etc.).
            Now they just have to pack their
            clothes and move to their new home, isn’t it easy and reduces the pain we
            discussed? Also now they don’t have to move to the plenty of houses
            in-person to select the best for them, 
            all they need is to visit our website
            and take a glance at the furniture and other goods present inside a house
            from pictures and videos uploaded by the house owner.
            We are currently living in the
            covid-19 pandemic where all the work is being
            done from home. Also, many companies are planning to fully shift to
            remote working. So
            our web application will also provide an option for the
            people working remotely to explore various cities while working, without
            any extra pain. We can call it
            a wokation (work + vacation) E.g. If a software
            engineer has a desire to work while 
            enjoying a beautiful scene at a beach in
            Goa, he can do so by finding a house in a coastal area,
            pack his clothes and
            just move to his new house in Goa. And let say if after a few months he is
            bored with the beach scene and now
             wants to work from shimla they just
            have to book a new house and move, without any pain of shifting goods of
            basic needs with them
            </p>

        <hr />

        <h1 style={{ textAlign: "center" }}>
            Services
        </h1>

        <p style={{ textAlign: "center", marginTop: "7px" }}>
            Due to evolution in internet services and IT
             industry as well, No sector is left untouched.
            The <b>HOUSE RENTAL SYSTEM</b> is also the outcome of this advancement. HRS
            provides the following services :-
        </p>

        {/* <ul style={{ textAlign: "center", listStyleType:"square"}}> */}
        <li style={{ listStyleType: "square" }}>
            This platform provides plenty of choices of houses 
            in their new city, open to be rented
            with all the basic amenities.
        </li>
        <li style={{ listStyleType: "square" }}>
            Enhance Business Processes: To be able to use internet technology to project the
            rental company to the global world 
            instead of limiting their services to their local domain
            alone, thus increasing their return on investment.
        </li>
        <li style={{ listStyleType: "square" }}>
            Online House/Room Booking: A tools through which customers 
            can book available
            Rooms/House/Apartment online
             prior to their date of using the house instead of walking
            around and asking for a vacant house.
        </li>
        {/* </ul> */}


    </div>
}