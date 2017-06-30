const formulaMpg = (distance, quantity) => {
  const combine = distance / quantity
  const total = combine * 4.45
  return total.toFixed(2)
}

export default formulaMpg
