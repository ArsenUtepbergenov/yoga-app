function getId() {
  let i = 0

  return function () {
    return ++i
  }
}

export const _id = getId()
