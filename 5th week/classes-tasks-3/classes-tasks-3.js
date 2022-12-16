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
  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;
    armor;
    name;

    constructor({
      name,
      hp,
      en,
      armor
    })

    {
      this.hp = hp;
      this.#maxHp = hp;
      this.en = en;
      this.#maxEn = en;
      this.armor = armor;
      this.name = name;
    }

    set hp(value) {
      this.#hp = value
    }

    get hp() {
      return this.#hp;
    }

    set en(value) {
      if (this.en < 0 || this.en > this.#maxEn) {
        console.error(`HP cannot be less than 0 or more than player's MaxHP`);
        return;
      } 

      this.#en = value;
    }

    get en() {
      return this.#en;
    }
    
    get hpPerc() {
      return Number((100 * this.#hp / this.#maxHp).toFixed(2));
    }

    learnSkill(skillName, {damage, penetration, heal, cost, desc}) {
      this[skillName] = function(frenemy) {
        const effectiveArmor = frenemy.armor - penetration;

        if (this.#en < cost) return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        this.en -= cost;

        const damageAmountDone = Number((damage * ((100 - effectiveArmor)/100)).toFixed(2));

        frenemy.hp -= damageAmountDone;

        const healthBeforeHeal = this.hp;
        this.hp += heal;
        const healthAfterHeal = this.hp - healthBeforeHeal;

        return ( `${this.name} used ${skillName}, ${desc}, against ${frenemy.name}, doing ${damageAmountDone} damage!`
          + (heal !== 0 ? ` ${this.name} healed for ${heal} health!` : '')
          + (frenemy.hp <= 0 ? ` ${frenemy.name} died.` : ` ${frenemy.name} is at ${frenemy.hpPerc}% health.`)
        )      
      }
    }
  }
  
 

const alice = new Player({name: "Alice", hp: 110, en: 50, armor: 10});
const bob = new Player({name: "Bob", hp: 100, en: 60, armor: 20});

console.log(alice);
console.log(bob);

alice.learnSkill('fireball',{
  damage: 23,
  penetration: 1.2,
  heal: 0,
  cost: 15,
  desc: 'a firey magical attack'
});

console.log(alice.fireball(bob));

bob.learnSkill('superbeam',{
	damage:200,
  penetration:50,
  heal:50,
  cost:75,
  desc: "an overpowered attack, pls nerf"
});

console.log(bob.superbeam(alice));

console.log("\n----\nBut wait! Bob's back in action!");

bob.learnSkill('Meteor Strike',{
	damage:118,
  penetration:4,
  heal:5,
  cost:20,
  desc: "an attack that basically ends the game (gg)"
});

console.log(bob['Meteor Strike'](alice));

}
console.groupEnd();
