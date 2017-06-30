const mpg: [{}] = [
  {
    id: 1,
    date: 1498760225334,
    miles: '700',
    litres: '50',
    totalmpg: '62.30'
  },
  {
    id: 2,
    date: 1498760225334,
    miles: '360',
    litres: '47',
    totalmpg: '34.09'
  }
]

let nextId: number = mpg.length + 1

export const resolvers: {} = {
  Query: {
    mpg: () => {
      return mpg
    }
  },
  Mutation: {
    addMpg: (root, args) => {
      const newMpg = {
        id: nextId++,
        date: args.date,
        miles: args.miles,
        litres: args.litres,
        totalmpg: args.totalmpg
      }
      mpg.push(newMpg)
      return newMpg
    }
  }
}
