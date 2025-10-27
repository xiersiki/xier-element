import { readdirSync } from 'fs'
import {delay} from 'lodash-es'
function moveStyles() {
    try {
        readdirSync('./dist/umd/index.css.gz')
        shell.cp('./dist/umd/index.css', "./dist/index.css")
    } catch (_) {
        console.log(_)
        delay(moveStyles, TRY_MOVE_STYLES_DELAY)
    }
}
moveStyles()