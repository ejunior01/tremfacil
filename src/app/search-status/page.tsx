"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { newOccurrenceSchema } from "@/types/newOccurrenceSchema"


const statusSchema = newOccurrenceSchema.omit({ occurrence: true });

export default function SeachStatus() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof statusSchema>>({
        resolver: zodResolver(statusSchema)
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof statusSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (

        <Card className="w-full lg:w-4/5 mx-auto p-4 flex flex-col gap-4">
            <CardHeader>
                <CardTitle className="text-xl">Visualizar Status de uma Estação</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 box-border">
                        <FormField
                            control={form.control}
                            name="line"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-1 items-start">
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

                        <div className="flex gap-12 justify-between mt-6">
                            <Button className="flex-1" variant="outline">Cancelar</Button>
                            <Button className="flex-1" type="submit">Buscar</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>



    )
}
