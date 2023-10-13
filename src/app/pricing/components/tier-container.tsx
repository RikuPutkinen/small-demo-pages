import TierData from "../types/tier-data";
import styles from '../pricing.module.css';

export default function TierContainer({ data, monthly }: {data : TierData, monthly: boolean}) {
  const { name, description, monthlyPrice, yearlyPrice, features, popular} = data;

  return (
    <>
      {popular ? <div><p className="text-center bg-blue-950 -mb-4">Popular Choice</p></div> : null}
      <div className={styles.tier_container}>
        <div>
          <p className="text-center text-2xl">{name}</p>
          <p className="text-center">€{monthly ?
            `${monthlyPrice} / month` :
            `${yearlyPrice} / year`
            }
          </p>
          <p>{description}</p>
        </div>
        <ul className="list-disc list-inside">
          {features.map(feature => {
            return <li key={feature}>{feature}</li>
          })}
        </ul>
        <button className="w-full bg-blue-950 rounded-md p-1">{(monthlyPrice === 0 && yearlyPrice === 0) ?
          'Start now' :
          'Buy now'}
        </button>
      </div>
    </>
  )
}