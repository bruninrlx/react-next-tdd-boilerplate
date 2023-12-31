'use client'
import Header from '@/components/global_components/header'
import InputForm from '@/components/hook-form-components/input/Input'
import InputMaskForm from '@/components/hook-form-components/input/InputMask'
import InputMoneyForm from '@/components/hook-form-components/input/InputMoney'
import InputNumberForm from '@/components/hook-form-components/input/InputNumber'
import { Values, schema } from '@/data/form_resources/form-schemas/checkout'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
    </main>
  )
}
