'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
    name: string
}

export function SubmitButton({ name }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending}>
            {name}
        </button>
    )
}