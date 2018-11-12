let bodyParts = ['eye', 'nose', 'hair', 'neck', 'head', 'mouth', 'ear', 'tummy', 'finger', 'hand']
let adjectives = ['boring', 'smelly', 'orange', 'quiet', 'ugly', 'unsightly', 'fishy', 'fat', 'furry']
let animals = ['monkey', 'shark', 'bear', 'dog', 'parrot', 'elephant']
let animalsBodyParts = ['trunk', 'beak', 'paws', 'feathers', 'wings', 'whiskers', 'claws', 'fins', 'shell']
let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
let animal = animals[Math.floor(Math.random() * animals.length)]
let animalsBodyPart = animalsBodyParts[Math.floor(Math.random() * animalsBodyParts.length)]
let randomInsult = `Your ${bodyPart} is more ${adjective} than a ${animal}'s ${animalsBodyPart}!!!`
console.log(randomInsult)
