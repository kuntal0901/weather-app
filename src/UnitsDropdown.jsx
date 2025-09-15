import { useEffect, useRef, useState } from "react";
import iconCheckMark from "./assets/icons/icon-checkmark.svg";
import iconDropdown from "./assets/icons/icon-dropdown.svg";
import iconUnits from "./assets/icons/icon-units.svg";
import { imperialUnits, metricUnits, weatherUnits } from "./weatherConstants";

export default function UnitsDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMetric, setIsMetric] = useState(true);
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
            <div className="flex gap-[10px] text-preset-7 rounded-[8px] px-[16px] py-[12px] bg-(--neutral-800) cursor-pointer" onClick={() => setShowDropdown((value) => !value)}>
                <img src={iconUnits} alt="settings-icon" />
                <div>Units</div>
                <img src={iconDropdown} alt="dropdown-icon" />
            </div>
            {showDropdown ? (
                <div className="py-[8px] px-[6px] rounded-[12px] bg-(--neutral-800) border border-(--neutral-600) shadow-(--box-shadow-2) absolute right-[0px] w-[214px] mt-[4px]" ref={dropdownContentRef}>
                    <div className="px-[8px] py-[10px] mb-[4px] rounded-[8px] text-preset-7 cursor-pointer hover:bg-(--neutral-700) active:bg-(--neutral-700) focus:bg-(--neutral-700) focus:shadow-(--box-shadow-1)" onClick={() => {
                        setIsMetric((value) => !value);
                        setShowDropdown(false);
                    }
                    }>
                        {`Switch to ${isMetric ? "Imperial" : "Metric"}`}
                    </div>
                    {weatherUnits.map((obj = {}) => {
                        const { id = "", name = "", value = [] } = obj;
                        return (
                            <div key={id}>
                                <div className="mb-[8px] px-[8px] pt-[6px] text-preset-8 text-(--neutral-300)">{name}</div>
                                {value.map((valObj = {}) => {
                                    const { id: valId = "", name: valName = "" } = valObj;
                                    const isSelected = isMetric ? metricUnits[id] === valId : imperialUnits[id] === valId
                                    return (
                                        <div className={`flex justify-between cursor-pointer px-[8px] py-[10px] rounded-[8px] mb-[4px] text-preset-7 hover:bg-(--neutral-700) active:bg-(--neutral-700) focus:bg-(--neutral-700) focus:shadow-(--box-shadow-1) ${isSelected ? 'bg-(--neutral-700)' : ''}`
                                        } key={valId}>
                                            <div className="">{valName}</div>
                                            {isSelected ? <img src={iconCheckMark} alt="iconCheckMark" /> : null}
                                        </div>

                                    );
                                })}
                                {id !== "pre" && <div className="h-[9px] bg-(--neutral-600) py-[4px] bg-clip-content" />}
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
