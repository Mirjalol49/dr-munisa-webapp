import React from 'react'
import "./Services.css"
import ServiceCard from '../../../assets/Components/ServiceCard/ServiceCard'
import Hair from "../../../assets/Images/1.jpg"
import Beard from "../../../assets/Images/2.jpg"
import EyeBrow from "../../../assets/Images/3.jpg"
import PRP from "../../../assets/Images/4.jpg"
import Dermatolog from "../../../assets/Images/5.jpg"

const Services = () => {
  return (
    <section id="services" className='service'>
        <div className="container">
            <h2 className='service-title reveal reveal-slide-up'>Bizning Xizmatlar</h2>
            <div className="service-wrapper">
               <ServiceCard img={Hair} title={"Soch Transplantatsiyasi"} text={"Ilg‘or FUE yoki DHI usullaridan foydalangan holda soch to‘kilishi uchun tabiiy va doimiy yechim."}/>
               <ServiceCard img={Beard} title={"Soqol Transplantatsiyasi"} text={"Ilg‘or, kam invaziv usul bilan soqolingizni zich va chiroyli qiling. Tabiiy o‘sish va uzoq muddatli natijaga kafolat beramiz."}/>
               <ServiceCard img={EyeBrow} title={"Qosh Transplantatsiyasi"} text={"Tabiiy ko‘rinish uchun qoshlaringizni o‘z sochlaringiz yordamida shakllantiring va qalinlashtiring."}/>
               <ServiceCard img={PRP} title={"Soch to‘kilishida PRP terapiyasi"} text={"Soch o‘sishini rag‘batlantirish va follikulalarni mustahkamlash uchun trombotsitlarga boy plazma bilan davolash."}/>
               <ServiceCard img={Dermatolog} title={"Dermatalogiya Konsultatsiyasi"} text={"Soch to‘kilishi, bosh terisi kasalliklari va teri muammolari uchun mutaxassis maslahati va moslashtirilgan davolash rejalarini oling."}/>
            </div>
        </div>
      
    </section>
  )
}

export default Services
