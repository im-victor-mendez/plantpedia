import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase/index.mjs'

const path = 'Paths/Find By'

function onValueCallback(snapshot, res) {
    const json = []
    const data = snapshot.val()

    if (data) Object.keys(data).forEach(item => {
        const { image, name, path } = data[item]
        json.push({ image, name, path })
    })

    res.send(json)
}

export async function getFindBy(req, res) {
    onValue(ref(db, path), snapshot => onValueCallback(snapshot, res))
}