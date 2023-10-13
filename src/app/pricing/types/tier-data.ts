export default interface TierData {
  name: string,
  description: string,
  monthlyPrice: number,
  yearlyPrice: number,
  features: string[],
  popular?: boolean
}