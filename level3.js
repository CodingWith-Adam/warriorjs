class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    // Cool code goes here
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < warrior.maxHealth()) {
        warrior.rest();
      } else {
        warrior.walk();
      }
    } else {
      warrior.attack();
    }
  }
}
