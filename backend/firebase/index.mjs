import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = JSON.parse(process.env.DATABASE_CONFIG)

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Database
export const db = getDatabase(firebaseApp)

export default firebaseApp