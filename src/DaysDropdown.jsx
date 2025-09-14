import { useEffect, useRef, useState } from "react";
import iconDropdown from "./assets/icons/icon-dropdown.svg";
import { days } from "./weatherConstants";

export default function DaysDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDay, setIsSelectedDay] = useState("Tuesday");
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
        <div className="relative">
            <div className="flex gap-[12px] text-preset-7 rounded-[8px] px-[16px] py-[8px] bg-(--neutral-600) cursor-pointer" onClick={() => setShowDropdown((value) => !value)}>
                <div>{selectedDay}</div>
                <img src={iconDropdown} alt="dropdown-icon" />
            </div>
            {showDropdown ? (
                <div className="p-[8px] rounded-[12px] bg-(--neutral-800) border border-(--neutral-600) shadow-(--box-shadow-2) absolute right-[0px] w-[214px] mt-[4px]" ref={dropdownContentRef}>
                    {days.map((data = {}) => {
                        const { id = '', name = '' } = data;
                        const isSelected = name === selectedDay;
                        return (
                            <div
                                key={id}
                                className={`px-[8px] py-[10px] mb-[4px] rounded-[8px] text-preset-7 cursor-pointer hover:bg-(--neutral-700) active:bg-(--neutral-700) focus:bg-(--neutral-700) focus:shadow-(--box-shadow-1) ${isSelected ? 'bg-(--neutral-700)' : ''}`}
                                onClick={() => { setIsSelectedDay(name) }}>
                                {name}
                            </div>
                        )

                    })}
                </div>
            ) : null
            }
        </div >
    );
}
