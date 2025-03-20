export default function LatestNews() {
    return (
        <>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:p-4">
                <div className="relative md:col-span-2 relative">
                    <img
                        src="/img/news/gt-featured-post.webp"
                        alt="Featured News"
                        className="w-full h-full object-cover rounded-md md:absolute md:inset-0 "
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                    <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-[#bd9e5e] text-black text-xs font-bold px-2 py-1 rounded">
                            6 Hours ago • Global Impact
                        </span>
                        <h2 className="mt-2 font-xs leading-4 md:font-bold md:text-2xl md:leading-none">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
                            dolores deleniti aliquam ea obcaecati? Repellat.
                        </h2>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 tracking-tight">Latest Posts</h3>
                    <div className="space-y-4">
                        {[
                            {
                                image: '/img/news/gt-latest-post-1.webp',
                                time: '2 min read',
                                category: 'News',
                                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, facilis!',
                            },
                            {
                                image: '/img/news/gt-latest-post-2.webp',
                                time: '1 min read',
                                category: 'News',
                                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, facilis!',
                            },
                            {
                                image: '/img/news/gt-latest-post-3.webp',
                                time: '1 min read',
                                category: 'News',
                                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, facilis!',
                            },
                            {
                                image: '/img/news/gt-latest-post-4.webp',
                                time: '2 min read',
                                category: 'News',
                                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, facilis!',
                            },
                        ].map((post, index) => (
                            <div key={index} className="flex space-x-3 items-center">
                                <img
                                    src={post.image}
                                    alt="Post"
                                    className="w-22 h-22 object-cover rounded-full"
                                />
                                <div>
                                    <span className="text-xs text-gray-500">
                                        <span className="mr-2">{post.time}</span>•
                                        <span className="text-blue-500 ml-2">{post.category}</span>
                                    </span>
                                    <p className="font-semibold text-sm">{post.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
