import { Layout } from '@/components/Layout'
import { LoginForm } from '@/components/LoginForm'
import { SignupForm } from '@/components/SignupForm'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
        <SignupForm />
        <LoginForm />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  )
} 
