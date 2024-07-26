import Image from 'next/image';

const Comments = () => {
    return (
        <div className="">
            <div className="flex items-center gap-4">
                <Image
                    src="https://images.pexels.com/photos/21533296/pexels-photo-21533296/free-photo-of-den-va-tr-ng-thanh-ph-m-c-cac-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    height={32}
                    width={32}
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                />
                <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="bg-transparent outline-none"
                    />
                    <Image
                        src="/emoji.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex gap-4 justify-between mt-6">
                    <Image
                        src="https://images.pexels.com/photos/21533296/pexels-photo-21533296/free-photo-of-den-va-tr-ng-thanh-ph-m-c-cac-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        height={40}
                        width={40}
                        alt=""
                        className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Phan Ba Du</span>
                        <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                            nulla icidunt magni veritatis totam laudantium optio quis necessitatibus
                            obcaecati. Requdiandae fuga ut praesentium ea deleniti dolorum facere
                            asperiores
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/like.png"
                                    alt=""
                                    width={12}
                                    height={12}
                                    className="cursor-pointer w-4 h-4"
                                />
                                <span className="text-gray-300"></span>
                                <span className="text-gray-300">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    <Image
                        src="/more.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer w-4 h-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Comments;
