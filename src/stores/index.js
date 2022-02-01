import { derived, readable, writable } from 'svelte/store'

export const count = writable(0)

/*
  Start function is called when the store gets its first subscriber;
  Stop is called when the last subscriber unsubscribes
*/
export const time = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date()) // set the value
  }, 1000)

  return function stop(){
    clearInterval(interval)
  }
})

// You can create a store whose value is based on the value of one or more other stores with derived
const start = new Date()
export const elapsed = derived(time, ($time) => Math.round($time - start) / 1000)

export const name = writable('world')

export const greeting = derived(name, ($name) => `Hello ${$name}!`)