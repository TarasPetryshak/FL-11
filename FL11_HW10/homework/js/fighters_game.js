class Fighter {
    constructor({ name, damage, hp, agility }) {
        let _name = name;
        let _damage = damage;
        let _hp = hp;
        let _agility = agility;
        this.totalHp = hp;
        this.winsProperty = 0;
        this.lossesProperty = 0;
        this.getName = () => {
            return _name;
        }
        this.getDamage = () => {
            return _damage;
        }
        this.getAgility = () => {
            return _agility;
        }
        this.getHealth = () => {
            return _hp;
        }
        this.attack = (attackFighter) => {
            const multiplier = 101;
            let success = Math.floor(Math.random() * multiplier);
            if (success > _agility) {
                console.log(`${attackFighter.getName()} make ${attackFighter.getDamage()} damage to ${_name}`)
                _hp = this.getHealth() - attackFighter.getDamage();
            } else {
                console.log(`${attackFighter.getName()} attack missed`);
            }
        }
        this.heal = (quantityAddHealthPoint) => {
            let resultHp = _hp + quantityAddHealthPoint;
            if (resultHp > this.totalHp) {
                _hp = this.totalHp;
            } else {
                _hp = resultHp;
            }
        }
        this.dealDamage = (quantitySubtractHealthPoint) => {
            let compareNumber = 0;
            let resultHp = _hp - quantitySubtractHealthPoint;
            if (resultHp < compareNumber) {
                _hp = compareNumber;
            } else {
                _hp = resultHp;
            }
        }
        this.addWin = () => {
            return this.winsProperty++;
        }
        this.addLoss = () => {
            return this.lossesProperty++;
        }
        this.logCombatHistory = () => {
            console.log(`Name: ${_name}, Wins: ${this.winsProperty}, Losses: ${this.lossesProperty}`);
        }
    }
}
const battle = (fighter1, fighter2) => {
    const compareNumber = 0;
    const negativeMultiplier = -1;
    if (fighter1.getHealth() === compareNumber || fighter1.getHealth() < compareNumber) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    }
    if (fighter2.getHealth() === compareNumber || fighter2.getHealth() < compareNumber) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }
    while (fighter1.getHealth() > compareNumber && fighter2.getHealth() > compareNumber) {
        fighter2.attack(fighter1);
        fighter1.attack(fighter2);
        if (fighter1.getHealth() < compareNumber) {
            fighter1.heal(fighter1.getHealth() * negativeMultiplier);
        }
        if (fighter2.getHealth() < compareNumber) {
            fighter2.heal(fighter2.getHealth() * negativeMultiplier);
        }
        if (fighter1.getHealth() === compareNumber) {
            fighter1.addLoss();
            fighter2.addWin();
        }
        if (fighter2.getHealth() === compareNumber) {
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}