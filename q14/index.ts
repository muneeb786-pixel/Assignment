// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// creating a list of guest
const guests=[
    'Muneeb ur rehman','subhan ahmed','haris altaf'
]
// looping thr
guests.forEach(guest => {
    console.log(`Hello ${guest} Wishing you a good day.${'\n'}You have been invited on dinner Arranged By me on my working anniversary, ${'\n'}please be at my home on 20-feb-2023 at 8:00 pm. ${'\n'}I will be waiting for you. ${'\n'}`);
});