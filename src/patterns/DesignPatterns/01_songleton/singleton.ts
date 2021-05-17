export default function Singleton() {
  const counter1 = new Counter()
  const counter2 = new Counter()

  console.log('Singleton -> counter1.getCount()', counter1.getCount())

  counter2.increaseCount()
  counter1.increaseCount()

  console.log('Singleton -> counter2.getCount()', counter2.getCount())
}

interface ICounter {
  count: number
  getCount: () => number
  increaseCount: () => number
}

class Counter implements ICounter {
  static instance: ICounter
  count: number = 0
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance
    }
    Counter.instance = this
    return this
  }
  getCount() {
    return this.count
  }
  increaseCount() {
    return this.count++
  }
}
