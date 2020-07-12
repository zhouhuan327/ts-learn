enum Animals {
  Dog = 1,
  cat = 1,
}
interface Dogs {
  type: Animals.Dog
}

enum Status {
  Off,
  On,
}
interface Light {
  status: Status
}
const light: Light = {
  status: Status.Off | Status.On,
}
console.log(Status)

const enum Ce {}
