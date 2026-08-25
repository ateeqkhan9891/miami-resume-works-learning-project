import TemplatePageBackground from "@/components/templates/TemplatePageBackground";
import ResumeTemplatesHero from "@/sections/resume-templates/ResumeTemplatesHero";
import ResumeTemplateFilters from "@/sections/resume-templates/ResumeTemplateFilters";
import BackgroundPattern from "@/components/marketing/BackgroundPattern";

import TemplateGrid from "@/components/templates/TemplateGrid";

export default function ResumeTemplatesPage() {
  return (
       <>

         <TemplatePageBackground>
         <BackgroundPattern>
          <ResumeTemplatesHero />
          <ResumeTemplateFilters />
          <TemplateGrid />
        </BackgroundPattern>
      </TemplatePageBackground>
              
       </>
    
  );
}