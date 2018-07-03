// 对象的多态性

var makeSound = function (animal) {
    animal.sound()
}

// 对象A
var Duck = function () {}
Duck.prototype.sound = function () {
    console.log('gagaga')
}
// 对象B
var Chicken = function () {}
Chicken.prototype.sound = function () {
    console.log('fufufuck')
}

// new A,B
var littleDuck = new Duck();
var littleChicken = new Chicken();

// 执行A&B.sound()
littleDuck.sound()
littleChicken.sound()

// 放在makeSound中串起来
makeSound(new Duck())