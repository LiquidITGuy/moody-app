import {MoodService} from './mood.ts'

const moodService = new MoodService()

const services = {
	mood: moodService,
}

export default services
