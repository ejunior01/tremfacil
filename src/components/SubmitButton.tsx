'use client'

import { Button } from '@/components/ui/Button'
import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
    name: string
}

export function SubmitButton({ name }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button className="my-5" type="submit" disabled={pending}>
            {name}
        </Button>
    )
}