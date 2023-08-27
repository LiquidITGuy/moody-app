export class MoodService {
    private mood: Array<{ date: Date, mood: number }>
    constructor() {
        this.mood = [
            {date: new Date("01/01/2023"), mood: 3},
            {date: new Date("01/02/2023"), mood: 2},
            {date: new Date("01/03/2023"), mood: 4},
            {date: new Date("01/04/2023"), mood: 5},
            {date: new Date("01/05/2023"), mood: -1},
            {date: new Date("01/06/2023"), mood: 2},
            {date: new Date("01/07/2023"), mood: 0},
            {date: new Date("01/08/2023"), mood: 3},
            {date: new Date("01/09/2023"), mood: 3},
            {date: new Date("01/10/2023"), mood: 3},
            {date: new Date("01/11/2023"), mood: 3},
            {date: new Date("01/12/2023"), mood: 2},
            {date: new Date("01/13/2023"), mood: 3},
            {date: new Date("01/14/2023"), mood: 3},
        ]
    }
    getMood(): Array<{ date: Date, mood: number }>{
        return this.mood
    }
    ajouteMood(mood: number): void{
        this.mood.push({date: new Date(), mood })
    }

}
