/**
 * Class Salad.
 *
 * @constructor
 * @param options.salad
 * @param weight    weight of salad
 */
function Salad(options, weight) {
    OrderItem.call(this, options);
    this.weight = weight;
}

Salad.prototype = Object.create(OrderItem.prototype);

var saladOptions = {};

saladOptions.CEASAR = {
    name: 'Ceasar',
    price: 100,
    calories: 20
};
saladOptions.OLIVIE = {
    name: 'Olivie',
    price: 50,
    calories: 80
};

Salad.prototype.getFullName = function () {
    return this.name + " (" + this.weight + "g.) ";
};

Salad.prototype.getPrice = function () {
    return this.price / 100 * this.weight;
};

Salad.prototype.getCalories = function () {
    return this.calories / 100 * this.weight;
};