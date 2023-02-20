// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// creating a list of guest
// modified form of q 14 it also handles if person leave
type person={
    [name:string]:{
        status:number
    }
}
const guests:person={
    'Muneeb ur rehman':{
        status:1
    },
    'subhan ahmed':{
        status:1
    },
    'haris altaf':{
        status:0
    }
}
// looping through
// modified form if the person leave then it status will me 0, else it status will be 1
for(let name in guests){
    if (guests.hasOwnProperty(name)) {
        if(guests[name].status==1){
             console.log(`Hello ${name} Wishing you a good day.${'\n'}You have been invited on dinner Arranged By me on my working anniversary, ${'\n'}please be at my home on 20-feb-2023 at 8:00 pm. ${'\n'}I will be waiting for you. ${'\n'}`);
        }
        // person who can;t come 
        else{
            console.log(`${name} is not able to attend meeting`);
        }
    }
}

