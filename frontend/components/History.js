import React from 'react'
import dateformat from 'dateformat'
import Waiting from './Waiting'

const Th = ({ props }) =>
  <th className="fw6 tl pa3 bg-white tc">
    {props}
  </th>

const Td = ({ props }) =>
  <td className="pa2 tc">
    {props}
  </td>

const History = ({ data }) => {
  if (!data.loading) {
    return (
      <div>
        <div className="pa4 bg-gold">
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center bg-white" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <Th props="Date" />
                  <Th props="Miles" />
                  <Th props="Liters" />
                  <Th props="MPG" />
                </tr>
              </thead>
              <tbody className="lh-copy">
                {Object.keys(data.mpg)
                  .map(x => data.mpg[x])
                  .sort()
                  .map((x, key) =>
                    <tr className="stripe-dark" key={key}>
                      <Td
                        props={dateformat(parseInt(x.date), 'mmmm dS, yyyy')}
                      />
                      <Td props={x.miles} />
                      <Td props={x.litres} />
                      <Td props={x.totalmpg} />
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  } else {
    data.loading
  }
  return <Waiting {...data} />
}

export default History
