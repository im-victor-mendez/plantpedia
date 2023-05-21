import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase/index.mjs'
import paths from '../../firebase/paths.mjs'

const path = `${paths.Paths}/Find By`

function onValueCallback(snapshot, res) {
    const json = []
    const data = snapshot.val()

    if (data) Object.keys(data).forEach(itemKey => {
        const item = data[itemKey]

        json.push(item)
    })

    res.send(json)
}

export async function getFindBy(req, res) {
    onValue(ref(db, path),
    snapshot => onValueCallback(snapshot, res),
    { onlyOnce: true })
}