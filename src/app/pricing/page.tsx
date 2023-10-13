"use client"

import TierContainer from "./components/tier-container";
import TierData from "./types/tier-data";
import styles from './pricing.module.css';
import { ChangeEvent, FormEventHandler, useState } from "react";

const freeData: TierData = {
  name: 'Free',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  monthlyPrice: 0,
  yearlyPrice: 0,
  features: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Praesent interdum lectus sed metus tempor faucibus.',
    'Duis porttitor ex nec odio vestibulum aliquam.',
    'Sed interdum tellus ac massa rhoncus faucibus.',
    'Nullam quis tellus porttitor est fringilla semper.'
  ]
}

const premiumData: TierData = {
  name: 'Premium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  monthlyPrice: 5,
  yearlyPrice: 50,
  features: [
    'Ut vitae neque scelerisque, efficitur justo vel, suscipit velit.',
    'Etiam efficitur enim ac est semper, id porta ante egestas.',
    'Praesent luctus velit at ligula vehicula interdum.',
    'Sed id enim maximus, dictum sapien quis, lobortis odio.',
    'Vestibulum consectetur elit non lacus lobortis, sodales sollicitudin ligula sodales.'
  ],
  popular: true
}

const proData: TierData = {
  name: 'Pro',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  monthlyPrice: 10,
  yearlyPrice: 100,
  features: [
    'Suspendisse eu nisi dignissim, egestas purus ac, accumsan eros.',
    'Donec porttitor mi eget diam eleifend consequat.',
    'Morbi ultrices ligula id mauris maximus, tincidunt fermentum ligula tincidunt.',
    'Suspendisse luctus dolor vitae augue posuere, id pretium nisi dictum.',
    'Donec varius ante eu tortor lobortis euismod.'
  ]
}

export default function Page() {
  const [monthly, setMonthly] = useState(true);

  function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
    setMonthly(e.target.value === "monthly")
  }
  
  return (
    <>
      <h1 className="text-4xl text-center m-10">Our plans</h1>
      <div className="flex flex-col items-center">
        <div className={styles.sub_toggle} onChange={handleChange}>
          <input className={styles.sub_input} id="monthly" value="monthly" name="type" type="radio"  defaultChecked/>
          <label className={styles.sub_label} htmlFor="monthly">Monthly</label>
          <input className={styles.sub_input} id="yearly" value="yearly" name="type" type="radio"/>
          <label className={styles.sub_label} htmlFor="yearly">Yearly</label>
        </div>
      <div className={styles.pricing_container}>
        <TierContainer data={freeData} monthly={monthly} />
        <TierContainer data={premiumData} monthly={monthly} />
        <TierContainer data={proData} monthly={monthly} />
      </div>
      </div>
    </>
  )
}