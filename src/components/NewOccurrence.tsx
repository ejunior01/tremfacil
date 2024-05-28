"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// const NewOccurrenceFormSchema = z.object({
//     occurrence: z.number({
//         invalid_type_error: "Invalid occurrence",
//         required_error: "O campo ocorrência é obrigatório",
//     }),
//     line: z.number({
//         invalid_type_error: "Invalid line",
//         required_error: "O campo linha é obrigatório",
//     }),
//     station: z.number({
//         invalid_type_error: "Invalid station",
//         required_error: "O campo estação é obrigatório",
//     }),
// })


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createOccurrence } from "@/app/actions";
import { toast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";

type stationsType = {
   :{
    id: number,
        name: string,
            number: number
}
}


type linesType = {
    id: number,
    name: string,
    number: number,
    operator: {
        name: string
    },
    StationLines: stationsType[]
}



export function NewOccurrence() {

    const form = useForm();


    const [lines, setLines] = useState<linesType[]>([]);
    const [selectedLine, setSelectedLine] = useState<number | string>(6);
    const [stations, setstations] = useState<stationsType[]>([]);



    useEffect(() => {
        const fetchLinesDetails = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/lines-details`, {
                    next: { tags: ['lines-details'], revalidate: 10000 }
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setLines(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLinesDetails();
    }, []);



    const handleLineChange = (lineId: string | number) => {
        setSelectedLine(selectedLine)
        const selectedLineDetails = lines.find((line) => line.id === Number(lineId));
        const stationsFilter = selectedLineDetails?.StationLines || [];
        setstations(stationsFilter);
    };

    // const onSubmit = form.handleSubmit(async data => {

    //     const response = await createOccurrence(data);
    //     if (response?.error) {
    //         console.log(response?.error)
    //     } else {
    //         form.reset()

    //     }
    // });

    return (
        <Card
            className="sm:col-span-2 flex flex-col justify-between" x-chunk="dashboard-05-chunk-0"
        >
            <CardHeader className="pb-3">
                <CardTitle>Relatar um problema</CardTitle>
                <CardDescription className="max-w-lg leading-relaxed">
                    Reporte problemas, atrasos ou outras questões relacionadas ao serviço de trens.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full">Selecionar</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:min-w-[500px] lg:min-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Relatar um problema</DialogTitle>
                        </DialogHeader>
                        <Form {...form} >
                            <form className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="line"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Linhas</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={(value) => {
                                                    field.onChange(value);
                                                    handleLineChange(value);
                                                }}
                                                    defaultValue={String(field.value)}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione a linha" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Linhas</SelectLabel>
                                                            {lines.map((line) => (
                                                                <SelectItem key={line.id} value={String(line.id)}>
                                                                    {line.number} - {line.name}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="station"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Estações</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={String(field.value)}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione a estação" className="placeholder:text-yellow-400" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Estações</SelectLabel>
                                                            {stations.map((item) => (
                                                                <SelectItem key={item.Station.id} value={String(item.Station.id)}>
                                                                    {item.Station.name}
                                                                </SelectItem>
                                                            )
                                                            )}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
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
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={String(field.value)}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Informe a ocorrência" className="placeholder:text-yellow-400" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Ocorrências</SelectLabel>
                                                            <SelectItem key={1} value={"1"}>
                                                                Acidente
                                                            </SelectItem>
                                                            <SelectItem key={2} value={"2"}>
                                                                Via interditada
                                                            </SelectItem>
                                                            <SelectItem key={3} value={"3"}>
                                                                Velocidade reduzida
                                                            </SelectItem>
                                                            <SelectItem key={4} value={"4"}>
                                                                Superlotação
                                                            </SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant={"outline"}>Cancelar</Button>
                                    </DialogClose>
                                    <Button type="submit">Registrar</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card >
    )
}








