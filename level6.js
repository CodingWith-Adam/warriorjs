class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    if (this.health == null) this.health = warrior.health();
    // Cool code goes here

    if (!this.checkedWall) {
      if (warrior.feel("backward").isWall()) {
        this.checkedWall = true;
        warrior.walk();
      } else if (warrior.feel("backward").isEmpty()) {
        warrior.walk("backward");
      } else if (
        warrior.feel("backward").getUnit() &&
        warrior.feel("backward").getUnit().isBound()
      ) {
        warrior.rescue("backward");
      }
    } else if (warrior.feel().isEmpty()) {
      if (
        this.isHealthTheSameAsLastTurn(warrior) &&
        warrior.health() < warrior.maxHealth()
      ) {
        warrior.rest();
      } else {
        if (warrior.health() < 10) {
          warrior.walk("backward");
        } else {
          warrior.walk();
        }
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
