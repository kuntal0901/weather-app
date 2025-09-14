import iconSearch from './assets/icons/icon-search.svg';
export default function SearchContainer() {
    return (
        <div className='flex gap-[16px] mb-[48px] justify-center'>
            <div className='flex w-[526px] gap-[16px] px-[24px] py-[16px] rounded-[12px] bg-(--neutral-800) color-(--neutral-200)'>
                <img src={iconSearch} alt="iconSearch" />
                <div className='text-preset-5-medium'>Search for a place...</div>
            </div>
            <div className='px-[24px] py-[16px] rounded-[12px] bg-(--blue-500) text-preset-5-medium hover:bg-(--blue-700) focus:shadow-(--box-shadow-3 cursor-pointer'>Search</div>
        </div>
    )
}
