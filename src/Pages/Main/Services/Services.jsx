import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Services.css"
import ServiceCard from '../../../assets/Components/ServiceCard/ServiceCard'
import Hair from "../../../assets/Images/1.jpg"
import Beard from "../../../assets/Images/2.jpg"
import EyeBrow from "../../../assets/Images/3.jpg"
import PRP from "../../../assets/Images/4.jpg"
import Dermatolog from "../../../assets/Images/5.jpg"

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className='service'>
        <div className="container">
            <h2 className='service-title reveal reveal-slide-up'>{t('services.title')}</h2>
            <div className="service-wrapper">
               <ServiceCard img={Hair} title={t('services.hairTransplant.title')} text={t('services.hairTransplant.description')}/>
               <ServiceCard img={Beard} title={t('services.beardTransplant.title')} text={t('services.beardTransplant.description')}/>
               <ServiceCard img={EyeBrow} title={t('services.eyebrowTransplant.title')} text={t('services.eyebrowTransplant.description')}/>
               <ServiceCard img={PRP} title={t('services.prpTherapy.title')} text={t('services.prpTherapy.description')}/>
               <ServiceCard img={Dermatolog} title={t('services.dermatology.title')} text={t('services.dermatology.description')}/>
            </div>
        </div>
      
    </section>
  )
}

export default Services
