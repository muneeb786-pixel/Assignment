var guests = {
    'Muneeb ur rehman': {
        status: 1
    },
    'subhan ahmed': {
        status: 1
    },
    'haris altaf': {
        status: 0
    }
};
// looping through
// modified form if the person leave then it status will me 0, else it status will be 1
for (var name_1 in guests) {
    if (guests.hasOwnProperty(name_1)) {
        if (guests[name_1].status == 1) {
            console.log("Hello ".concat(name_1, " Wishing you a good day.").concat('\n', "You have been invited on dinner Arranged By me on my working anniversary, ").concat('\n', "please be at my home on 20-feb-2023 at 8:00 pm. ").concat('\n', "I will be waiting for you. ").concat('\n'));
        }
        // person who can;t come 
        else {
            console.log("".concat(name_1, " is not able to attend meeting"));
        }
    }
}
