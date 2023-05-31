import { DataSnapshot, onValue, ref } from 'firebase/database'
import { db } from '../../firebase/index.mjs'
import paths from '../../firebase/paths.mjs'

const path = `${paths.Paths}/Find By`

/**
 * Get Find By
 * @description Sends Find By list to display as card links
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getFindBy(req, res) {
    onValue(ref(db, path),
    snapshot => onValueCallback(snapshot, res),
    { onlyOnce: true })
}

/**
 * On Value Call Back
 * @description A callback that fires when the specified event occurs.
 * The callback will be passed a DataSnapshot.
 * @param {DataSnapshot} snapshot Firebase snapshot
 * @param {Response} res Response of Get Find By parent function
 */
function onValueCallback(snapshot, res) {
    const json = []
    const data = snapshot.val()

    if (data) Object.keys(data).forEach(itemKey => {
        const item = data[itemKey]

        json.push(item)
    })

    res.send(json)
}