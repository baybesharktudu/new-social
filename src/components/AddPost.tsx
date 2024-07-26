import Image from 'next/image';

const AddPost = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            <Image
                width={48}
                height={48}
                src="https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-den-va-tr-ng-ca-phe-c-c-ban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="imagePic"
                className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex-1">
                <div className="flex gap-4">
                    <textarea
                        className="flex-1 rounded-lg p-2"
                        placeholder="What's on your mind?"
                    ></textarea>
                    <Image
                        width={20}
                        height={20}
                        src="/emoji.png"
                        alt="imagePic"
                        className="w-5 h-5 cursor-pointer self-end"
                    />
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            width={20}
                            height={20}
                            src="/addimage.png"
                            alt="imagePic"
                            className="w-5 h-5 cursor-pointer self-end"
                        />{' '}
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            width={20}
                            height={20}
                            src="/addVideo.png"
                            alt="imagePic"
                            className="w-5 h-5 cursor-pointer self-end"
                        />{' '}
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            width={20}
                            height={20}
                            src="/poll.png"
                            alt="imagePic"
                            className="w-5 h-5 cursor-pointer self-end"
                        />{' '}
                        Poll
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            width={20}
                            height={20}
                            src="/addevent.png"
                            alt="imagePic"
                            className="w-5 h-5 cursor-pointer self-end"
                        />{' '}
                        Event
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
