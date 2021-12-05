//level 5

class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    // Cool code goes here
    if (warrior.feel().isEmpty()) {
      if (
        this.isHealthTheSameAsLastTurn(warrior) &&
        warrior.health() < warrior.maxHealth()
      ) {
        warrior.rest();
      } else {
        warrior.walk();
      }
    } else if (warrior.feel().getUnit().isEnemy()) {
      warrior.attack();
    } else if (warrior.feel().getUnit().isBound()) {
      warrior.rescue();
    }

    this.health = warrior.health();
  }

  isHealthTheSameAsLastTurn(warrior) {
    warrior.think(`h: ${this.health} w:${warrior.health()}`);
    return this.health != null && warrior.health() >= this.health;
  }
}
