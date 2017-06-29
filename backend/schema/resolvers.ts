const mpg: [{}] = [
  {
    id: 1,
    miles: '480',
    litres: '74'
  },
  {
    id: 2,
    miles: '350',
    litres: '44'
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
        miles: args.miles,
        litres: args.litres
      }
      mpg.push(newMpg)
      return newMpg
    }
  }
}
