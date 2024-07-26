import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Birthdays</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-den-va-tr-ng-chuy-n-bay-chim-bay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                        Celebrate
                    </button>
                </div>
            </div>
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image
                    src="/gift.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-semibold">Upcoming Birtdays</span>
                    <span className="text-gray-500">See other 20 have upcoming birtdays</span>
                </Link>
            </div>
        </div>
    );
};

export default Birthdays;
