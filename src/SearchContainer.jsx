import { useEffect, useRef, useState } from "react";
import iconSearch from './assets/icons/icon-search.svg';
import { days } from './weatherConstants';
export default function SearchContainer() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCity, setIsSelectedCity] = useState(null);
    const dropdownContentRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (showDropdown && dropdownContentRef.current && !dropdownContentRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [showDropdown])
    return (
        <div className='flex gap-[16px] mb-[48px] justify-center'>
            <div className='relative w-[526px]'>
                <div className='flex  gap-[16px] px-[24px] py-[16px] rounded-[12px] bg-(--neutral-800) color-(--neutral-200) hover:bg-(--neutral-700) focus:shadow-(--box-shadow-4)' onClick={() => setShowDropdown((value) => !value)}>
                    <img src={iconSearch} alt="iconSearch" />
                    <div className='text-preset-5-medium'>{selectedCity ? selectedCity : 'Search for a place...'}</div>
                </div>
                {showDropdown ? (
                    <div className="p-[8px] w-full rounded-[12px] bg-(--neutral-800) shadow-(--box-shadow-2) absolute right-[0px]  mt-[4px]" ref={dropdownContentRef}>
                        {days.map((data = {}) => {
                            const { id = '', name = '' } = data;
                            return (
                                <div
                                    key={id}
                                    className={`px-[8px] py-[10px] rounded-[8px] text-preset-7 cursor-pointer hover:bg-(--neutral-700) ' : ''}`}
                                    onClick={() => { setIsSelectedCity(name) }}>
                                    {name}
                                </div>
                            )

                        })}
                    </div>
                ) : null
                }
            </div>

            <div className='px-[24px] py-[16px] rounded-[12px] bg-(--blue-500) text-preset-5-medium hover:bg-(--blue-700) focus:shadow-(--box-shadow-3 cursor-pointer'>Search</div>
        </div >
    )
}
