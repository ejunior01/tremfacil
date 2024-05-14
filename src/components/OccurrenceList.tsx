import { Occurrence } from "@/components/Occurrence";


export function OccurrenceList() {
    return (
        <ul className="flex gap-5 flex-col scroll-smooth" >
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Roadblocked" />
                <Occurrence.Footer />
            </Occurrence.Root>
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Roadblocked" />
                <Occurrence.Footer />
            </Occurrence.Root>
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Stationclosed" />
                <Occurrence.Footer />
            </Occurrence.Root>
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Roadblocked" />
                <Occurrence.Footer />
            </Occurrence.Root>
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Roadblocked" />
                <Occurrence.Footer />
            </Occurrence.Root>
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Roadblocked" />
                <Occurrence.Footer />
            </Occurrence.Root>
            <Occurrence.Root>
                <Occurrence.Header />
                <Occurrence.Type eventType="Roadblocked" />
                <Occurrence.Footer />
            </Occurrence.Root>
        </ul>
    )
}