import gql from 'graphql-tag'

export default gql`
  mutation addMpg(
    $date: String!
    $miles: String!
    $litres: String!
    $totalmpg: String!
  ) {
    addMpg(date: $date, miles: $miles, litres: $litres, totalmpg: $totalmpg) {
      date
      miles
      litres
      totalmpg
    }
  }
`
