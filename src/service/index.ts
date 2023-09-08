import { MoodService } from './mood.ts'
import { WriterService } from './writer.ts'

const moodService = new MoodService()
const writerService = new WriterService()

const services = {
	mood: moodService,
	writer: writerService,
}

export default services
