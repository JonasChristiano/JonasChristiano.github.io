type Props = {
    t: {
        title: string;
        description: string;
    };
};

export default function About({t}: Props) {
    return (
        <section className="flex flex-col items-center justify-center h-screen" id="about">
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <p className="mt-4 text-lg text-start whitespace-pre-line">{t.description}</p>
        </section>
    );
}