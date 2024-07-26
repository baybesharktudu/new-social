import Image from 'next/image';

const ProfileCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image
                    src="https://images.pexels.com/photos/27139481/pexels-photo-27139481/free-photo-of-bi-n-den-va-tr-ng-binh-minh-phong-c-nh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    className="rounded-md"
                />
                <Image
                    src="https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-th-i-trang-dan-ong-yeu-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
                />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">Edward Gabreil</span>
                <div className="flex items-center gap-4">
                    <div className="flex gap-1 items-center">
                        <Image
                            src="https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-th-i-trang-dan-ong-yeu-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full object-cover w-3 h-3"
                        />
                        <Image
                            src="https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-th-i-trang-dan-ong-yeu-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full object-cover w-3 h-3"
                        />
                        <Image
                            src="https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-th-i-trang-dan-ong-yeu-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full object-cover w-3 h-3"
                        />
                        <span className="text-xs text-gray-500">500 Followers</span>
                        <button className="bg-blue-500 text-white text-xs p-2 rounded-md"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
