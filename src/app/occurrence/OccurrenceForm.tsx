"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { occurrence } from "@/types/occurrence"
import { createOccurrence } from "@/actions/createOccurrence"

function onSubmit(values: z.infer<typeof occurrence>) {
    createOccurrence(values)
}


export function OccurrenceForm() {

    const form = useForm<z.infer<typeof occurrence>>({
        resolver: zodResolver(occurrence)
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 box-border">
                <FormField
                    control={form.control}
                    name="line"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Linha</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a linha" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="7">7 - Rubi</SelectItem>
                                    <SelectItem value="8">8 - Diamante</SelectItem>
                                    <SelectItem value="9">9 - Esmeralda</SelectItem>
                                    <SelectItem value="10">10 - Turquesa</SelectItem>
                                    <SelectItem value="11">11 - Coral</SelectItem>
                                    <SelectItem value="12">12 - Safira</SelectItem>
                                    <SelectItem value="13">13 - Jade</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="station"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estação</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a estação" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="berrine">Berrine</SelectItem>
                                    <SelectItem value="osasco">Osasco</SelectItem>
                                    <SelectItem value="ceasa">Ceasa</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="occurrence"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ocorrência</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a ocorrência" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="accident">Acidente</SelectItem>
                                    <SelectItem value="roadblocked">Via interditada</SelectItem>
                                    <SelectItem value="Stationclosed">Estação fechada</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button className="my-5" type="submit">
                    Enviar ocorrência
                </Button>
            </form>
        </Form>
    )
}
