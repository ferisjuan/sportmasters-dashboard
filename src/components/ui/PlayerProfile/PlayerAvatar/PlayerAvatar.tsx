// @vendors
import { observer } from 'mobx-react-lite'

// @hooks
import { useStores } from 'hooks/store'
import { Card, Col, Container, Image, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { IPlayer } from '../../../../interfaces'
import { useTranslation } from 'react-i18next'

export const PlayerAvatar: React.FC = observer(() => {
    const { t } = useTranslation()

    const [player, setPlayer] = useState<IPlayer>({} as IPlayer)

    const {
        playerProfileStore: { playerProfile },
    } = useStores()

    useEffect(() => {
        setPlayer(playerProfile)
    }, [playerProfile])

    return (
        <Col span={2}>
            <Card
                radius="lg"
                shadow="sm"
                padding="md"
                component="article"
                sx={(theme) => ({ backgroundColor: theme.colors.yellow[5] })}
            >
                <Card.Section>
                    <Container fluid padding={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Image alt={player?.image?.alt} fit="contain" src={player?.image?.src} width={120} />
                    </Container>
                </Card.Section>

                <Container>
                    <Text align="center" mt={8} size="lg" transform="uppercase" weight={500}>
                        {player?.lastName}
                    </Text>
                </Container>

                <Text align="center" size="sm">
                    {t(`fieldPosition.${player?.fieldPosition}`)}
                </Text>
                <Text align="center" size="sm">
                    {player?.teamId}
                </Text>
            </Card>
        </Col>
    )
})
