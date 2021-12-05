class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    if (this.health == null) this.health = warrior.health();

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
    } else {
      if (warrior.feel().getUnit().isBound()) {
        warrior.rescue();
      } else {
        warrior.attack();
      }
    }

    this.health = warrior.health();
  }

  isHealthTheSameAsLastTurn(warrior) {
    return warrior.health() >= this.health;
  }
}
