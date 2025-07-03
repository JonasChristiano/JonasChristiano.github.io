type Props = {
    t: {
        title: string;
        subtitle: string;
        description: string;
    };
};


export default function Home({ t }: Props) {
    return (
        <section className="flex flex-col items-center justify-center h-screen" id="home">
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <h2 className="text-2xl font-semibold">{t.subtitle}</h2>
            <p className="mt-4 text-lg text-center">{t.description}</p>
        </section>
    );
}