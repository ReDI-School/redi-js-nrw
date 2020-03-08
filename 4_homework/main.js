/* PART 1 */

function createIntroduction(name, age, language) {
    let intro = "Hello! my name is " + name;
    intro += ", I am " + age + " years old and I speak ";
    intro += language + ".";
    return intro;
}

console.log(createIntroduction("John", 18, "English"));

/* PART 2 */

function giftEmployee(numNormalDays, numExtraDays) {
    let normalBonus = 1;
    let extraBonus = 3;
    let totalBonus = normalBonus * numNormalDays;
    totalBonus += extraBonus * numExtraDays;

    console.log("Total Bonus: " + totalBonus);

    let gift;
    if (totalBonus > 250) {
        gift = "Pay raise";
    } else if (totalBonus < 100) {
        gift = "Nothing";
    } else {
        gift = "Chocolate Box";
    }
    console.log("Employee gets " + gift);
}

giftEmployee(200, 20);
giftEmployee(150, 0);
giftEmployee(50, 10);