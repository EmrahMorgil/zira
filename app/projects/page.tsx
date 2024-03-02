"use client"
import React, { useState } from 'react'
import $ from "jquery";

const Projects = () => {

    const [widgets, setWidgets] = useState<string>("");


    const review = {
        open: "<div class='w-20 h-20 bg-red-700 flex justify-center items-center' draggable='true'>Widget A</div>",
        inprogress: "", review: "", done: ""
    };

    const handleOnDrag = (e: React.DragEvent<HTMLDivElement>) => {

        console.log(e);

        // e.dataTransfer.setData("widget", e.target);
    }

    const handleOnDrop = (e: React.DragEvent) => {
        const widgetType = e.dataTransfer.getData("widget") as string;
        var divElement = document.createElement("div") as any;
        divElement.innerHTML = widgetType;
        var id = divElement.firstChild.id
        // $()
        $("#" + id).remove();
        console.log(id);
        setWidgets(widgets + widgetType);
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    return (
        <div className='m-10 flex gap-5'>
            <div className='w-20 h-60 border-4 border-black' onDrop={handleOnDrop} onDragOver={handleDragOver}>
                <div id='test1' className='w-20 h-20 bg-red-700 flex justify-center items-center' draggable onDragStart={(e) => handleOnDrag(e)}>
                    Widget A
                </div>
                <div id='test2' className='w-20 h-20 bg-red-700 flex justify-center items-center' draggable onDragStart={(e) => handleOnDrag(e)}>
                    Widget B
                </div>
                <div id='test3' className='w-20 h-20 bg-red-700 flex justify-center items-center' draggable onDragStart={(e) => handleOnDrag(e)}>
                    Widget C
                </div>
            </div>

            <div className='w-20 h-60 border-4 border-black' onDrop={handleOnDrop} onDragOver={handleDragOver}
                dangerouslySetInnerHTML={{ __html: widgets }} />

            <div>




                <div className='text-center'>open</div>
                <div className='w-20 h-60 border-4 border-black'
                    dangerouslySetInnerHTML={{ __html: review.open }}
                >
                </div>
            </div>

            <div>
                <div className='text-center'>in progress</div>
                <div className='w-20 h-60 border-4 border-black'
                    dangerouslySetInnerHTML={{ __html: review.inprogress }}
                >
                </div>
            </div>

            {/* <div>
                <div className='text-center'>review</div>
                <div className='w-20 h-60 border-4 border-black'
                    dangerouslySetInnerHTML={{ __html: review.review }}
                >
                </div>
            </div>

            <div>
                <div className='text-center'>done</div>
                <div className='w-20 h-60 border-4 border-black'
                    dangerouslySetInnerHTML={{ __html: review.done }}
                >
                </div>
            </div> */}

        </div>
    )
}

export default Projects