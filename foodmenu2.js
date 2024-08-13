const read = require('readline-sync');
console.log("***Welcome To NAVGURUKUL KITCHEN***");
console.log("Enter Todays day name or number  \n eg. monday to sunday or\n 1 to 7 ");

let Day = read.question("Enter day or day number here:-");

if (Day.toLowerCase() === "monday" || Day == 1) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}
else if (Day.toLowerCase() === "tuesday" || Day == 2) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}
else if (Day.toLowerCase() === "wednesday" || Day == 3) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}
else if (Day.toLowerCase() === "thusday" || Day == 4) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}
else if (Day.toLowerCase() === "friday" || Day == 5) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}
else if (Day.toLowerCase() === "saturday" || Day == 6) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}
else if (Day.toLowerCase() === "sunday" || Day == 7) {
    console.log("what do you want Breakfast,Lunch or Dinner ? ");
    console.log("For Breakfast Enter 1\n For Lunch Enter 2 \n For Dinner Enter 3  ");

    let Type = read.question("enter the Type :- ")
    if (Type == 1 || Type.toLowerCase() == "breakfast") {

        console.log("pls select your fev food \n for snack press 1 \n for sandwich press 2 \n For aalu paratha press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 100;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 50;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }

    else if (Type == 2 || Type.toLowerCase() == "lunch") {

        console.log("pls select your fev food \n for 'chhole-bhature' press 1 \n for 'kadhai-panir' press 2 \n For 'mix-veg' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
    else if (Type == 3 || Type.toLowerCase() == "dinner") {

        console.log("pls select your fev food \n for 'Chiken-Tanduri' press 1 \n for 'Mutton-Biryani ' press 2 \n For 'mutton-Gravy' press 3");
        let Bdishes = read.questionInt("Enter the number of your fev food:-")

        if (Bdishes == 1) {
            console.log("pls enter variation.... full or Half \n full=120rs and half=60 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 120;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 60;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 2) {
            console.log("pls enter variation.... full or Half \n full=150rs and half=80 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 150;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }
        else if (Bdishes == 3) {
            console.log("pls enter variation.... full or Half \n full=100rs and half=50 rs");
            let variation = read.question("enter variation here:- ")

            if (variation.toLowerCase() == "full") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 130;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
            else if (variation.toLowerCase() == "half") {
                let quantity = read.questionInt("enter the Quantity:- ")
                let bill = quantity * 80;
                console.log("Pay this ammount and have it ; ", bill);

                let payedAmount = read.questionInt("Give the amount you are paying:- ");

                if (payedAmount != bill) {
                    let remainingAmount = bill - payedAmount;
                    console.log(`your toral amount is ${bill} & you have payed ${payedAmount}`, "Pay this remaining amount: ", remainingAmount, "& have it THANK YOU... ");
                } else {
                    console.log("THANK YOU VERY MUCH!!   Payment successfull.!   Enjoy your Dish.!!!");
                }
            }
        }

    }
}

