console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    id;
    level;

    constructor({
      id,
      level,
    }) 
    
    {
      this.id = id,
      this.level = level
    }


    get points() {
      const levelObj = {
        'VE': 5,
        'EA': 10,
        'ME': 20,
        'HA': 40,
        'VH': 80,
        'EX': 120,
      }
      return levelObj[this.level];
    }
  }

  class User {
    name;
    xp;
    log;

    constructor({
      name,
      xp,
      log
    }) 
    
    {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    set newSolvedChallenge(value) {
      this.log.push(value.id);
      this.xp = this.xp + value.points;
    }

  }

  const user1 = new User({ name: 'Madam', xp: 0, log: [] });
  const user2 = new User({ name: 'Steve', xp: 0, log: [] });

  console.log(user1)
  console.log(user2)

  const challenge1 = new Challenge({ id: 1, level: 'VE' });
  const challenge2 = new Challenge({ id: 2, level: 'EA' });
  const challenge3 = new Challenge({ id: 3, level: 'ME' });
  const challenge4 = new Challenge({ id: 4, level: 'HA' });
  const challenge5 = new Challenge({ id: 5, level: 'VH' });
  const challenge6 = new Challenge({ id: 6, level: 'EX' });

  console.log(challenge1)
  console.log(challenge2)
  console.log(challenge3)
  console.log(challenge4)
  console.log(challenge5)
  console.log(challenge6)

  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;

  console.log(user1);

  console.log(`User1 XP: ${user1.xp}`);

  console.log(`User1 Solved levels: ${user1.log}`);


  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;

  console.log(user2);

  console.log(`User2 XP: ${user2.xp}`);

  console.log(`User2 Solved levels: ${user2.log}`);

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  // ... code
}
console.groupEnd();

