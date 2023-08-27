const MOOD_PAR_DEFAUT_SI_NON_REMPLI = [
	{date: new Date('01/01/2023'), mood: 3},
	{date: new Date('01/02/2023'), mood: 2},
	{date: new Date('01/03/2023'), mood: 4},
	{date: new Date('01/04/2023'), mood: 5},
	{date: new Date('01/05/2023'), mood: -1},
	{date: new Date('01/06/2023'), mood: 2},
	{date: new Date('01/07/2023'), mood: 0},
	{date: new Date('01/08/2023'), mood: 3},
	{date: new Date('01/09/2023'), mood: 3},
	{date: new Date('01/10/2023'), mood: 3},
	{date: new Date('01/11/2023'), mood: 3},
	{date: new Date('01/12/2023'), mood: 2},
	{date: new Date('01/13/2023'), mood: 3},
	{date: new Date('01/14/2023'), mood: 3},
]

export class MoodService {
	private mood: Array<{ date: Date, mood: number }>
	public isByDefault: boolean = false
	constructor() {
		const localStorage = window.localStorage.getItem('mood')
		if(!localStorage) {
			this.mood = MOOD_PAR_DEFAUT_SI_NON_REMPLI
			this.isByDefault = true
		}
		else {
			this.mood = JSON.parse(localStorage).map((mood) => ({
				date: new Date(mood.date),
				mood: mood.mood,
			}))
		}
	}
	getMood(): Array<{ date: Date, mood: number }>{
		return this.mood
	}
	ajouteMood(mood: number): void{
		if(this.isByDefault) {
			this.mood = []
			this.isByDefault = false
		}
		this.mood.push({date: new Date(), mood })
		window.localStorage.setItem('mood', JSON.stringify(this.mood))
	}

}
