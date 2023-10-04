import React from "react";
import CourseContentListSection from "./course_content_list_section";
import CourseVideoViewSection from "./course_video_view_section";
import CourseDetailsSection from "./course_details_section";

export default function VideoCoursePage() {
  return (
    <section>
     <div className=" flex justify-center items-start h-80v   ">
        <div className="flex-2 justify-center items-center w-80  ">
             <CourseContentListSection />
        </div>
        <div className="flex-1  h-80v justify-end   ">
        <CourseVideoViewSection />
        </div>
      </div>

      <div><CourseDetailsSection/></div>

    </section>
  );
}
