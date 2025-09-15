import { useEffect, useRef, useState } from "react";
import iconSearch from './assets/icons/icon-search.svg';
import { fetchLocations, useDebounce } from "./weatherUtils";

export default function SearchContainer({ onSearch = () => { } }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownContentRef = useRef(null);

    const [selectedCity, setSelectedCity] = useState('');
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState([]);

    const debouncedSearch = useDebounce(selectedCity, 2000);

    useEffect(() => {
        if (!debouncedSearch) return;

        const fetchData = async () => {
            try {
                const result = await fetchLocations(debouncedSearch);
                setLocations(result.results);
                console.log("Fetched locations:", result);
            } catch (err) {
                console.error("Error fetching locations:", err);
            }
        };

        fetchData();
    }, [debouncedSearch]);

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
                    <input className='text-preset-5-medium h-[100%] w-[100%] focus:outline-none' placeholder="Search for a place..." value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)} />
                </div>
                {showDropdown ? (
                    <div className="p-[8px] w-full rounded-[12px] bg-(--neutral-800) shadow-(--box-shadow-2) absolute right-[0px]  mt-[4px]" ref={dropdownContentRef}>
                        {locations.map((data = {}) => {
                            const { id = '', name = '' } = data;
                            return (
                                <div
                                    key={id}
                                    className={`px-[8px] py-[10px] rounded-[8px] text-preset-7 cursor-pointer hover:bg-(--neutral-700) ' : ''}`}
                                    onClick={() => {
                                        setSelectedCity(name);
                                        setLocation(data);
                                        setShowDropdown(false);
                                    }}>
                                    {name}
                                </div>
                            )

                        })}
                    </div>
                ) : null
                }
            </div>

            <input className='px-[24px] py-[16px] rounded-[12px] bg-(--blue-500) text-preset-5-medium hover:bg-(--blue-700) focus:shadow-(--box-shadow-3 cursor-pointer' type="submit" value="Search" onClick={() => { onSearch(location) }} />
        </div >
    )
}
