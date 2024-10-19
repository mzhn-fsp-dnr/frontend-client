import Button from "../components/button";

export default function Page() {
  return (
    <section className="flex h-full flex-col gap-4 py-8">
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold text-cyan-700 first:mt-0">
        Номер талона
      </h2>
      <h1 className="my-2 text-center text-9xl font-bold">A278</h1>
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold text-cyan-700 first:mt-0">
        Окошки: <span>1, 2, 3</span>
      </h2>
      <div className="mt-auto flex justify-center">
        <Button className="grow">Распечатать</Button>
      </div>
    </section>
  );
}
