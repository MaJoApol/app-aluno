export default function Hero() {
    return (
        <>
            <section
                className="
                hidden md:flex
                md:flex-1 md:max-w-[50%]
                bg-emerald-900
                flex-col items-start justify-center
                text-left p-20 gap-8
            "
            >
                <p className="text-5xl font-bold text-white">
                "Educação não é o aprendizado de fatos, mas treinamento da mente para
                pensar."
                </p>
                <p className="text-md font-bold text-white">Albert Einstein</p>
            </section>
        </>
    );
}