// @vendors
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { TextInput, Button, Text, PasswordInput } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @components
import { SMContainer } from '~/components'

// @utils
import { useLoginForm } from './useLoginForm'

export const LoginForm = (): JSX.Element => {
    const { t } = useTranslation('loginForm')

    const { getInputProps, isLoginLoading, handleFormSubmit, handleForgotPassword } = useLoginForm()

    return (
        <SMContainer isLoading={isLoginLoading}>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <TextInput
                    required
                    label={t('emailLabel')}
                    placeholder={t('emailPlaceholder')}
                    {...getInputProps('email')}
                />

                <PasswordInput
                    autoComplete={'current-password'}
                    required
                    label={t('passwordLabel')}
                    placeholder={t('passwordPlaceholder')}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                    {...getInputProps('password')}
                />

                <Button sx={{ marginTop: '20px' }} type="submit">
                    {t('loginButton')}
                </Button>

                <Text onClick={handleForgotPassword} size="xs" sx={{ cursor: 'pointer' }}>
                    {t('forgotPassword')}
                </Text>
            </form>
        </SMContainer>
    )
}
