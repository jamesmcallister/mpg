import gql from 'graphql-tag'

export default gql`
  query MpgListQuery {
    mpg {
      id
      date
      miles
      litres
      totalmpg
    }
  }
`
