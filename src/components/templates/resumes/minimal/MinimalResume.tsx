import type {Resume} from "@/types/resume";
import {getResumeColorTheme} from "@/lib/resume-colors";

interface MinimalResumeProps {
    resume: Resume;
}

export default function MinimalResume({resume}: MinimalResumeProps ){
    const theme = getResumeColorTheme(resume.color);

    return(
        <article className="
                mx-auto aspect-[210/297] w-full max-w-[950px]
                overflow-hidden bg-white px-[38px] py-[34px]
                text-slate-700 shadow-md
                transition-shadow duration-300
                hover:shadow-2xl
                print:max-w-none print:shadow-none
            "
            >

        </article>
    )
}