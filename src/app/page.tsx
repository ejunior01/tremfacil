import { Occurrence } from "@/components/Occurrence";
import { UserOptionsList } from "@/components/UserOptionsList";

export default function Home() {
  return (
    <main className="flex gap-8 flex-col">
      <UserOptionsList />
      <section>
        <div className="flex justify-between mb-6 items-center">
          <h2 className="text-2xl font-medium text-gray-500">Últimas ocorrências</h2>
          <span className="text-base font-medium text-gray-300">Ver todas</span>
        </div>
        <ul className="flex gap-5 flex-col md:grid grid-cols-3" >
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
        </ul>
      </section>
    </main >
  );
}
