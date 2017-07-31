var OrangeTree = function() {
  this.age = 0;
  this.height = 0;
  this.oranges = [];
}

OrangeTree.prototype.isMature = function() {
  if (this.age >= 6) {
    return true;
  }
  else {
    return false;
  }
}

OrangeTree.prototype.isDead = function() {
  if (this.age >= 100) {
    return true;
  }
  else {
    return false;
  }
}

OrangeTree.prototype.hasOranges = function() {
  if (this.oranges.length === 0) {
    return false;
  }
  else {
    return true;
  }
}

OrangeTree.prototype.passGrowingSeason = function() {
  if ((this.isDead() != true) && (this.height < 25 ) && (this.age >= 6)) {
    this.age += 1;
    this.height += 2.5;
    this.oranges = [];
    for (var i = 0; i < 10; i++) {
      this.oranges.push(new Orange());
    };
  }
  else if ((this.isDead() != true) && (this.height >= 25) && (this.age >= 6)) {
    this.age += 1;
    this.oranges = [];
    for (var i = 0; i < 10; i++) {
      this.oranges.push(new Orange());
    };
  }
  else if ((this.isDead() != true) && (this.height < 25) && (this.age < 6)) {
    this.age += 1;
    this.height += 2.5;
    this.oranges = [];
  }
  else if ((this.isDead() != true) && (this.height >= 25) && (this.age < 6)) {
    this.age += 1;
    this.oranges = [];
  }
  else {
    this.age;
    this.height;
    this.oranges = [];
  }
}

OrangeTree.prototype.pickAnOrange = function() {
  if (this.oranges.length > 0) {
    return this.oranges.pop();
  }
  else {
    return undefined;
  }
}

