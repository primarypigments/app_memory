// Images for memory card

const memoryArray = [
    {
        name: 'aggression-1',
        img: 'assets/images/aggression-1.jpg',
    },

    {
        name: 'aggression-2',
        img: 'assets/images/aggression-2.jpg',
    },
    {
        name: 'confidence-2',
        img: 'assets/images/confidence-2.jpg',
    },
    {
        name: 'confidence-3',
        img: 'assets/images/confidence-3.jpg',
    },
    {
        name: 'depression-2',
        img: 'assets/images/depression-2.jpg',
    },
    {
        name: 'depression-3',
        img: 'assets/images/depression-3.jpg',
    },
    {
        name: 'depression-4',
        img: 'assets/images/depression-4.jpg',
    },
    {
        name: 'found-img',
        img: 'assets/images/found-img.jpg',
    },
    {
        name: 'goals-img',
        img: 'assets/images/goals-img.jpg',
    },
    {
        name: 'meetings-img',
        img: 'assets/images/meetings-img.jpg',
    },
    {
        name: 'harmony-2',
        img: 'assets/images/harmony-2.jpg',
    },
    {
        name: 'harmony-2',
        img: 'assets/images/harmony-2.jpg',
    },
    {
        name: 'self-aware-1',
        img: 'assets/images/self-aware-1.jpg',
    },
    {
        name: 'self-aware-3',
        img: 'assets/images/self-aware-3.jpg',
    },
    {
        name: 'trauma-2',
        img: 'assets/images/trauma-2.jpg',
    },
    {
        name: 'trauma-3',
        img: 'assets/images/trauma-3.jpg',
    },
    {
        name: 'aggression-1',
        img: 'assets/images/aggression-1.jpg',
    },

    {
        name: 'aggression-2',
        img: 'assets/images/aggression-2.jpg',
    },
    {
        name: 'confidence-2',
        img: 'assets/images/confidence-2.jpg',
    },
    {
        name: 'confidence-3',
        img: 'assets/images/confidence-3.jpg',
    },
    {
        name: 'depression-2',
        img: 'assets/images/depression-2.jpg',
    },
    {
        name: 'depression-3',
        img: 'assets/images/depression-3.jpg',
    },
    {
        name: 'depression-4',
        img: 'assets/images/depression-4.jpg',
    },
    {
        name: 'found-img',
        img: 'assets/images/found-img.jpg',
    },
    {
        name: 'goals-img',
        img: 'assets/images/goals-img.jpg',
    },
    {
        name: 'meetings-img',
        img: 'assets/images/meetings-img.jpg',
    },
    {
        name: 'harmony-2',
        img: 'assets/images/harmony-2.jpg',
    },
    {
        name: 'harmony-2',
        img: 'assets/images/harmony-2.jpg',
    },
    {
        name: 'self-aware-1',
        img: 'assets/images/self-aware-1.jpg',
    },
    {
        name: 'self-aware-3',
        img: 'assets/images/self-aware-3.jpg',
    },
    {
        name: 'trauma-2',
        img: 'assets/images/trauma-2.jpg',
    },
    {
        name: 'trauma-3',
        img: 'assets/images/trauma-3.jpg',
    }
]

   
    // Making the cards in a random order  (http.https://javascript.info///
memoryArray.sort(() => 0.5 - Math.random())

// Attempt At fisher Yates Shuffle
//for(let i = 0; 1 < memoryArray.length; 1++) {
   // let temp = memoryArray[i];
   // let r = Math.floor(Math.random() * memoryArray.length);
//memoryArray[i] = memoryArray[r];
  //  memoryArray[r] = temp;
//}


// Checking array random functionality--------- ALL GOOD!
console.log(memoryArray)

const frameworkHtml = document.querySelectorA('#framework')
console.log(frameworkHtml) 
