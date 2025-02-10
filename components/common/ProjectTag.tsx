"use client"

type ButtonP = {
    title: string;
    isActive: boolean;
    onClick: (val?: any) => void;
};

export const ProjectTags = ({title, isActive, onClick}:ButtonP) => {
    const btnStyle =  isActive ? "text-white border-purple-500":"text-[#ADB7BE] border-slate-600 hover:border-white"
    return(
    <button
        className={`${btnStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={()=>{onClick(title)}}
    >
        {title}
    </button>)
}