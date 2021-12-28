// @vendors
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerProfile } from 'components/ui/PlayerProfile'
import { PlayerAvatar, PlayerGeneralStats } from 'components/ui/PlayerProfile'

// @hooks
import { useStores } from 'hooks/store'

// @stores
import { SoccerField } from 'components/ui/SoccerField/index'

export const Player: React.VFC = observer(() => {
    const { playerStore } = useStores()

    useEffect(() => {
        playerStore.getPlayer('0192015c-5aa0-4604-b278-8e5dcc85c9bb')
    }, [playerStore])

    return (
        <section>
            <PlayerProfile>
                <PlayerAvatar player={playerStore.player} />
                <PlayerGeneralStats />
                <SoccerField />
            </PlayerProfile>
        </section>
    )
})
