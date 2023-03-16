const scorePassword = pass => {
  let score = 0
  let length = 0
  let specialChar = 0
  let caseMix = 0
  let numCharMix = 0

  const specialCharRegex = /[^A-Za-z0-9]/g
  const lowercaseRegex = /(.*[a-z].*)/g
  const uppercaseRegex = /(.*[A-Z].*)/g
  const numberRegex = /(.*[0-9].*)/g
  const repeatCharRegex = /(\w)(\1+\1+\1+\1+)/g

  const hasSpecialChar = specialCharRegex.test(pass)
  const hasLowerCase = lowercaseRegex.test(pass)
  const hasUpperCase = uppercaseRegex.test(pass)
  const hasNumber = numberRegex.test(pass)
  const hasRepeatChars = repeatCharRegex.test(pass)


  if (pass.length >= 8 && hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar) {
    if (pass.length == 8) {
      score = 1;
    }
    if (pass.length >= 9 && pass.length <= 10) {
      score = 2;
    }
    if (pass.length >= 11 && pass.length <= 14) {
      score = 3;
    }
    if (pass.length > 14) {
      score = 4;
    }
  }
  return score
}

export default scorePassword
