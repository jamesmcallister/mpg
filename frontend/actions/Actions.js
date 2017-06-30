export const UPDATEDMILES = 'UPDATEDMILES'
export const UPDATEDLITRES = 'UPDATEDLITRES'

export function updateMiles(miles) {
  return {
    type: UPDATEDMILES,
    miles
  }
}
export function updateLitres(litres) {
  return {
    type: UPDATEDLITRES,
    litres
  }
}
