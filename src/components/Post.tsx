import Comments from '@/components/Comments';
import Image from 'next/image';

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/18173391/pexels-photo-18173391/free-photo-of-den-va-tr-ng-thanh-ph-d-ng-ph-d-ng-di-b.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">Jack 97</span>
                </div>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image
                        src="https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-new-york-d-n-s-c-tren.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla
                    icidunt magni veritatis totam laudantium optio quis necessitatibus obcaecati.
                    Requdiandae fuga ut praesentium ea deleniti dolorum facere asperiores
                </p>
            </div>
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/like.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline">Likes</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/comment.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline">Comments</span>
                        </span>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/share.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline">Shares</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default Post;
