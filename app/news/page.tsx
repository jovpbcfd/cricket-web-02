import Image from "next/image";

export default function Page() {
    // const newsData = [
    //     {
    //         id: 1,
    //         title: "Суд Европейской отключил иск к «Северного потока» по газовым нормам",
    //         description:
    //             "Европейский суд отклонил иск Nord Stream AG о недействительности Газовой директивы ЕС...",
    //         image: "/img/news/news-post-1.webp",
    //         category: "Политика",
    //         featured: true,
    //     },
    //     {
    //         id: 2,
    //         title: "Рынок ВДНХ сокращает объёмы производства",
    //         image: "/img/news/news-post-2.webp",
    //         category: "Экономика",
    //     },
    //     {
    //         id: 3,
    //         title: "Границу Венгрии и Словакии частично закрывают",
    //         image: "/img/news/news-post-3.webp",
    //         category: "Общество",
    //     },
    //     {
    //         id: 4,
    //         title: "Украина подала Крыму новые предложения",
    //         image: "/img/news/news-post-4.webp",
    //         category: "Политика",
    //     },
    //     {
    //         id: 5,
    //         title: "Title",
    //         image: "/img/news/news-post-5.webp",
    //         category: "Наука",
    //     },
    //     {
    //         id: 6,
    //         title: "Title",
    //         image: "/img/news/news-post-6.webp",
    //         category: "Общество",
    //     },
    // ];

    const articles = [
        {
            id: 1,
            title: "Featured Article",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus incidunt ipsum porro.",
            image: "/img/news/news-post-6.webp",
            featured: true,
        },
        {
            id: 2,
            title: "Small Article 1",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/img/news/news-post-2.webp",
        },
        {
            id: 3,
            title: "Small Article 2",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/img/news/news-post-3.webp",
        },
        {
            id: 4,
            title: "Small Article 3",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/img/news/news-post-4.webp",
        },
        {
            id: 5,
            title: "Row Article 1",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/img/news/news-post-5.webp",
        },
        {
            id: 6,
            title: "Row Article 2",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/img/news/news-post-6.webp",
        },
        {
            id: 7,
            title: "Row Article 3",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/img/news/news-post-6.webp",
        },
    ];
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Top Section */}
            <h2 className="text-2xl font-bold mb-6">Title</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Featured Article */}
                {articles
                    .filter((article) => article.featured)
                    .map((article) => (
                        <div key={article.id} className="md:col-span-2">
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={800}
                                height={500}
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                            />
                        </div>
                    ))}

                {/* Small Articles on the Right */}
                <div className="flex flex-col justify-between h-[calc(100vh-100px)]">
                    {articles
                        .filter((article) => !article.featured && article.id <= 4)
                        .map((article) => (
                            <div key={article.id} className="flex space-x-4">
                                <div>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-lg"
                                    />
                                </div>
                                <div className="self-center">
                                    <h3>{article.title}</h3>
                                    <p className="text-sm">{article.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>



            {/* Bottom Row */}
            <h2 className="text-2xl font-bold mt-10 mb-6">Title</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles
                    .filter((article) => article.id > 4)
                    .map((article) => (
                        <div key={article.id} className="space-y-2">
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={300}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <h3 className="font-semibold">{article.title}</h3>
                            <p className="text-sm">{article.description}</p>
                        </div>
                    ))}
            </div>
        </section>
    )
}