import { Distribution } from 'helios-distribution-types'

export interface DistroMeta {

    /**
     * Distribution metadata to be forwarded to the distribution file.
     */
    meta: {
        rss: Distribution['rss']
        discord?: Distribution['discord']
    }

}

export function getDefaultDistroMeta(): DistroMeta {

    return {

        meta: {
            rss: 'https://kginfoservs.com/api/rss',
            discord: {
                clientId: '688153149839638544',
                smallImageText: 'Joue Sur KGInfoServs',
                smallImageKey: 'logonewrondpng'
            }
        }
        
    }

}